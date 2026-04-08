'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { SubmitEventForm } from '../components/SubmitEventForm';
import { ComingSoonSection } from '../components/ComingSoonSection';

// Empty schema array - events data will be submitted via form
const eventSchemaArray: never[] = [];

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

        {/* Coming Soon Section */}
        <ComingSoonSection
          icon={Calendar}
          heading="Local Events Coming Soon"
          subheading="Help us discover El Paso's best events. Submit an event and we'll feature it here!"
        />

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

        {/* Submit Event Form Section - CTA */}
        <section className="bg-slate-50 border-t border-slate-200 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  Host an Event?
                </h2>
                <p className="text-lg text-dark-text-muted max-w-2xl">
                  Have a show, pop-up, market, or event happening in El Paso? Let us know! Submit your event and we'll add it to the radar.
                </p>
              </motion.div>
            </motion.div>
            <SubmitEventForm />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
