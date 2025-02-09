'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHeart, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/" className="inline-block">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                ValenGift
              </span>
            </motion.div>
          </Link>

          <p className="text-gray-600 text-sm text-center">
            แอพช่วยเลือกของขวัญสำหรับคนพิเศษ ด้วยการวิเคราะห์บุคลิกและความชอบ
          </p>

          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FaHeart className="w-4 h-4 text-pink-500" />
            </motion.div>
            <span>by เดฟที่กำลังง่วง</span>
          </div>

          <motion.a
            href="https://github.com/ZoFirsT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}