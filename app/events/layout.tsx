import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Events & Things to Do in El Paso, TX | elpaso.fyi',
  description: 'Discover El Paso events this weekend and beyond. Find live music, local markets, festivals, and best things to do in El Paso, Texas. Submit your event!',
  keywords: 'El Paso events this weekend, live music El Paso, local markets, things to do in El Paso, El Paso festivals, El Paso nightlife',
  openGraph: {
    title: 'Upcoming Events & Things to Do in El Paso, TX',
    description: 'Discover the best El Paso events this weekend: live music, markets, festivals, and more things to do in El Paso.',
    url: 'https://elpaso.fyi/events',
    type: 'website',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
