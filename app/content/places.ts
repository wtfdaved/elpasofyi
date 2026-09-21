/**
 * Eat & drink listings.
 *
 * Editing rules we hold ourselves to:
 *  - Only places we can stand behind. No invented ratings, no invented hours.
 *  - `address` is filled in only when we are sure of it. Blank beats wrong.
 *  - `note` carries the caveat: seasonal closures, cash-only, lines, etc.
 * Hours and prices move around, so the site never prints them as fact.
 *
 * Every entry below was checked against the business, a local newsroom or a
 * current listing on the date in PLACES_VERIFIED. When a place turns out to
 * have closed or moved, it comes off this list and goes into changes.ts.
 */

export const PLACES_VERIFIED = '2026-09-21';

export type PlaceCategory =
  | 'tex-mex'
  | 'tacos'
  | 'sit-down'
  | 'bar'
  | 'brewery'
  | 'coffee'
  | 'bakery'
  | 'bbq';

export type Zone =
  | 'Downtown'
  | 'Central'
  | 'West Side'
  | 'East Side'
  | 'Northeast'
  | 'Lower Valley'
  | 'New Mexico'
  | 'Out of town'
  | 'Citywide';

export interface Place {
  slug: string;
  name: string;
  category: PlaceCategory;
  /** Short human label for the category chip. */
  kind: string;
  /** Free-text location line shown to readers. */
  area: string;
  /** Coarse zone, used for filtering and for neighborhood cross-links. */
  zone: Zone;
  price: '$' | '$$' | '$$$';
  address?: string;
  website?: string;
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
  // ---------------------------------------------------------- Tex-Mex
  {
    slug: 'l-and-j-cafe',
    name: 'L&J Cafe',
    category: 'tex-mex',
    kind: 'Tex-Mex',
    area: 'Central, next to Concordia Cemetery',
    zone: 'Central',
    price: '$$',
    address: '3622 E Missouri Ave',
    website: 'https://www.landjcafe.com',
    blurb:
      'The Old Place by the Graveyard. Opened in 1927 as Tony’s Place — home cooking, home brew and slot machines through Prohibition — and still the yardstick every other plate in town gets measured against.',
    why: [
      'Four generations of the same family running the same room.',
      'The chile is the point — red, green, and the enchiladas that come under it.',
      'A cross-section of the whole city eats here: judges, roofers, grandmothers, tourists who did their homework.',
    ],
    order: 'Cheese enchiladas with red chile, the green chile chicken enchiladas, a side of queso, and a margarita.',
    note: 'Expect a wait at lunch. The parking lot fills before the dining room does.',
    tags: ['institution', 'enchiladas', 'margaritas', 'since 1927'],
    canon: true,
  },
  {
    slug: 'kikis-restaurant-bar',
    name: "Kiki's Restaurant & Bar",
    category: 'tex-mex',
    kind: 'Tex-Mex',
    area: 'Central, Piedras St',
    zone: 'Central',
    price: '$$',
    address: '2719 N Piedras St',
    website: 'https://kikisrestaurant.com',
    blurb:
      'A tiny, perpetually packed room opened by Paula Yardeni in 1976, with a machacado plate people plan their week around.',
    why: [
      'Fifty years in, it is still small enough that you feel like a regular by your second visit.',
      'The kind of Tex-Mex that has not changed because it never needed to.',
    ],
    order: 'Machacado, or the enchiladas the regulars order without looking at the menu.',
    note: 'The room is small and it has historically been closed one weekday. Off-peak is your friend.',
    tags: ['machacado', 'neighborhood', 'small room', 'since 1976'],
  },
  {
    slug: 'carnitas-queretaro',
    name: 'Carnitas Queretaro',
    category: 'tex-mex',
    kind: 'Mexican',
    area: 'Multiple locations — Zaragoza, Gateway West, N Mesa',
    zone: 'Citywide',
    price: '$$',
    address: '1451 N Zaragoza Rd (and other locations)',
    blurb:
      'Carnitas by the pound since 1986, from a family operation that grew into several rooms across the city without losing the plot.',
    why: [
      'Pork shoulder done properly, sold by weight, with tortillas and salsa to build your own.',
      'Big tables, big orders, Sunday-after-church energy.',
    ],
    order: 'Carnitas by the pound for the table.',
    tags: ['carnitas', 'family style', 'since 1986'],
  },
  {
    slug: 'julios-cafe-corona',
    name: "Julio's Café Corona",
    category: 'tex-mex',
    kind: 'Tex-Mex',
    area: 'East Side, Gateway Blvd',
    zone: 'East Side',
    price: '$$',
    address: '8050 Gateway Blvd E',
    blurb: 'A long-running border Mexican kitchen with Juárez lineage and a menu that does not chase trends.',
    why: ['Decades-deep recipes, served in a room built for big tables.', 'Fair prices for the size of the plates.'],
    tags: ['family', 'east side', 'classic'],
  },
  {
    slug: 'lucys-cafe',
    name: "Lucy's Café",
    category: 'tex-mex',
    kind: 'Breakfast',
    area: 'West Side, N Mesa St',
    zone: 'West Side',
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
    area: 'South-Central, Texas Ave',
    zone: 'Central',
    price: '$',
    blurb:
      'A restaurant run as part of a women workers’ organization in south-central El Paso, serving interior Mexican cooking with on-the-job training attached.',
    why: [
      'Your lunch money stays in the neighborhood by design.',
      'Mole, tamales, and dishes you will not find at the Tex-Mex places on Mesa.',
    ],
    note: 'Hours follow the organization’s programming — check before going.',
    tags: ['cooperative', 'mole', 'community'],
  },

