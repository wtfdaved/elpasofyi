'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Review {
  id: number;
  title: string;
  description: string;
  category: string;
  href: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: 'Mama\'s Kitchen: A Culinary Time Capsule',
    description: 'Authentic homemade Mexican comfort food that\'s been fueling El Paso since 1998.',
    category: 'Food Review',
    href: '/food/mamas-kitchen',
  },
  {
    id: 2,
    title: 'The Underground Music Scene: Where It Starts',
    description: 'An intimate dive into El Paso\'s most thriving independent music venues and artists.',
    category: 'Culture',
    href: '/events/underground-scene',
  },
  {
    id: 3,
    title: 'Sunset Over the Franklin Mountains',
    description: 'The best hiking trails to catch El Paso\'s most spectacular sunsets.',
    category: 'Outdoors',
    href: '/guides/sunset-hikes',
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

export default function LatestReviews() {
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
            Latest Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Fresh takes on what's new, what's good, and what's worth your time in El Paso.
          </p>
        </motion.div>

        {/* Review cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={review.href}>
                <div className="group relative h-full bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-terracotta hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    <div className="text-4xl">📸</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-heading font-semibold rounded-full">
                        {review.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold mb-2 text-slate-900 line-clamp-2">
                      {review.title}
                    </h3>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
                      {review.description}
                    </p>

                    {/* Read review link */}
                    <div className="pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center text-terracotta hover:text-opacity-80 transition-colors text-sm font-heading font-semibold uppercase tracking-wide">
                        Read Review →
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
            className="inline-flex items-center gap-2 text-terracotta hover:text-opacity-80 transition-colors font-heading font-semibold uppercase tracking-wide text-sm"
          >
            View All Reviews →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
