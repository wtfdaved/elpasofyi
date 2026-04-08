'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  href: string;
}

const events: Event[] = [
  {
    id: 1,
    name: 'Sunset Jazz at Memorial Park',
    date: 'This Saturday',
    time: '6:00 PM - 9:00 PM',
    location: 'Memorial Park, Downtown',
    description: 'Live jazz performance with local musicians under the stars.',
    href: '/events/sunset-jazz',
  },
  {
    id: 2,
    name: 'Downtown Art Walk',
    date: 'Friday Evening',
    time: '5:00 PM - 10:00 PM',
    location: 'Arts District',
    description: 'Gallery openings, pop-up installations, and artist meet-and-greets.',
    href: '/events/art-walk',
  },
  {
    id: 3,
    name: 'Franklin Mountains Sunrise Hike',
    date: 'Sunday Morning',
    time: '6:30 AM - 9:00 AM',
    location: 'Franklin Mountains State Park',
    description: 'Guided sunrise hike with breakfast picnic at the summit.',
    href: '/events/sunrise-hike',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export default function ThisWeekend() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 text-slate-900">
            This Weekend
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            The best events, activities, and experiences happening right now in El Paso.
          </p>
        </motion.div>

        {/* Event cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={event.href}>
                <div className="group relative h-full bg-white border border-slate-300 rounded-2xl overflow-hidden hover:border-sunset-orange hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    <div className="text-4xl">🎉</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold mb-3 text-slate-900">
                      {event.name}
                    </h3>

                    {/* Date and time */}
                    <div className="flex items-start gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-sunset-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-heading font-semibold text-slate-900">
                          {event.date}
                        </p>
                        <p className="text-xs text-slate-500">
                          {event.time}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-sunset-orange flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600">
                        {event.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 flex-1">
                      {event.description}
                    </p>

                    {/* View details link */}
                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <span className="inline-flex items-center text-sunset-orange hover:text-opacity-80 transition-colors text-sm font-heading font-semibold uppercase tracking-wide">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sunset-orange hover:text-opacity-80 transition-colors font-heading font-semibold uppercase tracking-wide text-sm"
          >
            See All Events →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
