/**
 * Sodiq Olatunde monogram — an "S" routed as a signal trace between two nodes.
 * `framed` wraps it in the indigo adire tile (used for icons/standalone use).
 * The letterform inherits `currentColor`; the top node is the ochre "live" accent.
 */
export function Logo({
  size = 30,
  framed = false,
  className,
}: {
  size?: number;
  framed?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label="Sodiq Olatunde"
    >
      {framed && (
        <>
          <rect
            x="0.75"
            y="0.75"
            width="38.5"
            height="38.5"
            rx="10"
            fill="var(--color-base)"
            stroke="var(--color-line)"
            strokeWidth="1.5"
          />
          <rect
            x="6"
            y="6"
            width="28"
            height="28"
            rx="7"
            fill="none"
            stroke="var(--color-line)"
            strokeOpacity="0.55"
          />
        </>
      )}
      <path
        d="M27 12 c0 -3 -3 -5 -7 -5 c-5 0 -8 2 -8 6 c0 3 3 5 8 6 c5 1 8 3 8 6 c0 4 -3 6 -8 6 c-4 0 -7 -2 -7 -5"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="12" r="3" fill="var(--color-ochre)" />
      <circle cx="13" cy="26" r="2.4" fill="currentColor" />
    </svg>
  );
}
