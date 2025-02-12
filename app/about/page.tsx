'use client';
import { motion } from 'framer-motion';
import { FaRobot, FaGift, FaLock, FaExclamationTriangle } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                เกี่ยวกับ ValenGift
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg"
            >
              ระบบแนะนำของขวัญอัจฉริยะด้วย AI ที่จะช่วยคุณเลือกของขวัญได้ตรงใจ
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <div className="flex items-center gap-2 text-yellow-700">
                <FaExclamationTriangle className="text-xl" />
                <p className="text-sm">
                  โปรดทราบ: นี่เป็นโปรเจคทดลองที่ทำขึ้นเพื่อการเรียนรู้ อาจพบข้อผิดพลาดหรือความไม่เสถียรบางประการ 
                  ระบบอาจทำงานไม่สมบูรณ์ในบางครั้ง
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">การทำงานของระบบ</h2>
            
            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full shrink-0"
                >
                  <FaRobot className="text-2xl text-pink-500" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. การวิเคราะห์บุคลิกภาพ</h3>
                  <p className="text-gray-600">
                    ระบบใช้แบบสอบถาม 10 ข้อที่ออกแบบมาเพื่อวิเคราะห์บุคลิกภาพและความชอบของคู่รักคุณ 
                    โดยแต่ละคำถามจะวัดมิติต่างๆ เช่น ความชอบในการใช้เวลาว่าง สไตล์การแต่งตัว งานอดิเรก ฯลฯ
                    <span className="text-yellow-600 block mt-2 text-sm">
                      *บางครั้งระบบอาจประมวลผลช้าหรือไม่ตอบสนอง โปรดลองใหม่อีกครั้ง
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full shrink-0"
                >
                  <FaGift className="text-2xl text-pink-500" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. การแนะนำของขวัญ</h3>
                  <p className="text-gray-600">
                    AI จะประมวลผลคำตอบทั้งหมดร่วมกับงบประมาณที่กำหนด เพื่อแนะนำของขวัญที่เหมาะสม 3 อันดับ 
                    โดยคำนึงถึงความเป็นไปได้ในการหาซื้อในประเทศไทย และความเหมาะสมกับโอกาสวันวาเลนไทน์
                    <span className="text-yellow-600 block mt-2 text-sm">
                      *ผลลัพธ์อาจไม่แม่นยำ 100% เนื่องจากเป็นระบบทดลอง
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full shrink-0"
                >
                  <FaLock className="text-2xl text-pink-500" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. ความปลอดภัยและความเป็นส่วนตัว</h3>
                  <p className="text-gray-600">
                    ข้อมูลทั้งหมดจะถูกประมวลผลแบบ Real-time และไม่มีการเก็บข้อมูลส่วนตัว 
                    ผลการวิเคราะห์จะถูกแคชไว้ชั่วคราวเพื่อประสิทธิภาพในการใช้งาน
                    <span className="text-yellow-600 block mt-2 text-sm">
                      *ระบบแคชอาจล้มเหลวในบางครั้ง ทำให้ต้องวิเคราะห์ใหม่
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">ฟีเจอร์เด่น</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🎯", title: "แม่นยำ", desc: "วิเคราะห์บุคลิกภาพด้วย AI ขั้นสูง (อาจมีความคลาดเคลื่อน)" },
                { icon: "⚡️", title: "รวดเร็ว", desc: "ได้ผลการวิเคราะห์ภายในไม่กี่วินาที (บางครั้งอาจช้า)" },
                { icon: "💝", title: "ใช้งานง่าย", desc: "อินเตอร์เฟซที่เข้าใจง่าย ใช้งานได้ทุกอุปกรณ์ (อาจมีบัคบางจุด)" },
                { icon: "🔄", title: "ลองได้ไม่จำกัด", desc: "สามารถวิเคราะห์ใหม่ได้ตลอดเวลา (ขึ้นอยู่กับความเสถียรของระบบ)" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-pink-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-xl">{feature.icon}</span>
                    <span>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">เทคโนโลยีที่ใช้</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Next.js", type: "Framework (Beta)" },
                { name: "Google Gemini", type: "AI Model (ทดลอง)" },
                { name: "Upstash Redis", type: "Caching (Free Tier)" },
                { name: "Tailwind CSS", type: "Styling" },
                { name: "TypeScript", type: "Language" },
                { name: "Vercel", type: "Hosting (Free)" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 bg-gradient-to-br from-pink-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="font-semibold mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-600">{tech.type}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}