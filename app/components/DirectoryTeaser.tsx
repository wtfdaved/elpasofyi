'use client';

import { motion } from 'framer-motion';
import {
  Utensils,
  Music,
  Leaf,
  ShoppingBag,
  Palette,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Food',
    description: 'Restaurants, cafes, and culinary experiences',
    icon: Utensils,
    href: '/food',
  },
  {
    id: 2,
    name: 'Nightlife',
    description: 'Bars, clubs, and evening entertainment',
    icon: Music,
    href: '/events',
  },
  {
    id: 3,
    name: 'Outdoors',
    description: 'Hiking, parks, and outdoor adventures',
    icon: Leaf,
    href: '/guides',
  },
  {
    id: 4,
    name: 'Shopping',
    description: 'Local makers and unique retail',
    icon: ShoppingBag,
    href: '/shopping',
  },
  {
    id: 5,
    name: 'Arts & Culture',
    description: 'Galleries, museums, and cultural events',
    icon: Palette,
    href: '/attractions',
  },
  {
    id: 6,
    name: 'Neighborhoods',
    description: 'Explore El Paso block by block',
    icon: MapPin,
    href: '/neighborhoods',
  },
];

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

export default function DirectoryTeaser() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 text-slate-900">
            The Local Directory
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to explore, discover, and experience authentic El Paso.
          </p>
        </motion.div>

        {/* Category grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={category.href}>
                  <div className="group relative h-full bg-white border border-slate-300 rounded-2xl p-8 hover:border-sunset-orange hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
                    {/* Icon */}
                    <div className="mb-6 p-4 bg-sunset-orange/10 rounded-2xl group-hover:bg-sunset-orange/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-sunset-orange" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-bold mb-2 text-slate-900">
                      {category.name}
                    </h3>

                    <p className="text-sm text-slate-600 mb-6 flex-1">
                      {category.description}
                    </p>

                    {/* Explore link */}
                    <div className="pt-4 border-t border-slate-100 w-full">
                      <span className="inline-flex items-center text-sunset-orange hover:text-opacity-80 transition-colors text-sm font-heading font-semibold uppercase tracking-wide">
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
    </section>
  );
}
