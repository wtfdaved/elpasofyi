'use client';

import { motion } from 'framer-motion';
import { Star, Clock, MapPin } from 'lucide-react';

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
                <Star className="w-5 h-5 text-sunset-orange" />
                <span className="text-sm font-heading font-semibold text-sunset-orange uppercase tracking-wide">
                  Spotlight of the Week
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
                The Hottest Drop in El Paso
              </h2>
            </motion.div>

            {/* Featured content placeholder */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-2xl font-heading font-bold mb-2 text-slate-900">
                  [Featured Venue / Event Name]
                </h3>
                <p className="text-slate-500 text-sm uppercase tracking-wide font-heading font-semibold mb-4">
                  Coming This Weekend
                </p>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  This is where the story goes. Tell us about what's happening this week—the restaurant that just opened, the underground show everyone's talking about, or the cultural moment you can't miss.
                </p>
              </div>

              {/* Meta info */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sunset-orange" />
                  <span className="text-slate-600">El Paso, TX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sunset-orange" />
                  <span className="text-slate-600">Friday - Sunday</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button className="btn-primary">
                  Learn More
                </button>
                <button className="btn-secondary">
                  Save to Radar
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Featured image placeholder */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-slate-100 border border-slate-300 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-6xl mb-4">🎭</div>
                <p className="text-slate-600 text-sm uppercase tracking-wide font-heading font-semibold">
                  [Featured Image]
                </p>
                <p className="text-xs text-slate-500 mt-2 max-w-xs px-4">
                  High-res images, dynamic visuals, and mood will go here
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
