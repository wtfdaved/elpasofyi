'use client';

import { motion } from 'framer-motion';
import { Utensils, Music, Compass, Users, MapPin, Lightbulb } from 'lucide-react';

const radarCategories = [
  {
    id: 1,
    title: 'Food & Drink',
    description: 'New spots, hidden gems, and the city\'s culinary pulse',
    icon: Utensils,
    color: 'text-sand',
    gradient: 'from-sand/10 to-rust/10',
  },
  {
    id: 2,
    title: 'Underground Events',
    description: 'Where the real culture happens',
    icon: Music,
    color: 'text-neon-pink',
    gradient: 'from-neon-pink/10 to-neon-purple/10',
  },
  {
    id: 3,
    title: 'Weekend Itineraries',
    description: 'Curated paths through the city',
    icon: Compass,
    color: 'text-neon-cyan',
    gradient: 'from-neon-cyan/10 to-neon-green/10',
  },
  {
    id: 4,
    title: 'Local Makers',
    description: 'Artists, musicians, and creators shaping El Paso',
    icon: Users,
    color: 'text-clay',
    gradient: 'from-clay/10 to-rust/10',
  },
  {
    id: 5,
    title: 'Neighborhood Deep Dives',
    description: 'Block by block insights',
    icon: MapPin,
    color: 'text-burnt',
    gradient: 'from-burnt/10 to-sand/10',
  },
  {
    id: 6,
    title: 'Insider Tips',
    description: 'What the locals actually do',
    icon: Lightbulb,
    color: 'text-neon-green',
    gradient: 'from-neon-green/10 to-neon-cyan/10',
  },
];

export default function TheRadar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sand font-mono text-sm font-bold">01</span>
            <div className="h-px bg-sand/30 flex-1" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            The Radar
          </h2>
          <p className="text-lg text-dark-text-muted max-w-2xl">
            Your real-time feed of what's happening in El Paso's underground scene. No hype, just the signal.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {radarCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group relative p-6 border-2 border-dark-text-dim bg-gradient-to-br ${category.gradient} hover:border-sand transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Animated background accent */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-sand/0 to-transparent opacity-0 group-hover:opacity-10"
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                    <span className="text-xs font-mono text-dark-text-dim uppercase tracking-widest">
                      New
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2 text-dark-text">
                    {category.title}
                  </h3>

                  <p className="text-sm text-dark-text-muted mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Placeholder content */}
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-dark-text-dim/20 w-full" />
                    <div className="h-2 bg-dark-text-dim/20 w-5/6" />
                  </div>

                  {/* Read more link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-sand hover:text-neon-cyan transition-colors text-sm font-mono font-bold uppercase tracking-widest"
                  >
                    Explore →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
