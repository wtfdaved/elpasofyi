'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Food', href: '/food' },
    { label: 'Events', href: '/events' },
    { label: 'Guides', href: '/guides' },
    { label: 'Neighborhoods', href: '/neighborhoods' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-light-bg border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-2xl font-heading font-bold text-slate-900">
            elpaso
            <span className="text-sunset-orange">.</span>
            fyi
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-sunset-orange transition-colors text-sm font-heading font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 hover:text-sunset-orange"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-slate-200 bg-light-bg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-sunset-orange transition-colors font-heading font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
