'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';

// Mock restaurant data - matches food/page.tsx
const restaurantsDatabase: Record<string, {
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  neighborhood: string;
  description: string;
  specialty: string;
  priceRange: string;
  hours: string;
  address: string;
  highlights: string[];
  content: string;
  tips: string[];
}> = {
  '1': {
    name: 'Tacos El Paso Authentic',
    cuisine: 'Mexican',
    rating: 4.8,
    reviews: 342,
    neighborhood: 'Downtown',
    description: 'Family-owned taco spot serving authentic street-style tacos with homemade tortillas since 1985.',
    specialty: 'Carnitas & Al Pastor Tacos',
    priceRange: '$',
    hours: '10am - 11pm Daily',
    address: 'Downtown El Paso, TX',
    highlights: ['Homemade Tortillas', 'Family-Owned Since 1985', 'Authentic Street Tacos', 'Local Favorite', 'Great Prices'],
    tips: [
      'Ask for fresh tortillas - they\'re made daily',
      'Come hungry - portions are generous',
      'Best during lunch and dinner hours',
      'Locals know this is the real deal',
      'Cash friendly',
    ],
    content: `
      <h2>Tacos El Paso Authentic: A Community Institution</h2>
      <p>Since 1985, Tacos El Paso Authentic has been serving the El Paso community with homemade tortillas and authentic street-style tacos. This family-owned restaurant is proof that the best food often comes from passion and tradition, not fancy decor.</p>

      <h2>What Makes Them Special</h2>
      <p>The hallmark of Tacos El Paso Authentic is their commitment to quality ingredients and traditional preparation. Every tortilla is made fresh, and the meat is prepared with care and respect for traditional recipes.</p>

      <h2>Menu Highlights</h2>
      <ul>
        <li><strong>Carnitas Tacos</strong> - Slow-cooked pork with perfect seasoning</li>
        <li><strong>Al Pastor Tacos</strong> - Marinated pork with pineapple notes</li>
        <li><strong>Carne Asada</strong> - Grilled to perfection with char</li>
        <li><strong>Homemade Tortillas</strong> - The foundation of everything</li>
        <li><strong>Traditional Sides</strong> - Beans, rice, and fresh salsa</li>
      </ul>

      <h2>The Atmosphere</h2>
      <p>Don't expect fancy decor or trendy ambiance. This is authentic, no-frills Mexican food at its best. The simple setting lets the food speak for itself. You'll see families, workers, and locals of all backgrounds sharing meals.</p>

      <h2>Why Locals Love It</h2>
      <p>Tacos El Paso Authentic represents the heart of El Paso's food culture. It's where authenticity, tradition, and affordability meet. Prices are fair, portions are generous, and quality is never compromised.</p>

      <h2>Pro Tips</h2>
      <ul>
        <li>Arrive during lunch (11am-2pm) or dinner (5pm-9pm) for the freshest preparations</li>
        <li>Request your tacos "bien hecho" (well-done) for crispy edges</li>
        <li>The house salsa is fresh and excellent</li>
        <li>Save room for different taco varieties - try at least 3 types</li>
      </ul>

      <h2>Community Favorite</h2>
      <p>Over nearly 40 years, Tacos El Paso Authentic has become more than a restaurant - it's a community gathering place. This is where memories are made and traditions continue.</p>
    `,
  },
  '2': {
    name: 'The Chop House',
    cuisine: 'American Steakhouse',
    rating: 4.6,
    reviews: 187,
    neighborhood: 'Central',
    description: 'Premium steakhouse featuring locally-sourced meats and an impressive wine selection.',
    specialty: 'Dry-Aged Steaks & Seafood',
    priceRange: '$$$',
    hours: '5pm - 10pm Daily',
    address: 'Central El Paso, TX',
    highlights: ['Dry-Aged Steaks', 'Premium Wine List', 'Upscale Dining', 'Special Occasions', 'Professional Service'],
    tips: [
      'Make reservations in advance',
      'Dress nicely - it\'s an upscale establishment',
      'Ask for wine pairings - excellent recommendations',
      'Try their signature dry-aged ribeye',
      'Great for celebrations and special occasions',
    ],
    content: `
      <h2>The Chop House: Upscale Steakhouse Excellence</h2>
      <p>The Chop House represents upscale dining in El Paso. A commitment to quality meats, professional preparation, and exceptional service makes this the go-to steakhouse for special occasions and refined dining experiences.</p>

      <h2>The Meat Selection</h2>
      <p>Their dry-aged steaks are the centerpiece. Each steak is carefully selected, aged to perfection, and prepared by expert grill masters who understand the art of cooking beef.</p>

      <h2>Dining Experience</h2>
      <p>From the moment you enter, professional service sets the tone. The atmosphere is upscale but not pretentious. The knowledgeable staff enhances your dining experience with thoughtful recommendations.</p>

      <h2>Why It Stands Out</h2>
      <ul>
        <li>Quality: Every element is premium, from meats to sides</li>
        <li>Service: Attentive and knowledgeable staff</li>
        <li>Atmosphere: Refined and comfortable</li>
        <li>Wine: Curated selection of quality wines</li>
        <li>Seasonals: Thoughtful special preparations</li>
      </ul>
    `,
  },
  '3': {
    name: 'Border Cafe y Cocina',
    cuisine: 'New Mexican',
    rating: 4.7,
    reviews: 256,
    neighborhood: 'Kern Place',
    description: 'Modern take on traditional New Mexican cuisine with house-made chile blends.',
    specialty: 'Green & Red Chile Dishes',
    priceRange: '$$',
    hours: '11am - 10pm Daily',
    address: 'Kern Place, El Paso, TX',
    highlights: ['House-Made Chile', 'New Mexican Cuisine', 'Modern Approach', 'Quality Ingredients', 'Kern Place Location'],
    tips: [
      'Try both red and green chile versions',
      'Ask about their chile sourcing - they take it seriously',
      'Perfect for lunch or dinner',
      'Family-friendly atmosphere',
      'Good wine and margarita selection',
    ],
    content: `
      <h2>Border Cafe y Cocina: New Mexican Excellence</h2>
      <p>Border Cafe y Cocina brings a modern approach to traditional New Mexican cuisine. Their house-made chile blends are the foundation of a menu that respects tradition while embracing contemporary techniques.</p>

      <h2>The Chile Philosophy</h2>
      <p>Chile is the soul of New Mexican cuisine, and Border Cafe y Cocina treats it with the respect it deserves. Their house-made blends are carefully balanced and complex.</p>

      <h2>Dining at Border Cafe</h2>
      <p>The atmosphere is warm and inviting. Whether you're dining for a quick lunch or a leisurely dinner, you'll feel welcomed. The staff's knowledge of the menu is evident in their recommendations.</p>

      <h2>Why Visit</h2>
      <ul>
        <li>Authentic New Mexican cuisine with modern refinement</li>
        <li>House-made chile blends - the real deal</li>
        <li>Quality ingredients prepared with care</li>
        <li>Beautiful Kern Place location</li>
        <li>Perfect balance of tradition and innovation</li>
      </ul>
    `,
  },
  '4': {
    name: 'Lola\'s Bistro',
    cuisine: 'Contemporary American',
    rating: 4.5,
    reviews: 198,
    neighborhood: 'Arts District',
    description: 'Farm-to-table bistro with seasonal menus and craft cocktails in a cozy atmosphere.',
    specialty: 'House-Made Pasta & Local Vegetables',
    priceRange: '$$',
    hours: '5pm - 10pm Tue-Sat, 11am-3pm Sun Brunch',
    address: 'Arts District, El Paso, TX',
    highlights: ['Farm-to-Table', 'Seasonal Menu', 'House-Made Pasta', 'Craft Cocktails', 'Cozy Atmosphere'],
    tips: [
      'Make reservations - especially weekends',
      'Ask about daily specials',
      'Cocktails are creative and well-made',
      'Great for date nights',
      'Sunday brunch is excellent',
    ],
    content: `
      <h2>Lola\'s Bistro: Farm-to-Table Innovation</h2>
      <p>Lola\'s Bistro embodies the farm-to-table philosophy. Seasonal menus showcase local produce, house-made pasta is prepared fresh, and every dish is crafted with intention.</p>

      <h2>The Seasonal Approach</h2>
      <p>Rather than fighting against El Paso\'s seasons, Lola\'s embraces them. The menu changes with available produce, ensuring peak flavors and freshness.</p>

      <h2>Signature Elements</h2>
      <ul>
        <li>House-made pasta daily</li>
        <li>Seasonal vegetable preparations</li>
        <li>Local ingredient focus</li>
        <li>Craft cocktails featuring local spirits</li>
        <li>Knowledgeable, passionate service</li>
      </ul>

      <h2>The Atmosphere</h2>
      <p>Located in the Arts District, Lola\'s fits the creative neighborhood. Cozy booths, warm lighting, and contemporary art create an intimate dining environment perfect for special occasions or casual date nights.</p>
    `,
  },
  '5': {
    name: 'Cocina del Barrio',
    cuisine: 'Street Food',
    rating: 4.9,
    reviews: 412,
    neighborhood: 'East Side',
    description: 'Hidden gem serving traditional home cooking and street food favorites beloved by locals.',
    specialty: 'Enchiladas & Gorditas',
    priceRange: '$',
    hours: '7am - 9pm Daily',
    address: 'East Side, El Paso, TX',
    highlights: ['Traditional Home Cooking', 'Local Favorite', 'Authentic Food', 'Great Prices', 'Hidden Gem'],
    tips: [
      'Go hungry - portions are massive',
      'Breakfast is excellent and cheap',
      'Lunch rush is 12-1pm but worth the wait',
      'Cash preferred',
      'Real El Paso food experience',
    ],
    content: `
      <h2>Cocina del Barrio: The Real El Paso</h2>
      <p>Cocina del Barrio is what authentic El Paso food looks like. No pretense, no trends - just traditional home cooking served at prices that respect the community that supports the restaurant.</p>

      <h2>The Philosophy</h2>
      <p>This isn\'t food made to impress food critics. It\'s food made to nourish and satisfy. Every dish is prepared using traditional techniques passed down through generations.</p>

      <h2>Specialties</h2>
      <ul>
        <li>Enchiladas - multiple styles, all excellent</li>
        <li>Gorditas - thick, fresh, filled generously</li>
        <li>Breakfast - early and affordable</li>
        <li>Traditional sides - beans, rice, home-made salsas</li>
        <li>Seasonal specials - respecting ingredients</li>
      </ul>

      <h2>The Experience</h2>
      <p>Dining here means experiencing El Paso as locals do. You\'ll see families, workers, students - a cross-section of the community united by appreciation for good food at fair prices.</p>

      <h2>Why It\'s Special</h2>
      <p>In an era of culinary trends, Cocina del Barrio remains true to its roots. It serves as a reminder that the best food often comes not from innovation, but from tradition, care, and respect for your customers.</p>
    `,
  },
  '6': {
    name: 'Monsoon Asian Kitchen',
    cuisine: 'Asian Fusion',
    rating: 4.4,
    reviews: 165,
    neighborhood: 'Midtown',
    description: 'Creative Asian fusion dishes combining Thai, Vietnamese, and Japanese influences.',
    specialty: 'Pad Thai & House-Made Dumplings',
    priceRange: '$$',
    hours: '11am - 10pm Daily',
    address: 'Midtown, El Paso, TX',
    highlights: ['Asian Fusion', 'Thai & Vietnamese', 'House-Made Dumplings', 'Creative Dishes', 'Casual Atmosphere'],
    tips: [
      'Ask about spice levels - staff accommodates preferences',
      'Dumplings are made fresh daily',
      'Great for casual dining with groups',
      'Reasonable prices for quality',
      'Good vegetarian options',
    ],
    content: `
      <h2>Monsoon Asian Kitchen: Fusion Done Right</h2>
      <p>Monsoon brings Asian fusion to El Paso with respect for traditions while embracing creativity. Thai, Vietnamese, and Japanese influences blend to create dishes that are both familiar and innovative.</p>

      <h2>The Menu</h2>
      <p>Rather than random fusion, Monsoon\'s combinations make sense. Techniques and flavors complement each other. The result is food that feels both authentic and contemporary.</p>

      <h2>Standout Dishes</h2>
      <ul>
        <li>Pad Thai - perfectly balanced</li>
        <li>House-Made Dumplings - steamed or pan-fried</li>
        <li>Pho - authentic Vietnamese preparation</li>
        <li>Japanese-influenced appetizers</li>
        <li>Creative rolls and noodle dishes</li>
      </ul>

      <h2>Why It Works</h2>
      <p>The key to successful fusion is understanding the traditions you\'re combining. Monsoon clearly understands Asian cuisines, which allows them to play with them responsibly.</p>
    `,
  },
};

