import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, Menu, Play, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { GForTheGirlChildProjectPage } from "@/components/projects/GForTheGirlChildProjectPage";
import { NwaihaWomenDevelopmentCenterPage } from "@/components/projects/NwaihaWomenDevelopmentCenterPage";
import { IkeduruEssayCompetitionPage } from "@/components/projects/IkeduruEssayCompetitionPage";
import { getInitiativeBySlug } from "@/data/initiatives";
import { getProjectBySlug, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailPage,
});

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Impact Areas", href: "/#impact-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#partners" },
];

function ProjectDetailPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { slug } = Route.useParams();

  const project = getProjectBySlug(slug);
  const parentInitiative = project
    ? getInitiativeBySlug(project.parentInitiativeSlug)
    : undefined;

  const relatedProjects = project
    ? projects
        .filter(
          (item) =>
            item.slug !== project.slug &&
            item.parentInitiativeSlug === project.parentInitiativeSlug,
        )
        .slice(0, 3)
    : [];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#07120d] px-5 py-32 text-white">
        <div className="mx-auto max-w-3xl">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </a>
          <h1 className="mt-10 font-serif text-5xl">Project not found.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page min-h-screen bg-[#07120d] text-[#13271b]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06100c]/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="/"
            aria-label="G Initiative home"
            className="flex items-center gap-3"
          >
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
              href="/#partners"
              className="premium-red-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white"
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
            </div>
          </div>
        )}
      </header>

      {project.slug === "g-for-the-girl-child-project" ? (
        <GForTheGirlChildProjectPage
          project={project}
          parentInitiative={parentInitiative}
          relatedProjects={relatedProjects}
        />
      ) : project.slug === "ikeduru-essay-competition" ? (
        <IkeduruEssayCompetitionPage
          project={project}
          parentInitiative={parentInitiative}
          relatedProjects={relatedProjects}
        />
      ) : project.slug === "nwaiha-women-development-center" ? (
        <NwaihaWomenDevelopmentCenterPage
          project={project}
          parentInitiative={parentInitiative}
          relatedProjects={relatedProjects}
        />
      ) : (
        <>
          <section className="relative overflow-hidden bg-[#fcebd6] px-5 pt-36 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pt-44 lg:pb-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(198,154,66,0.13),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(12,154,75,0.1),transparent_32%)]" />
            <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div>
                <a
                  href="/projects"
                  className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#13271b]/70 transition hover:text-[#13271b]"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to recorded projects
                </a>

                <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
                  {project.category} • {project.status}
                </p>

                <h1 className="font-serif text-[clamp(3.2rem,6.8vw,7.8rem)] font-normal leading-[0.86] tracking-[-0.07em] text-[#13271b]">
                  {project.title}
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#33483b]">
                  {project.overview}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.sdgs.map((sdg) => (
                    <span
                      key={sdg}
                      className="rounded-full bg-[#07120d] px-3 py-1.5 text-xs font-black text-[#fff8e7]"
                    >
                      {sdg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_30px_90px_rgba(16,35,25,0.16)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.02),rgba(7,18,13,0.64))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                    Project Story
                  </p>
                  <h2 className="max-w-xl font-serif text-[clamp(2.2rem,3.6vw,4.2rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#fff8e7]">
                    Part of {project.parentInitiativeTitle}
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#fcebd6] px-5 pb-20 text-[#13271b] sm:px-8 lg:px-12 lg:pb-28">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid gap-5 lg:grid-cols-3">
                <article className="rounded-[1.6rem] border border-[#13271b]/10 bg-white/45 p-6 shadow-[0_18px_55px_rgba(16,35,25,0.07)]">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#e22025]">
                    Source
                  </p>
                  <h2 className="font-serif text-4xl font-normal leading-[0.95] tracking-[-0.055em]">
                    {project.pathway.source}
                  </h2>
                </article>

                <article className="rounded-[1.6rem] border border-[#13271b]/10 bg-white/45 p-6 shadow-[0_18px_55px_rgba(16,35,25,0.07)]">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#e22025]">
                    Output / Byproduct
                  </p>
                  <h2 className="font-serif text-4xl font-normal leading-[0.95] tracking-[-0.055em]">
                    {project.pathway.output}
                  </h2>
                </article>

                <article className="rounded-[1.6rem] border border-[#13271b]/10 bg-white/45 p-6 shadow-[0_18px_55px_rgba(16,35,25,0.07)]">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#e22025]">
                    Impact
                  </p>
                  <h2 className="font-serif text-4xl font-normal leading-[0.95] tracking-[-0.055em]">
                    {project.pathway.impact}
                  </h2>
                </article>
              </div>

              {parentInitiative && (
                <div className="mt-8 rounded-[1.8rem] bg-[#07120d] p-6 text-[#fff8e7] sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
                  <div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#c69a42]">
                      Connected Initiative
                    </p>
                    <h2 className="font-serif text-[clamp(2.1rem,4vw,4.2rem)] font-normal leading-[0.92] tracking-[-0.055em]">
                      {parentInitiative.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">
                      {parentInitiative.description}
                    </p>
                  </div>

                  <a
                    href={`/initiatives/${parentInitiative.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#fff8e7] px-5 py-3 text-sm font-black text-[#13271b] lg:mt-0"
                  >
                    View initiative story <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </section>

          <section className="bg-[#fff3e4] px-5 py-20 text-[#13271b] sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
                  What Happened
                </p>
                <h2 className="font-serif text-[clamp(2.6rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.055em]">
                  The specific project story.
                </h2>
                {project.location && (
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#526555]">
                    {project.location}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <article
                    key={item}
                    className="rounded-[1.4rem] border border-[#13271b]/10 bg-white/45 p-5 shadow-[0_18px_55px_rgba(16,35,25,0.07)]"
                  >
                    <p className="leading-7 text-[#33483b]">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#fcebd6] px-5 py-20 text-[#13271b] sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1440px]">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#07120d] shadow-[0_30px_90px_rgba(16,35,25,0.16)]">
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className="h-[360px] w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.94),rgba(7,18,13,0.38))]" />
                <div className="absolute inset-0 flex items-center justify-between gap-8 p-6 sm:p-10">
                  <div>
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
                      Media Placeholder
                    </p>
                    <h2 className="max-w-2xl font-serif text-[clamp(2.5rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#fff8e7]">
                      Add project photos and videos here later.
                    </h2>
                    <p className="mt-4 max-w-xl text-white/68">
                      When the owner sends more materials, this section can become a
                      gallery, video story, or proof archive for this exact project.
                    </p>
                  </div>

                  <button
                    className="hidden h-24 w-24 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur lg:grid"
                    aria-label="Video placeholder"
                  >
                    <Play className="h-10 w-10 fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {relatedProjects.length > 0 && (
            <section className="bg-[#fff3e4] px-5 pb-20 text-[#13271b] sm:px-8 lg:px-12 lg:pb-28">
              <div className="mx-auto max-w-[1440px]">
                <div className="mb-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
                      Related Projects
                    </p>
                    <h2 className="font-serif text-5xl tracking-[-0.055em]">
                      More under this initiative.
                    </h2>
                  </div>

                  <a
                    href="/projects"
                    className="hidden items-center gap-2 rounded-full border border-[#13271b]/20 px-5 py-3 text-sm font-bold sm:inline-flex"
                  >
                    All projects <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {relatedProjects.map((item) => (
                    <a
                      key={item.slug}
                      href={`/projects/${item.slug}`}
                      className="project-related-card"
                    >
                      <img src={item.image} alt={item.title} />
                      <div>
                        <span>{item.category}</span>
                        <h3>{item.title}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}