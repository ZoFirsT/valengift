import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "เวลาว่าง คู่ของคุณชอบทำอะไรมากที่สุด?",
    choices: [
      { id: "1a", text: "อ่านหนังสือ/นั่งทำงานเงียบๆ", personality: ["introvert", "intellectual"] },
      { id: "1b", text: "ออกไปเจอเพื่อน/สังสรรค์", personality: ["extrovert", "social"] },
      { id: "1c", text: "เล่นเกม/ดูซีรีส์", personality: ["entertainment", "relaxed"] },
      { id: "1d", text: "ทำกิจกรรมสร้างสรรค์/งานฝีมือ", personality: ["creative", "artistic"] }
    ]
  },
  {
    id: 2,
    text: "สไตล์การแต่งตัวของคู่คุณเป็นแบบไหน?",
    choices: [
      { id: "2a", text: "เรียบหรู ดูดี", personality: ["elegant", "minimal"] },
      { id: "2b", text: "สดใส มีสีสัน", personality: ["colorful", "playful"] },
      { id: "2c", text: "สบายๆ เน้นประโยชน์ใช้สอย", personality: ["practical", "casual"] },
      { id: "2d", text: "ตามเทรนด์ แฟชั่น", personality: ["trendy", "fashionable"] }
    ]
  },
  {
    id: 3,
    text: "คู่ของคุณชอบใช้เวลาว่างที่ไหน?",
    choices: [
      { id: "3a", text: "อยู่บ้าน", personality: ["homebody", "cozy"] },
      { id: "3b", text: "ออกไปข้างนอก ผจญภัย", personality: ["adventurous", "outdoor"] },
      { id: "3c", text: "ร้านกาแฟ/ร้านหนังสือ", personality: ["cafe", "chill"] },
      { id: "3d", text: "ห้างสรรพสินค้า/แหล่งช้อปปิ้ง", personality: ["shopping", "urban"] }
    ]
  },
  {
    id: 4,
    text: "อาหารที่คู่ของคุณชอบเป็นแบบไหน?",
    choices: [
      { id: "4a", text: "ชอบทำอาหารเอง", personality: ["cooking", "homemade"] },
      { id: "4b", text: "ชอบลองร้านใหม่ๆ", personality: ["foodie", "adventurous"] },
      { id: "4c", text: "เน้นอาหารสุขภาพ", personality: ["healthy", "conscious"] },
      { id: "4d", text: "ชอบของหวาน ขนม", personality: ["sweet", "indulgent"] }
    ]
  },
  {
    id: 5,
    text: "งานอดิเรกที่คู่ของคุณสนใจ?",
    choices: [
      { id: "5a", text: "ศิลปะ/ดนตรี", personality: ["artistic", "musical"] },
      { id: "5b", text: "กีฬา/ออกกำลังกาย", personality: ["athletic", "active"] },
      { id: "5c", text: "เทคโนโลยี/กาดเจ็ต", personality: ["tech-savvy", "modern"] },
      { id: "5d", text: "ปลูกต้นไม้/ทำสวน", personality: ["nature", "nurturing"] }
    ]
  },
  {
    id: 6,
    text: "คู่ของคุณให้ความสำคัญกับอะไรมากที่สุด?",
    choices: [
      { id: "6a", text: "ครอบครัวและความสมพันธ์", personality: ["family-oriented", "caring"] },
      { id: "6b", text: "หน้าที่การงาน", personality: ["ambitious", "professional"] },
      { id: "6c", text: "การพัฒนาตัวเอง", personality: ["growth-minded", "self-improvement"] },
      { id: "6d", text: "ความสนุกและความสุขในชีวิต", personality: ["fun-loving", "carefree"] }
    ]
  },
  {
    id: 7,
    text: "สไตล์การท่องเที่ยวที่คู่ของคุณชอบ?",
    choices: [
      { id: "7a", text: "ท่องเที่ยวเชิงวัฒนธรรม", personality: ["cultural", "intellectual"] },
      { id: "7b", text: "ผจญภัยกลางแจ้ง", personality: ["adventurous", "nature"] },
      { id: "7c", text: "พักผ่อนสบายๆ", personality: ["relaxed", "luxury"] },
      { id: "7d", text: "ชอปปิ้งและชิมอาหาร", personality: ["urban", "foodie"] }
    ]
  },
  {
    id: 8,
    text: "คู่ของคุณชอบรูปแบบความบันเทิงแบบไหน?",
    choices: [
      { id: "8a", text: "หนังและซีรีส์", personality: ["entertainment", "movie-buff"] },
      { id: "8b", text: "เกมและ E-Sport", personality: ["gamer", "competitive"] },
      { id: "8c", text: "คอนเสิร์ตและการแสดงสด", personality: ["musical", "energetic"] },
      { id: "8d", text: "พิพิธภัณฑ์และนิทรรศการ", personality: ["artistic", "cultural"] }
    ]
  },
  {
    id: 9,
    text: "คู่ของคุณชอบใช้เวลาว่างร่วมกันอย่างไร?",
    choices: [
      { id: "9a", text: "ออกไปข้างนอก ทำกิจกรรมร่วมกัน", personality: ["adventurous", "social"] },
      { id: "9b", text: "อยู่บ้าน ทำกิจกรรมภายใน", personality: ["homebody", "cozy"] },
      { id: "9c", text: "ลองทำอะไรใหม่ๆ ร่วมกัน", personality: ["curious", "open-minded"] },
      { id: "9d", text: "ไม่ค่อยสนใจกิจกรรมร่วมกัน", personality: ["independent", "self-focused"] }
    ]
  },
  {
    id: 10,
    text: "คู่ของคุณชอบสไตล์การตกแต่งแบบไหน?",
    choices: [
      { id: "10a", text: "มินิมอล เรียบง่าย", personality: ["minimal", "modern"] },
      { id: "10b", text: "อบอุ่น เป็นธรรมชาติ", personality: ["cozy", "nature"] },
      { id: "10c", text: "สดใส มีสีสัน", personality: ["colorful", "expressive"] },
      { id: "10d", text: "วินเทจ คลาสสิก", personality: ["vintage", "classic"] }
    ]
  }
];