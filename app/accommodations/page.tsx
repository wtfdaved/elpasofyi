'use client';

import { motion } from 'framer-motion';
import { MapPin, DollarSign, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Schema from '../components/Schema';

interface Accommodation {
  id: string;
  slug: string;
  name: string;
  type: string;
  neighborhood: string;
  priceRange: string;
  rating: number;
  description: string;
  highlights: string[];
  bestFor: string;
}

// Sample accommodations data
const accommodations: Accommodation[] = [
  {
    id: '1',
    slug: 'camino-real-el-paso',
    name: 'Camino Real El Paso',
    type: 'Luxury Hotel',
    neighborhood: 'Downtown',
    priceRange: '$$$',
    rating: 4.5,
    description: 'Iconic luxury hotel in the heart of downtown. Historic architecture, upscale amenities, excellent dining, and the best downtown location.',
    highlights: ['Historic Property', 'Downtown Location', 'Fine Dining', 'Elegant Rooms', 'Event Spaces'],
    bestFor: 'Business travelers and luxury seekers wanting downtown experience',
  },
  {
    id: '2',
    slug: 'el-paso-marriott',
    name: 'El Paso Marriott',
    type: 'Upscale Hotel',
    neighborhood: 'Central',
    priceRange: '$$',
    rating: 4.3,
    description: 'Well-appointed hotel with modern amenities, central location near attractions, pool, and business facilities.',
    highlights: ['Central Location', 'Pool', 'Business Center', 'Modern Rooms', 'Conference Facilities'],
    bestFor: 'Business and leisure travelers wanting convenience and comfort',
  },
  {
    id: '3',
    slug: 'paso-del-norte-hotel',
    name: 'Paso del Norte Hotel',
    type: 'Historic Hotel',
    neighborhood: 'Downtown',
    priceRange: '$$',
    rating: 4.2,
    description: 'Historic 1912 hotel recently renovated, combining period charm with modern comfort. Great downtown location for exploring.',
    highlights: ['Historic Building', 'Recently Renovated', 'Unique Character', 'Downtown Location', 'Boutique Feel'],
    bestFor: 'Travelers wanting character and history with downtown walkability',
  },
  {
    id: '4',
    slug: 'el-paso-artspace-lofts',
    name: 'El Paso ArtSpace Lofts',
    type: 'Boutique/Lofts',
    neighborhood: 'Arts District',
    priceRange: '$$',
    rating: 4.4,
    description: 'Artist-friendly lofts in the Arts District. Unique accommodations in the creative heart of El Paso. Perfect for art lovers.',
    highlights: ['Arts District Location', 'Artist Community', 'Unique Design', 'Creative Vibe', 'Gallery Access'],
    bestFor: 'Artists and creative travelers wanting to be in the arts scene',
  },
  {
    id: '5',
    slug: 'kern-place-bed-breakfast',
    name: 'Kern Place Bed & Breakfast',
    type: 'Bed & Breakfast',
    neighborhood: 'Kern Place',
    priceRange: '$$',
    rating: 4.6,
    description: 'Charming B&B in the heart of Kern Place. Personal service, local knowledge, beautiful neighborhood location.',
    highlights: ['Personal Service', 'Local Knowledge', 'Charming Neighborhood', 'Home-Made Breakfast', 'Walking Distance to Shops'],
    bestFor: 'Travelers wanting authentic local experience and personalized service',
  },
  {
    id: '6',
    slug: 'inn-at-el-paso',
    name: 'The Inn at El Paso',
    type: 'Mid-Range Hotel',
    neighborhood: 'Central',
    priceRange: '$$',
    rating: 4.1,
    description: 'Comfortable, reliable hotel with good amenities. Central location, value-oriented, perfect for families.',
    highlights: ['Family-Friendly', 'Value-Oriented', 'Central Location', 'Pool', 'Breakfast Included'],
    bestFor: 'Families and budget-conscious travelers seeking comfort',
  },
  {
    id: '7',
    slug: 'el-paso-budget-suites',
    name: 'Budget Suites by Choice Hotels',
    type: 'Budget Hotel',
    neighborhood: 'Various',
    priceRange: '$',
    rating: 3.8,
    description: 'Affordable, no-frills accommodations. Clean rooms, basic amenities, great for budget travelers and road trippers.',
    highlights: ['Budget-Friendly', 'Clean Rooms', 'Basic Amenities', 'Multiple Locations', 'Extended Stay Options'],
    bestFor: 'Budget travelers and those looking for simple, affordable lodging',
  },
  {
    id: '8',
    slug: 'el-paso-airbnb-experiences',
    name: 'El Paso Airbnb & Vacation Rentals',
    type: 'Vacation Rentals',
    neighborhood: 'Multiple',
    priceRange: '$-$$$',
    rating: 4.3,
    description: 'Local homes and apartments throughout El Paso. Experience El Paso like a local with fully-equipped homes.',
    highlights: ['Local Experience', 'Flexible Pricing', 'Multiple Locations', 'Full Kitchens', 'Neighborhood Living'],
    bestFor: 'Families, groups, and travelers wanting authentic local living experience',
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

const accommodationSchemaArray = accommodations.map((accommodation) => ({
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: accommodation.name,
  description: accommodation.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'El Paso',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: accommodation.rating.toString(),
    reviewCount: '100+',
  },
}));

export default function AccommodationsPage() {
  return (
    <>
      {accommodationSchemaArray.map((schema, idx) => (
        <Schema key={idx} schema={schema} />
      ))}

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
                Where to<span className="text-sand"> Stay in El Paso</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Curated accommodations for every budget and style. From luxury downtown hotels to charming neighborhood B&Bs, find the perfect place to rest in El Paso.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-dark-bg transition-colors rounded">
                All Options
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Luxury
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Budget-Friendly
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Unique Stays
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Accommodations Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {accommodations.map((accommodation) => (
                <motion.article
                  key={accommodation.id}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-6 hover:border-sand transition-colors rounded group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block text-xs px-2 py-1 border border-sand text-sand rounded mb-2 uppercase tracking-wider">
                        {accommodation.type}
                      </span>
                      <h2 className="text-lg font-bold mb-1 group-hover:text-sand transition-colors">
                        {accommodation.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-dark-text-muted mb-4 flex-1">
                    {accommodation.description}
                  </p>

                  <div className="space-y-2 text-xs text-dark-text-dim mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-rust" />
                        <span>{accommodation.neighborhood}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sand">{accommodation.rating}</span>
                        <Star className="w-3 h-3 fill-sand text-sand" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-neon-green" />
                      <span>{accommodation.priceRange}</span>
                    </div>
                  </div>

                  <div className="mb-4 pb-4 border-t border-dark-text-dim pt-4">
                    <p className="text-xs text-dark-text-muted font-semibold mb-2">Best for:</p>
                    <p className="text-xs text-dark-text-dim">{accommodation.bestFor}</p>
                  </div>

                  <Link
                    href={`/accommodations/${accommodation.slug}`}
                    className="text-sand text-sm font-mono font-bold hover:text-neon-cyan transition-colors flex items-center gap-2"
                  >
                    View Details <ExternalLink className="w-3 h-3" />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Planning Tips */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-dark-text-dim">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Choosing Your<span className="text-sand"> El Paso Accommodations</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Location Matters</h3>
                  <p className="text-dark-text-muted">
                    Downtown for attractions and culture. Kern Place for shopping. East Side for authenticity. Choose based on what you want to experience.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Budget Options</h3>
                  <p className="text-dark-text-muted">
                    Budget hotels offer value. Vacation rentals are great for families. Boutique stays provide unique experiences. Something for everyone.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Book Directly</h3>
                  <p className="text-dark-text-muted">
                    Contact locally-owned B&Bs directly for best rates. Hotel chains have various booking options. Compare prices across platforms.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
