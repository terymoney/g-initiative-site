import { Flag, Route } from "lucide-react";

const routePath =
  "M110 178 C190 178 206 142 280 146 C348 150 385 142 438 144 C490 146 526 169 575 171 C635 174 704 178 760 206 C820 236 845 244 895 248 C865 288 785 288 714 289 C640 290 598 290 556 284 C519 279 496 266 462 258 C424 249 397 249 358 252 C316 255 268 262 226 239 C190 220 156 197 110 178";

const checkpoints = [
  { label: "Start / Finish", x: 98, y: 180, delay: "0s" },
  { label: "Ama-John", x: 245, y: 147, delay: ".35s" },
  { label: "Sharing Point", x: 414, y: 250, delay: ".72s" },
  { label: "Bio", x: 460, y: 284, delay: "1.05s" },
  { label: "Ama-Nwaduru", x: 472, y: 152, delay: "1.38s" },
  { label: "Stadium", x: 582, y: 172, delay: "1.7s" },
  { label: "Atta Junction", x: 892, y: 248, delay: "2.05s" },
];

function PulseMarker({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g className="route-pulse-marker" style={{ animationDelay: delay }}>
      <circle cx={x} cy={y} r="4" fill="#e22025" />
      <circle className="route-ping" cx={x} cy={y} r="8" fill="none" stroke="#e22025" strokeWidth="2" />
    </g>
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
            <span className="h-2 w-2 rounded-full bg-[#e22025] shadow-[0_0_16px_rgba(226,32,37,0.65)]" />
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

      <div className="relative overflow-hidden rounded-[1.45rem] border border-[#13271b]/10 bg-[#fbf7ed] p-3 sm:p-5">
        <svg
          viewBox="0 0 960 330"
          className="h-[270px] w-full sm:h-[320px]"
          role="img"
          aria-label="Animated Ikeduru Half Marathon route map"
        >
          <defs>
            <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#e22025" floodOpacity="0.42" />
            </filter>
          </defs>

          <rect width="960" height="330" rx="22" fill="#fbf7ed" />
          <path d="M54 194 H914" stroke="#13271b" strokeOpacity="0.18" strokeWidth="1" />
          <path d="M54 252 H914" stroke="#13271b" strokeOpacity="0.07" strokeWidth="1" />
          <path d="M54 94 H914" stroke="#13271b" strokeOpacity="0.07" strokeWidth="1" />
          <path d="M52 232 C230 192 352 179 514 176 C668 173 782 195 908 221" stroke="#6d756f" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.62" />

          <path
            id="ikeduru-route-path"
            d={routePath}
            fill="none"
            stroke="#e22025"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 12"
            filter="url(#route-glow)"
            className="route-dotted-line"
          />

          {checkpoints.map((point) => (
            <PulseMarker key={point.label} x={point.x} y={point.y} delay={point.delay} />
          ))}

          <circle r="9" fill="#e22025" stroke="#fff8e7" strokeWidth="3">
            <animateMotion dur="17s" repeatCount="indefinite" path={routePath} rotate="auto" />
          </circle>
          <text fontSize="20" x="0" y="0" fill="#fff8e7" textAnchor="middle" dominantBaseline="middle">
            <animateMotion dur="17s" repeatCount="indefinite" path={routePath} rotate="auto" />
            •
          </text>

          <g className="text-map-label" fill="#13271b" fontFamily="Inter, Arial, sans-serif" fontWeight="800">
            <text x="68" y="168" fontSize="17">Ama-John</text>
            <text x="70" y="212" fontSize="16">Start / Finish</text>
            <text x="385" y="232" fontSize="15">Sharing</text>
            <text x="392" y="250" fontSize="15">Point</text>
            <text x="452" y="306" fontSize="15">Bio</text>
            <text x="455" y="135" fontSize="15">Ama-Nwaduru</text>
            <text x="585" y="154" fontSize="15">Chief Emmanuel</text>
            <text x="585" y="172" fontSize="15">Nwuanyanwu Stadium</text>
            <text x="650" y="208" fontSize="15">Owerri-Okigwe Rd</text>
            <text x="684" y="312" fontSize="15">Nguogo</text>
            <text x="842" y="228" fontSize="15">Atta Junction</text>
          </g>

          <g transform="translate(64 188)">
            <path d="M0 0 V-42" stroke="#13271b" strokeWidth="3" />
            <path d="M0 -40 C18 -48 31 -31 48 -40 V-8 C31 1 18 -16 0 -8Z" fill="#13271b" />
            <path d="M6 -34 C22 -38 30 -25 43 -30" stroke="#fff8e7" strokeWidth="2" strokeDasharray="4 4" />
          </g>

          <g transform="translate(576 146)">
            <ellipse cx="0" cy="34" rx="28" ry="9" fill="#c69a42" opacity="0.78" />
            <path d="M-24 34 L-18 9 H18 L24 34Z" fill="#c69a42" opacity="0.5" />
            <path d="M-18 9 C-4 1 4 1 18 9" stroke="#13271b" strokeOpacity="0.45" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>

      <style>{`
        .route-dotted-line {
          animation: ikeduruDash 1.4s linear infinite;
        }

        .route-pulse-marker {
          transform-box: fill-box;
          transform-origin: center;
        }

        .route-ping {
          animation: ikeduruPing 2.35s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes ikeduruDash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -30; }
        }

        @keyframes ikeduruPing {
          0% { opacity: .9; transform: scale(.75); }
          70% { opacity: .05; transform: scale(2.25); }
          100% { opacity: 0; transform: scale(2.35); }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-dotted-line,
          .route-ping {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