export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const restaurant = restaurantsDatabase[id];

  if (!restaurant) {
    return (
      <main className="bg-dark-bg text-dark-text min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Restaurant Not Found</h1>
          <Link
            href="/food"
            className="text-sand hover:text-neon-cyan transition-colors font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Food Guide
          </Link>
        </section>
      </main>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description: restaurant.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
      streetAddress: restaurant.neighborhood,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: restaurant.rating.toString(),
      reviewCount: restaurant.reviews.toString(),
    },
    cuisine: restaurant.cuisine,
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

  return (
    <>
      <Schema schema={schema} />

      <main className="bg-dark-bg text-dark-text min-h-screen">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="space-y-6"
          >
            <Link
              href="/food"
              className="text-sand hover:text-neon-cyan transition-colors flex items-center gap-2 inline-flex"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Food Guide
            </Link>

            <div>
              <span className="inline-block text-xs px-3 py-1 border border-sand text-sand rounded mb-4 uppercase tracking-wider">
                {restaurant.cuisine}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                {restaurant.name}
              </h1>
              <p className="text-lg text-dark-text-muted">
                {restaurant.description}
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-dark-text-dim">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Rating</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  {restaurant.rating}
                  <Star className="w-4 h-4 fill-sand" />
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Price Range</p>
                <p className="text-sand font-semibold">{restaurant.priceRange}</p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Neighborhood</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {restaurant.neighborhood}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Hours</p>
                <p className="text-sand font-semibold text-sm">{restaurant.hours.split(' ')[0]}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Highlights & Details */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="space-y-2">
              {restaurant.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="text-sand mt-1">•</span>
                  <span className="text-dark-text-muted">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Hours</p>
                <p className="text-dark-text-muted">{restaurant.hours}</p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Specialty</p>
                <p className="text-dark-text-muted">{restaurant.specialty}</p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Address</p>
                <p className="text-dark-text-muted flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rust" />
                  {restaurant.address}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: restaurant.content }}
          />
        </section>

        {/* Tips */}
        {restaurant.tips && restaurant.tips.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6">Local Tips</h2>
              <div className="grid gap-4">
                {restaurant.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors"
                  >
                    <p className="text-dark-text-muted">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
