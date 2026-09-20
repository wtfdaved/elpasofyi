/** Itineraries. Each one is a route you could follow start to finish today. */

export interface GuideStop {
  time: string;
  title: string;
  detail: string;
  /** Optional internal link to the listing page. */
  href?: string;
}

export interface Guide {
  slug: string;
  title: string;
  dek: string;
  length: string;
  bestFor: string;
  season: string;
  intro: string[];
  stops: GuideStop[];
  swaps?: string[];
  tags: string[];
}

export const GUIDES: Guide[] = [
  {
    slug: 'first-48-hours-in-el-paso',
    title: 'Your first 48 hours in El Paso',
    dek: 'One weekend, no wasted driving: the mountain, the missions, downtown, and the Tex-Mex that started it all.',
    length: '2 days',
    bestFor: 'First-time visitors and new arrivals',
    season: 'Best October through April',
    tags: ['first visit', 'weekend', 'overview'],
    intro: [
      'El Paso is long. The city stretches along the base of the Franklin Mountains for about 25 miles, which means the wrong itinerary is mostly windshield time. This one groups by geography: mountain and West Side on day one, downtown and the valley on day two.',
      'Rent a car. There is no version of this weekend that works without one.',
    ],
    stops: [
      { time: 'Sat 7:30 a.m.', title: 'Breakfast on Mesa', detail: 'Machaca or a breakfast burrito before the day gets hot.', href: '/eat/lucys-cafe' },
      { time: 'Sat 8:30 a.m.', title: 'Franklin Mountains State Park', detail: 'Tom Mays Unit off Transmountain. Two hours on the trails while the air is still cool.', href: '/do/franklin-mountains-state-park' },
      { time: 'Sat 12:30 p.m.', title: 'Lunch at L&J Cafe', detail: 'Cheese enchiladas under red chile at the Old Place by the Graveyard. Walk Concordia Cemetery next door afterward.', href: '/eat/l-and-j-cafe' },
      { time: 'Sat 3 p.m.', title: 'El Paso Museum of Art', detail: 'Free, cold, and downtown. Then a coffee and a lap around San Jacinto Plaza.', href: '/do/el-paso-museum-of-art' },
      { time: 'Sat 6 p.m.', title: 'Scenic Drive at dusk', detail: 'Park at Murchison and watch El Paso and Juárez light up as one city.', href: '/do/scenic-drive-overlook' },
      { time: 'Sat 8 p.m.', title: 'Dinner downtown', detail: 'Elemi if you can get in, Café Central if you want white tablecloths, Tabla if there are four of you.', href: '/eat' },
      { time: 'Sun 9 a.m.', title: 'Pan dulce in Segundo Barrio', detail: 'Tray, tongs, and a walk past the murals on the way back to the car.', href: '/eat/bowie-bakery' },
      { time: 'Sun 11 a.m.', title: 'The Mission Trail', detail: 'Ysleta, Socorro, San Elizario. Three centuries in about three hours, plus the plaza in San Eli.', href: '/do/el-paso-mission-trail' },
      { time: 'Sun 4 p.m.', title: "Cattleman's, or a patio", detail: 'Drive east to the ranch for a steak and a sunset, or stay in town and take the patio at Ardovino’s.', href: '/eat/cattlemans-steakhouse' },
    ],
    swaps: [
      'Baseball season: swap Saturday dinner for a Chihuahuas game downtown and eat in Union Plaza first.',
      'Too hot: flip Saturday — museums in the afternoon, mountain at sunset instead of sunrise.',
      'Extra day: White Sands is 90 minutes away and worth the entire day.',
    ],
  },
  {
    slug: 'tex-mex-crawl',
    title: 'The Tex-Mex and taco crawl',
    dek: 'A one-day tour of the plates this city argues about, in the order that makes sense.',
    length: '1 day',
    bestFor: 'Eaters who came here specifically to eat',
    season: 'Year-round',
    tags: ['food', 'tacos', 'tex-mex'],
    intro: [
      'El Paso food is not Mexican food from the interior and it is not the Tex-Mex of Dallas. It is its own border thing: red chile, machaca, flour tortillas the size of a plate, and one genuinely unclassifiable dish in tomato broth.',
      'Pace yourself. Split everything. This is a full day, not a meal.',
    ],
    stops: [
      { time: '8 a.m.', title: 'Pan dulce, Bowie Bakery', detail: 'Start with a concha and coffee. Cheap, fast, and the right way to open.', href: '/eat/bowie-bakery' },
      { time: '11 a.m.', title: 'Tacos and the salsa bar', detail: 'Arrachera at Taco Tote, then a full lap of the salsa bar — that is the real menu.', href: '/eat/taco-tote' },
      { time: '1:30 p.m.', title: 'The main event: L&J Cafe', detail: 'Red chile cheese enchiladas. Order the queso to share. This is the plate the city is built on.', href: '/eat/l-and-j-cafe' },
      { time: '4 p.m.', title: "Chico's Tacos", detail: 'Rolled tacos in tomato broth under shredded cheese. There is nothing like it anywhere else. Judge it on its own terms.', href: '/eat/chicos-tacos' },
      { time: '6 p.m.', title: 'Reset with a beer', detail: 'The Hoppy Monk for the list, DeadBeach downtown if you want to stay central.', href: '/eat/the-hoppy-monk' },
      { time: '8 p.m.', title: 'Finish at Elemi', detail: 'House-nixtamalized heirloom masa. The highest expression of what this border does with corn.', href: '/eat/elemi' },
    ],
    swaps: [
      'Weekend brunch instead: Crave in Kern Place or Ripe on the West Side.',
      'If Elemi is closed, make Café Central the finish and order the cream of green chile soup.',
    ],
  },
  {
    slug: 'mountain-day',
    title: 'A mountain day, sunrise to sunset',
    dek: 'An urban range with 27,000 acres in it. Here is how to spend a full day on it without cooking yourself.',
    length: '1 day',
    bestFor: 'Hikers and anyone with a camera',
    season: 'October through April; summer only at dawn',
    tags: ['hiking', 'outdoors', 'views'],
    intro: [
      'The Franklin Mountains run right through the middle of El Paso, which means you can hike a real desert ridgeline and be back for lunch downtown. It also means people underestimate it. This range has no water, no shade, and full sun exposure. Treat it like a mountain.',
    ],
    stops: [
      { time: 'Sunrise', title: 'Tom Mays Unit', detail: 'Enter off Transmountain Road. Start early — the first two hours are the best light and the safest temperature.', href: '/do/franklin-mountains-state-park' },
      { time: 'Mid-morning', title: 'Pick your distance', detail: 'Short loops near the trailhead, or the long push toward North Franklin Peak if you are fit and started early.' },
      { time: 'Noon', title: 'Off the mountain, into the air conditioning', detail: 'A long lunch on the West Side. Get more water than you think you need for the afternoon.', href: '/eat' },
      { time: 'Afternoon', title: 'Transmountain pull-offs', detail: 'Drive Loop 375 and stop at the overlooks. Zero effort, enormous views.', href: '/do/transmountain-road' },
      { time: 'Golden hour', title: 'Scenic Drive or McKelligon Canyon', detail: 'Murchison Park for the city-and-Juárez view, or the canyon if there is a show at the amphitheater.', href: '/do/scenic-drive-overlook' },
      { time: 'Dark', title: 'Look for the Star', detail: 'The Star on the Mountain has been lit above the city since 1940. You can see it from most of the East Side.' },
    ],
    swaps: [
      'Climbers: swap the whole day for Hueco Tanks — but reserve well in advance, access is capped.',
      'Fall: drive two hours east to McKittrick Canyon in the Guadalupes for the only real fall color in the region.',
    ],
  },
  {
    slug: 'downtown-on-foot',
    title: 'Downtown on foot, in half a day',
    dek: 'Park once. Plaza, museums, murals, ballpark, and a bar — all inside about a mile.',
    length: 'Half day',
    bestFor: 'Anyone without a car, or with one they want to leave parked',
    season: 'Year-round; mornings in summer',
    tags: ['walking', 'downtown', 'museums'],
    intro: [
      'Downtown El Paso is the only part of the city built before the car, and it still works that way. A mile of walking covers the plaza, three free museums, a 1930 movie palace, a Triple-A ballpark and a bar district.',
    ],
    stops: [
      { time: '9 a.m.', title: 'Coffee, then San Jacinto Plaza', detail: 'Start at the alligators. Luis Jiménez’s sculpture stands where live ones lived until 1965.', href: '/do/san-jacinto-plaza' },
      { time: '10 a.m.', title: 'El Paso Museum of Art', detail: 'Free admission, strong Mexican colonial holdings, cold air.', href: '/do/el-paso-museum-of-art' },
      { time: '11:30 a.m.', title: 'Museum of History and the Digital Wall', detail: 'Pull apart a century of El Paso photographs with your hands.', href: '/do/el-paso-museum-of-history' },
      { time: '12:30 p.m.', title: 'Lunch in Union Plaza', detail: 'Tabla, or a brewery lunch at DeadBeach on Texas Ave.', href: '/eat/deadbeach-brewery' },
      { time: '2 p.m.', title: 'The Plaza Theatre', detail: 'Even if there is nothing playing, look at the building. In August, the Classic Film Festival takes it over completely.', href: '/do/plaza-theatre' },
      { time: '3 p.m.', title: 'Murals toward Segundo Barrio', detail: 'Walk south. The walls get better the farther you go.', href: '/do/downtown-art-district' },
      { time: 'Evening', title: 'Ballgame or a bar', detail: 'Chihuahuas in season, otherwise The Tap or Craft & Social.', href: '/do/southwest-university-park' },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
