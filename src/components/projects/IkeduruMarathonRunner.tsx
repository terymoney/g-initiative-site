import runnerImage from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runner-illustration.png";

export function IkeduruMarathonRunner() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ikeduru-hero-runner absolute top-[9%] left-0 h-[72%] min-h-[18rem] w-[clamp(18rem,42vw,42rem)] opacity-[0.34] sm:opacity-[0.42] lg:opacity-[0.5]">
        <img
          src={runnerImage}
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.32)]"
          loading="eager"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c69a42]/50 to-transparent" />

      <style>{`
        @keyframes ikeduruHeroRun {
          0% {
            transform: translate3d(-56vw, 10px, 0) scale(0.9);
            opacity: 0;
          }
          8% {
            opacity: 0.42;
          }
          52% {
            transform: translate3d(44vw, -6px, 0) scale(0.98);
            opacity: 0.52;
          }
          88% {
            opacity: 0.44;
          }
          100% {
            transform: translate3d(116vw, 8px, 0) scale(0.9);
            opacity: 0;
          }
        }

        .ikeduru-hero-runner {
          animation: ikeduruHeroRun 18s linear infinite;
          will-change: transform, opacity;
        }

        @media (max-width: 767px) {
          .ikeduru-hero-runner {
            animation-duration: 15s;
            opacity: 0.24;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ikeduru-hero-runner {
            animation: none;
            transform: translate3d(52vw, 0, 0) scale(0.92);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
}
