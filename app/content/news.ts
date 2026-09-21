/**
 * The Dispatch — our own writing about what is going on in El Paso.
 *
 * Editorial rule: we publish what we can stand behind. Seasonal reads,
 * explainers, and round-ups of recurring things — not invented headlines.
 * For breaking news we point readers at the local newsrooms doing that work
 * (see NEWS_SOURCES in site.ts).
 *
 * Adding a post: append an object here. Newest first is handled by sorting.
 * `body` supports plain paragraphs, "## " headings, and "- " list items.
 */

export type NewsCategory = 'Dispatch' | 'Food' | 'Outdoors' | 'Events' | 'Site Update';

export interface NewsPost {
  slug: string;
  title: string;
  dek: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  category: NewsCategory;
  readMinutes: number;
  body: string[];
  tags: string[];
  /** Where the facts in this post came from. Shown at the bottom of the page. */
  sources?: { label: string; url: string }[];
}

const POSTS: NewsPost[] = [
  {
    slug: 'old-el-paso-sun-bowl',
    title: 'The Sun Bowl has a new name, and it is a very El Paso one',
    dek: 'Old El Paso replaced Tony the Tiger as title sponsor this month. The 93rd game is still December 31, still on CBS, still cut into the side of the mountain.',
    date: '2026-09-21',
    category: 'Events',
    readMinutes: 3,
    tags: ['sun bowl', 'football', 'downtown'],
    sources: [
      { label: 'Sun Bowl Association', url: 'https://sunbowl.org/news-and-media/news/old-el-paso-named-title-sponsor-of-sun-bowl' },
      { label: 'KVIA', url: 'https://kvia.com/sports/2026/09/17/honestly-its-different-el-paso-sports-bars-react-to-sun-bowl-title-sponsor-change/' },
      { label: 'Bowl Season', url: 'https://bowlseason.com/news/2026/9/17/general-old-el-paso-named-title-sponsor-of-sun-bowl.aspx' },
    ],
    body: [
      'On September 17 the Sun Bowl Association announced that Old El Paso — the General Mills Tex-Mex brand, which is named after this city and made nowhere near it — is the new title sponsor of the game. It replaces Tony the Tiger, the Kellogg\u2019s mascot that had fronted the bowl for years.',
      'So the 93rd edition will be played as the Old El Paso Sun Bowl on December 31, kicking off at noon Mountain time on CBS.',
      '## Why anyone cares',
      'The Sun Bowl is the second-oldest bowl game in college football and the most visible national broadcast this city gets all year. For a few hours on New Year\u2019s Eve, the network cameras sit above a stadium blasted into the side of the Franklin Mountains, and the rest of the country gets a look at the place.',
      'The sponsor name rides on all of it — the logo at midfield, the crawl on the scoreboard, the way announcers say it forty times an afternoon. Local reaction has been mixed in the way you would expect: a Tex-Mex brand sponsoring the El Paso bowl game is either perfect or slightly absurd, depending on which barstool you ask from.',
      '## What is unchanged',
      '- Same date: December 31.',
      '- Same stadium: the Sun Bowl on the UTEP campus.',
      '- Same parade: the Sun Bowl Parade still runs downtown on Thanksgiving morning, November 26 this year.',
      'If you have never been, the parade is the better introduction to the city. The game sells the postcard; the parade is where you actually meet El Paso.',
    ],
  },
  {
    slug: 'wyler-tramway-rebuild',
    title: 'What is actually happening with the Wyler Aerial Tramway',
    dek: 'Closed since 2018, funded at roughly $27 million, and still not something you can ride. Here is the honest timeline.',
    date: '2026-09-18',
    category: 'Outdoors',
    readMinutes: 4,
    tags: ['wyler tramway', 'franklin mountains', 'state parks'],
    sources: [
      { label: 'Texas Parks & Wildlife — Tramway updates', url: 'https://tpwd.texas.gov/state-parks/wyler-aerial-tramway/updates' },
      { label: 'El Paso Matters', url: 'https://elpasomatters.org/2025/11/07/el-paso-news-when-will-wyler-aerial-tramway-open-pellicano-expansion/' },
      { label: 'KFOX14', url: 'https://kfoxtv.com/news/local/el-pasos-wyler-aerial-tramway-receives-funding-promising-economic-and-tourism-boost-cesar-blanco-vince-perez-texas-tx-crrrma-raymond-telles-franklin-mountain-state-park' },
    ],
    body: [
      'Every few months a visitor asks us the same question: can I ride the tramway up Ranger Peak? The answer is still no, and it has been no since 2018, when safety concerns took the gondola out of service.',
      'The good news is that this is no longer a story about neglect. The state appropriated $20 million to rebuild the site, and another $7 million followed in the most recent legislative session, putting the project near $27 million. The Camino Real Regional Mobility Authority is overseeing the work.',
      '## The timeline, as it stands',
      '- **Phase 1** — expanded parking, accessibility improvements, upgraded restrooms and site amenities — has been targeted for completion around fall 2026.',
      '- **Phase 2** — the tramway itself, plus a visitor center and trails — comes after, and still depends on several million dollars in additional fundraising through the Texas Parks & Wildlife Foundation.',
      'Officials have been plain that the ride returns a few years after Phase 1 wraps, not immediately. Anyone telling you it opens this winter is guessing.',
      '## What to do instead',
      'You can get the same view, today, for free or close to it:',
      '- **Scenic Drive** at Murchison Park: five minutes of effort, the full city-and-Ju\u00e1rez panorama.',
      '- **McKelligon Canyon**: drive into the box canyon, or start a real hike from the trailheads there.',
      '- **Franklin Mountains State Park** at Tom Mays: the ridgeline views the tramway only hints at.',
      'When the tramway does come back it will again be the only aerial tramway in Texas, and it will be worth the wait. It is just not a plan for this year.',
    ],
  },
  {
    slug: 'downtown-museum-district',
    title: 'Downtown quietly grew a museum district',
    dek: 'La Nube opened in 2024, the Mexican American Cultural Center in 2025. With the art and history museums already there, six blocks now hold a genuine day out.',
    date: '2026-09-14',
    category: 'Dispatch',
    readMinutes: 4,
    tags: ['downtown', 'museums', 'la nube', 'macc'],
    sources: [
      { label: 'La Nube', url: 'https://la-nube.org' },
      { label: 'El Paso MACC', url: 'https://www.epmacc.org' },
      { label: 'El Paso Matters', url: 'https://elpasomatters.org/2025/03/19/macc-el-paso-mexican-american-cultural-center-opens/' },
    ],
    body: [
      'For a long time the honest answer to "what is there to do downtown on a hot afternoon" was the art museum, the history museum, and then you are done. That changed twice in the last two years.',
      '## La Nube',
      'In August 2024, La Nube STEAM Discovery Center opened in the Arts District: 70,000 square feet of bilingual, hands-on exhibits in a cloud-shaped building designed by Sn\u00f8hetta. It is El Paso\u2019s first children\u2019s museum and science center, it has already welcomed hundreds of thousands of visitors, and it has taken an international children-in-museums award.',
      'It is also, straightforwardly, the best-looking new building downtown.',
      '## The Mexican American Cultural Center',
      'In March 2025, after years of organizing by community groups who pushed the project from a modest plan to a $15 million building, the Mexican American Cultural Center opened at the Main Library on Cleveland Square. Three stories, 41,000 square feet, dedicated to the history and art of the people who are most of this city.',
      'It is free, and it now anchors the D\u00eda de los Muertos desfile and festival every October.',
      '## Six blocks, one afternoon',
      '- **El Paso Museum of Art** — free general admission, strong Mexican colonial holdings.',
      '- **El Paso Museum of History** — free, and the Digital Wall is worth the stop by itself.',
      '- **La Nube** — ticketed, best at opening time.',
      '- **The MACC and the Main Library** — free, at Cleveland Square.',
      '- **El Paso Holocaust Museum** — free, small, serious.',
      'Park once in a garage and walk it. In July that itinerary is not a nice-to-have, it is survival.',
    ],
  },
  {
    slug: 'el-paso-tacos-statewide',
    title: 'El Paso\u2019s tacos are a statewide story now',
    dek: 'Four local spots landed on Texas Monthly\u2019s ranking of the 50 best taco restaurants in Texas. Two of them are nowhere near downtown.',
    date: '2026-09-07',
    category: 'Food',
    readMinutes: 3,
    tags: ['tacos', 'texas monthly', 'elemi'],
    sources: [
      { label: 'KFOX14', url: 'https://kfoxtv.com/news/local/three-el-paso-taco-restaurants-shine-in-texas-monthlys-top-50-list-elemi-taqueria-el-tiger-taconeta-botanero-mariscos-tx-james-beard-award-horizon-mexican-chef-emiliano-marentes' },
      { label: 'KTSM 9', url: 'https://www.ktsm.com/news/4-el-paso-taco-spots-recognized-in-top-50-best-taco-restaurants-in-tx/' },
      { label: 'Visit El Paso', url: 'https://visitelpaso.com/media/press-releases/texas-monthly-magazine-names-four-el-paso-restaurants-in-best-tacos-in-texas-ranking-bb633971-bc0f-456f-babb-b59f8ff6d7de' },
    ],
    body: [
      'For decades the statewide food conversation treated El Paso as a rounding error — too far west, too close to New Mexico, not really Texas. Texas Monthly\u2019s ranking of the 50 best taco restaurants in the state put four El Paso-area kitchens on the list, and put one of them near the very top.',
      '## Who made it',
      '- **Elemi** at No. 2, for heirloom corn nixtamalized on site daily and turned into tortillas people drive across the state for.',
      '- **Taquer\u00eda El Tiger** at No. 5, street-style tacos out on Socorro Road in the Lower Valley.',
      '- **Taconeta** at No. 6, a contemporary taquer\u00eda on Montana Ave.',
      '- **El Botanero Mariscos**, honorable mention, for ceviche tacos out east.',
      '## The part locals should notice',
      'Two of those four are not downtown and not on the West Side. El Tiger is in Socorro, past the missions. El Botanero is out toward Eastlake. Elemi itself left its downtown room in 2024 for a bigger space on Eastlake Blvd, with a sister taquer\u00eda on Paseo del Norte on the far West Side.',
      'The food map of this city has stretched out along with the city. If your mental list of where to eat still stops at Mesa Street, it is a decade out of date.',
      '## And one that is gone',
      'Texas Monthly\u2019s older taco coverage also sent people to H&H Car Wash and Coffee Shop for breakfast tacos. H&H closed in 2021 after roughly 63 years, and it has not come back. If a list sends you to E Yandell, the list is old.',
    ],
  },
  {
    slug: 'september-in-el-paso',
    title: 'September in El Paso: the best month nobody warns you about',
    dek: 'The heat breaks, the calendar fills up, and the mountain turns green. Here is what the next few weeks actually look like.',
    date: '2026-09-20',
    category: 'Dispatch',
    readMinutes: 4,
    tags: ['seasonal', 'weather', 'events'],
    body: [
      'Ask anyone who has lived here a while to name the best month and you will get September more often than you would expect. The monsoon has usually done its work by now, the creosote still smells like rain, and the Franklins are about as green as they get all year. Mornings drop into a range where hiking is pleasant again instead of a calculated risk.',
      '## What is happening around town',
      'Labor Day weekend is the hinge. Fiesta de las Flores and Sun City Music Festival typically land on it, and after that the fall calendar comes in fast: Celebration of Our Mountains runs guided hikes and talks through the season, the Amigo Airsho fills the sky over Biggs, and Chalk the Block closes downtown streets for the city’s public art weekend.',
      'Chihuahuas baseball is winding toward the end of its season downtown, which means the last cheap, easy weeknights at Southwest University Park before the ballpark goes quiet until spring. Locomotive FC keeps playing at the same address.',
      '## What to do with a free Saturday',
      '- Get on the mountain before 9 a.m. Tom Mays Unit, or a shorter loop from Tom Lea Park.',
      '- Hit a Saturday market — Union Plaza downtown, or the patio at Ardovino’s just across the New Mexico line.',
      '- Drive the Mission Trail in the late afternoon when the light hits the adobe right.',
      '- End with a patio. The four-month window where sitting outside is a pleasure starts now.',
      '## The honest caveat',
      'September can still throw a 98-degree afternoon at you, and a monsoon cell can flood an arroyo crossing in twenty minutes. Check the forecast, carry water, and do not drive into moving water — that is the single most common way people get hurt here in a wet month.',
    ],
  },
  {
    slug: 'where-to-get-real-el-paso-news',
    title: 'Where to get real El Paso news',
    dek: 'We write guides. For breaking coverage, these are the newsrooms we read — and why we would rather send you to them than repeat them badly.',
    date: '2026-09-12',
    category: 'Site Update',
    readMinutes: 3,
    tags: ['media', 'how we work'],
    body: [
      'A guide site that fakes a news wire is worse than useless. So here is our line: this section carries our own reporting-adjacent writing — seasonal reads, explainers, what is opening and closing, what we saw ourselves. When something actually breaks in El Paso, we would rather hand you the newsroom covering it.',
      '## Who covers what',
      '- **El Paso Matters** — nonprofit, investigative, strong on city hall, county government, and the border. The best single read if you only pick one.',
      '- **El Paso Times** — the daily of record, going back to 1881. Deepest archive in the city.',
      '- **KTSM 9, KVIA 7, KFOX14** — the broadcast newsrooms. Fastest on weather, wrecks, closures, and anything happening right now.',
      '- **City of El Paso newsroom** — the primary source for council actions, street closures, and city services. Skip the aggregators and read the release.',
      '- **El Paso Live and Visit El Paso** — the official calendars for the Plaza Theatre, the Convention Center, and large downtown events.',
      '## What we will publish here',
      'Openings and closings we have confirmed. Season changes that affect what you should do this weekend. Explainers about how something in this city works — the bridges, the monsoon, the mountain, the ballpark. Corrections, clearly labeled, when we get something wrong.',
      'If you run a business in El Paso and something on this site is out of date, tell us. That is the fastest way this gets better.',
    ],
  },
  {
    slug: 'chile-season-in-the-borderland',
    title: 'Chile season, and the smell that runs the borderland in late summer',
    dek: 'Roasters turning on parking lots from August into the fall. What to buy, how much, and what to do with it.',
    date: '2026-08-28',
    category: 'Food',
    readMinutes: 4,
    tags: ['chile', 'seasonal', 'new mexico'],
    body: [
      'Sometime in August, the propane roasters appear outside grocery stores and on roadside lots, and the entire region starts smelling like blistered green chile. It is the most reliable seasonal marker in the borderland — more dependable than the weather, more anticipated than any festival.',
      '## The basics',
      'Most of what gets roasted here comes down from New Mexico — Hatch is the name everyone knows, but Deming, Lemitar, and the whole Mesilla Valley grow it too. Heat levels run from mild through extra hot, and the labeling is honest more often than not. Ask what came in that morning.',
      '## How much to buy',
      'A quarter sack is a reasonable first commitment for a household of two; a full sack is a year of green chile if you have freezer space and the will to peel. Peel while they are still warm and steaming in the bag, bag them flat in portions, and freeze. Future you will be grateful in February.',
      '## What to do with it',
      '- Green chile in everything: eggs, burgers, stew, on top of a cheese enchilada that did not ask for it.',
      '- Chiles rellenos, if you are ambitious and have someone to help with the peeling.',
      '- A pot of green chile stew with pork and potatoes, which is the entire argument for the season in one bowl.',
      'And the local correction, offered gently: New Mexico grows the green chile everyone lines up for, but the red chile tradition on El Paso plates — the sauce under the enchiladas at the old Tex-Mex rooms — is its own thing, with its own history. You are allowed to love both.',
    ],
  },
  {
    slug: 'monsoon-season-explained',
    title: 'Monsoon season, explained for people who just moved here',
    dek: 'A desert city that gets most of its rain in eight weeks, mostly in the late afternoon, sometimes all at once.',
    date: '2026-07-22',
    category: 'Outdoors',
    readMinutes: 4,
    tags: ['weather', 'safety', 'seasonal'],
    body: [
      'El Paso averages somewhere around eight or nine inches of rain in a year, which is not much. The surprise is the timing: a large share of it falls between roughly early July and mid-September, and it tends to arrive in the afternoon as fast, heavy, localized storms.',
      '## What it actually looks like',
      'A clear morning. Clouds stacking over the Franklins by 2 p.m. A cell that parks over one side of town and dumps an inch while the other side stays dry and sunny. Then a sunset that makes the whole thing worth it.',
      '## The part that matters',
      '- **Arroyos fill fast.** Desert ground does not absorb water. Dry channels become moving water in minutes, and low-water crossings are where people die. Turn around. It is not worth it.',
      '- **Plan hikes for the morning.** Lightning on an exposed ridgeline is a real hazard in monsoon months, and the Franklins are all exposed ridgeline.',
      '- **Street flooding is normal and temporary.** Give it an hour before deciding the evening is ruined.',
      '## The upside',
      'This is when the desert turns. The creosote gives off the smell people write about, the ocotillo leafs out, and the mountain goes from tan to genuinely green. Late monsoon evenings — after the storm, with the light coming in sideways under the clouds — are the best hours this city has.',
    ],
  },
  {
    slug: 'summer-heat-playbook',
    title: 'The summer heat playbook: how locals actually spend June',
    dek: 'Everything worth doing here between June and mid-July happens before 9 a.m. or after 7 p.m. Here is the schedule.',
    date: '2026-06-10',
    category: 'Outdoors',
    readMinutes: 3,
    tags: ['summer', 'heat', 'planning'],
    body: [
      'June is the hard month. The monsoon has not started, the humidity is near zero, and the afternoon sun is a physical presence. Visitors schedule a midday hike and learn something. Locals just shift the day.',
      '## The daily shape',
      '- **5:30 to 9 a.m.** Hiking, running, the zoo, anything outside. This is the good window and it is genuinely pleasant.',
      '- **10 a.m. to 6 p.m.** Indoors. Museums downtown are free and cold. The art museum, the history museum, the Holocaust museum, a long lunch, a matinee at the Plaza.',
      '- **After 7 p.m.** The city comes back outside. Patios, a Chihuahuas game, Viva! El Paso up in McKelligon Canyon, ice cream lines, kids at the splash pad in San Jacinto Plaza.',
      '## Practical notes',
      'Dry heat is real but it is not a loophole — it means you dehydrate without noticing because the sweat evaporates instantly. Drink more than you want to. Park in shade or accept the consequences. And treat a 105-degree forecast as a scheduling constraint, not a challenge.',
    ],
  },
  {
    slug: 'how-a-chihuahuas-night-works',
    title: 'How a Chihuahuas night downtown actually works',
    dek: 'Park once, eat, walk to the game, and end up at a bar. The best-value evening in the city, laid out end to end.',
    date: '2026-04-18',
    category: 'Events',
    readMinutes: 3,
    tags: ['baseball', 'downtown', 'itinerary'],
    body: [
      'Triple-A baseball is the most underrated thing about living here. Southwest University Park sits right in downtown, the seats are cheap, and the mountains sit above the outfield wall while the sun goes down behind them.',
      '## The sequence',
      '- **6 p.m.** Park in a downtown garage, not a lot near the gate. You will pay less and walk about the same.',
      '- **6:15.** Eat first. Tabla in Union Plaza, or DeadBeach Brewery on Texas Ave if you want a beer with it.',
      '- **7ish.** First pitch. Sit on the third-base side in spring if you want shade; the west-facing seats take the last of the sun.',
      '- **Late.** Walk back into Union Plaza, or push on to The Tap if the night has decided to keep going.',
      '## Things worth knowing',
      'The Chihuahuas merchandise is a national phenomenon for a reason — the logo outsells most of the league. Promotional nights (fireworks, giveaways, the alternate identity nights) fill up, so buy ahead for those. And the season runs roughly late March into September, so plan for a fall gap.',
    ],
  },
  {
    slug: 'what-we-are-building',
    title: 'What this site is, and what is coming next',
    dek: 'An independent, locally-written guide to El Paso — built to be updated constantly rather than published once.',
    date: '2026-03-02',
    category: 'Site Update',
    readMinutes: 2,
    tags: ['about', 'roadmap'],
    body: [
      'elpaso.fyi is a guide to El Paso written by people who are here, for people who want more than the first page of search results. Every listing on this site is something we would actually send a friend to.',
      '## The rules we hold ourselves to',
      '- No invented ratings, no invented reviews, no scraped star counts.',
      '- We do not print hours or prices as fact, because they change and a wrong hour sends someone on a wasted drive. We tell you what the place is and let you confirm the details.',
      '- When we are unsure about something — an address, whether a place is still open — we either verify it or leave it out.',
      '## What is coming',
      '- Deeper neighborhood pages, with walking routes instead of just descriptions.',
      '- A running list of openings and closings, which is the single most requested thing locals ask for.',
      '- More seasonal dispatches: what is worth doing this month, not in the abstract.',
      '- Business submissions, so owners can correct and add their own listings directly.',
      'If you have a correction, a tip, or a place we are embarrassingly missing, send it to hello@elpaso.fyi. That is the whole feedback loop.',
    ],
  },
];

export const NEWS: NewsPost[] = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

export const NEWS_CATEGORIES: NewsCategory[] = ['Dispatch', 'Food', 'Outdoors', 'Events', 'Site Update'];

export function getPost(slug: string): NewsPost | undefined {
  return NEWS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
