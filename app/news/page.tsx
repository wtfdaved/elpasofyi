import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import { NEWS, formatDate } from '../content/news';
import { NEWS_SOURCES, SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'El Paso News & Dispatches',
  description:
    'Seasonal reads, explainers and updates on what is going on in El Paso, Texas — plus a directory of the local newsrooms covering breaking news.',
  alternates: { canonical: '/news' },
};

export default function NewsPage() {
  const [lead, ...rest] = NEWS;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Dispatch — elpaso.fyi',
    url: `${SITE.url}/news`,
    blogPost: NEWS.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.dek,
      datePublished: p.date,
      url: `${SITE.url}/news/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="The Dispatch"
        title="What is going on in El Paso"
        dek="Our own writing about the city: what the season is doing, what changed around town, and explainers on how things here actually work. When news breaks, we would rather send you to the newsroom covering it than repeat it badly."
      />

      <div className="container-custom py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            <Link href={`/news/${lead.slug}`} className="card-hover group block p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="chip chip-active">{lead.category}</span>
                <span className="font-mono uppercase tracking-wider text-ink-faint">
                  {formatDate(lead.date)} · {lead.readMinutes} min read
                </span>
              </div>
              <h2 className="mt-5 text-3xl leading-tight group-hover:text-sun sm:text-4xl">{lead.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead.dek}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-sun">Read the dispatch →</span>
            </Link>

            <ul className="mt-10 divide-y divide-sand-line border-t border-sand-line">
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link href={`/news/${post.slug}`} className="group block py-7">
                    <div className="flex flex-wrap items-center gap-3 text-[0.7rem]">
                      <span className="chip">{post.category}</span>
                      <span className="font-mono uppercase tracking-wider text-ink-faint">
                        {formatDate(post.date)} · {post.readMinutes} min read
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl leading-snug group-hover:text-sun">{post.title}</h3>
                    <p className="mt-2 max-w-2xl text-ink-soft">{post.dek}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <h2 className="font-heading text-lg">Breaking news, from the people who cover it</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We are a guide, not a wire service. For what happened today, read these.
              </p>
              <ul className="mt-5 space-y-4">
                {NEWS_SOURCES.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-sun hover:text-sun"
                    >
                      {source.name}
                      <ExternalLink className="h-3.5 w-3.5 text-ink-faint" />
                    </a>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">{source.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
