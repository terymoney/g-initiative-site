import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  Truck,
  Users,
  X,
} from "lucide-react";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
  type SVGProps,
} from "react";
import type { Initiative } from "@/data/initiatives";

import heroCommunity from "@/assets/hero-community.jpg";
import covidEggHeroChildrenReceivingEggs from "@/assets/initiativessouth-east-food-security/covid_egg_01_hero_children_receiving_eggs.jpg";
import covidEggChildHoldingEgg from "@/assets/initiativessouth-east-food-security/covid_egg_02_child_holding_egg.jpg";
import covidEggPickupWithEggsAndSupplies from "@/assets/initiativessouth-east-food-security/covid_egg_03_pickup_with_eggs_and_supplies.jpg";
import covidEggGInitiativeVestDistribution from "@/assets/initiativessouth-east-food-security/covid_egg_04_g_initiative_vest_distribution.jpg";
import covidEggCommunityQueueDistribution from "@/assets/initiativessouth-east-food-security/covid_egg_05_community_queue_distribution.jpg";
import covidEggChildrenSmilingAfterRelief from "@/assets/initiativessouth-east-food-security/covid_egg_06_children_smiling_after_relief.jpg";
import covidEggTeamLoadingEggTrays from "@/assets/initiativessouth-east-food-security/covid_egg_07_team_loading_egg_trays.jpg";
import covidEggCrowdDistributionTruck from "@/assets/initiativessouth-east-food-security/covid_egg_08_crowd_distribution_truck.jpg";
import seFoodSecurityCommunityDistribution from "@/assets/initiativessouth-east-food-security/se-food-security-community-distribution.jpeg";
import seFoodSecurityFieldTeam from "@/assets/initiativessouth-east-food-security/se-food-security-field-team.jpeg";

type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "blur"
  | "zoom"
  | "soft"
  | "image"
  | "stagger";

type PathwayIcon = ComponentType<{ className?: string }>;

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

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
    "transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";
  const visibleClass =
    "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0";

  const hiddenByVariant: Record<Exclude<RevealVariant, "stagger">, string> = {
    up: "translate-y-10 opacity-0",
    left: "-translate-x-10 opacity-0",
    right: "translate-x-10 opacity-0",
    blur: "translate-y-6 opacity-0 blur-[12px]",
    zoom: "translate-y-4 scale-[0.96] opacity-0",
    soft: "translate-y-8 scale-[0.985] opacity-0 blur-[6px]",
    image:
      "translate-y-8 scale-[1.03] opacity-0 blur-[8px] [clip-path:inset(12%_0_12%_0_round_2rem)]",
  };

  if (variant === "stagger") {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, index) => (
          <div
            className={`${baseClass} ${
              visible ? visibleClass : hiddenByVariant.soft
            }`}
            style={{
              transitionDelay: visible ? `${index * 110}ms` : "0ms",
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

function EggClusterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18.5 35c-6.2 0-10.5-4.4-10.5-10.8C8 17.2 13 9 18.5 9S29 17.2 29 24.2C29 30.6 24.7 35 18.5 35Z" />
      <path d="M29.5 35c-6.2 0-10.5-4.4-10.5-10.8C19 17.2 24 9 29.5 9S40 17.2 40 24.2C40 30.6 35.7 35 29.5 35Z" />
      <path d="M24 38c-6.2 0-10.5-4.4-10.5-10.8C13.5 20.2 18.5 12 24 12s10.5 8.2 10.5 15.2C34.5 33.6 30.2 38 24 38Z" />
    </svg>
  );
}

function FeedSupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 36c5-12 13-20 28-24" />
      <path d="M16 30c4 2 9 3 15 2" />
      <path d="M19 25c3 2 7 3 12 2" />
      <path d="M22 20c3 2 6 2 10 1" />
      <path d="M12 38h26" />
      <path d="M12 38c2-8 8-13 17-16" />
    </svg>
  );
}

function StorageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 39V18l14-8 14 8v21" />
      <path d="M15 39V22h18v17" />
      <path d="M18 26h12" />
      <path d="M18 31h12" />
      <path d="M18 36h12" />
      <path d="M8 39h32" />
    </svg>
  );
}

function DistributionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 31h24V17H7v14Z" />
      <path d="M31 22h6l4 5v4H31v-9Z" />
      <path d="M13 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M35 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M17 32h14" />
    </svg>
  );
}

