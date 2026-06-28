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

import cropsImg from "@/assets/Isabella_Farms_Resort/isabella_farmland_crops.jpg";
import pineappleImg from "@/assets/Isabella_Farms_Resort/isabella_pineapple_field.jpg";
import overgrownImg from "@/assets/Isabella_Farms_Resort/isabella_existing_structure_overgrown.jpg";
import buildingsSiteImg from "@/assets/Isabella_Farms_Resort/isabella_existing_buildings_site.jpg";
import futureResortImg from "@/assets/Isabella_Farms_Resort/isabella_resort_future.png";
import heroImg from "@/assets/Isabella_Farms_Resort/isabella_resort_hero.png";
import hospitalityResortImg from "@/assets/Isabella_Farms_Resort/isabella_resort_hospitality.png";
import southEastFieldTeamImg from "@/assets/initiativessouth-east-food-security/se-food-security-field-team.jpeg";
import map2006Img from "@/assets/Isabella_Farms_Resort/isabella_map_2006.jpg";
import map2010Img from "@/assets/Isabella_Farms_Resort/isabella_map_2010.jpg";
import map2011Img from "@/assets/Isabella_Farms_Resort/isabella_map_2011.jpg";
import map2014Img from "@/assets/Isabella_Farms_Resort/isabella_map_2014.jpg";
import map2015Img from "@/assets/Isabella_Farms_Resort/isabella_map_2015.jpg";
import map2017Img from "@/assets/Isabella_Farms_Resort/isabella_map_2017.jpg";
import map2018Img from "@/assets/Isabella_Farms_Resort/isabella_map_2018.jpg";
import map2019Img from "@/assets/Isabella_Farms_Resort/isabella_map_2019.jpg";
import map2020Img from "@/assets/Isabella_Farms_Resort/isabella_map_2020.jpg";
import map2021Img from "@/assets/Isabella_Farms_Resort/isabella_map_2021.jpg";
import map2022Img from "@/assets/Isabella_Farms_Resort/isabella_map_2022.jpg";
import futureVisionImg from "@/assets/Isabella_Farms_Resort/isabella_future_resort_vision.png";

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
    body: "The continuous production of poultry birds, eggs, and farm products helps improve access to affordable nutrition, contributing to stronger food security for families within Akabo Community and beyond.",
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
    body: "It creates opportunities through agriculture, food enterprise, eco-tourism, conservation, and green employment.",
  },
  {
    Icon: TreePine,
    title: "For the Environment",
    body: "It supports biodiversity, restores natural landscapes, and promotes responsible stewardship of natural resources.",
  },
  {
    Icon: Globe2,
    title: "For Visitors",
    body: "It offers an opportunity to experience nature, wellness, and hospitality while supporting initiatives that create lasting environmental and social impact.",
  },
];

const foodEcosystem: IsabellaImpact[] = [
  {
    Icon: Sprout,
    title: "Jungle Juice",
    body: "A fresh juice venture envisioned to transform fruits into natural juice products for guests, sellers, and surrounding markets.",
  },
  {
    Icon: Egg,
    title: "Grill It",
    body: "A food brand connected to the farm through poultry production, linking farm-raised chicken to prepared meals, hospitality, and commercial food supply.",
  },
];

const wellnessExperiences = [
  "African-inspired luxury hut-style condos",
  "Swimming pools, steam rooms, and saunas",
  "Yoga, meditation, exercise, and nature-led wellness",
  "Farm-to-table dining and self-cook produce experiences",
];

const landscapeStages = [
  {
    label: "Past",
    title: "The early landscape",
    subtitle: "Circa 2006",
    body: "A largely natural setting, marked by greenery, quiet access paths, and the early shape of the estate.",
    src: map2006Img,
    alt: "Google Earth view of the Isabella Farms & Resort area around 2006",
  },
  {
    label: "Present",
    title: "A developing estate",
    subtitle: "Recent view",
    body: "Growing access, visible activity, and stronger development around the estate show a landscape already in motion.",
    src: map2022Img,
    alt: "Recent Google Earth view of the Isabella Farms & Resort estate",
  },
  {
    label: "Future",
    title: "The next chapter",
    subtitle: "The resort vision",
    body: "A future agro-hospitality destination shaped by farming, wellness, conservation, and African-inspired hospitality.",
    src: futureVisionImg,
    alt: "Future concept vision for Isabella Farms & Resort as an agro-hospitality destination",
  },
];

