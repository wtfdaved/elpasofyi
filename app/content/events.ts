/**
 * The annual calendar.
 *
 * Two kinds of information live here, and they are kept apart on purpose:
 *  - `window`: the time of year the event normally lands in. Always safe.
 *  - `next`: a specific date we have confirmed with the organizer or a local
 *    newsroom. Only filled in when we have actually checked it.
 *
 * The site computes what is coming up from `next`, so the homepage and the
 * events page stay current as dates pass without anyone editing a page.
 */

export const EVENTS_VERIFIED = '2026-09-21';

export type Season = 'winter' | 'spring' | 'summer' | 'fall' | 'year-round';

export interface ConfirmedDate {
  /** ISO date, YYYY-MM-DD. */
  start: string;
  /** ISO date for multi-day events. */
  end?: string;
  /** Anything worth knowing about this specific edition. */
  detail?: string;
}

export interface AnnualEvent {
  slug: string;
  name: string;
  /** Typical window, e.g. "Late August". */
  window: string;
  /** Sort key: month it usually starts, 1-12. 0 for year-round. */
  month: number;
  season: Season;
  where: string;
  what: string;
  why?: string;
  /** A confirmed upcoming edition, when we have one. */
  next?: ConfirmedDate;
  /** What happened most recently, for events whose next date is not set. */
  latest?: string;
  source?: { label: string; url: string };
  tags: string[];
  marquee?: boolean;
}

