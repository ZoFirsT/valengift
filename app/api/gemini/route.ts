import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { Redis } from '@upstash/redis';
import { NextResponse, NextRequest } from "next/server";

const redis = new Redis({
  url: 'https://deep-hippo-12590.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const apiKey = process.env.API_KEY ?? 'default_api_key';
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const data = await req.json() as { body: string; budget: string };
    const cacheKey = `gemini:${data.body}:${data.budget}`;
    
    const cachedResult = await redis.get(cacheKey);
    if (cachedResult) {
      return NextResponse.json({ output: cachedResult });
    }

    // ทำให้ prompt สั้นลงและชัดเจนขึ้น
    const promptTemplate = `
    คุณเป็นระบบแนะนำของขวัญวันวาเลนไทน์ที่อัจฉริยะมาก! คุณจะใช้คำตอบจาก 10 คำถามในการวิเคราะห์บุคลิกของคู่รัก แล้วแนะนำของขวัญที่เหมาะสมโดยอิงจากตารางลักษณะบุคลิกภาพนี้:

     ### ตารางลักษณะบุคลิกภาพ  

      1. **เวลาว่าง คู่ของคุณชอบทำอะไรมากที่สุด?**  
         - 1: อ่านหนังสือ/ทำงานเงียบๆ → (introvert, intellectual)  
         - 2: ออกไปเจอเพื่อน/สังสรรค์ → (extrovert, social)  
         - 3: เล่นเกม/ดูซีรีส์ → (entertainment, relaxed)  
         - 4: ทำกิจกรรมสร้างสรรค์/งานฝีมือ → (creative, artistic)  

      2. **สไตล์การแต่งตัวของคู่คุณเป็นแบบไหน?**  
         - 1: เรียบหรู ดูดี → (elegant, minimal)  
         - 2: สดใส มีสีสัน → (colorful, playful)  
         - 3: สบายๆ เน้นประโยชน์ใช้สอย → (practical, casual)  
         - 4: ตามเทรนด์ แฟชั่น → (trendy, fashionable)  

      3. **คู่ของคุณชอบใช้เวลาว่างที่ไหน?**  
         - 1: อยู่บ้าน → (homebody, cozy)  
         - 2: ออกไปข้างนอก ผจญภัย → (adventurous, outdoor)  
         - 3: ร้านกาแฟ/ร้านหนังสือ → (cafe, chill)  
         - 4: ห้างสรรพสินค้า/แหล่งช้อปปิ้ง → (shopping, urban)  

      4. **อาหารที่คู่ของคุณชอบเป็นแบบไหน?**  
         - 1: ชอบทำอาหารเอง → (cooking, homemade)  
         - 2: ชอบลองร้านใหม่ๆ → (foodie, adventurous)  
         - 3: เน้นอาหารสุขภาพ → (healthy, conscious)  
         - 4: ชอบของหวาน ขนม → (sweet, indulgent)  

      5. **งานอดิเรกที่คู่ของคุณสนใจ?**  
         - 1: ศิลปะ/ดนตรี → (artistic, musical)  
         - 2: กีฬา/ออกกำลังกาย → (athletic, active)  
         - 3: เทคโนโลยี/กาดเจ็ต → (tech-savvy, modern)  
         - 4: ปลูกต้นไม้/ทำสวน → (nature, nurturing)  

      6. **คู่ของคุณให้ความสำคัญกับอะไรมากที่สุด?**  
         - 1: ครอบครัวและความสัมพันธ์ → (family-oriented, caring)  
         - 2: หน้าที่การงาน → (ambitious, professional)  
         - 3: การพัฒนาตัวเอง → (growth-minded, self-improvement)  
         - 4: ความสนุกและความสุขในชีวิต → (fun-loving, carefree)  

      7. **สไตล์การท่องเที่ยวที่คู่ของคุณชอบ?**  
         - 1: ท่องเที่ยวเชิงวัฒนธรรม → (cultural, intellectual)  
         - 2: ผจญภัยกลางแจ้ง → (adventurous, nature)  
         - 3: พักผ่อนสบายๆ → (relaxed, luxury)  
         - 4: ชอปปิ้งและชิมอาหาร → (urban, foodie)  

      8. **คู่ของคุณชอบรูปแบบความบันเทิงแบบไหน?**  
         - 1: หนังและซีรีส์ → (entertainment, movie-buff)  
         - 2: เกมและ E-Sport → (gamer, competitive)  
         - 3: คอนเสิร์ตและการแสดงสด → (musical, energetic)  
         - 4: พิพิธภัณฑ์และนิทรรศการ → (artistic, cultural)  

      9. **คู่ของคุณชอบใช้เวลาว่างร่วมกันอย่างไร?**  
         - 1: ออกไปข้างนอก ทำกิจกรรมร่วมกัน → (adventurous, social)  
         - 2: อยู่บ้าน ทำกิจกรรมภายใน → (homebody, cozy)  
         - 3: ลองทำอะไรใหม่ๆ ร่วมกัน → (curious, open-minded)  
         - 4: ไม่ค่อยสนใจกิจกรรมร่วมกัน → (independent, self-focused) 

      10. **คู่ของคุณชอบสไตล์การตกแต่งแบบไหน?**  
          - 1: มินิมอล เรียบง่าย → (minimal, modern)  
          - 2: อบอุ่น เป็นธรรมชาติ → (cozy, nature)  
          - 3: สดใส มีสีสัน → (colorful, expressive)  
          - 4: วินเทจ คลาสสิก → (vintage, classic)  

    ### วิธีทำงาน:
    ฉันจะส่งข้อมูลเป็น payload แบบนี้:  
    \`\`\`
    1:4  
    2:3  
    3:1  
    4:2  
    5:1  
    6:4  
    7:3  
    8:1  
    9:2  
    10:3  
    ...
    \`\`\`
    วิเคราะห์ข้อมูลแล้วแนะนำของขวัญที่เหมาะสม (3 รายการขึ้นไป) โดยอ้างอิงจากบุคลิกหลักของคู่รัก

    ### ตัวอย่าง Output:
    **บุคลิกภาพหลักของคู่รัก:**
    - สร้างสรรค์ & ศิลปะ (Creative & Artistic)
    - รักความสะดวกสบาย (Cozy & Practical)
    - รักความบันเทิง (Entertainment-Loving)

    **ของขวัญที่แนะนำ:**
    1. กล้องโพลารอยด์ – เหมาะสำหรับคนรักศิลปะ
    2. Bean Bag เกรดพรีเมียม – สำหรับคนที่ชอบพักผ่อนที่บ้าน
    3. บัตรชมคอนเสิร์ต – ตอบโจทย์สายบันเทิง

    **เป้าหมายของคุณ:**  
    วิเคราะห์คำตอบและแนะนำของขวัญที่ดีที่สุดสำหรับคู่รักตามลักษณะบุคลิกภาพและงบประมาณ โดยที่สำคัญของขวัญชิ้นนี้คนธรรมดาต้องเข้าถึงง่ายและหาง่าย เป็นของขวัญให้ในวันวาเลยไทน์ และระบบเป็นสิ่งของเเคบๆเลย ไม่ใช่สิ่งของกว้างๆ!

    โดย payload มีดังนี้
      \`\`\`
    ${data.body}
    งบประมาณ: ${data.budget} บาท
    \`\`\`
`;

    try {
      const result = await model.generateContent(promptTemplate);

      if (!result.response.text()) {
        return NextResponse.json(
          { error: "ไม่สามารถวิเคราะห์ได้ กรุณาลองใหม่อีกครั้ง" },
          { status: 400 }
        );
      }

      const output = result.response.text();
      await redis.setex(cacheKey, 3600, output);
      return NextResponse.json({ output });

    } catch (error: any) {
      console.error('Content generation error:', error);
      return NextResponse.json(
        { error: "ขออภัย ไม่สามารถวิเคราะห์ได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการเชื่อมต่อ API" },
      { status: 500 }
    );
  }
}