  // ------------------------------------------------------------ Tacos
  {
    slug: 'chicos-tacos',
    name: "Chico's Tacos",
    category: 'tacos',
    kind: 'El Paso original',
    area: 'Multiple locations across the city',
    zone: 'Citywide',
    price: '$',
    blurb:
      'Rolled tacos swimming in thin tomato broth under a snowdrift of shredded cheese. There is nothing else like it anywhere.',
    why: [
      'Genuinely unique to El Paso — a dish you cannot order in another city.',
      'Open late, cheap, and the great equalizer at 1 a.m.',
      'Arguing about whether it is actually good is itself an El Paso pastime.',
    ],
    order: 'A double order of rolled tacos. Add the hot sauce from the pump. Do not skip the fries.',
    note: 'Counter service, fast-moving lines. Go in expecting soup, not a crunchy taco.',
    tags: ['late night', 'cheap', 'only in el paso'],
    canon: true,
  },
  {
    slug: 'elemi',
    name: 'Elemi',
    category: 'tacos',
    kind: 'Modern Mexican',
    area: 'Far East, Eastlake',
    zone: 'East Side',
    price: '$$$',
    address: '13500 Eastlake Blvd',
    website: 'https://www.elemirestaurant.com',
    blurb:
      'Heirloom corn nixtamalized on site every day, turned into some of the most talked-about tortillas in the country. Texas Monthly ranked it No. 2 on its 50 best taco restaurants in Texas.',
    why: [
      'Chef Emiliano Marentes put El Paso masa on the national map and has repeat James Beard recognition to show for it.',
      'The menu changes with what the farms and the mills send.',
      'Proof that the border food conversation starts here, not in Austin.',
    ],
    order: 'Whatever is built on the house masa that day.',
    note:
      'Elemi left its longtime downtown room on N Kansas and reopened out at Eastlake in 2024 — do not drive downtown looking for it. Limited service days; check first.',
    tags: ['masa', 'chef-driven', 'james beard', 'texas monthly'],
    canon: true,
  },
  {
    slug: 'taqueria-elemi',
    name: 'Taquería Elemi',
    category: 'tacos',
    kind: 'Taquería',
    area: 'Far West Side, Paseo del Norte',
    zone: 'West Side',
    price: '$$',
    address: '7729 Paseo del Norte',
    blurb: 'The Marentes family’s West Side taquería — the same obsessive house masa, in a faster, cheaper format.',
    why: [
      'The tortillas that made Elemi famous, without the drive to Eastlake.',
      'The easiest way to understand what the fuss is about.',
    ],
    tags: ['tacos', 'masa', 'west side'],
  },
  {
    slug: 'taconeta',
    name: 'Taconeta',
    category: 'tacos',
    kind: 'Taquería',
    area: 'Central, Montana Ave',
    zone: 'Central',
    price: '$',
    address: '311 Montana Ave',
    blurb:
      'A contemporary taquería that lands on statewide best-of lists — Texas Monthly put it at No. 6 among the 50 best taco restaurants in Texas.',
    why: [
      'Careful, modern tacos in a city that mostly does traditional ones very well.',
      'Central enough to work as a first stop on any crawl.',
    ],
    tags: ['tacos', 'texas monthly', 'central'],
  },
  {
    slug: 'taqueria-el-tiger',
    name: 'Taquería El Tiger',
    category: 'tacos',
    kind: 'Street-style taquería',
    area: 'Socorro, Lower Valley',
    zone: 'Lower Valley',
    price: '$',
    address: '10167 Socorro Rd, Socorro',
    blurb:
      'Street-style tacos out in Socorro, No. 5 on Texas Monthly’s 50 best taco restaurants in Texas. Worth the drive down the valley.',
    why: [
      'Bold, unfussy, exactly what a taqueria on Socorro Road should be.',
      'Pairs with a Mission Trail afternoon — the missions are minutes away.',
    ],
    tags: ['tacos', 'texas monthly', 'mission trail'],
  },
  {
    slug: 'el-botanero-mariscos',
    name: 'El Botanero Mariscos',
    category: 'tacos',
    kind: 'Mariscos',
    area: 'Far East, Radiance Rd',
    zone: 'East Side',
    price: '$$',
    address: '12150 Radiance Rd',
    website: 'https://www.elbotaneromariscos.com',
    blurb: 'Ceviche tacos and border-style seafood that earned an honorable mention on Texas Monthly’s statewide taco list.',
    why: [
      'Seafood done the Sinaloa way, 600 miles from the nearest ocean, and done well.',
      'The antidote to a week of red chile.',
    ],
    order: 'Ceviche tacos and a michelada.',
    tags: ['mariscos', 'ceviche', 'texas monthly'],
  },
  {
    slug: 'taqueria-el-cometa',
    name: 'Taquería El Cometa',
    category: 'tacos',
    kind: 'Taquería',
    area: 'West Side, N Mesa St',
    zone: 'West Side',
    price: '$',
    address: '4131 N Mesa St',
    blurb: 'A straightforward Mesa Street taquería that the neighborhood keeps to itself.',
    why: ['Cheap, quick, and right in the middle of the West Side’s restaurant strip.'],
    tags: ['tacos', 'quick', 'west side'],
  },
  {
    slug: 'taco-tote',
    name: 'Taco Tote',
    category: 'tacos',
    kind: 'Taquería',
    area: 'Multiple locations',
    zone: 'Citywide',
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
    zone: 'Central',
    price: '$',
    blurb: 'A local taco brand that grew out of a food-truck following into a proper following.',
    why: ['Homegrown, not a chain import.', 'The kind of place where the regulars order by nickname.'],
    tags: ['tacos', 'local brand', 'casual'],
  },

