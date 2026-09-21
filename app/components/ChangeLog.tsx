import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { CHANGE_LABELS, RECENT_CHANGES, type Change } from '../content/changes';

const TONE: Record<Change['kind'], string> = {
  opened: 'border-sage bg-sage/15 text-ink',
  closed: 'border-chile bg-chile/10 text-ink',
  moved: 'border-gold bg-gold/15 text-ink',
  coming: 'border-sun bg-sun/10 text-ink',
};

/** Openings, closings and moves — the question locals ask most often. */
export default function ChangeLog({ limit }: { limit?: number }) {
  const rows = limit ? RECENT_CHANGES.slice(0, limit) : RECENT_CHANGES;

  return (
    <ul className="divide-y divide-sand-line border-y border-sand-line">
      {rows.map((change) => (
        <li key={`${change.kind}-${change.name}`} className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-6">
          <div className="flex shrink-0 items-start gap-3 sm:w-52">
            <span className={`chip ${TONE[change.kind]}`}>{CHANGE_LABELS[change.kind]}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">{change.when}</span>
          </div>
          <div>
            <h3 className="text-lg leading-snug">
              {change.href ? (
                <Link href={change.href} className="hover:text-sun">
                  {change.name}
                </Link>
              ) : (
                change.name
              )}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft">{change.what}</p>
            {change.source && (
              <a
                href={change.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-sun hover:text-sun-deep"
              >
                {change.source.label} <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
