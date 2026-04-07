'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Schema from '../components/Schema';

export const metadata = {
  title: 'Best Shopping & Local Makers in El Paso | elpaso.fyi',
  description: 'Support local El Paso makers, artisans, and independent shops. Discover unique products, handmade goods, and local businesses.',
  keywords: 'local shops El Paso, El Paso makers, artisans El Paso, local products, independent shops',
  openGraph: {
    title: 'Shopping & Local Makers in El Paso',
    description: 'Discover El Paso\'s local shops, makers, and artisans.',
    url: 'https://elpaso.fyi/shopping',
    type: 'website',
  },
};

interface Shop {
  id: string;
  name: string;
  type: string;
  neighborhood: string;
  description: string;
  specialties: string[];
}

const shops: Shop[] = [
  {
    id: '1',
    name: 'Local Artisan Galleries - Arts District',
    type: 'Art Gallery & Artist Studios',
    neighborhood: 'Arts District',
    description: 'Independent galleries and artist studios showcasing local and regional artists. Support creators directly.',
    specialties: ['Original Art', 'Photography', 'Sculptures', 'Mixed Media', 'Street Art'],
  },
  {
    id: '2',
    name: 'Kern Place Independent Boutiques',
    type: 'Fashion & Accessories',
    neighborhood: 'Kern Place',
    description: 'Curated selection of independent boutiques offering unique clothing, accessories, and vintage finds.',
    specialties: ['Fashion', 'Accessories', 'Vintage Clothing', 'Local Designers', 'Unique Pieces'],
  },
  {
    id: '3',
    name: 'El Paso Artisan Markets',
    type: 'Farmers & Craft Markets',
    neighborhood: 'Multiple',
    description: 'Weekly and seasonal markets featuring local food producers, crafters, and makers selling directly.',
    specialties: ['Fresh Produce', 'Handmade Crafts', 'Local Food', 'Organic Products', 'Direct from Makers'],
  },
  {
    id: '4',
    name: 'Local Leather & Craft Workshops',
    type: 'Artisan Products',
    neighborhood: 'Downtown',
    description: 'Family-owned businesses crafting leather goods, pottery, textiles, and other handmade products.',
    specialties: ['Leather Goods', 'Pottery', 'Textiles', 'Jewelry', 'Handcrafted Items'],
  },
  {
    id: '5',
    name: 'Independent Coffee & Tea Shops',
    type: 'Specialty Beverages',
    neighborhood: 'Multiple',
    description: 'Local coffee roasters and tea importers serving El Paso residents with quality artisan beverages.',
    specialties: ['Specialty Coffee', 'Locally Roasted', 'Tea Selection', 'Cafe Culture', 'Artisan Preparation'],
  },
  {
    id: '6',
    name: 'El Paso Record Shops',
    type: 'Vinyl & Music',
    neighborhood: 'Multiple',
    description: 'Independent record shops and music stores supporting vinyl culture and local musicians.',
    specialties: ['Vinyl Records', 'Local Music', 'Vintage Records', 'Music Memorabilia', 'Music Gear'],
  },
  {
    id: '7',
    name: 'Local Bakeries & Food Artisans',
    type: 'Food & Beverages',
    neighborhood: 'Multiple',
    description: 'Family-owned bakeries and food producers making traditional and innovative El Paso specialties.',
    specialties: ['Fresh Baked Goods', 'Traditional Recipes', 'Artisan Food', 'Local Flavors', 'Quality Ingredients'],
  },
  {
    id: '8',
    name: 'El Paso Bookstores & Vintage Shops',
    type: 'Books & Vintage',
    neighborhood: 'Multiple',
    description: 'Independent bookstores and vintage shops offering unique finds and local author works.',
    specialties: ['Independent Books', 'Local Authors', 'Vintage Items', 'Used Books', 'Collectibles'],
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

export default function ShoppingPage() {
  return (
    <>
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
                Shopping &<span className="text-sand"> Local Makers</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Support El Paso's creative community. Discover local artisans, independent shops, makers, and local products that represent the heart of the city.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-dark-bg transition-colors rounded">
                All Shops
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Art & Galleries
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Handmade & Craft
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Food & Beverage
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Shops Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {shops.map((shop) => (
                <motion.article
                  key={shop.id}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-6 hover:border-sand transition-colors rounded group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block text-xs px-2 py-1 border border-sand text-sand rounded mb-2 uppercase tracking-wider">
                        {shop.type}
                      </span>
                      <h2 className="text-lg font-bold mb-1 group-hover:text-sand transition-colors">
                        {shop.name}
                      </h2>
                    </div>
                    <Heart className="w-5 h-5 text-sand opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-sm text-dark-text-muted mb-4 flex-1">
                    {shop.description}
                  </p>

                  <div className="mb-4 pb-4 border-t border-dark-text-dim pt-4">
                    <p className="text-xs text-dark-text-dim font-semibold mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {shop.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-xs px-2 py-1 bg-dark-bg-alt border border-dark-text-dim text-dark-text-muted rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-dark-text-dim">
                    <MapPin className="w-3 h-3 text-rust" />
                    <span>{shop.neighborhood}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Why Shop Local Section */}
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
                Why Support<span className="text-sand"> Local Makers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Keep Money Local</h3>
                  <p className="text-dark-text-muted">
                    When you shop at independent businesses, your money stays in the El Paso community, supporting jobs and reinvestment in our neighborhoods.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Unique Products</h3>
                  <p className="text-dark-text-muted">
                    Find items you can't get anywhere else. Support artisans creating one-of-a-kind pieces that reflect El Paso's unique culture and creativity.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Build Community</h3>
                  <p className="text-dark-text-muted">
                    Shopping local is about relationships. Get to know the makers behind the products and be part of El Paso's creative community.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-dark-text-dim pt-8">
              <h2 className="text-2xl font-bold mb-4">Shopping Neighborhoods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors">
                  <h3 className="text-sand font-semibold mb-2">Kern Place</h3>
                  <p className="text-sm text-dark-text-muted">Tree-lined streets with independent boutiques, galleries, and local shops. The premier shopping destination.</p>
                </div>
                <div className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors">
                  <h3 className="text-sand font-semibold mb-2">Arts District</h3>
                  <p className="text-sm text-dark-text-muted">Galleries, artist studios, and creative shops. The heart of El Paso's art scene and maker culture.</p>
                </div>
                <div className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors">
                  <h3 className="text-sand font-semibold mb-2">Downtown</h3>
                  <p className="text-sm text-dark-text-muted">Historic buildings home to craft shops, galleries, and specialty retailers. Walkable exploration.</p>
                </div>
                <div className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors">
                  <h3 className="text-sand font-semibold mb-2">East Side Markets</h3>
                  <p className="text-sm text-dark-text-muted">Local markets and shops featuring food producers and traditional crafts. Authentic El Paso commerce.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Markets & Events */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-dark-text-dim">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Markets & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Farmers Markets</h3>
                  <p className="text-dark-text-muted">
                    Year-round farmers markets featuring local food producers, artisans, and crafters. Regular weekend markets in various neighborhoods.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Art Markets & Craft Fairs</h3>
                  <p className="text-dark-text-muted">
                    Seasonal art markets and craft fairs where local makers sell directly. Great for unique holiday gifts and supporting creators.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Gallery Openings & Art Walks</h3>
                  <p className="text-dark-text-muted">
                    First Friday art walks and gallery openings in the Arts District. Connect with artists and discover new work throughout the year.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Pop-up Shops & Maker Events</h3>
                  <p className="text-dark-text-muted">
                    Follow local makers on social media for pop-up shops and special events. El Paso\'s maker community is active and welcoming.
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
