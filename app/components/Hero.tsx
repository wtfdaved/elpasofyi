'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-sand opacity-10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-neon-cyan opacity-5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading with glitch effect - SEO optimized */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 relative inline-block leading-tight">
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-sand mb-2">
              The Unofficial Guide to El Paso, TX
            </span>
            <span className="relative text-5xl sm:text-6xl lg:text-7xl">
              elpaso
              <span className="text-sand">.</span>
              fyi
              <motion.span
                className="absolute inset-0 text-neon-cyan opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ mixBlendMode: 'screen' }}
              >
                elpaso.fyi
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Tagline - SEO optimized */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-dark-text-muted mb-6 font-light"
        >
          <span className="text-sand font-semibold">Discover things to do in El Paso.</span> Events, restaurants, weekend itineraries, and local culture.
        </motion.p>

        {/* Description - SEO focused */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-dark-text-dim max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Skip the generic tourism guides. We're your insider to authentic El Paso: best restaurants and food, events this weekend, off-the-beaten-path neighborhoods, and everything locals actually do in El Paso, TX.
        </motion.p>

        {/* Newsletter signup section */}
        <motion.div variants={itemVariants} className="max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center mb-4 text-sand">
            <Mail className="w-5 h-5 mr-2" />
            <span className="text-sm font-mono font-bold tracking-wider">SUBSCRIBE</span>
          </div>
          <NewsletterForm />
          <p className="text-xs text-dark-text-dim mt-4">
            Get the weekend drop. No spam, just the city's pulse.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <button className="btn-primary mb-8 inline-block">
            Explore The Radar
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-dark-text-muted mb-2 uppercase tracking-widest">
              Scroll to discover
            </span>
            <svg
              className="w-4 h-4 text-sand"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
