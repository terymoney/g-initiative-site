const upperRoutePath =
  "M72 45 C112 46 146 56 177 73 C197 85 210 99 229 102 C246 105 258 120 263 139 C268 156 287 160 302 177 C318 195 329 212 348 224 C367 237 389 239 405 251 C424 265 421 287 443 301 C449 306 453 312 456 316";

const stadiumRoutePath =
  "M72 45 L44 96 C75 99 103 101 119 108 C132 118 134 146 151 160 C169 175 187 184 199 203 C207 214 217 220 228 219";

const lowerRoutePath =
  "M58 265 C108 264 159 264 191 270 C214 276 234 284 246 294 C238 313 226 331 225 344 C270 346 314 351 357 350 C396 348 427 330 456 316";

const progressRoutePath =
  "M58 265 C108 264 159 264 191 270 C214 276 234 284 246 294 C238 313 226 331 225 344 C270 346 314 351 357 350 C396 348 427 330 456 316 C453 312 449 306 443 301 C421 287 424 265 405 251 C389 239 367 237 348 224 C329 212 318 195 302 177 C287 160 268 156 263 139 C258 120 246 105 229 102 C210 99 197 85 177 73 C146 56 112 46 72 45 L44 96 C75 99 103 101 119 108 C132 118 134 146 151 160 C169 175 187 184 199 203 C207 214 217 220 228 219";

const routeSegments = [upperRoutePath, stadiumRoutePath, lowerRoutePath];

const landmarkDots = [
  { label: "BIO", x: 171, y: 307 },
  { label: "AMA-NWADURU", x: 250, y: 294 },
  { label: "NGUOGO", x: 309, y: 361 },
  { label: "ATTA JUNCTION", x: 444, y: 330 },
];

function LandmarkDot({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <circle
      cx={x}
      cy={y}
      r="3"
      fill="#e22025"
      aria-label={label}
      className="route-landmark-dot"
    />
  );
}

function CheckeredFlag({
  x,
  y,
  scale = 1,
  label,
}: {
  x: number;
  y: number;
  scale?: number;
  label: string;
}) {
  return (
    <g
      className={`route-flag route-flag-${label.toLowerCase()}`}
      transform={`translate(${x} ${y}) scale(${scale})`}
    >
      <g className="route-flag-inner">
        <path d="M0 0 V-42" stroke="#13271b" strokeWidth="3" />

        <path
          className="route-flag-cloth"
          d="M0 -40 C17 -48 31 -30 48 -40 V-8 C31 2 17 -16 0 -8Z"
          fill="#13271b"
        />

        <path
          className="route-flag-stitch"
          d="M7 -34 C23 -39 31 -25 43 -31"
          stroke="#fff8e7"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        <circle
          className="route-flag-base"
          cx="0"
          cy="0"
          r="4"
          fill="#e22025"
          stroke="#fff8e7"
          strokeWidth="1.5"
        />

        <text x="0" y="16" fill="#13271b" fontSize="13" fontWeight="900">
          {label}
        </text>
      </g>
    </g>
  );
}

function MovingMarker({ path }: { path: string }) {
  return (
    <circle
      className="route-runner-dot"
      r="3.8"
      fill="#e22025"
      stroke="#fff8e7"
      strokeWidth="1.5"
    >
      <animateMotion
        begin="0s"
        dur="28s"
        repeatCount="indefinite"
        path={path}
        rotate="auto"
      />
    </circle>
  );
}

