/** Where to stay. Downtown-weighted, because that is where staying here works best. */

export interface Stay {
  slug: string;
  name: string;
  kind: string;
  area: string;
  price: '$' | '$$' | '$$$';
  blurb: string;
  why: string[];
  note?: string;
}

export const STAYS: Stay[] = [
  {
    slug: 'hotel-paso-del-norte',
    name: 'Hotel Paso del Norte',
    kind: 'Historic luxury hotel',
    area: 'Downtown',
    price: '$$$',
    blurb: 'The 1912 landmark — the one with the Tiffany stained-glass dome over the bar — restored and reopened as an Autograph Collection hotel.',
    why: [
      'The dome is the single most beautiful room in El Paso, and you can sit under it with a drink.',
      'Steps from the Plaza Theatre, the convention center and San Jacinto Plaza.',
    ],
  },
  {
    slug: 'plaza-hotel-pioneer-park',
    name: 'Plaza Hotel Pioneer Park',
    kind: 'Art Deco hotel',
    area: 'Downtown',
    price: '$$$',
    blurb: 'A 1930 Art Deco tower that sat empty for decades, restored top to bottom and reopened as a hotel with a rooftop bar.',
    why: [
      'The best rooftop view of downtown and the mountains in the city.',
      'A genuine preservation story — this building was nearly lost.',
    ],
  },
  {
    slug: 'hotel-indigo-el-paso',
    name: 'Hotel Indigo El Paso Downtown',
    kind: 'Boutique hotel',
    area: 'Downtown',
    price: '$$',
    blurb: 'A 1917 building converted into a boutique property, a few blocks from the ballpark.',
    why: ['Walkable to Southwest University Park and Union Plaza.', 'Mid-price downtown, which is a short list.'],
  },
  {
    slug: 'stanton-house',
    name: 'The Stanton House',
    kind: 'Design boutique',
    area: 'Downtown',
    price: '$$$',
    blurb: 'A small, design-forward downtown hotel with an art collection and a rooftop.',
    why: ['The most style-conscious room in the city.', 'Small enough that the service is personal.'],
  },
  {
    slug: 'gardner-hotel',
    name: 'The Gardner Hotel',
    kind: 'Historic budget hotel & hostel',
    area: 'Downtown',
    price: '$',
    blurb: 'Open since 1922 and the oldest continuously operating hotel in El Paso, with hostel-style rooms alongside private ones.',
    why: ['Cheap, central, and full of history — John Dillinger stayed here.', 'The budget downtown option that is not a compromise on location.'],
    note: 'Basic by design. Come for the price and the history, not the amenities.',
  },
  {
    slug: 'ardovinos-desert-crossing-stay',
    name: "Ardovino's Desert Crossing",
    kind: 'Desert inn',
    area: 'Sunland Park, New Mexico',
    price: '$$',
    blurb: 'A handful of rooms on the desert compound at the state line, with the restaurant and the Saturday market downstairs.',
    why: ['Wake up to the mountains and walk to breakfast.', 'The quiet, out-of-town option that is still 15 minutes from downtown.'],
    note: 'It is in New Mexico. Plan for a short drive to anything in El Paso.',
  },
];
