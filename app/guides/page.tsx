'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Schema from '../components/Schema';

const guides = [
  {
    slug: 'weekend-in-el-paso',
    title: '48 Hours in El Paso: The Perfect Weekend Itinerary',
    description: 'Discover the best things to do in El Paso for a perfect weekend. From street food tacos to live music, mountains, and authentic local culture.',
    readTime: 12,
    category: 'itinerary',
  },
  {
    slug: 'el-paso-taco-tour',
    title: 'The Ultimate El Paso Taco Guide: Where Locals Really Eat',
    description: 'Skip the chains. Tour the best taco spots in El Paso from street vendors to family-owned restaurants. Authentic tacos, best prices, hidden gems.',
    readTime: 15,
    category: 'food',
  },
  {
    slug: 'best-neighborhoods-el-paso',
    title: 'Explore El Paso\'s Best Neighborhoods: A Local\'s Guide to Where to Be',
    description: 'Discover El Paso\'s most vibrant neighborhoods. Where to stay, eat, shop, and experience authentic local culture in each area.',
    readTime: 14,
    category: 'neighborhoods',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'El Paso Guides',
  description: 'Comprehensive insider guides to El Paso including itineraries, food guides, and neighborhood recommendations',
  url: 'https://elpaso.fyi/guides',
  hasPart: guides.map((guide) => ({
    '@type': 'Article',
    headline: guide.title,
    url: `https://elpaso.fyi/guides/${guide.slug}`,
  })),
};

export default function GuidesPage() {
  return (
    <>
      <Schema schema={collectionSchema} />

      <main className="bg-dark-bg text-dark-text min-h-screen">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-4">
                El Paso<span className="text-sand"> Guides</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Insider itineraries, food guides, and local tips for discovering the real El Paso. Weekend plans, neighborhood explorations, and everything you need to know.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Guides Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {guides.map((guide) => (
                <motion.div
                  key={guide.slug}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-8 hover:border-sand transition-colors rounded group h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block text-xs px-3 py-1 border border-sand text-sand rounded mb-3 uppercase tracking-wider">
                        {guide.category}
                      </span>
                    </div>
                    <BookOpen className="w-5 h-5 text-sand opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-sand transition-colors leading-tight">
                    {guide.title}
                  </h2>

                  <p className="text-dark-text-muted mb-6 flex-1">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-dark-text-dim">
                      {guide.readTime} min read
                    </span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="flex items-center gap-2 text-sand hover:text-neon-cyan transition-colors font-semibold"
                    >
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Categories CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-dark-text-dim">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center">
              Browse by Interest
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: 'Weekend Plans', icon: '🗓️' },
                { name: 'Food & Dining', icon: '🍽️' },
                { name: 'Neighborhoods', icon: '🏘️' },
                { name: 'Events', icon: '🎉' },
              ].map((category) => (
                <motion.button
                  key={category.name}
                  variants={itemVariants}
                  className="p-4 border border-dark-text-dim hover:border-sand transition-colors rounded text-center group"
                >
                  <span className="text-2xl block mb-2">{category.icon}</span>
                  <span className="text-sm group-hover:text-sand transition-colors">
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
