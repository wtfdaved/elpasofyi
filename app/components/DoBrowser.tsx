'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { DO_LABELS, type DoCategory, type Thing } from '../content/things-to-do';

export default function DoBrowser({ things }: { things: Thing[] }) {
  const [active, setActive] = useState<DoCategory | 'all'>('all');

  const categories = useMemo(() => {
    const present = new Set(things.map((t) => t.category));
    return (Object.keys(DO_LABELS) as DoCategory[]).filter((c) => present.has(c));
  }, [things]);

  const shown = active === 'all' ? things : things.filter((t) => t.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          onClick={() => setActive('all')}
          aria-pressed={active === 'all'}
          className={active === 'all' ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
        >
          Everything ({things.length})
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={active === c ? 'chip chip-active' : 'chip hover:border-sun hover:text-sun'}
          >
            {DO_LABELS[c]} ({things.filter((t) => t.category === c).length})
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((thing) => (
          <Link key={thing.slug} href={`/do/${thing.slug}`} className="card-hover flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="chip">{thing.kind}</span>
              {thing.cost && <span className="font-mono text-[0.65rem] uppercase tracking-wider text-sage">{thing.cost}</span>}
            </div>
            <h3 className="mt-4 text-xl leading-snug">{thing.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
              <MapPin className="h-3.5 w-3.5" /> {thing.area}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{thing.blurb}</p>
            <span className="mt-5 text-sm font-semibold text-sun">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
