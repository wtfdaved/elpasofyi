import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { NEIGHBORHOODS, getNeighborhood } from '../../content/neighborhoods';
import { PLACES } from '../../content/places';
import { THINGS } from '../../content/things-to-do';
import { SITE } from '../../content/site';

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) return { title: 'Not found' };
  return {
    title: `${n.name} — El Paso neighborhood guide`,
    description: n.oneLiner,
    alternates: { canonical: `/neighborhoods/${n.slug}` },
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) notFound();

  const others = NEIGHBORHOODS.filter((x) => x.slug !== n.slug).slice(0, 4);
  // Listings tied to this part of town, straight from the directory.
  const places = PLACES.filter((p) => p.zone === n.zone);
  const things = THINGS.filter((t) => t.zone === n.zone);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: n.name,
    description: n.oneLiner,
    url: `${SITE.url}/neighborhoods/${n.slug}`,
    address: { '@type': 'PostalAddress', addressLocality: 'El Paso', addressRegion: 'TX', addressCountry: 'US' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="container-custom py-12 sm:py-16">
        <Link href="/neighborhoods" className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint hover:text-sun">
          <ArrowLeft className="h-4 w-4" /> All neighborhoods
        </Link>

        <header className="mt-8 max-w-3xl">
          <span className="chip chip-active">{n.side}</span>
          <h1 className="mt-5 text-4xl sm:text-5xl">{n.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{n.oneLiner}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl">The character of the place</h2>
            <ul className="mt-4 space-y-3">
              {n.character.map((c) => (
                <li key={c} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                  {c}
                </li>
              ))}
            </ul>

            {places.length > 0 && (
              <section className="mt-12">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-2xl">Eat and drink here</h2>
                  <Link href="/eat" className="text-sm font-semibold text-sun">
                    All places →
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {places.map((p) => (
                    <Link key={p.slug} href={`/eat/${p.slug}`} className="card-hover p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg leading-snug">{p.name}</h3>
                        <span className="font-mono text-xs text-ink-faint">{p.price}</span>
                      </div>
                      <p className="mt-1 text-xs text-ink-faint">{p.kind} · {p.area}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {things.length > 0 && (
              <section className="mt-12">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-2xl">Do this here</h2>
                  <Link href="/do" className="text-sm font-semibold text-sun">
                    All things to do →
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {things.map((t) => (
                    <Link key={t.slug} href={`/do/${t.slug}`} className="card-hover p-5">
                      <h3 className="text-lg leading-snug">{t.name}</h3>
                      <p className="mt-1 text-xs text-ink-faint">{t.kind}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.blurb}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="card p-6">
                <h3 className="font-heading text-lg">Also worth knowing</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {n.eat.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-heading text-lg">Nearby</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {n.doHere.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-card border-l-4 border-sun bg-white p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sun">Go if</p>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink">{n.goIf}</p>
            </div>
            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Known for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {n.knownFor.map((k) => (
                  <span key={k} className="chip">{k}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t border-sand-line pt-10">
          <h2 className="text-2xl">Keep going</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link key={o.slug} href={`/neighborhoods/${o.slug}`} className="card-hover p-6">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sun">{o.side}</span>
                <h3 className="mt-2 text-lg leading-snug">{o.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
