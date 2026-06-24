import {
  Children,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import {
  Activity,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Coins,
  Gem,
  Globe,
  HeartHandshake,
  Landmark,
  Layers,
  Map,
  Network,
  PackageSearch,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Truck,
  Users,
} from "lucide-react";
import type { Initiative } from "@/data/initiatives";
import heroImg from "@/assets/build-it/builditt-hero.jpg";
import { BuildItAnalytics } from "@/components/initiatives/BuildItAnalytics";

type BuildItPageProps = {
  initiative: Initiative;
};

type RevealVariant = "up" | "left" | "right" | "blur" | "zoom" | "stagger";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

const ecosystem = [
  {
    n: "01",
    icon: PackageSearch,
    title: "Builders Market",
    sub: "A Complete Ecosystem MVP",
    body: "One-stop digital marketplace.",
    points: [
      "Access ready-to-build architectural plans.",
      "Source top-quality materials locally and internationally.",
      "Built-in escrow to protect all transactions.",
    ],
  },
  {
    n: "02",
    icon: Users,
    title: "Pool Funding & Co-op",
    sub: "Unlocking Wholesale Prices",
    body: "Power in numbers.",
    points: [
      "Join pool-funding groups to reach factory minimums.",
      "Secure up to 15% discounts reserved for industrial giants.",
      "Collective buying power for every builder.",
    ],
  },
  {
    n: "03",
    icon: Truck,
    title: "Global Supply Chain",
    sub: "Bridging the Distance",
    body: "From factories to sites.",
    points: [
      "Automated international shipping calculations.",
      "Custom duties and landing costs handled.",
      "Smooth, door-step delivery.",
    ],
  },
  {
    n: "04",
    icon: Briefcase,
    title: "Project Portfolio",
    sub: "Digital PM & Financial Tracking",
    body: "End-to-end tracking.",
    points: [
      "Track budgets and Gantt chart timelines.",
      "Share BIM files securely.",
      "Collaborate without leaving the platform.",
    ],
  },
  {
    n: "05",
    icon: Sparkles,
    title: "AI Architect",
    sub: "Powered by Intelligent AI",
    body: "Your intelligent copilot.",
    points: [
      "Generate structural layouts and analyze zoning laws.",
      "Calculate BOQs and review uploaded blueprints.",
      "Generate additive plans and G-Code for 3D printing.",
    ],
  },
  {
    n: "06",
    icon: Network,
    title: "Professional Job Pool",
    sub: "Networking & Hiring",
    body: "Where talent meets opportunity.",
    points: [
      "Clients post requirements and hire verified artisans.",
      "Professionals discover leads and submit quotes.",
      "Build a trusted digital reputation.",
    ],
  },
  {
    n: "07",
    icon: Landmark,
    title: "Real Estate & REITs",
    sub: "Fractional Investment Models",
    body: "Democratizing property.",
    points: [
      "Browse high-yield properties.",
      "Invest fractionally in REITs.",
      "Monitor dividend yields and capital appreciation.",
    ],
  },
];

const features = [
  {
    icon: PackageSearch,
    title: "Sourcing",
    sub: "Buying Better",
    points: [
      "Automated Customs & Tax estimations.",
      "Verified Vendor KYC logic.",
      "Global Price Benchmarking.",
    ],
  },
  {
    icon: Activity,
    title: "Timelines",
    sub: "Project Tracking",
    points: [
      "Live stage progression.",
      "Dependencies mapping.",
      "Cost-vs-Budget analytics.",
    ],
  },
  {
    icon: Layers,
    title: "BIM & Docs",
    sub: "Document Management",
    points: [
      "Centralized cloud storage for blueprints.",
      "Mobile-ready permits & scanning.",
      "Role-based access for supervisors.",
    ],
  },
  {
    icon: Star,
    title: "Subscriptions",
    sub: "Verified Badges & Tiers",
    points: [
      "Free Tier — basic marketplace access.",
      "Premium Artisan — high Job Pool visibility.",
      "Enterprise — global logistics priority.",
    ],
  },
];

const competitors = [
  {
    seg: "End-to-End PM & CRM",
    b: "Yes",
    procore: "Yes",
    houzz: "Partial",
    alibaba: "—",
  },
  {
    seg: "Global Material Trading",
    b: "Yes",
    procore: "—",
    houzz: "—",
    alibaba: "Yes",
  },
  {
    seg: "Verified Artisan Directory",
    b: "Yes",
    procore: "—",
    houzz: "Yes",
    alibaba: "—",
  },
  {
    seg: "Real Estate Crowdfunding",
    b: "Yes",
    procore: "—",
    houzz: "—",
    alibaba: "—",
  },
];

const revenue = [
  {
    icon: Coins,
    title: "SaaS Subscriptions",
    body: "Recurring monthly revenue from premium pro profiles & tools.",
  },
  {
    icon: ShieldCheck,
    title: "Marketplace Escrow",
    body: "0.5% transaction fees on material and project purchases.",
  },
  {
    icon: Globe,
    title: "Cross-Border Margins",
    body: "Foreign exchange and logistics processing fees.",
  },
  {
    icon: Landmark,
    title: "REIT Fractional Fees",
    body: "1% Asset Under Management (AUM) platform fee.",
  },
];

function Reveal({ children, className = "", variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const baseClass =
    "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";
  const visibleClass =
    "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0";

  const hiddenByVariant: Record<Exclude<RevealVariant, "stagger">, string> = {
    up: "translate-y-10 opacity-0",
    left: "-translate-x-12 opacity-0",
    right: "translate-x-12 opacity-0",
    blur: "translate-y-8 opacity-0 blur-[10px]",
    zoom: "scale-[0.96] opacity-0",
  };

  if (variant === "stagger") {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, index) => (
          <div
            className={`${baseClass} ${
              visible ? visibleClass : hiddenByVariant.up
            }`}
            style={{
              transitionDelay: visible ? `${index * 95}ms` : "0ms",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${className} ${baseClass} ${
        visible ? visibleClass : hiddenByVariant[variant]
      }`}
    >
      {children}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <span className="buildit-kicker">{children}</span>;
}

function MainHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`buildit-heading-line ${className}`}>{children}</span>
  );
}

function SectionHead({
  icon: Icon,
  kicker,
  title,
  sub,
  withLine = false,
}: {
  icon: ElementType;
  kicker: string;
  title: string;
  sub?: string;
  withLine?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#081b22] text-[#f7fbf6] shadow-[0_18px_45px_rgba(8,27,34,0.14)] ring-1 ring-[#0b7a4b]/20">
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <Kicker>{kicker}</Kicker>

        <h2 className="mt-1 font-serif text-3xl font-medium leading-[0.95] tracking-[-0.045em] text-[#081b22] md:text-4xl">
          {withLine ? <MainHeading>{title}</MainHeading> : title}
        </h2>

        {sub && <p className="mt-2 text-base text-[#526555]">{sub}</p>}
      </div>
    </div>
  );
}

function CheckItem({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-2 text-sm ${
        dark ? "text-[#f7fbf6]/75" : "text-[#526555]"
      }`}
    >
      <CheckCircle2
        className={`mt-0.5 h-4 w-4 shrink-0 ${
          dark ? "text-[#9be7bf]" : "text-[#0b7a4b]"
        }`}
      />
      {children}
    </li>
  );
}

export function BuildItPage({ initiative: _initiative }: BuildItPageProps) {
  return (
    <main className="buildit-page min-h-screen bg-[#f7fbf6] text-[#081b22] antialiased">
      <style>
        {`
          .buildit-page .buildit-kicker {
            display: inline-block;
            color: #0b7a4b;
            font-size: 0.72rem;
            font-weight: 900;
            letter-spacing: 0.28em;
            text-transform: uppercase;
          }

          .buildit-page .buildit-dark .buildit-kicker,
          .buildit-page .buildit-hero .buildit-kicker,
          .buildit-page .buildit-join .buildit-kicker {
            color: #9be7bf;
          }

          .buildit-page .buildit-heading-line {
            display: inline-block;
            position: relative;
          }

          .buildit-page .buildit-heading-line::after {
            content: "";
            display: block;
            width: 4.5rem;
            height: 2px;
            margin-top: 0.6rem;
            background: #0b7a4b;
          }

          .buildit-page .buildit-dark .buildit-heading-line::after {
            background: #9be7bf;
          }
        `}
      </style>

      <section className="buildit-hero relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Modern construction skyline at golden dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,27,34,0.78)_0%,rgba(8,27,34,0.66)_48%,rgba(11,122,75,0.42)_115%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7fbf6] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <Reveal variant="blur">
            <Kicker>The Future of Construction &amp; Trade</Kicker>

            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.055em] text-[#f7fbf6] md:text-6xl lg:text-7xl">
              Redefining{" "}
              <span className="italic text-[#9be7bf]">Construction</span> and{" "}
              <span className="italic text-[#9be7bf]">Real Estate.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f7fbf6]/80">
              A comprehensive, unified ecosystem designed to bridge the gap
              between architectural planning, project management, material
              sourcing, and global trade.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 rounded-full bg-[#f7fbf6] px-7 py-3.5 text-sm font-medium text-[#081b22] transition-transform hover:-translate-y-0.5 hover:bg-white"
              >
                Explore the Ecosystem <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-full border border-[#f7fbf6]/30 px-7 py-3.5 text-sm font-medium text-[#f7fbf6] transition-colors hover:bg-white/10"
              >
                Developed by GProjects
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionHead
              icon={Target}
              kicker="The Problem"
              title="Why BUILD IT?"
              sub="Fragmented Industry Workflows"
            />

            <p className="mt-6 text-lg leading-relaxed text-[#526555]">
              The construction industry suffers from siloed communication,
              opaque pricing, disconnected international material sourcing, and
              undocumented artisanal labor. We centralize this chaos into a
              single, elegant platform.
            </p>
          </Reveal>

          <Reveal variant="right">
            <SectionHead
              icon={Gem}
              kicker="Our Core Vision"
              title="Simplicity, Transparency, Connectivity"
            />

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Layers,
                  t: "Project Management",
                  d: "Intuitive tools to manage builds from start to finish.",
                },
                {
                  icon: Globe,
                  t: "Global Connectivity",
                  d: "Sourcing materials internationally with seamless door-to-door delivery.",
                },
              ].map((v) => (
                <div
                  key={v.t}
                  className="flex items-start gap-4 rounded-2xl border border-[#081b22]/10 bg-white p-5 shadow-[0_18px_50px_rgba(8,27,34,0.06)]"
                >
                  <v.icon className="mt-0.5 h-5 w-5 text-[#0b7a4b]" />

                  <div>
                    <p className="font-semibold text-[#081b22]">{v.t}</p>
                    <p className="text-sm text-[#526555]">{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="ecosystem"
        className="buildit-dark relative overflow-hidden bg-[linear-gradient(135deg,#081b22_0%,#0b2a2f_48%,#0b7a4b_140%)] py-24 text-[#f7fbf6]"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker>A Complete Ecosystem</Kicker>

              <h2 className="mt-2 font-serif text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                <MainHeading>Seven pillars, one platform.</MainHeading>
              </h2>

              <p className="mt-4 text-[#f7fbf6]/75">
                Everything the modern builder, investor, and professional needs
                — engineered to work as one seamless luxury experience.
              </p>
            </div>
          </Reveal>

          <Reveal
            variant="stagger"
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {ecosystem.map((e) => (
              <div
                key={e.n}
                className="group relative rounded-3xl border border-[#f7fbf6]/10 bg-[#f7fbf6]/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#9be7bf]/40 hover:bg-[#f7fbf6]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7fbf6]/10 text-[#9be7bf] transition-colors group-hover:bg-[#9be7bf] group-hover:text-[#081b22]">
                    <e.icon className="h-5 w-5" />
                  </span>

                  <span className="font-serif text-3xl text-[#f7fbf6]/20">
                    {e.n}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-medium">{e.title}</h3>
                <p className="text-sm text-[#9be7bf]">{e.sub}</p>

                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <CheckItem key={p} dark>
                      {p}
                    </CheckItem>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionHead
            icon={ShieldCheck}
            kicker="Platform Features"
            title="Refined to the last detail"
            withLine
          />
        </Reveal>

        <Reveal
          variant="stagger"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-[#081b22]/10 bg-white p-7 shadow-[0_22px_70px_rgba(8,27,34,0.07)] transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf7f0] text-[#0b7a4b]">
                <f.icon className="h-5 w-5" />
              </span>

              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="text-sm text-[#0b7a4b]">{f.sub}</p>

              <ul className="mt-4 space-y-2">
                {f.points.map((p) => (
                  <CheckItem key={p}>{p}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-[#eaf7f0]/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker>Social &amp; Economic Impact</Kicker>

              <h2 className="mt-2 font-serif text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                <MainHeading>Building more than structures.</MainHeading>
              </h2>
            </div>
          </Reveal>

          <Reveal
            variant="stagger"
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: Users,
                t: "Employment Opportunities",
                s: "Creating Jobs Across the Value Chain",
                d: "Direct roles for site supervisors, drivers, QA inspectors and managers — plus rising demand for local material producers and contractors.",
              },
              {
                icon: ShieldCheck,
                t: "Capacity Building",
                s: "Skill Verification",
                d: "Through partnerships and the GInitiative CSR, we offer certifications and training integrated into the app, ensuring compliance on platform-sourced jobs.",
              },
              {
                icon: Rocket,
                t: "Growth Opportunities",
                s: "$80B+ Market Potential",
                d: "With a massive housing deficit and rapid urbanization, Nigeria is the perfect high-demand proving ground for the BUILD IT marketplace.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-[#081b22]/10 bg-white p-7 shadow-[0_22px_70px_rgba(8,27,34,0.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081b22] text-[#eaf7f0]">
                  <c.icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-xl font-medium">{c.t}</h3>
                <p className="text-sm text-[#0b7a4b]">{c.s}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#526555]">
                  {c.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal
            variant="left"
            className="rounded-3xl border border-[#081b22]/10 bg-white p-8 shadow-[0_22px_70px_rgba(8,27,34,0.07)]"
          >
            <SectionHead
              icon={Map}
              kicker="Expansion into Africa"
              title="The Continental Blueprint"
              sub="Scaling Borders"
            />

            <p className="mt-6 leading-relaxed text-[#526555]">
              Following success in Nigeria, the platform scales to Ghana, Kenya,
              and South Africa — adapting local codes and integrating regional
              payment gateways.
            </p>
          </Reveal>

          <Reveal
            variant="right"
            className="rounded-3xl border border-[#081b22]/10 bg-white p-8 shadow-[0_22px_70px_rgba(8,27,34,0.07)]"
          >
            <SectionHead
              icon={Globe}
              kicker="The World Stage"
              title="The OS for Building"
              sub="Global Scaling"
            />

            <p className="mt-6 leading-relaxed text-[#526555]">
              BUILD IT aims to become the standard B2B procurement network
              globally — linking developers in the UAE, vendors in China, and
              architects in Europe.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#eaf7f0]/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHead
              icon={Trophy}
              kicker="Competitive Landscape"
              title="Why BUILD IT Outperforms"
              withLine
            />
          </Reveal>

          <Reveal
            variant="up"
            className="mt-10 overflow-hidden rounded-3xl border border-[#081b22]/10 bg-white shadow-[0_22px_70px_rgba(8,27,34,0.07)]"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#081b22]/10 text-xs uppercase tracking-wider text-[#526555]">
                    <th className="px-6 py-4 font-medium">Feature Segment</th>
                    <th className="px-6 py-4 font-semibold text-[#0b7a4b]">
                      BUILD IT
                    </th>
                    <th className="px-6 py-4 font-medium">Procore</th>
                    <th className="px-6 py-4 font-medium">Houzz Pro</th>
                    <th className="px-6 py-4 font-medium">Alibaba</th>
                  </tr>
                </thead>

                <tbody>
                  {competitors.map((r) => (
                    <tr
                      key={r.seg}
                      className="border-b border-[#081b22]/10 last:border-0"
                    >
                      <td className="px-6 py-4 font-medium">{r.seg}</td>

                      <td className="bg-[#eaf7f0] px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-[#0b7a4b]">
                          <CheckCircle2 className="h-4 w-4" /> {r.b}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-[#526555]">{r.procore}</td>
                      <td className="px-6 py-4 text-[#526555]">{r.houzz}</td>
                      <td className="px-6 py-4 text-[#526555]">{r.alibaba}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#081b22]/10 bg-[#edf8ff] px-6 py-5">
              <p className="text-sm leading-relaxed text-[#526555]">
                <span className="font-semibold text-[#081b22]">
                  The BUILD IT Advantage:
                </span>{" "}
                Competitors fragment the industry into isolated silos. BUILD IT
                compresses the entire lifecycle into a single, unified
                ecosystem.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionHead
            icon={Coins}
            kicker="Revenue Model"
            title="Monetization Strategy"
            withLine
          />
        </Reveal>

        <Reveal
          variant="stagger"
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {revenue.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-3xl border border-[#081b22]/10 bg-white p-7 shadow-[0_18px_55px_rgba(8,27,34,0.06)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf7f0] text-[#0b7a4b]">
                <r.icon className="h-5 w-5" />
              </span>

              <div>
                <h3 className="font-medium">{r.title}</h3>
                <p className="mt-1 text-sm text-[#526555]">{r.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <BuildItAnalytics />

      <section id="join" className="mx-auto max-w-7xl px-6 py-28">
        <Reveal
          variant="zoom"
          className="buildit-join relative overflow-hidden rounded-[2.5rem] border border-[#081b22]/10 bg-[linear-gradient(135deg,#081b22_0%,#0b2a2f_48%,#0b7a4b_140%)] px-8 py-20 text-center text-[#f7fbf6] shadow-[0_32px_100px_rgba(8,27,34,0.20)]"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7fbf6]/10 text-[#9be7bf]">
            <HeartHandshake className="h-6 w-6" />
          </span>

          <div className="mt-5">
            <Kicker>Join the Revolution</Kicker>
          </div>

          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Let&apos;s{" "}
            <span className="italic text-[#9be7bf]">Build It</span> Together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#f7fbf6]/80">
            Invest, partner, or build with the ecosystem that is reshaping the
            real estate and trade sector — locally and globally.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#f7fbf6] px-8 py-4 text-sm font-medium !text-[#081b22] transition-transform hover:-translate-y-0.5 hover:bg-white"
              href="https://build-it-320735813824.us-west1.run.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket className="h-4 w-4 !text-[#081b22]" />
              <span className="!text-[#081b22]">Launch App</span>
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#f7fbf6]/30 px-8 py-4 text-sm font-medium text-[#f7fbf6] transition-colors hover:bg-white/10"
              href="#join"
            >
              Partner With Us
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[#081b22]/10 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 text-sm text-[#526555]">
          <span className="flex items-center gap-2">
            <Gem className="h-4 w-4 text-[#0b7a4b]" /> BUILD IT — Developed by
            GProjects
          </span>
        </div>
      </footer>
    </main>
  );
}
