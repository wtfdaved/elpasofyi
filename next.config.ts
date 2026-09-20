import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // The 2026 rebuild renamed several sections. Keep the old URLs working.
  async redirects() {
    return [
      { source: '/food', destination: '/eat', permanent: true },
      { source: '/food/:slug', destination: '/eat', permanent: true },
      { source: '/attractions', destination: '/do', permanent: true },
      { source: '/attractions/:slug', destination: '/do', permanent: true },
      { source: '/shopping', destination: '/neighborhoods', permanent: true },
      { source: '/accommodations', destination: '/stay', permanent: true },
      { source: '/accommodations/:slug', destination: '/stay', permanent: true },
      { source: '/cameras', destination: '/news', permanent: false },
    ];
  },
};

export default nextConfig;
