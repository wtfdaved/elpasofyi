import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import { GUIDES } from '../content/guides';
import { SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'El Paso Itineraries & Guides',
  description:
    'Step-by-step El Paso itineraries: your first 48 hours, a Tex-Mex crawl, a full day on the Franklin Mountains, and downtown on foot.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'El Paso Itineraries',
    url: `${SITE.url}/guides`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Guides"
        title="Itineraries you can actually follow"
        dek="El Paso is 25 miles long. The wrong plan is mostly windshield time. These group by geography so you spend the day in the city instead of on the freeway."
      />

      <div className="container-custom py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {GUIDES.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card-hover group flex flex-col p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip chip-active">{guide.length}</span>
                <span className="chip">{guide.stops.length} stops</span>
              </div>
              <h2 className="mt-5 text-2xl leading-snug group-hover:text-sun">{guide.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{guide.dek}</p>
              <dl className="mt-6 space-y-1 text-xs text-ink-faint">
                <div className="flex gap-2">
                  <dt className="font-mono uppercase tracking-wider">Best for</dt>
                  <dd>{guide.bestFor}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-mono uppercase tracking-wider">Season</dt>
                  <dd>{guide.season}</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
