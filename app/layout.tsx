import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sukhumvitSet = localFont({
  src: [
    {
      path: '../public/fonts/Sukhumvit Set Font.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Sukhumvit Set SemiBold.ttf', 
      weight: '600',
    },
    {
      path: '../public/fonts/Sukhumvit Set Bold.ttf',
      weight: '700', 
    }
  ],
  variable: '--font-sukhumvit'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://valengift.vercel.app'),
  title: {
    default: 'ValenGift - ระบบแนะนำของขวัญอัจฉริยะ',
    template: '%s | ValenGift'
  },
  description: 'ค้นหาของขวัญที่ใช่สำหรับคนพิเศษ ด้วย AI วิเคราะห์บุคลิกและความชอบ',
  keywords: [
    "ของขวัญ",
    "หาของขวัญ", 
    "ของขวัญวาเลนไทน์",
    "แนะนำของขวัญ",
    "ไอเดียของขวัญ",
    "ของขวัญคนพิเศษ"
  ],
  authors: [{ name: "ValenGift Team" }],
  creator: "ValenGift",
  publisher: "ValenGift",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ValenGift - ค้นหาของขวัญที่ใช่สำหรับคนพิเศษ",
    description: "ค้นหาของขวัญที่เหมาะสมสำหรับคนที่คุณรัก ด้วยระบบแนะนำของขวัญอัจฉริยะที่จะช่วยคุณเลือกของขวัญได้ตรงใจ",
    url: "https://valengift.vercel.app",
    siteName: "ValenGift",
    locale: "th_TH",
    type: "website",
    images: '/og-image.jpg'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={sukhumvitSet.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
