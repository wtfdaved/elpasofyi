import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { NEWS_SOURCES, SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'About elpaso.fyi',
  description:
    'Who we are, what we publish, and the editorial rules behind every listing on this independent guide to El Paso, Texas.',
  alternates: { canonical: '/about' },
};

const RULES = [
  {
    title: 'No invented ratings or reviews',
    body: 'There are no star counts on this site, because we are not aggregating other people’s opinions and pretending they are ours. A place is either on the list because we would send a friend there, or it is not on the list.',
  },
  {
    title: 'No printed hours or prices',
    body: 'Hours change, kitchens close early, places take a week off in August. A wrong hour sends someone on a 20-minute drive for nothing. We describe what a place is and tell you to confirm the details.',
  },
  {
    title: 'When we are not sure, we leave it out',
    body: 'If we cannot confirm an address, or whether a place is still open, it does not go up. Blank beats wrong.',
  },
  {
    title: 'Events by window, not by date',
    body: 'Annual events get listed by the window they usually fall in, with a link to the organizer for this year’s dates. We would rather point you at the source than be confidently out of date.',
  },
  {
    title: 'We are a guide, not a wire service',
    body: 'The Dispatch carries our own writing — seasonal reads, explainers, what changed around town. For breaking news we point you at the El Paso newsrooms doing that work.',
  },
  {
    title: 'Corrections get published',
    body: 'If we get something wrong, we fix it and say that we fixed it. Email us and it gets handled.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An independent guide to El Paso"
        dek="Built by people who live at the bottom of the Franklins, for anyone who wants more than the first page of search results — whether you moved here last month or you were born at Providence."
      />

      <div className="container-custom py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-prose">
            <div className="prose-local">
              <p>
                El Paso gets written about badly. National coverage arrives for a news cycle and
                leaves. Travel sites recycle the same five attractions. Meanwhile the actual city —
                a 700,000-person border metro with a mountain range through the middle of it, the
                oldest continuously settled ground in Texas, and a food culture that exists nowhere
                else — goes mostly undescribed.
              </p>
              <p>
                This site is the correction. Everything here is something we would put a friend onto:
                the Tex-Mex rooms that have been doing it since the twenties, the trailheads twenty
                minutes from downtown, the free museums, the annual traditions that actually organize
                the year, and the neighborhoods that explain why the city is shaped the way it is.
              </p>
              <h2>How this gets built</h2>
              <p>
                This is a living site, not a published guidebook. Listings get added and revised as
                we go, and The Dispatch carries the running commentary. The goal is a page that is
                right this week — not one that was right the month it launched.
              </p>
              <p>
                The single most useful thing you can do is tell us when something is wrong or
                missing. Business owners especially: if your listing is out of date, or you should be
                on here and are not, email us.
              </p>
            </div>

            <h2 className="mt-12 text-2xl">The editorial rules</h2>
            <div className="mt-6 space-y-5">
              {RULES.map((rule) => (
                <div key={rule.title} className="card p-6">
                  <h3 className="font-heading text-lg">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{rule.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <p className="flex items-center gap-2 text-sun">
                <Mail className="h-4 w-4" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em]">Get in touch</span>
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 block font-heading text-lg text-ink hover:text-sun"
              >
                {SITE.email}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Corrections, additions, tips, or a place we are embarrassingly missing.
              </p>
            </div>

            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
                Local newsrooms we read
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {NEWS_SOURCES.slice(0, 5).map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-sun">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link href="/news" className="mt-4 inline-block text-sm font-semibold text-sun">
                The Dispatch →
              </Link>
            </div>

            <div className="card p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">Last full review</p>
              <p className="mt-2 text-sm text-ink-soft">
                Listings were last swept end to end on{' '}
                {new Date(`${SITE.lastReviewed}T12:00:00Z`).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
                .
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
