import Header from './components/Header';
import Hero from './components/Hero';
import TheRadar from './components/TheRadar';
import FeaturedHighlight from './components/FeaturedHighlight';
import DirectoryTeaser from './components/DirectoryTeaser';
import Footer from './components/Footer';
import Schema from './components/Schema';

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'The Unofficial Guide to El Paso, TX',
    description: 'Discover El Paso events, best restaurants, weekend itineraries, and authentic things to do in El Paso, Texas. Insider local recommendations.',
    url: 'https://elpaso.fyi',
    isPartOf: {
      '@type': 'WebSite',
      name: 'elpaso.fyi',
      url: 'https://elpaso.fyi',
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'elpaso.fyi',
      description: 'The Unofficial Guide to El Paso',
      url: 'https://elpaso.fyi',
      areaServed: {
        '@type': 'City',
        name: 'El Paso',
        '@id': 'https://en.wikipedia.org/wiki/El_Paso,_Texas',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'El Paso',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <Schema schema={schemaData} />
      <Header />
      <main className="bg-light-bg text-slate-900">
        <article>
          <Hero />
        </article>
        <section>
          <TheRadar />
        </section>
        <section>
          <FeaturedHighlight />
        </section>
        <section>
          <DirectoryTeaser />
        </section>
        <Footer />
      </main>
    </>
  );
}
