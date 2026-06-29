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
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
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

type LandscapePreview = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
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
  {
    year: "2006",
    src: map2006Img,
    era: "Origin landscape",
    note: "The natural estate footprint before visible development.",
  },
  {
    year: "2010",
    src: map2010Img,
    era: "Early definition",
    note: "A clearer reading of the land and its surrounding access.",
  },
  {
    year: "2011",
    src: map2011Img,
    era: "Estate outline",
    note: "The property begins to read as a distinct destination.",
  },
  {
    year: "2014",
    src: map2014Img,
    era: "Land intelligence",
    note: "The wider setting gives shape to future planning decisions.",
  },
  {
    year: "2015",
    src: map2015Img,
    era: "Quiet expansion",
    note: "Development potential becomes more visible in the landscape.",
  },
  {
    year: "2017",
    src: map2017Img,
    era: "Access pattern",
    note: "Movement routes and surrounding activity become easier to trace.",
  },
  {
    year: "2018",
    src: map2018Img,
    era: "Growth signal",
    note: "The estate sits within a more active development corridor.",
  },
  {
    year: "2019",
    src: map2019Img,
    era: "Developing context",
    note: "The land's relationship to nearby settlement becomes clearer.",
  },
  {
    year: "2020",
    src: map2020Img,
    era: "Future readiness",
    note: "The site is positioned for a broader agro-hospitality vision.",
  },
  {
    year: "2021",
    src: map2021Img,
    era: "Destination logic",
    note: "The estate begins to read as part of a larger visitor experience.",
  },
  {
    year: "2022",
    src: map2022Img,
    era: "Living destination",
    note: "A clearer picture of the land, access, and development potential.",
  },
];