const landscapeTimeline = [
  { year: "2006", src: map2006Img },
  { year: "2010", src: map2010Img },
  { year: "2011", src: map2011Img },
  { year: "2014", src: map2014Img },
  { year: "2015", src: map2015Img },
  { year: "2017", src: map2017Img },
  { year: "2018", src: map2018Img },
  { year: "2019", src: map2019Img },
  { year: "2020", src: map2020Img },
  { year: "2021", src: map2021Img },
  { year: "2022", src: map2022Img },
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
            border-color: rgba(107, 74, 43, 0.34);
            background: rgba(255, 255, 255, 0.82);
            box-shadow: 0 30px 90px rgba(16, 35, 25, 0.13);
          }

          .isabella-farms-page .isabella-impact-card--dark:hover {
            transform: translateY(-7px);
            border-color: rgba(216, 184, 146, 0.44);
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
            background: #6B4A2B;
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
          alt="Sweeping farmland landscape at Isabella Farms & Resort"
          className="isabella-hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.04)_0%,rgba(7,18,13,0.08)_48%,rgba(7,18,13,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.7)_0%,rgba(7,18,13,0.42)_38%,rgba(7,18,13,0.08)_72%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(201,161,92,0.16),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(155,231,191,0.08),transparent_24%)]" />

        <div className="relative mx-auto w-full max-w-[1440px] pb-16 lg:pb-24">
          <Reveal variant="blur" className="max-w-5xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#C9A15C]">
              A model of sustainable impact
            </p>

            <h1 className="font-serif text-[clamp(4rem,8vw,9.4rem)] font-normal leading-[0.84] tracking-[-0.075em]">
              Isabella Farms <span className="text-[#C9A15C]">&amp;</span> Resort
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              Isabella Farms &amp; Resort is a farm-based destination where
              agriculture, hospitality, wellness, food production, and
              community development come together.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 rounded-lg bg-[#8A623A] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6B4A2B]"
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
            More than an agricultural enterprise, it is a community-focused hub
            of sustainability, empowerment, eco-tourism, and environmental
            conservation. Established through the Corporate Social Responsibility
            arm of GProjects Limited, known as{" "}
            <span className="font-serif text-3xl text-[#0b7a4b]">
              G Initiative
            </span>
            , the project brings together sustainable agriculture, clean energy,
            biodiversity conservation, responsible hospitality, and community
            development to create lasting environmental and social impact.
          </p>
        </Reveal>
      </section>

      <section
        id="journey"
        className="bg-[#e6f1e8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
              The journey begins
            </p>

            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              Quality protein, rooted in community.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#405244] sm:text-lg">
              <p>
                The journey of Isabella Farms &amp; Resort began with a commitment to
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
                During the COVID-19 pandemic, Isabella Farms &amp; Resort supported G
                Initiative's emergency food security response through the
                distribution of over{" "}
                <span className="font-black text-[#6B4A2B]">30,000 free eggs</span>
                {" "}to vulnerable families. At a time when many households faced
                food insecurity, the intervention provided essential nutrition,
                especially for children, and helped combat the risk of
                malnutrition during a period of widespread hardship.
              </p>
              <p>
                This moment reinforced the purpose behind Isabella Farms: to
                nourish communities, respond to urgent needs, and create value
                far beyond agricultural production.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <figure className="isabella-image-wrap relative overflow-hidden rounded-[2rem] bg-[#07120d] shadow-[0_26px_85px_rgba(16,35,25,0.14)]">
              <img
                src={cropsImg}
                alt="Farmland crops at Isabella Farms & Resort"
                className="isabella-image h-[560px] w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,transparent,rgba(7,18,13,0.86))] p-7 text-sm font-semibold leading-7 text-[#fff8e7]">
                Isabella Farms &amp; Resort began with practical food production and a
                commitment to community nourishment.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal variant="left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
              The working farm
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              Rooted in production, shaped for hospitality.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#405244] sm:text-lg">
              <p>
                Agriculture remains the foundation of Isabella Farms &amp; Resort.
                The farm produces poultry birds, eggs, fruits, vegetables, and
                other farm products that support food supply, nutrition, and
                local enterprise.
              </p>
              <p>
                Its agricultural base strengthens the identity of the destination,
                ensuring that the future resort is not separated from the land,
                but deeply rooted in its productivity.
              </p>
              <p>
                From poultry production to fresh farm produce, Isabella Farms
                continues to support food security while laying the foundation for
                a richer farm-to-table hospitality experience.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" className="grid gap-5 sm:grid-cols-2">
            {[
              {
                src: buildingsSiteImg,
                alt: "Existing buildings on the Isabella Farms & Resort site",
                caption: "A site evolving into its next chapter",
              },
              {
                src: overgrownImg,
                alt: "Existing overgrown structure on the Isabella Farms & Resort site",
                caption: "The land, infrastructure, and vision taking shape",
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

      <section className="bg-[#e6f1e8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
              From farm produce to food enterprise
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              A wider G Initiative food ecosystem.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#405244] sm:text-lg">
              The vision for Isabella Farms &amp; Resort extends into a wider G
              Initiative food ecosystem where farming, processing, hospitality,
              and enterprise work together.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="mt-14 grid gap-6 md:grid-cols-2">
            {foodEcosystem.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="isabella-impact-card isabella-impact-card--light border border-[#13271b]/10 bg-white/70 p-8 shadow-[0_22px_70px_rgba(16,35,25,0.08)]"
              >
                <div className="isabella-impact-icon grid h-12 w-12 place-items-center rounded-lg bg-[#13271b] text-[#fff8e7]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-4xl leading-[0.95] tracking-[-0.045em] text-[#13271b]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#405244]">{body}</p>
              </article>
            ))}
          </Reveal>

          <Reveal
            variant="up"
            className="mx-auto mt-12 max-w-4xl border-l-4 border-[#6B4A2B] bg-white/60 p-7 text-base leading-8 text-[#405244] shadow-[0_18px_55px_rgba(16,35,25,0.07)]"
          >
            Together, these projects show how Isabella Farms &amp; Resort can move
            beyond production into a complete value chain where food is grown,
            processed, served, experienced, and distributed.
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
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
          src={hospitalityResortImg}
          alt="Nature-inspired farm resort hospitality at Isabella Farms & Resort"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,18,13,0.72)_0%,rgba(7,18,13,0.46)_55%,rgba(7,18,13,0.18)_100%)]" />

        <div className="relative mx-auto max-w-4xl">
          <Reveal variant="blur">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#C9A15C]">
              Where nature meets hospitality
            </p>
            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A farm hotel and wellness agro-resort.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-white/78 sm:text-lg">
              <p>
                Isabella Farms &amp; Resort is envisioned as a farm hotel and
                wellness agro-resort where nature, comfort, and African
                hospitality come together.
              </p>
              <p>
                The future destination will feature African-inspired luxury
                hut-style condos, serene relaxation areas, swimming pools, steam
                rooms, saunas, and nature-led spaces for rest, yoga, meditation,
                and exercise.
              </p>
              <p>
                Guests will be welcomed into an environment where fresh farm
                produce, warm hospitality, and peaceful landscapes create a
                restorative experience. They may enjoy farm-to-table dining,
                access seasonal fruits and vegetables, or choose a more personal
                self-cook experience inspired by the produce of the farm.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur">
              <Hotel className="h-4 w-4 text-[#C9A15C]" /> Lodging, wellness,
              fresh food, and African hospitality
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.98fr_1.02fr]">
          <Reveal variant="left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
              Wellness, rest and renewal
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              A destination designed for restoration.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
              Wellness is central to the future vision of Isabella Farms &amp;
              Resort. The project is designed to support rest, recreation,
              movement, and restoration through spaces for relaxation, fitness,
              meditation, and nature-based wellness. As the destination develops,
              the vision also allows room for professional health and restorative
              care services, expanding Isabella's role beyond hospitality into a
              place of renewal.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid gap-4 sm:grid-cols-2">
            {wellnessExperiences.map((item, index) => (
              <article
                key={item}
                className="isabella-impact-card isabella-impact-card--light border border-[#13271b]/10 bg-white/70 p-6 shadow-[0_18px_55px_rgba(16,35,25,0.07)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#13271b] font-serif text-xl text-[#fff8e7]">
                  {index + 1}
                </div>
                <p className="text-sm font-black leading-6 text-[#13271b] sm:text-base">
                  {item}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        data-header-theme="dark"
        className="bg-[#07120d] px-5 py-20 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="left" className="isabella-image-wrap overflow-hidden rounded-[2rem] shadow-[0_24px_75px_rgba(0,0,0,0.24)]">
            <img
              src={futureVisionImg}
              alt="Future resort vision with cableway, wellness spaces, and agro-hospitality landscape"
              className="isabella-image h-[540px] w-full object-cover"
            />
          </Reveal>

          <Reveal variant="right">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#C9A15C]">
              A signature scenic experience
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              An elevated view of the destination.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-white/74 sm:text-lg">
              <p>
                One of the future highlights of Isabella Farms &amp; Resort is the
                vision for a scenic cableway experience.
              </p>
              <p>
                Designed to take advantage of the estate's natural elevation, the
                cableway would offer guests a memorable journey with panoramic
                views of the resort landscape, farmland, and surrounding
                environment.
              </p>
              <p>
                More than a transport feature, it is envisioned as a signature
                attraction — an elevated experience that connects movement,
                scenery, leisure, and discovery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#e6f1e8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up" className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
              A landscape in transformation
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              From land to living destination.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#405244] sm:text-lg">
              Across the years, the Isabella Farms &amp; Resort estate has grown
              from a largely natural landscape into a developing agricultural
              and hospitality site. As the vision expands, the land is being
              shaped into a destination for food production, wellness,
              hospitality, conservation, and long-term community value.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="mt-14 grid gap-6 lg:grid-cols-3">
            {landscapeStages.map((stage) => (
              <article
                key={stage.label}
                className="overflow-hidden rounded-[1.4rem] border border-[#13271b]/10 bg-white/70 shadow-[0_22px_70px_rgba(16,35,25,0.08)]"
              >
                <div className="relative h-72 overflow-hidden bg-[#07120d]">
                  <img
                    src={stage.src}
                    alt={stage.alt}
                    className="isabella-image h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 rounded-lg bg-[#13271b] px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#fff8e7]">
                    {stage.label}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B4A2B]">
                    {stage.subtitle}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.045em] text-[#13271b]">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#405244]">
                    {stage.body}
                  </p>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal
            variant="up"
            className="mt-12 rounded-[1.4rem] bg-[#07120d] p-6 text-[#fff8e7] shadow-[0_24px_75px_rgba(16,35,25,0.16)] lg:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#C9A15C]">
                  Journey of growth
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.045em]">
                  Through the years.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  A visual timeline of the estate's growth, from earlier
                  satellite views to its emerging future.
                </p>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {landscapeTimeline.map((item) => (
                  <figure key={item.year} className="min-w-[170px]">
                    <p className="mb-2 text-center text-xs font-black tracking-[0.14em] text-[#C9A15C]">
                      {item.year}
                    </p>
                    <img
                      src={item.src}
                      alt={`Google Earth timeline view of Isabella Farms & Resort in ${item.year}`}
                      className="h-24 w-full rounded-lg object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            className="mx-auto mt-10 max-w-4xl bg-white/70 p-7 text-center text-base leading-8 text-[#405244] shadow-[0_18px_55px_rgba(16,35,25,0.07)]"
          >
            As the area continues to grow, Isabella Farms &amp; Resort stands as
            an anchor for sustainable development, community impact, and
            long-term economic value.
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal variant="zoom" className="isabella-image-wrap overflow-hidden rounded-[2rem] shadow-[0_24px_75px_rgba(16,35,25,0.13)]">
            <img
              src={pineappleImg}
              alt="Lush pineapple field at Isabella Farms & Resort"
              className="isabella-image h-[560px] w-full object-cover"
            />
          </Reveal>

          <Reveal variant="right">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
              Championing life on land
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[#13271b]">
              Advancing SDG 15, Life on Land.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#405244] sm:text-lg">
              As part of G Initiative's commitment to environmental
              sustainability, Isabella Farms &amp; Resort advances Sustainable
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
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#C9A15C]">
              Why it matters
            </p>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.6rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A larger vision of sustainable development.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Every initiative at Isabella Farms &amp; Resort contributes to a
              larger vision of sustainable development.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="mt-14 grid gap-6 md:grid-cols-3">
            {whyItMatters.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="isabella-impact-card isabella-impact-card--dark border border-white/12 bg-white/6 p-8 backdrop-blur"
              >
                <div className="isabella-impact-icon grid h-12 w-12 place-items-center rounded-lg bg-[#6B4A2B] text-white">
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
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#6B4A2B]">
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
                    ? "border-[#6B4A2B] bg-[#6B4A2B] text-white"
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
          src={futureResortImg}
          alt="Garden resort landscape at Isabella Farms & Resort"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.42),rgba(7,18,13,0.72))]" />

        <div className="relative mx-auto max-w-4xl">
          <Reveal variant="blur">
            <Leaf className="mx-auto h-10 w-10 text-[#C9A15C]" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.26em] text-[#C9A15C]">
              Looking ahead
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A model for the future.
            </h2>
            <p className="mt-7 text-base leading-8 text-white/76 sm:text-lg">
              Isabella Farms &amp; Resort is evolving into a model for sustainable
              agriculture, food enterprise, wellness hospitality, conservation,
              and community-centered development. Its future brings together a
              working farm, fresh food production, African-inspired
              accommodation, wellness experiences, eco-tourism, and responsible
              land development within one integrated destination.
            </p>
            <a
              href="/#partners"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#8A623A] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#6B4A2B]"
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
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6B4A2B]">
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
