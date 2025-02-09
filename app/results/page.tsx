'use client';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { FaHeart, FaShare, FaDownload, FaRedo } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Results() {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  
  // แปลง data จาก URL-encoded string กลับมาเป็นข้อความปกติ
  const decodedData = data ? decodeURIComponent(data) : '';
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ผลการวิเคราะห์ของขวัญจาก ValenGift',
          text: decodedData,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([decodedData], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'valengift-recommendations.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 mb-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">ผลการวิเคราะห์ของขวัญที่เหมาะสม</h1>
              <motion.div 
                className="w-10 h-10 flex items-center justify-center bg-pink-50 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FaHeart className="text-pink-500" />
              </motion.div>
            </div>
            <div className="prose prose-pink max-w-none">
              <ReactMarkdown>{decodedData}</ReactMarkdown>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setShowShareModal(false);
              }}
              className="flex items-center justify-center gap-2 p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              <FaShare />
              <span>คัดลอกผลการวิเคราะห์</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              <FaDownload />
              <span>บันทึก</span>
            </motion.button>
            <Link href="/quiz" className="col-span-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FaRedo />
                <span>เริ่มวิเคราะห์ใหม่</span>
              </motion.button>
            </Link>
          </div>

          {/* Share Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-pink-50 rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-3">💝 Tips</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• บันทึกผลการวิเคราะห์ไว้เพื่อใช้อ้างอิงในภายหลัง</li>
              <li>• แชร์ผลวิเคราะห์ให้เพื่อนช่วยเลือกของขวัญ</li>
              <li>• สามารถกลับมาวิเคราะห์ใหม่ได้ตลอดเวลา</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowShareModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-sm w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">คัดลอกลิงก์</h3>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={window.location.href}
                className="p-2 border rounded"
                readOnly
                onClick={e => e.currentTarget.select()}
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowShareModal(false);
                }}
                className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
              >
                คัดลอกลิงก์
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
} 