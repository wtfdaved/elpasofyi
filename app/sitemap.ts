import type { MetadataRoute } from 'next';
import { SITE } from './content/site';
import { PLACES } from './content/places';
import { THINGS } from './content/things-to-do';
import { NEIGHBORHOODS } from './content/neighborhoods';
import { GUIDES } from './content/guides';
import { NEWS } from './content/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ([
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/eat`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/do`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/events`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/news`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/guides`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/neighborhoods`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/stay`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ] as const).map((route) => ({ ...route, lastModified: now }));

  const detail = (prefix: string, slugs: string[], priority: number): MetadataRoute.Sitemap =>
    slugs.map((slug) => ({
      url: `${base}${prefix}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    }));

  return [
    ...staticRoutes,
    ...detail('/eat', PLACES.map((p) => p.slug), 0.7),
    ...detail('/do', THINGS.map((t) => t.slug), 0.7),
    ...detail('/neighborhoods', NEIGHBORHOODS.map((n) => n.slug), 0.6),
    ...detail('/guides', GUIDES.map((g) => g.slug), 0.7),
    ...NEWS.map((post) => ({
      url: `${base}/news/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
