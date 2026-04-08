import { LucideIcon } from 'lucide-react';

interface ComingSoonSectionProps {
  icon: LucideIcon;
  heading?: string;
  subheading?: string;
}

export function ComingSoonSection({
  icon: Icon,
  heading = 'Coming Soon',
  subheading = 'We\'re curating the best of El Paso. Stay tuned!',
}: ComingSoonSectionProps) {
  return (
    <div className="w-full bg-light-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="min-h-96 flex flex-col items-center justify-center text-center">
          <Icon className="w-16 h-16 text-sunset-orange mb-6 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-3">
            {heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-md">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
}
