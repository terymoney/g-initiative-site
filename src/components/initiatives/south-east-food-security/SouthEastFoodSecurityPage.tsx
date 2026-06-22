import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  HeartHandshake,
  Play,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { Initiative } from "@/data/initiatives";
import projectFood from "@/assets/project-food.jpg";
import heroFoodSecurity from "@/assets/hero-foodsecurity.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import seFoodSecurityCardCommunityOutreach from "@/assets/initiativessouth-east-food-security/se-food-security-card-community-outreach.jpeg";
import seFoodSecurityCommunityDistribution from "@/assets/initiativessouth-east-food-security/se-food-security-community-distribution.jpeg";
import seFoodSecurityFieldTeam from "@/assets/initiativessouth-east-food-security/se-food-security-field-team.jpeg";
import seFoodSecurityAccessRoad from "@/assets/initiativessouth-east-food-security/se-food-security-access-road.jpeg";
import seFoodSecurityCultivationWalkway from "@/assets/initiativessouth-east-food-security/se-food-security-cultivation-walkway.jpeg";
import seFoodSecurityGardenOverview from "@/assets/initiativessouth-east-food-security/se-food-security-garden-overview.jpeg";
import seFoodSecurityGreenFieldCloseup from "@/assets/initiativessouth-east-food-security/se-food-security-green-field-closeup.jpeg";
import seFoodSecuritySiloFieldVisit from "@/assets/initiativessouth-east-food-security/se-food-security-silo-field-visit.jpeg";

type PathwayIcon = ComponentType<{ className?: string }>;

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
      <path d="M8 32h24V14H8v18Z" />
      <path d="M32 21h6l4 5v6H32V21Z" />
      <path d="M14 38a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M36 38a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M18 34h14" />
    </svg>
  );
}

const pathwayNodes: {
  id: string;
  label: string;
  sub: string;
  eyebrow?: string;
  Icon: PathwayIcon;
  gridClass: string;
}[] = [
  {
    id: "source",
    label: "Food Source",
    sub: "Local farms & systems",
    eyebrow: "Start",
    Icon: Sprout as PathwayIcon,
    gridClass: "food-pathway-node--source",
  },
  {
    id: "isabella",
    label: "Isabella Farms & Resort",
    sub: "Future agro-enterprise expansion",
    eyebrow: "Future branch",
    Icon: Sprout as PathwayIcon,
    gridClass: "food-pathway-node--isabella",
  },
  {
    id: "agro",
    label: "Agro-SME Feed Support",
    sub: "Preventing starvation",
    eyebrow: "Recorded CSR",
    Icon: FeedSupportIcon as PathwayIcon,
    gridClass: "food-pathway-node--agro",
  },
  {
    id: "eggs",
    label: "Egg Distribution",
    sub: "30,000 fresh and healthy eggs",
    eyebrow: "Nutrition support",
    Icon: EggClusterIcon as PathwayIcon,
    gridClass: "food-pathway-node--eggs",
  },
  {
    id: "families",
    label: "Children & Families",
    sub: "Vulnerable households",
    eyebrow: "Beneficiaries",
    Icon: Users as PathwayIcon,
    gridClass: "food-pathway-node--families",
  },
  {
    id: "storage",
    label: "Food Storage",
    sub: "Preserving support",
    eyebrow: "System branch",
    Icon: StorageIcon as PathwayIcon,
    gridClass: "food-pathway-node--storage",
  },
  {
    id: "distribution",
    label: "Distribution Systems",
    sub: "Moving food to households",
    eyebrow: "System branch",
    Icon: DistributionIcon as PathwayIcon,
    gridClass: "food-pathway-node--distribution",
  },
  {
    id: "resilience",
    label: "Food Resilience",
    sub: "Long-term community protection",
    eyebrow: "Outcome",
    Icon: ShieldCheck as PathwayIcon,
    gridClass: "food-pathway-node--resilience",
  },
];

