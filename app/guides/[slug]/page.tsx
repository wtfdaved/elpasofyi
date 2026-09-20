import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { GUIDES, getGuide } from '../../content/guides';
import { SITE } from '../../content/site';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: 'Not found' };
  return {
    title: guide.title,
    description: guide.dek,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.dek,
    totalTime: guide.length,
    url: `${SITE.url}/guides/${guide.slug}`,
    step: guide.stops.map((stop, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: stop.title,
      text: stop.detail,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="container-custom py-12 sm:py-16">
        <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint hover:text-sun">
          <ArrowLeft className="h-4 w-4" /> All guides
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <span className="chip chip-active">{guide.length}</span>
            <span className="chip">{guide.season}</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl">{guide.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{guide.dek}</p>
        </header>

        <div className="mt-10 max-w-prose space-y-5">
          {guide.intro.map((p) => (
            <p key={p} className="text-[1.0625rem] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl">The route</h2>
          <ol className="mt-6 border-l-2 border-sand-line">
            {guide.stops.map((stop) => (
              <li key={`${stop.time}-${stop.title}`} className="relative pb-9 pl-8 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-sand bg-sun" />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-sun">{stop.time}</p>
                <h3 className="mt-1.5 text-xl leading-snug">
                  {stop.href ? (
                    <Link href={stop.href} className="hover:text-sun">
                      {stop.title}
                    </Link>
                  ) : (
                    stop.title
                  )}
                </h3>
                <p className="mt-1.5 max-w-prose leading-relaxed text-ink-soft">{stop.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {guide.swaps && guide.swaps.length > 0 && (
          <section className="mt-12 max-w-prose rounded-card border-l-4 border-sage bg-white p-6">
            <h2 className="font-heading text-lg">Swaps and variations</h2>
            <ul className="mt-3 space-y-2.5">
              {guide.swaps.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  {s}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  );
}
