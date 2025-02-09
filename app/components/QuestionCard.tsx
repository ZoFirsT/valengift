'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Choice } from '../types';
import { useState } from 'react';
import { FaHeart, FaStar, FaArrowLeft } from 'react-icons/fa';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  choices: Choice[];
  onSelect: (choiceId: string) => void;
  onBack: () => void;
  loading?: boolean;
}

export default function QuestionCard({
  questionNumber,
  totalQuestions,
  question,
  choices,
  onSelect,
  onBack,
  loading = false,
}: QuestionCardProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = async (choiceId: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedChoice(choiceId);
    
    // รอให้แอนิเมชันเสร็จก่อนไปข้อถัดไป
    await new Promise(resolve => setTimeout(resolve, 500));
    onSelect(choiceId);
    setSelectedChoice(null);
    setIsAnimating(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 relative"
    >
      {/* Add loading indicator */}
      {loading && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center rounded-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500" />
        </div>
      )}

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-medium text-pink-600"
          >
            คำถามที่ {questionNumber} จาก {totalQuestions}
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1"
          >
            {[...Array(totalQuestions)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < questionNumber ? 'bg-pink-500' : 'bg-pink-200'
                }`}
              />
            ))}
          </motion.div>
        </div>
        <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((questionNumber) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500"
          />
        </div>
      </div>

      {/* Question */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-8 text-center"
      >
        {question}
      </motion.h2>

      {/* Choices */}
      <div className="grid gap-4">
        <AnimatePresence mode="wait">
          {choices.map((choice) => (
            <motion.button
              key={choice.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(choice.id)}
              className={`relative p-6 text-left border-2 rounded-xl transition-all ${
                selectedChoice === choice.id
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-100 hover:border-pink-200 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  selectedChoice === choice.id
                    ? 'bg-pink-200'
                    : 'bg-pink-100 group-hover:bg-pink-200'
                }`}>
                  <FaHeart className={`text-xl ${
                    selectedChoice === choice.id
                      ? 'text-pink-600'
                      : 'text-pink-500'
                  }`} />
                </div>
                <span className="text-lg text-gray-700">{choice.text}</span>
                {selectedChoice === choice.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-4 text-pink-500"
                  >
                    <FaStar />
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Question Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-center text-sm text-gray-500"
      >
        เหลืออีก {totalQuestions - questionNumber} คำถาม
      </motion.div>

      {/* Back Button */}
      {questionNumber > 1 && (
        <motion.button
          onClick={onBack}
          className="mt-4 p-2 text-pink-500"
        >
          <FaArrowLeft />
        </motion.button>
      )}
    </motion.div>
  );
} 