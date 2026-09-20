import MountainRange from './MountainRange';

export default function PageHero({
  eyebrow,
  title,
  dek,
  children,
}: {
  eyebrow: string;
  title: string;
  dek?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-sand-line bg-sun-fade">
      <MountainRange className="pointer-events-none absolute bottom-0 left-0 h-28 w-full text-sun" showStar={false} />
      <div className="container-custom relative py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        {dek && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{dek}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
