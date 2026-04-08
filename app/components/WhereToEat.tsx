'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  href: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Los Reyes de la Torta',
    cuisine: 'Mexican Sandwiches',
    rating: 4.8,
    reviews: 342,
    href: '/food/los-reyes',
  },
  {
    id: 2,
    name: 'The Rustic Root',
    cuisine: 'Farm-to-Table',
    rating: 4.7,
    reviews: 289,
    href: '/food/rustic-root',
  },
  {
    id: 3,
    name: 'Cafe Kacao',
    cuisine: 'Coffee & Pastries',
    rating: 4.9,
    reviews: 521,
    href: '/food/cafe-kacao',
  },
];

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
      ease: 'easeInOut',
    },
  },
};

export default function WhereToEat() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-bg">
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
            Where to Eat
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Our favorite spots for breakfast, lunch, dinner, and everything in between.
          </p>
        </motion.div>

        {/* Restaurant cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {restaurants.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={restaurant.href}>
                <div className="group relative h-full bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-sunset-orange hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Image placeholder - 1:1 aspect ratio */}
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    <div className="text-5xl">🍽️</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold mb-1 text-slate-900">
                      {restaurant.name}
                    </h3>

                    <p className="text-sm text-slate-500 mb-4">
                      {restaurant.cuisine}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(restaurant.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-heading font-semibold text-slate-900">
                        {restaurant.rating}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({restaurant.reviews})
                      </span>
                    </div>

                    {/* View menu link */}
                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <span className="inline-flex items-center text-sunset-orange hover:text-opacity-80 transition-colors text-sm font-heading font-semibold uppercase tracking-wide">
                        View Menu →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/food"
            className="inline-flex items-center gap-2 text-sunset-orange hover:text-opacity-80 transition-colors font-heading font-semibold uppercase tracking-wide text-sm"
          >
            Explore All Restaurants →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
