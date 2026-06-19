import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  Footprints,
  HeartPulse,
  Info,
  MapPin,
  Trophy,
  Users,
  ArrowRight,
  X,
  ZoomIn,
  type LucideIcon,
} from "lucide-react";
import { IkeduruMarathonRunner } from "@/components/projects/IkeduruMarathonRunner";
import { IkeduruRouteMap } from "@/components/projects/IkeduruRouteMap";
import heroMarathon from "@/assets/ikeduru-half-marathon/hero-marathon.jpg";
import hydrationSupport from "@/assets/ikeduru-half-marathon/ikeduru-marathon-athlete-hydration-support.jpeg";
import organizersPortrait from "@/assets/ikeduru-half-marathon/ikeduru-marathon-organizers-portrait.jpeg";
import runnerPortrait from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runner-portrait-sepia.jpeg";
import runnersRoadWide from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runners-road-wide.jpeg";
import gProjectsLogo from "@/assets/essay/logos/g-projects-logo.png";
import imoOfficeLogo from "@/assets/essay/logos/imo-youth-sports-office-logo.png";
import imoStateGovernmentLogo from "@/assets/digital-youth-assets/logos/imo-state-government-logo.png";
import nikeLogo from "@/assets/ikeduru-half-marathon/nike_logo.png";
import type { ImpactProject } from "@/data/projects";

type InitiativeLike = {
  title: string;
  slug: string;
  description?: string;
};

type IkeduruHalfMarathonPageProps = {
  project: ImpactProject;
  parentInitiative?: InitiativeLike;
  relatedProjects?: ImpactProject[];
};

type StatItem = {
  label: string;
  value: string;
  icon: LucideIcon;
  countTo?: number;
  suffix?: string;
};

type PartnerItem = {
  title: string;
  displayTitle?: string;
  description?: string;
  logo?: string;
  logoClassName?: string;
};

type PreviewImage = {
  src: string;
  alt: string;
  label: string;
};

type PreviewImageButtonProps = {
  image: PreviewImage;
  onPreview: (image: PreviewImage) => void;
  className?: string;
  imageClassName?: string;
  showHint?: boolean;
};

const assets = {
  hero: heroMarathon,
  roadRace: runnersRoadWide,
  runnerPortrait,
  hydration: hydrationSupport,
  organizers: organizersPortrait,
};

const programItems = [
  {
    label: "What",
    icon: Info,
    body: "Ikeduru Marathon: A run for digital literacy.",
  },
  {
    label: "Why",
    icon: HeartPulse,
    body: "Awareness campaign for digital literacy. The first step in the realization of a digital revolution.",
  },
  {
    label: "Where",
    icon: MapPin,
    body: "Ikeduru Local Government Area.",
  },
  {
    label: "When",
    icon: CalendarDays,
    body: "Saturday, 28 November, 2020.",
  },
];

const stats: StatItem[] = [
  { label: "Run Distance", value: "21KM", icon: Footprints, countTo: 21, suffix: "KM" },
  { label: "Participants", value: "2000+", icon: Users, countTo: 2000, suffix: "+" },
  { label: "Local Government Area", value: "Ikeduru", icon: MapPin },
  { label: "Event Date", value: "28 Nov 2020", icon: CalendarDays },
];

const schedule = [
  { time: "5:00am – 7:00am", title: "Converging / Medical", icon: HeartPulse },
  { time: "7:00am", title: "Marathon Kick-Off", icon: Footprints },
  { time: "10:00am", title: "Estimated Stoppage Time", icon: Clock3 },
  { time: "11:00am", title: "Presentation of Trophy to Winners", icon: Trophy },
];

const impactNotes = [
  "Strong leadership driving youth and sports development in Ikeduru.",
  "Hydration, medical care, and encouragement on race day.",
  "Showcasing Ikeduru to the world through sport.",
  "Creating pathways for talent, skills, and opportunity.",
];

