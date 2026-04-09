import { Camera } from 'lucide-react';

export default function AttractionsPage() {
  return (
    <main className="bg-light-bg text-slate-900 min-h-screen flex flex-col">
      {/* Coming Soon Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-2xl">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <Camera className="w-24 h-24 text-sunset-orange opacity-80" strokeWidth={1.5} />
          </div>

          {/* Header */}
          <h1 className="text-5xl sm:text-6xl font-bold font-display mb-6 text-slate-900">
            Explore El Paso's Top Attractions & Landmarks
          </h1>

          {/* Subheader */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-sunset-orange">
            Scouting the city...
          </h2>

          {/* Descriptive Text */}
          <p className="text-lg text-slate-500 leading-relaxed">
            Visual tours and deep dives into local landmarks, museums, scenic drives, and cultural attractions dropping soon.
          </p>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Top Attractions & Landmarks in El Paso, TX',
            description:
              'Explore El Paso\'s best attractions, museums, historic landmarks, scenic drives, and outdoor activities. Discover things to do in El Paso from art galleries to desert hiking and cultural sites.',
            url: 'https://elpaso.fyi/attractions',
            mainEntity: {
              '@type': 'City',
              name: 'El Paso',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'El Paso',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
            },
            hasPart: [
              {
                '@type': 'TouristAttraction',
                name: 'Museums & Cultural Sites',
                description: 'World-class art museums, history museums, and cultural institutions',
              },
              {
                '@type': 'TouristAttraction',
                name: 'Outdoor & Nature',
                description: 'Franklin Mountains, scenic drives, parks, and outdoor recreation',
              },
              {
                '@type': 'TouristAttraction',
                name: 'Historic Landmarks',
                description: 'Historic sites, monuments, and heritage locations',
              },
              {
                '@type': 'TouristAttraction',
                name: 'Family Attractions',
                description: 'Zoo, water parks, and family-friendly entertainment',
              },
            ],
          }),
        }}
        suppressHydrationWarning
      />
    </main>
  );
}
