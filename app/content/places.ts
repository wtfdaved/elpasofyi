/**
 * Eat & drink listings.
 *
 * Editing rules we hold ourselves to:
 *  - Only places we can stand behind. No invented ratings, no invented hours.
 *  - `address` is filled in only when we are sure of it. Blank beats wrong.
 *  - `note` carries the caveat: seasonal closures, cash-only, lines, etc.
 * Hours and prices move around, so the site never prints them as fact.
 */

export type PlaceCategory = 'tex-mex' | 'tacos' | 'sit-down' | 'bar' | 'brewery' | 'coffee' | 'bakery' | 'bbq';

export interface Place {
  slug: string;
  name: string;
  category: PlaceCategory;
  /** Short human label for the category chip. */
  kind: string;
  area: string;
  price: '$' | '$$' | '$$$';
  address?: string;
  /** One line, the elevator pitch. */
  blurb: string;
  /** Why it earns a spot on this list. */
  why: string[];
  order?: string;
  note?: string;
  tags: string[];
  /** True for the handful of places that define the city. */
  canon?: boolean;
}

export const CATEGORY_LABELS: Record<PlaceCategory, string> = {
  'tex-mex': 'Tex-Mex & Mexican',
  tacos: 'Tacos',
  'sit-down': 'Sit-Down',
  bar: 'Bars',
  brewery: 'Breweries',
  coffee: 'Coffee',
  bakery: 'Bakeries',
  bbq: 'Barbecue & Steak',
};

