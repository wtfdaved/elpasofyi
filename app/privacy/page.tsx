import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import Prose from '../components/Prose';
import { SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What elpaso.fyi collects, what it does not, and who processes it.',
  alternates: { canonical: '/privacy' },
};

const UPDATED = 'September 20, 2026';

const BODY = [
  `${SITE.name} is a reading site. You can browse every page here without giving us anything, and we do not ask you to create an account.`,
  '## What we collect',
  '- **Your email address, only if you subscribe** to The Weekend Drop newsletter. It is passed to our newsletter provider and used to send you that newsletter.',
  '- **Anything you choose to email us** — a correction, a tip, a listing request. We keep it long enough to act on it.',
  '- **Aggregate, privacy-friendly analytics** about page visits, through Vercel Analytics. These are counts of page views and referrers, not profiles of individuals.',
  '## What we do not do',
  '- We do not sell or rent your information.',
  '- We do not run advertising trackers or third-party ad networks on this site.',
  '- We do not require personal information to read anything here.',
  '## Third parties',
  'Two services see data on our behalf: our newsletter provider, which stores subscriber email addresses and handles delivery, and our hosting and analytics provider, which serves the site and reports aggregate traffic. Each has its own privacy policy, and each processes data under our instructions.',
  '## Your choices',
  'Every newsletter we send includes an unsubscribe link, and unsubscribing removes you from the list. You can also email us to be removed, to ask what we hold about you, or to have it deleted.',
  '## Children',
  'This site is not directed at children under 13, and we do not knowingly collect information from them.',
  '## Links off the site',
  'We link to restaurants, parks, venues, newsrooms and organizers. Once you follow one of those links you are on their site, under their policies, not ours.',
  '## Changes',
  'If this policy changes in a way that matters, we will update the date at the top of this page.',
  `## Contact`,
  `Questions about any of this: ${SITE.email}.`,
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" dek={`Last updated ${UPDATED}.`} />
      <div className="container-custom py-14">
        <Prose body={BODY} />
      </div>
    </>
  );
}