  // -------------------------------------------------------- Sit-down
  {
    slug: 'cafe-central',
    name: 'Café Central',
    category: 'sit-down',
    kind: 'Fine dining',
    area: 'Downtown',
    zone: 'Downtown',
    price: '$$$',
    address: '109 N Oregon St',
    website: 'https://cafecentral.com',
    blurb:
      'Downtown’s long-running white-tablecloth room, with roots tracing back to a 1918 café across the river in Juárez.',
    why: [
      'The go-to for anniversaries, closings, and out-of-town guests you want to impress.',
      'A proper bar program and a cream of green chile soup locals order on principle.',
    ],
    order: 'Cream of green chile soup to start.',
    note: 'Reservations strongly recommended, especially on Plaza Theatre show nights.',
    tags: ['fine dining', 'date night', 'downtown'],
  },
  {
    slug: 'anson-11',
    name: 'Anson 11',
    category: 'sit-down',
    kind: 'Steak & seafood',
    area: 'Downtown, in the historic Mills Building',
    zone: 'Downtown',
    price: '$$$',
    address: '303 N Oregon St',
    website: 'https://anson11.com',
    blurb:
      'Two restaurants in one restored 1911 office tower: a ground-floor bistro and a darker, pricier room upstairs.',
    why: [
      'One of the anchors of downtown’s dining revival.',
      'The bistro works for lunch; upstairs works for the night you are trying to impress someone.',
    ],
    tags: ['steak', 'downtown', 'historic building'],
  },
  {
    slug: 'oak-and-antler',
    name: 'Oak & Antler',
    category: 'sit-down',
    kind: 'American tavern',
    area: 'Downtown',
    zone: 'Downtown',
    price: '$$',
    website: 'https://oaknantler.com',
    blurb: 'An American tavern rooted in Southern cooking — comfort food, rustic technique, and a real cocktail list.',
    why: [
      'The downtown answer when nobody wants Mexican food tonight.',
      'Cocktails good enough to arrive early for.',
    ],
    tags: ['american', 'cocktails', 'downtown'],
  },
  {
    slug: 'lamezze',
    name: 'Lamezze',
    category: 'sit-down',
    kind: 'Mediterranean',
    area: 'Downtown, Stanton St',
    zone: 'Downtown',
    price: '$$',
    address: '210 N Stanton St',
    blurb: 'Mezze plates and steak bowls downtown, with a brunch that fills the room on weekends.',
    why: [
      'Shareable Mediterranean cooking with a border accent.',
      'A Downtown Restaurant Week regular, and busy the rest of the year too.',
    ],
    tags: ['mediterranean', 'brunch', 'downtown'],
  },
  {
    slug: 'sushiitto',
    name: 'Sushiitto',
    category: 'sit-down',
    kind: 'Japanese',
    area: 'Downtown, Hunt Plaza at WestStar Tower',
    zone: 'Downtown',
    price: '$$$',
    address: '601 N Mesa St, Ste 120',
    blurb: 'Sushi, teppan and a chef’s table at the base of the tallest building in the city.',
    why: [
      'The most polished Japanese room downtown, in the newest downtown building.',
      'Chef’s table and teppan make it an occasion rather than a meal.',
    ],
    tags: ['sushi', 'downtown', 'date night'],
  },
  {
    slug: 'amar',
    name: 'Amar',
    category: 'sit-down',
    kind: 'Peruvian',
    area: 'El Paso',
    zone: 'Citywide',
    price: '$$',
    blurb: 'Peruvian cooking — lomo saltado, ceviche, aji — in a city that does not have much of it.',
    why: [
      'Consistently near the top of local best-restaurant lists.',
      'A genuinely different cuisine in a town that leans hard one direction.',
    ],
    order: 'Lomo saltado.',
    tags: ['peruvian', 'ceviche', 'something different'],
  },
  {
    slug: 'west-texas-chophouse',
    name: 'West Texas Chophouse',
    category: 'bbq',
    kind: 'Steakhouse',
    area: 'Airway Blvd, near the airport',
    zone: 'East Side',
    price: '$$$',
    address: '1135 Airway Blvd, Ste 7B',
    website: 'https://westtexaschophouse.com',
    blurb: 'Dry- and wet-aged steaks butchered in house, plus burgers and desserts made on site.',
    why: [
      'The newest serious steakhouse in town, and it is taking the job seriously.',
      'Close to the airport, which makes it the easy last-night dinner.',
    ],
    tags: ['steak', 'dry-aged', 'airport'],
  },
  {
    slug: 'twisted-fork',
    name: 'Twisted Fork',
    category: 'sit-down',
    kind: 'American & cocktails',
    area: 'West Side, Resler Dr',
    zone: 'West Side',
    price: '$$',
    address: '631 N Resler Dr, Bldg B',
    blurb: 'A West Side scratch kitchen with a cocktail bar attached and a patio people camp out on.',
    why: ['Reliable for a group that cannot agree.', 'Far enough west to be a neighborhood spot, good enough to drive to.'],
    tags: ['american', 'cocktails', 'patio'],
  },
  {
    slug: 'ripe-eatery',
    name: 'Ripe Eatery & Market',
    category: 'sit-down',
    kind: 'Brunch',
    area: 'West Side, Redd Rd',
    zone: 'West Side',
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
    zone: 'West Side',
    price: '$$',
    blurb: 'Pancakes the size of a hubcap, burgers, and the Cincinnati-district patio that started it all.',
    why: [
      'The default answer when a group cannot decide.',
      'The Kern Place location puts you steps from the Cincinnati bar strip afterward.',
    ],
    note: 'Weekend brunch waits are long at the Kern Place location.',
    tags: ['brunch', 'burgers', 'groups'],
  },
  {
    slug: 'ardovinos-desert-crossing',
    name: "Ardovino's Desert Crossing",
    category: 'sit-down',
    kind: 'Italian & patio',
    area: 'Sunland Park, New Mexico',
    zone: 'New Mexico',
    price: '$$',
    address: '1 Ardovino Dr, Sunland Park, NM',
    website: 'https://ardovinos.com',
    blurb: 'A desert compound just over the New Mexico line: restaurant, patio, and the Saturday farmers market.',
    why: [
      'The best patio in the region, full stop — the mountains do the decorating.',
      'The Saturday morning market is a local ritual, not a tourist stop.',
      'Weddings, brunches, and long lunches that turn into afternoons.',
    ],
    note: 'It is in New Mexico, about 15 minutes from downtown. Confirm the farmers market season before going for it.',
    tags: ['patio', 'farmers market', 'new mexico', 'brunch'],
    canon: true,
  },