export const PLACES: Place[] = [
  {
    slug: 'l-and-j-cafe',
    name: 'L&J Cafe',
    category: 'tex-mex',
    kind: 'Tex-Mex',
    area: 'Central, by Concordia Cemetery',
    price: '$$',
    address: '3622 E Missouri Ave',
    blurb: 'The Old Place by the Graveyard. Open since 1927 and still the yardstick every other plate in town gets measured against.',
    why: [
      'Four generations of the same family running the same room.',
      'The chile is the point — red, green, and the enchiladas that come under it.',
      'A cross-section of the whole city eats here: judges, roofers, grandmothers, tourists who did their homework.',
    ],
    order: 'Cheese enchiladas with red chile, a side of chile con queso, and a margarita.',
    note: 'Expect a wait at lunch. The parking lot fills before the dining room does.',
    tags: ['institution', 'enchiladas', 'margaritas', 'since 1927'],
    canon: true,
  },
  {
    slug: 'chicos-tacos',
    name: "Chico's Tacos",
    category: 'tacos',
    kind: 'El Paso original',
    area: 'Multiple locations across the city',
    price: '$',
    blurb: 'Rolled tacos swimming in thin tomato broth under a snowdrift of shredded cheese. There is nothing else like it anywhere.',
    why: [
      'Genuinely unique to El Paso — a dish you cannot order in another city.',
      'Open late, cheap, and the great equalizer at 1 a.m.',
      'Arguing about whether it is actually good is itself an El Paso pastime.',
    ],
    order: 'A double order of rolled tacos. Add the hot sauce from the pump. Do not skip the fries.',
    note: 'Cash-friendly, fast-moving lines, counter service. Go in expecting soup, not a crunchy taco.',
    tags: ['late night', 'cheap', 'only in el paso'],
    canon: true,
  },
  {
    slug: 'elemi',
    name: 'Elemi',
    category: 'sit-down',
    kind: 'Modern Mexican',
    area: 'Downtown',
    price: '$$$',
    address: '313 N Kansas St',
    blurb: 'Heirloom corn nixtamalized in-house, turned into some of the most talked-about tortillas in the country.',
    why: [
      'Chef Emiliano Marentes put El Paso masa on the national map and has the James Beard recognition to show for it.',
      'The menu changes with what the farms and the mills send.',
      'Proof that the border food conversation starts here, not in Austin.',
    ],
    order: 'Whatever is built on the house masa that night.',
    note: 'Small room, limited service days. Check before you drive down.',
    tags: ['masa', 'chef-driven', 'date night'],
    canon: true,
  },
  {
    slug: 'kikis-restaurant-bar',
    name: "Kiki's Restaurant & Bar",
    category: 'tex-mex',
    kind: 'Tex-Mex',
    area: 'Central, Piedras St',
    price: '$$',
    address: '2719 N Piedras St',
    blurb: 'A tiny, perpetually packed room with a machacado plate people plan their week around.',
    why: [
      'Small enough that you feel like a regular by your second visit.',
      'The kind of Tex-Mex that hasn’t changed because it never needed to.',
    ],
    order: 'Machacado, or the enchiladas the regulars order without looking at the menu.',
    note: 'The room is small. Off-peak is your friend.',
    tags: ['machacado', 'neighborhood', 'small room'],
  },
  {
    slug: 'cafe-central',
    name: 'Café Central',
    category: 'sit-down',
    kind: 'Fine dining',
    area: 'Downtown',
    price: '$$$',
    address: '109 N Oregon St',
    blurb: 'Downtown’s long-running white-tablecloth room, with roots tracing back to a 1918 café across the river in Juárez.',
    why: [
      'The go-to for anniversaries, closings, and out-of-town guests you want to impress.',
      'A proper bar program and a cream of green chile soup that locals order on principle.',
    ],
    order: 'Cream of green chile soup to start.',
    note: 'Reservations strongly recommended, especially around Plaza Theatre show nights.',
    tags: ['fine dining', 'date night', 'downtown'],
  },
  {
    slug: 'anson-11',
    name: 'Anson 11',
    category: 'sit-down',
    kind: 'Steak & seafood',
    area: 'Downtown',
    price: '$$$',
    address: '303 N Oregon St',
    blurb: 'Dark wood, good steaks, and a bar that stays busy after the theater lets out.',
    why: [
      'One of the anchors of downtown’s dining revival.',
      'Works for a business dinner and for a two-person night out.',
    ],
    tags: ['steak', 'downtown', 'bar'],
  },
  {
    slug: 'tabla',
    name: 'Tabla',
    category: 'sit-down',
    kind: 'Tapas',
    area: 'Union Plaza, Downtown',
    price: '$$',
    address: '115 Durango St',
    blurb: 'Shareable plates in the Union Plaza district, a short walk from the ballpark.',
    why: [
      'The easiest pre- or post-Chihuahuas game dinner downtown.',
      'Built for a group that cannot agree on one thing.',
    ],
    tags: ['tapas', 'groups', 'ballpark'],
  },
  {
    slug: 'cattlemans-steakhouse',
    name: "Cattleman's Steakhouse at Indian Cliffs Ranch",
    category: 'bbq',
    kind: 'Steakhouse',
    area: 'Fabens, about 30 miles east',
    price: '$$$',
    blurb: 'A steakhouse on a working ranch out past the county line, with a movie-set desert and a sunset that does half the work.',
    why: [
      'The drive is the appetizer. Go in the late afternoon so you eat as the light goes orange.',
      'Kids run the grounds — the ranch has animals, a maze, and plenty of room.',
      'Portions are aggressive even by Texas standards.',
    ],
    order: 'The Cowboy or any of the big cuts, and bring people to share the sides.',
    note: 'Take I-10 east to the Fabens exit. Weekends get very busy; go early or call ahead.',
    tags: ['steak', 'road trip', 'sunset', 'family'],
    canon: true,
  },
  {
    slug: 'julios-cafe-corona',
    name: "Julio's Café Corona",
    category: 'tex-mex',
    kind: 'Tex-Mex',
    area: 'East Side, Gateway Blvd',
    price: '$$',
    address: '8050 Gateway Blvd E',
    blurb: 'A long-running border Mexican kitchen with Juárez lineage and a menu that does not chase trends.',
    why: [
      'Decades-deep recipes, served in a room built for big tables.',
      'Fair prices for the size of the plates.',
    ],
    tags: ['family', 'east side', 'classic'],
  },
  {
    slug: 'lucys-cafe',
    name: "Lucy's Café",
    category: 'tex-mex',
    kind: 'Breakfast',
    area: 'West Side, N Mesa St',
    price: '$',
    address: '4119 N Mesa St',
    blurb: 'Breakfast burritos, machaca, and huevos rancheros for the West Side before-work crowd.',
    why: [
      'The unglamorous, reliable, order-at-the-counter breakfast this city runs on.',
      'Fast enough to make a 9 a.m. meeting.',
    ],
    order: 'Machaca plate or a breakfast burrito to go.',
    tags: ['breakfast', 'burritos', 'quick'],
  },
  {
    slug: 'cafe-mayapan',
    name: 'Café Mayapán',
    category: 'tex-mex',
    kind: 'Mexican, cooperative',
    area: 'Chamizal / Texas Ave',
    price: '$',
    blurb: 'A restaurant run as part of a women workers’ cooperative, serving interior Mexican cooking with a mission attached.',
    why: [
      'Your lunch money stays in the neighborhood by design.',
      'Mole, tamales, and dishes you will not find at the Tex-Mex places on Mesa.',
    ],
    note: 'Hours follow the cooperative’s programming — check before going.',
    tags: ['cooperative', 'mole', 'community'],
  },
  {
    slug: 'ripe-eatery',
    name: 'Ripe Eatery & Market',
    category: 'sit-down',
    kind: 'Brunch',
    area: 'West Side, Redd Rd',
    price: '$$',
    address: '910 E Redd Rd',
    blurb: 'The West Side brunch standby — scratch kitchen, bright room, long Sunday lines.',
    why: [
      'One of the few places in town that takes brunch seriously all week.',
      'Good for a non-Mexican-food day, which happens.',
    ],
    note: 'Weekend waits are real. Put your name in and walk the shopping center.',
    tags: ['brunch', 'west side', 'weekend'],
  },
  {
    slug: 'crave-kitchen-and-bar',
    name: 'Crave Kitchen & Bar',
    category: 'sit-down',
    kind: 'American',
    area: 'Kern Place and other locations',
    price: '$$',
    blurb: 'Pancakes the size of a hubcap, burgers, and the Cincinnati-district patio that started it all.',
    why: [
      'The default answer when a group cannot decide.',
      'Kern Place location puts you steps from the Cincinnati bar strip afterward.',
    ],
    note: 'Weekend brunch waits are long at the Kern Place location.',
    tags: ['brunch', 'burgers', 'groups'],
  },
  {
    slug: 'state-line',
    name: 'State Line',
    category: 'bbq',
    kind: 'Barbecue',
    area: 'Sunland Park Dr, at the NM line',
    price: '$$',
    address: '1222 Sunland Park Dr',
    blurb: 'Big Texas barbecue served family-style, right where the state line is.',
    why: [
      'Ribs and brisket by the platter, with the sides that go with them.',
      'The patio at sunset with the Franklins behind you is an easy sell.',
    ],
    tags: ['barbecue', 'patio', 'family style'],
  },
  {
    slug: 'desert-oak-barbecue',
    name: 'Desert Oak Barbecue',
    category: 'bbq',
    kind: 'Central Texas barbecue',
    area: 'El Paso',
    price: '$$',
    blurb: 'Central Texas-style smoke — brisket by the pound, sold until it runs out.',
    why: [
      'Proof El Paso can do a proper brisket, not just a plate lunch.',
      'Small operation, so the quality stays where they want it.',
    ],
    note: 'They sell until they sell out. Going late is a gamble.',
    tags: ['brisket', 'sells out', 'smoke'],
  },
  {
    slug: 'ardovinos-desert-crossing',
    name: "Ardovino's Desert Crossing",
    category: 'sit-down',
    kind: 'Italian & patio',
    area: 'Sunland Park, New Mexico',
    price: '$$',
    address: '1 Ardovino Dr, Sunland Park, NM',
    blurb: 'A desert compound just over the New Mexico line: restaurant, patio, and the Saturday farmers market.',
    why: [
      'The best patio in the region, full stop — the mountains do the decorating.',
      'The Saturday morning market is a local ritual, not a tourist stop.',
      'Weddings, brunches, and long lunches that turn into afternoons.',
    ],
    note: 'It is in New Mexico, about 15 minutes from downtown. The farmers market runs Saturday mornings — confirm the season.',
    tags: ['patio', 'farmers market', 'new mexico', 'brunch'],
    canon: true,
  },
  {
    slug: 'rosas-cantina',
    name: "Rosa's Cantina",
    category: 'bar',
    kind: 'Honky-tonk',
    area: 'Upper Valley, Doniphan Dr',
    price: '$',
    address: '3454 Doniphan Dr',
    blurb: 'The cantina from the Marty Robbins song, still standing on Doniphan with a jukebox and a pool table.',
    why: [
      'Genuine El Paso mythology you can order a beer inside of.',
      'No pretense whatsoever — that is the appeal.',
    ],
    tags: ['dive', 'music history', 'jukebox'],
    canon: true,
  },
  {
    slug: 'the-tap',
    name: 'The Tap',
    category: 'bar',
    kind: 'Dive bar',
    area: 'Downtown, San Antonio Ave',
    price: '$',
    address: '408 E San Antonio Ave',
    blurb: 'Dark, cheap, and honest — the downtown dive that outlasted every concept bar around it.',
    why: [
      'Stiff drinks and a kitchen that puts out a surprisingly good plate.',
      'Neon, vinyl booths, and zero interest in being trendy.',
    ],
    tags: ['dive', 'downtown', 'late'],
  },
  {
    slug: 'hope-and-anchor',
    name: 'The Hope & Anchor',
    category: 'bar',
    kind: 'Neighborhood bar',
    area: 'West Side, N Mesa St',
    price: '$',
    address: '4012 N Mesa St',
    blurb: 'A low-lit neighborhood bar on Mesa where the conversation matters more than the cocktail list.',
    why: [
      'The unofficial living room of a certain slice of El Paso.',
      'Patio, good jukebox energy, no cover, no fuss.',
    ],
    tags: ['neighborhood', 'patio', 'mesa'],
  },
  {
    slug: 'the-hoppy-monk',
    name: 'The Hoppy Monk',
    category: 'bar',
    kind: 'Beer bar',
    area: 'West Side, N Mesa St',
    price: '$$',
    address: '4141 N Mesa St',
    blurb: 'A deep, seriously-curated draft list plus a kitchen that takes the food as seriously as the beer.',
    why: [
      'The best beer selection in the city, and staff who can actually steer you.',
      'A shaded patio that works most of the year.',
    ],
    tags: ['craft beer', 'patio', 'food'],
  },
  {
    slug: 'deadbeach-brewery',
    name: 'DeadBeach Brewery',
    category: 'brewery',
    kind: 'Brewery & taproom',
    area: 'Downtown, Texas Ave',
    price: '$',
    address: '631 Texas Ave',
    blurb: 'Downtown’s brewery anchor, with a taproom that fills up before and after ballgames.',
    why: [
      'Walking distance from Southwest University Park.',
      'Local beer with local names, poured by people who will explain them.',
    ],
    tags: ['brewery', 'downtown', 'ballpark'],
  },
  {
    slug: 'ode-brewing',
    name: 'Ode Brewing Co.',
    category: 'brewery',
    kind: 'Brewery & kitchen',
    area: 'N Mesa St',
    price: '$$',
    address: '3233 N Mesa St',
    blurb: 'House beer plus a kitchen good enough that people come for the food and stay for the pint.',
    why: [
      'One of the first of the modern El Paso brewery wave.',
      'Family-friendly early, bar-friendly late.',
    ],
    tags: ['brewery', 'kitchen', 'family'],
  },
  {
    slug: 'craft-and-social',
    name: 'Craft & Social',
    category: 'bar',
    kind: 'Beer & wine bar',
    area: 'Downtown, Texas Ave',
    price: '$$',
    address: '515 Texas Ave',
    blurb: 'A downtown room for beer, wine, and a board of things to pick at while you decide where the night goes.',
    why: [
      'Good first stop on a downtown crawl.',
      'Quieter than the Cincinnati strip when you want to hear each other.',
    ],
    tags: ['wine', 'craft beer', 'downtown'],
  },
  {
    slug: 'kinleys-house-coffee',
    name: "Kinley's House Coffee & Tea",
    category: 'coffee',
    kind: 'Coffee house',
    area: 'Kern Place, N Mesa St',
    price: '$',
    address: '2231 N Mesa St',
    blurb: 'A converted house near UTEP with porch seating and a permanent population of students and laptop workers.',
    why: [
      'The closest thing the city has to a campus-adjacent third place.',
      'Porch in the morning, shade in the afternoon.',
    ],
    tags: ['coffee', 'wifi', 'utep'],
  },
  {
    slug: 'the-coffee-box',
    name: 'The Coffee Box',
    category: 'coffee',
    kind: 'Espresso bar',
    area: 'Downtown',
    price: '$',
    blurb: 'Shipping-container espresso downtown — small footprint, quick line, good shot.',
    why: [
      'Perfect fuel stop between the art museum and San Jacinto Plaza.',
      'Outdoor seating that makes downtown feel like a place you linger.',
    ],
    tags: ['espresso', 'downtown', 'quick'],
  },
  {
    slug: 'bowie-bakery',
    name: 'Bowie Bakery',
    category: 'bakery',
    kind: 'Panadería',
    area: 'Segundo Barrio',
    price: '$',
    address: '901 S Park St',
    blurb: 'Grab a tray and tongs and walk the racks — conchas, empanadas, and marranitos at prices that have not caught up to the rest of the country.',
    why: [
      'The classic El Paso panadería experience, still done the right way.',
      'Cheap enough to over-order, which you will.',
    ],
    order: 'Conchas, a marranito, and whatever is still warm.',
    note: 'Go in the morning. Trays empty fast on weekends.',
    tags: ['pan dulce', 'cheap', 'segundo barrio'],
    canon: true,
  },
  {
    slug: 'taco-tote',
    name: 'Taco Tote',
    category: 'tacos',
    kind: 'Taquería',
    area: 'Multiple locations',
    price: '$',
    blurb: 'Grilled meat by the taco, then the salsa bar does the rest — a Juárez import that El Paso adopted whole.',
    why: [
      'The salsa bar is the real menu: guacamole, charro beans, grilled onions, half a dozen salsas.',
      'Fast, consistent, and open when you need it.',
    ],
    order: 'Arrachera tacos, then a full lap of the salsa bar.',
    tags: ['tacos', 'salsa bar', 'quick'],
  },
  {
    slug: 'tacoholics',
    name: 'Tacoholics',
    category: 'tacos',
    kind: 'Taquería',
    area: 'Central El Paso',
    price: '$',
    blurb: 'A local taco brand that grew out of a food-truck following into a proper following.',
    why: [
      'Homegrown, not a chain import.',
      'The kind of place where the regulars order by nickname.',
    ],
    tags: ['tacos', 'local brand', 'casual'],
  },
];

export const CANON = PLACES.filter((p) => p.canon);

export function getPlace(slug: string): Place | undefined {
  return PLACES.find((p) => p.slug === slug);
}
