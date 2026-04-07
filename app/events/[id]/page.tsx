'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';

const eventsDatabase: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: string;
  price: string;
  highlights: string[];
  content: string;
}> = {
  '1': {
    title: 'Live Music Night at Downtown Venue',
    description: 'Local bands and artists performing live with drinks and good vibes.',
    date: '2024-04-13',
    time: '8:00 PM',
    location: 'Downtown El Paso',
    category: 'music',
    attendees: '200-500',
    price: '$10-20',
    highlights: ['Local Bands', 'Live Performance', 'Good Drinks', 'Downtown Location', 'Great Atmosphere'],
    longDescription: 'Experience the vibrant live music scene in downtown El Paso. Local and regional bands perform in an intimate venue setting.',
    content: `
      <h2>Experience El Paso's Live Music Scene</h2>
      <p>This event showcases the talented musicians and bands that make El Paso's music scene special. Whether you\'re into rock, indie, Latin, or jazz, you\'ll find something to love.</p>

      <h2>What to Expect</h2>
      <ul>
        <li>High-energy live performances from local bands</li>
        <li>Full bar with craft and local drinks</li>
        <li>Downtown venue atmosphere</li>
        <li>Opportunity to meet musicians and other music lovers</li>
        <li>Great acoustic quality in an intimate setting</li>
      </ul>

      <h2>The Venue</h2>
      <p>Located in downtown El Paso, the venue is accessible, has good parking, and is walking distance to other downtown attractions.</p>

      <h2>Perfect For</h2>
      <ul>
        <li>Music lovers and live entertainment fans</li>
        <li>Locals wanting to discover new bands</li>
        <li>Groups looking for a fun night out</li>
        <li>Supporting local musicians</li>
      </ul>

      <h2>Practical Information</h2>
      <p>Arrive early for good seating or standing room. The venue gets busy on event nights. Bring cash or card for drinks and tips. IDs required for bar area.</p>
    `,
  },
  '2': {
    title: 'El Paso Cultural Festival',
    description: 'Celebrate El Paso culture with food vendors, music, art installations, and community performances.',
    date: '2024-04-14',
    time: '10:00 AM',
    location: 'San Jacinto Plaza',
    category: 'festival',
    attendees: '1000-3000',
    price: 'Free',
    highlights: ['Free Admission', 'Food Vendors', 'Live Music', 'Art Installations', 'Family-Friendly'],
    longDescription: 'A celebration of El Paso\'s rich cultural heritage featuring food, art, music, and community.',
    content: `
      <h2>Celebrate El Paso\'s Vibrant Culture</h2>
      <p>This festival brings the community together to celebrate what makes El Paso special. From traditional foods to contemporary art, from local musicians to cultural performances, there\'s something for everyone.</p>

      <h2>Festival Highlights</h2>
      <ul>
        <li>Food vendors serving authentic El Paso and regional cuisine</li>
        <li>Live music stages with diverse genres</li>
        <li>Art installations and street art displays</li>
        <li>Community performances and dance</li>
        <li>Local artisans and craftspeople</li>
        <li>Family activities and entertainment</li>
      </ul>

      <h2>Why Attend</h2>
      <p>This is THE event to experience El Paso culture in one place. You\'ll taste authentic food, hear live music, see art, and connect with your community.</p>

      <h2>Practical Tips</h2>
      <ul>
        <li>Arrive early to beat crowds and find parking</li>
        <li>Bring sunscreen - it\'s outdoor daytime event</li>
        <li>Bring cash for food vendors and artisans</li>
        <li>Wear comfortable shoes - lots of walking</li>
        <li>Bring blanket or chair if you want to sit</li>
      </ul>

      <h2>For Families</h2>
      <p>This is one of the best family events in El Paso. Kids enjoy the performances, food, and activities. There\'s usually a kids area with activities.</p>
    `,
  },
  '3': {
    title: 'Food Truck Rally & Tasting',
    description: 'The best food trucks in El Paso gather for a day of amazing street food and local flavors.',
    date: '2024-04-15',
    time: '11:00 AM',
    location: 'Union Plaza',
    category: 'food',
    attendees: '500-1500',
    price: '$5-20 per item',
    highlights: ['Food Trucks', 'Street Food', 'Local Flavors', 'Casual Atmosphere', 'Great Deals'],
    longDescription: 'A celebration of El Paso\'s street food culture featuring the city\'s best food trucks.',
    content: `
      <h2>El Paso\'s Best Street Food in One Place</h2>
      <p>This event gathers the most popular and innovative food trucks in El Paso. It\'s a food lover\'s dream - unlimited options, all in one location.</p>

      <h2>What to Expect</h2>
      <ul>
        <li>15-20 of El Paso\'s top food trucks</li>
        <li>Diverse cuisines from Mexican to Asian fusion</li>
        <li>Reasonable prices (mostly $5-15 per item)</li>
        <li>Casual outdoor setting</li>
        <li>Live music entertainment</li>
        <li>Opportunity to discover new favorites</li>
      </ul>

      <h2>Food Truck Categories</h2>
      <ul>
        <li>Tacos and Mexican street food</li>
        <li>Asian fusion and noodles</li>
        <li>Barbecue and meat specialists</li>
        <li>Vegetarian and vegan options</li>
        <li>Desserts and sweets</li>
        <li>Creative fusion concepts</li>
      </ul>

      <h2>Tips for Success</h2>
      <ul>
        <li>Arrive hungry - you\'ll want to try multiple trucks</li>
        <li>Bring cash - some trucks don\'t take cards</li>
        <li>Check out trucks with shorter lines first</li>
        <li>Share orders with friends to try more variety</li>
        <li>Bring water - street food can be spicy</li>
      </ul>

      <h2>Perfect For</h2>
      <p>Foodies, food truck enthusiasts, groups, families, or anyone wanting to support local food entrepreneurs while eating great food.</p>
    `,
  },
  '4': {
    title: 'Weekend Art Walk',
    description: 'Explore local galleries, street art, and artist studios throughout El Paso\'s vibrant Arts District.',
    date: '2024-04-20',
    time: '6:00 PM',
    location: 'Arts District',
    category: 'culture',
    attendees: '300-800',
    price: 'Free',
    highlights: ['Galleries', 'Street Art', 'Artist Studios', 'Community Event', 'Creative Energy'],
    longDescription: 'A self-guided tour through the Arts District discovering galleries, street art, and the creative community.',
    content: `
      <h2>Explore El Paso\'s Artistic Heart</h2>
      <p>The Weekend Art Walk is your chance to explore the Arts District, discover new galleries, meet artists, and experience El Paso\'s creative community.</p>

      <h2>What\'s Included</h2>
      <ul>
        <li>Multiple galleries showcasing contemporary and traditional art</li>
        <li>Artist studios open to the public</li>
        <li>Street art and mural tours</li>
        <li>Live music and performances</li>
        <li>Art vendor booths and pop-ups</li>
        <li>Local restaurants and cafes participating</li>
      </ul>

      <h2>The Experience</h2>
      <p>This is a self-guided experience. You walk through the Arts District at your own pace, stopping at galleries and venues that interest you. Maps are provided at the entrance.</p>

      <h2>Gallery Highlights</h2>
      <ul>
        <li>Contemporary art galleries</li>
        <li>Photography exhibitions</li>
        <li>Local artist showcases</li>
        <li>Street art installations</li>
        <li>Experimental and emerging artist work</li>
      </ul>

      <h2>Tips for Enjoying the Walk</h2>
      <ul>
        <li>Start at the main entrance for maps</li>
        <li>Wear comfortable shoes - it\'s a walking tour</li>
        <li>Bring water</li>
        <li>Arrive early to beat crowds</li>
        <li>Take time to chat with artists in their studios</li>
        <li>Bring cash if you want to purchase art</li>
      </ul>

      <h2>For Art Enthusiasts</h2>
      <p>This is THE event for art lovers in El Paso. You\'ll discover artists, see new work, and connect with the creative community. It\'s inspiring, fun, and totally free.</p>

      <h2>Photography Opportunities</h2>
      <p>Bring a camera - the street art alone provides endless photo opportunities. Many artists love when visitors share photos of their work on social media.</p>
    `,
  },
};

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = eventsDatabase[params.id];

  if (!event) {
    return (
      <main className="bg-dark-bg text-dark-text min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link
            href="/events"
            className="text-sand hover:text-neon-cyan transition-colors font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </section>
      </main>
    );
  }

  const schema = {
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
              href="/events"
              className="text-sand hover:text-neon-cyan transition-colors flex items-center gap-2 inline-flex"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>

            <div>
              <span className="inline-block text-xs px-3 py-1 border border-sand text-sand rounded mb-4 uppercase tracking-wider capitalize">
                {event.category}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                {event.title}
              </h1>
              <p className="text-lg text-dark-text-muted">
                {event.longDescription}
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-dark-text-dim">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Date</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Time</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Location</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Price</p>
                <p className="text-sand font-semibold">{event.price}</p>
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
            <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
            <ul className="space-y-2">
              {event.highlights.map((highlight) => (
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
            <h2 className="text-2xl font-bold mb-4">Quick Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Expected Attendance</p>
                <p className="text-dark-text-muted">{event.attendees}</p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Price Range</p>
                <p className="text-dark-text-muted">{event.price}</p>
              </div>
              <div className="pt-4 border-t border-dark-text-dim">
                <button className="text-sand text-sm font-mono font-bold hover:text-neon-cyan transition-colors flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Event
                </button>
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
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </section>

        <Footer />
      </main>
    </>
  );
}
