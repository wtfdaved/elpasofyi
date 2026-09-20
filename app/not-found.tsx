import Link from 'next/link';
import MountainRange from './components/MountainRange';
import { NAV } from './content/site';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-dusk-fade text-white">
      <MountainRange className="pointer-events-none absolute bottom-0 left-0 h-40 w-full text-white" />
      <div className="container-custom relative py-24 sm:py-32">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
          Looks like you took a wrong turn at the Franklins.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/70">
          That page is not here. The rest of the city still is.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to the homepage
          </Link>
          <Link href="/eat" className="btn-ghost-dark">
            Go eat something instead
          </Link>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-3">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-white/70 hover:text-sun">
                {item.label} <span className="text-white/40">— {item.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
