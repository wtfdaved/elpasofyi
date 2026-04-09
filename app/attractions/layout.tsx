import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Attractions & Landmarks in El Paso, TX | elpaso.fyi',
  description: 'Explore El Paso\'s best attractions, museums, historic landmarks, scenic drives, and outdoor activities. Discover things to do in El Paso from art galleries to desert hiking and cultural sites.',
  keywords: 'El Paso attractions, things to do in El Paso, El Paso landmarks, museums, scenic drives, tourist attractions, hiking, historic sites, family activities',
  openGraph: {
    title: 'Top Attractions & Landmarks in El Paso, TX',
    description: 'Your complete guide to El Paso\'s best attractions, museums, historic landmarks, and scenic drives.',
    url: 'https://elpaso.fyi/attractions',
    type: 'website',
  },
};

export default function AttractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