const partners: PartnerItem[] = [
  {
    title: "G Projects Ltd",
    displayTitle: "G Projects Ltd",
    logo: gProjectsLogo,
    logoClassName: "h-36 sm:h-40",
  },
  {
    title: "Office of the S.A. on Youth & Sports",
    logo: imoOfficeLogo,
    logoClassName: "h-28 sm:h-32",
  },
  {
    title: "Government of Imo State",
    displayTitle: "Government of Imo State",
    logo: imoStateGovernmentLogo,
    logoClassName: "h-28 sm:h-32",
  },
  {
    title: "Nike Run Club",
    displayTitle: "Nike Run Club",
    description:
      "Run virtually from anywhere in the world in support of digital literacy and win a smartphone.",
    logo: nikeLogo,
    logoClassName: "h-24 rounded-[1.1rem] sm:h-28",
  },
  {
    title: "Public/Private Partnership Initiative",
    description:
      "A public/private partnership framework supporting the marathon’s youth, sports, and digital-literacy purpose.",
  },
];


const connectionChain = [
  {
    title: "G Initiative Mission",
    text: "Empower communities through projects that connect people, place, partnership, and long-term development.",
  },
  {
    title: "Youth & Community Development",
    text: "Use sport, education, enterprise, and visibility platforms to unlock local potential.",
  },
  {
    title: "Digital Literacy Awareness",
    text: "Make digital literacy visible through a public race that the community can see, join, and remember.",
  },
  {
    title: "Ikeduru Half Marathon",
    text: "A 21KM route marking a developmental path across Ikeduru and showcasing its people and landmarks.",
  },
  {
    title: "Talent Visibility & Opportunity",
    text: "Expose athletes and youth to digital platforms, scouts, skills, enterprise, and future employability.",
  },
];

const movingForwardNotes = [
  "Imo State is geographically positioned to flourish economically. It is in the middle of all the South-Eastern states — the heartland. It is a natural hub, a transit station.",
  "Ikeduru is the northern gateway to the state capital. This is a major advantage because at least 25% of people coming in and out of Owerri pass through there. This traffic is enough to drive the economy.",
  "By designating the LGA as the technology hub of the state, it automatically becomes the tech development centre of the South-East — like Silicon Valley, San Francisco, California.",
  "Tech institutions, innovation hubs, and markets servicing the tech industry will spring up once the right infrastructure is set up and an enabling environment is created.",
  "Youth from all over the South-East can commute in and out for trainings, business, or leisure. The IGR of the LGA will begin to grow at a better rate, sending it on its way to self-sustenance.",
  "The first step is to provide the educational infrastructure to produce and develop the human resources.",
];

const technologyActionSteps = [
  "Situate a world-class institute of technology in the district, cutting across design, research, and development.",
  "Execute the vision as a public/private partnership for quality control and accountability.",
  "Give incentives to business owners to set up tech-related businesses in Ikeduru.",
  "Hold tech events, exhibitions, and expos in the district.",
  "Encourage tech manufacturing industries to set up in the district.",
];

const technologyOutcomes = [
  "The next generation of app developers, website designers, animators, 3D designers, coders, and digital professionals can spring up.",
  "Employable youth and entrepreneurs will increase as the technology industry grows.",
  "Interstate trade, transport, hospitality, tourism, commerce, and sustainable green settlements can benefit.",
];

const sdgDetails = [
  {
    code: "SDG 3",
    color: "#4C9F38",
    soft: "rgba(76,159,56,0.14)",
    title: "Good Health & Well-being",
    text: "The marathon promotes fitness, healthy competition, hydration support, medical readiness, and active youth participation.",
  },
  {
    code: "SDG 4",
    color: "#C5192D",
    soft: "rgba(197,25,45,0.12)",
    title: "Quality Education",
    text: "The theme is digital literacy, and the wider Ikeduru vision begins with educational infrastructure and human-resource development.",
  },
  {
    code: "SDG 8",
    color: "#A21942",
    soft: "rgba(162,25,66,0.12)",
    title: "Decent Work & Economic Growth",
    text: "The technology-hub direction connects youth employability, entrepreneurship, commerce, hospitality, tourism, transport, and IGR growth.",
  },
  {
    code: "SDG 9",
    color: "#FD6925",
    soft: "rgba(253,105,37,0.14)",
    title: "Industry, Innovation & Infrastructure",
    text: "The wider Ikeduru vision points to innovation hubs, technology institutions, research, development, markets, and an enabling infrastructure system.",
  },
  {
    code: "SDG 11",
    color: "#FD9D24",
    soft: "rgba(253,157,36,0.14)",
    title: "Sustainable Cities & Communities",
    text: "Ikeduru is positioned as a gateway district with potential for better settlement, transport, local planning, and sustainable community development.",
  },
  {
    code: "SDG 17",
    color: "#19486A",
    soft: "rgba(25,72,106,0.13)",
    title: "Partnerships for the Goals",
    text: "The marathon and technology-district idea both depend on public/private partnership, sponsorship, government support, and community stakeholders.",
  },
];

