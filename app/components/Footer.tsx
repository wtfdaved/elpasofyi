'use client';

import { motion } from 'framer-motion';
import { Instagram, Music2, Mail } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <footer className="border-t border-dark-text-dim py-16 px-4 sm:px-6 lg:px-8">
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
              <h3 className="text-2xl font-display font-bold mb-2">
                elpaso<span className="text-sand">.</span>fyi
              </h3>
              <p className="text-dark-text-muted text-sm leading-relaxed">
                The insider's heartbeat of El Paso. Authentic underground cultural insights for a city that moves at its own pace.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-sand mb-4">
                Explore
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-dark-text hover:text-sand transition-colors">
                    The Radar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark-text hover:text-sand transition-colors">
                    Food & Drink
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark-text hover:text-sand transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark-text hover:text-sand transition-colors">
                    Neighborhoods
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-sand mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-4 mb-6">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#d4a574' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-dark-text hover:text-sand transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#d4a574' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-dark-text hover:text-sand transition-colors"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:hello@elpaso.fyi"
                  whileHover={{ scale: 1.2, color: '#d4a574' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-dark-text hover:text-sand transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-xs text-dark-text-dim">
                hello@elpaso.fyi
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="h-px bg-dark-text-dim" />

          {/* Bottom footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-text-muted"
          >
            <p>
              © {new Date().getFullYear()} elpaso.fyi. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-sand transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sand transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>

          {/* Accent line */}
          <motion.div
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="h-px bg-gradient-to-r from-transparent via-sand to-transparent origin-left"
          />
        </motion.div>
      </div>
    </footer>
  );
}
