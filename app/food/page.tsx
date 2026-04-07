'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import Schema from '../components/Schema';

export const metadata = {
  title: 'Best Restaurants & Food in El Paso - Local Food Guide | elpaso.fyi',
  description: 'Discover the best restaurants, tacos, and food scene in El Paso, TX. Local recommendations from the community for authentic El Paso dining experiences.',
  keywords: 'best restaurants El Paso, tacos El Paso, food El Paso, best food in El Paso, El Paso restaurants, local food guide',
  openGraph: {
    title: 'Best Food & Restaurants in El Paso - Local Guide',
    description: 'Discover the best restaurants and authentic food experiences in El Paso, TX.',
    url: 'https://elpaso.fyi/food',
    type: 'website',
  },
};

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  neighborhood: string;
  description: string;
  specialty: string;
  priceRange: string;
}

// Sample restaurant data
const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Tacos El Paso Authentic',
    cuisine: 'Mexican',
    rating: 4.8,
    reviews: 342,
    neighborhood: 'Downtown',
    description: 'Family-owned taco spot serving authentic street-style tacos with homemade tortillas since 1985.',
    specialty: 'Carnitas & Al Pastor Tacos',
    priceRange: '$',
  },
  {
    id: '2',
    name: 'The Chop House',
    cuisine: 'American Steakhouse',
    rating: 4.6,
    reviews: 187,
    neighborhood: 'Central',
    description: 'Premium steakhouse featuring locally-sourced meats and an impressive wine selection.',
    specialty: 'Dry-Aged Steaks & Seafood',
    priceRange: '$$$',
  },
  {
    id: '3',
    name: 'Border Cafe y Cocina',
    cuisine: 'New Mexican',
    rating: 4.7,
    reviews: 256,
    neighborhood: 'Kern Place',
    description: 'Modern take on traditional New Mexican cuisine with house-made chile blends.',
    specialty: 'Green & Red Chile Dishes',
    priceRange: '$$',
  },
  {
    id: '4',
    name: 'Lola\'s Bistro',
    cuisine: 'Contemporary American',
    rating: 4.5,
    reviews: 198,
    neighborhood: 'Arts District',
    description: 'Farm-to-table bistro with seasonal menus and craft cocktails in a cozy atmosphere.',
    specialty: 'House-Made Pasta & Local Vegetables',
    priceRange: '$$',
  },
  {
    id: '5',
    name: 'Cocina del Barrio',
    cuisine: 'Street Food',
    rating: 4.9,
    reviews: 412,
    neighborhood: 'East Side',
    description: 'Hidden gem serving traditional home cooking and street food favorites beloved by locals.',
    specialty: 'Enchiladas & Gorditas',
    priceRange: '$',
  },
  {
    id: '6',
    name: 'Monsoon Asian Kitchen',
    cuisine: 'Asian Fusion',
    rating: 4.4,
    reviews: 165,
    neighborhood: 'Midtown',
    description: 'Creative Asian fusion dishes combining Thai, Vietnamese, and Japanese influences.',
    specialty: 'Pad Thai & House-Made Dumplings',
    priceRange: '$$',
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

const restaurantSchemaArray = restaurants.map((restaurant) => ({
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.name,
  description: restaurant.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'El Paso',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: restaurant.rating.toString(),
    reviewCount: restaurant.reviews.toString(),
  },
  cuisine: restaurant.cuisine,
  servesCuisine: restaurant.cuisine,
}));

export default function FoodPage() {
  return (
    <>
      {/* Inject Restaurant schemas */}
      {restaurantSchemaArray.map((schema, idx) => (
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
                El Paso<span className="text-sand"> Food Guide</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Discover the best restaurants, authentic tacos, and food scene in El Paso, TX. From street food favorites to upscale dining, find where locals eat.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-dark-bg transition-colors rounded">
                All Restaurants
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Mexican
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Street Food
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Upscale
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Restaurants Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {restaurants.map((restaurant) => (
                <motion.article
                  key={restaurant.id}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-6 hover:border-sand transition-colors rounded group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-lg font-bold mb-1 group-hover:text-sand transition-colors">
                        {restaurant.name}
                      </h2>
                      <p className="text-xs text-dark-text-muted uppercase tracking-wider">
                        {restaurant.cuisine}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <span className="text-sm font-bold text-sand">
                          {restaurant.rating}
                        </span>
                        <Star className="w-4 h-4 fill-sand text-sand" />
                      </div>
                      <p className="text-xs text-dark-text-dim">
                        {restaurant.reviews} reviews
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-dark-text-muted mb-3 flex-1">
                    {restaurant.description}
                  </p>

                  <div className="space-y-2 text-xs text-dark-text-dim mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-rust" />
                      <span>{restaurant.neighborhood}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sand font-semibold">Specialty:</span>
                      <span>{restaurant.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-neon-cyan" />
                      <span>{restaurant.priceRange}</span>
                    </div>
                  </div>

                  <button className="text-sand text-sm font-mono font-bold hover:text-neon-cyan transition-colors">
                    View Details →
                  </button>
                </motion.article>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Tips Section */}
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
                Local Food<span className="text-sand"> Tips</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Pro Tip #1</h3>
                  <p className="text-dark-text-muted">
                    Ask for the carne asada "well done" for crispy edges. Locals know.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Pro Tip #2</h3>
                  <p className="text-dark-text-muted">
                    Visit East Side restaurants for the most authentic, affordable street food experiences.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Pro Tip #3</h3>
                  <p className="text-dark-text-muted">
                    Always ask for fresh tortillas. Most places make them daily.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Pro Tip #4</h3>
                  <p className="text-dark-text-muted">
                    Best time to visit food trucks: late night after 10 PM when the crowds line up.
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
