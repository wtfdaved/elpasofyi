'use client';

import { motion } from 'framer-motion';
import { Utensils, Music, Compass, Users, MapPin, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const radarCategories = [
  {
    id: 1,
    title: 'Food & Drink',
    description: 'New spots, hidden gems, and the city\'s culinary pulse',
    icon: Utensils,
    href: '/food',
  },
  {
    id: 2,
    title: 'Underground Events',
    description: 'Where the real culture happens',
    icon: Music,
    href: '/events',
  },
  {
    id: 3,
    title: 'Weekend Itineraries',
    description: 'Curated paths through the city',
    icon: Compass,
    href: '/guides',
  },
  {
    id: 4,
    title: 'Local Makers',
    description: 'Artists, musicians, and creators shaping El Paso',
    icon: Users,
    href: '/shopping',
  },
  {
    id: 5,
    title: 'Neighborhood Deep Dives',
    description: 'Block by block insights',
    icon: MapPin,
    href: '/neighborhoods',
  },
  {
    id: 6,
    title: 'Insider Tips',
    description: 'What the locals actually do',
    icon: Lightbulb,
    href: '/attractions',
  },
];

export default function TheRadar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-light-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 text-slate-900">
            The Radar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Your real-time feed of what's happening in El Paso. Curated content on food, events, culture, and everything worth exploring.
          </p>
          <p className="text-xs text-slate-500 font-heading font-semibold uppercase tracking-wide mt-2 md:hidden">
            Scroll to explore →
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="relative">
          {/* Right-edge fade hint — mobile only */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-light-bg to-transparent z-10 md:hidden" />
          <motion.div
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:flex-none md:overflow-x-visible md:pb-0 md:mx-0 md:px-0 lg:grid-cols-3"
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
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="flex-none w-[280px] snap-start md:w-auto md:flex-1"
              >
                <Link href={category.href}>
                  <div className="group relative p-6 border border-slate-300 bg-white rounded-2xl hover:border-terracotta hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <IconComponent className="w-8 h-8 text-terracotta" />
                      </div>

                      <h3 className="text-xl font-heading font-bold mb-2 text-slate-900">
                        {category.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Explore link */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center text-terracotta hover:text-opacity-80 transition-colors text-sm font-heading font-semibold uppercase tracking-wide">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
