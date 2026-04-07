'use client';

import { motion } from 'framer-motion';
import { MapPin, Utensils, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';

// Mock database of neighborhoods
const neighborhoodsDatabase: Record<string, {
  name: string;
  description: string;
  vibes: string;
  visitTime: string;
  features: string[];
  content: string;
  highlights: string[];
  restaurants: { name: string; type: string }[];
  attractions: { name: string; type: string }[];
  tips: string[];
}> = {
  'downtown-el-paso': {
    name: 'Downtown El Paso',
    description: 'The historic heart of the city experiencing a vibrant renaissance with galleries, restaurants, and cultural venues.',
    vibes: 'Cultural, Historic, Vibrant',
    visitTime: '3-4 hours',
    features: ['Art District', 'Museums', 'Historic Buildings', 'Galleries', 'Live Music', 'Restaurants'],
    highlights: ['San Jacinto Plaza', 'El Paso Museum of Art', 'Street Murals', 'Historic Architecture', 'Gallery Row'],
    restaurants: [
      { name: 'Café Central', type: 'Contemporary' },
      { name: 'The Shed', type: 'Southwestern' },
      { name: 'Elmo\'s Cafe', type: 'Mexican' },
      { name: 'Foundation Coffee', type: 'Cafe' },
      { name: 'Cotton Gin', type: 'Modern American' },
    ],
    attractions: [
      { name: 'El Paso Museum of Art', type: 'Museum' },
      { name: 'Arts District Walking Tour', type: 'Street Art' },
      { name: 'San Jacinto Plaza', type: 'Park' },
    ],
    tips: [
      'Park in the paid lots - street parking is limited',
      'Visit galleries during evening openings for wine and art',
      'Best time: evenings and weekends when venues are most active',
      'Walking is the best way to explore and discover hidden gems',
    ],
    content: `
      <h2>Downtown El Paso: The Heart of Culture & History</h2>
      <p>Downtown El Paso is experiencing a remarkable renaissance. Once the undisputed center of the city, downtown fell quiet as development moved outward. Now, a vibrant community of artists, entrepreneurs, and cultural enthusiasts are breathing new life into historic buildings.</p>

      <h2>The Downtown Experience</h2>
      <p>Walking downtown today, you\'ll find galleries interspersed with restaurants, vintage shops, and cultural venues. The street art is world-class, the food scene is improving rapidly, and the sense of community is palpable. It\'s a neighborhood actively reimagining itself.</p>

      <h2>What to See & Do</h2>
      <ul>
        <li><strong>Arts District</strong> - Gallery openings, street art, creative spaces</li>
        <li><strong>Museums</strong> - El Paso Museum of Art, cultural exhibitions</li>
        <li><strong>Street Art</strong> - World-class murals and installations</li>
        <li><strong>Historic Architecture</strong> - Buildings from El Paso\'s golden era</li>
        <li><strong>Live Music Venues</strong> - Bars and clubs with local bands</li>
      </ul>

      <h2>The Food Scene</h2>
      <p>Downtown\'s restaurant scene is growing rapidly. From trendy new spots to established favorites, there\'s something for every palate. Cafes are great for morning coffee, while evening brings dining options from casual to upscale.</p>

      <h2>Gallery District</h2>
      <p>The Arts District has become the creative heart of the city. Gallery openings attract the artistic community, and many galleries stay open for special art walks. The street art alone makes downtown worth exploring.</p>

      <h2>Evening Scene</h2>
      <p>Downtown truly comes alive at night. Restaurants fill up, galleries open for events, and bars bustle with activity. Weekend evenings are the best time to experience the neighborhood\'s energy.</p>

      <h2>A Neighborhood in Transformation</h2>
      <p>Downtown El Paso is a neighborhood in transition. If you enjoy being part of cultural revival and discovering emerging spots before they become mainstream, downtown is the place to experience it.</p>

      <h2>Getting There & Around</h2>
      <p>Downtown is compact and best explored on foot. Parking is available in paid lots. If driving, plan to park once and walk the streets. Buses connect downtown to other neighborhoods.</p>
    `,
  },
  'kern-place': {
    name: 'Kern Place',
    description: 'A charming historic neighborhood known for tree-lined streets, local shops, and excellent restaurants.',
    vibes: 'Charming, Upscale, Walkable',
    visitTime: '2-3 hours',
    features: ['Shopping', 'Dining', 'Tree-Lined Streets', 'Galleries', 'Boutiques', 'Brunch'],
    highlights: ['Kern Place Shopping District', 'Boutique Restaurants', 'Local Shops', 'Tree-Lined Streets', 'Historic Homes'],
    restaurants: [
      { name: 'Café Kacao', type: 'Latin Fusion' },
      { name: 'L&J Cafe', type: 'Mexican' },
      { name: 'Bint\'s Bistro', type: 'Mediterranean' },
      { name: 'The Shed', type: 'Southwestern' },
      { name: 'Veranda Cafe', type: 'Modern American' },
    ],
    attractions: [
      { name: 'Kern Place Shopping District', type: 'Shopping' },
      { name: 'Local Art Galleries', type: 'Art' },
      { name: 'Nearby Parks', type: 'Green Space' },
    ],
    tips: [
      'Parking is plentiful - park and walk the district',
      'Perfect for weekend brunch - come early',
      'Explore side streets for charming shops and homes',
      'Great for couples looking for a date destination',
    ],
    content: `
      <h2>Kern Place: El Paso\'s Most Charming Neighborhood</h2>
      <p>Kern Place represents the refined, walkable El Paso that many locals treasure. Historic homes line tree-shaded streets, and the main commercial district is filled with local businesses, galleries, and restaurants that prioritize quality over trends.</p>

      <h2>Character & Charm</h2>
      <p>Walking through Kern Place, you\'ll notice the care residents take with their homes. The neighborhood has a relaxed, elegant atmosphere. Tree-lined streets provide natural shade and beauty. It\'s the kind of place where locals come to relax and enjoy their community.</p>

      <h2>The Shopping District</h2>
      <p>The Kern Place shopping district is a model of urban retail done right. Independent boutiques, galleries, and specialty shops line the streets. Unlike big box stores and malls, these locally-owned businesses reflect the neighborhood\'s values and character.</p>

      <h2>Dining in Kern Place</h2>
      <p>The restaurant scene in Kern Place punches above its weight. You\'ll find well-executed cuisine, attentive service, and thoughtful atmospheres. Many restaurants take pride in local ingredients and unique approaches to familiar cuisines.</p>

      <h2>Weekend Destination</h2>
      <p>Kern Place is a favorite weekend destination for El Paso residents. Come for brunch, browse shops, enjoy coffee at a local cafe, and spend an afternoon wandering the neighborhood.</p>

      <h2>For Visitors</h2>
      <p>If you\'re visiting El Paso and want to experience where locals actually spend time and money, Kern Place is essential. It\'s safe, walkable, and showcases what\'s good about El Paso\'s community.</p>

      <h2>Getting There</h2>
      <p>Kern Place is centrally located and easily accessible. Parking is plentiful. Once parked, the entire neighborhood is walkable and designed for pedestrians to explore at leisure.</p>
    `,
  },
  'east-side-el-paso': {
    name: 'East Side',
    description: 'The authentic heart of El Paso\'s culture with street food, traditional taquerias, and genuine community life.',
    vibes: 'Authentic, Lively, Local',
    visitTime: '2-3 hours',
    features: ['Street Food', 'Tacos', 'Traditional Restaurants', 'Local Shops', 'Community', 'Authentic'],
    highlights: ['Street Taco Stands', 'Family-Owned Taquerias', 'Traditional Food Carts', 'Local Businesses', 'Real El Paso'],
    restaurants: [
      { name: 'Tacos El Paso Authentic', type: 'Street Tacos' },
      { name: 'Cocina del Barrio', type: 'Traditional Mexican' },
      { name: 'Local Food Trucks', type: 'Street Food' },
      { name: 'Family Taquerias', type: 'Mexican' },
      { name: 'Traditional Panaderias', type: 'Bakery' },
    ],
    attractions: [
      { name: 'Street Food Scene', type: 'Food' },
      { name: 'Local Markets', type: 'Shopping' },
      { name: 'Community Spaces', type: 'Cultural' },
    ],
    tips: [
      'Go hungry - the food here is serious business',
      'Visit during meal times when tacos are fresh',
      'Ask locals for recommendations - they know the best spots',
      'Bring cash - many small stands don\'t take cards',
      'Best late at night for the full taco stand experience',
    ],
    content: `
      <h2>East Side: The Authentic Heart of El Paso</h2>
      <p>If you want to understand El Paso, you must experience the East Side. This is where the city\'s soul lives - in the street tacos, the family-owned taquerias, the community gatherings, and the authentic daily life of El Paso residents.</p>

      <h2>The Food Is Everything</h2>
      <p>The East Side is home to some of El Paso\'s best food. Not fancy, not trendy - just excellent, affordable, authentic Mexican food made with tradition and care. From street taco stands to long-established family restaurants, this is where locals actually eat.</p>

      <h2>Street Food Culture</h2>
      <p>The street food scene on the East Side is legendary. Taco carts, food trucks, and stands serve hungry customers from dawn to late night. The best times are meal hours and especially late night when the full scene is active.</p>

      <h2>Family-Owned Traditions</h2>
      <p>Many East Side restaurants have been operating for decades, run by families committed to traditional recipes and quality. You\'ll find multi-generational businesses that measure their success by customer loyalty, not profit margins.</p>

      <h2>Community & Culture</h2>
      <p>The East Side is a strong community. You\'ll see families, friends gathering, and a true neighborhood atmosphere. This is where you experience real El Paso life and culture.</p>

      <h2>A Word to Visitors</h2>
      <p>Come with an open mind and an empty stomach. Be respectful, be adventurous with your food choices, and prepare for some of the best tacos of your life. The East Side is not fancy, but it\'s authentic and wonderful.</p>

      <h2>Getting There & Navigating</h2>
      <p>The East Side is easily accessible by car or bus. Parking is generally available. While the area is safe during the day, use common sense and stay aware of your surroundings, as you would in any urban neighborhood.</p>

      <h2>When to Visit</h2>
      <p>Lunch time (11am-2pm) and dinner time (5pm-9pm) are ideal for visiting restaurants. For the full taco stand experience, come after 9pm when they\'re particularly active.</p>
    `,
  },
  'arts-district': {
    name: 'Arts District',
    description: 'Where creativity thrives with galleries, street art, artist studios, and a vibrant creative community.',
    vibes: 'Creative, Artistic, Colorful',
    visitTime: '2-3 hours',
    features: ['Street Art', 'Galleries', 'Artist Studios', 'Creative Cafes', 'Murals', 'Photography'],
    highlights: ['World-Class Street Art', 'Gallery Spaces', 'Artist Studios', 'Vibrant Colors', 'Creative Energy'],
    restaurants: [
      { name: 'Foundation Coffee', type: 'Cafe' },
      { name: 'Creative Coffee Shops', type: 'Cafe' },
      { name: 'Artist-Friendly Restaurants', type: 'Various' },
      { name: 'Food Trucks', type: 'Casual' },
      { name: 'Vintage Diners', type: 'Retro' },
    ],
    attractions: [
      { name: 'Street Murals', type: 'Art' },
      { name: 'Art Galleries', type: 'Art' },
      { name: 'Artist Studios', type: 'Creative' },
      { name: 'Art Events', type: 'Cultural' },
    ],
    tips: [
      'Bring a camera - it\'s a photographer\'s paradise',
      'Check for gallery opening nights and art walks',
      'Best light for photography: early morning and golden hour',
      'Support local artists by purchasing at studios and galleries',
      'Visit multiple times - new art appears regularly',
    ],
    content: `
      <h2>Arts District: El Paso\'s Creative Heart</h2>
      <p>The Arts District is where El Paso\'s creative energy concentrates. Galleries showcase work from local and international artists, street art covers buildings in stunning color, and a community of makers calls this neighborhood home.</p>

      <h2>Street Art Paradise</h2>
      <p>Walking the Arts District, you\'ll see some of the most impressive street art in the region. International street artists have painted here, local artists maintain their work, and new pieces appear regularly. It\'s an ever-evolving outdoor gallery.</p>

      <h2>Gallery Scene</h2>
      <p>The neighborhood is home to dozens of galleries showcasing contemporary art, photography, local artists, and experimental work. Many galleries are artist-run, meaning you might meet the creators of the work you\'re viewing.</p>

      <h2>Artist Studios & Creative Spaces</h2>
      <p>Beyond galleries, you\'ll find working artist studios, creative workshops, and maker spaces. This is a neighborhood where art isn\'t just displayed - it\'s created, shared, and celebrated.</p>

      <h2>Events & Community</h2>
      <p>The Arts District hosts regular events: art walks, gallery openings, festivals, and community gatherings. These events bring the neighborhood to life and connect the creative community with the broader public.</p>

      <h2>The Vibe</h2>
      <p>The Arts District has a relaxed, creative energy. You\'ll see artists, photographers, designers, and art lovers. There\'s less pretension than in some art scenes - people here seem genuinely committed to art for its own sake.</p>

      <h2>For Photographers</h2>
      <p>This is a dream destination for photographers. The street art, colors, light, and urban landscape create endless photo opportunities. Many Instagram-famous El Paso photos originate from the Arts District.</p>

      <h2>Getting There & Exploring</h2>
      <p>The Arts District is compact and easily explored on foot. Parking is available though can be limited. The neighborhood is welcoming to visitors and designed for exploration.</p>
    `,
  },
  'midtown-el-paso': {
    name: 'Midtown',
    description: 'A diverse, eclectic neighborhood with restaurants, bars, and shops offering casual accessibility and mixed character.',
    vibes: 'Diverse, Casual, Mixed',
    visitTime: '2-3 hours',
    features: ['Diverse Dining', 'Casual Bars', 'Mixed Shops', 'Walkable', 'Local Feel', 'Accessible'],
    highlights: ['Restaurant Variety', 'Casual Bars', 'Mixed Shops', 'Walkable Streets', 'Local Atmosphere'],
    restaurants: [
      { name: 'Various Ethnic Cuisines', type: 'International' },
      { name: 'Local Diners', type: 'American' },
      { name: 'Casual Restaurants', type: 'Various' },
      { name: 'Neighborhood Bars', type: 'Casual' },
      { name: 'Coffee & Cafes', type: 'Cafe' },
    ],
    attractions: [
      { name: 'Diverse Restaurants', type: 'Dining' },
      { name: 'Local Bars & Clubs', type: 'Entertainment' },
      { name: 'Neighborhood Shops', type: 'Retail' },
    ],
    tips: [
      'Explore beyond the main streets for hidden gems',
      'Great for groups with diverse food preferences',
      'Casual dress is appropriate for most venues',
      'Parking is generally available',
      'Good neighborhood for evening exploration',
    ],
    content: `
      <h2>Midtown El Paso: Casual Meets Diverse</h2>
      <p>Midtown is the neighborhood that doesn\'t try too hard. It\'s diverse, casual, and accessible. Where downtown is trying to be culturally significant and the East Side is authentically working-class, Midtown is just... a neighborhood where people live and eat and hang out.</p>

      <h2>The Strength of Diversity</h2>
      <p>Midtown\'s greatest strength is its diversity. You\'ll find restaurants of many cuisines, bars of different vibes, and shops serving various communities. This makes it perfect for groups with different interests or tastes.</p>

      <h2>Dining in Midtown</h2>
      <p>If you can\'t decide what food you want, Midtown is your neighborhood. Asian restaurants, Middle Eastern, American, Mexican, Mediterranean - the variety is impressive and the quality is generally solid.</p>

      <h2>Casual Atmosphere</h2>
      <p>Midtown is relaxed and unpretentious. You\'ll see people dressed casually, restaurants without fancy atmospheres, bars that just want to serve good drinks. It\'s functional and fun without trying to be trendy.</p>

      <h2>Night Life</h2>
      <p>Midtown has a solid bar scene. You\'ll find everything from dive bars to more upscale cocktail spots, dancing venues to chill lounges. It\'s the neighborhood for a casual night out.</p>

      <h2>For Visitors</h2>
      <p>Midtown is great for visitors who want to experience how El Pasoans actually live - casually enjoying food, drinks, and entertainment without pretension.</p>

      <h2>Getting Around</h2>
      <p>Midtown is walkable and accessible. Parking is available. The neighborhood is straightforward and easy to navigate.</p>
    `,
  },
  'central-el-paso': {
    name: 'Central El Paso',
    description: 'The central core with a mix of business, culture, dining, and home to major attractions and parks.',
    vibes: 'Urban, Mixed, Convenient',
    visitTime: '3-4 hours',
    features: ['Museums', 'Parks', 'Attractions', 'Diverse Dining', 'Central Location', 'Green Spaces'],
    highlights: ['Major Museums', 'Parks & Green Space', 'Central Attractions', 'Accessible', 'Cultural Venues'],
    restaurants: [
      { name: 'Various Options', type: 'Mixed' },
      { name: 'Museum Cafes', type: 'Casual' },
      { name: 'Neighborhood Restaurants', type: 'Various' },
      { name: 'Business District Dining', type: 'Professional' },
      { name: 'Casual Spots', type: 'Various' },
    ],
    attractions: [
      { name: 'Major Museums', type: 'Cultural' },
      { name: 'Parks', type: 'Green Space' },
      { name: 'Central Attractions', type: 'Attractions' },
      { name: 'Monuments', type: 'Historical' },
    ],
    tips: [
      'Plan attractions as a day trip',
      'Many museums offer free admission',
      'Parks are great for walking and relaxing',
      'Central location makes it convenient for exploring',
      'Combine museum visits with outdoor activities',
    ],
    content: `
      <h2>Central El Paso: The Hub of Culture & Recreation</h2>
      <p>Central El Paso is where the city\'s major attractions concentrate. Museums, parks, green spaces, and cultural institutions make this the educational and recreational heart of the city.</p>

      <h2>Museums & Culture</h2>
      <p>Central is home to many of El Paso\'s best museums, including art museums, history museums, and specialized institutions. Many offer free or low-cost admission, making culture accessible.</p>

      <h2>Parks & Green Space</h2>
      <p>The area includes significant parks and green spaces, perfect for walking, relaxing, or outdoor activities. The Franklin Mountains provide hiking and natural beauty nearby.</p>

      <h2>Attractions Hub</h2>
      <p>Many of El Paso\'s major attractions are located in or near Central, making it ideal for planning a day of sightseeing and cultural exploration.</p>

      <h2>For Different Visitors</h2>
      <p>Whether you\'re interested in museums, outdoor recreation, or a mix of both, Central El Paso offers it all in a convenient central location.</p>

      <h2>Planning Your Visit</h2>
      <p>Allocate a full day to explore Central properly. You might combine morning museum visits with afternoon park exploration or outdoor activities.</p>
    `,
  },
  'montwood': {
    name: 'Montwood',
    description: 'An emerging neighborhood with growing dining scene, independent shops, and strong community focus.',
    vibes: 'Emerging, Trendy, Community-Focused',
    visitTime: '2-3 hours',
    features: ['New Restaurants', 'Independent Shops', 'Coffee Shops', 'Community Events', 'Emerging Scene'],
    highlights: ['Emerging Restaurant Scene', 'Independent Businesses', 'Community Culture', 'Local Vibe', 'New Discoveries'],
    restaurants: [
      { name: 'New Restaurants', type: 'Various' },
      { name: 'Coffee & Cafes', type: 'Specialty' },
      { name: 'Emerging Eateries', type: 'Trendy' },
      { name: 'Local Favorites', type: 'Community' },
      { name: 'Craft Venues', type: 'Creative' },
    ],
    attractions: [
      { name: 'Community Events', type: 'Cultural' },
      { name: 'Local Shops', type: 'Retail' },
      { name: 'Emerging Venues', type: 'Entertainment' },
    ],
    tips: [
      'Check for regular community events and gatherings',
      'Support new restaurants and independent businesses',
      'Visit frequently - the neighborhood is constantly evolving',
      'Follow local social media for what\'s new',
      'Great for discovering hidden gems before they\'re mainstream',
    ],
    content: `
      <h2>Montwood: El Paso\'s Emerging Neighborhood</h2>
      <p>Montwood is an up-and-coming neighborhood that represents El Paso\'s future. New restaurants are opening, independent businesses are putting down roots, and a strong community is building something interesting.</p>

      <h2>The Emerging Restaurant Scene</h2>
      <p>Montwood\'s dining scene is exciting and diverse, with new restaurants regularly opening that reflect broader food trends and creative concepts. It\'s where El Paso\'s culinary pioneers are staking their claims.</p>

      <h2>Independent Businesses</h2>
      <p>Rather than chains, Montwood attracts local entrepreneurs opening coffee shops, restaurants, bookstores, and creative spaces. There\'s a sense that the neighborhood is being built by people who care about it.</p>

      <h2>Community Focus</h2>
      <p>There\'s a strong community spirit in Montwood. Regular events bring neighbors together, and businesses seem genuinely invested in community rather than just transactions.</p>

      <h2>For Trendsetters</h2>
      <p>If you enjoy discovering neighborhoods before they\'re fully developed, before places become established and commercialized, Montwood is for you.</p>

      <h2>Getting There</h2>
      <p>Montwood is easily accessible and has parking. The neighborhood is welcoming and designed for exploration.</p>

      <h2>Why Visit Now</h2>
      <p>Visit Montwood while it\'s emerging, when the neighborhood is defining itself and independent voices still dominate. In a few years, it may become a destination neighborhood - experience it now while it\'s evolving.</p>
    `,
  },
  'upper-valley': {
    name: 'Upper Valley',
    description: 'The northern part with family-friendly attractions, parks, and suburban charm ideal for families.',
    vibes: 'Family-Friendly, Suburban, Outdoor',
    visitTime: '3-5 hours',
    features: ['Family Attractions', 'Parks', 'Green Spaces', 'Water Park', 'Zoo', 'Outdoor Recreation'],
    highlights: ['El Paso Zoo', 'Wet n Wild Water Park', 'Parks & Recreation', 'Family Spaces', 'Outdoor Activity'],
    restaurants: [
      { name: 'Family Restaurants', type: 'Various' },
      { name: 'Kid-Friendly Spots', type: 'Casual' },
      { name: 'Casual Dining', type: 'Family' },
      { name: 'Quick Service', type: 'Fast Casual' },
      { name: 'Neighborhood Cafes', type: 'Casual' },
    ],
    attractions: [
      { name: 'El Paso Zoo', type: 'Family' },
      { name: 'Wet n Wild Water Park', type: 'Recreation' },
      { name: 'Parks & Green Space', type: 'Outdoor' },
      { name: 'Recreational Facilities', type: 'Sports' },
    ],
    tips: [
      'Perfect for families with children',
      'Plan a full day combining attractions',
      'Water park is seasonal - check before visiting',
      'Bring sunscreen and water',
      'Afternoon visits might be less crowded',
    ],
    content: `
      <h2>Upper Valley: Family Fun in El Paso</h2>
      <p>Upper Valley is El Paso\'s family destination. With major attractions like the Zoo and Water Park, plus abundant parks and recreational facilities, it\'s where families go to have fun together.</p>

      <h2>Major Family Attractions</h2>
      <ul>
        <li><strong>El Paso Zoo at Storyland</strong> - Interactive animal experiences and whimsical elements for kids</li>
        <li><strong>Wet n Wild Water Park</strong> - Perfect for cooling off during hot summers</li>
        <li><strong>Multiple Parks</strong> - Playgrounds, sports facilities, and green space</li>
      </ul>

      <h2>Outdoor Recreation</h2>
      <p>The Upper Valley has numerous parks and recreational areas suitable for families. You\'ll find playgrounds, sports courts, walking areas, and picnic spots.</p>

      <h2>Suburban Feel</h2>
      <p>The neighborhood has a suburban character - spacious, accessible, and designed with families in mind. It\'s less urban than downtown but more developed than the surrounding areas.</p>

      <h2>Restaurant Options</h2>
      <p>You\'ll find kid-friendly restaurants and casual dining throughout the Upper Valley. Many establishments are accustomed to serving families and have appropriate atmospheres and menus.</p>

      <h2>Summer Destination</h2>
      <p>The Upper Valley is particularly popular in summer when families seek relief from heat. The water park and outdoor activities become essential El Paso destinations.</p>

      <h2>Planning a Family Day</h2>
      <p>Plan a full day combining attractions: start with the zoo in the morning, grab lunch, visit the water park in the afternoon, and end with a relaxing dinner at a casual restaurant.</p>

      <h2>Year-Round Appeal</h2>
      <p>While summer is peak season, the Upper Valley remains attractive throughout the year. Cooler months are actually ideal for zoo visits and park exploration.</p>
    `,
  },
};

export default async function NeighborhoodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = neighborhoodsDatabase[slug];

  if (!neighborhood) {
    return (
      <main className="bg-dark-bg text-dark-text min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Neighborhood Not Found</h1>
          <p className="text-dark-text-muted mb-6">
            Sorry, we couldn\'t find that neighborhood.
          </p>
          <Link
            href="/neighborhoods"
            className="text-sand hover:text-neon-cyan transition-colors font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Neighborhoods
          </Link>
        </section>
      </main>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: neighborhood.name,
    description: neighborhood.description,
    areaServed: {
      '@type': 'City',
      name: neighborhood.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <Schema schema={schema} />

      <main className="bg-dark-bg text-dark-text min-h-screen">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="space-y-6"
          >
            <Link
              href="/neighborhoods"
              className="text-sand hover:text-neon-cyan transition-colors flex items-center gap-2 inline-flex"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Neighborhoods
            </Link>

            <div>
              <span className="inline-block text-xs px-3 py-1 border border-sand text-sand rounded mb-4 uppercase tracking-wider">
                {neighborhood.vibes}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                {neighborhood.name}
              </h1>
              <p className="text-lg text-dark-text-muted">
                {neighborhood.description}
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-dark-text-dim">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Visit Time</p>
                <p className="text-sand font-semibold">{neighborhood.visitTime}</p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Restaurants</p>
                <p className="text-sand font-semibold">{neighborhood.restaurants.length}+</p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Attractions</p>
                <p className="text-sand font-semibold">{neighborhood.attractions.length}+</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features & Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Character & Vibe</h2>
              <div className="flex flex-wrap gap-2">
                {neighborhood.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-dark-bg-alt border border-dark-text-dim text-dark-text-muted rounded text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="space-y-2">
                {neighborhood.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="text-sand mt-1">•</span>
                    <span className="text-dark-text-muted">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: neighborhood.content }}
          />
        </section>

        {/* Restaurants & Attractions */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-sand" />
              Featured Restaurants
            </h2>
            <div className="space-y-3">
              {neighborhood.restaurants.map((restaurant, idx) => (
                <div key={idx} className="border border-dark-text-dim p-3 rounded">
                  <p className="font-semibold text-sand">{restaurant.name}</p>
                  <p className="text-xs text-dark-text-dim">{restaurant.type}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-rust" />
              Key Attractions
            </h2>
            <div className="space-y-3">
              {neighborhood.attractions.map((attraction, idx) => (
                <div key={idx} className="border border-dark-text-dim p-3 rounded">
                  <p className="font-semibold text-sand">{attraction.name}</p>
                  <p className="text-xs text-dark-text-dim">{attraction.type}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tips Section */}
        {neighborhood.tips && neighborhood.tips.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-sand" />
                Local Tips
              </h2>
              <div className="grid gap-4">
                {neighborhood.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors"
                  >
                    <p className="text-dark-text-muted">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
