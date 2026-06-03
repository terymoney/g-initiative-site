import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Initiative } from "@/data/initiatives";
import type { ImpactProject } from "@/data/projects";

import womenCommunityLineup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/women-community-lineup-and-officials.jpg";
import nwaihaCenterDesignRender from "@/assets/girl-child-women/03-nwaiha-women-development-center/nwaiha-center-design-render.jpeg";
import nwaihaCenterFrontConstruction from "@/assets/girl-child-women/03-nwaiha-women-development-center/nwaiha-center-front-construction.jpeg";
import nwaihaCenterSideBuilding from "@/assets/girl-child-women/03-nwaiha-women-development-center/nwaiha-center-side-building.jpeg";
import nwaihaCenterInteriorRoof from "@/assets/girl-child-women/03-nwaiha-women-development-center/nwaiha-center-interior-roof-progress.jpeg";

const sdgCards = [
  {
    code: "4",
    label: "Quality Education",
    className: "bg-[#c5192d]",
    Icon: BookOpen,
  },
  {
    code: "5",
    label: "Gender Equality",
    className: "bg-[#ff3a21]",
    Icon: HeartHandshake,
  },
  {
    code: "8",
    label: "Decent Work and Economic Growth",
    className: "bg-[#a21942]",
    Icon: BriefcaseBusiness,
  },
  {
    code: "11",
    label: "Sustainable Cities and Communities",
    className: "bg-[#fd9d24]",
    Icon: Building2,
  },
  {
    code: "17",
    label: "Partnerships for the Goals",
    className: "bg-[#19486a]",
    Icon: Handshake,
  },
];

type IconCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

const centerValues: IconCard[] = [
  {
    title: "Community Driven",
    body: "Built through collective contributions and shared vision.",
    Icon: UsersRound,
  },
  {
    title: "Women Focused",
    body: "A dedicated space for growth, empowerment, and well-being.",
    Icon: HeartHandshake,
  },
  {
    title: "Sustainable Impact",
    body: "Strengthening families and communities for a better tomorrow.",
    Icon: Leaf,
  },
  {
    title: "Legacy Project",
    body: "An enduring investment in women and community development.",
    Icon: ShieldCheck,
  },
];

const supportAreas: IconCard[] = [
  {
    title: "Recreation",
    body: "A space for relaxation, wellness activities, and healthy living.",
    Icon: UsersRound,
  },
  {
    title: "Conferences",
    body: "Hosting meetings, conferences, and community gatherings.",
    Icon: Handshake,
  },
  {
    title: "Educational Seminars",
    body: "Promoting knowledge sharing, awareness, and capacity building.",
    Icon: GraduationCap,
  },
  {
    title: "Skill Acquisition",
    body: "Equipping women with practical skills for self-reliance and enterprise.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Counseling",
    body: "Providing emotional support, guidance, and empowerment.",
    Icon: HeartHandshake,
  },
];

const supportStats = [
  {
    title: "Crowd-funded",
    body: "By individuals and well-wishers",
    Icon: UsersRound,
  },
  {
    title: "Community Owned",
    body: "By the people, for the people",
    Icon: Handshake,
  },
  {
    title: "Sustainable Legacy",
    body: "Built for generations to come",
    Icon: Heart,
  },
];

const imageThumbs = [
  {
    src: nwaihaCenterDesignRender,
    alt: "Architectural design render of Nwaiha Women Development Center",
  },
  {
    src: nwaihaCenterFrontConstruction,
    alt: "Front construction view of Nwaiha Women Development Center",
  },
  {
    src: nwaihaCenterSideBuilding,
    alt: "Side building view of Nwaiha Women Development Center",
  },
];

