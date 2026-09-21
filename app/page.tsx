import Link from 'next/link';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import MountainRange from './components/MountainRange';
import SectionHeading from './components/SectionHeading';
import NewsletterForm from './components/NewsletterForm';
import { CANON } from './content/places';
import { DO_CANON } from './content/things-to-do';
import HappeningNext, { HappeningNextHeading } from './components/HappeningNext';
import ChangeLog from './components/ChangeLog';
import { PLACES } from './content/places';
import { THINGS } from './content/things-to-do';
import { NEIGHBORHOODS } from './content/neighborhoods';
import { NEWS, formatDate } from './content/news';
import { GUIDES } from './content/guides';
import { NAV, SITE } from './content/site';

// Regenerate hourly so the "happening next" countdown does not go stale.
export const revalidate = 3600;

const FACTS = [
  { value: '1659', label: 'Year the first mission went up in the valley' },
  { value: '27k', label: 'Acres of state park inside the city limits' },
  { value: '297', label: 'Days of sunshine in an average year' },
  { value: '2', label: 'Countries in the view from Scenic Drive' },
];

export default function HomePage() {
  const lead = NEWS[0];
  const rest = NEWS.slice(1, 4);

  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="relative overflow-hidden bg-dusk-fade text-white">
        <MountainRange
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-full text-white sm:h-56"
          showStar={false}
        />
        <div className="container-custom relative py-20 sm:py-28">
          <p className="eyebrow animate-fadeIn">El Paso, Texas · Est. 1659 · Elev. 3,762 ft</p>
          <h1 className="mt-5 max-w-3xl animate-rise text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            The Sun City,
            <br />
            <span className="text-sun">on purpose.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-white/75">
            Where to eat, what to do, what is going on this month, and how the neighborhoods
            actually fit together — from people who live at the bottom of the Franklins.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/eat" className="btn-primary">
              Start with the food <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/guides/first-48-hours-in-el-paso" className="btn-ghost-dark">
              First 48 hours here
            </Link>
          </div>

          <div className="mt-14 max-w-3xl rounded-card border border-white/15 bg-white/5 p-6">
            <HappeningNextHeading />
            <div className="mt-4">
              <HappeningNext limit={2} tone="dark" />
            </div>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-heading text-3xl font-bold text-gold">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* -------------------------------------------------------- sections */}
      <section className="border-b border-sand-line bg-sand-deep">
        <div className="container-custom grid gap-px py-0 sm:grid-cols-2 lg:grid-cols-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border-b border-sand-line/70 py-6 pr-4 last:border-0 sm:border-0 sm:py-8"
            >
              <span className="font-heading text-lg font-semibold text-ink group-hover:text-sun">
                {item.label}
              </span>
              <span className="mt-1 block text-sm text-ink-faint">{item.blurb}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ the canon */}
      <section className="container-custom py-20">
        <SectionHeading
          eyebrow="Start here"
          title="The Sun City canon"
          dek={`If you only get a handful of meals in El Paso, spend them on these. Every one of the ${PLACES.length} places we list is somewhere a local would take a visitor without thinking twice.`}
          href="/eat"
          linkLabel={`All ${PLACES.length} places to eat`}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CANON.map((place) => (
            <Link key={place.slug} href={`/eat/${place.slug}`} className="card-hover flex flex-col p-6">
              <span className="chip self-start">{place.kind}</span>
              <h3 className="mt-4 text-xl leading-snug">{place.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-faint">
                <MapPin className="h-3.5 w-3.5" /> {place.area}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{place.blurb}</p>
              <span className="mt-5 text-sm font-semibold text-sun">Read more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- things to do */}
      <section className="border-y border-sand-line bg-sand-deep py-20">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Get outside"
            title="Things worth doing"
            dek="A mountain range in the middle of town, missions older than the state, a new science center downtown, and a ballpark with the Franklins over the outfield wall."
            href="/do"
            linkLabel={`All ${THINGS.length} things to do`}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {DO_CANON.slice(0, 8).map((thing) => (
              <Link key={thing.slug} href={`/do/${thing.slug}`} className="card-hover flex flex-col p-6">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sage">{thing.kind}</span>
                <h3 className="mt-3 text-lg leading-snug">{thing.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{thing.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ news */}
      <section className="container-custom py-20">
        <SectionHeading
          eyebrow="The Dispatch"
          title="What is going on"
          dek="Seasonal reads, explainers, and what changed around town. For breaking news we point you at the local newsrooms doing that work."
          href="/news"
          linkLabel="All dispatches"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <Link href={`/news/${lead.slug}`} className="card-hover group flex flex-col p-8 lg:col-span-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="chip chip-active">{lead.category}</span>
              <span className="font-mono uppercase tracking-wider text-ink-faint">{formatDate(lead.date)}</span>
            </div>
            <h3 className="mt-5 text-3xl leading-tight group-hover:text-sun">{lead.title}</h3>
            <p className="mt-4 text-ink-soft">{lead.dek}</p>
            <span className="mt-6 text-sm font-semibold text-sun">Read the dispatch →</span>
          </Link>

          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="card-hover group flex-1 p-6">
                <div className="flex items-center gap-3 text-[0.7rem]">
                  <span className="chip">{post.category}</span>
                  <span className="font-mono uppercase tracking-wider text-ink-faint">{formatDate(post.date)}</span>
                </div>
                <h3 className="mt-3 text-lg leading-snug group-hover:text-sun">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- events */}
      <section className="border-y border-sand-line bg-sand-deep py-20">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The calendar"
            title="Happening next in El Paso"
            dek="Dates we have confirmed with the organizers. This list moves forward on its own as the year does."
            href="/events"
            linkLabel="Full calendar"
          />
          <HappeningNext limit={4} />
        </div>
      </section>

      {/* --------------------------------------------------------- changes */}
      <section className="container-custom py-20">
        <SectionHeading
          eyebrow="Openings & closings"
          title="What changed around town"
          dek="The question locals ask more than any other. When a place closes it comes off our lists and lands here, with the source that confirmed it."
          href="/news"
          linkLabel="The Dispatch"
        />
        <ChangeLog limit={4} />
      </section>

      {/* ---------------------------------------------------------- guides */}
      <section className="container-custom py-20">
        <SectionHeading
          eyebrow="Follow the route"
          title="Itineraries you can actually use"
          href="/guides"
          linkLabel="All guides"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card-hover flex flex-col p-6">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sun">{guide.length}</span>
              <h3 className="mt-3 text-lg leading-snug">{guide.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{guide.dek}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- neighborhoods */}
      <section className="border-t border-sand-line bg-sand-deep py-20">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Know the map"
            title="El Paso is long. Here is how it breaks down."
            dek="Twenty-five miles of city stretched along the base of a mountain range, with two more countries' worth of context in the view."
            href="/neighborhoods"
            linkLabel="All neighborhoods"
          />
          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="chip bg-white hover:border-sun hover:text-sun"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ newsletter */}
      <section id="newsletter" className="container-custom scroll-mt-24 py-20">
        <div className="card mx-auto max-w-2xl p-8 text-center sm:p-12">
          <p className="flex items-center justify-center gap-2 text-sun">
            <Mail className="h-4 w-4" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em]">The Weekend Drop</span>
          </p>
          <h2 className="mt-4 text-3xl">What is worth doing this weekend, once a week.</h2>
          <p className="mt-3 text-ink-soft">
            One email. Where to eat, what is open, what is happening. No filler.
          </p>
          <div className="mx-auto mt-8 max-w-md text-left">
            <NewsletterForm />
          </div>
          <p className="mt-6 text-xs text-ink-faint">
            Got a correction or a place we are missing? {' '}
            <a href={`mailto:${SITE.email}`} className="text-sun underline underline-offset-4">
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
