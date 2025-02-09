"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/quiz', label: 'เริ่มค้นหาของขวัญ' },
  { href: '/about', label: 'เกี่ยวกับเรา' }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `
    container mx-auto fixed left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm
    ${isScrolled ? 'shadow-lg bg-white/80' : ''}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-pink-600 font-bold text-xl">
                ValenGift
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div 
                key={link.href}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={link.href}
                  className={`
                    text-gray-600 font-medium text-sm
                    hover:text-pink-600 transition-colors duration-300
                    ${pathname === link.href ? 'text-pink-600' : ''}
                  `}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="md:hidden text-gray-600 hover:text-pink-600 p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white mt-2 rounded-lg shadow-xl border border-gray-100"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`
                      block px-6 py-3 text-gray-600 hover:text-pink-600 text-sm
                      hover:bg-pink-50 transition-all duration-300
                      ${pathname === link.href ? 'bg-pink-50 text-pink-600' : ''}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;