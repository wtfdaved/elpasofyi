import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode base
        'dark-bg': '#0a0a0a',
        'dark-bg-secondary': '#0f0f0f',
        'dark-text': '#e8e8e8',
        'dark-text-muted': '#999999',
        'dark-text-dim': '#666666',

        // Desert tones (accent)
        'sand': '#d4a574',
        'rust': '#8b4513',
        'clay': '#a0522d',
        'burnt': '#7a3e1f',

        // Neon accents
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff006e',
        'neon-purple': '#b537f2',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        'sans': ['system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'IBM Plex Mono', 'Courier New', 'monospace'],
        'display': ['Space Mono', 'IBM Plex Mono', 'monospace'],
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
        glitch: {
          '0%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 43%)',
            transform: 'translate(0)',
          },
          '20%': {
            clipPath: 'polygon(0 25%, 100% 25%, 100% 58%, 0 58%)',
            transform: 'translate(-4px, 2px)',
          },
          '40%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transform: 'translate(0)',
          },
          '60%': {
            clipPath: 'polygon(0 42%, 100% 44%, 100% 58%, 0 40%)',
            transform: 'translate(4px, 2px)',
          },
          '80%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transform: 'translate(0)',
          },
          '100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 43%)',
            transform: 'translate(-4px, -2px)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
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
        glitch: 'glitch 2.5s infinite',
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        fadeIn: 'fadeIn 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.2)',
        'neon-pink': '0 0 10px rgba(255, 0, 110, 0.5), 0 0 20px rgba(255, 0, 110, 0.2)',
        'glow-sm': '0 0 15px rgba(212, 165, 116, 0.3)',
        'glow': '0 0 30px rgba(212, 165, 116, 0.5)',
      },
      opacity: {
        '15': '0.15',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
