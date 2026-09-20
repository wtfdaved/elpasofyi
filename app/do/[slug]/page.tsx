import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin } from 'lucide-react';
import { DO_LABELS, THINGS, getThing } from '../../content/things-to-do';
import { SITE } from '../../content/site';

export function generateStaticParams() {
  return THINGS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const thing = getThing(slug);
  if (!thing) return { title: 'Not found' };
  return {
    title: `${thing.name} — ${thing.kind} in El Paso`,
    description: thing.blurb,
    alternates: { canonical: `/do/${thing.slug}` },
  };
}

export default async function ThingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const thing = getThing(slug);
  if (!thing) notFound();

  const related = THINGS.filter((t) => t.category === thing.category && t.slug !== thing.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: thing.name,
    description: thing.blurb,
    url: `${SITE.url}/do/${thing.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="container-custom py-12 sm:py-16">
        <Link href="/do" className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint hover:text-sun">
          <ArrowLeft className="h-4 w-4" /> All things to do
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-active">{DO_LABELS[thing.category]}</span>
            <span className="chip">{thing.kind}</span>
            {thing.cost && <span className="chip">{thing.cost}</span>}
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl">{thing.name}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-ink-faint">
            <MapPin className="h-4 w-4" /> {thing.area}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{thing.blurb}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl">Why go</h2>
            <ul className="mt-4 space-y-3">
              {thing.why.map((reason) => (
                <li key={reason} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                  {reason}
                </li>
              ))}
            </ul>

            {thing.planning && thing.planning.length > 0 && (
              <>
                <h2 className="mt-10 text-2xl">Planning notes</h2>
                <ul className="mt-4 space-y-3">
                  {thing.planning.map((p) => (
                    <li key={p} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {p}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="space-y-6">
            {thing.note && (
              <div className="rounded-card border-l-4 border-chile bg-white p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-chile">Heads up</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{thing.note}</p>
              </div>
            )}
            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Tags</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {thing.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Before you go</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Seasons, fees and hours change. Confirm with the park, museum or venue.{' '}
                <a href={`mailto:${SITE.email}`} className="text-sun underline underline-offset-4">
                  Send a correction
                </a>
                .
              </p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-sand-line pt-10">
            <h2 className="text-2xl">More {DO_LABELS[thing.category].toLowerCase()}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/do/${r.slug}`} className="card-hover p-6">
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