  // ------------------------------------------------- Barbecue & steak
  {
    slug: 'cattlemans-steakhouse',
    name: "Cattleman's Steakhouse at Indian Cliffs Ranch",
    category: 'bbq',
    kind: 'Steakhouse',
    area: 'Fabens, about 30 miles east',
    zone: 'Out of town',
    price: '$$$',
    website: 'https://cattlemanssteakhouse.com',
    blurb:
      'A steakhouse on a working ranch out past the county line, with a movie-set desert and a sunset that does half the work.',
    why: [
      'The drive is the appetizer. Go in the late afternoon so you eat as the light goes orange.',
      'Kids run the grounds — the ranch has animals, a maze, and plenty of room.',
      'Portions are aggressive even by Texas standards.',
    ],
    order: 'One of the big cuts, and bring people to share the sides.',
    note: 'Take I-10 east to the Fabens exit. Weekends get very busy; go early or call ahead.',
    tags: ['steak', 'road trip', 'sunset', 'family'],
    canon: true,
  },
  {
    slug: 'state-line',
    name: 'State Line',
    category: 'bbq',
    kind: 'Barbecue',
    area: 'Sunland Park Dr, at the NM line',
    zone: 'West Side',
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
    zone: 'Citywide',
    price: '$$',
    blurb: 'Central Texas-style smoke — brisket by the pound, sold until it runs out.',
    why: ['Proof El Paso can do a proper brisket, not just a plate lunch.', 'Small operation, so the quality stays where they want it.'],
    note: 'They sell until they sell out. Going late is a gamble.',
    tags: ['brisket', 'sells out', 'smoke'],
  },

