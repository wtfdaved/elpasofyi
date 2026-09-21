import type { Zone } from './places';

/** Neighborhood profiles. Written for someone trying to understand the map. */

export interface Neighborhood {
  slug: string;
  name: string;
  side: 'Central' | 'West' | 'East' | 'Northeast' | 'Lower Valley' | 'Across the line';
  /** Ties the profile to listings in places.ts / things-to-do.ts. */
  zone: Zone;
  oneLiner: string;
  character: string[];
  knownFor: string[];
  eat: string[];
  doHere: string[];
  goIf: string;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: 'downtown',
    name: 'Downtown & Union Plaza',
    side: 'Central',
    zone: 'Downtown',
    oneLiner: 'The oldest core of the city, in the middle of a long, uneven comeback — and increasingly winning it.',
    character: [
      'Early-20th-century bank towers and a 1930 movie palace, all within a few blocks.',
      'Ballpark nights, theater nights, and quiet Mondays — the district has moods.',
      'Walkable in a way almost nothing else in El Paso is.',
    ],
    knownFor: ['San Jacinto Plaza', 'The Plaza Theatre', 'Southwest University Park', 'Union Plaza bars'],
    eat: ['Elemi', 'Café Central', 'Anson 11', 'Tabla', 'DeadBeach Brewery', 'The Tap'],
    doHere: ['El Paso Museum of Art', 'El Paso Museum of History', 'Chihuahuas game', 'Mural walk'],
    goIf: 'You want dinner, a show, and a bar without moving your car.',
  },
  {
    slug: 'segundo-barrio',
    name: 'Segundo Barrio',
    side: 'Central',
    zone: 'Central',
    oneLiner: 'The Ellis Island of the border — generations of families entered the United States through these blocks.',
    character: [
      'Tenement-era buildings, a panadería on the corner, murals on nearly every wall.',
      'A neighborhood with an active, organized sense of its own history and its own future.',
      'Steps from the international bridges.',
    ],
    knownFor: ['Bowie Bakery', 'Chicano murals', 'Sacred Heart Church', 'Proximity to the bridges'],
    eat: ['Bowie Bakery', 'Neighborhood taquerías and loncherías'],
    doHere: ['Mural walking tour', 'Cross to Juárez on foot', 'Chamizal is a short drive east'],
    goIf: 'You want to understand what "border city" actually means here.',
  },
  {
    slug: 'sunset-heights',
    name: 'Sunset Heights',
    side: 'Central',
    zone: 'Central',
    oneLiner: 'Victorian and Craftsman houses on the hill above downtown, with a revolution’s worth of history in them.',
    character: [
      'Steep streets, mature trees, and some of the best old housing stock in Texas.',
      'Pancho Villa plotted here; the neighborhood has never forgotten it.',
      'Walking distance to downtown and to UTEP.',
    ],
    knownFor: ['Historic homes', 'Views over the rail yards', 'Mexican Revolution history'],
    eat: ['Downtown and Kern Place are both minutes away'],
    doHere: ['Architecture walk', 'Scenic Drive is up the hill'],
    goIf: 'You like old houses and want to see where downtown El Paso used to sleep.',
  },
  {
    slug: 'kern-place',
    name: 'Kern Place & Cincinnati Entertainment District',
    side: 'West',
    zone: 'West Side',
    oneLiner: 'The UTEP-adjacent neighborhood where the city goes out — a walkable strip of bars and patios under the mountain.',
    character: [
      '1920s houses on curving streets that climb toward the Franklins.',
      'Cincinnati Avenue turns into a patio-to-patio crawl on weekend nights.',
      'Student energy early, everyone else later.',
    ],
    knownFor: ['Cincinnati Ave bars', 'Proximity to UTEP', 'Tom Lea Upper Park views'],
    eat: ['Crave Kitchen & Bar', "Kinley's House Coffee & Tea", 'Ode Brewing'],
    doHere: ['UTEP campus walk', 'Sun Bowl events', 'Hike from Tom Lea Park'],
    goIf: 'You want a night out you can walk between.',
  },
  {
    slug: 'five-points-manhattan-heights',
    name: 'Five Points & Manhattan Heights',
    side: 'Central',
    zone: 'Central',
    oneLiner: 'Central El Paso’s slow-burn revival — old bungalows, new small businesses, no pretense.',
    character: [
      'A historic district of 1920s homes next to a commercial crossroads that is filling back in.',
      'Independent shops and kitchens opening in buildings that sat empty for years.',
      'Central enough that everything is 12 minutes away.',
    ],
    knownFor: ['Manhattan Heights Historic District', 'Small independent businesses', 'Central location'],
    eat: ["Kiki's Restaurant & Bar", 'L&J Cafe is minutes east'],
    doHere: ['Concordia Cemetery', 'Neighborhood coffee and thrifting'],
    goIf: 'You want to see which part of El Paso is changing right now.',
  },
  {
    slug: 'west-side-upper-valley',
    name: 'West Side & Upper Valley',
    side: 'West',
    zone: 'West Side',
    oneLiner: 'Mesa Street commerce on the bench, pecan groves and horse property down in the valley.',
    character: [
      'The West Side is where most of the newer restaurants and shopping have landed.',
      'Drop down to Doniphan and the Upper Valley and it turns rural fast — irrigation ditches, cottonwoods, farm stands.',
      'Straight-shot access to Transmountain and to New Mexico.',
    ],
    knownFor: ['Mesa Street', 'Upper Valley farmland', 'Sunland Park Dr shopping'],
    eat: ['The Hoppy Monk', 'The Hope & Anchor', "Lucy's Café", 'Ripe Eatery', "Rosa's Cantina", 'State Line'],
    doHere: ['Franklin Mountains trailheads', "Ardovino's Saturday farmers market", 'Sunland Park Racetrack'],
    goIf: 'You want mountain access and the widest choice of restaurants.',
  },
  {
    slug: 'northeast',
    name: 'Northeast El Paso',
    side: 'Northeast',
    zone: 'Northeast',
    oneLiner: 'Fort Bliss, the far side of the mountain, and the trailheads most visitors never find.',
    character: [
      'Shaped by the Army post — the base is one of the largest in the country and it shows.',
      'Straightforward, affordable, family-heavy neighborhoods.',
      'Closest side of town to the open desert going north.',
    ],
    knownFor: ['Fort Bliss', 'Franklin Mountains north approaches', 'Border Patrol Museum'],
    eat: ['Neighborhood Mexican kitchens and long-standing family spots'],
    doHere: ['Transmountain pull-offs', 'National Border Patrol Museum', 'Hike the north end of the range'],
    goIf: 'You are chasing trailheads or visiting someone at Bliss.',
  },
  {
    slug: 'lower-valley-mission-valley',
    name: 'Lower Valley & Mission Valley',
    side: 'Lower Valley',
    zone: 'Lower Valley',
    oneLiner: 'The oldest continuously settled ground in the region, strung along the river and the Mission Trail.',
    character: [
      'Ysleta, Socorro, and San Elizario predate almost everything else in Texas.',
      'Farmland, acequias, and small plazas between suburban stretches.',
      'Quiet, old, and proud of both.',
    ],
    knownFor: ['Ysleta Mission', 'Socorro Mission', 'San Elizario historic district', 'Ysleta del Sur Pueblo'],
    eat: ['Long-running valley Mexican restaurants', 'Roadside fruit and chile stands in season'],
    doHere: ['Drive the Mission Trail', 'Rio Bosque Wetlands', 'San Elizario galleries'],
    goIf: 'You want the history that predates the city itself.',
  },
  {
    slug: 'east-side',
    name: 'East Side & Far East',
    side: 'East',
    zone: 'East Side',
    oneLiner: 'Where most of the city actually lives now — new subdivisions, big-box retail, and a fast-growing restaurant scene.',
    character: [
      'The growth edge of El Paso for two decades and counting.',
      'Chain-heavy on the main roads, but the strip centers hide real finds.',
      'Closest to Hueco Tanks and to the Fabens exit for Cattleman’s.',
    ],
    knownFor: ['Growth and new construction', 'Ascarate Park', 'Easy Hueco Tanks access'],
    eat: ["Julio's Café Corona", 'Taco Tote locations', 'Strip-center taquerías worth the parking lot'],
    doHere: ['Ascarate Park', 'Hueco Tanks day trip', "Cattleman's Steakhouse"],
    goIf: 'You are staying out east or heading to the desert past it.',
  },
  {
    slug: 'across-the-line',
    name: 'Across the Line: Juárez & Sunland Park',
    side: 'Across the line',
    zone: 'New Mexico',
    oneLiner: 'El Paso does not make sense as a single-city story. Two national borders are inside the metro view.',
    character: [
      'Ciudad Juárez sits directly across the river and is the other half of the region’s daily life.',
      'Sunland Park, New Mexico is close enough to be a neighborhood and has its own racetrack and restaurants.',
      'Thousands of people cross legally in both directions every single day for work and school.',
    ],
    knownFor: ['International bridges', "Ardovino's Desert Crossing", 'Sunland Park Racetrack & Casino'],
    eat: ["Ardovino's Desert Crossing (NM)", 'Juárez dining, for those who know the city'],
    doHere: ['Look across from Scenic Drive', 'Chamizal National Memorial', 'Sunland Park'],
    goIf: 'You want to understand the region rather than just the city.',
  },
];

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}
