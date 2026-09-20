import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin } from 'lucide-react';
import { CATEGORY_LABELS, PLACES, getPlace } from '../../content/places';
import { SITE } from '../../content/site';

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) return { title: 'Not found' };
  return {
    title: `${place.name} — ${place.kind} in El Paso`,
    description: place.blurb,
    alternates: { canonical: `/eat/${place.slug}` },
  };
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) notFound();

  const related = PLACES.filter((p) => p.category === place.category && p.slug !== place.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': place.category === 'bar' || place.category === 'brewery' ? 'BarOrPub' : 'Restaurant',
    name: place.name,
    description: place.blurb,
    servesCuisine: place.kind,
    priceRange: place.price,
    url: `${SITE.url}/eat/${place.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: place.address,
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="container-custom py-12 sm:py-16">
        <Link href="/eat" className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint hover:text-sun">
          <ArrowLeft className="h-4 w-4" /> All places to eat
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-active">{CATEGORY_LABELS[place.category]}</span>
            <span className="chip">{place.kind}</span>
            <span className="chip">{place.price}</span>
            {place.canon && <span className="chip border-gold bg-gold/15 text-ink">Sun City canon</span>}
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl">{place.name}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-ink-faint">
            <MapPin className="h-4 w-4" />
            {place.address ? `${place.address} · ${place.area}` : place.area}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{place.blurb}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl">Why it is on the list</h2>
            <ul className="mt-4 space-y-3">
              {place.why.map((reason) => (
                <li key={reason} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                  {reason}
                </li>
              ))}
            </ul>

            {place.order && (
              <div className="mt-10 rounded-card border-l-4 border-sun bg-white p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sun">What to order</p>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink">{place.order}</p>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            {place.note && (
              <div className="card p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Good to know</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{place.note}</p>
              </div>
            )}
            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Tags</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {place.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Before you go</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Hours and menus change. Confirm with the restaurant directly. Something here out of
                date?{' '}
                <a href={`mailto:${SITE.email}`} className="text-sun underline underline-offset-4">
                  Tell us
                </a>
                .
              </p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-sand-line pt-10">
            <h2 className="text-2xl">More {CATEGORY_LABELS[place.category].toLowerCase()}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/eat/${r.slug}`} className="card-hover p-6">
                  <h3 className="text-lg leading-snug">{r.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{r.blurb}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
