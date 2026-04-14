import type { Metadata } from 'next';
import { Lora, Outfit } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/next';

// Modern Retro Typography
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'elpaso.fyi - The Unofficial Guide to El Paso, TX | Local Events, Food & Things to Do',
  description: 'The Unofficial Guide to El Paso. Discover best restaurants, local events, weekend itineraries, and authentic things to do in El Paso, Texas. Insider recommendations from locals.',
  keywords: 'El Paso, things to do in El Paso, El Paso events, best restaurants El Paso, El Paso food, El Paso weekend guide, El Paso things to do this weekend, local culture, underground events, El Paso insider guide, El Paso TX',
  authors: [{ name: 'elpaso.fyi' }],
  generator: 'Next.js',
  applicationName: 'elpaso.fyi',
  referrer: 'origin-when-cross-origin',
  creator: 'elpaso.fyi',
  publisher: 'elpaso.fyi',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: 'elpaso.fyi - The Unofficial Guide to El Paso',
    description: 'Discover El Paso events, best restaurants, weekend itineraries, and authentic things to do. Insider local recommendations.',
    url: 'https://elpaso.fyi',
    type: 'website',
    locale: 'en_US',
    siteName: 'elpaso.fyi',
    images: [
      {
        url: 'https://elpaso.fyi/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'elpaso.fyi - The Unofficial Guide to El Paso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'elpaso.fyi - The Unofficial Guide to El Paso',
    description: 'Discover El Paso events, restaurants, and weekend guides',
    creator: '@elpasofyi',
    images: ['https://elpaso.fyi/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://elpaso.fyi',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'elpaso.fyi',
    alternateName: 'The Unofficial Guide to El Paso',
    url: 'https://elpaso.fyi',
    description: 'The Unofficial Guide to El Paso. Discover best restaurants, local events, weekend itineraries, and authentic things to do in El Paso, Texas.',
    logo: 'https://elpaso.fyi/logo.jpg',
    sameAs: [
      'https://twitter.com/elpasofyi',
      'https://www.instagram.com/elpaso.fyi',
      'https://www.tiktok.com/@elpaso.fyi',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };

  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://elpaso.fyi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-light-bg text-slate-900 font-outfit">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
