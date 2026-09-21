import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import EatBrowser from '../components/EatBrowser';
import { PLACES, PLACES_VERIFIED } from '../content/places';
import { SITE } from '../content/site';
import { longDate } from '../lib/links';

export const metadata: Metadata = {
  title: 'Where to Eat & Drink in El Paso',
  description:
    'Tex-Mex institutions, taquerías, breweries, dive bars and coffee in El Paso, Texas — an independent, locally written list with no invented ratings.',
  alternates: { canonical: '/eat' },
};

export default function EatPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Where to Eat & Drink in El Paso',
    description: 'Restaurants, bars, breweries, bakeries and coffee shops in El Paso, Texas.',
    url: `${SITE.url}/eat`,
    hasPart: PLACES.map((p) => ({
      '@type': 'Restaurant',
      name: p.name,
      servesCuisine: p.kind,
      url: `${SITE.url}/eat/${p.slug}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: p.address,
        addressLocality: 'El Paso',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Eat & Drink"
        title="Where to eat and drink in El Paso"
        dek="Red chile enchiladas older than most of the city, rolled tacos in tomato broth, heirloom masa getting national attention, and the bars that outlasted every trend. No star ratings, no scraped reviews — just places we would send a friend."
      >
        <p className="max-w-2xl rounded-card border border-sand-line bg-white/70 p-4 text-sm text-ink-soft">
          <strong className="font-semibold text-ink">
            {PLACES.length} places, all checked {longDate(PLACES_VERIFIED)}.
          </strong>{' '}
          We do not print hours or prices, because they change and a wrong hour sends you on a wasted
          drive. Every listing links to the business and to a map — confirm before you go.
        </p>
      </PageHero>

      <div className="container-custom py-14">
        <EatBrowser places={PLACES} />
      </div>
    </>
  );
}
