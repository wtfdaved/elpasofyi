import Link from 'next/link';

export default function SectionHeading({
  eyebrow,
  title,
  dek,
  href,
  linkLabel = 'See all',
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl sm:text-4xl">{title}</h2>
        {dek && <p className="mt-3 max-w-2xl text-ink-soft">{dek}</p>}
      </div>
      {href && (
        <Link href={href} className="text-sm font-semibold text-sun hover:text-sun-deep">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
