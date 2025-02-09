'use client';
export default function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2>ขออภัย เกิดข้อผิดพลาด</h2>
        <button onClick={() => window.location.reload()}>ลองใหม่อีกครั้ง</button>
      </div>
    </div>
  );
} 