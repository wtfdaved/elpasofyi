'use client';

import { motion } from 'framer-motion';
import { Instagram, Music2, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <footer className="border-t border-slate-300 py-16 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Branding */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-heading font-bold mb-2 text-slate-900">
                elpaso<span className="text-terracotta">.</span>fyi
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The insider's heartbeat of El Paso. Authentic cultural insights for a city that moves at its own pace.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-heading font-semibold uppercase tracking-wide text-terracotta mb-4">
                Explore
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-slate-700 hover:text-terracotta transition-colors">
                    The Radar
                  </Link>
                </li>
                <li>
                  <Link href="/food" className="text-slate-700 hover:text-terracotta transition-colors">
                    Food & Drink
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-slate-700 hover:text-terracotta transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/neighborhoods" className="text-slate-700 hover:text-terracotta transition-colors">
                    Neighborhoods
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-heading font-semibold uppercase tracking-wide text-terracotta mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-4 mb-6">
                <motion.a
                  href="https://www.instagram.com/elpaso.fyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-700 hover:text-terracotta transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@elpaso.fyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-700 hover:text-terracotta transition-colors"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:hello@elpaso.fyi"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-700 hover:text-terracotta transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-xs text-slate-500">
                hello@elpaso.fyi
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="h-px bg-slate-300" />

          {/* Bottom footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600"
          >
            <p>
              © {new Date().getFullYear()} elpaso.fyi. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-terracotta transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-terracotta transition-colors">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