const pathwayPaths = [
  "M96 230 C150 230 174 230 226 230",
  "M96 230 C150 150 174 100 226 92",
  "M326 230 C375 230 398 230 446 230",
  "M546 230 C595 230 618 230 666 230",
  "M766 230 C815 170 838 126 886 116",
  "M766 230 C815 290 838 334 886 344",
  "M986 116 C1030 126 1060 166 1104 230",
  "M986 344 C1030 334 1060 294 1104 230",
];

const southEastStoryBlocks = [
  {
    number: "01",
    eyebrow: "The Challenge",
    title: "Food insecurity became more visible during crisis.",
    body:
      "When COVID-19 disrupted livelihoods and uncertainty spread across communities, many families with little or no savings were pushed into food insecurity. Children and vulnerable households became especially exposed to malnutrition, hunger, and the fear of being forgotten.",
    image: seFoodSecurityCommunityDistribution,
    imageAlt: "Community members gathered during food-security support",
    imageFirst: true,
  },
  {
    number: "02",
    eyebrow: "The Intervention",
    title: "Simple nutrition support with real household value.",
    body:
      "G Initiative responded with practical food-security support, including the distribution of 30,000 fresh and healthy eggs to curb malnutrition in children. This direct intervention brought protein-rich nutrition closer to families who needed immediate relief.",
    image: projectFood,
    imageAlt:
      "Eggs representing the 30,000 fresh and healthy eggs distribution project",
    imageFirst: false,
  },
  {
    number: "03",
    eyebrow: "Long-Term Vision",
    title: "Beyond relief, the goal is food resilience.",
    body:
      "The initiative goes beyond one-time support. It connects emergency relief with Agro-SME support, food storage, distribution systems, and sustainable nutrition pathways that can strengthen vulnerable communities across the South-East.",
    image: seFoodSecurityFieldTeam,
    imageAlt: "Field team supporting food-security implementation",
    imageFirst: true,
  },
];

const southEastProjects: {
  title: string;
  label: string;
  summary: string;
  body: string;
  image?: string;
  images?: string[];
}[] = [
  {
    title: "COVID-19 Quick Response / 30,000 Egg Distribution",
    label: "Recorded CSR Project • 2019",
    summary:
      "Distribution of 30,000 fresh and healthy eggs to curb malnutrition in children.",
    body:
      "This recorded CSR project provided immediate nutrition support during a period of social and economic uncertainty. By distributing eggs directly to vulnerable families, G Initiative helped reduce child malnutrition risk and supported households with accessible protein-rich food.",
    image: projectFood,
  },
  {
    title: "Agro-SME Feed Support",
    label: "Recorded CSR Project • 2019–2020",
    summary: "Provision of feed to support Agro-SME to prevent starvation.",
    body:
      "This project supported small agro-enterprises with feed provision between 2019 and 2020. It helped protect local food production, support small operators, and reduce the risk of starvation during a difficult period for communities and food systems.",
    image: seFoodSecuritySiloFieldVisit,
  },
  {
    title: "Food Storage & Distribution Support",
    label: "Programme Track",
    summary:
      "Strengthening the systems that move food from source to households.",
    body:
      "Food storage and distribution form part of the broader South-East Food Security vision. The goal is to improve how food is preserved, organized, coordinated, and moved so that vulnerable communities can access support beyond emergency moments.",
    image: seFoodSecurityCommunityDistribution,
  },
  {
    title: "Sustainable Nutrition & Community Food Support",
    label: "Programme Track",
    summary: "Supporting households with dignity, care, and consistency.",
    body:
      "This track focuses on vulnerable families, children, and communities that need reliable nutrition support. It connects local resources, field coordination, community outreach, and practical food assistance into a more organized model for household resilience.",
    image: seFoodSecurityCardCommunityOutreach,
  },
  {
    title: "Isabella Farms & Resort",
    label: "Future / Expansion Concept",
    summary:
      "A future agro-enterprise expansion connected to food resilience.",
    images: [seFoodSecurityCultivationWalkway, seFoodSecurityGardenOverview],
  },
];

