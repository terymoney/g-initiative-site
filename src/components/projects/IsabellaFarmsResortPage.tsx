import {
  ArrowRight,
  Droplets,
  Egg,
  Globe2,
  HeartHandshake,
  Hotel,
  Leaf,
  Sprout,
  TreePine,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Initiative } from "@/data/initiatives";
import type { ImpactProject } from "@/data/projects";

import heroImg from "@/assets/Isabella_Farms_Resort/isabella_farmland_landscape.jpg";
import cropsImg from "@/assets/Isabella_Farms_Resort/isabella_farmland_crops.jpg";
import pineappleImg from "@/assets/Isabella_Farms_Resort/isabella_pineapple_field.jpg";
import openFarmImg from "@/assets/Isabella_Farms_Resort/isabella_open_farmland.jpg";
import overgrownImg from "@/assets/Isabella_Farms_Resort/isabella_existing_structure_overgrown.jpg";
import buildingsSiteImg from "@/assets/Isabella_Farms_Resort/isabella_existing_buildings_site.jpg";
import resortImg from "@/assets/Isabella_Farms_Resort/isabella_resort_buildings.jpg";
import southEastFieldTeamImg from "@/assets/initiativessouth-east-food-security/se-food-security-field-team.jpeg";

type IsabellaImpact = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

type IsabellaFarmsResortPageProps = {
  project: ImpactProject;
  parentInitiative?: Initiative;
};

const impacts: IsabellaImpact[] = [
  {
    Icon: Droplets,
    title: "Free Access to Clean Water",
    body: "A dedicated water point within the farm provides free, clean, and potable water for surrounding households, improving access to safe drinking water while reducing the burden of obtaining this essential resource.",
  },
  {
    Icon: Zap,
    title: "Clean and Renewable Energy",
    body: "Agricultural by-products are processed into bio-fuel, providing a renewable energy source that powers farm operations while demonstrating environmentally responsible energy solutions for rural communities.",
  },
  {
    Icon: Egg,
    title: "Strengthening Food Security",
    body: "The continuous production of poultry birds and eggs helps improve access to affordable protein, contributing to better nutrition and stronger food security for families within Akabo Community and beyond.",
  },
];

const landInitiatives = [
  "Restoration of degraded land.",
  "Planting indigenous trees and shrubs.",
  "Protection of native wildlife habitats.",
  "Sustainable forest management.",
  "Eco-agriculture and conservation training.",
  "Green employment opportunities.",
  "Eco-tourism experiences that promote environmental awareness.",
];

const sdgs = [
  { code: "SDG 2", label: "Zero Hunger" },
  { code: "SDG 6", label: "Clean Water & Sanitation" },
  { code: "SDG 7", label: "Affordable & Clean Energy" },
  { code: "SDG 8", label: "Decent Work & Economic Growth" },
  { code: "SDG 13", label: "Climate Action" },
  { code: "SDG 15", label: "Life on Land" },
];

const whyItMatters: IsabellaImpact[] = [
  {
    Icon: HeartHandshake,
    title: "For Communities",
    body: "It creates opportunities through agriculture, eco-tourism, conservation, and green enterprise.",
  },
  {
    Icon: TreePine,
    title: "For the Environment",
    body: "It supports biodiversity, restores natural landscapes, and promotes responsible stewardship of natural resources.",
  },
  {
    Icon: Globe2,
    title: "For Visitors",
    body: "It offers an opportunity to experience nature while supporting initiatives that create lasting environmental and social impact.",
  },
];

