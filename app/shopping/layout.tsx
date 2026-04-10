import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Shopping, Boutiques & Markets in El Paso, TX | elpaso.fyi',
  description: 'Discover El Paso\'s best shopping, local boutiques, vintage markets, and artisan makers. Explore Kern Place, Arts District, Downtown, and East Side Markets. Support local El Paso businesses and makers.',
  keywords: 'El Paso shopping, El Paso boutiques, vintage markets El Paso, local makers El Paso, Cielo Vista shopping, Kern Place shops, Arts District galleries, downtown El Paso shops, artisan markets, local El Paso businesses',
  openGraph: {
    title: 'Best Shopping, Boutiques & Markets in El Paso, TX',
    description: 'Discover El Paso\'s best shopping, local boutiques, vintage markets, and artisan makers.',
    url: 'https://elpaso.fyi/shopping',
    type: 'website',
    locale: 'en_US',
    siteName: 'elpaso.fyi',
    images: [
      {
        url: 'https://elpaso.fyi/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'El Paso Shopping & Local Makers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Shopping, Boutiques & Markets in El Paso, TX',
    description: 'Discover El Paso\'s best shopping, local boutiques, and artisan makers',
    creator: '@elpasofyi',
    images: ['https://elpaso.fyi/og-image.svg'],
  },
  alternates: {
    canonical: 'https://elpaso.fyi/shopping',
  },
};

export default function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
