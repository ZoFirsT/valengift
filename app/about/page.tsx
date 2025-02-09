'use client';
import { motion } from 'framer-motion';
import { FaGift, FaHeart, FaMagic } from 'react-icons/fa';

const features = [
  {
    icon: <FaGift className="text-4xl text-pink-500" />,
    title: 'ค้นหาของขวัญที่ใช่',
    description: 'ด้วยระบบวิเคราะห์บุคลิกภาพและความชอบ เราจะช่วยคุณหาของขวัญที่เหมาะสมที่สุด'
  },
  {
    icon: <FaHeart className="text-4xl text-pink-500" />,
    title: 'สร้างความประทับใจ',
    description: 'มอบของขวัญที่มีความหมายและตรงใจผู้รับ'
  },
  {
    icon: <FaMagic className="text-4xl text-pink-500" />,
    title: 'ประหยัดเวลา',
    description: 'ไม่ต้องเสียเวลาคิดนาน เราช่วยคุณตัดสินใจ'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            เกี่ยวกับ ValenGift
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            เราคือผู้ช่วยในการเลือกของขวัญที่ใช่สำหรับคนพิเศษของคุณ
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              วิธีการทำงาน
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                ValenGift ใช้ระบบ AI ในการวิเคราะห์บุคลิกภาพและความชอบของผู้รับ 
                ผ่านชุดคำถามที่ออกแบบมาอย่างพิถีพิถัน
              </p>
              <p className="text-gray-600">
                เราคำนึงถึงทั้งงบประมาณ ความชอบ และโอกาสพิเศษ 
                เพื่อแนะนำของขวัญที่เหมาะสมที่สุดสำหรับคุณ
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 