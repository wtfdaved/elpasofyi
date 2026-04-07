import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'elpaso.fyi - The Insider\'s Heartbeat of El Paso',
  description: 'The modern, curated heartbeat of El Paso, Texas. Authentic underground cultural insights with a heavy emphasis on the local food and drink scene.',
  keywords: 'El Paso, local culture, food scene, drink scene, underground events, insider guide',
  authors: [{ name: 'elpaso.fyi' }],
  openGraph: {
    title: 'elpaso.fyi - The Insider\'s Heartbeat of El Paso',
    description: 'The modern, curated heartbeat of El Paso, Texas.',
    url: 'https://elpaso.fyi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'elpaso.fyi',
    description: 'The Insider\'s Heartbeat of El Paso',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-bg text-dark-text dark">
        {children}
      </body>
    </html>
  );
}