export function IsabellaFarmsResortPage({
  project,
  parentInitiative,
}: IsabellaFarmsResortPageProps) {
  const [selectedLandscapeImage, setSelectedLandscapeImage] =
    useState<LandscapePreview | null>(null);
  const [activeLandscapeIndex, setActiveLandscapeIndex] = useState(0);
  const activeTimelineItem = landscapeTimeline[activeLandscapeIndex];
  const activeTimelineYear = Number(activeTimelineItem.year);
  const activeTimelineAge = activeTimelineYear - Number(landscapeTimeline[0].year);
  const timelineProgress =
    (activeLandscapeIndex / (landscapeTimeline.length - 1)) * 100;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLandscapeIndex(
        (currentIndex) => (currentIndex + 1) % landscapeTimeline.length,
      );
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedLandscapeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedLandscapeImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLandscapeImage]);

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

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur, .stagger) {
            opacity: 0;
            will-change: opacity, transform, filter;
            transition:
              opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 1050ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 1050ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .isabella-farms-page .reveal {
            transform: translate3d(0, 36px, 0);
            filter: blur(10px);
          }

          .isabella-farms-page .reveal-left {
            transform: translate3d(-42px, 22px, 0);
            filter: blur(10px);
          }

          .isabella-farms-page .reveal-right {
            transform: translate3d(42px, 22px, 0);
            filter: blur(10px);
          }

          .isabella-farms-page .reveal-zoom {
            transform: translate3d(0, 26px, 0) scale(0.94);
            filter: blur(12px);
          }

          .isabella-farms-page .reveal-blur {
            transform: translate3d(0, 20px, 0);
            filter: blur(16px);
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur, .stagger).is-visible {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur):not(.is-visible) > :is(p, h1, h2, h3, a, div, ul) {
            opacity: 0;
            transform: translateY(18px);
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur).is-visible > :is(p, h1, h2, h3, a, div, ul) {
            animation: isabellaSequenceReveal 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur).is-visible > :nth-child(2) {
            animation-delay: 90ms;
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur).is-visible > :nth-child(3) {
            animation-delay: 170ms;
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur).is-visible > :nth-child(4) {
            animation-delay: 250ms;
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur).is-visible > :nth-child(5) {
            animation-delay: 330ms;
          }

          .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur).is-visible > :nth-child(6) {
            animation-delay: 410ms;
          }

          .isabella-farms-page .stagger > * {
            opacity: 0;
            transform: translate3d(0, 34px, 0) scale(0.96);
            filter: blur(12px);
            transform-origin: center;
            transition:
              opacity 840ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 920ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 920ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .isabella-farms-page .stagger.is-visible > * {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(2) {
            transition-delay: 90ms;
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(3) {
            transition-delay: 180ms;
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(4) {
            transition-delay: 270ms;
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(5) {
            transition-delay: 360ms;
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(6) {
            transition-delay: 450ms;
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(7) {
            transition-delay: 540ms;
          }

          .isabella-farms-page .stagger.is-visible > :nth-child(8) {
            transition-delay: 630ms;
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

          .isabella-farms-page .isabella-timeline-card {
            position: relative;
          }

          .isabella-farms-page .isabella-timeline-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            background:
              linear-gradient(110deg, transparent 0%, rgba(201, 161, 92, 0.12) 42%, transparent 68%),
              linear-gradient(180deg, rgba(255, 248, 231, 0.06), transparent 42%);
            opacity: 0.82;
            animation: isabellaTimelineSheen 8s ease-in-out infinite;
          }

          .isabella-farms-page .isabella-timeline-kicker {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
          }

          .isabella-farms-page .isabella-timeline-kicker::after {
            content: "";
            width: 3.25rem;
            height: 1px;
            background: linear-gradient(90deg, #C9A15C, transparent);
            transform-origin: left;
            animation: isabellaLineReveal 3.4s ease-in-out infinite;
          }

          .isabella-farms-page .isabella-luxury-title {
            background: linear-gradient(90deg, #fff8e7 0%, #C9A15C 48%, #fff8e7 100%);
            background-size: 220% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: isabellaTextGleam 9s ease-in-out infinite;
          }

          .isabella-farms-page .isabella-age-panel {
            position: relative;
            overflow: hidden;
          }

          .isabella-farms-page .isabella-age-panel::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(115deg, transparent 0%, rgba(255, 248, 231, 0.12) 45%, transparent 65%);
            transform: translateX(-120%);
            animation: isabellaPanelSweep 5.2s ease-in-out infinite;
          }

          .isabella-farms-page .isabella-featured-map {
            isolation: isolate;
          }

          .isabella-farms-page .isabella-featured-map::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            border: 1px solid rgba(255, 248, 231, 0.18);
            border-radius: inherit;
            box-shadow: inset 0 0 55px rgba(201, 161, 92, 0.14);
          }

          .isabella-farms-page .isabella-featured-map::after {
            content: "";
            position: absolute;
            inset: -35% 58% -35% -35%;
            z-index: 1;
            pointer-events: none;
            background: linear-gradient(90deg, transparent, rgba(255, 248, 231, 0.12), transparent);
            transform: translateX(-80%) rotate(10deg);
            animation: isabellaMapGleam 6.5s ease-in-out infinite;
          }

          .isabella-farms-page .isabella-map-year {
            display: inline-block;
            text-shadow: 0 12px 34px rgba(0, 0, 0, 0.34);
            animation: isabellaYearRise 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .isabella-farms-page .isabella-map-era {
            animation: isabellaTextLift 760ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both;
          }

          .isabella-farms-page .isabella-timeline-progress {
            transform-origin: left;
            transition: width 850ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .isabella-farms-page .isabella-year-card {
            transform-origin: center;
          }

          .isabella-farms-page .isabella-year-card-active {
            animation: isabellaActiveYearCard 2.8s ease-in-out infinite;
          }

          .isabella-farms-page .isabella-display-card {
            position: relative;
            transform-origin: center;
            transition:
              transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 700ms ease;
          }

          .isabella-farms-page .isabella-display-card:hover {
            transform: translateY(-8px) scale(1.01);
            box-shadow: 0 34px 90px rgba(16, 35, 25, 0.15);
          }

          .isabella-farms-page .isabella-stage-label {
            transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .isabella-farms-page .isabella-display-card:hover .isabella-stage-label {
            transform: translateY(-3px);
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

          @keyframes isabellaSequenceReveal {
            from {
              opacity: 0;
              transform: translateY(18px);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes isabellaTimelineSheen {
            0%, 100% {
              opacity: 0.58;
              background-position: 0% 50%;
            }
            50% {
              opacity: 0.95;
              background-position: 100% 50%;
            }
          }

          @keyframes isabellaLineReveal {
            0%, 100% {
              transform: scaleX(0.58);
              opacity: 0.56;
            }
            50% {
              transform: scaleX(1);
              opacity: 1;
            }
          }

          @keyframes isabellaTextGleam {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes isabellaPanelSweep {
            0%, 62% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(120%);
            }
          }

          @keyframes isabellaMapGleam {
            0%, 68% {
              transform: translateX(-80%) rotate(10deg);
              opacity: 0;
            }
            78% {
              opacity: 1;
            }
            100% {
              transform: translateX(210%) rotate(10deg);
              opacity: 0;
            }
          }

          @keyframes isabellaYearRise {
            from {
              opacity: 0;
              transform: translateY(16px) scale(0.96);
              filter: blur(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes isabellaTextLift {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes isabellaActiveYearCard {
            0%, 100% {
              box-shadow: 0 16px 38px rgba(0, 0, 0, 0.32), 0 0 0 rgba(201, 161, 92, 0);
            }
            50% {
              box-shadow: 0 20px 54px rgba(0, 0, 0, 0.38), 0 0 28px rgba(201, 161, 92, 0.22);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .isabella-farms-page .isabella-arrow,
            .isabella-farms-page .isabella-hero-image,
            .isabella-farms-page .isabella-check,
            .isabella-farms-page .isabella-timeline-card::before,
            .isabella-farms-page .isabella-timeline-kicker::after,
            .isabella-farms-page .isabella-luxury-title,
            .isabella-farms-page .isabella-age-panel::after,
            .isabella-farms-page .isabella-featured-map::after,
            .isabella-farms-page .isabella-map-year,
            .isabella-farms-page .isabella-map-era,
            .isabella-farms-page .isabella-year-card-active,
            .isabella-farms-page .isabella-display-card,
            .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur, .stagger),
            .isabella-farms-page :is(.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-blur, .stagger) > * {
              animation: none;
              opacity: 1;
              transform: none;
              filter: none;
              transition: none;
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

      <section className="bg-[#e6f1e8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
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

          <Reveal variant="stagger" className="mt-12 grid gap-6 lg:grid-cols-3">
            {landscapeStages.map((stage) => (
              <article
                key={stage.label}
                className="isabella-display-card overflow-hidden rounded-[1.4rem] border border-[#13271b]/10 bg-white/70 shadow-[0_22px_70px_rgba(16,35,25,0.08)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedLandscapeImage({
                      src: stage.src,
                      alt: stage.alt,
                      title: stage.title,
                      subtitle: stage.subtitle,
                    })
                  }
                  className="group relative block h-72 w-full overflow-hidden bg-[#07120d] text-left"
                  aria-label={`View full image: ${stage.title}`}
                >
                  <img
                    src={stage.src}
                    alt={stage.alt}
                    className="isabella-image h-full w-full object-cover"
                  />
                  <div className="isabella-stage-label absolute left-5 top-5 rounded-lg bg-[#13271b] px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#fff8e7]">
                    {stage.label}
                  </div>
                  <span className="absolute bottom-5 right-5 rounded-lg border border-white/20 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#13271b] opacity-0 shadow-[0_14px_38px_rgba(0,0,0,0.18)] transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    View full
                  </span>
                </button>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6B4A2B]">
                    {stage.subtitle}
                  </p>
                  <h3 className="isabella-card-heading mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.045em] text-[#13271b]">
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
            className="isabella-timeline-card mt-12 overflow-hidden rounded-[1.4rem] border border-[#C9A15C]/15 bg-[#07120d] p-6 text-[#fff8e7] shadow-[0_24px_75px_rgba(16,35,25,0.16)] lg:p-8"
          >
            <div className="relative z-[1] grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
              <div className="min-w-0">
                <p className="isabella-timeline-kicker text-xs font-black uppercase tracking-[0.22em] text-[#C9A15C]">
                  Journey of growth
                </p>
                <h3 className="isabella-luxury-title mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.045em]">
                  Through the years.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  A visual record of how the estate has taken shape over time,
                  from early satellite views to a clearer picture of the land,
                  access, and future development potential.
                </p>

                <div className="mt-6 grid grid-cols-[0.95fr_1.05fr] gap-3">
                  <div className="isabella-age-panel rounded-xl border border-[#C9A15C]/22 bg-white/[0.06] px-4 py-3">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/46">
                      Estate age
                    </p>
                    <p
                      key={`age-${activeTimelineItem.year}`}
                      className="isabella-map-era mt-2 font-serif text-3xl leading-none text-[#C9A15C]"
                    >
                      {activeTimelineAge === 0
                        ? "Origin"
                        : `+${activeTimelineAge} yrs`}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/46">
                      Active frame
                    </p>
                    <p
                      key={`era-${activeTimelineItem.year}`}
                      className="isabella-map-era mt-2 text-sm font-bold leading-5 text-[#fff8e7]"
                    >
                      {activeTimelineItem.era}
                    </p>
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedLandscapeImage({
                      src: activeTimelineItem.src,
                      alt: `Google Earth timeline view of Isabella Farms & Resort in ${activeTimelineItem.year}`,
                      title: `${activeTimelineItem.year} estate view`,
                      subtitle: "Journey of growth",
                    })
                  }
                  className="isabella-featured-map group relative block aspect-[1600/1038] w-full overflow-hidden rounded-[1.1rem] border border-[#C9A15C]/35 bg-[#07120d] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                  aria-label={`View full map image for ${activeTimelineItem.year}`}
                >
                  <img
                    key={`map-${activeTimelineItem.year}`}
                    src={activeTimelineItem.src}
                    alt={`Google Earth timeline view of Isabella Farms & Resort in ${activeTimelineItem.year}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute left-5 top-5 z-[2] rounded-xl border border-white/14 bg-[#07120d]/72 px-4 py-3 text-left shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-md">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/52">
                      {activeTimelineItem.era}
                    </p>
                    <p
                      key={`note-${activeTimelineItem.year}`}
                      className="isabella-map-era mt-1 max-w-[15rem] text-xs leading-5 text-white/72"
                    >
                      {activeTimelineItem.note}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-[2] bg-[linear-gradient(180deg,transparent,rgba(7,18,13,0.88))] p-5">
                    <p
                      key={`year-${activeTimelineItem.year}`}
                      className="isabella-map-year font-serif text-6xl leading-none text-[#C9A15C] sm:text-7xl"
                    >
                      {activeTimelineItem.year}
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-white/72">
                      Featured timeline view
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className="relative z-[1] mt-5 h-px overflow-hidden bg-white/10">
              <div
                className="isabella-timeline-progress h-full bg-[linear-gradient(90deg,#6B4A2B,#C9A15C,#fff8e7)]"
                style={{ width: `${timelineProgress}%` }}
              />
            </div>

            <div className="relative z-[1] mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-[repeat(11,minmax(0,1fr))]">
              {landscapeTimeline.map((item, index) => {
                const isActive = index === activeLandscapeIndex;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => {
                      setActiveLandscapeIndex(index);
                      setSelectedLandscapeImage({
                        src: item.src,
                        alt: `Google Earth timeline view of Isabella Farms & Resort in ${item.year}`,
                        title: `${item.year} estate view`,
                        subtitle: "Journey of growth",
                      });
                    }}
                    className={`isabella-year-card min-w-0 rounded-lg border p-1.5 text-left transition-all duration-500 ${
                      isActive
                        ? "isabella-year-card-active -translate-y-1 scale-[1.03] border-[#C9A15C] bg-white/[0.14] shadow-[0_16px_38px_rgba(0,0,0,0.32)] ring-1 ring-[#C9A15C]/45"
                        : "border-white/10 bg-white/[0.045] opacity-72 hover:-translate-y-1 hover:opacity-100"
                    }`}
                    aria-label={`View full map image for ${item.year}`}
                  >
                    <p
                      className={`mb-1.5 text-center text-[0.68rem] font-black leading-none tracking-[0.1em] ${
                        isActive ? "text-[#C9A15C]" : "text-white/56"
                      }`}
                    >
                      {item.year}
                    </p>
                    <img
                      src={item.src}
                      alt={`Google Earth timeline view of Isabella Farms & Resort in ${item.year}`}
                      className="h-14 w-full rounded-md object-cover sm:h-16 lg:h-14"
                    />
                  </button>
                );
              })}
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

      <section
        data-header-theme="dark"
        className="relative overflow-hidden bg-[#07120d] px-5 py-20 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,161,92,0.08)_0%,transparent_34%,rgba(255,248,231,0.035)_100%)]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <Reveal variant="left">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.26em] text-[#C9A15C]">
              Food enterprise pipeline
            </p>
            <h2 className="font-serif text-[clamp(2.85rem,5.4vw,6rem)] font-normal leading-[0.88] tracking-[-0.06em]">
              Grown here. Refined into food brands.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Isabella Farms &amp; Resort is designed to do more than produce food.
              It can become the source point for a wider G Initiative ecosystem
              where farm output moves into prepared meals, fresh beverages,
              guest experiences, and local enterprise.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/12 py-5 text-center">
              {["Grow", "Prepare", "Serve"].map((step) => (
                <div key={step} className="border-l border-white/12 first:border-l-0">
                  <p className="font-serif text-3xl leading-none text-[#C9A15C]">
                    {step}
                  </p>
                  <p className="mt-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/48">
                    Value chain
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="stagger" className="grid gap-5 md:grid-cols-2">
            {foodEcosystem.map(({ Icon, title, body }, index) => (
              <article
                key={title}
                className="isabella-impact-card isabella-impact-card--dark border border-white/12 bg-white/[0.055] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="isabella-impact-icon grid h-12 w-12 place-items-center rounded-lg bg-[#8A623A] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-serif text-5xl leading-none text-white/12">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-[#C9A15C]">
                  Enterprise concept
                </p>
                <h3 className="mt-3 font-serif text-4xl leading-[0.95] tracking-[-0.045em]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/68">{body}</p>
              </article>
            ))}
          </Reveal>
        </div>

        <Reveal
          variant="up"
          className="relative mx-auto mt-12 max-w-[1440px] border-t border-white/12 pt-7 text-sm leading-7 text-white/68 sm:text-base"
        >
          The result is a cleaner value chain: food is grown on the farm,
          developed into brands, served through hospitality, and distributed
          through community and commercial channels.
        </Reveal>
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

      {selectedLandscapeImage && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#020704]/92 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedLandscapeImage.title}
          onClick={() => setSelectedLandscapeImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedLandscapeImage(null)}
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/60 sm:right-7 sm:top-7"
            aria-label="Close full image"
          >
            <X className="h-5 w-5" />
          </button>

          <figure
            className="flex max-h-[90vh] max-w-[94vw] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedLandscapeImage.src}
              alt={selectedLandscapeImage.alt}
              className="max-h-[84vh] max-w-full object-contain shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            />

            <figcaption className="max-w-3xl text-center text-sm text-white/76">
              {selectedLandscapeImage.subtitle && (
                <span className="mb-1 block text-xs font-black uppercase tracking-[0.18em] text-[#C9A15C]">
                  {selectedLandscapeImage.subtitle}
                </span>
              )}
              {selectedLandscapeImage.title}
            </figcaption>
          </figure>
        </div>
      )}

      {parentInitiative && (
        <section className="bg-[#fff7ed] py-12 lg:py-16">
          <div className="w-full border-t border-[#13271b]/10 pt-8">
            <Reveal
              variant="up"
              className="grid w-full overflow-hidden border-y border-[#13271b]/10 bg-[#e6f1e8] shadow-[0_18px_48px_rgba(16,35,25,0.08)] lg:grid-cols-[0.42fr_1.58fr]"
            >
              <div className="isabella-image-wrap min-h-[180px] overflow-hidden bg-[#07120d] sm:min-h-[210px] lg:min-h-[230px]">
                <img
                  src={southEastFieldTeamImg}
                  alt={parentInitiative.title}
                  className="isabella-image h-full w-full object-cover"
                />
              </div>

              <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-7">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6B4A2B]">
                  Connected initiative
                </p>
                <h2 className="mt-2 font-serif text-[clamp(1.9rem,3vw,3.2rem)] font-normal leading-[0.94] tracking-[-0.052em] text-[#13271b]">
                  {parentInitiative.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#405244] sm:text-[0.95rem]">
                  {parentInitiative.description}
                </p>

                <div className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#405244]/75">
                  {parentInitiative.sdgs.join(" / ")}
                </div>

                <a
                  href={`/initiatives/${parentInitiative.slug}`}
                  className="isabella-initiative-link mt-5"
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
