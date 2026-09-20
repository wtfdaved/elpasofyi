'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CATEGORY_LABELS, type Place, type PlaceCategory } from '../content/places';

export default function EatBrowser({ places }: { places: Place[] }) {
  const [active, setActive] = useState<PlaceCategory | 'all'>('all');

  const categories = useMemo(() => {
    const present = new Set(places.map((p) => p.category));
    return (Object.keys(CATEGORY_LABELS) as PlaceCategory[]).filter((c) => present.has(c));
  }, [places]);

  const shown = active === 'all' ? places : places.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          onClick={() => setActive('all')}
          aria-pressed={active === 'all'}
          className={active === 'all' ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
        >
          Everything ({places.length})
        </button>
        {categories.map((c) => {
          const count = places.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={active === c ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
            >
              {CATEGORY_LABELS[c]} ({count})
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink-faint">
        {shown.length} {shown.length === 1 ? 'place' : 'places'}
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((place) => (
          <Link key={place.slug} href={`/eat/${place.slug}`} className="card-hover flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="chip">{place.kind}</span>
              <span className="font-mono text-xs text-ink-faint">{place.price}</span>
            </div>
            <h3 className="mt-4 text-xl leading-snug">{place.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
              <MapPin className="h-3.5 w-3.5" /> {place.area}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{place.blurb}</p>
            <span className="mt-5 text-sm font-semibold text-sun">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
