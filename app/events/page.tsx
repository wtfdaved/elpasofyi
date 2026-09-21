import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import HappeningNext from '../components/HappeningNext';
import { ANNUAL_EVENTS, EVENTS_VERIFIED, eventsByMonth, formatEventDate, upcomingEvents } from '../content/events';
import { longDate } from '../lib/links';
import { NEWS_SOURCES, SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'El Paso Events — The Annual Calendar',
  description:
    'The El Paso events that happen every year: the Sun Bowl, Plaza Classic Film Festival, Viva! El Paso, Chalk the Block, Amigo Airsho, Balloonfest and more, listed by season.',
  alternates: { canonical: '/events' },
};

// Regenerate hourly so confirmed dates drop off the "next up" list as they pass.
export const revalidate = 3600;

export default function EventsPage() {
  const grouped = eventsByMonth();
  const upcomingCount = upcomingEvents().length;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'El Paso Annual Events Calendar',
    url: `${SITE.url}/events`,
    description: 'Recurring annual events in El Paso, Texas, listed by the window they usually fall in.',
  };

  const calendars = NEWS_SOURCES.filter((s) => s.name.includes('Visit El Paso') || s.name.includes('El Paso Live'));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Events"
        title="What El Paso does every year"
        dek="This is the annual calendar — the traditions the city organizes itself around. We list the window each one usually falls in rather than a date, because dates move and a wrong one wastes your weekend."
      >
        <div className="flex flex-wrap gap-3">
          {calendars.map((c) => (
            <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs">
              {c.name} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </PageHero>

      <div className="container-custom py-14">
        {upcomingCount > 0 && (
          <section className="mb-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow">Confirmed dates</p>
                <h2 className="mt-2 text-3xl">Coming up next</h2>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Checked {longDate(EVENTS_VERIFIED)}
              </p>
            </div>
            <HappeningNext limit={6} />
          </section>
        )}

        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          {ANNUAL_EVENTS.length} recurring events, all year
        </p>

        <div className="mt-8 space-y-14">
          {grouped.map((group) => (
            <section key={group.month}>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl">{group.month}</h2>
                <span className="h-px flex-1 bg-sand-line" />
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {group.events.map((event) => (
                  <article key={event.slug} className="card flex flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sun">
                        {event.window}
                      </span>
                      {event.marquee && (
                        <span className="chip border-gold bg-gold/15 text-ink">Marquee</span>
                      )}
                    </div>
                    <h3 className="mt-3 text-xl leading-snug">{event.name}</h3>
                    <p className="mt-1 text-sm text-ink-faint">{event.where}</p>
                    {event.next && (
                      <p className="mt-3 inline-flex items-center rounded-full bg-sun/10 px-3 py-1 text-xs font-semibold text-sun-deep">
                        Confirmed: {formatEventDate(event.next)}
                        {event.next.detail ? ` · ${event.next.detail}` : ''}
                      </p>
                    )}
                    {!event.next && event.latest && (
                      <p className="mt-3 text-xs leading-relaxed text-ink-faint">{event.latest}</p>
                    )}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{event.what}</p>
                    {event.why && (
                      <p className="mt-3 border-l-2 border-sun pl-3 text-sm italic leading-relaxed text-ink-soft">
                        {event.why}
                      </p>
                    )}
                    {event.source && (
                      <a
                        href={event.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sun hover:text-sun-deep"
                      >
                        Confirm dates at {event.source.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-card border border-sand-line bg-white p-6 text-sm leading-relaxed text-ink-soft">
          <strong className="font-semibold text-ink">Running an event in El Paso?</strong> Send the
          details to{' '}
          <a href={`mailto:${SITE.email}`} className="text-sun underline underline-offset-4">
            {SITE.email}
          </a>{' '}
          and we will look at adding it. We list recurring events here; one-off happenings go in The
          Dispatch.
        </div>
      </div>
    </>
  );
}
