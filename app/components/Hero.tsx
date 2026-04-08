'use client';

import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        className="max-w-4xl mx-auto relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading - SEO optimized */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 relative inline-block leading-tight text-slate-900">
            <span className="block text-base sm:text-lg lg:text-xl text-sunset-orange font-semibold mb-4 tracking-wide">
              The Sun City, Curated.
            </span>
            <span className="relative text-5xl sm:text-6xl lg:text-7xl">
              elpaso
              <span className="text-sunset-orange">.</span>
              fyi
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-slate-700 mb-6 font-light"
        >
          Discover authentic El Paso. <span className="text-sunset-orange font-semibold">Events, restaurants, weekend itineraries, and local culture.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Skip the generic tourism guides. We're your insider to authentic El Paso: best restaurants and food, events this weekend, off-the-beaten-path neighborhoods, and everything locals actually do in El Paso, TX.
        </motion.p>

        {/* Newsletter signup section */}
        <motion.div variants={itemVariants} className="max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center mb-4 text-sunset-orange">
            <Mail className="w-5 h-5 mr-2" />
            <span className="text-sm font-heading font-semibold tracking-wider">THE WEEKEND DROP</span>
          </div>
          <NewsletterForm />
          <p className="text-xs text-slate-500 mt-4">
            Get the weekend drop. No spam, just the city's pulse.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <button className="btn-primary mb-12 inline-block">
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
            <span className="text-xs text-slate-500 mb-2 uppercase tracking-widest">
              Scroll to discover
            </span>
            <ChevronDown className="w-5 h-5 text-sunset-orange" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
