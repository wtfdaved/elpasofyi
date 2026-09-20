import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import DoBrowser from '../components/DoBrowser';
import { THINGS } from '../content/things-to-do';
import { SITE } from '../content/site';

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
      />
      <div className="container-custom py-14">
        <DoBrowser things={THINGS} />
      </div>
    </>
  );
}
