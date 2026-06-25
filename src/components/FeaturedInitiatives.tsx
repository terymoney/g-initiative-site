import { ArrowRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";
import foodSecurityCover from "@/assets/initiativessouth-east-food-security/covid_egg_01_hero_children_receiving_eggs.jpg";
import youthSportsCover from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runner-portrait-sepia.jpeg";
import educationCover from "@/assets/essay/ikeduru-essay-classroom-wide.jpeg";
import digitalYouthCover from "@/assets/aspire/aspire-masterclass-audience-wide.jpg";
import girlChildWomenCover from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-full-girls-lineup-wide.jpg";

const featuredInitiativeSlugs = new Set([
  "south-east-food-security-initiative",
  "youth-sports-development-initiative",
  "education-leadership-empowerment-initiative",
  "digital-youth-project",
  "build-it",
  "girl-child-women-development-initiative",
]);

const featuredCoverImages: Record<string, string> = {
  "south-east-food-security-initiative": foodSecurityCover,
  "youth-sports-development-initiative": youthSportsCover,
  "education-leadership-empowerment-initiative": educationCover,
  "digital-youth-project": digitalYouthCover,
  "girl-child-women-development-initiative": girlChildWomenCover,
};

export function FeaturedInitiatives() {
  const featuredInitiatives = initiatives.filter((initiative) =>
    featuredInitiativeSlugs.has(initiative.slug),
  );

  return (
    <section
      id="initiatives"
      className="bg-[#fcebd6] px-5 py-20 text-[#13271b] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
              Featured Initiatives
            </p>

            <h2 className="font-serif text-[clamp(3rem,6vw,7rem)] font-normal leading-[0.86] tracking-[-0.065em] text-[#13271b]">
              The bigger stories behind the impact.
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-2xl text-lg leading-8 text-[#526555]">
              Explore G Initiative’s major impact umbrellas — from food security
              and health to education, enterprise, sports, culture, and
              sustainable communities.
            </p>

            <a
              href="/projects"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#13271b]/20 bg-white/35 px-5 py-3 text-sm font-black text-[#13271b] transition hover:-translate-y-0.5 hover:bg-white/60"
            >
              View all recorded projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredInitiatives.map((initiative, index) => {
            const isFeatured = index === 0;
            const coverImage =
              featuredCoverImages[initiative.slug] ?? initiative.image;

            return (
              <a
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className={[
                  "group relative overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_28px_80px_rgba(16,35,25,0.12)]",
                  isFeatured
                    ? "min-h-[430px] xl:col-span-2"
                    : "min-h-[470px]",
                ].join(" ")}
              >
                <img
                  src={coverImage}
                  alt={initiative.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.2)_0%,rgba(7,18,13,0.44)_36%,rgba(7,18,13,0.92)_100%)]" />

                <div className="absolute inset-0 z-10 flex flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#fff8e7]/92 px-3 py-1.5 text-[0.61rem] font-black uppercase tracking-[0.13em] text-[#13271b] shadow-[0_8px_22px_rgba(0,0,0,0.12)]">
                      {initiative.eyebrow}
                    </span>

                    <span className="rounded-full bg-[#e22025] px-3 py-1.5 text-[0.61rem] font-black uppercase tracking-[0.13em] text-white shadow-[0_10px_26px_rgba(226,32,37,0.25)]">
                      {initiative.status}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-3">
                      <span className="inline-flex rounded-full border border-[#c69a42]/25 bg-[#07120d]/48 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#c69a42] shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                        {initiative.projectCountLabel}
                      </span>
                    </div>

                    <h3
                      className={[
                        "max-w-[96%] font-serif font-normal leading-[0.9] tracking-[-0.055em] text-[#fff8e7] drop-shadow-[0_4px_18px_rgba(0,0,0,0.32)]",
                        isFeatured
                          ? "text-[clamp(1.95rem,3vw,3.65rem)]"
                          : "text-[clamp(1.55rem,2.15vw,2.75rem)]",
                      ].join(" ")}
                    >
                      {initiative.title}
                    </h3>

                    <p
                      className={[
                        "mt-3 max-w-[96%] overflow-hidden text-white/76",
                        "[display:-webkit-box] [-webkit-box-orient:vertical]",
                        isFeatured
                          ? "text-[0.9rem] leading-6 sm:text-[0.95rem] [-webkit-line-clamp:2]"
                          : "text-[0.78rem] leading-5 sm:text-[0.86rem] [-webkit-line-clamp:3]",
                      ].join(" ")}
                    >
                      {initiative.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex max-w-[68%] flex-wrap gap-1.5">
                        {initiative.sdgs.slice(0, 4).map((sdg) => (
                          <span
                            key={sdg}
                            className="rounded-full border border-white/10 bg-white/12 px-2.5 py-1 text-[0.58rem] font-black text-white/82 backdrop-blur"
                          >
                            {sdg}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#fff8e7] px-4 py-2 text-[0.78rem] font-black text-[#13271b] transition group-hover:bg-[#e22025] group-hover:text-white">
                        View story <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
