'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Schema from '../../components/Schema';

// Mock database of attractions
const attractionsDatabase: Record<string, {
  name: string;
  category: string;
  description: string;
  neighborhood: string;
  hours: string;
  admission: string;
  visitTime: string;
  highlights: string[];
  content: string;
  image: string;
  tips: string[];
}> = {
  'el-paso-museum-of-art': {
    name: 'El Paso Museum of Art',
    category: 'Art Museum',
    description: 'World-class art museum featuring contemporary, modern, and Mexican art with rotating exhibitions and permanent collections.',
    neighborhood: 'Downtown',
    hours: 'Tue-Sat 9am-5pm, Sun 12pm-5pm (Closed Mondays)',
    admission: 'Free',
    visitTime: '2-3 hours',
    image: '/og-images/attractions/epa-museum.jpg',
    highlights: ['Contemporary Art', 'Mexican Masters', 'Local Artists', 'Rotating Exhibitions', 'Modern Galleries'],
    tips: [
      'Free admission makes it perfect for multiple visits',
      'Check their website for special exhibitions and events',
      'Plan 2-3 hours for a thorough visit',
      'Great for art enthusiasts and families'
    ],
    content: `
      <h2>About the El Paso Museum of Art</h2>
      <p>The El Paso Museum of Art stands as a beacon of cultural achievement in West Texas. Located in the heart of downtown, this world-class institution showcases an impressive collection of contemporary, modern, and Mexican art.</p>

      <h2>Collections & Exhibits</h2>
      <p>The museum features rotating exhibitions alongside permanent collections that celebrate artistic expression from around the world. Their Mexican art collection is particularly noteworthy, offering insights into the rich cultural heritage of the region.</p>

      <h2>What to See</h2>
      <ul>
        <li>Contemporary Art Gallery - Modern pieces from emerging and established artists</li>
        <li>Mexican Art Collection - Masters and contemporary Mexican artists</li>
        <li>Local Artists - Regular features of El Paso's vibrant art community</li>
        <li>Rotating Exhibitions - New shows throughout the year</li>
        <li>Photography Collections - Special focus on visual storytelling</li>
      </ul>

      <h2>Why Visit</h2>
      <p>The museum is a must-visit for art enthusiasts and curious explorers alike. Free admission removes any barrier to experiencing world-class art. The building itself is architecturally striking, making it as much an attraction as the art inside.</p>

      <h2>Planning Your Visit</h2>
      <p>The museum is best experienced on foot as part of a broader downtown exploration. Combine your visit with nearby galleries, restaurants, and the Arts District for a full cultural day.</p>
    `,
  },
  'franklin-mountains-state-park': {
    name: 'Franklin Mountains State Park',
    category: 'Outdoor/Hiking',
    description: 'Stunning desert mountain range with scenic hiking trails, panoramic views of El Paso and Juárez, and outdoor recreation opportunities.',
    neighborhood: 'Central/North',
    hours: '7am-9pm Daily',
    admission: 'Free',
    visitTime: '3-5 hours',
    image: '/og-images/attractions/franklin-mountains.jpg',
    highlights: ['Hiking Trails', 'Panoramic Views', 'Photography Spots', 'Desert Ecosystem', 'Sunrise/Sunset Views'],
    tips: [
      'Start early to avoid afternoon heat',
      'Bring plenty of water (at least 2 liters)',
      'Wear sun protection and appropriate footwear',
      'Best visited October-April for comfortable temperatures',
      'Popular trails fill up on weekends'
    ],
    content: `
      <h2>Franklin Mountains State Park - El Paso\'s Outdoor Paradise</h2>
      <p>The Franklin Mountains stand as El Paso\'s defining natural landmark. This 26,000-acre state park offers world-class hiking, stunning vistas, and an escape into the high desert landscape.</p>

      <h2>Popular Trails</h2>
      <ul>
        <li><strong>Tom Mays Park</strong> - Popular entry point with trails ranging from easy to moderate</li>
        <li><strong>McKelligon Canyon</strong> - Scenic canyon hike with water features</li>
        <li><strong>Franklin Peak Trail</strong> - Challenging summit hike with 360-degree views</li>
        <li><strong>Lone Star Trail</strong> - Moderate trail with panoramic overlooks</li>
        <li><strong>North Franklin Loop</strong> - Full loop with multiple viewpoints</li>
      </ul>

      <h2>Panoramic Views</h2>
      <p>On clear days, hikers can see El Paso stretching out below, the Rio Grande valley, and even into New Mexico. The view of El Paso and Juárez at sunset is particularly stunning.</p>

      <h2>Safety Considerations</h2>
      <p>The desert environment requires preparation. Bring plenty of water, sun protection, and appropriate footwear. Cell service can be limited at higher elevations.</p>

      <h2>Wildlife & Ecosystem</h2>
      <p>The Franklins showcase Chihuahuan Desert ecology. You might spot mule deer, javelinas, lizards, and various bird species. Spring brings wildflowers to the slopes.</p>

      <h2>When to Visit</h2>
      <p>October through April offers the best hiking conditions with cooler temperatures. Summer is extremely hot, making early morning hikes essential.</p>
    `,
  },
  'el-paso-zoo': {
    name: 'El Paso Zoo at Storyland',
    category: 'Zoo',
    description: 'Family-friendly zoo featuring animals from around the world, storybook characters, and interactive experiences for all ages.',
    neighborhood: 'Upper Valley',
    hours: '9:30am-5pm Daily',
    admission: '$10-15 per person',
    visitTime: '3-4 hours',
    image: '/og-images/attractions/ep-zoo.jpg',
    highlights: ['Wildlife Exhibits', 'Petting Zoo', 'Rides', 'Picnic Areas', 'Shaded Paths'],
    tips: [
      'Visit early in the morning when animals are most active',
      'Bring plenty of water and sunscreen',
      'Pack a picnic or grab food at the zoo cafeteria',
      'Wear comfortable, closed-toe shoes',
      'Great for families with children'
    ],
    content: `
      <h2>El Paso Zoo - A Family Adventure</h2>
      <p>The El Paso Zoo at Storyland combines wildlife education with whimsical storybook elements, creating a unique experience for families and animal lovers of all ages.</p>

      <h2>Main Attractions</h2>
      <ul>
        <li><strong>Wildlife Exhibits</strong> - Animals from Africa, Asia, South America, and North America</li>
        <li><strong>Petting Zoo</strong> - Interactive experience where visitors can feed and touch gentle animals</li>
        <li><strong>Lazy Lizard Ride</strong> - Fun train ride around the zoo</li>
        <li><strong>Storybook Characters</strong> - Photo opportunities with themed characters</li>
        <li><strong>Picnic Areas</strong> - Shaded spots to relax and enjoy meals</li>
      </ul>

      <h2>For Families</h2>
      <p>The zoo is designed with families in mind. The Storyland theme makes it engaging for younger children, while the diversity of animals appeals to all ages.</p>

      <h2>Physical Layout</h2>
      <p>The zoo has shaded pathways and plenty of rest areas, though some walking is required. Stroller rentals are available. Most areas are wheelchair accessible.</p>

      <h2>Animal Care & Education</h2>
      <p>The zoo emphasizes animal welfare and education. Information plaques provide details about each species and conservation efforts.</p>

      <h2>Planning Your Visit</h2>
      <p>Allocate 3-4 hours for a comfortable visit. Summer days are extremely hot—come early and stay hydrated. The zoo offers air-conditioned rest areas.</p>
    `,
  },
  'pro-texas-historic-site': {
    name: 'Pro Texas Historic Site & Chamizal National Memorial',
    category: 'Historical Site',
    description: 'Historic site featuring Fort Bliss and the peaceful Chamizal Memorial celebrating the border agreement between US and Mexico.',
    neighborhood: 'Central',
    hours: '8am-6pm Daily',
    admission: 'Free',
    visitTime: '1-2 hours',
    image: '/og-images/attractions/chamizal.jpg',
    highlights: ['Historic Landmark', 'Border History', 'Walking Trails', 'Monument', 'Cultural Significance'],
    tips: [
      'Best visited in cooler months',
      'Bring water and wear comfortable shoes for walking',
      'Visit early morning for fewer crowds',
      'Free admission and ample parking',
      'Great location for history enthusiasts'
    ],
    content: `
      <h2>Chamizal National Memorial - A Border Peace Monument</h2>
      <p>The Chamizal National Memorial stands as a unique monument to peaceful resolution and international cooperation. It commemorates the 1963 Chamizal Convention, which settled a long-standing border dispute between the United States and Mexico.</p>

      <h2>Historical Significance</h2>
      <p>For over 100 years, the El Paso-Juárez border was in dispute due to shifts in the Rio Grande\'s course. The 1963 agreement resolved this peacefully, relocating the river and establishing clear boundaries. The Chamizal memorial celebrates this triumph of diplomacy.</p>

      <h2>What to See</h2>
      <ul>
        <li><strong>The Monument</strong> - A striking concrete structure symbolizing peace and cooperation</li>
        <li><strong>Walking Trails</strong> - Scenic paths along the relocated Rio Grande</li>
        <li><strong>Historic Markers</strong> - Information about the border dispute and resolution</li>
        <li><strong>Interpretive Center</strong> - Details about the history and agreement</li>
        <li><strong>Riverside Views</strong> - Beautiful views of the Rio Grande and Juárez</li>
      </ul>

      <h2>The Setting</h2>
      <p>The memorial park offers peaceful grounds for reflection and learning. The landscaping balances natural beauty with cultural remembrance.</p>

      <h2>Educational Value</h2>
      <p>This site is invaluable for understanding El Paso\'s unique position on the border and how international disputes can be resolved peacefully.</p>

      <h2>Visiting Information</h2>
      <p>The site is easily accessible and free to visit. It\'s a great stop during a broader exploration of El Paso\'s history and culture.</p>
    `,
  },
  'downtown-murals-arts-district': {
    name: 'Downtown Murals & Arts District Walking Tour',
    category: 'Street Art/Culture',
    description: 'Vibrant street art and murals throughout downtown and Arts District. Self-guided walking tour discovering local and international artists.',
    neighborhood: 'Downtown & Arts District',
    hours: 'Open 24/7',
    admission: 'Free',
    visitTime: '2-3 hours',
    image: '/og-images/attractions/murals.jpg',
    highlights: ['Street Art', 'Photo Ops', 'Local Artists', 'Cultural History', 'International Artists'],
    tips: [
      'Best explored on foot - wear comfortable shoes',
      'Visit during daytime for safety and photography',
      'Bring a camera or phone for photos',
      'Start at the Arts District visitor center for map',
      'Combine with nearby restaurants and galleries'
    ],
    content: `
      <h2>El Paso\'s Vibrant Street Art Scene</h2>
      <p>El Paso\'s downtown and Arts District have transformed into an open-air gallery. Colorful murals cover buildings, celebrating local culture, history, and contemporary artistic vision.</p>

      <h2>Notable Murals & Artists</h2>
      <p>The murals feature works by both local and international street artists. Notable pieces celebrate cultural icons, local history, and social themes. The Arts District alone features dozens of Instagram-worthy installations.</p>

      <h2>Downtown District</h2>
      <ul>
        <li>San Jacinto Plaza area - Gallery openings and art installations</li>
        <li>Main Street - Historic murals and contemporary pieces</li>
        <li>Arts District corridor - Highest concentration of street art</li>
        <li>Gallery Row - Historic buildings converted to art spaces</li>
      </ul>

      <h2>Arts District</h2>
      <p>The Arts District is the epicenter of El Paso\'s creative community. Beyond murals, you\'ll find galleries, cafes, studios, and cultural venues.</p>

      <h2>Self-Guided Tour Route</h2>
      <p>Start at the Arts District visitor center for a map. The main corridor runs along streets with consistent coverage of murals and galleries. Plan 2-3 hours for a relaxed walk with photo stops.</p>

      <h2>Cultural Context</h2>
      <p>The murals tell El Paso\'s story - its border location, cultural blend, music heritage, and community values. Each piece adds to understanding the city\'s identity.</p>

      <h2>Best Practices</h2>
      <p>Explore during daylight hours. Bring water and wear comfortable shoes. Many nearby galleries, cafes, and restaurants make this a full cultural day.</p>
    `,
  },
  'southwest-university-museum': {
    name: 'Centennial Museum & Amon Carter Museum',
    category: 'Museum',
    description: 'University museums featuring Southwest history, archaeology, art, and rare book collections chronicling El Paso and West Texas heritage.',
    neighborhood: 'Central',
    hours: 'Tue-Fri 11am-4pm, Sat 1pm-4pm (Closed Sun-Mon)',
    admission: 'Free',
    visitTime: '2-3 hours',
    image: '/og-images/attractions/centennial.jpg',
    highlights: ['Southwest History', 'Archaeology', 'Rare Books', 'Cultural Artifacts', 'Educational'],
    tips: [
      'Free admission - great value',
      'Best for history and archaeology enthusiasts',
      'Plan 2-3 hours for complete experience',
      'Limited hours - plan accordingly',
      'Combine with other downtown attractions'
    ],
    content: `
      <h2>Centennial Museum & Amon Carter Museum</h2>
      <p>Located on the campus of UTEP, these university museums house some of El Paso\'s most important historical and cultural collections. They offer deep insights into Southwest history, archaeology, and heritage.</p>

      <h2>Centennial Museum</h2>
      <p>The Centennial Museum focuses on El Paso\'s history and the wider Southwest region. Collections include archaeological artifacts, historical documents, and cultural items spanning centuries.</p>

      <h2>Key Collections</h2>
      <ul>
        <li><strong>Archaeology</strong> - Pre-Columbian artifacts and Southwest indigenous history</li>
        <li><strong>Historical Documents</strong> - Letters, photographs, and records documenting El Paso\'s development</li>
        <li><strong>Cultural Artifacts</strong> - Traditional crafts, clothing, and cultural items</li>
        <li><strong>Natural History</strong> - Desert ecology and paleontology</li>
        <li><strong>Military History</strong> - Fort Bliss and regional military heritage</li>
      </ul>

      <h2>Amon Carter Museum of Art</h2>
      <p>The Amon Carter Museum complements the Centennial with art collections, including rare books and art objects from the region.</p>

      <h2>For Scholars & Learners</h2>
      <p>These museums are ideal for those wanting to deeply understand El Paso\'s place in Southwest history. The academic setting and scholarly approach offer comprehensive perspectives.</p>

      <h2>Planning Your Visit</h2>
      <p>Allow 2-3 hours for both museums. The limited hours (closed Sundays and Mondays) require planning. UTEP\'s campus is also worth exploring for its distinctive architecture.</p>

      <h2>Educational Programs</h2>
      <p>The museums often host lectures, workshops, and special exhibitions related to Southwest history and culture.</p>
    `,
  },
  'transmountain-scenic-drive': {
    name: 'Transmountain Scenic Drive',
    category: 'Scenic Drive',
    description: 'Spectacular 24-mile loop offering panoramic views of El Paso, Juárez, New Mexico, and the surrounding desert landscape.',
    neighborhood: 'Multiple',
    hours: 'Open 24/7',
    admission: 'Free',
    visitTime: '1-2 hours',
    image: '/og-images/attractions/transmountain.jpg',
    highlights: ['Panoramic Views', 'Photography', 'Sunset Viewing', 'Multiple Overlooks', 'Easy Access'],
    tips: [
      'Best visited in early morning or late afternoon for light and views',
      'Perfect for sunset photography',
      'Drive or hike to multiple overlooks',
      'Bring water if planning to hike to viewpoints',
      'Safe and accessible for all vehicle types'
    ],
    content: `
      <h2>Transmountain Scenic Drive - A Must-Do El Paso Experience</h2>
      <p>The Transmountain Drive offers one of the most spectacular introductions to El Paso\'s geography and beauty. This 24-mile scenic loop crosses through the Franklin Mountains, providing 360-degree views of the region.</p>

      <h2>The Route</h2>
      <p>The drive loops around the Franklin Mountains, offering continuously changing views. Whether you drive the whole route or focus on sections with your favorite viewpoints, the experience is unforgettable.</p>

      <h2>Key Viewpoints</h2>
      <ul>
        <li><strong>Highest Point Viewpoint</strong> - The crown jewel, with views extending into New Mexico and Mexico proper</li>
        <li><strong>East Side Overlook</strong> - Panoramic views of the East Side neighborhoods and desert</li>
        <li><strong>West Side Lookout</strong> - Views across El Paso toward New Mexico</li>
        <li><strong>Multiple Rest Areas</strong> - Designated stopping points with parking and information</li>
      </ul>

      <h2>What You\'ll See</h2>
      <p>On clear days, the views are incredible. You can see El Paso sprawling out below, the Rio Grande valley, the Juárez skyline, and the desert extending to distant mountains.</p>

      <h2>Photography Paradise</h2>
      <p>This is one of the best places in El Paso for photography. The varying light throughout the day creates different moods. Sunset is particularly spectacular.</p>

      <h2>Accessibility</h2>
      <p>The drive is accessible to all vehicles and doesn\'t require hiking. Some overlooks have short walking paths, but the main experience is accessible from your vehicle.</p>

      <h2>Best Time to Visit</h2>
      <p>Early morning offers clear light and fewer crowds. Late afternoon provides golden hour light for photography. Clear days (common in El Paso) offer the best visibility.</p>

      <h2>Planning Your Visit</h2>
      <p>The full drive takes about 45 minutes to an hour. With stops, plan 1-2 hours. It\'s an excellent addition to any El Paso itinerary, especially for first-time visitors.</p>
    `,
  },
  'wet-n-wild-water-park': {
    name: 'Wet\'n\'Wild Water Park',
    category: 'Water Park',
    description: 'Family fun water park with slides, pools, wave pool, and lazy river. Perfect for hot El Paso days and summer entertainment.',
    neighborhood: 'Upper Valley',
    hours: 'Seasonal (typically 10am-6pm summer)',
    admission: '$25-35 per person',
    visitTime: '4-6 hours',
    image: '/og-images/attractions/wetnwild.jpg',
    highlights: ['Water Slides', 'Wave Pool', 'Lazy River', 'Family-Friendly', 'Summer Fun'],
    tips: [
      'Check website for seasonal opening and hours',
      'Bring sunscreen and reapply frequently',
      'Arrive early for parking and to beat crowds',
      'Food available on-site but expensive - pack snacks',
      'Bring water shoes to protect feet from hot pavement'
    ],
    content: `
      <h2>Wet\'n\'Wild Water Park - Summer Fun in El Paso</h2>
      <p>During El Paso\'s hot summers, Wet\'n\'Wild Water Park offers relief and entertainment for families and friends. The park features a variety of water attractions suitable for all ages and thrill levels.</p>

      <h2>Main Attractions</h2>
      <ul>
        <li><strong>Water Slides</strong> - Various slides from mild to thrilling</li>
        <li><strong>Wave Pool</strong> - Creates ocean-like conditions for a unique water experience</li>
        <li><strong>Lazy River</strong> - Gentle, relaxing float through themed areas</li>
        <li><strong>Children\'s Area</strong> - Shallow pools and splash pads for young children</li>
        <li><strong>Swimming Pools</strong> - Traditional lap and recreational pools</li>
      </ul>

      <h2>For Different Ages</h2>
      <p>Young children have dedicated splash areas and shallow pools. Older kids and adults enjoy thrill rides and the wave pool. The lazy river appeals to all ages.</p>

      <h2>Amenities</h2>
      <ul>
        <li>Plenty of shaded areas and cabana rentals</li>
        <li>Food venues (though bring snacks if budget-conscious)</li>
        <li>Changing facilities and locker rentals</li>
        <li>First aid and lifeguards on duty</li>
      </ul>

      <h2>Summer Schedule</h2>
      <p>The park operates seasonally, typically Memorial Day through Labor Day. Weekdays are less crowded than weekends. Evening hours see temperature cooling, making late afternoon visits comfortable.</p>

      <h2>Planning Your Visit</h2>
      <p>Allocate 4-6 hours for a full day. Sunscreen is essential - the desert sun is intense. Bring water, snacks, and money for any in-park purchases. Arrive early for best parking and crowd management.</p>

      <h2>Safety</h2>
      <p>The park prioritizes safety with trained lifeguards and safety rules. Follow height and age restrictions on rides and always supervise children.</p>

      <h2>Tips for a Great Day</h2>
      <p>Bring your own towels to save money. Wear water shoes. Pack a cooler with water and snacks. Go on a weekday if possible for smaller crowds and a more relaxed experience.</p>
    `,
  },
};

