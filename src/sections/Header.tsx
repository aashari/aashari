"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link href="#hero" className="font-bold text-primary hover:text-hover focus:outline-none focus-visible:ring">
          Andi Ashari
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#about" className="hover:text-primary focus:outline-none focus-visible:ring">
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
