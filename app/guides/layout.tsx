import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Paso Guides - Weekend Itineraries & Local Tips | elpaso.fyi',
  description: 'Insider guides to El Paso. Weekend itineraries, neighborhood guides, food tours, and local tips for discovering the real El Paso, Texas.',
  keywords: 'El Paso guides, weekend itinerary, local guide, things to do, El Paso tips',
  openGraph: {
    title: 'El Paso Guides - Local Insider Tips & Itineraries',
    description: 'Discover the real El Paso through insider guides on neighborhoods, food, events, and weekend getaways.',
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
