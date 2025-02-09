'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHeart, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <Link href="/" className="inline-block">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent hover:from-rose-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300">
                ValenGift
              </span>
            </motion.div>
          </Link>

          <motion.p 
            className="text-gray-600 text-sm text-center max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            แอพช่วยเลือกของขวัญสำหรับคนพิเศษ ด้วยการวิเคราะห์บุคลิกและความชอบ
            <br/>
            <span className="text-pink-500 font-medium">ให้ทุกช่วงเวลาพิเศษของคุณเป็นความทรงจำที่น่าประทับใจ</span>
          </motion.p>

          <motion.div 
            className="flex items-center space-x-2 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart className="w-4 h-4 text-pink-500" />
            </motion.div>
            <span>by</span>
            <motion.span 
              className="font-medium text-pink-600"
              whileHover={{ scale: 1.05 }}
            >
              Thanatcha Saleekongchai
            </motion.span>
            <span>Student ICT Mahidol</span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/ZoFirsT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tha.s_acc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/thanatcha-saleekongchai-708829333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}