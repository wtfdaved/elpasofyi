'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Schema from '../components/Schema';

interface Attraction {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  neighborhood: string;
  hours: string;
  admission: string;
  highlights: string[];
  visitTime: string;
}

// Sample attractions data
const attractions: Attraction[] = [
  {
    id: '1',
    slug: 'el-paso-museum-of-art',
    name: 'El Paso Museum of Art',
    category: 'Art Museum',
    description: 'World-class art museum featuring contemporary, modern, and Mexican art with rotating exhibitions and permanent collections.',
    neighborhood: 'Downtown',
    hours: 'Tue-Sat 9am-5pm, Sun 12pm-5pm',
    admission: 'Free',
    highlights: ['Contemporary Art', 'Mexican Masters', 'Local Artists', 'Rotating Exhibitions'],
    visitTime: '2-3 hours',
  },
  {
    id: '2',
    slug: 'franklin-mountains-state-park',
    name: 'Franklin Mountains State Park',
    category: 'Outdoor/Hiking',
    description: 'Stunning desert mountain range with scenic hiking trails, panoramic views of El Paso and Juárez, and outdoor recreation opportunities.',
    neighborhood: 'Central',
    hours: '7am-9pm Daily',
    admission: 'Free',
    highlights: ['Hiking Trails', 'Panoramic Views', 'Photography Spots', 'Desert Ecosystem'],
    visitTime: '3-5 hours',
  },
  {
    id: '3',
    slug: 'el-paso-zoo',
    name: 'El Paso Zoo at Storyland',
    category: 'Zoo',
    description: 'Family-friendly zoo featuring animals from around the world, storybook characters, and interactive experiences for all ages.',
    neighborhood: 'Upper Valley',
    hours: '9:30am-5pm Daily',
    admission: '$10-15',
    highlights: ['Wildlife Exhibits', 'Petting Zoo', 'Rides', 'Picnic Areas'],
    visitTime: '3-4 hours',
  },
  {
    id: '4',
    slug: 'pro-texas-historic-site',
    name: 'Pro Texas Historic Site & Chamizal National Memorial',
    category: 'Historical Site',
    description: 'Historic site featuring Fort Bliss and the peaceful Chamizal Memorial celebrating the border agreement between US and Mexico.',
    neighborhood: 'Central',
    hours: '8am-6pm Daily',
    admission: 'Free',
    highlights: ['Historic Landmark', 'Border History', 'Walking Trails', 'Monument'],
    visitTime: '1-2 hours',
  },
  {
    id: '5',
    slug: 'downtown-murals-arts-district',
    name: 'Downtown Murals & Arts District Walking Tour',
    category: 'Street Art/Culture',
    description: 'Vibrant street art and murals throughout downtown and Arts District. Self-guided walking tour discovering local and international artists.',
    neighborhood: 'Downtown & Arts District',
    hours: 'Open 24/7',
    admission: 'Free',
    highlights: ['Street Art', 'Photo Ops', 'Local Artists', 'Cultural History'],
    visitTime: '2-3 hours',
  },
  {
    id: '6',
    slug: 'southwest-university-museum',
    name: 'Centennial Museum & Amon Carter Museum',
    category: 'Museum',
    description: 'University museums featuring Southwest history, archaeology, art, and rare book collections chronicling El Paso and West Texas heritage.',
    neighborhood: 'Central',
    hours: 'Tue-Fri 11am-4pm, Sat 1pm-4pm',
    admission: 'Free',
    visitTime: '2-3 hours',
    highlights: ['Southwest History', 'Archaeology', 'Rare Books', 'Cultural Artifacts'],
  },
  {
    id: '7',
    slug: 'transmountain-scenic-drive',
    name: 'Transmountain Scenic Drive',
    category: 'Scenic Drive',
    description: 'Spectacular 24-mile loop offering panoramic views of El Paso, Juárez, New Mexico, and the surrounding desert landscape.',
    neighborhood: 'Multiple',
    hours: 'Open 24/7',
    admission: 'Free',
    highlights: ['Panoramic Views', 'Photography', 'Sunset Viewing', 'Multiple Overlooks'],
    visitTime: '1-2 hours',
  },
  {
    id: '8',
    slug: 'wet-n-wild-water-park',
    name: 'Wet\'n\'Wild Water Park',
    category: 'Water Park',
    description: 'Family fun water park with slides, pools, wave pool, and lazy river. Perfect for hot El Paso days and summer entertainment.',
    neighborhood: 'Upper Valley',
    hours: 'Seasonal (typically 10am-6pm)',
    admission: '$25-35',
    highlights: ['Water Slides', 'Wave Pool', 'Lazy River', 'Family-Friendly'],
    visitTime: '4-6 hours',
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

const attractionSchemaArray = attractions.map((attraction) => ({
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: attraction.name,
  description: attraction.description,
  areaServed: {
    '@type': 'City',
    name: 'El Paso',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    opens: '9:00',
    closes: '17:00',
  },
  url: `https://elpaso.fyi/attractions/${attraction.slug}`,
}));

export default function AttractionsPage() {
  return (
    <>
      {/* Inject attraction schemas */}
      {attractionSchemaArray.map((schema, idx) => (
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
                El Paso<span className="text-sand"> Attractions</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Discover the best museums, parks, natural landmarks, and attractions in El Paso. From art galleries to hiking trails, find your next adventure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-dark-bg transition-colors rounded">
                All Attractions
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Museums
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Outdoor
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Family-Friendly
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Attractions Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {attractions.map((attraction) => (
                <motion.article
                  key={attraction.id}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-6 hover:border-sand transition-colors rounded group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block text-xs px-2 py-1 border border-sand text-sand rounded mb-2 uppercase tracking-wider">
                        {attraction.category}
                      </span>
                      <h2 className="text-lg font-bold mb-1 group-hover:text-sand transition-colors">
                        {attraction.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-dark-text-muted mb-4 flex-1">
                    {attraction.description}
                  </p>

                  <div className="space-y-2 text-xs text-dark-text-dim mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-rust" />
                      <span>{attraction.neighborhood}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-neon-cyan" />
                      <span>{attraction.visitTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-neon-green" />
                      <span>{attraction.admission}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-dark-text-dim mb-2 font-semibold">Hours:</p>
                    <p className="text-xs text-dark-text-muted">{attraction.hours}</p>
                  </div>

                  <Link
                    href={`/attractions/${attraction.slug}`}
                    className="text-sand text-sm font-mono font-bold hover:text-neon-cyan transition-colors flex items-center gap-2"
                  >
                    View Details <ExternalLink className="w-3 h-3" />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Planning Tips Section */}
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
                El Paso<span className="text-sand"> Visitor Tips</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Best Time to Visit</h3>
                  <p className="text-dark-text-muted">
                    October-April offers pleasant weather for outdoor activities. Summer (May-September) is hot but great for water parks.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Getting Around</h3>
                  <p className="text-dark-text-muted">
                    Attractions are spread across the city. A car is recommended for exploring. The Transmountain Drive is accessible to all.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Combine Your Visit</h3>
                  <p className="text-dark-text-muted">
                    Group nearby attractions together. Visit downtown museums and arts district in one day, Franklin Mountains in another.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-sand">Free & Low-Cost Options</h3>
                  <p className="text-dark-text-muted">
                    Many museums offer free admission. Franklin Mountains, murals tour, and Transmountain drive are completely free.
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
