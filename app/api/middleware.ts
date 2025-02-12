import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL ?? '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
});

export async function middleware(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const key = `ratelimit:${ip}`;

  await redis.incr('total_requests');
  await redis.expire('total_requests', 60);

  const current = await redis.get<number>(key) ?? 0;
  
  if (current > 10) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  await redis.setex(key, 60, current + 1);
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
}; 