import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Prose from '../../components/Prose';
import { NEWS, formatDate, getPost } from '../../content/news';
import { SITE } from '../../content/site';

export function generateStaticParams() {
  return NEWS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Not found' };
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { title: post.title, description: post.dek, type: 'article', publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = NEWS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE.url}/news/${post.slug}`,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="container-custom py-12 sm:py-16">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-ink-faint hover:text-sun">
          <ArrowLeft className="h-4 w-4" /> The Dispatch
        </Link>

        <header className="mt-8 max-w-prose">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="chip chip-active">{post.category}</span>
            <span className="font-mono uppercase tracking-wider text-ink-faint">
              {formatDate(post.date)} · {post.readMinutes} min read
            </span>
          </div>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.dek}</p>
        </header>

        <div className="mt-10">
          <Prose body={post.body} />
        </div>

        {post.sources && post.sources.length > 0 && (
          <section className="mt-10 max-w-prose rounded-card border-l-4 border-sage bg-white p-6">
            <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Sources</h2>
            <ul className="mt-3 space-y-2">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sun hover:text-sun-deep"
                  >
                    {source.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-10 max-w-prose rounded-card border border-sand-line bg-white p-6 text-sm leading-relaxed text-ink-soft">
          Written by the {SITE.name} editors in El Paso. Spot something wrong?{' '}
          <a href={`mailto:${SITE.email}`} className="text-sun underline underline-offset-4">
            {SITE.email}
          </a>
          . Corrections get published, labeled as corrections.
        </div>

        <section className="mt-16 border-t border-sand-line pt-10">
          <h2 className="text-2xl">More from The Dispatch</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/news/${p.slug}`} className="card-hover p-6">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sun">
                  {formatDate(p.date)}
                </span>
                <h3 className="mt-2 text-lg leading-snug">{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
