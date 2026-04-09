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

  // Neutral color palette for each region (different shades for visual distinction)
  const regionColors: { [key: string]: string } = {
    'Central & Downtown': '#f3f4f6', // gray-100
    'West Side': '#e5e7eb', // gray-200
    'Northeast': '#d1d5db', // gray-300
    'East Side': '#f9fafb', // gray-50
    'Far East': '#d1d5db', // gray-300
    'Lower Valley': '#e5e7eb', // gray-200
  };

  const regionPaths: { [key: string]: { paths: Array<{d: string; transform?: string}>; ariaLabel: string } } = {
    'Central & Downtown': {
      paths: [
        { d: `M 0.664062 0.703125 L 90.984375 0.703125 L 90.984375 110.777344 L 0.664062 110.777344 Z M 0.664062 0.703125 `, transform: `matrix(1, 0, 0, 1, 280, 377)` },
        { d: `M 38.417969 28.742188 L 0.496094 28.742188 L 0.496094 0.925781 L 38.417969 0.925781 Z M 38.417969 28.742188 `, transform: `matrix(1, 0, 0, 1, 320, 487)` },
        { d: `M 0.882812 0.933594 L 73.359375 0.933594 L 73.359375 28.75 L 0.882812 28.75 Z M 0.882812 0.933594 `, transform: `matrix(1, 0, 0, 1, 265, 487)` },
        { d: `M 0.445312 0 L 59.957031 0 L 59.957031 48.363281 L 0.445312 48.363281 Z M 0.445312 0 `, transform: `matrix(1, 0, 0, 1, 269, 497)` },
        { d: `M 0.78125 52.199219 L 58.792969 0.144531 L 90.445312 35.417969 L 32.433594 87.472656 Z M 0.78125 52.199219 `, transform: `matrix(1, 0, 0, 1, 248, 458)` },
        { d: `M 0.664062 0.921875 L 30.925781 0.921875 L 30.925781 31.417969 L 0.664062 31.417969 Z M 0.664062 0.921875 `, transform: `matrix(1, 0, 0, 1, 280, 514)` },
        { d: `M 0.160156 0.371094 L 30.421875 0.371094 L 30.421875 30.871094 L 0.160156 30.871094 Z M 0.160156 0.371094 `, transform: `matrix(1, 0, 0, 1, 328, 458)` },
      ],
      ariaLabel: 'Central & Downtown El Paso',
    },
    'West Side': {
      paths: [
        { d: `M 0.0351562 38.070312 L 109.164062 0.738281 L 137.191406 82.664062 L 28.066406 119.996094 Z M 0.0351562 38.070312 `, transform: `matrix(1, 0, 0, 1, 171, 377)` },
        { d: `M 0.40625 61.667969 L 178.339844 0.796875 L 206.367188 82.722656 L 28.433594 143.59375 Z M 0.40625 61.667969 `, transform: `matrix(1, 0, 0, 1, 102, 291)` },
        { d: `M 0 68.667969 L 199.375 0.460938 L 227.402344 82.386719 L 28.027344 150.59375 Z M 0 68.667969 `, transform: `matrix(1, 0, 0, 1, 81, 284)` },
        { d: `M 0.269531 82.074219 L 237.40625 0.945312 L 265.433594 82.871094 L 28.296875 164 Z M 0.269531 82.074219 `, transform: `matrix(1, 0, 0, 1, 43, 241)` },
        { d: `M 0.339844 11.398438 L 271.628906 0.722656 L 273.648438 52.054688 L 2.359375 62.730469 Z M 0.339844 11.398438 `, transform: `matrix(1, 0, 0, 1, 7, 263)` },
        { d: `M 59.90625 27.070312 L 20.882812 60.960938 L -9.238281 26.273438 L 29.785156 -7.617188 Z M 59.90625 27.070312 `, transform: `matrix(1, 0, 0, 1, 220, 456)` },
        { d: `M 17.660156 0.0898438 L 17.660156 21.859375 L 0.078125 21.859375 L 0.078125 0.0898438 Z M 17.660156 0.0898438 `, transform: `matrix(1, 0, 0, 1, 263, 461)` },
      ],
      ariaLabel: 'West Side El Paso',
    },
    'Northeast': {
      paths: [
        { d: `M 204.105469 0.746094 L 204.105469 365.738281 L 0.980469 365.738281 L 0.980469 0.746094 Z M 204.105469 0.746094 `, transform: `matrix(1, 0, 0, 1, 370, 39)` },
        { d: `M 0.664062 0.765625 L 97.359375 0.765625 L 97.359375 159.785156 L 0.664062 159.785156 Z M 0.664062 0.765625 `, transform: `matrix(1, 0, 0, 1, 280, 218)` },
        { d: `M 0.492188 0.675781 L 77.753906 0.675781 L 77.753906 64.070312 L 0.492188 64.070312 Z M 0.492188 0.675781 `, transform: `matrix(1, 0, 0, 1, 308, 190)` },
      ],
      ariaLabel: 'Northeast El Paso',
    },
    'East Side': {
      paths: [
        { d: `M 229.316406 170.324219 L 1.078125 170.324219 L 1.078125 0.964844 L 229.316406 0.964844 Z M 229.316406 170.324219 `, transform: `matrix(1, 0, 0, 1, 404, 471)` },
        { d: `M 0.9375 167.410156 L 0.9375 0.648438 L 38.421875 0.648438 L 38.421875 167.410156 Z M 0.9375 167.410156 `, transform: `matrix(1, 0, 0, 1, 624, 434)` },
        { d: `M 33.148438 0.292969 L 33.148438 45.300781 L 0.320312 45.300781 L 0.320312 0.292969 Z M 33.148438 0.292969 `, transform: `matrix(1, 0, 0, 1, 633, 596)` },
        { d: `M 0 50.585938 L 0 0.855469 L 257.390625 0.855469 L 257.390625 50.585938 Z M 0 50.585938 `, transform: `matrix(1, 0, 0, 1, 405, 423)` },
        { d: `M 0.453125 0.914062 L 4.203125 0.914062 L 4.203125 88.234375 L 0.453125 88.234375 Z M 0.453125 0.914062 `, transform: `matrix(1, 0, 0, 1, 631, 550)` },
      ],
      ariaLabel: 'East Side El Paso',
    },
    'Far East': {
      paths: [
        { d: `M 0.417969 0.863281 L 115.433594 0.863281 L 115.433594 243.921875 L 0.417969 243.921875 Z M 0.417969 0.863281 `, transform: `matrix(1, 0, 0, 1, 662, 423)` },
        { d: `M 47.398438 0.484375 L 78.175781 23.132812 L 31.289062 86.851562 L 0.511719 64.203125 Z M 47.398438 0.484375 `, transform: `matrix(1, 0, 0, 1, 631, 580)` },
      ],
      ariaLabel: 'Far East El Paso',
    },
    'Lower Valley': {
      paths: [
        { d: `M 16.324219 -7.078125 L 247.449219 168.929688 L 224.480469 199.085938 L -6.640625 23.078125 Z M 16.324219 -7.078125 `, transform: `matrix(1, 0, 0, 1, 384, 472)` },
        { d: `M 46.539062 100.554688 L 0.863281 46.527344 L 54.890625 0.847656 L 100.566406 54.875 Z M 46.539062 100.554688 `, transform: `matrix(1, 0, 0, 1, 515, 605)` },
        { d: `M 0.984375 29.785156 L 20.222656 0.929688 L 204.160156 123.582031 L 184.921875 152.433594 Z M 0.984375 29.785156 `, transform: `matrix(1, 0, 0, 1, 370, 487)` },
        { d: `M 88.582031 60.34375 L 59.609375 89.316406 L -14.300781 15.410156 L 14.675781 -13.5625 Z M 88.582031 60.34375 `, transform: `matrix(1, 0, 0, 1, 463, 569)` },
        { d: `M -9.617188 15.113281 L 30.375 -13.460938 L 57.074219 23.902344 L 17.082031 52.480469 Z M -9.617188 15.113281 `, transform: `matrix(1, 0, 0, 1, 348, 487)` },
        { d: `M 60.519531 39.046875 L 25.324219 61.292969 L 0.648438 22.246094 L 35.84375 0.00390625 Z M 60.519531 39.046875 `, transform: `matrix(1, 0, 0, 1, 371, 511)` },
        { d: `M -3.835938 17.695312 L 52.832031 -4.328125 L 74.851562 52.335938 L 18.1875 74.359375 Z M -3.835938 17.695312 `, transform: `matrix(1, 0, 0, 1, 523, 628)` },
        { d: `M 45.738281 0.757812 L 59.5 17.167969 L 14.691406 54.75 L 0.929688 38.335938 Z M 45.738281 0.757812 `, transform: `matrix(1, 0, 0, 1, 572, 630)` },
      ],
      ariaLabel: 'Lower Valley El Paso',
    },
  };

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
          viewBox="0 0 810 809.999993"
          className="w-full h-auto max-w-2xl mx-auto drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive map of El Paso districts"
        >
          {/* Background */}
          <rect width="810" height="809.999993" className="fill-light-bg" />

          {/* Region Groups */}
          {regions.map((regionName) => {
            const isActive = activeRegion === regionName;
            const fillColor = isActive ? '#ff6b35' : regionColors[regionName];

            return (
              <g
                key={regionName}
                onMouseEnter={() => setActiveRegion(regionName)}
                onMouseLeave={() => setActiveRegion(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveRegion(regionName);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={regionPaths[regionName]?.ariaLabel}
                className={`cursor-pointer transition-all duration-300 ${isActive ? 'drop-shadow-md' : ''}`}
                style={{ filter: isActive ? 'drop-shadow(0 10px 15px -3px rgba(255, 107, 53, 0.2))' : 'none' }}
              >
                {regionPaths[regionName]?.paths.map((pathData, index) => (
                  <g key={`${regionName}-path-${index}`} transform={pathData.transform}>
                    <path
                      d={pathData.d}
                      fill={fillColor}
                      stroke="none"
                      strokeWidth="0"
                      style={{ transition: 'fill 0.3s ease-in-out' }}
                    />
                  </g>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {regions.map((region) => (
          <div
            key={region}
            className="flex items-center gap-2"
          >
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: regionColors[region] }}
            ></div>
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
