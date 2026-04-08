import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Guides & Itineraries for El Paso, TX | elpaso.fyi',
  description: 'Discover El Paso weekend itineraries, day trips, local guides, and insider tips. Explore what to do in El Paso from authentic neighborhoods to hidden gems. Deep-dive guides and itineraries coming soon.',
  keywords: [
    'El Paso weekend itineraries',
    'El Paso day trips',
    'El Paso local guides',
    'what to do in El Paso',
    'El Paso attractions',
    'El Paso things to do',
    'El Paso travel guide',
    'El Paso neighborhoods',
  ],
  openGraph: {
    title: 'Local Guides & Itineraries for El Paso, TX | elpaso.fyi',
    description: 'Discover El Paso weekend itineraries, day trips, and local guides for exploring the real El Paso. Deep-dive guides and itineraries dropping soon.',
    url: 'https://elpaso.fyi/guides',
    type: 'website',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
