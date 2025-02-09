import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: 'https://deep-hippo-12590.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

const THRESHOLD = 50; // จำนวนคำขอสูงสุดต่อนาที
const WINDOW = 60; // ระยะเวลาในการนับ (วินาที)

export async function GET() {
  try {
    // นับจำนวนคำขอทั้งหมดในช่วงเวลาที่กำหนด
    const totalRequests = await redis.get<number>('total_requests') ?? 0;
    
    // คำนวณ % การใช้งานระบบ
    const systemLoad = (totalRequests / THRESHOLD) * 100;
    
    // ตรวจสอบสถานะระบบ
    const status = {
      isAvailable: systemLoad < 80, // ถ้าใช้งานน้อยกว่า 80% ถือว่าพร้อมใช้งาน
      load: Math.min(systemLoad, 100),
      message: systemLoad >= 80 
        ? 'ขออภัย ขณะนี้มีผู้ใช้งานจำนวนมาก กรุณารอสักครู่'
        : 'ระบบพร้อมให้บริการ',
      estimatedWaitTime: systemLoad >= 80 
        ? Math.ceil((systemLoad - 80) / 20) // คำนวณเวลารอโดยประมาณ
        : 0
    };

    return NextResponse.json(status);
  } catch (error) {
    console.error('System status error:', error);
    return NextResponse.json(
      { error: 'Failed to check system status' },
      { status: 500 }
    );
  }
} 