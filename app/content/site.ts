/**
 * Site-wide constants. One place to change the name, the pitch and the nav.
 */

export const SITE = {
  name: 'elpaso.fyi',
  domain: 'elpaso.fyi',
  url: 'https://elpaso.fyi',
  tagline: 'The Sun City, on purpose.',
  description:
    'An independent guide to El Paso, Texas — where to eat and drink, what to do, what is going on around town, and how the neighborhoods actually fit together.',
  email: 'hello@elpaso.fyi',
  social: {
    instagram: 'https://www.instagram.com/elpaso.fyi',
    tiktok: 'https://www.tiktok.com/@elpaso.fyi',
  },
  /** Last date the editors swept the listings end to end. */
  lastReviewed: '2026-09-21',
} as const;

export const NAV: { label: string; href: string; blurb: string }[] = [
  { label: 'Eat & Drink', href: '/eat', blurb: 'Tex-Mex, tacos, bars, breweries, coffee' },
  { label: 'Things to Do', href: '/do', blurb: 'Mountains, missions, museums, ballgames' },
  { label: 'Events', href: '/events', blurb: 'The annual calendar, month by month' },
  { label: 'News', href: '/news', blurb: 'Dispatches on what is going on' },
  { label: 'Guides', href: '/guides', blurb: 'Itineraries you can actually follow' },
  { label: 'Neighborhoods', href: '/neighborhoods', blurb: 'Block by block' },
];

export const SECONDARY_NAV: { label: string; href: string }[] = [
  { label: 'Where to Stay', href: '/stay' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

/** Working local newsrooms, for readers who need the actual breaking story. */
export const NEWS_SOURCES: { name: string; url: string; note: string }[] = [
  { name: 'El Paso Matters', url: 'https://elpasomatters.org', note: 'Nonprofit newsroom — city hall, the border, county government' },
  { name: 'El Paso Times', url: 'https://www.elpasotimes.com', note: 'The daily paper of record since 1881' },
  { name: 'KTSM 9', url: 'https://www.ktsm.com', note: 'NBC affiliate — breaking news and weather' },
  { name: 'KVIA 7', url: 'https://kvia.com', note: 'ABC affiliate — traffic, closures, borderland coverage' },
  { name: 'KFOX14', url: 'https://kfoxtv.com', note: 'FOX affiliate — local news and investigations' },
  { name: 'City of El Paso Newsroom', url: 'https://www.elpasotexas.gov/news', note: 'Official releases, road closures, city council' },
  { name: 'Visit El Paso Events', url: 'https://visitelpaso.com/events', note: 'The CVB calendar — large-venue and downtown events' },
  { name: 'El Paso Live', url: 'https://www.elpasolive.com', note: 'Plaza Theatre, Abraham Chavez, the Convention Center' },
];
