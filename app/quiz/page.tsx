'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { questions } from '../data';
import BudgetSelector from '../components/BudgetSelector';
import QuestionCard from '../components/QuestionCard';
import confetti from 'canvas-confetti';
import { FaExclamationTriangle } from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';

interface SystemStatus {
  isAvailable: boolean;
  load: number;
  message: string;
  estimatedWaitTime: number;
}

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState<'budget' | 'questions'>('budget');
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  const handleBudgetSelect = (budgetId: string) => {
    setSelectedBudget(budgetId);
    setStep('questions');
    
    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const formatPayload = (answers: string[]) => {
    return answers.map((choice, index) => {
      // Convert choice ID (e.g., "1a", "2b") to number (1-4)
      const choiceNumber = ['a', 'b', 'c', 'd'].indexOf(choice.slice(-1)) + 1;
      return `${index + 1}:${choiceNumber}`;
    }).join('\n');
  };

  const handleAnswer = async (choiceId: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = choiceId;

    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(curr => curr + 1);
    } else {
      setLoading(true);
      try {
        const payload = formatPayload(newAnswers);
        const response = await fetch('/api/gemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            body: payload,
            budget: selectedBudget + ' บาท'
          }),
        });

        const data = await response.json();
        if (response.ok) {
          router.push(`/results?data=${encodeURIComponent(data.output)}`);
        } else {
          console.error('API Error:', data.error);
        }
      } catch (error) {
        console.error('Failed to get recommendations:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(curr => curr - 1);
      setAnswers(prevAnswers => prevAnswers.slice(0, -1)); // ลบคำตอบล่าสุด
    } else {
      setStep('budget'); // ถ้าย้อนกลับจากคำถามแรก ให้กลับไปหน้าเลือกงบประมาณ
    }
  };

  useEffect(() => {
    const checkSystemStatus = async () => {
      try {
        const response = await fetch('/api/system-status');
        const status = await response.json();
        setSystemStatus(status);
      } catch (error) {
        console.error('Failed to check system status:', error);
      } finally {
        setIsChecking(false);
      }
    };

    checkSystemStatus();
    const interval = setInterval(checkSystemStatus, 30000); // เช็คทุก 30 วินาที
    return () => clearInterval(interval);
  }, []);

  if (isChecking) {
    return <LoadingSpinner />;
  }

  if (systemStatus && !systemStatus.isAvailable) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="mb-6"
            >
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
                <FaExclamationTriangle className="text-pink-500 text-2xl" />
              </div>
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {systemStatus.message}
            </h2>
            <p className="text-gray-600 mb-6">
              ระบบกำลังทำงานที่ {Math.round(systemStatus.load)}% ของความสามารถ
              {systemStatus.estimatedWaitTime > 0 && (
                <><br />เวลารอโดยประมาณ: {systemStatus.estimatedWaitTime} นาที</>
              )}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <motion.div
                className="bg-pink-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${systemStatus.load}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
            >
              ลองใหม่อีกครั้ง
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="sync">
            {step === 'budget' ? (
              <motion.div
                key="budget"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
              >
                <BudgetSelector onSelect={handleBudgetSelect} />
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
              >
                <QuestionCard
                  questionNumber={currentQuestion + 1}
                  totalQuestions={questions.length}
                  question={questions[currentQuestion].text}
                  choices={questions[currentQuestion].choices}
                  onSelect={handleAnswer}
                  onBack={handleBack}
                  loading={loading}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
