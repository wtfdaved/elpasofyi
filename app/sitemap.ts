import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elpaso.fyi';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/food`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic guide routes
  const dynamicGuides = [
    {
      slug: 'weekend-in-el-paso',
      lastModified: '2024-03-15',
    },
    {
      slug: 'el-paso-taco-tour',
      lastModified: '2024-03-10',
    },
    {
      slug: 'best-neighborhoods-el-paso',
      lastModified: '2024-02-28',
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = dynamicGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...guideRoutes];
}
