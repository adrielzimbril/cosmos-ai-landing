'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import 'iconify-icon';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Models', href: '#models' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-500">
      <div className="floating-header-shell">
        <div className="px-4 py-3 sm:px-5 flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.08]">
              <iconify-icon icon="solar:stars-linear" class="iconify-center"></iconify-icon>
            </span>
            <span className="text-base font-semibold font-playfair italic text-white">Cosmos</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm text-white/62 hover:text-white transition-all font-geist font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="#" className="hidden sm:block text-sm text-white/62 hover:text-white transition-all font-geist font-semibold">
              Sign in
            </Link>
            <Link href="#" className="btn-premium btn-premium-glass !min-h-10 !px-5 !py-2 !text-sm !normal-case">
              Download
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="nav-menu-button"
              aria-label="Toggle menu"
            >
              <iconify-icon icon={isOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} class="iconify-center"></iconify-icon>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 p-5 bg-black/[0.92] border border-white/10 rounded-3xl backdrop-blur-3xl shadow-2xl md:hidden z-50"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-white/64 hover:text-white transition-colors font-geist"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full" />
              <Link
                href="#" 
                onClick={() => setIsOpen(false)}
                className="btn-premium btn-premium-glass w-full !normal-case"
              >
                Download
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
