'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin, Search, X } from 'lucide-react';
import { CATEGORY_LABELS, ZONE_ORDER, type Place, type PlaceCategory, type Zone } from '../content/places';

export default function EatBrowser({ places }: { places: Place[] }) {
  const [category, setCategory] = useState<PlaceCategory | 'all'>('all');
  const [zone, setZone] = useState<Zone | 'all'>('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => {
    const present = new Set(places.map((p) => p.category));
    return (Object.keys(CATEGORY_LABELS) as PlaceCategory[]).filter((c) => present.has(c));
  }, [places]);

  const zones = useMemo(() => {
    const present = new Set(places.map((p) => p.zone));
    return ZONE_ORDER.filter((z) => present.has(z));
  }, [places]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return places.filter((place) => {
      if (category !== 'all' && place.category !== category) return false;
      // "Citywide" places belong to every zone, since they have locations in most of them.
      if (zone !== 'all' && place.zone !== zone && place.zone !== 'Citywide') return false;
      if (!q) return true;
      return [place.name, place.kind, place.area, place.blurb, place.order ?? '', ...place.tags]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [places, category, zone, query]);

  const filtered = category !== 'all' || zone !== 'all' || query.trim() !== '';

  const reset = () => {
    setCategory('all');
    setZone('all');
    setQuery('');
  };

  return (
    <div>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search enchiladas, patio, brisket, downtown…"
          aria-label="Search places to eat and drink"
          className="w-full rounded-full border border-sand-line bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder-ink-faint transition-colors hover:border-ink/30 focus:border-sun"
        />
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setCategory('all')}
            aria-pressed={category === 'all'}
            className={category === 'all' ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
          >
            Everything
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={category === c ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
            >
              {CATEGORY_LABELS[c]} ({places.filter((p) => p.category === c).length})
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by part of town">
          <button
            type="button"
            onClick={() => setZone('all')}
            aria-pressed={zone === 'all'}
            className={zone === 'all' ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
          >
            All of El Paso
          </button>
          {zones.map((z) => (
            <button
              key={z}
              type="button"
              onClick={() => setZone(z)}
              aria-pressed={zone === z}
              className={zone === z ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
            >
              {z}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          {shown.length} {shown.length === 1 ? 'place' : 'places'}
        </p>
        {filtered && (
          <button type="button" onClick={reset} className="inline-flex items-center gap-1 text-xs font-semibold text-sun">
            <X className="h-3 w-3" /> Clear filters
          </button>
        )}
      </div>

      {shown.length === 0 ? (
        <div className="mt-6 rounded-card border border-dashed border-sand-line p-10 text-center">
          <p className="font-heading text-lg">Nothing matches that yet.</p>
          <p className="mt-2 text-sm text-ink-soft">
            We are adding places constantly. Tell us what we are missing and it may be here next week.
          </p>
        </div>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((place) => (
            <Link key={place.slug} href={`/eat/${place.slug}`} className="card-hover flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="chip">{place.kind}</span>
                <span className="font-mono text-xs text-ink-faint">{place.price}</span>
              </div>
              <h3 className="mt-4 text-xl leading-snug">{place.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
                <MapPin className="h-3.5 w-3.5 shrink-0" /> {place.area}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{place.blurb}</p>
              <span className="mt-5 text-sm font-semibold text-sun">Read more →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
