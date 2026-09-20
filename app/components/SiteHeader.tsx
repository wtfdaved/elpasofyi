'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV } from '../content/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Any navigation closes the mobile sheet.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-line bg-sand/95 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-ink">
          elpaso<span className="text-sun">.</span>fyi
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href) ? 'text-sun' : 'text-ink-soft hover:text-sun'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/#newsletter" className="btn-primary px-5 py-2 text-xs">
            The Weekend Drop
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-sand-line p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-sand-line bg-sand lg:hidden">
          <nav className="container-custom flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col gap-0.5 border-b border-sand-line/60 py-3 last:border-0"
              >
                <span className={`font-heading text-base font-semibold ${isActive(item.href) ? 'text-sun' : 'text-ink'}`}>
                  {item.label}
                </span>
                <span className="text-xs text-ink-faint">{item.blurb}</span>
              </Link>
            ))}
            <Link href="/#newsletter" className="btn-primary mt-4 self-start px-5 py-2 text-xs">
              The Weekend Drop
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
