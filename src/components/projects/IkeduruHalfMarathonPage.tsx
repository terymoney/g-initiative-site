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
  type LucideIcon,
} from "lucide-react";
import { IkeduruMarathonRunner } from "@/components/projects/IkeduruMarathonRunner";
import { IkeduruRouteMap } from "@/components/projects/IkeduruRouteMap";
import hydrationSupport from "@/assets/ikeduru-half-marathon/ikeduru-marathon-athlete-hydration-support.jpeg";
import organizersPortrait from "@/assets/ikeduru-half-marathon/ikeduru-marathon-organizers-portrait.jpeg";
import runnerPortrait from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runner-portrait-sepia.jpeg";
import runnersRoadWide from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runners-road-wide.jpeg";
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

const assets = {
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

const partners = [
  "G Initiative / G-Projects Ltd",
  "Government of Imo State",
  "Ikeduru Local Government Area",
  "A Public/Private Partnership Initiative",
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

export function IkeduruHalfMarathonPage({
  project,
  parentInitiative,
  relatedProjects = [],
}: IkeduruHalfMarathonPageProps) {
  const related = relatedProjects.slice(0, 2);
  const initiativeTitle = parentInitiative?.title ?? project.parentInitiativeTitle;

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
            <img
              src={assets.hydration}
              alt="Athlete receiving hydration support during the Ikeduru Half Marathon"
              className="h-[360px] w-full object-cover lg:h-[520px]"
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
            <img
              src={assets.organizers}
              alt="Ikeduru Half Marathon organizers"
              className="h-[320px] w-full object-cover"
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
              <img
                src={assets.roadRace}
                alt="Ikeduru Half Marathon runners on the road"
                className="h-[320px] w-full object-cover"
              />
            </article>

            <div className="grid gap-3 sm:grid-cols-2">
              {impactNotes.map((note) => (
                <article
                  key={note}
                  className="flex gap-3 rounded-[1.2rem] bg-[#fff8e7] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c69a42]" />
                  <p className="text-sm leading-6 text-[#33483b]">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-10 text-[#13271b] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] bg-[#fff8e7] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-7">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
            Real Partners & Support Structure
          </p>
          <div className="grid gap-3 md:grid-cols-4">
            {partners.map((partner) => (
              <article
                key={partner}
                className="flex min-h-[108px] items-center justify-center rounded-[1.1rem] border border-[#13271b]/10 bg-white/55 p-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#13271b]"
              >
                {partner}
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
    </>
  );
}
