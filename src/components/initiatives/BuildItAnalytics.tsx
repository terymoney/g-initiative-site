import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  BriefcaseBusiness,
  PackageSearch,
  TrendingUp,
  Users,
} from "lucide-react";

const tractionData = [
  {
    label: "Members",
    value: 45,
    icon: Users,
    color: "#28c987",
    tint: "rgba(40, 201, 135, 0.12)",
  },
  {
    label: "Projects",
    value: 291,
    icon: BriefcaseBusiness,
    color: "#4b8df8",
    tint: "rgba(75, 141, 248, 0.12)",
  },
  {
    label: "Products",
    value: 103,
    icon: PackageSearch,
    color: "#b96cff",
    tint: "rgba(185, 108, 255, 0.12)",
  },
];

const projectionData = [
  { year: "Year 1", value: 2, display: "$2M", market: "Nigeria" },
  { year: "Year 2", value: 15, display: "$15M", market: "Pan-Africa" },
  {
    year: "Year 3",
    value: 50,
    display: "$50M+",
    market: "Global Corridors",
  },
];

function useSectionVisibility() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function CountUp({ value, active }: { value: number; active: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{displayValue}</>;
}

function AnalyticsTooltip({
  active,
  payload,
  label,
  suffix = "",
}: {
  active?: boolean;
  payload?: Array<{ value?: number; payload?: { market?: string } }>;
  label?: string;
  suffix?: string;
}) {
  if (!active || !payload?.length) return null;

  const item = payload[0];

  return (
    <div className="rounded-xl border border-white/15 bg-[#071a20]/95 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-xl">
      <p className="font-semibold">{label}</p>
      <p className="mt-1 text-[#9be7bf]">
        {item.value}
        {suffix}
      </p>
      {item.payload?.market && (
        <p className="mt-1 text-xs text-white/55">{item.payload.market}</p>
      )}
    </div>
  );
}

function AnalyticsPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-white/[0.055] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function BuildItAnalytics() {
  const { ref, visible } = useSectionVisibility();

  return (
    <section
      ref={ref}
      data-header-theme="dark"
      className="buildit-analytics buildit-dark relative overflow-hidden bg-[linear-gradient(145deg,#071a20_0%,#0a2930_52%,#0a5d42_145%)] py-24 text-[#f7fbf6]"
    >
      <style>
        {`
          @keyframes builditWaterDrift {
            0% { transform: translate3d(-9%, 0, 0) scaleX(1); opacity: 0.18; }
            50% { transform: translate3d(4%, -2%, 0) scaleX(1.08); opacity: 0.28; }
            100% { transform: translate3d(10%, 1%, 0) scaleX(0.98); opacity: 0.16; }
          }

          @keyframes builditAnalysisRise {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .buildit-analytics::before {
            content: "";
            position: absolute;
            inset: -30% -20%;
            pointer-events: none;
            background:
              radial-gradient(ellipse at 25% 45%, rgba(155, 231, 191, 0.22), transparent 42%),
              radial-gradient(ellipse at 72% 58%, rgba(75, 141, 248, 0.15), transparent 38%);
            animation: builditWaterDrift 12s ease-in-out infinite alternate;
          }

          .buildit-analytics__water {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
          }

          .buildit-analytics__water::after {
            content: "";
            position: absolute;
            inset: 46% -20% -30%;
            background: linear-gradient(
              105deg,
              transparent 12%,
              rgba(155, 231, 191, 0.08) 42%,
              rgba(255, 255, 255, 0.09) 50%,
              rgba(75, 141, 248, 0.07) 58%,
              transparent 88%
            );
            filter: blur(18px);
            animation: builditWaterDrift 9s ease-in-out infinite alternate-reverse;
          }

          .buildit-analytics--visible .buildit-analysis-item {
            animation: builditAnalysisRise 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          @media (prefers-reduced-motion: reduce) {
            .buildit-analytics::before,
            .buildit-analytics__water::after,
            .buildit-analytics--visible .buildit-analysis-item {
              animation: none;
            }
          }
        `}
      </style>

      <div className="buildit-analytics__water" />

      <div
        className={`relative mx-auto max-w-7xl px-6 ${
          visible ? "buildit-analytics--visible" : ""
        }`}
      >
        <div className="buildit-analysis-item max-w-3xl">
          <span className="buildit-kicker">Platform Intelligence</span>
          <h2 className="mt-2 font-serif text-4xl font-medium tracking-[-0.055em] md:text-5xl">
            Traction, performance and outlook.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            A live view of the platform ecosystem today, paired with its
            approved three-year financial projection.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <AnalyticsPanel className="buildit-analysis-item rounded-[1.75rem] p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#9be7bf]">
                  Current Traction
                </span>
                <h3 className="mt-2 font-serif text-3xl">
                  Live Platform Growth
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/55">
                <TrendingUp className="h-4 w-4 text-[#9be7bf]" />
                Current totals
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {tractionData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="buildit-analysis-item min-w-0 rounded-2xl border p-4"
                    style={{
                      borderColor: `${item.color}33`,
                      backgroundColor: item.tint,
                      animationDelay: `${120 + index * 90}ms`,
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: item.color }}
                    />
                    <p
                      className="mt-4 text-3xl font-black"
                      style={{ color: item.color }}
                    >
                      <CountUp value={item.value} active={visible} />
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 h-[260px] min-h-[260px] w-full">
              {visible && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={tractionData}
                    margin={{ top: 10, right: 4, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      vertical={false}
                      stroke="rgba(255,255,255,0.08)"
                      strokeDasharray="3 5"
                    />
                    <XAxis
                      dataKey="label"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "rgba(255,255,255,0.58)", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "rgba(255,255,255,0.42)", fontSize: 11 }}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.035)" }}
                      content={<AnalyticsTooltip />}
                    />
                    <Bar
                      dataKey="value"
                      radius={[8, 8, 2, 2]}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    >
                      {tractionData.map((item) => (
                        <Cell key={item.label} fill={item.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-white/65">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                6.5 projects per member
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                2.3 products per member
              </span>
            </div>
          </AnalyticsPanel>

          <AnalyticsPanel className="buildit-analysis-item rounded-[1.75rem] p-5 sm:p-7 [animation-delay:120ms]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#9be7bf]">
                  Projections
                </span>
                <h3 className="mt-2 font-serif text-3xl">
                  Financials &amp; KPIs
                </h3>
              </div>
              <span className="rounded-full border border-[#9be7bf]/20 bg-[#9be7bf]/10 px-3 py-2 text-xs font-bold text-[#9be7bf]">
                25x Year 1 to Year 3
              </span>
            </div>

            <div className="relative mt-7 h-[350px] min-h-[350px] w-full overflow-hidden rounded-2xl border border-white/8 bg-[#06161c]/45 px-1 pt-5">
              {visible && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={projectionData}
                    margin={{ top: 10, right: 18, left: -14, bottom: 10 }}
                  >
                    <defs>
                      <linearGradient
                        id="builditProjectionFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#49dca0"
                          stopOpacity={0.62}
                        />
                        <stop
                          offset="55%"
                          stopColor="#28c987"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="100%"
                          stopColor="#28c987"
                          stopOpacity={0.015}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      vertical={false}
                      stroke="rgba(255,255,255,0.08)"
                      strokeDasharray="3 5"
                    />
                    <XAxis
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "rgba(255,255,255,0.58)", fontSize: 12 }}
                    />
                    <YAxis
                      domain={[0, 60]}
                      ticks={[0, 15, 30, 45, 60]}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `$${value}M`}
                      tick={{ fill: "rgba(255,255,255,0.42)", fontSize: 11 }}
                    />
                    <Tooltip content={<AnalyticsTooltip suffix="M USD" />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#49dca0"
                      strokeWidth={3}
                      fill="url(#builditProjectionFill)"
                      dot={{
                        r: 5,
                        fill: "#071a20",
                        stroke: "#9be7bf",
                        strokeWidth: 3,
                      }}
                      activeDot={{
                        r: 7,
                        fill: "#9be7bf",
                        stroke: "#071a20",
                        strokeWidth: 3,
                      }}
                      animationDuration={1900}
                      animationEasing="ease-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {projectionData.map((item, index) => (
                <div
                  key={item.year}
                  className="buildit-analysis-item rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  style={{ animationDelay: `${240 + index * 90}ms` }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
                    {item.year}
                  </p>
                  <p className="mt-1 text-xl font-black text-[#9be7bf]">
                    {item.display}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{item.market}</p>
                </div>
              ))}
            </div>
          </AnalyticsPanel>
        </div>
      </div>
    </section>
  );
}
