import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import Prose from '../components/Prose';
import { SITE } from '../content/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms for using elpaso.fyi, an independent guide to El Paso, Texas.',
  alternates: { canonical: '/terms' },
};

const UPDATED = 'September 20, 2026';

const BODY = [
  `By using ${SITE.name}, you agree to what follows. It is short on purpose.`,
  '## What this site is',
  `${SITE.name} is an independent editorial guide to El Paso, Texas. We are not affiliated with the City of El Paso, El Paso County, Visit El Paso, the State of Texas, or any business listed here.`,
  '## Accuracy, and its limits',
  'We work hard to keep listings right, and we leave things out rather than guess. Even so, restaurants close, parks change their hours, fees go up, and events move. Nothing here is a guarantee. Confirm details with the business, park or venue before you make a trip, and use your own judgment — especially for anything outdoors, where heat, flash flooding and terrain are real hazards.',
  '## No paid placement',
  'Listings are editorial. A business cannot buy its way onto this site, and nobody has. If that ever changes — sponsorship, affiliate links, anything of the kind — it will be disclosed clearly and on the page where it applies.',
  '## Our content',
  'The writing, layout and original graphics on this site belong to us. You are welcome to quote a passage with attribution and a link. Republishing pages wholesale, or scraping the site to rebuild it elsewhere, is not permitted.',
  '## What you send us',
  'If you email us a correction, tip or listing suggestion, you are giving us permission to use it on the site. Do not send us anything confidential or anything you do not have the right to share.',
  '## Links off the site',
  'We link out constantly — to newsrooms, parks, organizers and businesses. We do not control those sites and are not responsible for them.',
  '## Liability',
  'This site is provided as is. To the fullest extent the law allows, we are not liable for losses arising from your use of it, including trips that did not go the way the page suggested.',
  '## Changes',
  'We may update these terms. Continuing to use the site after an update means you accept it.',
  '## Contact',
  `Anything here that needs explaining: ${SITE.email}.`,
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" dek={`Last updated ${UPDATED}.`} />
      <div className="container-custom py-14">
        <Prose body={BODY} />
      </div>
    </>
  );
}