const impactProof = [
  {
    value: "30,000+",
    label: "Fresh and healthy eggs distributed to curb child malnutrition",
  },
  {
    value: "2019–2020",
    label: "Agro-SME feed support to protect food systems",
  },
  {
    value: "Families",
    label: "Vulnerable households supported through direct food relief",
  },
  {
    value: "Resilience",
    label: "A long-term vision for storage and distribution",
  },
];

const keyHighlights = [
  "Initiated as a self-funded social impact effort.",
  "Distributed 30,000 fresh and healthy eggs to curb malnutrition in children.",
  "Provided feed support for Agro-SME to prevent starvation between 2019 and 2020.",
  "Built around food storage, distribution systems, and long-term community resilience.",
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
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-[#fff3e4] pt-28">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[66%]">
          <img
            src={heroCommunity}
            alt="South-East food security community impact"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff3e4_0%,rgba(255,243,228,0.98)_13%,rgba(255,231,198,0.9)_30%,rgba(255,231,198,0.58)_48%,rgba(255,231,198,0.2)_66%,rgba(255,243,228,0.02)_82%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_48%,rgba(255,235,207,0.76),rgba(255,235,207,0.36)_28%,transparent_54%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,243,228,0.18)_0%,rgba(255,243,228,0)_48%,#fff3e4_100%)]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(198,154,66,0.16),transparent_30%),radial-gradient(circle_at_82%_35%,rgba(226,32,37,0.09),transparent_24%)]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(760px-7rem)] max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-24">
          <div>
            <a
              href="/#initiatives"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#13271b]/15 bg-white/45 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#13271b]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to initiatives
            </a>

            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
              {initiative.title}
            </p>

            <h1 className="max-w-3xl font-serif text-[clamp(3.6rem,7vw,8.6rem)] font-normal leading-[0.86] tracking-[-0.07em] text-[#13271b]">
              Building food resilience. Protecting families. Strengthening
              communities.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#33483b] sm:text-lg">
              A self-funded social impact initiative strengthening food systems
              across the South-East — from emergency nutrition relief to Agro-SME
              support, food storage, distribution, and long-term community
              resilience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 text-center">
            <p className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#e22025]">
              Source-to-impact ecosystem
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.6rem,4.5vw,5.5rem)] leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              How food support moves from source to resilience.
            </h2>
          </div>

          <div className="food-pathway-map">
            <svg
              className="food-pathway-lines"
              viewBox="0 0 1200 430"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {pathwayPaths.map((path, index) => (
                <g key={index}>
                  <path d={path} className="food-pathway-line" />
                  <path d={path} className="food-pathway-flow" />
                </g>
              ))}
            </svg>

            <div className="food-pathway-grid">
              {pathwayNodes.map((node) => {
                const Icon = node.Icon;

                return (
                  <article
                    key={node.id}
                    className={`food-pathway-node ${node.gridClass}`}
                  >
                    <div className="food-pathway-card">
                      {node.eyebrow && (
                        <p className="food-pathway-eyebrow">{node.eyebrow}</p>
                      )}

                      <div className="food-pathway-icon">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3>{node.label}</h3>

                      <p>{node.sub}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_35px_100px_rgba(16,35,25,0.16)]">
            <img
              src={heroFoodSecurity}
              alt="Food storage and food-security pathway"
              className="h-[360px] w-full object-cover opacity-85"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.84)_0%,rgba(7,18,13,0.45)_46%,rgba(7,18,13,0.15)_100%)]" />

            <div className="absolute inset-0 flex items-center justify-between gap-8 p-8 text-[#fff8e7] sm:p-10 lg:p-14">
              <div>
                <h2 className="font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.06em]">
                  Watch the story unfold
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  See how local food support moves from source to families, from
                  relief to resilience, and from one intervention to lasting
                  community impact.
                </p>

                <p className="mt-10 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#c69a42]">
                  Real stories. Real impact. Real change.
                </p>
              </div>

              <button
                type="button"
                className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-white/45 bg-white/10 text-white backdrop-blur-xl transition hover:scale-105 hover:bg-white/20"
                aria-label="Play video story"
              >
                <Play className="ml-1 h-10 w-10 fill-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/35 shadow-[0_28px_90px_rgba(16,35,25,0.08)]">
          {southEastStoryBlocks.map((block) => (
            <div key={block.number} className="grid lg:grid-cols-2">
              {block.imageFirst && (
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  className="h-full min-h-[300px] w-full object-cover"
                />
              )}

              <article className="flex min-h-[300px] flex-col justify-center border-[#13271b]/10 p-7 sm:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-[0.7rem] font-black text-[#e22025]">
                    {block.number}
                  </span>

                  <span className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#13271b]/70">
                    {block.eyebrow}
                  </span>
                </div>

                <h3 className="max-w-xl font-serif text-[clamp(2.2rem,4vw,4.3rem)] leading-[0.9] tracking-[-0.055em] text-[#13271b]">
                  {block.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#405244]">
                  {block.body}
                </p>
              </article>

              {!block.imageFirst && (
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  className="h-full min-h-[300px] w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
              Local foundation
            </p>

            <h2 className="font-serif text-[clamp(2.6rem,5vw,5.8rem)] leading-[0.88] tracking-[-0.06em] text-[#13271b]">
              From local systems to future food resilience.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#405244]">
              The food-security story is not only about emergency relief. It also
              points toward land, cultivation, local enterprise, and the kind of
              community infrastructure that can support families beyond crisis
              moments.
            </p>
          </div>

          <div className="grid gap-2 overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/45 p-2 shadow-[0_28px_90px_rgba(16,35,25,0.1)] sm:grid-cols-2">
            <img
              src={seFoodSecurityCultivationWalkway}
              alt="Cultivation walkway connected to food source systems"
              className="h-[360px] w-full rounded-[1.55rem] object-cover"
            />

            <img
              src={seFoodSecurityGardenOverview}
              alt="Garden overview connected to Isabella Farms and Resort"
              className="h-[360px] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-12 text-[#fff8e7] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c69a42]">
              Impact proof
            </p>

            <h2 className="max-w-xl font-serif text-[clamp(2.5rem,4vw,4.8rem)] leading-[0.9] tracking-[-0.06em]">
              Real impact. Backed by community trust.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactProof.map((item) => (
              <article
                key={item.value}
                className="border-l border-white/10 px-5 py-4"
              >
                <HeartHandshake className="mb-4 h-6 w-6 text-[#c69a42]" />

                <p className="font-serif text-3xl leading-none tracking-[-0.04em]">
                  {item.value}
                </p>

                <p className="mt-3 text-xs leading-5 text-white/62">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
                Projects under this initiative
              </p>

              <h2 className="max-w-5xl font-serif text-[clamp(2.8rem,5vw,6rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#13271b]">
                Specific actions connected to the food-security story.
              </h2>
            </div>

            <a
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#13271b]/20 bg-white/40 px-5 py-3 text-sm font-black text-[#13271b] transition hover:bg-white/70"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {southEastProjects.map((project) => {
              const isIsabella = project.title === "Isabella Farms & Resort";

              return (
                <article
                  key={project.title}
                  className={[
                    "overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/50 shadow-[0_24px_80px_rgba(16,35,25,0.09)]",
                    isIsabella ? "lg:col-span-2" : "",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "grid min-h-[390px]",
                      isIsabella
                        ? "lg:grid-cols-[1.28fr_0.72fr]"
                        : "lg:grid-cols-[0.95fr_1.05fr]",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "relative min-h-[260px] overflow-hidden",
                        isIsabella ? "lg:min-h-[430px]" : "",
                      ].join(" ")}
                    >
                      {project.images ? (
                        <div className="grid h-full gap-2 p-2 sm:grid-cols-2">
                          {project.images.map((image) => (
                            <img
                              key={image}
                              src={image}
                              alt={project.title}
                              className="h-full min-h-[310px] w-full rounded-[1.4rem] object-cover lg:min-h-[414px]"
                            />
                          ))}
                        </div>
                      ) : (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />

                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.02)_0%,rgba(7,18,13,0.32)_100%)]" />
                        </>
                      )}
                    </div>

                    <div
                      className={[
                        "flex flex-col justify-center p-6 sm:p-8",
                        isIsabella ? "lg:p-12" : "",
                      ].join(" ")}
                    >
                      <p className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#e22025]">
                        {project.label}
                      </p>

                      <h3
                        className={[
                          "font-serif leading-[0.9] tracking-[-0.055em] text-[#13271b]",
                          isIsabella
                            ? "text-[clamp(2.6rem,4vw,5rem)]"
                            : "text-[clamp(2rem,3vw,3.4rem)]",
                        ].join(" ")}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-4 text-base font-semibold leading-7 text-[#13271b]">
                        {project.summary}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#445648]">
                        {project.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/45 shadow-[0_24px_80px_rgba(16,35,25,0.08)]">
              <img
                src={seFoodSecurityAccessRoad}
                alt="Access road and local environment"
                className="h-[280px] w-full object-cover"
              />

              <div className="p-6">
                <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#e22025]">
                  Site environment
                </p>

                <h3 className="font-serif text-4xl leading-none tracking-[-0.05em] text-[#13271b]">
                  Access, movement, and local reach.
                </h3>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/45 shadow-[0_24px_80px_rgba(16,35,25,0.08)]">
              <img
                src={seFoodSecurityGreenFieldCloseup}
                alt="Green field close-up connected to food source"
                className="h-[280px] w-full object-cover"
              />

              <div className="p-6">
                <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#e22025]">
                  Food source detail
                </p>

                <h3 className="font-serif text-4xl leading-none tracking-[-0.05em] text-[#13271b]">
                  Growth starts from the ground.
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
              Key highlights
            </p>

            <div className="space-y-4">
              {keyHighlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c69a42]" />

                  <p className="leading-7 text-[#33483b]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#e22025]">
              SDG alignment
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {sdgCards.map((sdg, index) => (
                <article
                  key={sdg.code}
                  className={[
                    "flex min-h-[132px] flex-col items-center justify-center rounded-[1.2rem] p-4 text-center shadow-[0_18px_50px_rgba(16,35,25,0.08)]",
                    index === 1
                      ? "bg-[#c69a42] text-[#fff8e7]"
                      : "bg-[#07120d] text-[#fff8e7]",
                  ].join(" ")}
                >
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.12em]">
                    {sdg.code}
                  </p>

                  <h3 className="mt-3 max-w-[8rem] text-balance font-serif text-[clamp(1.05rem,1.25vw,1.35rem)] leading-[1.02] tracking-[-0.035em]">
                    {sdg.title}
                  </h3>
                </article>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#526555]">
              Aligned with the Sustainable Development Goals, the South-East Food
              Security Initiative contributes to a world where vulnerable
              households are supported, children are protected from malnutrition,
              and communities are strengthened through practical food systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e4] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2.2rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_35px_110px_rgba(16,35,25,0.2)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 text-[#fff8e7] sm:p-10 lg:p-14">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
                Partner opportunity
              </p>

              <h2 className="font-serif text-[clamp(2.6rem,4.8vw,5.8rem)] leading-[0.9] tracking-[-0.06em]">
                Together, we can scale resilience and nourish futures.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                The next phase is about scaling beyond relief. With the right
                partners, sponsors, development agencies, agro-enterprise
                supporters, and community stakeholders, this initiative can
                strengthen food storage, expand distribution systems, support
                Agro-SMEs, and improve year-round nutrition access for vulnerable
                households across the South-East.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#partners"
                  className="premium-red-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black text-white"
                >
                  Partner with us <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/assets/g-initiative-portfolio-2026.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white/85 transition hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> Download Project Portfolio
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <img
                src={seFoodSecurityFieldTeam}
                alt="Field team supporting food security implementation"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.75)_0%,rgba(7,18,13,0.08)_100%)]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
