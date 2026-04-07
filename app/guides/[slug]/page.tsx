'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, Share2 } from 'lucide-react';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';

// Mock database of guides - in production, fetch from CMS/database
const guidesDatabase: Record<string, {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  readTime: number;
  content: string;
  image: string;
  tags: string[];
  categories: string[];
}> = {
  'weekend-in-el-paso': {
    title: '48 Hours in El Paso: The Perfect Weekend Itinerary',
    description: 'Discover the best things to do in El Paso for a perfect weekend. From street food tacos to live music, mountains, and authentic local culture.',
    author: 'elpaso.fyi',
    publishedDate: '2024-03-15',
    readTime: 12,
    image: '/og-images/weekend-guide.jpg',
    tags: ['weekend', 'itinerary', 'first-time', 'El Paso'],
    categories: ['guides', 'itineraries'],
    content: `
      <p>El Paso is a hidden gem in West Texas that offers authentic cultural experiences, incredible food, and stunning natural beauty. Whether you're visiting for the first time or rediscovering your hometown, this 48-hour itinerary will show you the best of what El Paso has to offer.</p>

      <h2>Friday Evening: Downtown & Arts District</h2>
      <p>Start your weekend downtown where the city's energy comes alive. Walk through the historic streets and explore galleries in the Arts District. Grab dinner at one of our recommended local restaurants and enjoy live music at a nearby venue.</p>

      <h2>Saturday: Mountains & Culture</h2>
      <p>Take the scenic drive up to the Franklin Mountains for hiking and panoramic views of El Paso and Juárez. Spend the afternoon exploring museums and cultural institutions, then visit local markets for authentic crafts and street food.</p>

      <h2>Sunday: Local Food & Neighborhoods</h2>
      <p>Spend Sunday hitting taco stands and family-owned restaurants across El Paso. Explore diverse neighborhoods like Kern Place and Eastwood for local shops, murals, and the real heartbeat of the community.</p>

      <p>This itinerary captures the essence of El Paso—authentic, vibrant, and welcoming. Make the most of your 48 hours and discover why locals love this city.</p>
    `,
  },
  'el-paso-taco-tour': {
    title: 'The Ultimate El Paso Taco Guide: Where Locals Really Eat',
    description: 'Skip the chains. Tour the best taco spots in El Paso from street vendors to family-owned restaurants. Authentic tacos, best prices, hidden gems.',
    author: 'elpaso.fyi',
    publishedDate: '2024-03-10',
    readTime: 15,
    image: '/og-images/taco-guide.jpg',
    tags: ['food', 'tacos', 'El Paso', 'restaurants'],
    categories: ['guides', 'food'],
    content: `
      <p>Tacos aren't just food in El Paso—they're a way of life. From street carts to family-owned establishments, the taco scene here is unmatched. This guide takes you through the best places where locals actually eat, not where tourists are directed.</p>

      <h2>The Essential Taco Types</h2>
      <p>Learn about carne asada, carnitas, al pastor, and more. Understand what makes an authentic El Paso taco and where to find the real deal.</p>

      <h2>Best Taco Spots by Neighborhood</h2>
      <p>East Side, Downtown, Central—each neighborhood has its taco legends. We'll guide you through the most authentic and delicious spots.</p>

      <h2>Taco Pro Tips</h2>
      <ul>
        <li>Always ask for fresh tortillas</li>
        <li>Request well-done carne asada for crispy edges</li>
        <li>Visit street vendors after 10 PM for the full experience</li>
        <li>Lime and salsa are your friends</li>
      </ul>

      <p>Whether you're a taco connoisseur or a curious visitor, this guide will elevate your taco game in El Paso.</p>
    `,
  },
  'best-neighborhoods-el-paso': {
    title: 'Explore El Paso\'s Best Neighborhoods: A Local\'s Guide to Where to Be',
    description: 'Discover El Paso\'s most vibrant neighborhoods. Where to stay, eat, shop, and experience authentic local culture in each area.',
    author: 'elpaso.fyi',
    publishedDate: '2024-02-28',
    readTime: 14,
    image: '/og-images/neighborhoods.jpg',
    tags: ['neighborhoods', 'local', 'explore', 'El Paso'],
    categories: ['guides'],
    content: `
      <p>El Paso is a diverse city with distinctive neighborhoods, each with its own character, food scene, and cultural vibe. Get to know the neighborhoods that make El Paso unique.</p>

      <h2>Downtown El Paso</h2>
      <p>The historic heart of the city with galleries, restaurants, and live music venues. Perfect for evening walks and cultural experiences.</p>

      <h2>Kern Place</h2>
      <p>A charming historic neighborhood known for tree-lined streets, local shops, and excellent restaurants. Great for weekend strolls and brunch.</p>

      <h2>East Side</h2>
      <p>The authentic heart of El Paso's culture. Home to the best street food, taquerias, and traditional experiences that locals love.</p>

      <h2>Arts District</h2>
      <p>Where creativity thrives. Galleries, street art, and artisan shops make this neighborhood a must-visit for cultural enthusiasts.</p>

      <p>Each neighborhood tells a different story of El Paso. Spend time in each to truly understand what makes this city special.</p>
    `,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesDatabase[slug];

  if (!guide) {
    return (
      <main className="bg-dark-bg text-dark-text min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-dark-text-muted mb-6">
            Sorry, we couldn't find the guide you're looking for.
          </p>
          <a href="/guides" className="text-sand hover:text-neon-cyan transition-colors">
            ← Back to Guides
          </a>
        </div>
      </main>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    image: `https://elpaso.fyi${guide.image}`,
    datePublished: guide.publishedDate,
    author: {
      '@type': 'Organization',
      name: guide.author,
    },
    mainEntity: {
      '@type': 'Article',
      name: guide.title,
    },
  };

  return (
    <>
      <Schema schema={articleSchema} />

      <main className="bg-dark-bg text-dark-text min-h-screen">
        {/* Header Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-dark-text-dim">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 border border-dark-text-dim text-dark-text-muted rounded"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight"
            >
              {guide.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-text-muted max-w-2xl"
            >
              {guide.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 text-sm text-dark-text-dim pt-4"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-sand" />
                <span>{guide.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sand" />
                <span>{new Date(guide.publishedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sand" />
                <span>{guide.readTime} min read</span>
              </div>
              <button className="flex items-center gap-2 hover:text-sand transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <article
            className="prose prose-invert max-w-none space-y-6 text-dark-text"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
        </section>

        {/* Related Guides CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-dark-text-dim">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold">
              More Guides to Explore
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-dark-text-muted max-w-2xl mx-auto"
            >
              Discover more insider guides about El Paso events, food, neighborhoods, and weekend itineraries.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="/guides"
              className="btn-primary inline-block"
            >
              View All Guides
            </motion.a>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
