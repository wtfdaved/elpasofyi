'use client';

import { motion } from 'framer-motion';
import { Star, Clock, MapPin } from 'lucide-react';

export default function FeaturedHighlight() {
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
                <Star className="w-5 h-5 text-neon-cyan" />
                <span className="text-sm font-mono font-bold text-neon-cyan uppercase tracking-widest">
                  Spotlight of the Week
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold mb-4">
                The Hottest Drop in El Paso
              </h2>
            </motion.div>

            {/* Featured content placeholder */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="border-l-4 border-sand pl-6">
                <h3 className="text-2xl font-display font-bold mb-2 text-sand">
                  [Featured Venue / Event Name]
                </h3>
                <p className="text-dark-text-muted font-mono text-sm uppercase tracking-widest mb-4">
                  Coming This Weekend
                </p>
                <p className="text-base text-dark-text leading-relaxed mb-4">
                  This is where the story goes. Tell us about what's happening this week—the restaurant that just opened, the underground show everyone's talking about, or the cultural moment you can't miss.
                </p>
              </div>

              {/* Meta info */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sand" />
                  <span className="text-dark-text-muted">El Paso, TX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sand" />
                  <span className="text-dark-text-muted">Friday - Sunday</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-sand/5 via-rust/5 to-dark-bg border-2 border-dark-text-dim flex items-center justify-center group overflow-hidden">
              {/* Placeholder image with animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-sand/10 to-rust/10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">🎭</div>
                <p className="text-dark-text-muted font-mono text-sm uppercase tracking-widest">
                  [Featured Image]
                </p>
                <p className="text-xs text-dark-text-dim mt-2 max-w-xs">
                  High-res images, dynamic visuals, and mood will go here
                </p>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-sand to-transparent"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-sand to-transparent"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
