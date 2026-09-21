/**
 * Openings, closings and moves — the thing locals actually ask about.
 *
 * Every row here is something we confirmed, with the source that confirmed it.
 * When a place closes it comes out of places.ts and lands here, so the
 * directory stays honest and the history stays visible.
 */

export const CHANGES_VERIFIED = '2026-09-21';

export type ChangeKind = 'opened' | 'closed' | 'moved' | 'coming';

export interface Change {
  kind: ChangeKind;
  name: string;
  /** Display date: "August 2024", "2021", "Fall 2026". */
  when: string;
  /** Sort key, ISO. Approximate is fine — it only orders the list. */
  sortDate: string;
  what: string;
  /** Internal link, when the place is still on the site. */
  href?: string;
  source?: { label: string; url: string };
}

export const CHANGE_LABELS: Record<ChangeKind, string> = {
  opened: 'Opened',
  closed: 'Closed',
  moved: 'Moved',
  coming: 'Coming',
};

export const CHANGES: Change[] = [
  {
    kind: 'opened',
    name: 'El Paso Mexican American Cultural Center',
    when: 'March 2025',
    sortDate: '2025-03-22',
    what:
      'A three-story, $15 million cultural center opened at the Main Library downtown after years of community pressure, with exhibits, performance space and the Día de los Muertos desfile attached to it.',
    href: '/do/mexican-american-cultural-center',
    source: { label: 'El Paso Matters', url: 'https://elpasomatters.org/2025/03/19/macc-el-paso-mexican-american-cultural-center-opens/' },
  },
  {
    kind: 'opened',
    name: 'La Nube STEAM Discovery Center',
    when: 'August 2024',
    sortDate: '2024-08-10',
    what:
      'El Paso’s first children’s museum and science center opened downtown in a 70,000-square-foot cloud-shaped building, and has since drawn hundreds of thousands of visitors and a global children’s museum award.',
    href: '/do/la-nube',
    source: { label: 'La Nube', url: 'https://la-nube.org' },
  },
  {
    kind: 'moved',
    name: 'Elemi',
    when: '2024',
    sortDate: '2024-02-11',
    what:
      'The James Beard-recognized masa restaurant left its downtown room on N Kansas and reopened in a larger space at 13500 Eastlake Blvd in far east El Paso. A sister taquería later opened on Paseo del Norte on the West Side.',
    href: '/eat/elemi',
    source: { label: 'El Paso Times', url: 'https://www.elpasotimes.com' },
  },
  {
    kind: 'closed',
    name: 'Tabla',
    when: 'Closed',
    sortDate: '2024-01-01',
    what:
      'The Union Plaza tapas room at 115 Durango is gone. The Tiki Room now occupies that address, so the block is still worth walking to.',
    href: '/eat/the-tiki-room',
  },
  {
    kind: 'closed',
    name: 'Ode Brewing Co.',
    when: 'Closed',
    sortDate: '2024-06-01',
    what: 'The N Mesa brewery and kitchen, one of the first of the modern El Paso brewery wave, is listed as closed.',
  },
  {
    kind: 'closed',
    name: 'H&H Car Wash and Coffee Shop',
    when: '2021',
    sortDate: '2021-01-01',
    what:
      'The James Beard America’s Classics winner on E Yandell — a coffee shop attached to a hand car wash, run by Maynard Haddad for roughly 63 years — closed and has not reopened. It remains the most-missed room in the city.',
    source: { label: 'Texas Monthly', url: 'https://www.texasmonthly.com/food/farewell-el-paso-hh-coffee-shop-car-wash/' },
  },
  {
    kind: 'coming',
    name: 'Wyler Aerial Tramway',
    when: 'Phase 1 targeted for fall 2026',
    sortDate: '2026-10-01',
    what:
      'The gondola to Ranger Peak has been closed since 2018. Roughly $27 million in state funding is rebuilding the site — parking, access and restrooms first, the tramway itself in a later phase that still needs fundraising.',
    href: '/do/wyler-aerial-tramway',
    source: { label: 'Texas Parks & Wildlife', url: 'https://tpwd.texas.gov/state-parks/wyler-aerial-tramway/updates' },
  },
];

export const RECENT_CHANGES = [...CHANGES].sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1));
