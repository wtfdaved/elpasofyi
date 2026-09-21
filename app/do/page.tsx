import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import DoBrowser from '../components/DoBrowser';
import { THINGS, THINGS_VERIFIED } from '../content/things-to-do';
import { SITE } from '../content/site';
import { longDate } from '../lib/links';

export const metadata: Metadata = {
  title: 'Things to Do in El Paso, Texas',
  description:
    'Hiking the Franklin Mountains, the Mission Trail, free downtown museums, Hueco Tanks, ballgames and day trips — what to actually do in El Paso.',
  alternates: { canonical: '/do' },
};

export default function DoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Things to Do in El Paso',
    description: 'Outdoors, history, museums, sports and day trips in and around El Paso, Texas.',
    url: `${SITE.url}/do`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Things to Do"
        title="What to actually do in El Paso"
        dek="A 27,000-acre state park inside the city limits, missions that predate the United States, free museums downtown, and a ballpark with the mountains over the outfield wall. Plus the day trips that make this corner of the map worth the drive."
      >
        <p className="max-w-2xl rounded-card border border-sand-line bg-white/70 p-4 text-sm text-ink-soft">
          <strong className="font-semibold text-ink">
            {THINGS.length} places, all checked {longDate(THINGS_VERIFIED)}.
          </strong>{' '}
          Fees and seasons change, and a couple of these are closed for construction — we say so on the
          listing rather than letting you find out at the gate.
        </p>
      </PageHero>

      <div className="container-custom py-14">
        <DoBrowser things={THINGS} />
      </div>
    </>
  );
}