export function NwaihaWomenDevelopmentCenterPage({
  project,
  parentInitiative,
  relatedProjects,
}: {
  project: ImpactProject;
  parentInitiative?: Initiative;
  relatedProjects: ImpactProject[];
}) {
  const relatedProject = relatedProjects[0];

  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-[#07120d] px-5 pt-36 pb-20 text-white sm:px-8 lg:px-12 lg:pt-44 lg:pb-24">
        <img
          src={nwaihaCenterDesignRender}
          alt="Architectural design render of Nwaiha Women Development Center"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,24,14,0.96)_0%,rgba(5,24,14,0.82)_34%,rgba(5,24,14,0.28)_70%,rgba(5,24,14,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(16,119,64,0.22),transparent_34%),linear-gradient(180deg,rgba(5,24,14,0.18),rgba(5,24,14,0.38))]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="max-w-[660px]">
            <div className="mb-7 inline-flex rounded-full bg-[#0c7a3d] px-5 py-2 text-sm font-black text-white shadow-[0_18px_45px_rgba(4,64,31,0.34)]">
              {project.parentInitiativeTitle}
            </div>

            <h1 className="max-w-3xl text-[clamp(3.8rem,7vw,7.5rem)] font-black leading-[0.88] tracking-[-0.075em] text-white drop-shadow-[0_18px_35px_rgba(0,0,0,0.28)]">
              {project.title}
            </h1>

            <p className="mt-7 max-w-[560px] text-lg font-medium leading-8 text-white/90">
              A fully functional event hub for recreation, conferences,
              educational seminars, skill acquisition, and counseling.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#support-this-project"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0b7a3a] px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(8,105,51,0.35)] transition hover:-translate-y-0.5 hover:bg-[#096b33]"
              >
                Support This Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-the-center"
        className="bg-[#fbfdf9] px-5 pt-20 pb-10 text-[#16251c] sm:px-8 lg:px-12 lg:pt-28 lg:pb-12"
      >
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
              About the Center
            </p>
            <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
              A Space Built for Women, By Community Support
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#3f5146]">
              Nwaiha Women Development Center was designed and built through a
              crowdfunding system as a fully functional event hub for women and
              the community.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#3f5146]">
              It provides a safe, empowering, and inspiring environment where
              women can gather, learn, heal, connect, and build the skills
              needed to thrive.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {centerValues.map(({ title, body, Icon }) => (
                <article key={title} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e8f5eb] text-[#0a7a3b]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <h3 className="text-base font-black text-[#17251d]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#536258]">
                      {body}
                    </p>
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_25px_80px_rgba(15,45,25,0.12)]">
              <img
                src={nwaihaCenterFrontConstruction}
                alt="Front construction view of Nwaiha Women Development Center"
                className="h-[390px] w-full object-cover object-center lg:h-[430px]"
              />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {imageThumbs.map((image) => (
                <div
                  key={image.alt}
                  className="overflow-hidden rounded-md bg-white p-1 shadow-[0_15px_45px_rgba(15,45,25,0.1)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-32 w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pt-10 pb-20 text-[#16251c] sm:px-8 lg:px-12 lg:pt-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
            What the Center Supports
          </p>
          <h2 className="max-w-4xl text-[clamp(2.4rem,4vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
            A Hub for Growth, Learning & Well-being
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {supportAreas.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="rounded-xl border border-[#dce7df] bg-white p-7 text-center shadow-[0_20px_60px_rgba(15,45,25,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,45,25,0.1)]"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#eff8f1] text-[#076b34]">
                  <Icon className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-lg font-black text-[#1d3024]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#526258]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfdf9] px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-xl shadow-[0_25px_80px_rgba(15,45,25,0.12)]">
            <img
              src={nwaihaCenterInteriorRoof}
              alt="Interior roof progress of Nwaiha Women Development Center"
              className="h-[420px] w-full object-cover object-center"
            />
          </div>

          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
              Built Through Community Support
            </p>
            <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
              Powered by People. Purpose Driven.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#3f5146]">
              This center is a true testament to the power of community,
              generosity, and a shared vision for women&apos;s empowerment.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#3f5146]">
              Every contribution, big or small, brought this dream to life.
              Today, it stands as a legacy of hope, unity, and transformation.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {supportStats.map(({ title, body, Icon }) => (
                <article key={title}>
                  <Icon className="h-11 w-11 text-[#0a7a3b]" />
                  <h3 className="mt-4 text-lg font-black text-[#17251d]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#526258]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
              Our Impact Alignment
            </p>
            <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
              Advancing the Sustainable Development Goals
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#526258]">
              Nwaiha Women Development Center contributes to the advancement of
              the following Sustainable Development Goals (SDGs):
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-5">
            {sdgCards.map(({ code, label, className, Icon }) => (
              <article
                key={code}
                className={`${className} min-h-[150px] rounded-lg p-5 text-white shadow-[0_20px_55px_rgba(0,0,0,0.12)]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl font-black leading-none">
                    {code}
                  </span>
                  <Icon className="h-8 w-8" />
                </div>
                <p className="mt-3 text-xs font-black uppercase leading-4">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {parentInitiative && (
        <section className="bg-white px-5 pb-20 text-[#16251c] sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative overflow-hidden rounded-xl bg-[#eaf4ec] p-8 shadow-[0_24px_75px_rgba(15,45,25,0.1)] sm:p-10 lg:p-12">
              <img
                src={womenCommunityLineup}
                alt="Women and community representatives connected to the initiative"
                className="absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover object-center lg:block"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#eaf4ec_0%,#eaf4ec_43%,rgba(234,244,236,0.72)_67%,rgba(234,244,236,0.24)_100%)]" />

              <div className="relative max-w-2xl">
                <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
                  Part of a Greater Vision
                </p>
                <h2 className="text-[clamp(2.2rem,3.4vw,4.2rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
                  Connected to the Girl Child & Women Development Initiative
                </h2>
                <p className="mt-6 text-base leading-8 text-[#3f5146]">
                  Nwaiha Women Development Center is a key project under the{" "}
                  {parentInitiative.title.toLowerCase()}, created to empower
                  women, uplift communities, and build a better future for all.
                </p>
                <a
                  href={`/initiatives/${parentInitiative.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0b7a3a] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#096b33]"
                >
                  Explore More Projects <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        id="support-this-project"
        className="bg-[linear-gradient(90deg,#063119,#0b5d2d)] px-5 py-8 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.035em]">
              Help Sustain This Legacy
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/74">
              Your support can help maintain the center, run programs, and
              impact more women and communities.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/#partners"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#13a650] px-7 py-4 text-sm font-black text-white shadow-[0_16px_45px_rgba(0,0,0,0.18)]"
            >
              <Heart className="h-4 w-4 fill-white" />
              Donate Now
            </a>
            <a
              href="/#partners"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-black shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
              style={{ color: "#0b3a1f" }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Partner With Us</span>
            </a>
          </div>
        </div>
      </section>

      {relatedProject && (
        <section className="bg-[#fbfdf9] px-5 py-14 text-[#16251c] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="overflow-hidden rounded-xl border border-[#dce7df] bg-white shadow-[0_20px_60px_rgba(15,45,25,0.06)]">
              <div className="grid gap-0 md:grid-cols-[330px_1fr_auto] md:items-center">
                <div className="h-56 overflow-hidden bg-[#eaf4ec] md:h-full">
                  <img
                    src={relatedProject.image || womenCommunityLineup}
                    alt={relatedProject.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
                    Related Project
                  </p>
                  <h3 className="mt-2 max-w-2xl text-2xl font-black tracking-[-0.04em] text-[#17251d] md:text-3xl">
                    {relatedProject.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#526258]">
                    {relatedProject.description}
                  </p>
                </div>

                <div className="px-6 pb-6 md:px-8 md:pb-0">
                  <a
                    href={`/projects/${relatedProject.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#16251c]/15 px-5 py-3 text-sm font-black text-[#16251c] transition hover:bg-[#f2f7f3]"
                  >
                    View related project <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}