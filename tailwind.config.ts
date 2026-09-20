import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // --- Sun City palette ---------------------------------------------
        // Paper + ink
        sand: '#F6F1E8',          // page background, adobe plaster
        'sand-deep': '#EDE4D6',   // alternating sections
        'sand-line': '#DCCFBB',   // hairlines on sand
        ink: '#1C1714',           // primary text, mesquite black
        'ink-soft': '#4A4039',    // secondary text
        'ink-faint': '#7A6E63',   // captions, metadata

        // Accents
        sun: '#E2571E',           // sunset orange, primary accent
        'sun-deep': '#B83F13',    // hover / pressed
        chile: '#9E2B25',         // deep red, serious accent
        gold: '#E0A43B',          // star on the mountain
        sage: '#7F9A80',          // desert scrub
        dusk: '#25324A',          // night sky over the Franklins
        'dusk-deep': '#161F2F',

        // Legacy aliases (kept so nothing silently breaks)
        terracotta: '#C2603F',
        'desert-sage': '#7F9A80',
        'light-bg': '#F6F1E8',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-lora)', 'Georgia', 'serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'IBM Plex Mono', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      borderRadius: {
        card: '1.25rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,23,20,0.04), 0 10px 30px -18px rgba(28,23,20,0.35)',
        lift: '0 2px 4px rgba(28,23,20,0.05), 0 18px 40px -20px rgba(28,23,20,0.45)',
      },
      backgroundImage: {
        'sun-fade': 'linear-gradient(180deg, #F6F1E8 0%, #F1E3CF 100%)',
        'dusk-fade': 'linear-gradient(180deg, #25324A 0%, #161F2F 100%)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 0.6s ease-out both',
        fadeIn: 'fadeIn 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
