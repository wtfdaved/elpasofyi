# elpaso.fyi

An independent, multi-page guide to El Paso, Texas — where to eat and drink, what to do,
what is going on around town, and how the neighborhoods fit together.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

Optional environment variables (newsletter signup is a no-op without them):

| Variable | Purpose |
| --- | --- |
| `BEEHIIV_API_KEY` | Beehiiv API key for The Weekend Drop signups |
| `BEEHIIV_PUBLICATION_ID` | Beehiiv publication the signups land in |

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage — hero, the canon, things to do, latest dispatch, calendar, guides, neighborhoods, newsletter |
| `/eat`, `/eat/[slug]` | Restaurants, bars, breweries, bakeries and coffee, filterable by category |
| `/do`, `/do/[slug]` | Outdoors, history, museums, sports and day trips |
| `/events` | The recurring annual calendar, grouped by month |
| `/news`, `/news/[slug]` | The Dispatch, plus a directory of local newsrooms |
| `/guides`, `/guides/[slug]` | Step-by-step itineraries |
| `/neighborhoods`, `/neighborhoods/[slug]` | Neighborhood profiles |
| `/stay` | Where to stay, downtown-weighted |
| `/about` | Who we are and the editorial rules |
| `/privacy`, `/terms` | Legal |

Old URLs (`/food`, `/attractions`, `/shopping`, `/accommodations`, `/cameras`) redirect to their
replacements — see `next.config.ts`.

## Updating content

**All site content lives in `app/content/`.** No CMS, no database — edit a TypeScript file,
commit, deploy. Every file is typed, so a missing field is a build error rather than a broken page.

| File | Holds |
| --- | --- |
| `site.ts` | Site name, nav, social links, local newsroom directory, last-reviewed date |
| `places.ts` | Everything on `/eat`. Set `canon: true` to surface a place on the homepage |
| `things-to-do.ts` | Everything on `/do`. `canon: true` surfaces it on the homepage |
| `events.ts` | The annual calendar. `marquee: true` surfaces it on the homepage |
| `news.ts` | The Dispatch. Newest first is handled by sorting, so just append |
| `changes.ts` | Openings, closings and moves — the tracker on `/news` and the homepage |
| `guides.ts` | Itineraries and their stops |
| `neighborhoods.ts` | Neighborhood profiles |
| `stays.ts` | Hotels on `/stay` |

### The three fields that keep the site honest

- **`zone`** on a place, a thing to do and a neighborhood is what ties them together. Set it and the
  listing shows up in the area filter and on that neighborhood's page automatically.
- **`next`** on an event is a date we have actually confirmed (`{ start, end?, detail? }`). The
  homepage and `/events` compute "happening next" from it and drop editions once they pass, so the
  calendar ages correctly without an edit. `window` stays vague on purpose; `next` is the promise.
- **`PLACES_VERIFIED` / `THINGS_VERIFIED` / `EVENTS_VERIFIED`** are printed on the pages. Update the
  date when you actually re-check the listings, not when you edit the file.

Pages that render dates relative to today (`/` and `/events`) set `export const revalidate = 3600`,
so a statically built site still shows an accurate countdown.

### When a place closes

Take it out of `places.ts` and add a row to `changes.ts` with the source that confirmed it. That
keeps the directory trustworthy and gives readers the history, which is the single most requested
thing locals ask for.

Dispatch bodies are an array of strings. `## ` starts a heading, `- ` starts a list item,
`**bold**` works inline, and anything else is a paragraph. Routing, sitemap entries and
structured data are generated from these files automatically — adding an entry is enough.

## Editorial rules

These are load-bearing, not decoration. They are why the site can be trusted:

1. **No invented ratings or reviews.** A place is on the list or it is not.
2. **No printed hours or prices.** They change; a wrong hour wastes someone's drive.
3. **When unsure, leave it out.** Blank beats wrong — that includes addresses.
4. **Events by window, not by date**, with a link to the organizer for this year's dates.
5. **We are a guide, not a wire service.** Breaking news links out to local newsrooms.
6. **Corrections get published** and labeled as corrections.

The same rules are stated publicly on `/about`, so changing them here means changing them there.
