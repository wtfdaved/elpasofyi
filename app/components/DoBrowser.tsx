'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin, Search, X } from 'lucide-react';
import { ZONE_ORDER, type Zone } from '../content/places';
import { DO_LABELS, type DoCategory, type Thing } from '../content/things-to-do';

export default function DoBrowser({ things }: { things: Thing[] }) {
  const [category, setCategory] = useState<DoCategory | 'all'>('all');
  const [zone, setZone] = useState<Zone | 'all'>('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => {
    const present = new Set(things.map((t) => t.category));
    return (Object.keys(DO_LABELS) as DoCategory[]).filter((c) => present.has(c));
  }, [things]);

  const zones = useMemo(() => {
    const present = new Set(things.map((t) => t.zone));
    return ZONE_ORDER.filter((z) => present.has(z));
  }, [things]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return things.filter((thing) => {
      if (category !== 'all' && thing.category !== category) return false;
      if (zone !== 'all' && thing.zone !== zone && thing.zone !== 'Citywide') return false;
      if (!q) return true;
      return [thing.name, thing.kind, thing.area, thing.blurb, ...thing.tags]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [things, category, zone, query]);

  const filtered = category !== 'all' || zone !== 'all' || query.trim() !== '';

  return (
    <div>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search hiking, free, murals, kids, day trip…"
          aria-label="Search things to do"
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
              {DO_LABELS[c]} ({things.filter((t) => t.category === c).length})
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
            Everywhere
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
          {shown.length} {shown.length === 1 ? 'thing to do' : 'things to do'}
        </p>
        {filtered && (
          <button
            type="button"
            onClick={() => {
              setCategory('all');
              setZone('all');
              setQuery('');
            }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sun"
          >
            <X className="h-3 w-3" /> Clear filters
          </button>
        )}
      </div>

      {shown.length === 0 ? (
        <div className="mt-6 rounded-card border border-dashed border-sand-line p-10 text-center">
          <p className="font-heading text-lg">Nothing matches that yet.</p>
          <p className="mt-2 text-sm text-ink-soft">Try a broader search, or clear the filters.</p>
        </div>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((thing) => (
            <Link key={thing.slug} href={`/do/${thing.slug}`} className="card-hover flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="chip">{thing.kind}</span>
                {thing.cost && (
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-sage">{thing.cost}</span>
                )}
              </div>
              <h3 className="mt-4 text-xl leading-snug">{thing.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
                <MapPin className="h-3.5 w-3.5 shrink-0" /> {thing.area}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{thing.blurb}</p>
              <span className="mt-5 text-sm font-semibold text-sun">Read more →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
