'use client';

import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import Schema from '../components/Schema';

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'El Paso Guides & Itineraries',
  description: 'Local guides and deep-dive itineraries for exploring El Paso, Texas. Weekend itineraries, day trips, and insider tips coming soon.',
  url: 'https://elpaso.fyi/guides',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'elpaso.fyi',
    description: 'Your guide to the real El Paso',
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function GuidesPage() {
  return (
    <>
      <Schema schema={collectionSchema} />

      <main className="bg-dark-bg text-dark-text min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl"
        >
          {/* Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <Compass className="w-16 h-16 text-sunset-orange" />
          </motion.div>

          {/* Main Header */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 text-dark-text">
            Mapping out the city...
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-dark-text-muted">
            Deep-dive itineraries and local guides dropping soon.
          </p>
        </motion.div>
      </main>
    </>
  );
}
