import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Download,
  Globe2,
  Handshake,
  HeartHandshake,
  Leaf,
  Menu,
  ShieldCheck,
  Sprout,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import heroCommunity from "@/assets/hero-community.jpg";
import heroMarathon from "@/assets/hero-marathon.jpg";
import heroFoodSecurity from "@/assets/hero-foodsecurity.jpg";
import gMark from "@/assets/ginitiative-gmark-transparent.png";
import { BrandLogo } from "@/components/BrandLogo";
import { FeaturedInitiatives } from "@/components/FeaturedInitiatives";
import { ImpactMarquee } from "@/components/ImpactMarquee";

export const Route = createFileRoute("/")({
  component: Home,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Impact Areas", href: "#impact-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#partners" },
];

const heroSlides = [heroCommunity, heroMarathon, heroFoodSecurity];

const proofChips = [
  { icon: CalendarDays, title: "2015–2025", sub: "a decade of service" },
  { icon: Users, title: "21 projects", sub: "and initiatives" },
  { icon: Globe2, title: "SDG-aligned", sub: "community development" },
];

const impactStats = [
  {
    icon: Users,
    value: "21",
    label: "Projects & initiatives",
    detail: "Recorded CSR work plus active and future development initiatives.",
  },
  {
    icon: Sprout,
    value: "30,000+",
    label: "Eggs distributed",
    detail: "Nutrition support through the South-East Food Security Project.",
  },
  {
    icon: ShieldCheck,
    value: "1,000+",
    label: "Preventive items shared",
    detail: "Masks and hand sanitizers distributed during COVID-19 response.",
  },
  {
    icon: HeartHandshake,
    value: "17 SDGs",
    label: "Global goals framework",
    detail: "Built around sustainable development and community realignment.",
  },
];

const focusAreas = [
  {
    icon: Sprout,
    title: "Food Security",
    body: "Immediate relief and long-term nutrition systems for vulnerable households.",
  },
  {
    icon: HeartHandshake,
    title: "Health & Wellbeing",
    body: "Awareness, prevention, early detection, and community-based health outreach.",
  },
  {
    icon: Trophy,
    title: "Youth & Sports",
    body: "Grassroots visibility, discipline, talent discovery, and youth engagement.",
  },
  {
    icon: Leaf,
    title: "Sustainable Communities",
    body: "Climate action, cleaner communities, resilience, and development partnerships.",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07120d] text-[#f7f1df] selection:bg-[#e22025] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06100c]/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" aria-label="G Initiative home" className="group flex items-center gap-3">
            <BrandLogo tone="light" size="nav" />
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.92rem] font-medium text-white/78 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/assets/g-initiative-portfolio-2026.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/35 hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Portfolio
            </a>

            <a
              href="#partners"
              className="premium-red-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-[0_18px_50px_rgba(226,32,37,.22)]"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07120d]/95 px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  onClick={() => setMenuOpen(false)}
                  href={link.href}
                  className="rounded-2xl bg-white/[0.04] px-4 py-3 text-white/85"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#partners"
                onClick={() => setMenuOpen(false)}
                className="premium-red-button mt-2 rounded-2xl px-5 py-3 text-center font-bold text-white"
              >
                Partner With Us
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="hero-stage relative min-h-[100svh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          {heroSlides.map((image, index) => (
            <div
              key={index}
              className={`hero-slide hero-slide-${index + 1}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,8,.96)_0%,rgba(4,17,11,.84)_33%,rgba(4,18,12,.54)_64%,rgba(4,12,8,.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_32%,rgba(5,88,45,.22),transparent_34%),radial-gradient(circle_at_20%_95%,rgba(226,32,37,.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,8,.35)_0%,transparent_38%,rgba(4,12,8,.92)_100%)]" />
        <div className="hero-grain absolute inset-0 opacity-[0.15] mix-blend-soft-light" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pb-14">
          <div className="grid items-end gap-12">
            <div className="max-w-5xl">
              <div className="hero-kicker mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.73rem] font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl">
                <span className="hero-kicker-dot h-1.5 w-1.5 rounded-full bg-[#e22025]" />
                Corporate Social Responsibility • Our Journey So Far
              </div>

              <h1 className="hero-title max-w-5xl text-[clamp(3.2rem,8vw,8.8rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#fff8e7]">
                A Decade of Impact<span className="text-[#e22025]">.</span>
                <br />A Future of Sustainable Communities<span className="text-[#e22025]">.</span>
              </h1>

              <div className="mt-8 h-[3px] w-20 rounded-full bg-[#6ea14f] shadow-[0_0_26px_rgba(110,161,79,.45)]" />

              <p className="mt-8 max-w-2xl text-balance text-[1.05rem] leading-8 text-white/78 sm:text-xl">
                Built on the framework of the United Nations Sustainable Development Goals, G Initiative realigns host communities and vulnerable populations toward a sustainable tomorrow.
              </p>

              <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
                {proofChips.map((chip, index) => {
                  const Icon = chip.icon;

                  return (
                    <div
                      key={chip.title}
                      className="proof-chip"
                      style={{ animationDelay: `${0.35 + index * 0.12}s` }}
                    >
                      <Icon className="h-5 w-5 text-[#69b14f]" />

                      <div>
                        <p className="text-sm font-bold text-white">{chip.title}</p>
                        <p className="text-xs text-white/58">{chip.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#impact"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0c9a4b] px-7 py-4 text-base font-bold text-white shadow-[0_20px_55px_rgba(12,154,75,.26)] transition duration-500 hover:-translate-y-0.5 hover:bg-[#10ad56]"
                >
                  Explore Our Impact <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#partners"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-[#6ea14f]/70 bg-black/15 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition duration-500 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                >
                  Partner With Us <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,#07120d)]" />
      </section>

      <ImpactMarquee />

      <section id="impact" className="relative overflow-hidden bg-[#07120d] px-5 py-20 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(105,177,79,.12),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(226,32,37,.09),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
                Our Impact
              </p>

              <h2 className="max-w-xl text-[clamp(2.3rem,4.5vw,5rem)] leading-[0.96] tracking-[-0.04em] text-[#fff8e7]">
                Building stronger communities, together<span className="text-[#e22025]">.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                From emergency response to long-term community development, the work moves across food security, health, education, sports, enterprise, and climate-conscious community renewal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {impactStats.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.label} className="stat-card group">
                    <Icon className="mb-8 h-8 w-8 text-[#6ea14f] transition duration-500 group-hover:scale-110 group-hover:text-[#7bc95d]" />

                    <p className="font-serif text-[clamp(2.2rem,3.4vw,4rem)] leading-none tracking-[-0.04em] text-[#fff8e7]">
                      {item.value}
                    </p>

                    <h3 className="mt-3 text-base font-bold text-white">{item.label}</h3>

                    <p className="mt-3 text-sm leading-6 text-white/55">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f8f2df] px-5 py-20 text-[#13271b] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              About G Initiative
            </p>

            <h2 className="max-w-4xl text-[clamp(2.3rem,4.2vw,4.8rem)] leading-[0.96] tracking-[-0.04em]">
              A CSR movement shaped by research, development, initiatives, innovations, and projects.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#33483b]">
              G Initiative is powered by Gprojects Limited and built to deliver practical, people-centered interventions for host communities and vulnerable populations. The mission is simple: meet urgent needs today while building systems that protect tomorrow.
            </p>
          </div>

          <div className="about-brand-art relative min-h-[460px] overflow-visible">
            <img src={gMark} alt="" aria-hidden="true" className="about-brand-art__mark" />
          </div>
        </div>
      </section>

      <section
        id="impact-areas"
        className="impact-areas-section bg-[#f8f2df] px-5 pt-14 pb-20 text-[#13271b] sm:px-8 lg:px-12 lg:pt-20 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="impact-areas-heading mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-5xl">
              <p className="impact-areas-kicker mb-5 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
                <span className="impact-areas-kicker__dot" />
                Impact Areas
              </p>

              <h2 className="max-w-4xl text-[clamp(2.45rem,4.6vw,5.25rem)] leading-[0.92] tracking-[-0.055em]">
                Focused where communities need it most.
              </h2>

              <div className="impact-areas-heading__line mt-6" />

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#526555] sm:text-lg">
                Each focus area represents a practical channel for long-term community development, resilience, and measurable social impact.
              </p>
            </div>

            <a
              href="#partners"
              className="impact-areas-link inline-flex w-fit items-center gap-2 rounded-full border border-[#13271b]/20 px-5 py-3 text-sm font-bold transition hover:bg-[#13271b] hover:text-white"
            >
              Discuss Partnership <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="impact-areas-grid grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article key={area.title} className="focus-card impact-area-card">
                  <div className="impact-area-card__icon mb-8 grid h-13 w-13 place-items-center rounded-2xl bg-[#0c9a4b]/10 text-[#0c843f]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#4c5f52]">{area.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturedInitiatives />

      <section id="partners" className="relative overflow-hidden bg-[#09150f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,18,13,.98),rgba(7,18,13,.86))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(226,32,37,.16),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              Partners & Investors
            </p>

            <h2 className="max-w-4xl text-[clamp(2.6rem,5vw,5.8rem)] leading-[0.92] tracking-[-0.05em] text-[#fff8e7]">
              The next chapter of impact needs strong partners<span className="text-[#e22025]">.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              G Initiative welcomes corporate sponsors, development agencies, health institutions, investors, community leaders, and individuals ready to build stronger, healthier, and more sustainable communities.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-2xl">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e22025]">
                <Handshake className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Start a partnership conversation</h3>

                <p className="mt-3 text-sm leading-6 text-white/62">
                  Request a sponsorship brief, discuss GrillIt expansion, or partner on food security, health outreach, sports, education, and climate initiatives.
                </p>
              </div>
            </div>

            <a
              href="mailto:partnerships@ginitiative.org"
              className="premium-red-button mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-white"
            >
              Contact Partnerships <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}