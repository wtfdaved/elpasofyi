import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import { STAYS } from '../content/stays';
import { SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'Where to Stay in El Paso',
  description:
    'Downtown hotels worth booking in El Paso, Texas — the restored 1912 landmark, the Art Deco tower, the boutiques, and the cheap historic option.',
  alternates: { canonical: '/stay' },
};

export default function StayPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Where to Stay in El Paso',
    url: `${SITE.url}/stay`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Where to Stay"
        title="Stay downtown"
        dek="El Paso is a driving city, with one exception: downtown. Stay in those few blocks and you can walk to three museums, a 1930 movie palace, a Triple-A ballpark and most of the best restaurants in town."
      />

      <div className="container-custom py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {STAYS.map((stay) => (
            <article key={stay.slug} className="card flex flex-col p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="chip">{stay.kind}</span>
                <span className="font-mono text-xs text-ink-faint">{stay.price}</span>
              </div>
              <h2 className="mt-4 text-2xl leading-snug">{stay.name}</h2>
              <p className="mt-1 text-xs text-ink-faint">{stay.area}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{stay.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {stay.why.map((w) => (
                  <li key={w} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                    {w}
                  </li>
                ))}
              </ul>
              {stay.note && (
                <p className="mt-5 border-t border-sand-line pt-4 text-xs leading-relaxed text-ink-faint">
                  {stay.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-prose text-sm leading-relaxed text-ink-faint">
          We do not take booking commissions and we do not link to aggregators. Book direct, and
          confirm rates and availability with the hotel.
        </p>
      </div>
    </>
  );
}
