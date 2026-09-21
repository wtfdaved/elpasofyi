/** Small helpers for outbound links. */

/** A maps search URL that works on desktop and both mobile platforms. */
export function mapsUrl(name: string, address?: string): string {
  const query = [name, address, 'El Paso, TX'].filter(Boolean).join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** "elemirestaurant.com" from a full URL, for link labels. */
export function prettyHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/** "September 21, 2026" from an ISO date, without timezone drift. */
export function longDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
