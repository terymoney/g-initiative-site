import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import buildItProjectsCover from "@/assets/digital-youth-assets/campus/buildit-gprojects-construction-trade-hero.jpeg";
import { SiteHeader } from "@/components/initiatives/SiteHeader";
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

type ArchiveFilter = "All" | ProjectCategory | "Construction & Trade";

const archiveFilters: ArchiveFilter[] = [
  ...projectCategories,
  "Construction & Trade",
];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState<ArchiveFilter>("All");

  const buildItInitiative = useMemo(() => {
    return initiatives.find((initiative) => initiative.slug === "build-it");
  }, []);

  const showBuildItInitiative =
    Boolean(buildItInitiative) &&
    (activeCategory === "All" || activeCategory === "Construction & Trade");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Construction & Trade") return false;

      return project.category === activeCategory;
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

  const visibleArchiveCount =
    filteredProjects.length + (showBuildItInitiative ? 1 : 0);

  const totalArchiveCount = projects.length + (buildItInitiative ? 1 : 0);

  return (
    <main className="projects-page min-h-screen bg-[#07120d] text-[#f7f1df]">
      <SiteHeader />

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
                Showing {visibleArchiveCount} of {totalArchiveCount} archive
                records.
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#526555]">
                Filter by project category
              </p>

              <div className="projects-filter-bar">
                {archiveFilters.map((category) => (
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
            {showBuildItInitiative && buildItInitiative && (
              <section key={buildItInitiative.slug}>
                <div className="mb-7 border-b border-[#13271b]/10 pb-5">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#e22025]">
                    Part of {buildItInitiative.eyebrow}
                  </p>

                  <a
                    href={`/initiatives/${buildItInitiative.slug}`}
                    className="group inline-flex items-end gap-3"
                    aria-label={`View ${buildItInitiative.title}`}
                  >
                    <h2 className="font-serif text-[clamp(2.1rem,3.6vw,4rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#13271b] transition group-hover:text-[#e22025]">
                      {buildItInitiative.title}
                    </h2>

                    <ArrowRight className="mb-2 hidden h-6 w-6 text-[#e22025] transition group-hover:translate-x-1 sm:block" />
                  </a>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  <article className="projects-card">
                    <a
                      href={`/initiatives/${buildItInitiative.slug}`}
                      className="projects-card__image-wrap"
                      aria-label={`View ${buildItInitiative.title}`}
                    >
                      <img
                        src={buildItProjectsCover}
                        alt={buildItInitiative.title}
                        className="projects-card__image"
                      />

                      <div className="projects-card__status">
                        {buildItInitiative.status}
                      </div>
                    </a>

                    <div className="projects-card__body">
                      <div className="projects-card__meta">
                        <span>{buildItInitiative.eyebrow}</span>
                        <span>{buildItInitiative.projectCountLabel}</span>
                      </div>

                      <h2>{buildItInitiative.title}</h2>

                      <p>{buildItInitiative.description}</p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={`/initiatives/${buildItInitiative.slug}`}
                          className="projects-card__link"
                        >
                          View initiative <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            )}

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
