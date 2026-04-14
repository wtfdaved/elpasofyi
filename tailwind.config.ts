import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elegant Desert Editorial palette
        'light-bg': '#faf9f6',
        'light-bg-secondary': '#f5f5f5',
        'slate-900': '#1a1a1a',
        'slate-700': '#2d2d2d',
        'slate-500': '#666666',
        'slate-300': '#d0d0d0',
        'slate-100': '#f0f0f0',

        // Primary accent - Terracotta (warm clay tone)
        'terracotta': '#CD7A5E',

        // Secondary accent - Desert Sage (muted green)
        'desert-sage': '#8FA896',

        // Neutral whites
        'white': '#ffffff',
      },
      opacity: {
        '3': '0.03',
      },
      fontFamily: {
        'sans': ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        'outfit': ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-fraunces)', 'system-ui', 'serif'],
        'fraunces': ['var(--font-fraunces)', 'system-ui', 'serif'],
        'mono': ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"noiseFilter\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" seed=\"2\" /><feColorMatrix type=\"saturate\" values=\"0.3\" /></filter><rect width=\"400\" height=\"400\" filter=\"url(%23noiseFilter)\" /></svg>')",
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-in-out',
        fadeIn: 'fadeIn 0.7s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
