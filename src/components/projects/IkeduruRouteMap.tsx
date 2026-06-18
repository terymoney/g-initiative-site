import { Flag, Route } from "lucide-react";

const upperRoutePath =
  "M72 45 C112 46 146 56 177 73 C197 85 210 99 229 102 C246 105 258 120 263 139 C268 156 287 160 302 177 C318 195 329 212 348 224 C367 237 389 239 405 251 C424 265 421 287 443 301 C449 306 453 312 456 316";

const stadiumRoutePath =
  "M72 45 L44 96 C75 99 103 101 119 108 C132 118 134 146 151 160 C169 175 187 184 199 203 C207 214 217 220 228 219";

const lowerRoutePath =
  "M58 265 C106 264 166 263 229 263 L229 290 C229 312 225 332 225 344 C270 346 314 351 357 350 C396 348 427 330 456 316";

const progressRoutePath =
  "M58 265 C106 264 166 263 229 263 L229 290 C229 312 225 332 225 344 C270 346 314 351 357 350 C396 348 427 330 456 316 C453 312 449 306 443 301 C421 287 424 265 405 251 C389 239 367 237 348 224 C329 212 318 195 302 177 C287 160 268 156 263 139 C258 120 246 105 229 102 C210 99 197 85 177 73 C146 56 112 46 72 45 L44 96 C75 99 103 101 119 108 C132 118 134 146 151 160 C169 175 187 184 199 203 C207 214 217 220 228 219";

const routeSegments = [upperRoutePath, stadiumRoutePath, lowerRoutePath];

const landmarkDots = [
  { label: "BIO", x: 171, y: 307 },
  { label: "AMA-NWADURU", x: 229, y: 263 },
  { label: "NGUOGO", x: 309, y: 361 },
  { label: "ATTA JUNCTION", x: 456, y: 316 },
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
    <g className="route-flag" transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 0 V-34" stroke="#13271b" strokeWidth="2.4" />
      <path d="M0 -33 C13 -39 24 -27 38 -33 V-8 C24 -2 13 -15 0 -8Z" fill="#13271b" />
      <path d="M5 -28 C18 -31 25 -21 35 -25" stroke="#fff8e7" strokeWidth="1.6" strokeDasharray="3 3" />
      <text x="0" y="12" fill="#13271b" fontSize="8.5" fontWeight="900">
        {label}
      </text>
    </g>
  );
}

function MovingMarker({
  path,
}: {
  path: string;
}) {
  return (
    <circle className="route-runner-dot" r="3.8" fill="#e22025" stroke="#fff8e7" strokeWidth="1.5">
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
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
            Animated Route Feature
          </p>
          <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,4.4rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#13271b]">
            21KM Route Map
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-bold text-[#304637]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#07120d] px-3 py-2 text-[#fff8e7]">
            <span className="route-live-dot h-2 w-2 rounded-full bg-[#e22025] shadow-[0_0_16px_rgba(226,32,37,0.65)]" />
            Live progress
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#13271b]/10 px-3 py-2">
            <Flag className="h-3.5 w-3.5 text-[#13271b]" /> Start / Finish
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#13271b]/10 px-3 py-2">
            <Route className="h-3.5 w-3.5 text-[#e22025]" /> Dotted route path
          </span>
        </div>
      </div>

      <div className="route-map-frame relative overflow-hidden rounded-[1.45rem] border border-[#13271b]/10 bg-[#fbf7ed] p-3 sm:p-5">
        <svg
          viewBox="0 0 497 398"
          className="mx-auto h-auto w-full max-w-[760px]"
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
          <path d="M0 0 H153 L116 35 H58 Z" fill="#f6c419" opacity="0.9" />
          <path d="M126 0 H294 L255 35 H190 Z" fill="#34b7c7" opacity="0.95" />

          <path
            d="M5 264 C58 262 101 263 125 264 C146 269 146 283 166 284 C191 284 209 284 229 281 C261 284 300 284 336 286 C378 290 414 306 452 329 C466 336 482 339 494 342"
            stroke="#6d756f"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.76"
          />
          <path
            d="M6 268 C58 266 101 267 124 268 C145 272 145 287 166 288 C192 288 210 288 229 285 C261 288 300 288 336 290 C377 294 413 310 451 333 C466 341 482 344 495 347"
            stroke="#13271b"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />

          <g fill="#13271b" fontFamily="Inter, Arial, sans-serif">
            <text x="306" y="50" fontSize="45" fontWeight="900" letterSpacing="-1.4">
              2000+
            </text>
            <text x="309" y="75" fontSize="18" fontWeight="800">
              Participants
            </text>
            <text x="306" y="133" fontSize="45" fontWeight="900" letterSpacing="-1.4">
              21km
            </text>
            <text x="309" y="158" fontSize="18" fontWeight="800">
              Run distance
            </text>
          </g>

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
            <LandmarkDot key={point.label} x={point.x} y={point.y} label={point.label} />
          ))}

          <MovingMarker path={progressRoutePath} />

          <CheckeredFlag x={54} y={264} scale={0.78} label="START" />
          <CheckeredFlag x={190} y={219} scale={0.72} label="FINISH" />

          <g className="text-map-label" fill="#13271b" fontFamily="Inter, Arial, sans-serif" fontWeight="900">
            <text x="7" y="249" fontSize="12">AMA-</text>
            <text x="7" y="263" fontSize="12">JOHN</text>

            <text x="38" y="304" fontSize="9.5">STARTING</text>
            <text x="41" y="316" fontSize="9.5">POINT</text>

            <text x="196" y="168" fontSize="8.2" textAnchor="middle">CHIEF</text>
            <text x="196" y="179" fontSize="8.8" textAnchor="middle">EMMANUEL</text>
            <text x="196" y="190" fontSize="8.8" textAnchor="middle">NWUANYANWU</text>
            <text x="196" y="201" fontSize="8.8" textAnchor="middle">STADIUM</text>

            <text x="181" y="313" fontSize="9.5">BIO</text>
            <text x="238" y="269" fontSize="8.8" textAnchor="middle">AMA-NWADURU</text>
            <text x="318" y="366" fontSize="9.5">NGUOGO</text>
            <text x="463" y="313" fontSize="9.5">ATTA</text>
            <text x="459" y="325" fontSize="9.5">JUNCTION</text>

            <text x="297" y="272" fontSize="8.8">OWERRI-OKIGWE RD</text>
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

        .route-flag {
          animation: ikeduruFlagLift 3.8s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: bottom left;
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
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.28); }
        }

        @keyframes ikeduruFlagLift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1.6px); }
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
          .route-flag {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