  // -------------------------------------------------------------- Bars
  {
    slug: 'the-garrison',
    name: 'The Garrison',
    category: 'bar',
    kind: 'Cocktail bar',
    area: 'Downtown, San Antonio Ave',
    zone: 'Downtown',
    price: '$$',
    address: '420 E San Antonio Ave',
    website: 'https://www.thegarrisonep.com',
    blurb:
      'Downtown’s most serious cocktail room — a culinary approach to balance and technique, with food to match.',
    why: [
      'The bar to take someone who thinks El Paso does not do cocktails.',
      'A short walk from the Plaza Theatre, so it works before or after a show.',
    ],
    tags: ['cocktails', 'downtown', 'date night'],
  },
  {
    slug: 'the-tiki-room',
    name: 'The Tiki Room',
    category: 'bar',
    kind: 'Tiki bar',
    area: 'Union Plaza, Downtown',
    zone: 'Downtown',
    price: '$$',
    address: '115 Durango St',
    website: 'https://www.thetikiroomep.com',
    blurb:
      'El Paso’s original tiki bar: traditional Polynesian-style drinks, an enormous rum list, and Union Plaza outside the door.',
    why: [
      'Genuinely fun, genuinely well made — the rum program is not a gimmick.',
      'Walking distance from the ballpark, which makes it the obvious post-game stop.',
    ],
    tags: ['tiki', 'rum', 'union plaza', 'ballpark'],
  },
  {
    slug: 'rosewood',
    name: 'Rosewood',
    category: 'bar',
    kind: 'Late-night lounge',
    area: 'Downtown, San Antonio Ave',
    zone: 'Downtown',
    price: '$$',
    address: '412 E San Antonio Ave',
    blurb: 'A dim downtown lounge that keeps going well after the restaurants have turned the lights up.',
    why: ['The late end of a downtown night, on the same block as The Garrison and The Tap.'],
    tags: ['late night', 'downtown', 'lounge'],
  },
  {
    slug: 'the-berkeley',
    name: 'The Berkeley',
    category: 'bar',
    kind: 'Cocktail lounge',
    area: 'Downtown',
    zone: 'Downtown',
    price: '$$',
    website: 'https://berkeleylounge.com',
    blurb: 'A specialty cocktail lounge downtown — quiet, deliberate, and not trying to be a club.',
    why: ['Built for conversation, which the Cincinnati strip is not.'],
    tags: ['cocktails', 'downtown', 'quiet'],
  },
  {
    slug: 'the-tap',
    name: 'The Tap',
    category: 'bar',
    kind: 'Dive bar',
    area: 'Downtown, San Antonio Ave',
    zone: 'Downtown',
    price: '$',
    address: '408 E San Antonio Ave',
    blurb: 'Dark, cheap, and honest — the downtown dive that outlasted every concept bar around it.',
    why: [
      'Stiff drinks and a kitchen that puts out a surprisingly good plate of Mexican food.',
      'Neon, vinyl booths, live jazz some nights, and zero interest in being trendy.',
    ],
    tags: ['dive', 'downtown', 'late', 'live music'],
  },
  {
    slug: 'rosas-cantina',
    name: "Rosa's Cantina",
    category: 'bar',
    kind: 'Honky-tonk',
    area: 'Upper Valley, Doniphan Dr',
    zone: 'West Side',
    price: '$',
    address: '3454 Doniphan Dr',
    blurb:
      'The cantina behind the Marty Robbins song, still standing on Doniphan with the memorabilia on the walls and live music on Saturday nights.',
    why: [
      'Genuine El Paso mythology you can order a beer inside of.',
      '"El Paso" comes on the speakers periodically, and nobody is embarrassed about it.',
      'No pretense whatsoever — that is the appeal.',
    ],
    tags: ['dive', 'music history', 'live music'],
    canon: true,
  },
  {
    slug: 'hope-and-anchor',
    name: 'The Hope & Anchor',
    category: 'bar',
    kind: 'Neighborhood bar',
    area: 'West Side, N Mesa St',
    zone: 'West Side',
    price: '$',
    address: '4012 N Mesa St',
    blurb: 'A low-lit neighborhood bar on Mesa with a big patio and a straight-on view of the Franklins.',
    why: ['The unofficial living room of a certain slice of El Paso.', 'Patio, good jukebox energy, no cover, no fuss.'],
    tags: ['neighborhood', 'patio', 'mesa'],
  },
  {
    slug: 'the-hoppy-monk',
    name: 'The Hoppy Monk',
    category: 'bar',
    kind: 'Beer bar',
    area: 'West Side, N Mesa St',
    zone: 'West Side',
    price: '$$',
    address: '4141 N Mesa St',
    website: 'https://thehoppymonk.com/elpaso/',
    blurb:
      'Independently owned since 2010, with dozens of taps, a deep spirits list and a scratch kitchen that is not an afterthought.',
    why: [
      'The best beer selection in the city, and staff who can actually steer you.',
      'A shaded patio that works most of the year.',
    ],
    tags: ['craft beer', 'patio', 'food'],
  },

