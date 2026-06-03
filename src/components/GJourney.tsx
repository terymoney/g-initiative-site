// Animated SVG "G journey" route — a dotted red marathon-style path that
// subtly traces the shape of the letter G.
export function GJourney() {
  // Path forms an open G: outer arc + horizontal stroke into the center.
  const path =
    "M 540 110 " +
    "C 320 110 150 240 150 420 " +
    "C 150 600 320 720 540 720 " +
    "C 660 720 760 670 820 580 " +
    "L 820 440 " +
    "L 560 440";

  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto">
      {/* faint compass / grid */}
      <svg viewBox="0 0 960 840" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.58 0.22 27)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.58 0.22 27)" stopOpacity="0" />
          </radialGradient>
          <filter id="trackerGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* topographic faint contour rings */}
        <g stroke="oklch(1 0 0 / 0.06)" strokeWidth="1" fill="none">
          <circle cx="480" cy="420" r="280" />
          <circle cx="480" cy="420" r="220" />
          <circle cx="480" cy="420" r="160" />
          <circle cx="480" cy="420" r="100" />
        </g>

        {/* ghost path (always visible faintly) */}
        <path
          d={path}
          fill="none"
          stroke="oklch(1 0 0 / 0.07)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* dotted red route — animates drawing in */}
        <path
          d={path}
          fill="none"
          stroke="oklch(0.62 0.22 27)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="2 14"
          style={{
            strokeDasharray: "2 14",
            strokeDashoffset: 2400,
            animation: "draw-path 5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards",
          }}
        />

        {/* start point */}
        <g transform="translate(540, 110)">
          <circle r="22" fill="url(#glow)" />
          <circle r="8" fill="oklch(0.62 0.22 27)" className="animate-pulse-soft" />
          <circle r="3" fill="white" />
        </g>

        {/* mid checkpoint */}
        <g transform="translate(150, 420)">
          <circle r="14" fill="oklch(1 0 0 / 0.08)" />
          <circle r="4" fill="oklch(0.62 0.22 27)" />
        </g>

        {/* finish flag at end of horizontal stroke (center of G) */}
        <g transform="translate(560, 440)">
          <circle r="22" fill="url(#glow)" />
          <circle r="9" fill="oklch(0.62 0.22 27)" className="animate-pulse-soft" />
          {/* checkered flag */}
          <g transform="translate(8, -34)">
            <line x1="0" y1="0" x2="0" y2="34" stroke="white" strokeWidth="1.5" />
            <rect x="0" y="0" width="22" height="14" fill="white" opacity="0.95" />
            <g fill="oklch(0.2 0.02 160)">
              <rect x="0" y="0" width="5.5" height="4.7" />
              <rect x="11" y="0" width="5.5" height="4.7" />
              <rect x="5.5" y="4.7" width="5.5" height="4.7" />
              <rect x="16.5" y="4.7" width="5.5" height="4.7" />
              <rect x="0" y="9.4" width="5.5" height="4.6" />
              <rect x="11" y="9.4" width="5.5" height="4.6" />
            </g>
          </g>
        </g>

        {/* moving tracker dot — uses CSS motion-path along the same route */}
        <circle r="7" fill="oklch(0.65 0.24 27)" filter="url(#trackerGlow)">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path={path} />
        </circle>
      </svg>

      {/* compass label */}
      <div className="absolute bottom-2 left-2 text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
        Route · One Mission
      </div>
      <div className="absolute top-2 right-2 text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
        Est. 2014
      </div>
    </div>
  );
}