export function IsabellaFarmsResortPage({
  project,
  parentInitiative,
}: IsabellaFarmsResortPageProps) {
  return (
    <main className="isabella-farms-page min-h-screen overflow-x-hidden bg-[#fff7ed] text-[#13271b]">
      <style>
        {`
          .isabella-farms-page .isabella-arrow {
            animation: isabellaArrowMove 1.85s ease-in-out infinite;
            will-change: transform;
          }

          .isabella-farms-page .isabella-hero-image {
            transform-origin: center;
            animation: isabellaHeroDrift 18s ease-in-out infinite alternate;
            will-change: transform, filter;
          }

          .isabella-farms-page a:hover .isabella-arrow,
          .isabella-farms-page a:focus-visible .isabella-arrow {
            animation-duration: 0.82s;
          }

          .isabella-farms-page .isabella-image {
            transition:
              transform 850ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 850ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .isabella-farms-page .isabella-image-wrap:hover .isabella-image {
            transform: scale(1.045);
            filter: saturate(1.08) contrast(1.03);
          }

          .isabella-farms-page .isabella-impact-card {
            transition:
              transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 650ms ease,
              box-shadow 650ms ease,
              background 650ms ease;
          }

          .isabella-farms-page .isabella-impact-card--light:hover {
            transform: translateY(-7px);
            border-color: rgba(226, 32, 37, 0.32);
            background: rgba(255, 255, 255, 0.82);
            box-shadow: 0 30px 90px rgba(16, 35, 25, 0.13);
          }

          .isabella-farms-page .isabella-impact-card--dark:hover {
            transform: translateY(-7px);
            border-color: rgba(255, 107, 111, 0.42);
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.22);
          }

          .isabella-farms-page .isabella-impact-icon {
            transition:
              transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
              background 650ms ease;
          }

          .isabella-farms-page .isabella-impact-card:hover .isabella-impact-icon {
            transform: rotate(-4deg) scale(1.08);
            background: #e22025;
          }

          .isabella-farms-page .isabella-initiative-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            min-height: 3.2rem;
            border-radius: 0.5rem;
            background: #13271b;
            color: #fff8e7 !important;
            padding: 0.9rem 1.35rem;
            font-size: 0.875rem;
            font-weight: 900;
            line-height: 1;
            transition:
              transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
              background 450ms ease,
              box-shadow 450ms ease;
          }

          .isabella-farms-page .isabella-initiative-link:hover,
          .isabella-farms-page .isabella-initiative-link:focus-visible {
            transform: translateY(-2px);
            background: #0b7a4b;
            color: #fff8e7 !important;
            box-shadow: 0 18px 48px rgba(11, 122, 75, 0.22);
          }

          .isabella-farms-page .isabella-initiative-link span,
          .isabella-farms-page .isabella-initiative-link svg {
            color: #fff8e7 !important;
            opacity: 1;
          }

          .isabella-farms-page .isabella-check {
            opacity: 0;
            transform: translateX(-14px);
            animation: isabellaCheckIn 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes isabellaArrowMove {
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

          @keyframes isabellaHeroDrift {
            from {
              transform: scale(1.03) translate3d(0, 0, 0);
              filter: saturate(0.96) contrast(1.04);
            }
            to {
              transform: scale(1.15) translate3d(-1.4%, -1%, 0);
              filter: saturate(1.05) contrast(1.08);
            }
          }

          @keyframes isabellaCheckIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .isabella-farms-page .isabella-arrow,
            .isabella-farms-page .isabella-hero-image,
            .isabella-farms-page .isabella-check {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>

      <section
        data-header-theme="dark"
        className="relative flex min-h-screen items-end overflow-hidden bg-[#07120d] px-5 pt-32 text-[#fff8e7] sm:px-8 lg:px-12"
      >
        <img
          src={heroImg}
          alt="Sweeping farmland landscape at Isabella Farms and Resort"
          className="isabella-hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.4)_0%,rgba(7,18,13,0.38)_44%,rgba(7,18,13,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(226,32,37,0.2),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(155,231,191,0.14),transparent_24%)]" />

        <div className="relative mx-auto w-full max-w-[1440px] pb-16 lg:pb-24">
          <Reveal variant="blur" className="max-w-5xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#ff6b6f]">
              A model of sustainable impact
            </p>

            <h1 className="font-serif text-[clamp(4rem,8vw,9.4rem)] font-normal leading-[0.84] tracking-[-0.075em]">
              Isabella Farms <span className="text-[#ff3a40]">&</span> Resort
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              More than an agricultural enterprise, Isabella Farms and Resort is
              a community-focused hub of sustainability, empowerment,
              eco-tourism, and environmental conservation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e22025] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#b9151b]"
              >
                Explore the vision <ArrowRight className="isabella-arrow h-4 w-4" />
              </a>

              <span className="text-sm font-semibold text-white/62">
                An initiative by GProjects and G Initiative CSR
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <Reveal variant="up" className="mx-auto max-w-5xl">
          <p className="text-xl leading-9 text-[#33483b] sm:text-2xl sm:leading-10">
            Established through the Corporate Social Responsibility arm of
            GProjects Limited, known as{" "}
            <span className="font-serif text-3xl text-[#0b7a4b]">
              G Initiative
            </span>
            , the project brings together sustainable agriculture, community
            development, clean energy, biodiversity conservation, and
            responsible tourism to create lasting environmental and social
            impact.
          </p>
        </Reveal>
      </section>

      <section
        id="journey"
        className="bg-[#e6f1e8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              The journey begins
            </p>

            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              Quality protein, rooted in community.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#405244] sm:text-lg">
              <p>
                The journey of Isabella Farms began with a commitment to
                producing quality poultry birds and eggs while supporting food
                security within Akabo Community and its surrounding areas.
              </p>
              <p>
                Guided by a vision of responsible agriculture, the farm has
                continued to provide affordable sources of protein while
                promoting sustainable farming practices that benefit both people
                and the environment.
              </p>
              <p>
                During the COVID-19 pandemic, Isabella Farms supported G
                Initiative's emergency food security response through the
                distribution of over{" "}
                <span className="font-black text-[#e22025]">30,000 free eggs</span>,
                helping vulnerable families gain access to essential nutrition
                during a period of widespread hardship.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <figure className="isabella-image-wrap relative overflow-hidden rounded-[2rem] bg-[#07120d] shadow-[0_26px_85px_rgba(16,35,25,0.14)]">
              <img
                src={cropsImg}
                alt="Farmland crops at Isabella Farms and Resort"
                className="isabella-image h-[560px] w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,13,0.86))] p-7 text-sm font-semibold leading-7 text-[#fff8e7]">
                Isabella Farms began with practical food production and a
                commitment to community nourishment.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              Community impact
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              At the heart of everything.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#405244]">
              Through G Initiative's Corporate Social Responsibility programmes,
              the project delivers practical interventions that improve the
              quality of life for surrounding communities.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="mt-14 grid gap-6 md:grid-cols-3">
            {impacts.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="isabella-impact-card isabella-impact-card--light border border-[#13271b]/10 bg-white/70 p-8 shadow-[0_22px_70px_rgba(16,35,25,0.08)]"
              >
                <div className="isabella-impact-icon grid h-12 w-12 place-items-center rounded-lg bg-[#13271b] text-[#fff8e7]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-3xl leading-[0.95] tracking-[-0.045em] text-[#13271b]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#405244]">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="relative overflow-hidden bg-[#07120d] px-5 py-24 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-32"
      >
        <img
          src={resortImg}
          alt="Resort buildings at Isabella Farms and Resort"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,18,13,0.95)_0%,rgba(7,18,13,0.76)_55%,rgba(7,18,13,0.5)_100%)]" />

        <div className="relative mx-auto max-w-4xl">
          <Reveal variant="blur">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#ff6b6f]">
              Where nature meets hospitality
            </p>
            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A farm hotel and eco-tourism destination.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-white/78 sm:text-lg">
              <p>
                Isabella Farms and Resort continues to grow beyond traditional
                farming toward a broader vision that combines agriculture,
                nature, hospitality, and sustainability.
              </p>
              <p>
                The long-term vision is to develop the project into a farm hotel
                and eco-tourism destination where visitors can experience modern
                farming, organic food production, nature-inspired hospitality,
                and environmentally responsible living within one destination.
              </p>
              <p>
                By bringing together agribusiness, recreation, conservation, and
                community development, Isabella Farms and Resort seeks to create
                meaningful experiences while supporting sustainable economic
                growth and protecting the natural environment.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur">
              <Hotel className="h-4 w-4 text-[#ff6b6f]" /> Agribusiness,
              recreation, and conservation
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e6f1e8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              From the ground up
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              A landscape in transformation.
            </h2>
          </Reveal>

          <Reveal variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                src: overgrownImg,
                alt: "Existing overgrown structure on the Isabella Farms site",
                caption: "Existing structures awaiting renewal",
              },
              {
                src: buildingsSiteImg,
                alt: "Existing buildings on the Isabella Farms site",
                caption: "The site today, foundations for the future",
              },
            ].map((image) => (
              <figure
                key={image.caption}
                className="isabella-image-wrap relative overflow-hidden rounded-[1.6rem] bg-[#07120d] shadow-[0_24px_75px_rgba(16,35,25,0.13)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="isabella-image h-80 w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,13,0.88))] p-6 text-sm font-black text-[#fff8e7]">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal variant="zoom" className="isabella-image-wrap overflow-hidden rounded-[2rem] shadow-[0_24px_75px_rgba(16,35,25,0.13)]">
            <img
              src={pineappleImg}
              alt="Lush pineapple field at Isabella Farms"
              className="isabella-image h-[560px] w-full object-cover"
            />
          </Reveal>

          <Reveal variant="right">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              Championing life on land
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              Advancing SDG 15, Life on Land.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
              As part of G Initiative's commitment to environmental
              sustainability, Isabella Farms and Resort advances Sustainable
              Development Goal 15 through initiatives that promote biodiversity
              conservation, ecological restoration, and sustainable land
              management.
            </p>
            <ul className="mt-7 space-y-3">
              {landInitiatives.map((item, index) => (
                <li
                  key={item}
                  className="isabella-check flex items-start gap-3 text-sm leading-7 text-[#405244] sm:text-base"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <Sprout className="mt-1 h-5 w-5 shrink-0 text-[#0b7a4b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="bg-[#07120d] px-5 py-20 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#ff6b6f]">
              Why it matters
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.6rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A larger vision of sustainable development.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Every initiative at Isabella Farms and Resort contributes to a
              larger vision of sustainable development.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="mt-14 grid gap-6 md:grid-cols-3">
            {whyItMatters.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="isabella-impact-card isabella-impact-card--dark border border-white/12 bg-white/6 p-8 backdrop-blur"
              >
                <div className="isabella-impact-icon grid h-12 w-12 place-items-center rounded-lg bg-[#e22025] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-3xl leading-[0.95] tracking-[-0.045em]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#e22025]">
              Sustainable Development Goals
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              Aligned with global goals.
            </h2>
          </Reveal>

          <Reveal
            variant="stagger"
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {sdgs.map((sdg, index) => (
              <article
                key={sdg.code}
                className={`min-h-[160px] border p-5 text-center shadow-[0_18px_55px_rgba(16,35,25,0.07)] ${
                  index === 5
                    ? "border-[#e22025] bg-[#e22025] text-white"
                    : "border-[#13271b]/10 bg-[#f0f8f2] text-[#13271b]"
                }`}
              >
                <p className="font-serif text-5xl leading-none tracking-[-0.055em]">
                  {sdg.code.replace("SDG ", "")}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em]">
                  {sdg.code}
                </p>
                <p className="mt-2 text-xs leading-5 opacity-75">{sdg.label}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="relative overflow-hidden bg-[#07120d] px-5 py-24 text-center text-[#fff8e7] sm:px-8 lg:px-12 lg:py-32"
      >
        <img
          src={openFarmImg}
          alt="Open farmland horizon at Isabella Farms and Resort"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.82),rgba(7,18,13,0.96))]" />

        <div className="relative mx-auto max-w-4xl">
          <Reveal variant="blur">
            <Leaf className="mx-auto h-10 w-10 text-[#ff6b6f]" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.26em] text-[#ff6b6f]">
              Looking ahead
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A model for the future.
            </h2>
            <p className="mt-7 text-base leading-8 text-white/76 sm:text-lg">
              Isabella Farms and Resort continues to evolve as a model for
              sustainable agriculture, conservation, community development, and
              responsible tourism. Through collaboration, innovation, and
              long-term investment, the project demonstrates how agriculture can
              create opportunities that extend far beyond food production,
              strengthening communities and protecting natural ecosystems.
            </p>
            <a
              href="/#partners"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#e22025] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#b9151b]"
            >
              Partner with G Initiative{" "}
              <ArrowRight className="isabella-arrow h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {parentInitiative && (
        <section className="bg-[#fff7ed] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1180px] border-t border-[#13271b]/10 pt-10">
            <Reveal
              variant="up"
              className="grid overflow-hidden rounded-[1.4rem] border border-[#13271b]/10 bg-[#e6f1e8] shadow-[0_20px_58px_rgba(16,35,25,0.09)] lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div className="isabella-image-wrap min-h-[250px] overflow-hidden bg-[#07120d] lg:min-h-[330px]">
                <img
                  src={southEastFieldTeamImg}
                  alt={parentInitiative.title}
                  className="isabella-image h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e22025]">
                  Connected initiative
                </p>
                <h2 className="mt-3 font-serif text-[clamp(2.15rem,3.6vw,4rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#13271b]">
                  {parentInitiative.title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#405244] sm:text-base">
                  {parentInitiative.description}
                </p>

                <div className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#405244]/75">
                  {parentInitiative.sdgs.join(" / ")}
                </div>

                <a
                  href={`/initiatives/${parentInitiative.slug}`}
                  className="isabella-initiative-link mt-7"
                >
                  <span>View initiative story</span>
                  <ArrowRight className="isabella-arrow h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </main>
  );
}