  // ---------------------------------------------------------- Brewery
  {
    slug: 'deadbeach-brewery',
    name: 'DeadBeach Brewery',
    category: 'brewery',
    kind: 'Brewery & taproom',
    area: 'Union Plaza, Downtown (brewery on Durazno Ave)',
    zone: 'Downtown',
    price: '$',
    address: '406 S Durango St',
    website: 'https://www.deadbeach.com',
    blurb: 'Downtown’s brewery anchor, with a taproom that fills up before and after ballgames.',
    why: [
      'Walking distance from Southwest University Park.',
      'Local beer with local names, poured by people who will explain them.',
    ],
    tags: ['brewery', 'downtown', 'ballpark'],
  },
  {
    slug: 'blazing-tree-brewery',
    name: 'Blazing Tree Brewery',
    category: 'brewery',
    kind: 'Brewery & taproom',
    area: 'East Side, Montwood Dr',
    zone: 'East Side',
    price: '$',
    address: '11380 Montwood Dr, Ste B-7',
    blurb: 'A small East Side taproom doing its own beer, in a part of town that had nowhere to drink it.',
    why: ['The East Side’s own brewery, which matters when most of the city lives out here.'],
    tags: ['brewery', 'east side', 'taproom'],
  },

  // ----------------------------------------------------------- Coffee
  {
    slug: 'kinleys-house-coffee',
    name: "Kinley's House Coffee & Tea",
    category: 'coffee',
    kind: 'Coffee house',
    area: 'Kern Place, N Mesa St',
    zone: 'West Side',
    price: '$',
    address: '2231 N Mesa St',
    blurb: 'A converted house near UTEP with porch seating and a permanent population of students and laptop workers.',
    why: ['The closest thing the city has to a campus-adjacent third place.', 'Porch in the morning, shade in the afternoon.'],
    tags: ['coffee', 'wifi', 'utep'],
  },
  {
    slug: 'savage-goods',
    name: 'Savage Goods',
    category: 'coffee',
    kind: 'Café & bakery',
    area: 'Sunset Heights, Oregon St',
    zone: 'Central',
    price: '$',
    address: '1201 Oregon St',
    website: 'https://savagegoods.com',
    blurb:
      'A family-run corner café in Sunset Heights that has turned up on statewide best-of lists — coffee, pastry and a short, sharp menu.',
    why: [
      'The neighborhood café El Paso spent years wishing for.',
      'Walking distance from downtown and from the Sunset Heights architecture walk.',
    ],
    tags: ['coffee', 'pastry', 'sunset heights'],
  },
  {
    slug: 'salt-and-honey',
    name: 'Salt + Honey Bakery Café',
    category: 'bakery',
    kind: 'Bakery & café',
    area: 'Texas Ave, with express counters downtown',
    zone: 'Central',
    price: '$',
    address: '1125 Texas Ave',
    website: 'https://www.saltandhoneyep.com',
    blurb: 'Pastry, breakfast and lunch out of a bright room on Texas Ave, plus quick counters downtown.',
    why: [
      'The bakery case is the reason; the breakfast sandwiches keep you there.',
      'One of the anchors of the Texas Ave corridor’s comeback.',
    ],
    tags: ['bakery', 'breakfast', 'pastry'],
  },
  {
    slug: 'bowie-bakery',
    name: 'Bowie Bakery',
    category: 'bakery',
    kind: 'Panadería',
    area: 'Segundo Barrio',
    zone: 'Central',
    price: '$',
    address: '901 S Park St',
    blurb:
      'Grab a tray and tongs and walk the racks — conchas, empanadas and marranitos at prices that have not caught up to the rest of the country.',
    why: [
      'The classic El Paso panadería experience, still done the right way.',
      'Cheap enough to over-order, which you will.',
    ],
    order: 'Conchas, a marranito, and whatever is still warm.',
    note: 'Go in the morning. Trays empty fast on weekends.',
    tags: ['pan dulce', 'cheap', 'segundo barrio'],
    canon: true,
  },
];

export const CANON = PLACES.filter((p) => p.canon);

export function getPlace(slug: string): Place | undefined {
  return PLACES.find((p) => p.slug === slug);
}

/** Zones actually present in the data, in a sensible reading order. */
export const ZONE_ORDER: Zone[] = [
  'Downtown',
  'Central',
  'West Side',
  'East Side',
  'Northeast',
  'Lower Valley',
  'New Mexico',
  'Out of town',
  'Citywide',
];

export function placesInZone(zone: Zone): Place[] {
  return PLACES.filter((p) => p.zone === zone || p.zone === 'Citywide');
}