export function IkeduruRouteMap() {
  return (
    <section className="rounded-[2rem] border border-[#13271b]/10 bg-[#fff8e7] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.12)] sm:p-6 lg:p-8">
      <div className="mb-5">
        <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,4.4rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#13271b]">
          21KM Route Map
        </h2>
      </div>

      <div className="route-map-frame relative overflow-hidden rounded-[1.45rem] border border-[#13271b]/10 bg-[#fbf7ed] p-3 sm:p-5">
        <svg
          viewBox="0 0 497 398"
          className="mx-auto h-auto w-full max-w-3xl"
          role="img"
          aria-label="Animated Ikeduru Half Marathon route map traced from the original route map"
        >
          <defs>
            <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2"
                floodColor="#e22025"
                floodOpacity="0.35"
              />
            </filter>
          </defs>

          <rect width="497" height="398" rx="18" fill="#fbf7ed" />

          <path
            d="M5 264 C58 262 101 263 125 264 C146 269 146 283 166 284 C191 284 209 284 229 281 C261 284 300 284 336 286 C369 287 399 295 425 305 C439 310 451 312 463 315 C475 318 486 322 494 327"
            stroke="#6d756f"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.76"
          />

          <path
            d="M6 268 C58 266 101 267 124 268 C145 272 145 287 166 288 C192 288 210 288 229 285 C261 288 300 288 336 290 C368 291 398 299 423 308 C437 313 449 315 461 318 C473 321 485 325 495 331"
            stroke="#13271b"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />

          {routeSegments.map((segment) => (
            <path
              key={segment}
              d={segment}
              fill="none"
              stroke="#e22025"
              strokeWidth="3.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0.1 8"
              filter="url(#route-glow)"
              className="route-dotted-line"
            />
          ))}

          {landmarkDots.map((point) => (
            <LandmarkDot
              key={point.label}
              x={point.x}
              y={point.y}
              label={point.label}
            />
          ))}

          <MovingMarker path={progressRoutePath} />

          <CheckeredFlag x={50} y={266} scale={0.54} label="START" />
          <CheckeredFlag x={228} y={219} scale={0.54} label="FINISH" />

          <g
            className="text-map-label"
            fill="#13271b"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="900"
          >
            <text x="7" y="249" fontSize="9.5">
              AMA-
            </text>
            <text x="7" y="263" fontSize="9.5">
              JOHN
            </text>

            <text x="196" y="168" fontSize="8.2" textAnchor="middle">
              CHIEF
            </text>
            <text x="196" y="179" fontSize="8.8" textAnchor="middle">
              EMMANUEL
            </text>
            <text x="196" y="190" fontSize="8.8" textAnchor="middle">
              NWUANYANWU
            </text>
            <text x="196" y="201" fontSize="8.8" textAnchor="middle">
              STADIUM
            </text>

            <text x="181" y="313" fontSize="9.5">
              IHO
            </text>
            <text x="263" y="299" fontSize="8.8" textAnchor="middle">
              AMA-NWADURU
            </text>
            <text x="318" y="366" fontSize="9.5">
              NGUOGO
            </text>

            <text x="452" y="333" fontSize="9.0" textAnchor="start">
              ATTA
            </text>
            <text x="448" y="346" fontSize="9.0" textAnchor="start">
              JUNCTION
            </text>

            <text x="297" y="282" fontSize="8.8" fill="#c69a42">
              OWERRI-OKIGWE RD
            </text>
          </g>
        </svg>
      </div>

      <style>{`
        .route-map-frame {
          animation: ikeduruMapSettle 0.7s ease-out both;
        }

        .route-dotted-line {
          stroke-dashoffset: 0;
        }

        .route-live-dot {
          animation: ikeduruLiveDotPulse 1.65s ease-in-out infinite;
        }

        .route-landmark-dot {
          animation: ikeduruPointPulse 2.8s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .route-runner-dot {
          filter: drop-shadow(0 0 7px rgba(226, 32, 37, 0.55));
        }

        .route-flag-inner {
          animation: ikeduruFlagFloat 2.4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: bottom left;
        }

        .route-flag-finish .route-flag-inner {
          animation-delay: 0.35s;
        }

        .route-flag-cloth {
          animation: ikeduruFlagWave 1.45s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: left center;
        }

        .route-flag-stitch {
          animation: ikeduruFlagDash 1.45s linear infinite;
        }

        .route-flag-base {
          animation: ikeduruFlagBasePulse 2.4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes ikeduruLiveDotPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(226, 32, 37, 0.55), 0 0 16px rgba(226, 32, 37, 0.65);
          }
          50% {
            transform: scale(1.45);
            box-shadow: 0 0 0 7px rgba(226, 32, 37, 0), 0 0 22px rgba(226, 32, 37, 0.82);
          }
        }

        @keyframes ikeduruPointPulse {
          0%, 100% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.28);
          }
        }

        @keyframes ikeduruFlagFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-2px) rotate(-1.1deg);
          }
        }

        @keyframes ikeduruFlagWave {
          0%, 100% {
            transform: skewY(0deg) translateX(0);
          }
          50% {
            transform: skewY(-5deg) translateX(1.5px);
          }
        }

        @keyframes ikeduruFlagDash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -16;
          }
        }

        @keyframes ikeduruFlagBasePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.18);
          }
        }

        @keyframes ikeduruMapSettle {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-map-frame,
          .route-live-dot,
          .route-landmark-dot,
          .route-flag-inner,
          .route-flag-cloth,
          .route-flag-stitch,
          .route-flag-base {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}