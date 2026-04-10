'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapOff } from 'lucide-react';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden bg-light-bg">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-sunset-orange opacity-3 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, 15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-slate-300 opacity-3 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="max-w-2xl mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Icon */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center">
            <div className="bg-slate-100 p-4 rounded-full inline-block">
              <MapOff className="w-12 h-12 text-sunset-orange" />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-slate-900">
          Looks like you took a wrong turn at the Franklins.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-600 mb-12 font-light max-w-xl mx-auto leading-relaxed"
        >
          We couldn't find the page you're looking for, but there's plenty more to explore.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link href="/" className="btn-primary inline-block">
            Back to the Radar
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
