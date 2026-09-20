/**
 * The annual calendar.
 *
 * These are recurring events, listed by the window they usually land in.
 * We deliberately do NOT print specific dates or ticket prices for a given
 * year — those move, and a wrong date is worse than no date. Each entry
 * carries the official source so a reader can confirm this year's dates.
 */

export type Season = 'winter' | 'spring' | 'summer' | 'fall' | 'year-round';

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
    slug: 'sun-bowl',
    name: 'The Sun Bowl & Sun Bowl Parade',
    window: 'Late December (parade on Thanksgiving)',
    month: 12,
    season: 'winter',
    where: 'Sun Bowl Stadium and downtown',
    what: 'One of the oldest college bowl games in the country, played into the side of the mountain, with a Thanksgiving Day parade downtown that the whole city turns out for.',
    why: 'If you only see El Paso do one big civic thing, make it this.',
    source: { label: 'Sun Bowl Association', url: 'https://www.sunbowl.org' },
    tags: ['football', 'parade', 'tradition'],
    marquee: true,
  },
  {
    slug: 'winterfest',
    name: 'WinterFest',
    window: 'Mid-November through early January',
    month: 11,
    season: 'winter',
    where: 'Downtown, San Jacinto Plaza and around',
    what: 'The downtown holiday season: the plaza tree, an outdoor ice rink, lights, and weekend programming.',
    why: 'Ice skating in the desert, with a 70-degree afternoon as likely as a cold one.',
    source: { label: 'Visit El Paso', url: 'https://visitelpaso.com/events' },
    tags: ['holiday', 'family', 'downtown'],
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
    slug: 'chihuahuas-opening-day',
    name: 'Chihuahuas Opening Day',
    window: 'Late March / early April',
    month: 4,
    season: 'spring',
    where: 'Southwest University Park, Downtown',
    what: 'Triple-A baseball comes back downtown, and the whole district wakes up with it. The season runs into September.',
    why: 'Cheap seats, a great ballpark, and the mountains over the outfield wall.',
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
    window: 'Summer weekends',
    month: 6,
    season: 'summer',
    where: 'McKelligon Canyon Amphitheatre',
    what: 'An outdoor musical drama telling four centuries of the region’s history, staged in a canyon inside the Franklin Mountains.',
    why: 'The venue alone — a stone amphitheater with the canyon walls behind the stage.',
    source: { label: 'Visit El Paso', url: 'https://visitelpaso.com/events' },
    tags: ['theater', 'outdoors', 'summer nights'],
    marquee: true,
  },
  {
    slug: 'plaza-classic-film-festival',
    name: 'Plaza Classic Film Festival',
    window: 'August',
    month: 8,
    season: 'summer',
    where: 'The Plaza Theatre and downtown',
    what: 'One of the largest classic film festivals anywhere — a week-plus of restored prints, guests, and free outdoor screenings downtown.',
    why: 'Watching a classic on the big screen under the Plaza’s star ceiling is the single most El Paso cultural experience there is.',
    source: { label: 'El Paso Community Foundation', url: 'https://plazaclassic.com' },
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
    what: 'A long-running Hispanic heritage festival — music, food, carnival, and a coronation — put on to fund scholarships.',
    source: { label: 'LULAC Council 132', url: 'https://visitelpaso.com/events' },
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
    slug: 'amigo-airsho',
    name: 'Amigo Airsho',
    window: 'Fall',
    month: 10,
    season: 'fall',
    where: 'Biggs Army Airfield, Fort Bliss',
    what: 'A full-scale air show with military and civilian performers — a decades-old El Paso fall tradition.',
    source: { label: 'Amigo Airsho', url: 'https://amigoairsho.org' },
    tags: ['aviation', 'fort bliss', 'family'],
  },
  {
    slug: 'chalk-the-block',
    name: 'Chalk the Block',
    window: 'Fall',
    month: 10,
    season: 'fall',
    where: 'Downtown Arts Festival Plaza and surrounding streets',
    what: 'The city’s public art festival: street painting, installations, and downtown closed to cars for a weekend.',
    why: 'The best weekend of the year to see downtown behave like a proper city center.',
    source: { label: 'City of El Paso Museums & Cultural Affairs', url: 'https://www.elpasotexas.gov/museums-and-cultural-affairs' },
    tags: ['art', 'downtown', 'free'],
    marquee: true,
  },
  {
    slug: 'dia-de-los-muertos',
    name: 'Día de los Muertos',
    window: 'Late October into early November',
    month: 11,
    season: 'fall',
    where: 'Concordia Cemetery, downtown, and neighborhood events',
    what: 'Altars, processions, and cemetery gatherings across the city — Concordia’s observance is the one people travel for.',
    tags: ['tradition', 'free', 'family'],
  },
  {
    slug: 'celebration-of-our-mountains',
    name: 'Celebration of Our Mountains',
    window: 'Fall',
    month: 9,
    season: 'fall',
    where: 'Franklin Mountains, Hueco Tanks, and regional sites',
    what: 'Weeks of guided hikes, bird walks, geology talks and archaeology tours, mostly free, led by people who know the ground.',
    why: 'The cheapest way to get expert-guided access to places you would otherwise walk past.',
    tags: ['outdoors', 'free', 'guided'],
  },
  {
    slug: 'downtown-artist-farmers-market',
    name: 'Downtown Art & Farmers Market',
    window: 'Saturday mornings',
    month: 0,
    season: 'year-round',
    where: 'Union Plaza, Downtown',
    what: 'Produce, makers, and breakfast in the shadow of the ballpark, most Saturday mornings.',
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
