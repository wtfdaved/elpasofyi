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

// Organic shapes from SVG clipPath definitions - actual drawn boundaries, not bounding boxes
const shapesByRegion: { [key: string]: Array<{ tag: string; attrs: any }> } = {
  'West Side': [
    { tag: 'path', attrs: { d: 'M 55.375 110.65625 L 109.992188 91.96875 L 109.269531 0.699219 L 0.0351562 38.070312 Z M 55.375 110.65625 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 171, 377)' } },
    { tag: 'path', attrs: { d: 'M 55.742188 134.253906 L 178.992188 92.085938 L 178.269531 0.820312 L 0.40625 61.667969 Z M 55.742188 134.253906 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 102, 291)' } },
    { tag: 'path', attrs: { d: 'M 55.335938 141.25 L 199.992188 91.765625 L 199.269531 0.496094 L 0 68.667969 Z M 55.335938 141.25 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 81, 284)' } },
    { tag: 'path', attrs: { d: 'M 55.605469 154.65625 L 237.992188 92.261719 L 237.269531 0.992188 L 0.269531 82.074219 Z M 55.605469 154.65625 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 43, 241)' } },
    { tag: 'path', attrs: { d: 'M 32.492188 61.542969 L 243.53125 53.238281 L 271.644531 0.722656 L 0.339844 11.398438 Z M 32.492188 61.542969 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 7, 263)' } },
    { tag: 'path', attrs: { d: 'M 20.214844 0.695312 L 0.320312 17.96875 L 20.875 60.96875 L 59.90625 27.070312 Z M 20.214844 0.695312 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 220, 456)' } },
    { tag: 'path', attrs: { d: 'M 0.078125 4.9375 L 0.078125 17.015625 L 17.660156 21.867188 L 17.660156 0.0898438 Z M 0.078125 4.9375 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 263, 461)' } },
  ],
  'Central & Downtown': [
    { tag: 'path', attrs: { d: 'M 0.664062 0.703125 L 90.984375 0.703125 L 90.984375 110.933594 L 0.664062 110.933594 Z M 0.664062 0.703125 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 280, 377)' } },
    { tag: 'path', attrs: { d: 'M 28.933594 28.742188 L 9.964844 28.742188 L 0.480469 0.925781 L 38.417969 0.925781 Z M 28.933594 28.742188 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 320, 487)' } },
    { tag: 'path', attrs: { d: 'M 15.597656 0.933594 L 58.667969 0.933594 L 73.382812 28.75 L 0.882812 28.75 Z M 15.597656 0.933594 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 265, 487)' } },
    { tag: 'path', attrs: { d: 'M 15.335938 48.363281 L 45.121094 48.363281 L 60.011719 0 L 0.445312 0 Z M 15.335938 48.363281 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 269, 497)' } },
    { tag: 'path', attrs: { d: 'M 0.78125 52.199219 L 58.726562 0.199219 L 90.382812 35.476562 L 32.433594 87.472656 Z M 0.78125 52.199219 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 248, 458)' } },
    { tag: 'path', attrs: { d: 'M 0.664062 0.921875 L 30.925781 0.921875 L 30.925781 31.363281 L 0.664062 31.363281 Z M 0.664062 0.921875 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 280, 514)' } },
    { tag: 'path', attrs: { d: 'M 0.160156 0.371094 L 30.421875 0.371094 L 30.421875 30.816406 L 0.160156 30.816406 Z M 0.160156 0.371094 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 328, 458)' } },
  ],
  'Northeast': [
    { tag: 'path', attrs: { d: 'M 0.980469 366 L 0.980469 0.746094 L 204.105469 0.746094 Z M 0.980469 366 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 370, 39)' } },
    { tag: 'path', attrs: { d: 'M 0.664062 0.765625 L 97.359375 0.765625 L 97.359375 159.703125 L 0.664062 159.703125 Z M 0.664062 0.765625 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 280, 218)' } },
    { tag: 'path', attrs: { d: 'M 0.492188 0.675781 L 77.792969 0.675781 L 77.792969 64.070312 L 0.492188 64.070312 Z M 0.492188 0.675781 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 308, 190)' } },
  ],
  'East Side': [
    { tag: 'path', attrs: { d: 'M 0.988281 0.964844 L 229.316406 0.964844 L 229.316406 170.324219 Z M 0.988281 0.964844 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 404, 471)' } },
    { tag: 'path', attrs: { d: 'M 0.9375 0.59375 L 38.421875 0.59375 L 38.421875 167.410156 L 0.9375 167.410156 Z M 0.9375 0.59375 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 624, 434)' } },
    { tag: 'path', attrs: { d: 'M 0.320312 45.335938 L 0.320312 0.292969 L 33.148438 0.292969 Z M 0.320312 45.335938 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 633, 596)' } },
    { tag: 'path', attrs: { d: 'M 257.417969 0.855469 L 257.417969 50.585938 L 0 50.585938 Z M 257.417969 0.855469 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 405, 423)' } },
    { tag: 'path', attrs: { d: 'M 0.453125 0.914062 L 4.203125 0.914062 L 4.203125 88.238281 L 0.453125 88.238281 Z M 0.453125 0.914062 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 631, 550)' } },
  ],
  'Far East': [
    { tag: 'path', attrs: { d: 'M 0.417969 0.863281 L 115.433594 0.863281 L 115.433594 243.863281 L 0.417969 243.863281 Z M 0.417969 0.863281 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 662, 423)' } },
    { tag: 'path', attrs: { d: 'M 31.277344 86.867188 L 0.5 64.21875 L 47.398438 0.484375 Z M 31.277344 86.867188 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 631, 580)' } },
  ],
  'Lower Valley': [
    { tag: 'path', attrs: { d: 'M 31.242188 4.28125 L 232.582031 157.613281 C 240.824219 163.886719 242.414062 175.648438 236.140625 183.886719 L 235.894531 184.210938 C 229.621094 192.449219 217.855469 194.042969 209.617188 187.769531 L 8.277344 34.441406 C 0.0390625 28.164062 -1.554688 16.402344 4.71875 8.164062 L 4.964844 7.839844 C 11.238281 -0.398438 23.003906 -1.992188 31.242188 4.28125 Z M 31.242188 4.28125 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 384, 472)' } },
    { tag: 'path', attrs: { d: 'M 100.566406 54.875 C 86.339844 66.90625 67.554688 72.90625 48.984375 71.351562 C 30.417969 69.796875 12.890625 60.753906 0.863281 46.527344 L 54.890625 0.847656 Z M 100.566406 54.875 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 515, 605)' } },
    { tag: 'path', attrs: { d: 'M 0.984375 29.785156 L 20.222656 0.929688 L 204.109375 123.550781 L 184.871094 152.402344 Z M 0.984375 29.785156 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 370, 487)' } },
    { tag: 'path', attrs: { d: 'M 51.335938 81.046875 L 15.398438 45.109375 L 0.136719 0.871094 L 44.375 16.136719 L 80.3125 52.074219 C 84.554688 56.316406 86.84375 62.082031 84.816406 64.109375 L 63.375 85.550781 C 61.347656 87.578125 55.582031 85.292969 51.335938 81.046875 Z M 51.335938 81.046875 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 463, 569)' } },
    { tag: 'path', attrs: { d: 'M 10.34375 0.851562 L 40.5 0.863281 L 49.378906 29.402344 L 24.707031 47.03125 L 0.582031 29.386719 Z M 10.34375 0.851562 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 348, 487)' } },
    { tag: 'path', attrs: { d: 'M 0.679688 22.296875 L 35.875 0.0507812 L 60.519531 39.046875 Z M 0.679688 22.296875 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 371, 511)' } },
    { tag: 'path', attrs: { d: 'M 41.675781 0.0078125 L 7.320312 13.359375 L 0.5 28.851562 L 13.851562 63.203125 L 29.34375 70.023438 L 63.699219 56.671875 L 70.519531 41.179688 L 57.167969 6.828125 Z M 41.675781 0.0078125 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 523, 628)' } },
    { tag: 'path', attrs: { d: 'M 45.738281 0.757812 L 59.5 17.167969 L 14.707031 54.738281 L 0.941406 38.328125 Z M 45.738281 0.757812 ', fillOpacity: '1', fillRule: 'nonzero', transform: 'matrix(1, 0, 0, 1, 572, 630)' } },
  ],
};

