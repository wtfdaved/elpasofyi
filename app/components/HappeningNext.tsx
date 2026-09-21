import { CalendarDays, ExternalLink } from 'lucide-react';
import { formatEventDate, upcomingEvents } from '../content/events';

function countdown(daysAway: number, happeningNow: boolean): string {
  if (happeningNow) return 'Happening now';
  if (daysAway === 0) return 'Today';
  if (daysAway === 1) return 'Tomorrow';
  if (daysAway < 21) return `In ${daysAway} days`;
  if (daysAway < 70) return `In ${Math.round(daysAway / 7)} weeks`;
  return `In ${Math.round(daysAway / 30)} months`;
}

/**
 * The next confirmed events on the calendar. Recomputed from the current date,
 * so it moves forward on its own as dates pass.
 */
export default function HappeningNext({ limit = 4, tone = 'light' }: { limit?: number; tone?: 'light' | 'dark' }) {
  const upcoming = upcomingEvents().slice(0, limit);
  if (upcoming.length === 0) return null;

  const dark = tone === 'dark';

  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${dark ? '' : ''}`}>
      {upcoming.map(({ event, date, daysAway, happeningNow }) => (
        <li
          key={event.slug}
          className={
            dark
              ? 'rounded-card border border-white/15 bg-white/5 p-5'
              : 'card p-5'
          }
        >
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={
                happeningNow || daysAway < 14
                  ? 'chip chip-active'
                  : dark
                    ? 'chip border-white/20 bg-transparent text-white/70'
                    : 'chip'
              }
            >
              {countdown(daysAway, happeningNow)}
            </span>
            <span
              className={`font-mono text-[0.7rem] uppercase tracking-widest ${dark ? 'text-white/60' : 'text-ink-faint'}`}
            >
              {formatEventDate(date)}
            </span>
          </div>

          <h3 className={`mt-3 text-lg leading-snug ${dark ? 'text-white' : ''}`}>{event.name}</h3>
          <p className={`mt-1 text-sm ${dark ? 'text-white/60' : 'text-ink-faint'}`}>{event.where}</p>
          {date.detail && (
            <p className={`mt-2 text-sm ${dark ? 'text-white/75' : 'text-ink-soft'}`}>{date.detail}</p>
          )}

          {event.source && (
            <a
              href={event.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sun hover:text-sun-deep"
            >
              {event.source.label} <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export function HappeningNextHeading({ className = '' }: { className?: string }) {
  return (
    <p className={`flex items-center gap-2 ${className}`}>
      <CalendarDays className="h-4 w-4 text-sun" />
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sun">Happening next</span>
    </p>
  );
}
