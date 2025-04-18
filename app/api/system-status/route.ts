import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: 'https://deep-hippo-12590.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

const THRESHOLD = 50;

export async function GET() {
  try {
   
    const totalRequests = await redis.get<number>('total_requests') ?? 0;
    
   
    const systemLoad = (totalRequests / THRESHOLD) * 100;
    
   
    const status = {
      isAvailable: systemLoad < 80,
      load: Math.min(systemLoad, 100),
      message: systemLoad >= 80 
        ? 'ขออภัย ขณะนี้มีผู้ใช้งานจำนวนมาก กรุณารอสักครู่'
        : 'ระบบพร้อมให้บริการ',
      estimatedWaitTime: systemLoad >= 80 
        ? Math.ceil((systemLoad - 80) / 20)
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