'use client';

import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import Schema from '../components/Schema';
import InteractiveMap from '../components/InteractiveMap';

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

const neighborhoodSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'El Paso Neighborhoods & Districts',
  description: 'Explore the districts of El Paso, TX. From the historic Downtown and scenic West Side to the growing Far East.',
  url: 'https://elpaso.fyi/neighborhoods',
};

export default function NeighborhoodsPage() {
  return (
    <>
      {/* Inject neighborhood schema */}
      <Schema schema={neighborhoodSchema} />

      <main className="bg-light-bg text-slate-900 min-h-screen">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-4">
                El Paso<span className="text-sunset-orange"> Districts</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl">
                Explore the districts of El Paso, TX. From the historic Downtown and scenic West Side to the growing Far East. Discover what makes each region unique.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <InteractiveMap />
            </motion.div>
          </motion.div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="flex justify-center mb-6">
                <Map className="w-16 h-16 text-sunset-orange opacity-60" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3 text-slate-900">
                Coming Soon
              </h2>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                Deep dives into local neighborhoods dropping soon. Explore detailed guides, dining recommendations, attractions, and insider tips for each district.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