export const MONTHS = [
  'Year-round', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const ANNUAL_EVENTS: AnnualEvent[] = [
  {
    slug: 'chalk-the-block',
    name: 'Chalk the Block',
    window: 'Early October',
    month: 10,
    season: 'fall',
    where: 'Downtown Arts Festival Plaza and surrounding streets',
    what: 'The city’s public art festival: a juried chalk art competition, installations, performances and downtown streets closed to cars for the weekend.',
    why: 'The best weekend of the year to see downtown behave like a proper city center. It pulls 45,000-plus people.',
    next: { start: '2026-10-03', end: '2026-10-04', detail: '19th annual' },
    source: { label: 'Chalk the Block', url: 'https://www.chalktheblock.com' },
    tags: ['art', 'downtown', 'free'],
    marquee: true,
  },
  {
    slug: 'dia-de-los-muertos',
    name: 'Día de los Muertos Desfile & Festival',
    window: 'Late October',
    month: 10,
    season: 'fall',
    where: 'Downtown Arts District and the Mexican American Cultural Center',
    what: 'Community altars, a parade, live performance, art and food across the downtown Arts District, anchored by the Mexican American Cultural Center.',
    why: 'The altars are built by families and neighborhood organizations, not a production company. Concordia Cemetery holds its own observance the same season.',
    next: { start: '2026-10-24', detail: '9th annual, 11 a.m. to 9 p.m.' },
    source: { label: 'El Paso MACC', url: 'https://www.epmacc.org/Dia-de-los-Muertos' },
    tags: ['tradition', 'free', 'family', 'downtown'],
    marquee: true,
  },
  {
    slug: 'amigo-airsho',
    name: 'Amigo Airsho',
    window: 'Late October',
    month: 10,
    season: 'fall',
    where: 'Biggs Army Airfield, Fort Bliss',
    what: 'A full-scale air show with military and civilian performers — a decades-old El Paso fall tradition.',
    why: 'The 2026 edition is headlined by the U.S. Navy Blue Angels, with the Air Force F-16 Viper Demo Team and the Army Golden Knights.',
    next: { start: '2026-10-24', end: '2026-10-25', detail: 'Blue Angels headlining' },
    source: { label: 'Amigo Airsho', url: 'https://www.amigoairsho.com' },
    tags: ['aviation', 'fort bliss', 'family'],
    marquee: true,
  },
  {
    slug: 'winterfest',
    name: 'WinterFest',
    window: 'Late November through early January',
    month: 11,
    season: 'winter',
    where: 'Downtown, San Jacinto Plaza and around',
    what: 'The downtown holiday season: more than a million lights, an outdoor ice rink, a holiday market, and the city’s only illuminated holiday parade.',
    why: 'Ice skating in the desert, with a 70-degree afternoon as likely as a cold one.',
    next: { start: '2026-11-21', end: '2027-01-03', detail: 'Runs into the new year' },
    source: { label: 'El Paso WinterFest', url: 'https://www.epwinterfest.com' },
    tags: ['holiday', 'family', 'downtown'],
    marquee: true,
  },
  {
    slug: 'sun-bowl-parade',
    name: 'Sun Bowl Parade',
    window: 'Thanksgiving Day',
    month: 11,
    season: 'fall',
    where: 'Downtown El Paso',
    what: 'The Thanksgiving morning parade downtown, run by the Sun Bowl Association ahead of the bowl game itself.',
    next: { start: '2026-11-26', detail: 'Thanksgiving Day' },
    source: { label: 'Sun Bowl Association', url: 'https://sunbowl.org/events' },
    tags: ['parade', 'thanksgiving', 'family', 'free'],
  },
  {
    slug: 'sun-bowl',
    name: 'The Sun Bowl',
    window: 'December 31',
    month: 12,
    season: 'winter',
    where: 'Sun Bowl Stadium, UTEP',
    what: 'The 93rd edition of one of the oldest college bowl games in the country, played into the side of the mountain and broadcast nationally on CBS.',
    why: 'New in 2026: Old El Paso took over as title sponsor in September, replacing Tony the Tiger after years of Kellogg’s branding. The game is now the Old El Paso Sun Bowl.',
    next: { start: '2026-12-31', detail: '93rd Sun Bowl, noon Mountain, on CBS' },
    source: { label: 'Sun Bowl Association', url: 'https://sunbowl.org' },
    tags: ['football', 'tradition', 'new year'],
    marquee: true,
  },
  {
    slug: 'southwestern-rodeo',
    name: 'Southwestern International PRCA Rodeo & Livestock Show',
    window: 'Winter',
    month: 2,
    season: 'winter',
    where: 'El Paso County Coliseum',
    what: 'A long-running professional rodeo and stock show, the borderland’s biggest western event.',
    source: { label: 'El Paso County', url: 'https://www.epcounty.com' },
    tags: ['rodeo', 'western', 'family'],
  },
  {
    slug: 'sunland-derby',
    name: 'Sunland Derby',
    window: 'Late winter / early spring',
    month: 3,
    season: 'spring',
    where: 'Sunland Park Racetrack, New Mexico',
    what: 'The marquee race of the Sunland meet, a Kentucky Derby prep with real national attention.',
    source: { label: 'Sunland Park Racetrack', url: 'https://www.sunland-park.com' },
    tags: ['racing', 'new mexico', 'spring'],
  },
  {
    slug: 'chihuahuas-season',
    name: 'El Paso Chihuahuas season',
    window: 'Late March through September',
    month: 4,
    season: 'spring',
    where: 'Southwest University Park, Downtown',
    what: 'Triple-A baseball downtown — 75 home games, the Padres’ top affiliate, and the ballpark that reshaped the district around it.',
    why: 'Cheap seats, a great ballpark, and the mountains over the outfield wall.',
    latest: 'The 2026 season closed at home on September 20. Baseball returns downtown in the spring.',
    source: { label: 'El Paso Chihuahuas', url: 'https://www.milb.com/el-paso' },
    tags: ['baseball', 'downtown', 'family'],
    marquee: true,
  },
  {
    slug: 'klaq-balloonfest',
    name: 'KLAQ Balloonfest',
    window: 'Memorial Day weekend',
    month: 5,
    season: 'spring',
    where: 'Northeast El Paso',
    what: 'Hot air balloons at dawn, a night glow, live music, and the unofficial start of summer.',
    source: { label: 'KLAQ', url: 'https://klaq.com' },
    tags: ['balloons', 'music', 'family'],
  },
  {
    slug: 'viva-el-paso',
    name: 'Viva! El Paso',
    window: 'Friday and Saturday nights, late June through early August',
    month: 6,
    season: 'summer',
    where: 'McKelligon Canyon Amphitheatre',
    what: 'An outdoor musical drama telling four centuries of the region’s history, staged in a canyon inside the Franklin Mountains.',
    why: 'The venue alone — a stone amphitheater with the canyon walls behind the stage.',
    latest: 'The 49th season ran June 26 through August 1, 2026. The 50th season comes next summer.',
    source: { label: 'Viva! El Paso', url: 'https://vivaelpaso.org' },
    tags: ['theater', 'outdoors', 'summer nights'],
    marquee: true,
  },
  {
    slug: 'plaza-classic-film-festival',
    name: 'Plaza Classic Film Festival',
    window: 'July',
    month: 7,
    season: 'summer',
    where: 'The Plaza Theatre and downtown',
    what: 'One of the largest classic film festivals anywhere — eleven days of restored prints, guests, and free outdoor screenings downtown.',
    why: 'Watching a classic on the big screen under the Plaza’s star ceiling is the single most El Paso cultural experience there is.',
    latest: 'The 19th festival ran July 16 to 26, 2026. It returns next July.',
    source: { label: 'Plaza Classic Film Festival', url: 'https://plazaclassic.com' },
    tags: ['film', 'downtown', 'historic venue'],
    marquee: true,
  },
  {
    slug: 'fiesta-de-las-flores',
    name: 'Fiesta de las Flores',
    window: 'Labor Day weekend',
    month: 9,
    season: 'fall',
    where: 'El Paso County Coliseum grounds',
    what: 'A long-running Hispanic heritage festival — music, food, carnival and a coronation — put on to fund scholarships.',
    source: { label: 'Visit El Paso', url: 'https://visitelpaso.com/events' },
    tags: ['heritage', 'music', 'labor day'],
  },
  {
    slug: 'sun-city-music-festival',
    name: 'Sun City Music Festival',
    window: 'Labor Day weekend',
    month: 9,
    season: 'fall',
    where: 'Outdoor venue, varies by year',
    what: 'The region’s big electronic music weekend, drawing crowds from both sides of the border and across the Southwest.',
    source: { label: 'Sun City Music Festival', url: 'https://suncitymusicfestival.com' },
    tags: ['edm', 'festival', 'labor day'],
  },
  {
    slug: 'celebration-of-our-mountains',
    name: 'Celebration of Our Mountains',
    window: 'September into November',
    month: 9,
    season: 'fall',
    where: 'Franklin Mountains, Hueco Tanks and regional sites',
    what: 'Weeks of guided hikes, bird walks, geology talks and archaeology tours, mostly free, led by people who know the ground. The nonprofit behind it has been running these since 1994.',
    why: 'The cheapest way to get expert-guided access to places you would otherwise walk past.',
    source: { label: 'Celebration of Our Mountains', url: 'https://celebrationofourmountains.org/calendar' },
    tags: ['outdoors', 'free', 'guided'],
  },
  {
    slug: 'downtown-artist-farmers-market',
    name: 'Downtown Art & Farmers Market',
    window: 'Saturday mornings',
    month: 0,
    season: 'year-round',
    where: 'Union Plaza, Downtown',
    what: 'Produce, makers and breakfast in the shadow of the ballpark, most Saturday mornings.',
    source: { label: 'Visit El Paso', url: 'https://visitelpaso.com/events' },
    tags: ['market', 'saturday', 'free'],
  },
  {
    slug: 'ardovinos-farmers-market',
    name: "Ardovino's Farmers Market",
    window: 'Saturday mornings, in season',
    month: 0,
    season: 'year-round',
    where: "Ardovino's Desert Crossing, Sunland Park NM",
    what: 'Regional growers, bakers and makers on the patio at the state line. Go early, stay for breakfast.',
    source: { label: "Ardovino's Desert Crossing", url: 'https://ardovinos.com' },
    tags: ['market', 'saturday', 'new mexico'],
  },
  {
    slug: 'locomotive-fc',
    name: 'El Paso Locomotive FC',
    window: 'Spring through fall',
    month: 0,
    season: 'year-round',
    where: 'Southwest University Park, Downtown',
    what: 'USL Championship soccer downtown, with a supporters’ section that takes it seriously.',
    source: { label: 'El Paso Locomotive FC', url: 'https://eplocomotivefc.com' },
    tags: ['soccer', 'downtown', 'nights'],
  },
];

export const MARQUEE_EVENTS = ANNUAL_EVENTS.filter((e) => e.marquee);

export function eventsByMonth(): { month: string; events: AnnualEvent[] }[] {
  const buckets = new Map<number, AnnualEvent[]>();
  for (const e of ANNUAL_EVENTS) {
    const list = buckets.get(e.month) ?? [];
    list.push(e);
    buckets.set(e.month, list);
  }
  return [...buckets.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([month, events]) => ({ month: MONTHS[month], events }));
}

export interface UpcomingEvent {
  event: AnnualEvent;
  date: ConfirmedDate;
  /** Whole days from today until the start. 0 means today. */
  daysAway: number;
  /** True while the event is running. */
  happeningNow: boolean;
}

function startOfDay(d: Date): number {
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}

/**
 * Events with a confirmed date that has not finished yet, soonest first.
 * Recomputed on every render, so the site ages correctly on its own.
 */
export function upcomingEvents(now: Date = new Date()): UpcomingEvent[] {
  const today = startOfDay(now);

  return ANNUAL_EVENTS.flatMap((event) => {
    if (!event.next) return [];
    const start = Date.parse(`${event.next.start}T00:00:00Z`);
    const end = Date.parse(`${event.next.end ?? event.next.start}T00:00:00Z`);
    if (end < today) return [];

    return [
      {
        event,
        date: event.next,
        daysAway: Math.round((start - today) / 86_400_000),
        happeningNow: start <= today && today <= end,
      },
    ];
  }).sort((a, b) => a.daysAway - b.daysAway);
}

/** "Oct 3–4, 2026", "Oct 24, 2026", "Nov 21, 2026 – Jan 3, 2027". */
export function formatEventDate(date: ConfirmedDate): string {
  const fmt = (iso: string, withYear: boolean) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      ...(withYear ? { year: 'numeric' as const } : {}),
      timeZone: 'UTC',
    });

  if (!date.end || date.end === date.start) return fmt(date.start, true);

  const sameYear = date.start.slice(0, 4) === date.end.slice(0, 4);
  const sameMonth = sameYear && date.start.slice(0, 7) === date.end.slice(0, 7);

  if (sameMonth) {
    const day = new Date(`${date.end}T12:00:00Z`).getUTCDate();
    return `${fmt(date.start, false)}–${day}, ${date.end.slice(0, 4)}`;
  }
  return `${fmt(date.start, !sameYear)} – ${fmt(date.end, true)}`;
}
