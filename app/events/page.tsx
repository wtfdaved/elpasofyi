'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import Footer from '../components/Footer';
import Schema from '../components/Schema';

export const metadata = {
  title: 'El Paso Events This Weekend - Things to Do | elpaso.fyi',
  description: 'Discover the best El Paso events happening this weekend. Live music, festivals, cultural events, and things to do in El Paso, TX. Updated weekly by locals.',
  keywords: 'El Paso events, things to do in El Paso, El Paso this weekend, El Paso events this weekend, live music El Paso, festivals El Paso',
  openGraph: {
    title: 'El Paso Events This Weekend - Things to Do',
    description: 'Discover the best El Paso events happening this weekend and throughout the month.',
    url: 'https://elpaso.fyi/events',
    type: 'website',
  },
};

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'music' | 'festival' | 'culture' | 'food' | 'sports';
}

// Sample events data - can be replaced with CMS/database
const events: Event[] = [
  {
    id: '1',
    title: 'Live Music Night at Downtown Venue',
    date: '2024-04-13',
    time: '8:00 PM',
    location: 'Downtown El Paso',
    description: 'Local bands and artists performing live with drinks and good vibes.',
    category: 'music',
  },
  {
    id: '2',
    title: 'El Paso Cultural Festival',
    date: '2024-04-14',
    time: '10:00 AM',
    location: 'San Jacinto Plaza',
    description: 'Celebrate El Paso culture with food vendors, music, art installations, and community performances.',
    category: 'festival',
  },
  {
    id: '3',
    title: 'Food Truck Rally & Tasting',
    date: '2024-04-15',
    time: '11:00 AM',
    location: 'Union Plaza',
    description: 'The best food trucks in El Paso gather for a day of amazing street food and local flavors.',
    category: 'food',
  },
  {
    id: '4',
    title: 'Weekend Art Walk',
    date: '2024-04-20',
    time: '6:00 PM',
    location: 'Arts District',
    description: 'Explore local galleries, street art, and artist studios throughout El Paso\'s vibrant Arts District.',
    category: 'culture',
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

const eventSchemaArray = events.map((event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  description: event.description,
  startDate: `${event.date}T${event.time}`,
  eventStatus: 'EventScheduled',
  eventAttendanceMode: 'OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: event.location,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
}));

export default function EventsPage() {
  return (
    <>
      {/* Inject Event schemas */}
      {eventSchemaArray.map((schema, idx) => (
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
                El Paso<span className="text-sand"> Events</span>
              </h1>
              <p className="text-lg sm:text-xl text-dark-text-muted max-w-2xl">
                Discover what's happening this weekend and beyond. From live music to food festivals, find the best things to do in El Paso, TX.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-dark-bg transition-colors rounded">
                All Events
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                This Weekend
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Music
              </button>
              <button className="px-4 py-2 border border-dark-text-dim text-dark-text-muted hover:border-sand transition-colors rounded">
                Food
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <article>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {events.map((event) => (
                <motion.article
                  key={event.id}
                  variants={itemVariants}
                  className="border border-dark-text-dim p-6 hover:border-sand transition-colors rounded group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-sand transition-colors">
                        {event.title}
                      </h2>
                      <div className="space-y-2 text-sm text-dark-text-muted">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-sand" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-rust" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 border border-sand rounded text-sand capitalize">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-dark-text-dim mb-4">{event.description}</p>
                  <button className="text-sand text-sm font-mono font-bold hover:text-neon-cyan transition-colors">
                    Learn More →
                  </button>
                </motion.article>
              ))}
            </motion.div>
          </article>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-dark-text-dim">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold">
              Never Miss an Event
            </motion.h2>
            <motion.p variants={itemVariants} className="text-dark-text-muted max-w-2xl mx-auto">
              Subscribe to our newsletter and get the best El Paso events delivered to your inbox weekly.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="btn-primary inline-block"
            >
              Subscribe to Events
            </motion.button>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
