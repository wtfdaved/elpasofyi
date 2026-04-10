'use client';

import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { ComingSoonSection } from '../components/ComingSoonSection';

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
  // JSON-LD CollectionPage Schema for SEO
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'El Paso Shopping & Local Makers',
    description: 'Discover El Paso\'s best shopping, local boutiques, vintage markets, and artisan makers. Explore Kern Place, Arts District, Downtown, and East Side Markets.',
    url: 'https://elpaso.fyi/shopping',
    inLanguage: 'en-US',
  };

  return (
    <>
      {/* Inject CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />

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
                El Paso Shopping &<span className="text-sand"> Local Makers</span>
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

        {/* Coming Soon Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <ComingSoonSection
            icon={ShoppingBag}
            heading="Curating the best local shops..."
            subheading="A deep dive into El Paso boutiques, vintage markets, and local makers is dropping soon."
          />
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
      </main>
    </>
  );
}