export default async function AttractionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attraction = attractionsDatabase[slug];

  if (!attraction) {
    return (
      <main className="bg-dark-bg text-dark-text min-h-screen">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Attraction Not Found</h1>
          <p className="text-dark-text-muted mb-6">
            Sorry, we couldn\'t find that attraction.
          </p>
          <Link
            href="/attractions"
            className="text-sand hover:text-neon-cyan transition-colors font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Attractions
          </Link>
        </section>
      </main>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: attraction.name,
    description: attraction.description,
    image: attraction.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
      streetAddress: attraction.neighborhood,
    },
    url: `https://elpaso.fyi/attractions/${slug}`,
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
              href="/attractions"
              className="text-sand hover:text-neon-cyan transition-colors flex items-center gap-2 inline-flex"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Attractions
            </Link>

            <div>
              <span className="inline-block text-xs px-3 py-1 border border-sand text-sand rounded mb-4 uppercase tracking-wider">
                {attraction.category}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                {attraction.name}
              </h1>
              <p className="text-lg text-dark-text-muted">
                {attraction.description}
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-dark-text-dim">
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Admission</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {attraction.admission}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Visit Time</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {attraction.visitTime}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Location</p>
                <p className="text-sand font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {attraction.neighborhood}
                </p>
              </div>
              <div>
                <p className="text-xs text-dark-text-dim uppercase tracking-wider mb-1">Hours</p>
                <p className="text-sand font-semibold">{attraction.hours.split(',')[0].trim()}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Hours & Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Hours of Operation</h2>
            <p className="text-dark-text-muted whitespace-pre-wrap">{attraction.hours}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="space-y-2">
              {attraction.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="text-sand mt-1">•</span>
                  <span className="text-dark-text-muted">{highlight}</span>
                </li>
              ))}
            </ul>
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
            dangerouslySetInnerHTML={{ __html: attraction.content }}
          />
        </section>

        {/* Tips Section */}
        {attraction.tips && attraction.tips.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-dark-text-dim">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-6">Visitor Tips</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {attraction.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="border border-dark-text-dim p-4 rounded hover:border-sand transition-colors"
                  >
                    <p className="text-dark-text-muted text-sm">{tip}</p>
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
