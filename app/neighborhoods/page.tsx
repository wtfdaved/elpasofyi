'use client';

import { motion } from 'framer-motion';
import { MapPin, Utensils, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Schema from '../components/Schema';

interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  description: string;
  vibes: string;
  visitReason: string;
  bestFor: string[];
  highlights: string[];
  topRestaurants: number;
  topAttractions: number;
}

// Sample neighborhoods data
const neighborhoods: Neighborhood[] = [
  {
    id: '1',
    slug: 'downtown-el-paso',
    name: 'Downtown El Paso',
    description: 'The historic heart of the city, Downtown El Paso is experiencing a vibrant renaissance with galleries, restaurants, and cultural venues breathing new life into historic buildings.',
    vibes: 'Cultural, Historic, Vibrant',
    visitReason: 'Art galleries, live music, dining, and history',
    bestFor: ['Art Lovers', 'History Buffs', 'Foodies', 'Night Out'],
    highlights: ['Art District', 'San Jacinto Plaza', 'Historic Buildings', 'Museums', 'Live Music Venues'],
    topRestaurants: 15,
    topAttractions: 8,
  },
  {
    id: '2',
    slug: 'kern-place',
    name: 'Kern Place',
    description: 'A charming historic neighborhood known for beautiful tree-lined streets, locally-owned shops, boutiques, and excellent restaurants. Perfect for a leisurely weekend afternoon.',
    vibes: 'Charming, Upscale, Walkable',
    visitReason: 'Shopping, dining, and weekend strolls',
    bestFor: ['Shoppers', 'Brunch Lovers', 'Tourists', 'Couples'],
    highlights: ['Tree-Lined Streets', 'Local Shops', 'Boutiques', 'Fine Dining', 'Galleries'],
    topRestaurants: 12,
    topAttractions: 5,
  },
  {
    id: '3',
    slug: 'east-side-el-paso',
    name: 'East Side',
    description: 'The authentic heart of El Paso\'s culture, the East Side is where locals go for the best street food, traditional taquerias, and a genuine taste of community life.',
    vibes: 'Authentic, Lively, Local',
    visitReason: 'Street food, tacos, local flavor',
    bestFor: ['Foodies', 'Locals', 'Budget-Conscious Travelers', 'Culture Seekers'],
    highlights: ['Street Tacos', 'Local Restaurants', 'Family-Owned Shops', 'Community', 'Real El Paso'],
    topRestaurants: 25,
    topAttractions: 3,
  },
  {
    id: '4',
    slug: 'arts-district',
    name: 'Arts District',
    description: 'Where creativity thrives. The Arts District is filled with galleries, street art, independent studios, creative shops, and a vibrant creative community.',
    vibes: 'Creative, Artistic, Colorful',
    visitReason: 'Street art, galleries, creative scene',
    bestFor: ['Artists', 'Photographers', 'Creatives', 'Instagram Enthusiasts'],
    highlights: ['Street Murals', 'Galleries', 'Artist Studios', 'Creative Cafes', 'Street Art'],
    topRestaurants: 10,
    topAttractions: 12,
  },
  {
    id: '5',
    slug: 'midtown-el-paso',
    name: 'Midtown',
    description: 'A diverse, eclectic neighborhood with a mix of restaurants, bars, and shops. Midtown offers a more casual, accessible feel while maintaining character and charm.',
    vibes: 'Diverse, Casual, Mixed',
    visitReason: 'Diverse dining, casual atmosphere',
    bestFor: ['Casual Diners', 'Mixed Groups', 'Diverse Tastes', 'Night Life'],
    highlights: ['Diverse Restaurants', 'Casual Bars', 'Mixed Shops', 'Walkable', 'Accessible'],
    topRestaurants: 20,
    topAttractions: 4,
  },
  {
    id: '6',
    slug: 'central-el-paso',
    name: 'Central El Paso',
    description: 'The central core of the city, Central offers a mix of business, culture, and dining. Home to major attractions like museums and parks.',
    vibes: 'Urban, Mixed, Convenient',
    visitReason: 'Central attractions, museums, parks',
    bestFor: ['Attraction Visitors', 'Museum Goers', 'Business Travelers', 'Families'],
    highlights: ['Museums', 'Parks', 'Central Location', 'Diverse Dining', 'Attractions'],
    topRestaurants: 18,
    topAttractions: 10,
  },
  {
    id: '7',
    slug: 'montwood',
    name: 'Montwood',
    description: 'An emerging neighborhood with growing dining scene, independent shops, and a strong sense of community. Perfect for discovering newer El Paso.',
    vibes: 'Emerging, Trendy, Community-Focused',
    visitReason: 'New restaurants, hidden gems, local vibe',
    bestFor: ['Foodies', 'Trendsetters', 'New Explorers', 'Young Professionals'],
    highlights: ['New Restaurants', 'Local Shops', 'Coffee Shops', 'Community Events', 'Emerging Scene'],
    topRestaurants: 14,
    topAttractions: 2,
  },
  {
    id: '8',
    slug: 'upper-valley',
    name: 'Upper Valley',
    description: 'The northern part of El Paso with family-friendly attractions, parks, and suburban charm. Great for families and outdoor enthusiasts.',
    vibes: 'Family-Friendly, Suburban, Outdoor',
    visitReason: 'Family attractions, parks, suburban feel',
    bestFor: ['Families', 'Outdoor Enthusiasts', 'Parents', 'Nature Lovers'],
    highlights: ['Parks', 'Family Attractions', 'Zoo', 'Water Park', 'Green Spaces'],
    topRestaurants: 12,
    topAttractions: 7,
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

const neighborhoodSchemaArray = neighborhoods.map((neighborhood) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: neighborhood.name,
  description: neighborhood.description,
  areaServed: {
    '@type': 'City',
    name: neighborhood.name,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'El Paso',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
}));

export default function NeighborhoodsPage() {
  return (
    <>
      {/* Inject neighborhood schemas */}
      {neighborhoodSchemaArray.map((schema, idx) => (
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
                El Paso<span className="text-sand"> Neighborhoods</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Explore El Paso\'s most vibrant neighborhoods. Discover unique character, history, dining, shops, and the soul of each area. From Downtown culture to East Side authenticity.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-dark-bg transition-colors rounded">
                All Neighborhoods
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Dining & Food
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Shopping & Culture
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Family-Friendly
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Neighborhoods Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {neighborhoods.map((neighborhood) => (
                <motion.article
                  key={neighborhood.id}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-6 hover:border-sand transition-colors rounded group flex flex-col"
                >
                  <div className="mb-4">
                    <span className="inline-block text-xs px-2 py-1 border border-sand text-sand rounded mb-2 uppercase tracking-wider">
                      {neighborhood.vibes}
                    </span>
                    <h2 className="text-lg font-bold mb-2 group-hover:text-sand transition-colors">
                      {neighborhood.name}
                    </h2>
                  </div>

                  <p className="text-sm text-dark-text-muted mb-4 flex-1">
                    {neighborhood.description}
                  </p>

                  <div className="space-y-3 mb-4 text-xs">
                    <div>
                      <p className="text-dark-text-dim font-semibold mb-1">Visit for:</p>
                      <p className="text-dark-text-muted">{neighborhood.visitReason}</p>
                    </div>
                    <div>
                      <p className="text-dark-text-dim font-semibold mb-1">Best for:</p>
                      <div className="flex flex-wrap gap-1">
                        {neighborhood.bestFor.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 bg-dark-bg-alt text-dark-text-muted rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-dark-text-dim mb-4 border-t border-dark-text-dim pt-4">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-3 h-3 text-sand" />
                      <span>{neighborhood.topRestaurants}+ restaurants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-rust" />
                      <span>{neighborhood.topAttractions}+ attractions</span>
                    </div>
                  </div>

                  <Link
                    href={`/neighborhoods/${neighborhood.slug}`}
                    className="text-sand text-sm font-mono font-bold hover:text-neon-cyan transition-colors flex items-center gap-2"
                  >
                    Explore <ExternalLink className="w-3 h-3" />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Comparison Section */}
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
                Finding Your<span className="text-sand"> Perfect Neighborhood</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">First-Time Visitors</h3>
                  <p className="text-dark-text-muted">
                    Start Downtown for culture and history, then explore East Side for authentic food and real El Paso. Arts District is perfect for photography.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Foodies</h3>
                  <p className="text-dark-text-muted">
                    East Side for street tacos and local spots. Downtown for upscale dining. Montwood for trending restaurants and new discoveries.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Families</h3>
                  <p className="text-dark-text-muted">
                    Upper Valley offers parks and family attractions. Central has museums and green spaces. Kern Place is safe and walkable for family exploration.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
