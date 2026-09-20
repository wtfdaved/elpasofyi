import type { Metadata } from 'next';
import { Lora, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { SITE } from './content/site';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'elpaso.fyi — The independent guide to El Paso, Texas',
    template: '%s | elpaso.fyi',
  },
  description: SITE.description,
  keywords: [
    'El Paso',
    'El Paso Texas',
    'things to do in El Paso',
    'El Paso restaurants',
    'El Paso bars',
    'El Paso events',
    'Sun City',
    'Franklin Mountains',
    'El Paso neighborhoods',
    'El Paso news',
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    title: 'elpaso.fyi — The independent guide to El Paso, Texas',
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'elpaso.fyi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'elpaso.fyi — The independent guide to El Paso, Texas',
    description: SITE.description,
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  alternates: { canonical: '/' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  sameAs: [SITE.social.instagram, SITE.social.tiktok],
  areaServed: {
    '@type': 'City',
    name: 'El Paso',
    address: { '@type': 'PostalAddress', addressLocality: 'El Paso', addressRegion: 'TX', addressCountry: 'US' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <body className="flex min-h-screen flex-col bg-sand font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
