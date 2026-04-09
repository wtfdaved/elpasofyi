'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const regions = [
  'Central & Downtown',
  'West Side',
  'Northeast',
  'East Side',
  'Far East',
  'Lower Valley',
];

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regionPaths = [
    {
      name: 'Central & Downtown',
      path: 'M 300 150 L 450 150 L 500 250 L 450 350 L 300 350 L 250 250 Z',
      ariaLabel: 'Central & Downtown El Paso',
    },
    {
      name: 'West Side',
      path: 'M 100 200 L 250 150 L 300 200 L 250 350 L 100 300 Z',
      ariaLabel: 'West Side El Paso',
    },
    {
      name: 'Northeast',
      path: 'M 450 50 L 600 100 L 620 200 L 500 200 L 450 100 Z',
      ariaLabel: 'Northeast El Paso',
    },
    {
      name: 'East Side',
      path: 'M 500 250 L 620 250 L 650 350 L 550 380 L 450 350 Z',
      ariaLabel: 'East Side El Paso',
    },
    {
      name: 'Far East',
      path: 'M 550 380 L 650 350 L 700 450 L 600 480 L 500 420 Z',
      ariaLabel: 'Far East El Paso',
    },
    {
      name: 'Lower Valley',
      path: 'M 200 380 L 450 350 L 500 420 L 300 450 L 150 420 Z',
      ariaLabel: 'Lower Valley El Paso',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Text Overlay */}
      <div className="mb-8 h-20 flex items-center justify-center">
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900">
            {activeRegion || 'Select a Neighborhood'}
          </h2>
        </motion.div>
      </div>

      {/* Interactive SVG Map */}
      <div className="flex justify-center mb-12">
        <svg
          viewBox="0 0 800 500"
          className="w-full max-w-2xl h-auto"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive map of El Paso districts"
        >
          {/* Background */}
          <rect width="800" height="500" className="fill-light-bg" />

          {/* Region Paths */}
          {regionPaths.map((region) => (
            <path
              key={region.name}
              d={region.path}
              className="fill-slate-100 stroke-slate-300 stroke-2 transition-all duration-300 cursor-pointer hover:fill-sunset-orange"
              onMouseEnter={() => setActiveRegion(region.name)}
              onMouseLeave={() => setActiveRegion(null)}
              aria-label={region.ariaLabel}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveRegion(region.name);
                }
              }}
            />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {regions.map((region) => (
          <div
            key={region}
            className="flex items-center gap-2"
          >
            <div className="w-3 h-3 rounded-sm bg-slate-100 border border-slate-300"></div>
            <span className="text-sm text-slate-700">{region}</span>
          </div>
        ))}
      </div>

      {/* Info Text */}
      <div className="text-center text-slate-600 text-sm">
        <p>Hover over a region to explore</p>
      </div>
    </div>
  );
}
