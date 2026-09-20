import Link from 'next/link';
import { Instagram, Music2, Mail } from 'lucide-react';
import { NAV, SECONDARY_NAV, SITE } from '../content/site';
import MountainRange from './MountainRange';

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-dusk text-white">
      <MountainRange className="absolute -top-px left-0 h-16 w-full -translate-y-full text-dusk" showStar={false} />

      <div className="container-custom py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl font-bold">
              elpaso<span className="text-sun">.</span>fyi
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              An independent guide to El Paso, Texas. Written here, updated constantly, and built
              for people who want more than the first page of search results.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-sun">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/70 hover:text-sun">
                <Music2 className="h-5 w-5" />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email" className="text-white/70 hover:text-sun">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sun">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-sun">More</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SECONDARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="text-white/75 hover:text-white">
                  Submit a correction
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Made in the Sun City.</p>
          <p>
            Not affiliated with the City of El Paso. Hours and details change — always confirm with the
            business before you go.
          </p>
        </div>
      </div>
    </footer>
  );
}
