import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Traffic Cameras - El Paso Traffic Monitor | elpaso.fyi',
  description:
    'Real-time traffic cameras for I-10, US-54, and Loop 375 in El Paso. Monitor live traffic conditions across highways and neighborhoods.',
  keywords: ['El Paso traffic', 'traffic cameras', 'I-10 traffic', 'US-54', 'Loop 375', 'live traffic', 'El Paso highways'],
  openGraph: {
    title: 'Live Traffic Cameras - El Paso Traffic Monitor',
    description: 'Real-time traffic monitoring for El Paso highways and neighborhoods',
    type: 'website',
    url: 'https://elpaso.fyi/cameras',
    siteName: 'elpaso.fyi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Traffic Cameras - El Paso Traffic Monitor',
    description: 'Real-time traffic monitoring for El Paso highways and neighborhoods',
  },
};

export default function CamerasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://elpaso.fyi',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Traffic Cameras',
                item: 'https://elpaso.fyi/cameras',
              },
            ],
          }),
        }}
      />
    </>
  );
}
