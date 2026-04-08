'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import Footer from '../components/Footer';
import Schema from '../components/Schema';
import { SubmitForm } from '../components/SubmitForm';
import { ComingSoonSection } from '../components/ComingSoonSection';

// Empty schema array - restaurants data will be submitted via form
const restaurantSchemaArray: never[] = [];

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

        {/* Submit Form Section */}
        <SubmitForm />

        {/* Coming Soon Section */}
        <ComingSoonSection
          icon={UtensilsCrossed}
          heading="Curating the Best Restaurants"
          subheading="We're collecting community recommendations to bring you El Paso's top food spots. Check back soon!"
        />

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