// Tailwind color classes for each region (for fill via text-color)
const regionColorClasses: { [key: string]: string } = {
  'Central & Downtown': 'text-gray-100',
  'West Side': 'text-gray-200',
  'Northeast': 'text-gray-300',
  'East Side': 'text-gray-50',
  'Far East': 'text-gray-300',
  'Lower Valley': 'text-gray-200',
};

// Aria labels for accessibility
const regionLabels: { [key: string]: string } = {
  'Central & Downtown': 'Central & Downtown El Paso',
  'West Side': 'West Side El Paso',
  'Northeast': 'Northeast El Paso',
  'East Side': 'East Side El Paso',
  'Far East': 'Far East El Paso',
  'Lower Valley': 'Lower Valley El Paso',
};

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

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
          {/* Region Groups - Organic clip-path shapes */}
          {regions.map((regionName) => {
            const isActive = activeRegion === regionName;
            const shapes = shapesByRegion[regionName] || [];

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
                aria-label={regionLabels[regionName]}
                className={`cursor-pointer transition-all duration-300 ${regionColorClasses[regionName]} ${
                  isActive ? 'drop-shadow-md' : ''
                }`}
                style={{
                  color: isActive ? '#ff6b35' : undefined,
                  filter: isActive ? 'drop-shadow(0 10px 15px -3px rgba(255, 107, 53, 0.2))' : 'none',
                }}
              >
                {/* Render all shapes for this region */}
                {shapes.map((shape, idx) => {
                  const { tag, attrs } = shape;

                  // Build props from attributes, converting SVG to JSX
                  const props: any = {
                    key: `${regionName}-shape-${idx}`,
                    fill: 'currentColor',
                    stroke: 'none',
                    style: { transition: 'fill 0.3s ease-in-out' },
                  };

                  // Add all original attributes (converted to JSX format)
                  if (attrs.d) props.d = attrs.d;
                  if (attrs.points) props.points = attrs.points;
                  if (attrs.fillOpacity) props.fillOpacity = attrs.fillOpacity;
                  if (attrs.fillRule) props.fillRule = attrs.fillRule;
                  if (attrs.transform) props.transform = attrs.transform;

                  // Render based on tag type
                  if (tag === 'path') {
                    return <path {...props} />;
                  } else if (tag === 'polygon') {
                    return <polygon {...props} />;
                  }
                  return null;
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {regions.map((region) => (
          <div key={region} className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-sm ${regionColorClasses[region]}`}
              style={{ backgroundColor: 'currentColor' }}
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
