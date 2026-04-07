/**
 * Schema Component - Injects JSON-LD structured data into page head
 * Supports multiple schema types: Article, Event, Organization, LocalBusiness
 */

interface BaseSchema {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  url?: string;
  image?: string;
}

interface ArticleSchema extends BaseSchema {
  '@type': 'Article';
  headline: string;
  author?: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  datePublished?: string;
  dateModified?: string;
  articleBody?: string;
  keywords?: string;
  image?: string;
  mainEntity?: {
    '@type': 'Thing';
    name: string;
  };
}

interface EventSchema extends BaseSchema {
  '@type': 'Event';
  startDate?: string;
  endDate?: string;
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed' | 'EventRescheduled';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
  location?: {
    '@type': 'Place';
    name: string;
    address?: {
      '@type': 'PostalAddress';
      addressLocality: string;
      addressRegion: string;
      postalCode?: string;
      addressCountry: string;
    };
  };
  offers?: {
    '@type': 'Offer';
    url: string;
    price?: string;
    priceCurrency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder';
  };
}

interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization';
  alternateName?: string;
  sameAs?: string[];
  address?: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

type SchemaType = ArticleSchema | EventSchema | OrganizationSchema;

interface SchemaProps {
  schema: SchemaType;
}

/**
 * Schema Component
 * Renders JSON-LD structured data as a script tag
 * Use inside page components to inject schema markup into the head
 *
 * @example
 * <Schema schema={{
 *   '@context': 'https://schema.org',
 *   '@type': 'Article',
 *   headline: 'My Guide to El Paso',
 *   author: { '@type': 'Organization', name: 'elpaso.fyi' },
 *   datePublished: '2024-01-01',
 * }} />
 */
export default function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
