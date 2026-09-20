import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import { NEIGHBORHOODS } from '../content/neighborhoods';
import { SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'El Paso Neighborhoods',
  description:
    'Downtown, Segundo Barrio, Sunset Heights, Kern Place, the Lower Valley, the Northeast and the East Side — how El Paso actually breaks down.',
  alternates: { canonical: '/neighborhoods' },
};

export default function NeighborhoodsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'El Paso Neighborhoods',
    url: `${SITE.url}/neighborhoods`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Neighborhoods"
        title="How El Paso breaks down"
        dek="Twenty-five miles of city along the base of a mountain range, with a second country across the river and a third state fifteen minutes west. Here is what is where, and why it matters."
      />

      <div className="container-custom py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {NEIGHBORHOODS.map((n) => (
            <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="card-hover group flex flex-col p-7">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sun">{n.side}</span>
              <h2 className="mt-3 text-2xl leading-snug group-hover:text-sun">{n.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{n.oneLiner}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {n.knownFor.slice(0, 3).map((k) => (
                  <span key={k} className="chip">{k}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