function Kicker({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-4 text-xs font-black uppercase tracking-[0.28em] ${
        dark ? "text-[#9be7bf]" : "text-[#0b7a4b]"
      }`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-[clamp(2.35rem,4.3vw,4.85rem)] font-normal leading-[0.93] tracking-[-0.055em] ${
        dark ? "text-[#fff7ed]" : "text-[#081b22]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function CheckLine({
  children,
  dark = false,
  delay = 0,
}: {
  children: ReactNode;
  dark?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLLIElement | null>(null);
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
        threshold: 0.2,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`flex gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:opacity-100 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
      } ${dark ? "text-white/72" : "text-[#405244]"}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <CheckCircle2
        className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:scale-100 ${
          visible ? "scale-100" : "scale-50"
        } ${
          dark ? "text-[#9be7bf]" : "text-[#0b7a4b]"
        }`}
      />
      <span className="text-sm leading-7 sm:text-base">{children}</span>
    </li>
  );
}

const chainSteps: {
  title: string;
  text: string;
  Icon: PathwayIcon;
  id?: string;
}[] = [
  {
    title: "Food Source",
    text: "A self-funded food-security effort built around local food systems.",
    Icon: Sprout as PathwayIcon,
  },
  {
    title: "Agro-SME Feed Support",
    text: "Provision of feed to support Agro-SME and protect the production side of the chain.",
    Icon: FeedSupportIcon as PathwayIcon,
    id: "agro-sme-feed-support",
  },
  {
    title: "30,000+ Egg Distribution",
    text: "Fresh and healthy eggs distributed as emergency nutrition relief during COVID-19.",
    Icon: EggClusterIcon as PathwayIcon,
    id: "egg-distribution",
  },
  {
    title: "Children & Families",
    text: "Vulnerable households in Ikeduru L.G.A., especially Akabo and surrounding areas.",
    Icon: Users as PathwayIcon,
  },
  {
    title: "Food Storage",
    text: "A long-term vision for storage systems and year-round availability.",
    Icon: StorageIcon as PathwayIcon,
    id: "food-storage-distribution",
  },
  {
    title: "Distribution Systems",
    text: "Moving relief from source to communities with coordination and care.",
    Icon: DistributionIcon as PathwayIcon,
  },
  {
    title: "Food Resilience",
    text: "Local solutions that strengthen communities against future crises.",
    Icon: ShieldCheck as PathwayIcon,
  },
];

const impactProof = [
  {
    value: "30,000+",
    label: "Fresh and healthy eggs distributed to curb malnutrition in children.",
  },
  {
    value: "Agro-SME",
    label: "Feed support strengthened the source-side food-security chain.",
  },
  {
    value: "Ikeduru",
    label: "Immediate relief focused on Akabo and surrounding communities.",
  },
  {
    value: "Families",
    label: "Dignity, nourishment, and reassurance for vulnerable households.",
  },
];

const galleryImages = [
  {
    src: covidEggGInitiativeVestDistribution,
    alt: "G Initiative vest visible during community egg distribution",
    className: "lg:col-span-2",
  },
  {
    src: covidEggCommunityQueueDistribution,
    alt: "Community queue during egg distribution",
    className: "",
  },
  {
    src: covidEggPickupWithEggsAndSupplies,
    alt: "Pickup truck with eggs and food support supplies",
    className: "",
  },
  {
    src: covidEggTeamLoadingEggTrays,
    alt: "Team member loading trays of eggs for distribution",
    className: "",
  },
  {
    src: covidEggCrowdDistributionTruck,
    alt: "Crowd gathered around truck during egg distribution",
    className: "lg:col-span-2",
  },
  {
    src: covidEggChildrenSmilingAfterRelief,
    alt: "Children smiling after receiving food relief",
    className: "lg:col-span-2",
  },
];

const sdgCards = [
  { code: "SDG 1", title: "No Poverty" },
  { code: "SDG 2", title: "Zero Hunger" },
  { code: "SDG 3", title: "Good Health & Well-being" },
  { code: "SDG 11", title: "Sustainable Communities" },
  { code: "SDG 17", title: "Partnerships for the Goals" },
];

export function SouthEastFoodSecurityPage({
  initiative,
}: {
  initiative: Initiative;
}) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedGalleryImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGalleryImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGalleryImage]);

  return (
    <main className="south-east-food-security-page min-h-screen overflow-x-hidden bg-[#fff7ed] text-[#081b22] antialiased">
      <style>
        {`
          .south-east-food-security-page .chain-stage {
            position: relative;
          }

          .south-east-food-security-page .chain-spine {
            position: absolute;
            left: 0.95rem;
            top: 2rem;
            bottom: 2rem;
            width: 2px;
            overflow: hidden;
            background: rgba(11, 122, 75, 0.13);
          }

          .south-east-food-security-page .chain-spine::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 28%;
            transform: translateY(-100%);
            background: linear-gradient(180deg, transparent, rgba(155,231,191,0.95), rgba(11,122,75,0.95), transparent);
            animation: chainPulse 5.8s linear infinite;
          }

          @media (min-width: 1024px) {
            .south-east-food-security-page .chain-spine {
              left: 50%;
              top: 2.25rem;
              bottom: 2.25rem;
              transform: translateX(-50%);
            }
          }

          .south-east-food-security-page .chain-list {
            display: grid;
            gap: 2rem;
          }

          .south-east-food-security-page .chain-step {
            position: relative;
            display: grid;
            grid-template-columns: 2rem minmax(0, 1fr);
            align-items: center;
            gap: 1.25rem;
            min-width: 0;
          }

          .south-east-food-security-page .chain-step__card {
            grid-column: 2;
            grid-row: 1;
            width: 100%;
            max-width: 34rem;
            min-width: 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.045);
            padding: 1.5rem;
            backdrop-filter: blur(8px);
            transition:
              transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
              background 500ms ease,
              border-color 500ms ease;
          }

          .south-east-food-security-page .chain-step__icon {
            display: grid;
            width: 3rem;
            height: 3rem;
            flex: 0 0 auto;
            place-items: center;
            border: 1px solid rgba(155, 231, 191, 0.26);
            border-radius: 0.75rem;
            background: rgba(155, 231, 191, 0.08);
            color: #9be7bf;
          }

          .south-east-food-security-page .chain-step__card:hover {
            transform: translateY(-4px);
            border-color: rgba(155, 231, 191, 0.24);
            background: rgba(255, 255, 255, 0.07);
          }

          @media (min-width: 1024px) {
            .south-east-food-security-page .chain-list {
              gap: 2.5rem;
            }

            .south-east-food-security-page .chain-step {
              grid-template-columns: minmax(0, 1fr) 4rem minmax(0, 1fr);
              gap: 2.75rem;
              min-height: 11rem;
            }

            .south-east-food-security-page .chain-step--left .chain-step__card {
              grid-column: 1;
              justify-self: end;
            }

            .south-east-food-security-page .chain-step--right .chain-step__card {
              grid-column: 3;
              justify-self: start;
            }
          }

          .south-east-food-security-page .gallery-image,
          .south-east-food-security-page .soft-image {
            transition:
              transform 850ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 850ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .south-east-food-security-page .gallery-card:hover .gallery-image,
          .south-east-food-security-page .soft-image-wrap:hover .soft-image {
            transform: scale(1.045);
            filter: saturate(1.08) contrast(1.03);
          }

          .south-east-food-security-page .quiet-float {
            animation: quietFloat 8s ease-in-out infinite;
          }

          .south-east-food-security-page .food-security-arrow {
            animation: foodSecurityArrowLife 1.85s ease-in-out infinite;
            will-change: transform;
          }

          .south-east-food-security-page a:hover .food-security-arrow,
          .south-east-food-security-page a:focus-visible .food-security-arrow,
          .south-east-food-security-page button:hover .food-security-arrow,
          .south-east-food-security-page button:focus-visible .food-security-arrow {
            animation-duration: 0.82s;
          }

          @keyframes chainPulse {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            8% {
              opacity: 1;
            }
            88% {
              opacity: 1;
            }
            100% {
              transform: translateY(460%);
              opacity: 0;
            }
          }

          @keyframes quietFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              transform: translate3d(0, -10px, 0) scale(1.015);
            }
          }

          @keyframes foodSecurityArrowLife {
            0%, 100% {
              transform: translateX(0);
              opacity: 0.78;
            }
            45% {
              transform: translateX(5px);
              opacity: 1;
            }
            60% {
              transform: translateX(2px);
              opacity: 0.9;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .south-east-food-security-page .food-security-arrow {
              animation: none;
            }
          }
        `}
      </style>

      <section
        data-header-theme="light"
        className="relative isolate min-h-[720px] overflow-hidden bg-[#fff7ed] pt-24"
      >
        <div className="absolute inset-0">
          <img
            src={covidEggHeroChildrenReceivingEggs}
            alt="Children receiving eggs during South-East Food Security response"
            className="quiet-float h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff7ed_0%,rgba(255,247,237,0.98)_22%,rgba(255,247,237,0.84)_48%,rgba(255,247,237,0.42)_74%,rgba(255,247,237,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,237,0)_42%,#fff7ed_100%)]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(11,122,75,0.12),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(155,231,191,0.1),transparent_26%)]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(720px-6rem)] max-w-7xl items-center px-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal variant="blur" className="lg:-translate-y-10">
            <Kicker>{initiative.title}</Kicker>

            <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.055em] text-[#081b22] md:text-6xl lg:text-7xl">
              South-East Food Security Project
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#405244] sm:text-lg">
              Initiated by G Initiative prior to the COVID-19 outbreak, this
              self-funded social impact effort grew from Agro-SME feed support
              into emergency nutrition relief for vulnerable communities in
              Ikeduru L.G.A., especially Akabo and surrounding areas.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#egg-distribution"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0b7a4b] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#095f3b]"
              >
                View the response{" "}
                <ArrowRight className="food-security-arrow h-4 w-4" />
              </a>

              <a
                href="#agro-sme-feed-support"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#081b22]/15 bg-[#fffaf0]/85 px-7 py-4 text-sm font-black text-[#081b22] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Start from feed support
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        data-header-theme="light"
        className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal variant="soft">
              <Kicker>Project origin</Kicker>

              <SectionTitle>
                Before the crisis, the work had already begun.
              </SectionTitle>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#405244] sm:text-lg">
                The South-East Food Security Project was initiated before the
                COVID-19 outbreak as a practical food-security response. Designed
                initially as a self-funded social impact program of Gprojects
                Limited, it focused on strengthening the systems that help food
                move from source to households.
              </p>

              <ul className="mt-7 space-y-3">
                <CheckLine delay={0}>
                  Provision of feed to support Agro-SME.
                </CheckLine>
                <CheckLine delay={130}>
                  Emergency food relief for vulnerable families.
                </CheckLine>
                <CheckLine delay={260}>
                  Food storage, distribution, and community support.
                </CheckLine>
              </ul>
            </Reveal>

            <Reveal
              variant="image"
              className="soft-image-wrap relative overflow-hidden rounded-[2rem] border border-[#081b22]/10 bg-white shadow-[0_28px_90px_rgba(8,27,34,0.08)]"
            >
              <img
                src={covidEggChildrenSmilingAfterRelief}
                alt="Children smiling after receiving food-security relief"
                className="soft-image h-[520px] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,transparent,rgba(8,27,34,0.78))] p-7 text-white">
                <p className="max-w-xl text-sm font-semibold leading-7">
                  A food-security chain does not begin at distribution. It begins
                  with source, feed, storage, coordination, and the ability to
                  respond when families need help most.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#07120d_0%,#0b2a2f_58%,#0b7a4b_150%)] px-5 py-20 text-[#fff7ed] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(155,231,191,0.12),transparent_30%),radial-gradient(circle_at_86%_30%,rgba(240,248,242,0.06),transparent_26%)]" />

        <div className="relative mx-auto max-w-[1440px]">
          <Reveal variant="blur">
            <div className="max-w-3xl">
              <Kicker dark>Source to impact</Kicker>

              <SectionTitle dark>
                Feed support, egg distribution, and a stronger food-security
                chain.
              </SectionTitle>
            </div>
          </Reveal>

          <div className="chain-stage mt-16">
            <div className="chain-spine" />

            <div className="chain-list">
              {chainSteps.map((step, index) => {
                const Icon = step.Icon;
                const isEven = index % 2 === 0;

                return (
                  <Reveal
                    key={step.title}
                    className={`chain-step ${
                      isEven ? "chain-step--left" : "chain-step--right"
                    }`}
                    variant={isEven ? "left" : "right"}
                  >
                    <article id={step.id} className="chain-step__card">
                      <div className="flex items-center gap-4">
                        <span className="chain-step__icon">
                          <Icon className="h-6 w-6" />
                        </span>

                        <div>
                          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#9be7bf]">
                            0{index + 1}
                          </p>

                          <h3 className="mt-2 font-serif text-3xl leading-[0.95] tracking-[-0.045em]">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-white/68">
                        {step.text}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px] space-y-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal variant="zoom">
              <Kicker>Agro-SME feed support</Kicker>

              <SectionTitle>
                Feed support came first because food security begins at source.
              </SectionTitle>

              <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
                The recorded Agro-SME component provided feed support to prevent
                starvation and protect local food production during a difficult
                period for communities and food systems. This became the
                production-side foundation of the South-East Food Security story.
              </p>

              <p className="mt-5 text-base leading-8 text-[#405244] sm:text-lg">
                By supporting the source-side of the chain, G Initiative helped
                strengthen the pathway through which practical nutrition support
                could later reach families during the COVID-19 crisis.
              </p>
            </Reveal>

            <Reveal
              variant="image"
              className="overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(8,27,34,0.1)]"
            >
              <img
                src={seFoodSecurityFieldTeam}
                alt="Field team supporting South-East food-security implementation"
                className="h-[560px] w-full object-cover object-[center_18%]"
              />
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal
              variant="image"
              className="relative order-2 overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(8,27,34,0.1)] lg:order-1"
            >
              <img
                src={seFoodSecurityCommunityDistribution}
                alt="Community members gathered during South-East food-security distribution"
                className="h-[560px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(7,18,13,0.72)_100%)]" />
            </Reveal>

            <Reveal variant="blur" className="order-1 lg:order-2">
              <Kicker>When the pandemic struck</Kicker>

              <SectionTitle>
                Vulnerable families faced hunger, uncertainty, and low savings.
              </SectionTitle>

              <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
                When the pandemic struck and uncertainty swept across the nation,
                many families were left struggling with food insecurity and
                malnutrition. The burden was especially heavy on families with
                “No Saving or Low Savings.”
              </p>

              <p className="mt-5 text-base leading-8 text-[#405244] sm:text-lg">
                Children and vulnerable households became exposed to hunger, poor
                access to essential nutrition, and the fear that they had been
                forgotten during a national crisis.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal variant="soft">
              <Kicker>COVID-19 quick response</Kicker>

              <SectionTitle>
                Over 30,000 free eggs distributed to vulnerable families.
              </SectionTitle>

              <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
                One of the most impactful interventions under the project was the
                distribution of over 30,000 free eggs. The response provided
                essential nutrition to households in Ikeduru L.G.A., with special
                focus on Akabo and surrounding communities.
              </p>

              <ul className="mt-7 space-y-3">
                <CheckLine delay={0}>
                  Combatting malnutrition in children.
                </CheckLine>
                <CheckLine delay={130}>
                  Strengthening the health of entire families.
                </CheckLine>
                <CheckLine delay={260}>
                  Giving families dignity, nourishment, and reassurance that they
                  were not forgotten.
                </CheckLine>
              </ul>
            </Reveal>

            <Reveal
              variant="zoom"
              className="relative overflow-hidden rounded-[2rem] bg-[#07120d] shadow-[0_28px_90px_rgba(8,27,34,0.14)]"
            >
              <img
                src={covidEggCommunityQueueDistribution}
                alt="Children and community members receiving eggs during COVID-19 response"
                className="h-[580px] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,13,0.84))] p-8 text-white">
                <p className="font-serif text-[clamp(3rem,5vw,5.6rem)] leading-none tracking-[-0.06em]">
                  30,000+
                </p>

                <p className="mt-2 max-w-md text-sm font-semibold uppercase tracking-[0.18em] text-[#9be7bf]">
                  fresh and healthy eggs
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="bg-[#07120d] px-5 py-16 text-[#fff7ed] sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal variant="blur">
            <Kicker dark>Impact proof</Kicker>

            <SectionTitle dark>
              Real relief, delivered through a local food-security chain.
            </SectionTitle>
          </Reveal>

          <Reveal variant="stagger" className="grid gap-6 sm:grid-cols-2">
            {impactProof.map((item) => (
              <article key={item.value} className="border-l border-white/12 pl-6">
                <HeartHandshake className="mb-5 h-6 w-6 text-[#9be7bf]" />

                <p className="font-serif text-4xl leading-none tracking-[-0.055em]">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-7 text-white/64">
                  {item.label}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal variant="image">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(8,27,34,0.1)]">
              <img
                src={covidEggTeamLoadingEggTrays}
                alt="G Initiative team member loading egg trays for community distribution"
                className="h-[540px] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal variant="soft">
            <Kicker>From relief to resilience</Kicker>

            <SectionTitle>
              The project points beyond one-time emergency support.
            </SectionTitle>

            <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
              The South-East Food Security Project is also about transforming
              crisis lessons into a model for food security. Its long-term vision
              connects food storage, distribution systems, sustainable nutrition,
              local farmers, and community support.
            </p>

            <ul className="mt-7 space-y-3">
              <CheckLine delay={0}>
                Strengthen food storage and distribution infrastructure.
              </CheckLine>
              <CheckLine delay={130}>
                Support sustainable nutrition for children, pregnant women, and
                the elderly.
              </CheckLine>
              <CheckLine delay={260}>
                Empower local farmers and agro-enterprises through capacity
                building and market access.
              </CheckLine>
              <CheckLine delay={390}>
                Secure community resilience against future crises.
              </CheckLine>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e6f1e8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="blur">
            <div className="mb-12 max-w-4xl">
              <Kicker>Field documentation</Kicker>

              <SectionTitle>
                On the ground: food support reaching families.
              </SectionTitle>
            </div>
          </Reveal>

          <Reveal
            variant="stagger"
            className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {galleryImages.map((image) => (
              <article
                key={image.alt}
                className={`gallery-card overflow-hidden rounded-[1.65rem] bg-white shadow-[0_22px_65px_rgba(8,27,34,0.09)] ${image.className}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedGalleryImage(image)}
                  className="block h-full w-full cursor-zoom-in"
                  aria-label={`View full image: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image h-full w-full object-cover"
                  />
                </button>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#020704]/92 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedGalleryImage.alt}
          onClick={() => setSelectedGalleryImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedGalleryImage(null)}
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/60 sm:right-7 sm:top-7"
            aria-label="Close full image"
          >
            <X className="h-5 w-5" />
          </button>

          <figure
            className="flex max-h-[90vh] max-w-[94vw] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedGalleryImage.src}
              alt={selectedGalleryImage.alt}
              className="max-h-[84vh] max-w-full object-contain shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            />

            <figcaption className="max-w-3xl text-center text-sm text-white/75">
              {selectedGalleryImage.alt}
            </figcaption>
          </figure>
        </div>
      )}

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal variant="zoom">
            <Kicker>Human impact</Kicker>

            <SectionTitle>
              More than food — dignity, nourishment, and reassurance.
            </SectionTitle>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#405244] sm:text-lg">
              For families who once faced hunger, the intervention carried more
              than nutrition. It was a message that they were seen, supported,
              and not forgotten during one of the most difficult seasons for
              households and communities.
            </p>
          </Reveal>

          <Reveal
            variant="image"
            className="overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(8,27,34,0.1)]"
          >
            <img
              src={covidEggChildHoldingEgg}
              alt="Child holding egg and food support package"
              className="h-[620px] w-full object-cover object-top"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal variant="soft">
            <Kicker>SDG alignment</Kicker>

            <SectionTitle>
              Food security, health, resilience, and partnership.
            </SectionTitle>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#405244]">
              Aligned with the Sustainable Development Goals, this project
              contributes to a world where vulnerable households are supported,
              children are protected from malnutrition, and communities are
              strengthened through practical food systems.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sdgCards.map((sdg, index) => (
              <article
                key={sdg.code}
                className={`min-h-[156px] border p-5 ${
                  index === 1
                    ? "border-[#0b7a4b] bg-[#0b7a4b] text-white"
                    : "border-[#081b22]/10 bg-[#f0f8f2] text-[#081b22]"
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em]">
                  {sdg.code}
                </p>

                <h3 className="mt-5 font-serif text-2xl leading-[0.95] tracking-[-0.045em]">
                  {sdg.title}
                </h3>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="bg-[#07120d] px-5 py-20 text-[#fff7ed] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal variant="blur">
            <Kicker dark>Partner opportunity</Kicker>

            <SectionTitle dark>
              Together, we can scale resilience and nourish futures.
            </SectionTitle>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              With the right partners, development agencies, corporate sponsors,
              agro-enterprise supporters, and community stakeholders, this
              project can expand beyond immediate relief to strengthen storage,
              distribution, nutrition access, and food security across the
              South-East.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#partners"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0b7a4b] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#095f3b]"
              >
                Partner with us{" "}
                <ArrowRight className="food-security-arrow h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal
            variant="image"
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] shadow-[0_32px_100px_rgba(0,0,0,0.28)]"
          >
            <img
              src={heroCommunity}
              alt="Community members gathered together"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.7)_0%,rgba(7,18,13,0.12)_100%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="max-w-lg text-sm font-semibold leading-7 text-white/84">
                Food security depends on access, movement, coordination, and the
                ability to reach communities when support is most urgent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
