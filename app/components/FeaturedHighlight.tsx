'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FeaturedHighlight() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Content */}
          <div>
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-terracotta" />
                <span className="text-sm font-heading font-semibold text-terracotta uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
                The Next Big Thing in El Paso
              </h2>
            </motion.div>

            {/* Coming Soon Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                We're scouting the hottest new spots, restaurants, and events happening in El Paso. Check back soon for our next featured spotlight—the ones locals are actually talking about.
              </p>

              <div className="bg-gradient-to-r from-terracotta/5 to-terracotta/10 rounded-2xl p-6 border border-terracotta/20">
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">Help us find the best:</span> Know about an amazing new spot or event? Submit your recommendations on our Food and Events pages—the community's input shapes what gets featured here.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Coming Soon Visual */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-4">
                <Sparkles className="w-16 h-16 text-terracotta mx-auto opacity-80" />
                <div>
                  <p className="text-slate-600 text-sm uppercase tracking-wide font-heading font-semibold">
                    Coming This Weekend
                  </p>
                  <p className="text-xs text-slate-500 mt-2 max-w-xs px-4">
                    Curating the best El Paso has to offer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
