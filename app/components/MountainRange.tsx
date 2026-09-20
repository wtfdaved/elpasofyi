/**
 * Decorative Franklin Mountains skyline. Purely presentational — the ridge
 * line reads as the silhouette you see from anywhere on the East Side,
 * with the Star on the Mountain lit above the city.
 */
export default function MountainRange({
  className = '',
  showStar = true,
}: {
  className?: string;
  showStar?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M0 220 L0 168 L150 120 L280 158 L430 66 L560 140 L700 96 L860 152 L1000 104 L1150 158 L1290 122 L1440 164 L1440 220 Z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M0 220 L0 196 L170 164 L330 198 L500 146 L660 192 L820 158 L980 200 L1140 168 L1300 202 L1440 180 L1440 220 Z"
        fill="currentColor"
        opacity="0.45"
      />
      {showStar && (
        <path
          d="M430 30 L437 47 L455 48 L441 59 L446 77 L430 67 L414 77 L419 59 L405 48 L423 47 Z"
          fill="#E0A43B"
        />
      )}
    </svg>
  );
}