const raceMoments = [
  {
    src: assets.runnerPortrait,
    alt: "Ikeduru Half Marathon runner in sepia portrait",
    label: "Runner Focus",
    caption: "A powerful portrait of endurance, grit, and race-day intensity.",
    className: "",
    imageClassName: "h-[420px] lg:h-[560px] object-[50%_18%]",
  },
  {
    src: assets.hero,
    alt: "Ikeduru Half Marathon campaign visual",
    label: "Campaign Identity",
    caption: "The marathon visual language carried the digital-literacy message.",
    className: "",
    imageClassName: "h-[420px] lg:h-[560px] object-center",
  },
];

type CountUpStatValueProps = {
  value: string;
  countTo?: number;
  suffix?: string;
  duration?: number;
};

function CountUpStatValue({
  value,
  countTo,
  suffix = "",
  duration = 1400,
}: CountUpStatValueProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(countTo === undefined);
  const [displayValue, setDisplayValue] = useState(
    countTo === undefined ? value : `0${suffix}`
  );

  useEffect(() => {
    if (countTo === undefined) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [countTo]);

  useEffect(() => {
    if (countTo === undefined) {
      setDisplayValue(value);
      return;
    }

    if (!hasEnteredView) {
      setDisplayValue(`0${suffix}`);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(`${countTo}${suffix}`);
      return;
    }

    let animationFrame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(countTo * easedProgress);

      setDisplayValue(`${currentValue}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [countTo, duration, hasEnteredView, suffix, value]);

  return (
    <span ref={ref} aria-label={value}>
      {countTo === undefined ? value : displayValue}
    </span>
  );
}

function PreviewImageButton({
  image,
  onPreview,
  className = "",
  imageClassName = "",
  showHint = true,
}: PreviewImageButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onPreview(image)}
      className={`marathon-preview-button relative block w-full overflow-hidden text-left ${className}`}
      aria-label={`Open ${image.label} image preview`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`marathon-preview-image ${imageClassName}`}
        loading="lazy"
      />
      {showHint && (
        <span className="marathon-preview-hint absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#07120d]/82 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_14px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <ZoomIn className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">View</span>
        </span>
      )}
    </button>
  );
}

export function IkeduruHalfMarathonPage({
  project,
  parentInitiative,
  relatedProjects = [],
}: IkeduruHalfMarathonPageProps) {
  const [selectedImage, setSelectedImage] = useState<PreviewImage | null>(null);
  const related = relatedProjects.slice(0, 2);
  const initiativeTitle = parentInitiative?.title ?? project.parentInitiativeTitle;

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".marathon-scroll-reveal, .marathon-chain-step, .marathon-check-reveal"
      )
    );

    if (!revealTargets.length) return;

    if (typeof IntersectionObserver === "undefined") {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -10% 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#06100c] px-5 pt-32 pb-16 text-[#fff8e7] sm:px-8 lg:px-12 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(198,154,66,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(12,154,75,0.2),transparent_34%),linear-gradient(135deg,#06100c,#0b1f14_58%,#06100c)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <IkeduruMarathonRunner />

        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#c69a42]/35 bg-[#c69a42]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#e8c06a]">
              {initiativeTitle} • {project.category} • {project.year}
            </p>
            <h1 className="font-serif text-[clamp(4rem,9vw,10.5rem)] font-normal uppercase leading-[0.78] tracking-[-0.075em]">
              Ikeduru
              <span className="block text-[#c69a42]">Half</span>
              <span className="block">Marathon</span>
            </h1>
            <p className="mt-7 font-serif text-2xl italic tracking-[-0.02em] text-[#fff8e7] sm:text-3xl">
              A Run for Digital Literacy
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              The objective of the marathon is to expose Ikeduru and its
              indigenes to the world, digitally.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="rounded-[1.25rem] border border-[#c69a42]/25 bg-white/[0.055] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <Icon className="mb-4 h-7 w-7 text-[#c69a42]" />
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-white">
                    <CountUpStatValue
                      value={stat.value}
                      countTo={stat.countTo}
                      suffix={stat.suffix}
                    />
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-white/68">
                    {stat.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-12 text-[#13271b] sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 rounded-[2rem] border border-[#13271b]/10 bg-[#fff8e7] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:p-7 lg:grid-cols-[0.96fr_1.04fr] lg:p-8">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {programItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.label}
                    className="rounded-[1.2rem] border border-[#13271b]/10 bg-white/55 p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#07120d] text-[#c69a42] shadow-[0_12px_35px_rgba(7,18,13,0.16)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#13271b]">
                        {item.label}
                      </h2>
                    </div>
                    <p className="text-sm leading-7 text-[#33483b]">{item.body}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-[#13271b]/10 bg-white/55 p-5 sm:p-6">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                Introduction
              </p>
              <p className="text-sm leading-7 text-[#33483b]">
                With all that has happened this year, things need to be done
                differently.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#33483b]">
                The objective of the marathon is to expose Ikeduru and its
                indigenes to the world, digitally. The initiative will project
                Ikeduru as a leader in youth and sports development. The route
                of the marathon will mark out a developmental path for the great
                land while showing off the great resources of the land and its
                indigenes.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#33483b]">
                Athletes will be exposed to the world on digital platforms,
                promoting visibility to scouts.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.6rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            <PreviewImageButton
              image={{
                src: assets.hydration,
                alt: "Athlete receiving hydration support during the Ikeduru Half Marathon",
                label: "Athlete Care & Hydration Support",
              }}
              onPreview={setSelectedImage}
              imageClassName="h-[360px] w-full object-cover lg:h-[520px]"
            />
            <figcaption className="flex items-start gap-4 bg-[#07120d] p-5 text-[#fff8e7]">
              <Droplets className="mt-1 h-6 w-6 shrink-0 text-[#c69a42]" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c69a42]">
                  Athlete Care & Hydration Support
                </p>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Supporting our athletes every step of the way.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>


      <section className="bg-[#07120d] px-5 py-10 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-[#c69a42]/20 bg-[linear-gradient(135deg,#0b1f14,#06100c)] p-5 shadow-[0_30px_95px_rgba(0,0,0,0.22)] sm:p-7 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 lg:p-9">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
              From Mission to Movement
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              The G Initiative connection chain.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/64">
              The marathon is not an isolated race. It is a visible public
              activation of G Initiative’s wider mission to transform community
              potential into opportunity through youth, digital awareness, and
              partnership.
            </p>
          </div>

          <div className="marathon-chain-track mt-9 space-y-5 lg:mt-0">
            {connectionChain.map((item, index) => (
              <article
                key={item.title}
                className={`marathon-chain-step marathon-scroll-reveal relative pl-16 ${
                  index < connectionChain.length - 1 ? "has-connector" : ""
                }`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <span className="marathon-chain-dot absolute left-0 top-1 z-10 grid h-11 w-11 place-items-center rounded-full border border-[#c69a42]/45 bg-[#07120d] text-sm font-black text-[#e8c06a] shadow-[0_0_0_8px_rgba(198,154,66,0.08),0_16px_35px_rgba(0,0,0,0.24)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="rounded-[1.35rem] border border-[#c69a42]/22 bg-[#fff3da] p-5 text-[#13271b] shadow-[0_20px_65px_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:border-[#b63a2f]/30 hover:bg-[#fff8e7]">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl leading-none tracking-[-0.045em] text-[#13271b] sm:text-3xl">
                      {item.title}
                    </h3>
                    {index < connectionChain.length - 1 && (
                      <span className="marathon-chain-arrow inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#b63a2f]/75">
                        <ArrowRight className="h-5 w-5 rotate-90" />
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-7 text-[#33483b]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#13271b] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] border border-[#c69a42]/15 bg-[#fff8e7] p-5 shadow-[0_30px_95px_rgba(0,0,0,0.2)] sm:p-7 lg:p-9">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[1.6rem] bg-[#07120d] p-6 text-[#fff8e7] shadow-[0_24px_80px_rgba(7,18,13,0.22)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                VISION
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.6rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.06em] text-white">
                Ikeduru: Moving Forward
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68">
                This is the bigger development logic behind the marathon: Ikeduru
                is presented as a gateway, a natural hub, and a future technology
                development centre for the South-East.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-3xl font-black text-[#c69a42]">25%</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/58">
                    Owerri gateway traffic
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-3xl font-black text-[#c69a42]">Tech Hub</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/58">
                    South-East development centre
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {movingForwardNotes.map((note, index) => (
                <article
                  key={note}
                  className="rounded-[1.25rem] border border-[#13271b]/10 bg-white/65 p-5 shadow-[0_18px_50px_rgba(19,39,27,0.08)]"
                >
                  <div className="flex gap-4">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#07120d] text-xs font-black text-[#c69a42]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[#33483b]">{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.6rem] border border-[#13271b]/10 bg-white/65 p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                Strategic steps
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-[-0.05em] text-[#13271b]">
                Educational infrastructure, enterprise, and events.
              </h3>
              <div className="mt-5 space-y-3">
                {technologyActionSteps.map((step, index) => (
                  <div
                    key={step}
                    className="marathon-check-reveal flex gap-3"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c69a42]" />
                    <p className="text-sm leading-6 text-[#33483b]">{step}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.6rem] border border-[#13271b]/10 bg-white/65 p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                Expected transformation
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-[-0.05em] text-[#13271b]">
                A stronger local economy around young talent.
              </h3>
              <div className="mt-5 space-y-3">
                {technologyOutcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="marathon-check-reveal flex gap-3"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c69a42]" />
                    <p className="text-sm leading-6 text-[#33483b]">{outcome}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <IkeduruRouteMap />
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#fff8e7] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] border border-[#c69a42]/20 bg-[#07120d] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                Event Schedule
              </p>
              <h2 className="mt-2 font-serif text-4xl tracking-[-0.055em] text-white">
                Race-day flow.
              </h2>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-4">
            {schedule.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.time}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-5"
                >
                  <Icon className="mb-5 h-7 w-7 text-[#c69a42]" />
                  <h3 className="text-xl font-black text-white">{item.time}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{item.title}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#13271b] sm:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="overflow-hidden rounded-[2rem] bg-[#fff8e7] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
            <PreviewImageButton
              image={{
                src: assets.organizers,
                alt: "Ikeduru Half Marathon organizers",
                label: "Leadership & Commitment",
              }}
              onPreview={setSelectedImage}
              imageClassName="h-[320px] w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c69a42]">
                Leadership & Commitment
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.055em]">
                Driven by purpose.
              </h2>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="overflow-hidden rounded-[2rem] bg-[#fff8e7] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <PreviewImageButton
                image={{
                  src: assets.roadRace,
                  alt: "Ikeduru Half Marathon runners on the road",
                  label: "Ikeduru Half Marathon Runners",
                }}
                onPreview={setSelectedImage}
                imageClassName="h-[320px] w-full object-cover"
              />
            </article>

            <div className="grid gap-3 sm:grid-cols-2">
              {impactNotes.map((note, index) => (
                <article
                  key={note}
                  className="marathon-check-reveal flex gap-3 rounded-[1.2rem] bg-[#fff8e7] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c69a42]" />
                  <p className="text-sm leading-6 text-[#33483b]">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#fff8e7] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
              Race Moments
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-[-0.055em] text-white sm:text-5xl">
              The visuals behind the run.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {raceMoments.map((moment) => (
              <figure
                key={moment.label}
                className={`overflow-hidden rounded-[2rem] border border-[#c69a42]/20 bg-[#fff8e7] text-[#13271b] shadow-[0_24px_70px_rgba(0,0,0,0.18)] ${moment.className}`}
              >
                <PreviewImageButton
                  image={{
                    src: moment.src,
                    alt: moment.alt,
                    label: moment.label,
                  }}
                  onPreview={setSelectedImage}
                  imageClassName={`w-full object-cover ${moment.imageClassName}`}
                />
                <figcaption className="p-5 sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c69a42]">
                    {moment.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#33483b]">
                    {moment.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] border border-[#c69a42]/16 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-7">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                Connected SDGs
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.055em] text-white sm:text-5xl">
                The goals behind the run.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/64">
              The Ikeduru Half Marathon connects sport, education, innovation,
              local economic growth, sustainable communities, and partnership.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sdgDetails.map((sdg) => (
              <article
                key={sdg.code}
                className="group overflow-hidden rounded-[1.15rem] border bg-[#fff8e7] p-4 text-[#13271b] shadow-[0_18px_52px_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
                style={{
                  borderColor: `${sdg.color}55`,
                  background: `linear-gradient(135deg, ${sdg.soft}, #fff8e7 58%, #ffffff)`,
                }}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span
                    className="inline-flex rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)]"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.code}
                  </span>
                  <span
                    className="h-3 w-3 rounded-full shadow-[0_0_0_6px_rgba(0,0,0,0.04)]"
                    style={{ backgroundColor: sdg.color }}
                  />
                </div>
                <h3 className="font-serif text-2xl leading-none tracking-[-0.045em]">
                  {sdg.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#33483b]">{sdg.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#13271b] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] bg-[#fff8e7] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-7">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
            Real Partners & Support Structure
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {partners.map((partner) => (
              <article
                key={partner.title}
                className="flex min-h-[250px] flex-col items-center justify-center rounded-[1.1rem] border border-[#13271b]/10 bg-white/70 p-5 text-center shadow-[0_18px_50px_rgba(19,39,27,0.08)]"
              >
                {partner.logo ? (
                  <>
                    <img
                      src={partner.logo}
                      alt={partner.title}
                      className={`mx-auto max-w-full object-contain ${partner.logoClassName}`}
                      loading="lazy"
                    />
                    {partner.displayTitle && (
                      <h3 className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#13271b]">
                        {partner.displayTitle}
                      </h3>
                    )}
                    {partner.description && (
                      <p className="mt-3 max-w-[15rem] text-xs leading-5 text-[#33483b]/78">
                        {partner.description}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <span className="grid h-24 w-24 place-items-center rounded-full border border-[#c69a42]/35 bg-[#07120d] text-3xl font-black text-[#c69a42]">
                      PPP
                    </span>
                    <h3 className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#13271b]">
                      {partner.title}
                    </h3>
                    {partner.description && (
                      <p className="mt-3 max-w-[15rem] text-xs leading-5 text-[#33483b]/78">
                        {partner.description}
                      </p>
                    )}
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 pt-10 pb-20 text-[#fff8e7] sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-[#c69a42]/20 bg-[linear-gradient(135deg,#0a1c12,#06100c)] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
              Partner With G Initiative
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.055em]">
              Let’s run towards a digital future.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
              Partner with us to empower our youth, grow sports, and advance
              digital literacy in Ikeduru.
            </p>
          </div>

          <a
            href="/#partners"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c69a42] px-7 py-4 text-sm font-black text-[#07120d] shadow-[0_20px_60px_rgba(198,154,66,0.25)] transition hover:-translate-y-0.5 hover:bg-[#e3bb62] lg:mt-0"
          >
            Partner With Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-10 max-w-[1440px]">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
              More Youth & Sports Projects
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group flex gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 text-white transition hover:bg-white/[0.08]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-28 rounded-[1rem] object-cover"
                  />
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c69a42]">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl tracking-[-0.045em]">
                      {item.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      <style>{`
        .marathon-preview-button {
          transition: transform 0.45s ease, filter 0.45s ease;
        }

        .marathon-preview-button:focus-visible {
          outline: 3px solid rgba(198, 154, 66, 0.85);
          outline-offset: 4px;
        }

        .marathon-preview-image {
          transition: transform 0.7s ease, filter 0.7s ease;
        }

        .marathon-preview-hint {
          animation: marathonHintPulse 2.8s ease-in-out infinite;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .marathon-preview-button:hover,
        .marathon-preview-button:focus-visible {
          transform: translateY(-3px);
        }

        .marathon-preview-button:hover .marathon-preview-image,
        .marathon-preview-button:focus-visible .marathon-preview-image {
          filter: saturate(1.08) contrast(1.04);
          transform: scale(1.045);
        }

        .marathon-preview-button:hover .marathon-preview-hint,
        .marathon-preview-button:focus-visible .marathon-preview-hint {
          opacity: 1;
          transform: translateY(-2px) scale(1.04);
        }

        .marathon-modal-backdrop {
          animation: marathonFadeIn 0.22s ease-out;
        }

        .marathon-modal-content {
          animation: marathonModalIn 0.32s ease-out;
        }

        @keyframes marathonHintPulse {
          0%, 100% { box-shadow: 0 14px 45px rgba(0, 0, 0, 0.25); }
          50% { box-shadow: 0 18px 55px rgba(198, 154, 66, 0.22); }
        }

        @keyframes marathonFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes marathonModalIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        .marathon-chain-track {
          position: relative;
        }

        .marathon-chain-track::before {
          content: "";
          position: absolute;
          left: 1.35rem;
          top: 1.75rem;
          bottom: 1.75rem;
          width: 2px;
          border-radius: 999px;
          background: linear-gradient(to bottom, rgba(198,154,66,0.2), rgba(226,32,37,0.14), rgba(198,154,66,0.18));
        }

        .marathon-chain-step {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .marathon-chain-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .marathon-chain-step.has-connector::after {
          content: "";
          position: absolute;
          left: 1.35rem;
          top: 3.35rem;
          width: 2px;
          height: calc(100% + 1.25rem);
          border-radius: 999px;
          background: linear-gradient(to bottom, #c69a42, #b63a2f, #c69a42);
          box-shadow: 0 0 22px rgba(198,154,66,0.26);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.78s cubic-bezier(0.22, 1, 0.36, 1) 0.18s;
          z-index: 0;
        }

        .marathon-chain-step.has-connector.is-visible::after {
          transform: scaleY(1);
        }

        .marathon-chain-dot {
          transition: border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease;
        }

        .marathon-chain-step.is-visible .marathon-chain-dot {
          border-color: rgba(198,154,66,0.9);
          transform: scale(1.04);
          animation: marathonChainPulse 2.5s ease-in-out infinite;
        }

        .marathon-chain-arrow {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.55s ease 0.28s, transform 0.55s ease 0.28s, box-shadow 0.55s ease 0.28s;
        }

        .marathon-chain-step.is-visible .marathon-chain-arrow {
          opacity: 1;
          transform: translateY(0);
          filter: drop-shadow(0 10px 12px rgba(182,58,47,0.22));
          animation: marathonChainArrowBounce 1.15s ease-in-out infinite 0.75s;
        }

        .marathon-check-reveal {
          opacity: 0;
          transform: translateX(-18px);
          transition: opacity 0.58s ease, transform 0.58s ease;
        }

        .marathon-check-reveal.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .marathon-check-reveal svg {
          transform: scale(0.7);
          opacity: 0.45;
          transition: transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s;
        }

        .marathon-check-reveal.is-visible svg {
          transform: scale(1);
          opacity: 1;
        }

        @keyframes marathonChainPulse {
          0%, 100% { box-shadow: 0 0 0 8px rgba(198,154,66,0.08), 0 16px 35px rgba(0,0,0,0.24); }
          50% { box-shadow: 0 0 0 12px rgba(182,58,47,0.12), 0 20px 44px rgba(198,154,66,0.2); }
        }

        @keyframes marathonChainArrowBounce {
          0%, 100% { transform: translateY(-2px); }
          50% { transform: translateY(9px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marathon-preview-button,
          .marathon-preview-image,
          .marathon-preview-hint,
          .marathon-modal-backdrop,
          .marathon-modal-content,
          .marathon-chain-step,
          .marathon-chain-step::after,
          .marathon-chain-dot,
          .marathon-chain-arrow,
          .marathon-check-reveal,
          .marathon-check-reveal svg {
            animation: none;
            transition: none;
          }

          .marathon-preview-button:hover,
          .marathon-preview-button:focus-visible,
          .marathon-preview-button:hover .marathon-preview-image,
          .marathon-preview-button:focus-visible .marathon-preview-image {
            transform: none;
          }

          .marathon-chain-step,
          .marathon-check-reveal,
          .marathon-check-reveal svg {
            opacity: 1;
            transform: none;
          }

          .marathon-chain-step.has-connector::after {
            transform: scaleY(1);
          }
        }
      `}</style>

      {selectedImage && (
        <div
          className="marathon-modal-backdrop fixed inset-0 z-[90] grid place-items-center bg-[#07120d]/92 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close image preview"
          />

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:bg-white/18"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="marathon-modal-content relative z-10 max-h-[88vh] max-w-[92vw]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            />

            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#13271b] shadow-[0_18px_55px_rgba(0,0,0,0.22)] sm:text-sm">
              {selectedImage.label}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
