'use client';

import { motion } from 'framer-motion';
import { MapPin, DollarSign, Star, Phone, ExternalLink as ExternalLinkIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';

const accommodationsDatabase: Record<string, {
  name: string;
  type: string;
  description: string;
  neighborhood: string;
  priceRange: string;
  rating: number;
  highlights: string[];
  amenities: string[];
  content: string;
  tips: string[];
}> = {
  'camino-real-el-paso': {
    name: 'Camino Real El Paso',
    type: 'Luxury Hotel',
    description: 'Iconic luxury hotel offering historic elegance with modern amenities in the heart of downtown.',
    neighborhood: 'Downtown',
    priceRange: '$$$',
    rating: 4.5,
    highlights: ['Historic Property', 'Downtown Location', 'Fine Dining', 'Elegant Rooms', 'Event Spaces'],
    amenities: ['Restaurant & Bar', 'Business Center', 'Conference Rooms', 'Room Service', 'Concierge', 'Wi-Fi', 'Parking Available'],
    tips: [
      'Book directly for potential discounts',
      'Great for special occasions',
      'Perfect location for exploring downtown',
      'Excellent restaurant on-site',
    ],
    content: `
      <h2>Historic Luxury in Downtown El Paso</h2>
      <p>The Camino Real is El Paso's premier luxury hotel, offering a combination of historic charm and modern comfort. Located in the heart of downtown, it serves as both a business hotel and leisure destination.</p>
      <h2>The Experience</h2>
      <p>Rooms are elegantly appointed with modern amenities. The on-site restaurant offers excellent dining. The hotel's location puts you walking distance from galleries, restaurants, and cultural attractions.</p>
      <h2>Why Choose Camino Real</h2>
      <ul>
        <li>Iconic hotel with history and elegance</li>
        <li>Best downtown location for exploring</li>
        <li>Full-service amenities and dining</li>
        <li>Perfect for special occasions</li>
      </ul>
    `,
  },
  'el-paso-marriott': {
    name: 'El Paso Marriott',
    type: 'Upscale Hotel',
    description: 'Modern upscale hotel with comfortable rooms, great amenities, and central location near attractions.',
    neighborhood: 'Central',
    priceRange: '$$',
    rating: 4.3,
    highlights: ['Central Location', 'Pool', 'Business Center', 'Modern Rooms', 'Conference Facilities'],
    amenities: ['Indoor Pool', 'Fitness Center', 'Restaurant', 'Bar', 'Business Center', 'Room Service', 'Free Wi-Fi', 'Parking'],
    tips: [
      'Good central location near major attractions',
      'Pool is great for families',
      'Business facilities if needed',
      'Multiple dining options nearby',
    ],
    content: `
      <h2>Modern Comfort & Convenience</h2>
      <p>The Marriott offers reliable, comfortable accommodations with modern amenities. Centrally located for easy access to El Paso's attractions.</p>
      <h2>Amenities & Services</h2>
      <p>Full-service hotel with pool, fitness center, on-site dining, and business facilities. All rooms feature modern comfort standards.</p>
      <h2>Perfect For</h2>
      <ul>
        <li>Business travelers needing modern amenities</li>
        <li>Families wanting pool and comfort</li>
        <li>Visitors wanting central location</li>
        <li>Groups with conference needs</li>
      </ul>
    `,
  },
  'paso-del-norte-hotel': {
    name: 'Paso del Norte Hotel',
    type: 'Historic Hotel',
    description: 'A beautifully renovated 1912 historic hotel blending period charm with modern comfort.',
    neighborhood: 'Downtown',
    priceRange: '$$',
    rating: 4.2,
    highlights: ['Historic Building', 'Recently Renovated', 'Unique Character', 'Downtown Location', 'Boutique Feel'],
    amenities: ['Historic Character', 'Modern Bathrooms', 'Restaurant', 'Bar', 'Meeting Rooms', 'Concierge', 'Wi-Fi'],
    tips: [
      'Request a room with historic details',
      'Great for history enthusiasts',
      'Perfect walking-distance to everything downtown',
      'Unique alternative to chain hotels',
    ],
    content: `
      <h2>Historic Character Meets Modern Comfort</h2>
      <p>The Paso del Norte Hotel has served El Paso since 1912. Recently renovated, it now offers historic charm combined with modern comfort.</p>
      <h2>The Character Experience</h2>
      <p>Stay in a piece of El Paso history while enjoying contemporary amenities. The building itself is a work of art with period details.</p>
      <h2>Why Stay Here</h2>
      <ul>
        <li>Unique historic experience</li>
        <li>Downtown walkability</li>
        <li>Character you don't find in chain hotels</li>
        <li>Good value for unique experience</li>
      </ul>
    `,
  },
  'el-paso-artspace-lofts': {
    name: 'El Paso ArtSpace Lofts',
    type: 'Boutique/Lofts',
    description: 'Artist-friendly lofts in the vibrant Arts District, perfect for creative travelers.',
    neighborhood: 'Arts District',
    priceRange: '$$',
    rating: 4.4,
    highlights: ['Arts District Location', 'Artist Community', 'Unique Design', 'Creative Vibe', 'Gallery Access'],
    amenities: ['Unique Design', 'Gallery Access', 'Artist Community', 'Modern Amenities', 'Kitchen Facilities', 'Wi-Fi'],
    tips: [
      'Perfect for artists and creatives',
      'Located in the heart of art scene',
      'Gallery openings and events nearby',
      'Unique interior design',
      'Support local artists by staying here',
    ],
    content: `
      <h2>Stay in the Heart of El Paso's Creative Scene</h2>
      <p>ArtSpace Lofts puts you in the heart of the Arts District, surrounded by galleries, street art, and the creative community.</p>
      <h2>The Creative Experience</h2>
      <p>These aren't just accommodations - they're immersive experiences in El Paso's artistic culture. Support local artists while enjoying unique, designed spaces.</p>
      <h2>For Creative Travelers</h2>
      <ul>
        <li>Artists and creatives</li>
        <li>Art enthusiasts and photographers</li>
        <li>Those wanting cultural immersion</li>
        <li>Instagram-worthy accommodations</li>
      </ul>
    `,
  },
  'kern-place-bed-breakfast': {
    name: 'Kern Place Bed & Breakfast',
    type: 'Bed & Breakfast',
    description: 'Charming B&B in the heart of Kern Place offering personal service and local knowledge.',
    neighborhood: 'Kern Place',
    priceRange: '$$',
    rating: 4.6,
    highlights: ['Personal Service', 'Local Knowledge', 'Charming Neighborhood', 'Home-Made Breakfast', 'Walking Distance to Shops'],
    amenities: ['Home-Cooked Breakfast', 'Personal Service', 'Local Recommendations', 'Charming Decor', 'Wi-Fi', 'Parking'],
    tips: [
      'Interact with owners for local insights',
      'Breakfast is included and delicious',
      'Walking distance to Kern Place shops',
      'Great for couples wanting personal touch',
      'Book early - limited rooms',
    ],
    content: `
      <h2>Authentic Local Experience</h2>
      <p>This charming B&B offers what chain hotels cannot - personal service, local knowledge, and authentic local hospitality in a beautiful neighborhood.</p>
      <h2>The B&B Experience</h2>
      <p>Wake to a home-cooked breakfast prepared by your hosts. Enjoy their recommendations for exploring El Paso. Experience hospitality in its truest form.</p>
      <h2>Why Choose a B&B</h2>
      <ul>
        <li>Personal, attentive service</li>
        <li>Local knowledge and recommendations</li>
        <li>Home-cooked meals included</li>
        <li>Authentic community experience</li>
        <li>Beautiful neighborhood location</li>
      </ul>
    `,
  },
  'inn-at-el-paso': {
    name: 'The Inn at El Paso',
    type: 'Mid-Range Hotel',
    description: 'Comfortable, reliable hotel with good amenities and family-friendly atmosphere.',
    neighborhood: 'Central',
    priceRange: '$$',
    rating: 4.1,
    highlights: ['Family-Friendly', 'Value-Oriented', 'Central Location', 'Pool', 'Breakfast Included'],
    amenities: ['Pool', 'Breakfast Included', 'Fitness Center', 'Business Center', 'Free Wi-Fi', 'Parking', 'Family Suites'],
    tips: [
      'Breakfast included adds value',
      'Pool great for kids',
      'Good central location',
      'Reliable choice for families',
      'Good value for money',
    ],
    content: `
      <h2>Comfortable Family-Friendly Lodging</h2>
      <p>The Inn offers reliable, comfortable accommodations at a good price point. Perfect for families seeking value without sacrificing comfort.</p>
      <h2>What's Included</h2>
      <p>Complimentary breakfast, pool access, fitness facilities, and family-friendly atmosphere make this an excellent value.</p>
      <h2>Best For</h2>
      <ul>
        <li>Families traveling with children</li>
        <li>Budget-conscious travelers</li>
        <li>Extended stays</li>
        <li>Groups looking for value</li>
      </ul>
    `,
  },
  'el-paso-budget-suites': {
    name: 'Budget Suites by Choice Hotels',
    type: 'Budget Hotel',
    description: 'Clean, affordable accommodations perfect for budget travelers and road trippers.',
    neighborhood: 'Various',
    priceRange: '$',
    rating: 3.8,
    highlights: ['Budget-Friendly', 'Clean Rooms', 'Basic Amenities', 'Multiple Locations', 'Extended Stay Options'],
    amenities: ['Basic Rooms', 'Kitchenette Options', 'Free Wi-Fi', 'Parking', 'Laundry Facilities', 'Pet-Friendly Options'],
    tips: [
      'Multiple locations throughout El Paso',
      'Great for road trips',
      'Extended stay discounts available',
      'Kitchenettes help save on meals',
      'No-frills but clean and functional',
    ],
    content: `
      <h2>Budget-Friendly, No-Frills Lodging</h2>
      <p>Budget Suites offers clean, functional rooms at the lowest price point. Multiple locations make them convenient for accessing different parts of El Paso.</p>
      <h2>What You Get</h2>
      <p>Clean rooms, basic amenities, free Wi-Fi. Some locations offer kitchenettes for longer stays. It's no-frills but reliable.</p>
      <h2>Perfect For</h2>
      <ul>
        <li>Budget travelers</li>
        <li>Road trippers</li>
        <li>Extended stays (extended stay discounts)</li>
        <li>Those prioritizing value over amenities</li>
      </ul>
    `,
  },
  'el-paso-airbnb-experiences': {
    name: 'El Paso Airbnb & Vacation Rentals',
    type: 'Vacation Rentals',
    description: 'Local homes and apartments throughout El Paso for authentic local living.',
    neighborhood: 'Multiple',
    priceRange: '$-$$$',
    rating: 4.3,
    highlights: ['Local Experience', 'Flexible Pricing', 'Multiple Locations', 'Full Kitchens', 'Neighborhood Living'],
    amenities: ['Full Kitchens', 'Living Spaces', 'Multiple Bedrooms', 'Laundry', 'Neighborhood Living', 'Local Culture'],
    tips: [
      'Read reviews carefully',
      'Choose based on neighborhood interest',
      'Full kitchens save on dining costs',
      'Great for families and groups',
      'Book early for peak seasons',
    ],
    content: `
      <h2>Live Like a Local</h2>
      <p>Vacation rentals offer the opportunity to live in El Paso neighborhoods like residents do. Full-equipped homes with kitchens and living spaces.</p>
      <h2>Advantages of Rentals</h2>
      <p>Save on dining with home kitchens. Experience neighborhoods as locals. More space for families and groups. Flexible check-in/out.</p>
      <h2>Why Choose This Option</h2>
      <ul>
        <li>Live like a local, not a tourist</li>
        <li>Full kitchens for cooking</li>
        <li>Great for families and groups</li>
        <li>Cost-effective for longer stays</li>
        <li>Flexibility and space</li>
      </ul>
    `,
  },
};

export default function AccommodationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const accommodation = accommodationsDatabase[params.slug];

  if (!accommodation) {
    return (
      <main className="bg-dark-bg text-dark-text min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Accommodation Not Found</h1>
          <Link
            href="/accommodations"
            className="text-sand hover:text-neon-cyan transition-colors font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Accommodations
          </Link>
        </section>
      </main>
    );
  }

  const schema = {
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
              href="/accommodations"
              className="text-sand hover:text-neon-cyan transition-colors flex items-center gap-2 inline-flex"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Accommodations
            </Link>

            <div>
              <span className="inline-block text-xs px-3 py-1 border border-sand text-sand rounded mb-4 uppercase tracking-wider">
                {accommodation.type}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                {accommodation.name}
              </h1>
              <p className="text-lg text-dark-text-muted">
                {accommodation.description}
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-dark-text-dim">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Price Range</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {accommodation.priceRange}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Location</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {accommodation.neighborhood}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Rating</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  {accommodation.rating}
                  <Star className="w-4 h-4 fill-sand" />
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
            dangerouslySetInnerHTML={{ __html: accommodation.content }}
          />
        </section>

        {/* Amenities & Tips */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Amenities & Features</h2>
            <ul className="space-y-2">
              {accommodation.amenities.map((amenity) => (
                <li key={amenity} className="flex items-start gap-2">
                  <span className="text-sand mt-1">✓</span>
                  <span className="text-dark-text-muted">{amenity}</span>
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
            <h2 className="text-2xl font-bold mb-4">Traveler Tips</h2>
            <ul className="space-y-3">
              {accommodation.tips.map((tip, idx) => (
                <li key={idx} className="border border-dark-text-dim p-3 rounded text-sm text-dark-text-muted">
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
