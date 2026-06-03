import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { initiatives } from "@/data/initiatives";
import {
  projectCategories,
  projects,
  recordedCsrEvidenceImage,
  type ProjectCategory,
} from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Impact Areas", href: "/#impact-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#partners" },
];

function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All",
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return activeCategory === "All" || project.category === activeCategory;
    });
  }, [activeCategory]);

  const groupedProjects = useMemo(() => {
    return initiatives
      .map((initiative) => ({
        initiative,
        items: filteredProjects.filter(
          (project) => project.parentInitiativeSlug === initiative.slug,
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredProjects]);

  return (
    <main className="projects-page min-h-screen bg-[#07120d] text-[#f7f1df]">
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

      <section className="projects-hero">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:px-12 lg:pb-28 lg:pt-44">
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
              Recorded CSR Projects
            </p>

            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,8.8rem)] font-normal leading-[0.86] tracking-[-0.07em] text-[#fff8e7]">
              Specific stories. Connected back to the bigger mission
              <span className="text-[#e22025]">.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
              Browse selected CSR projects documented in the portfolio and
              connected to their broader initiative stories.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <img
              src={recordedCsrEvidenceImage}
              alt="Recorded CSR projects from G Initiative portfolio"
              className="h-full max-h-[440px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="projects-list-section bg-[#fcebd6] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
                Archive Filters
              </p>

              <h2 className="font-serif text-[clamp(2.6rem,4.8vw,5.2rem)] font-normal leading-[0.9] tracking-[-0.055em]">
                Find projects by theme.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#526555]">
                Showing {filteredProjects.length} of {projects.length} project
                records.
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#526555]">
                Filter by project category
              </p>

              <div className="projects-filter-bar">
                {projectCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`projects-filter-pill ${
                      activeCategory === category
                        ? "projects-filter-pill--active"
                        : ""
                    }`}
                  >
                    {category === "All" ? "All categories" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 space-y-16">
            {groupedProjects.map(({ initiative, items }) => (
              <section key={initiative.slug}>
                <div className="mb-7 border-b border-[#13271b]/10 pb-5">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#e22025]">
                    Part of {initiative.eyebrow}
                  </p>

                  <a
                    href={`/initiatives/${initiative.slug}`}
                    className="group inline-flex items-end gap-3"
                    aria-label={`View ${initiative.title}`}
                  >
                    <h2 className="font-serif text-[clamp(2.1rem,3.6vw,4rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#13271b] transition group-hover:text-[#e22025]">
                      {initiative.title}
                    </h2>

                    <ArrowRight className="mb-2 hidden h-6 w-6 text-[#e22025] transition group-hover:translate-x-1 sm:block" />
                  </a>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((project) => {
                    const hasStoryPage = Boolean(project.storyReady);
                    const cardHref = hasStoryPage
                      ? `/projects/${project.slug}`
                      : `/initiatives/${project.parentInitiativeSlug}`;

                    return (
                      <article key={project.slug} className="projects-card">
                        <a
                          href={cardHref}
                          className="projects-card__image-wrap"
                          aria-label={`View ${project.title}`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="projects-card__image"
                          />

                          <div className="projects-card__status">
                            {project.status}
                          </div>
                        </a>

                        <div className="projects-card__body">
                          <div className="projects-card__meta">
                            <span>{project.category}</span>
                            {project.year && <span>{project.year}</span>}
                          </div>

                          <h2>{project.title}</h2>

                          <p>{project.description}</p>

                          <div className="mt-7 flex flex-wrap gap-3">
                            <a href={cardHref} className="projects-card__link">
                              View project <ArrowRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}