import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: 'https://deep-hippo-12590.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

export async function POST(req: Request) {
  try {
    const { setOverload } = await req.json();
    
    // ถ้า setOverload เป็น true ให้เซ็ตจำนวน request เป็น 45 (90% ของ limit)
    // ถ้าเป็น false ให้รีเซ็ตเป็น 0
    await redis.set('total_requests', setOverload ? 45 : 0);
    
    const totalRequests = await redis.get<number>('total_requests') ?? 0;
    const systemLoad = (totalRequests / 50) * 100;

    return NextResponse.json({
      isAvailable: systemLoad < 80,
      load: Math.min(systemLoad, 100),
      message: systemLoad >= 80 
        ? 'ขออภัย ขณะนี้มีผู้ใช้งานจำนวนมาก กรุณารอสักครู่'
        : 'ระบบพร้อมให้บริการ',
      estimatedWaitTime: systemLoad >= 80 
        ? Math.ceil((systemLoad - 80) / 20)
        : 0
    });
  } catch (error) {
    console.error('Test load error:', error);
    return NextResponse.json({ error: 'Failed to test load' }, { status: 500 });
  }
} 