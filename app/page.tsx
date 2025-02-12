"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGift, FaHeart, FaSearch } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full blur-3xl opacity-20"
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <motion.h1 
                className="text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                ค้นหาของขวัญที่ใช่ <br />
                <span className="text-pink-600">สำหรับคนที่คุณรัก</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ให้เราช่วยคุณเลือกของขวัญที่เหมาะสมที่สุด <br />
                ด้วยระบบวิเคราะห์ความชอบและบุคลิกภาพ
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full blur-lg opacity-50 transform -rotate-6"></div>
                <Link
                  href="/quiz"
                  className="relative inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  เริ่มค้นหาของขวัญ ✨
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <FaSearch className="text-4xl text-pink-500" />,
                  title: "ค้นหาง่าย",
                  description: "เพียงตอบคำถามไม่กี่ข้อ ก็ได้ของขวัญที่ใช่",
                },
                {
                  icon: <FaHeart className="text-4xl text-pink-500" />,
                  title: "ตรงใจผู้รับ",
                  description: "วิเคราะห์จากบุคลิกและความชอบอย่างละเอียด",
                },
                {
                  icon: <FaGift className="text-4xl text-pink-500" />,
                  title: "ตามงบประมาณ",
                  description: "เลือกของขวัญที่เหมาะสมกับงบของคุณ",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-pink-100 hover:border-pink-200 transition-all duration-300"
                >
                  <motion.div 
                    className="mb-6 bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2 text-yellow-700">
                <BiErrorCircle className="text-xl" />
                <p className="text-sm">
                  ⚠️ ระบบอยู่ในช่วงทดลอง อาจพบข้อผิดพลาดบางประการ ขออภัยในความไม่สะดวก
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
