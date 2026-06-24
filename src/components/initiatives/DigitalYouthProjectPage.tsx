import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  Database,
  Factory,
  Hammer,
  Handshake,
  Lightbulb,
  PenTool,
  Rocket,
  School,
  ShoppingCart,
  Target,
  UsersRound,
  Wrench,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Initiative } from "@/data/initiatives";

import digitalYouthAutoHero from "@/assets/digital-youth-assets/campus/digital-youth-auto-innovation-reference.jpg";
import digitalYouthCampusAtrium from "@/assets/digital-youth-assets/campus/digital-youth-campus-atrium.jpg";
import digitalYouthCampusInnovationHub from "@/assets/digital-youth-assets/campus/digital-youth-campus-innovation-hub.jpg";
import digitalYouthCampusStaircase from "@/assets/digital-youth-assets/campus/digital-youth-campus-staircase.jpg";
import buildItConstructionHero from "@/assets/digital-youth-assets/campus/buildit-gprojects-construction-trade-hero.jpeg";

import aspireAfricaLogo from "@/assets/digital-youth-assets/logos/aspire-africa-logo.png";
import gProjectsLogo from "@/assets/digital-youth-assets/logos/g-projects-logo.png";
import imoStateGovernmentLogo from "@/assets/digital-youth-assets/logos/imo-state-government-logo.png";

type EcosystemStep = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

type PathwayCard = {
  title: string;
  body: string;
  leadsTo: string[];
  Icon: LucideIcon;
};

type CentreComponent = {
  id: string;
  title: string;
  description: string;
  variant: "champagne" | "ivory" | "soft" | "cream" | "stone" | "linen" | "warm";
  Icon: LucideIcon;
};

type SectorPathway = {
  title: string;
  items: string[];
  Icon: LucideIcon;
};

type SdgCard = {
  code: string;
  title: string;
  body: string;
  className: string;
  Icon: LucideIcon;
};

const incubationCard = {
  id: "01",
  title: "The Incubation Hub",
  eyebrow: "Premier Component",
  description: [
    "The incubation hub is a virtual and physical space where enrolled and registered youth can have access to unlimited resources such as an e-library, exchange programs, master classes, training courses, inspiration and certification.",
    "Ideas will be generated, shared, criticized and developed. Viable ideas will be evolved and guided in the right direction.",
    "Latest technology, equipment and gadgets will be available to enable the process. Registered members of the hub and trainees alone will gain access to the database and peers from all over the globe. Developed ideas will evolve into practical sessions, experimentation and eventually projects/products.",
  ],
};

const industrialParkCard: CentreComponent = {
  id: "02",
  title: "The Industrial Technology SME Park",
  variant: "champagne",
  Icon: Factory,
  description:
    "The SME or enterprise park is a scalable module of factories. Products such as shoes, clothes, cosmetics and related goods will be manufactured here after leaving the R&D department. Manufactured products can be bought directly from the warehouse or showroom, or ordered online through the e-commerce marketplace. Registered trainee manufacturers will be able to use the facilities after passing out based on a profit-sharing formula.",
};

const creativeHubCard: CentreComponent = {
  id: "03",
  title: "Creative Hub / Design District",
  variant: "ivory",
  Icon: PenTool,
  description:
    "The creative hub will bring together young designers with passion for creativity. Design charrettes and brainstorming sessions will be held, with training in modern-day software and digital skill acquisition including photo processing, 3D printing, animation, virtual reality and 3D modelling. All sponsorship partners will have access to this valuable resource pool.",
};

const marketplaceCard: CentreComponent = {
  id: "04",
  title: "The Marketplaces",
  variant: "soft",
  Icon: ShoppingCart,
  description:
    "The marketplace connects products, services and ideas emerging from the Youth Development Centre to real buyers through showroom access, warehouse distribution and e-commerce channels.",
};

const vocationalCard: CentreComponent = {
  id: "05",
  title: "Vocational Skill Centre",
  variant: "cream",
  Icon: Wrench,
  description:
    "The Vocational Skill Centre provides hands-on training for skilled and unskilled youth, helping them acquire practical abilities that can lead to employment, enterprise and certified craftsmanship.",
};

const dataBankCard: CentreComponent = {
  id: "06",
  title: "Data Bank",
  variant: "stone",
  Icon: Database,
  description:
    "The Data Bank supports the ecosystem by keeping organized records of registered youth, trainees, skills, project ideas, progress, certifications and available opportunities for smarter planning and placement.",
};

const thinkTankCard: CentreComponent = {
  id: "07",
  title: "Think Tank",
  variant: "linen",
  Icon: Brain,
  description:
    "The Think Tank serves as the idea and policy engine of the centre, bringing together research, strategy, mentorship and sector knowledge to guide solutions that can stimulate the economy.",
};

const sportsCard: CentreComponent = {
  id: "08",
  title: "Sports Complex",
  variant: "warm",
  Icon: UsersRound,
  description:
    "The Sports Complex supports youth development through wellness, discipline, teamwork and recreation, creating a balanced environment where physical development supports learning and productivity.",
};

const ecosystemSteps: EcosystemStep[] = [
  {
    title: "Discover Talent",
    body: "Identify youth potential.",
    Icon: Target,
  },
  {
    title: "Build Digital Literacy",
    body: "Core digital skills.",
    Icon: BookOpen,
  },
  {
    title: "Incubate & Research",
    body: "Develop ideas and solutions.",
    Icon: Lightbulb,
  },
  {
    title: "Create & Design",
    body: "Creative hub and design district.",
    Icon: PenTool,
  },
  {
    title: "Manufacture & Produce",
    body: "SME park and production.",
    Icon: Factory,
  },
  {
    title: "Market & Sell",
    body: "Marketplace and e-commerce.",
    Icon: ShoppingCart,
  },
  {
    title: "Access Opportunities",
    body: "Jobs, enterprise and growth.",
    Icon: Rocket,
  },
];

const pathwayCards: PathwayCard[] = [
  {
    title: "Creative & Design Pathway",
    body: "Creative tools, digital content and design practice.",
    leadsTo: ["Creative Hub", "Design District"],
    Icon: PenTool,
  },
  {
    title: "Enterprise & SME Pathway",
    body: "Idea incubation, product development and business growth.",
    leadsTo: ["Incubation Hub", "SME Park"],
    Icon: Briefcase,
  },
  {
    title: "Construction & BuildIT Pathway",
    body: "Vocational training, certified craft and job access.",
    leadsTo: ["Building Academy", "BuildIT Access"],
    Icon: Hammer,
  },
  {
    title: "Public Service Pathway",
    body: "Digital tools and performance systems for service delivery.",
    leadsTo: ["Balanced Scorecard", "Service Tools"],
    Icon: Building2,
  },
  {
    title: "Sector Growth Pathway",
    body: "Skills connected to key sectors and market growth.",
    leadsTo: ["Sector Pathways", "Market Access"],
    Icon: Factory,
  },
];

const sectorPathways: SectorPathway[] = [
  {
    title: "Fashion Industry",
    items: [
      "Tailoring: school uniforms, bags, etc.",
      "Shoe making: standardized school sandals and shoes, belts.",
      "Jewelry making.",
      "Cosmetics.",
    ],
    Icon: PenTool,
  },
  {
    title: "Automobile Industry",
    items: [
      "Interior upholstery upgrades/customization of vehicles, e.g. Innoson vehicles.",
      "Digital diagnostic and repair trainings.",
    ],
    Icon: Wrench,
  },
  {
    title: "Construction Industry & BuildIT",
    items: [
      "BuildIT/GProjects pathway for project access, visibility and real site deployment.",
      "Professional job pool for verified artisans, contractors and construction talent.",
      "Builders Market for plans, materials, vendors and trade access.",
      "Project portfolio tools for budgets, timelines and documentation.",
      "Certified artisan and construction trade training.",
      "School furniture, blackboards and chalk production.",
    ],
    Icon: Building2,
  },
  {
    title: "Agriculture Industry",
    items: ["Agriculture industry."],
    Icon: Target,
  },
  {
    title: "Consumable Goods Industry",
    items: ["Consumable goods industry."],
    Icon: ShoppingCart,
  },
  {
    title: "Enterprise",
    items: ["Enterprise."],
    Icon: Rocket,
  },
  {
    title: "Hospitality Industry",
    items: [
      "Training of hospitality staff to improve the quality of service in the hotel industry.",
      "Star rating system.",
    ],
    Icon: School,
  },
];

const objectives = [
  "To integrate digital literacy and skills into the national education curriculum at all levels.",
  "To support training and capacity building among public sector employees in the development and use of digital tools and applications to improve the delivery of government services.",
  "To create a pool of Nigerians with digital skills validated by globally recognized certifications.",
  "To bridge the gap between academia and industry and to lower the access barrier to digital tools for citizens.",
  "To build a digital industrial sector and increase the internally generated revenue of the state to achieve a self-sustaining state.",
];

const strategies = [
  "Partner with relevant institutions to promote globally competitive trainings that focus on digital technologies.",
  "Integrate digital literacy and skills development into the curriculum of schools at all tiers of education.",
  "Provide support for digital literacy and skills development for Nigerians across the country and in various sectors of the economy.",
  "Develop a digital literacy and skills development framework that will lead to trainees acquiring globally recognized certifications.",
  "Ensure that digital literacy becomes a basic requirement for public sector employees.",
  "Facilitate the training and retooling of teachers and facilitators at all levels, to enable them serve as trainers in the digital literacy and skills programme.",
  "Promote the development and distribution of instructional materials in electronic format.",
  "Partner with the private sector to make it easier for Nigerians from all walks of life to acquire digital tools.",
  "Support the ‘catch-them-young’ programmes to create an enabling environment for Nigerians to become conversant with digital skills from a young age.",
  "Encourage the states and local governments to support the goal of 95% digital literacy levels.",
  "Support relevant mentorship models for experience sharing, skills and confidence building.",
  "Support the creation of rural coding academies to meet the training needs of rural dwellers.",
  "Increase the synergy between all institutions that have a mandate related to education in the digital literacy and skills programme.",
];

const balancedScorecardObjectives = [
  "Describe the structure and typical content of a public sector Balanced Scorecard.",
  "Build a Balanced Scorecard for a public sector organization.",
  "Use a Balanced Scorecard in a management-for-results environment.",
  "Understand how to use the Balanced Scorecard to align operational activity with strategy.",
  "Understand the change management implications of implementing a Balanced Scorecard.",
];

const balancedScorecardOutline = [
  "Performance measurement.",
  "Outcomes and performance drivers.",
  "Structure of a Balanced Scorecard.",
  "Target setting.",
  "Performance measures for the four perspectives.",
  "The key process steps to develop a Balanced Scorecard.",
  "A timetable for development and involvement.",
  "Identifying and rationalizing strategic initiatives.",
  "Assessing and managing risks.",
];

const sdgWheelBackground =
  "conic-gradient(#e5243b 0deg 36deg, #c5192d 36deg 72deg, #ff3a21 72deg 108deg, #a21942 108deg 144deg, #fd6925 144deg 180deg, #dd1367 180deg 216deg, #fd9d24 216deg 252deg, #bf8b2e 252deg 288deg, #00689d 288deg 324deg, #19486a 324deg 360deg)";

const sdgCards: SdgCard[] = [
  {
    code: "1",
    title: "No Poverty",
    body: "Skills, employability and enterprise pathways help young people access income-generating opportunities.",
    className: "bg-[#e5243b]",
    Icon: UsersRound,
  },
  {
    code: "4",
    title: "Quality Education",
    body: "Digital literacy, practical learning, certifications and mentorship strengthen future-ready education.",
    className: "bg-[#c5192d]",
    Icon: BookOpen,
  },
  {
    code: "5",
    title: "Gender Equality",
    body: "Inclusive access to training helps girls and young women participate in the digital and creative economy.",
    className: "bg-[#ff3a21]",
    Icon: UsersRound,
  },
  {
    code: "8",
    title: "Decent Work & Economic Growth",
    body: "The project prepares young people for work, entrepreneurship, productivity and economic participation.",
    className: "bg-[#a21942]",
    Icon: Briefcase,
  },
  {
    code: "9",
    title: "Industry, Innovation & Infrastructure",
    body: "Incubation, technology parks, SME production and innovation systems support industrial growth.",
    className: "bg-[#fd6925]",
    Icon: Factory,
  },
  {
    code: "10",
    title: "Reduced Inequalities",
    body: "Lowering the access barrier to digital tools helps more young people take part in modern opportunity.",
    className: "bg-[#dd1367]",
    Icon: Target,
  },
  {
    code: "11",
    title: "Sustainable Cities & Communities",
    body: "The Youth Development Centre supports regional collaboration, city growth and stronger local communities.",
    className: "bg-[#fd9d24]",
    Icon: Building2,
  },
  {
    code: "12",
    title: "Responsible Consumption & Production",
    body: "Local production, design, SME manufacturing and market access encourage stronger value chains.",
    className: "bg-[#bf8b2e]",
    Icon: ShoppingCart,
  },
  {
    code: "16",
    title: "Peace, Justice & Strong Institutions",
    body: "Public service training and performance management strengthen institutional capacity and service delivery.",
    className: "bg-[#00689d]",
    Icon: Building2,
  },
  {
    code: "17",
    title: "Partnerships for the Goals",
    body: "The ecosystem depends on collaboration with government, Aspire Africa, G Projects and training partners.",
    className: "bg-[#19486a]",
    Icon: Handshake,
  },
];

const partnerLogos = [
  { name: "Aspire Africa", logo: aspireAfricaLogo },
  { name: "G Projects", logo: gProjectsLogo },
  { name: "Government of Imo State", logo: imoStateGovernmentLogo },
];

const buildItPathwaySteps = [
  {
    step: "01",
    title: "Train",
    body: "Build practical construction and trade skills through the Building Academy.",
    Icon: Hammer,
  },
  {
    step: "02",
    title: "Certify",
    body: "Earn credentials that communicate trust, capability and readiness.",
    Icon: CheckCircle2,
  },
  {
    step: "03",
    title: "Connect to BuildIT",
    body: "Move from training into projects, suppliers, trade access and real opportunities.",
    Icon: Building2,
  },
];

const buildItCapabilities = [
  {
    title: "Builders Market",
    body: "Access ready-to-build plans, material vendors and escrow-backed trade.",
    Icon: ShoppingCart,
  },
  {
    title: "Professional Job Pool",
    body: "Connect verified artisans and contractors to real project opportunities.",
    Icon: UsersRound,
  },
  {
    title: "Project Portfolio",
    body: "Track budgets, timelines, documents and project progress in one place.",
    Icon: Database,
  },
  {
    title: "Supply Chain Access",
    body: "Support material sourcing, logistics and supplier networks from factory to site.",
    Icon: Factory,
  },
];

function AnimatedImoMap() {
  const routes = [
    {
      label: "Enugu",
      sub: "Education & Innovation",
      x: 370,
      y: 70,
      path: "M350 230 C350 170 365 120 370 70",
    },
    {
      label: "Okigwe",
      sub: "Local Development",
      x: 505,
      y: 135,
      path: "M350 230 C405 190 455 155 505 135",
    },
    {
      label: "Umuahia",
      sub: "Regional Collaboration",
      x: 560,
      y: 230,
      path: "M350 230 C420 230 490 230 560 230",
    },
    {
      label: "Aba",
      sub: "Enterprise & Manufacturing",
      x: 520,
      y: 305,
      path: "M350 230 C405 260 465 285 520 305",
    },
    {
      label: "Port Harcourt",
      sub: "Industry & Energy",
      x: 405,
      y: 360,
      path: "M350 230 C360 280 380 325 405 360",
    },
    {
      label: "Yenagoa",
      sub: "South-South Linkages",
      x: 150,
      y: 350,
      path: "M350 230 C280 265 205 305 150 350",
    },
    {
      label: "Onitsha",
      sub: "Commerce & Trade",
      x: 120,
      y: 165,
      path: "M350 230 C275 205 190 180 120 165",
    },
  ];

  return (
    <div className="relative min-h-[380px] overflow-hidden rounded-[1.4rem] bg-[#fffaf2] p-1 sm:p-2">
      <style>
        {`
          @keyframes routeMove {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: -36;
            }
          }

          @keyframes softPulse {
            0%, 100% {
              opacity: 0.42;
              transform: scale(1);
            }
            50% {
              opacity: 0.72;
              transform: scale(1.04);
            }
          }

          .route-track {
            stroke-dasharray: 7 11;
            animation: routeMove 3.8s linear infinite;
          }

          .city-node {
            transform-origin: center;
            animation: softPulse 3s ease-in-out infinite;
          }
        `}
      </style>

      <svg
        viewBox="-35 30 780 390"
        className="h-full min-h-[360px] w-full"
        role="img"
        aria-label="Imo geographical advantage map showing Owerri connected to regional cities"
      >
        <path
          d="M82 126 C135 70 230 60 302 88 C370 38 488 64 559 128 C635 196 616 306 548 354 C468 410 356 384 305 376 C227 402 122 382 74 300 C31 226 42 168 82 126Z"
          fill="#f1eadf"
          stroke="#e2d5bd"
          strokeWidth="1.5"
        />

        <circle cx="350" cy="230" r="82" fill="rgba(198,154,66,0.12)" />
        <circle cx="350" cy="230" r="48" fill="rgba(198,154,66,0.18)" />

        {routes.map((route) => (
          <g key={route.label}>
            <path
              d={route.path}
              fill="none"
              stroke="#0b3a1f"
              strokeWidth="2"
              strokeLinecap="round"
              className="route-track"
              opacity="0.68"
            />

            <circle cx={route.x} cy={route.y} r="7" fill="#0b3a1f" />

            <circle
              cx={route.x}
              cy={route.y}
              r="20"
              fill="rgba(11,58,31,0.08)"
              className="city-node"
            />
          </g>
        ))}

        <circle cx="350" cy="230" r="9" fill="#0b3a1f" />
        <circle
          cx="350"
          cy="230"
          r="20"
          fill="none"
          stroke="#c69a42"
          strokeWidth="2"
        />

        <text
          x="350"
          y="265"
          textAnchor="middle"
          className="fill-[#13271b]"
          style={{
            fontSize: "34px",
            fontWeight: 800,
            letterSpacing: "0.02em",
          }}
        >
          Owerri
        </text>

        <text
          x="350"
          y="289"
          textAnchor="middle"
          className="fill-[#0b7a3a]"
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          DIGITAL HUB
        </text>

        {routes.map((route) => {
          const isLeft = route.x < 350;
          const textX = isLeft ? route.x - 22 : route.x + 22;
          const anchor = isLeft ? "end" : "start";

          return (
            <g key={`${route.label}-label`}>
              <text
                x={textX}
                y={route.y - 2}
                textAnchor={anchor}
                className="fill-[#13271b]"
                style={{
                  fontSize: "21px",
                  fontWeight: 800,
                }}
              >
                {route.label}
              </text>

              <text
                x={textX}
                y={route.y + 21}
                textAnchor={anchor}
                className="fill-[#5d6b61]"
                style={{
                  fontSize: "13.5px",
                  fontWeight: 600,
                }}
              >
                {route.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function YouthFeatureCard() {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-[#1e5a43] bg-[radial-gradient(circle_at_top_left,_rgba(44,132,88,0.55),_transparent_38%),linear-gradient(145deg,#051c15_0%,#08261c_40%,#0b3e2d_100%)] p-7 text-white shadow-[0_28px_80px_rgba(5,28,21,0.22)] lg:p-9">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(circle_at_bottom_left,_rgba(212,180,106,0.16),_transparent_45%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative z-10 flex items-start justify-between gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d7bb77] bg-white/6 text-[#d7bb77] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
          <Lightbulb className="h-8 w-8" />
        </div>

        <span className="font-serif text-7xl leading-none text-[#d7c38e]/35">
          01
        </span>
      </div>

      <div className="relative z-10 mt-7 inline-flex rounded-full border border-[#d7bb77]/50 bg-[#d7bb77]/16 px-4 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#f0d69b]">
        Premier Component
      </div>

      <h3 className="relative z-10 mt-6 font-serif text-[clamp(2.7rem,4vw,4.9rem)] font-normal leading-[0.92] tracking-[-0.055em] text-white">
        The Incubation Hub
      </h3>

      <div className="relative z-10 mt-6 h-px w-20 bg-[#d7bb77]" />

      <div className="relative z-10 mt-7 space-y-5 text-sm leading-7 text-white/82">
        {incubationCard.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

function YouthComponentCard({
  card,
  className = "",
}: {
  card: CentreComponent;
  className?: string;
}) {
  const Icon = card.Icon;

  const variantStyles: Record<CentreComponent["variant"], string> = {
    champagne: "border-[#e6d2aa] bg-[#f5ecdd] text-[#143c2e]",
    ivory: "border-[#e9e1d5] bg-[#fbf8f2] text-[#143c2e]",
    soft: "border-[#e7dfd2] bg-[#faf6ef] text-[#143c2e]",
    cream: "border-[#e7d8c2] bg-[#f8f1e7] text-[#143c2e]",
    stone: "border-[#e2ddd2] bg-[#f6f4ef] text-[#143c2e]",
    linen: "border-[#ebe3d7] bg-[#fcf9f3] text-[#143c2e]",
    warm: "border-[#e8d8bd] bg-[#f7efe3] text-[#143c2e]",
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.45rem] border p-6 shadow-[0_18px_55px_rgba(16,35,25,0.07)] transition duration-500 hover:-translate-y-1 hover:border-[#c69a42]/35 hover:shadow-[0_24px_75px_rgba(16,35,25,0.1)] ${variantStyles[card.variant]} ${className}`}
    >
      <div className="absolute right-[-20%] top-[-35%] h-44 w-44 rounded-full bg-[#0b7a3a]/8 blur-2xl transition group-hover:bg-[#c69a42]/12" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0b3a1f] text-[#f2d184] shadow-[0_12px_30px_rgba(11,58,31,0.12)]">
            <Icon className="h-5 w-5" />
          </div>

          <span className="font-serif text-5xl leading-none text-[#c69a42]/45">
            {card.id}
          </span>
        </div>

        <h3 className="font-serif text-2xl leading-7 text-[#13271b]">
          {card.title}
        </h3>

        <div className="mt-4 h-px w-16 bg-[#c69a42]/70" />

        <p className="mt-4 text-sm leading-7 text-[#536458]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

function YouthImagePanel({
  image,
  title,
  body,
  className = "",
}: {
  image: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <article
      className={`relative min-h-[300px] overflow-hidden rounded-[1.45rem] bg-[#07120d] shadow-[0_24px_75px_rgba(7,18,13,0.14)] ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="luxury-image-reveal absolute inset-0 h-full w-full object-cover object-center opacity-90 transition duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.05),rgba(7,18,13,0.72))]" />
      <div className="absolute bottom-5 left-5 right-5">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#f2d184]">
          {title}
        </p>
        <p className="max-w-md text-sm leading-6 text-white/82">{body}</p>
      </div>
    </article>
  );
}

function EditorialTextBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#13271b]/10 pt-10">
      <div className="grid gap-7 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b17819]">
            {eyebrow}
          </p>
          <h3 className="mt-4 max-w-md font-serif text-[clamp(2rem,3.2vw,3.7rem)] font-normal leading-[0.96] tracking-[-0.045em] text-[#13271b]">
            {title}
          </h3>
        </div>

        <div className="max-w-4xl space-y-5 text-base leading-8 text-[#4d5f54]">
          {children}
        </div>
      </div>
    </section>
  );
}

function AnimatedPercent({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    let frame = 0;
    let hasAnimated = false;

    const runCount = () => {
      const start = performance.now();
      const duration = 850;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(eased * value));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          runCount();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="group rounded-[1rem] bg-[#fff8ef] p-5 text-center transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(16,35,25,0.08)]"
    >
      <p className="font-serif text-3xl text-[#13271b] transition duration-500 group-hover:text-[#b17819]">
        {displayValue}%
      </p>
      <p className="mt-1 text-sm font-semibold text-[#536458]">{label}</p>
    </div>
  );
}

export function DigitalYouthProjectPage({
  initiative: _initiative,
}: {
  initiative: Initiative;
}) {
  const [activeSector, setActiveSector] = useState<number | null>(0);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal-on-scroll, .luxury-image-reveal, .course-outline-item"
      )
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes heroFloat {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.01);
            }
          }

          @keyframes ctaShimmer {
            0% {
              transform: translateX(-130%) skewX(-18deg);
            }
            100% {
              transform: translateX(260%) skewX(-18deg);
            }
          }

          @keyframes impactLineFlow {
            0%, 100% {
              transform: scaleX(0.55);
              opacity: 0.55;
            }
            50% {
              transform: scaleX(1);
              opacity: 1;
            }
          }

          @keyframes impactArrowFlow {
            0%, 100% {
              transform: translateX(0);
              opacity: 0.72;
            }
            50% {
              transform: translateX(8px);
              opacity: 1;
            }
          }

          @keyframes digitalArrowLife {
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

          @keyframes buildItHeroGlow {
            0%, 100% {
              opacity: 0.84;
              text-shadow: 0 0 0 rgba(11,122,58,0);
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 14px rgba(119,239,161,0.88), 0 0 28px rgba(11,122,58,0.42);
            }
          }

          @keyframes buildItPathwayGlow {
            0%, 100% {
              box-shadow: 0 0 0 rgba(198,154,66,0);
              border-color: rgba(198,154,66,0.25);
            }
            18%, 34% {
              box-shadow: 0 18px 42px rgba(198,154,66,0.13), 0 0 30px rgba(242,209,132,0.14);
              border-color: rgba(198,154,66,0.58);
            }
          }

          @keyframes buildItFinalPathwayGlow {
            0%, 100% {
              box-shadow: 0 0 0 rgba(198,154,66,0);
              border-color: rgba(198,154,66,0.25);
            }
            18%, 34% {
              box-shadow: 0 20px 48px rgba(198,154,66,0.18), 0 0 38px rgba(242,209,132,0.2);
              border-color: rgba(242,209,132,0.76);
            }
          }

          @keyframes sdgWheelSpin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .sdg-wheel-spin {
            animation: sdgWheelSpin 24s linear infinite;
            transform-origin: center;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .sdg-wheel-spin,
            .digital-arrow-icon,
            .buildit-hero-tag,
            .buildit-pathway-card {
              animation: none;
            }
          }

          .hero-float {
            animation: heroFloat 7s ease-in-out infinite;
          }

          .shimmer-cta {
            position: relative;
            overflow: hidden;
          }

          .shimmer-cta::before {
            content: "";
            position: absolute;
            inset: 0;
            width: 42%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.32),
              transparent
            );
            animation: ctaShimmer 4.6s ease-in-out infinite;
          }

          .impact-line-flow {
            transform-origin: left center;
            animation: impactLineFlow 2.4s ease-in-out infinite;
          }

          .impact-arrow-flow {
            animation: impactArrowFlow 2.4s ease-in-out infinite;
          }

          .digital-arrow-icon {
            animation: digitalArrowLife 1.85s ease-in-out infinite;
            will-change: transform;
          }

          a:hover .digital-arrow-icon,
          a:focus-visible .digital-arrow-icon,
          button:hover .digital-arrow-icon,
          button:focus-visible .digital-arrow-icon {
            animation-duration: 0.82s;
          }

          .buildit-hero-tag {
            animation: buildItHeroGlow 3.4s ease-in-out infinite;
            will-change: opacity, text-shadow;
          }

          .buildit-pathway-card {
            animation: buildItPathwayGlow 9s ease-in-out infinite;
            will-change: box-shadow, border-color;
          }

          .buildit-pathway-card-final {
            animation-name: buildItFinalPathwayGlow;
          }

          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(34px);
            filter: blur(8px);
            transition:
              opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .reveal-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }

          .luxury-image-reveal {
            opacity: 0 !important;
            transform: scale(1.06) translateY(18px);
            filter: blur(12px) saturate(0.88);
            clip-path: inset(8% 0 8% 0 round 1.25rem);
            transition:
              opacity 1050ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 1200ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 1050ms cubic-bezier(0.22, 1, 0.36, 1),
              clip-path 1200ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .luxury-image-reveal.is-visible {
            opacity: 0.9 !important;
            transform: scale(1) translateY(0);
            filter: blur(0) saturate(1);
            clip-path: inset(0 0 0 0 round 1.25rem);
          }

          .course-outline-item {
            opacity: 0;
            transform: translateX(-14px);
            filter: blur(6px);
            transition:
              opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 650ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .course-outline-item.is-visible {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }

          .course-check-icon {
            transform: scale(0.72);
            opacity: 0.35;
            transition:
              transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
              color 520ms ease;
          }

          .course-outline-item.is-visible .course-check-icon {
            transform: scale(1);
            opacity: 1;
          }
        `}
      </style>

      <section className="reveal-on-scroll relative overflow-hidden bg-[#fff8ef] px-5 pt-32 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pt-36 lg:pb-24">
        <div className="absolute left-[-18%] top-[-24%] h-[560px] w-[560px] rounded-full bg-[#d9b66f]/18 blur-3xl" />
        <div className="absolute right-[-14%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#0b7a3a]/12 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[32%] h-[360px] w-[360px] rounded-full bg-[#c69a42]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <h1 className="max-w-3xl font-serif text-[clamp(3.3rem,6.4vw,7.2rem)] font-normal leading-[0.9] tracking-[-0.07em] text-[#102319]">
              The Digital Youth Project
            </h1>

            <p className="mt-4 font-serif text-[clamp(2rem,3.2vw,3.6rem)] font-normal italic leading-tight text-[#b17819]">
              Times indeed have changed!
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#4d5f54]">
              As the world struggles to manage a global crisis, the effect of the
              hard reset on the universe has changed the way we will do things
              forever. Prerequisites for sustenance will surpass vocational and
              entrepreneurship skills.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d5f54]">
              Digital literacy is necessary for survival in a digital ecosystem,
              one which encompasses businesses that sell goods and services via
              the internet and digital platforms that connect spare capacity and
              demand, as defined by the European Commission.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#digital-youth-ecosystem"
                className="shimmer-cta inline-flex items-center gap-2 rounded-md bg-[#0b3a1f] px-6 py-4 text-sm font-black !text-white shadow-[0_18px_45px_rgba(11,58,31,0.18)] transition hover:-translate-y-0.5 hover:bg-[#092f19]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  The Youth Development Centre{" "}
                  <ArrowRight className="digital-arrow-icon h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="group relative min-h-[600px] overflow-hidden rounded-[2rem] bg-[#fff8ef] shadow-[0_35px_95px_rgba(16,35,25,0.18)] lg:-mt-1">
            <div className="hero-float absolute inset-0">
              <img
                src={digitalYouthAutoHero}
                alt="Digital Youth Project hero"
                className="h-full w-full object-fill object-center transition duration-[1400ms] group-hover:scale-[1.012]"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.02),rgba(7,18,13,0.42))]" />

            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
              The Youth Development Centre
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f2d184]">
                Digitalization is an empowerment tool
              </p>

              <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2.2rem,4vw,4.6rem)] font-normal leading-[0.92] tracking-[-0.055em] text-white">
                A digital youth is a young person who can carry out tasks with
                a computer.
              </h2>

              <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-xs font-semibold text-white/90">
                <span>Digital Economy</span>
                <span>Digital Literacy</span>
                <span>Digital Industrialization</span>
                <a
                  href="/initiatives/build-it"
                  className="buildit-hero-tag text-[#b8f7ca] underline decoration-[#b8f7ca]/45 underline-offset-4 transition hover:text-white hover:decoration-white/70"
                >
                  BuildIT / GProjects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              The Concept of the Digital Youth
            </p>

            <h2 className="font-serif text-[clamp(2.4rem,4.3vw,4.9rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Who is the digital youth?
            </h2>

            <p className="mt-6 text-base leading-8 text-[#4d5f54]">
              A digital youth is a young person who can carry out tasks with a
              computer. Digitalization is an empowerment tool which aids the
              person in achieving goals easier and faster.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] bg-[#07120d] text-white shadow-[0_25px_85px_rgba(7,18,13,0.14)]">
            <img
              src={digitalYouthCampusStaircase}
              alt="Container-inspired Youth Development Centre design concept"
              className="luxury-image-reveal absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.08),rgba(7,18,13,0.72))]" />
            <div className="absolute bottom-7 left-7 right-7">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#f2d184]">
                Design Concept
              </p>
              <h3 className="max-w-2xl font-serif text-[clamp(2.2rem,4vw,4.4rem)] font-normal leading-[0.95]">
                To achieve the 1 and 0 effect, a single module has to be
                selected and combined in different ways to create an effect.
              </h3>
            </div>
          </div>
        </div>
      </section>


      <section className="reveal-on-scroll bg-[#fff8ef] px-5 py-14 text-[#13271b] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <div className="overflow-hidden rounded-[1.7rem] border border-[#13271b]/10 bg-white/75 p-6 shadow-[0_20px_70px_rgba(16,35,25,0.08)]">
            <p className="mb-1 text-[0.82rem] font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Imo Geographical Advantage
            </p>

            <div className="space-y-2">
              <AnimatedImoMap />

              <div className="rounded-[1.2rem] bg-[#fff8ef] p-5">
                <p className="text-sm leading-7 text-[#4d5f54]">
                  Imo State has a similar DNA to the UAE, and Owerri to Dubai.
                  Leveraging on geographical positioning in the South-East,
                  through recovery and optimization of already existing physical
                  and intellectual infrastructure, the economy can be
                  reconstructed and dormant revenue generators rehabilitated
                  through youth development.
                </p>
              </div>
            </div>
          </div>

          <article className="h-fit rounded-[1.7rem] border border-[#13271b]/10 bg-white/75 p-7 shadow-[0_20px_70px_rgba(16,35,25,0.08)] lg:self-start lg:p-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#b17819]">
              The Youth Development Centre
            </p>

            <h2 className="font-serif text-[clamp(2.1rem,3.6vw,4.2rem)] font-normal leading-[0.95] tracking-[-0.055em] text-[#13271b]">
              Designed to identify, develop and empower youth in various sectors
              of the economy.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#4d5f54]">
              The youth development program is designed to identify, develop and
              empower youth in various sectors of the economy. The aim of this
              program is to project Imo State as a self-sustaining economy which
              will serve the entire South-East region. The program is
              interdependent and multi-beneficial, cutting across different
              affairs of the state.
            </p>

            <p className="mt-5 text-base leading-8 text-[#4d5f54]">
              This program will directly impact the Internally Generated Revenue
              of the state by increasing the quality and quantity of exportable
              products and services the state has to offer to its border states.
            </p>

            <blockquote className="relative mt-7 overflow-hidden rounded-[1.2rem] border border-[#c69a42]/35 bg-[#fff8ef] p-6 font-serif text-2xl italic leading-9 text-[#9a681b]">
              <span className="absolute -left-1 top-2 font-serif text-7xl leading-none text-[#c69a42]/22">
                “
              </span>
              <span className="relative block pl-4">
                G Initiative was conceived, developed and refined in Dubai,
                United Arab Emirates, over the past 15 years.
              </span>
              <span className="absolute bottom-0 right-5 font-serif text-7xl leading-none text-[#c69a42]/22">
                ”
              </span>
            </blockquote>
          </article>
        </div>
      </section>

      <section className="reveal-on-scroll bg-white px-5 py-14 text-[#13271b] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[1.7rem] border border-[#13271b]/10 bg-[#fff8ef] p-7 shadow-[0_22px_70px_rgba(16,35,25,0.08)] lg:p-10">
          <p className="mb-7 text-center text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
            The Digital Literacy Project is an initiative of Aspire Africa and G
            Projects in conjunction with Imo State Government and various
            training partners.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {partnerLogos.map((partner) => (
              <article
                key={partner.name}
                className="grid min-h-[190px] place-items-center rounded-[1.3rem] border border-[#13271b]/10 bg-white p-7 text-center shadow-[0_18px_55px_rgba(16,35,25,0.06)]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-28 max-w-[82%] object-contain"
                />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#536458]">
                  {partner.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-connects"
        className="bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24"
      >
        <style>
          {`
            @keyframes ecosystemFlowX {
              from {
                background-position: 0 0;
              }
              to {
                background-position: 36px 0;
              }
            }

            @keyframes ecosystemFlowY {
              from {
                background-position: 0 0;
              }
              to {
                background-position: 0 36px;
              }
            }

            .ecosystem-dotted-horizontal {
              background-image: repeating-linear-gradient(
                to right,
                rgba(183,53,53,0.78) 0 4px,
                transparent 4px 12px
              );
              background-repeat: repeat-x;
              background-size: 36px 2px;
              animation: ecosystemFlowX 1.8s linear infinite;
            }

            .ecosystem-dotted-vertical {
              background-image: repeating-linear-gradient(
                to bottom,
                rgba(183,53,53,0.78) 0 4px,
                transparent 4px 12px
              );
              background-repeat: repeat-y;
              background-size: 2px 36px;
              animation: ecosystemFlowY 1.8s linear infinite;
            }
          `}
        </style>

        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Digital Industrialization
            </p>

            <h2 className="font-serif text-[clamp(2.6rem,4.6vw,5.4rem)] font-normal leading-[0.92] tracking-[-0.06em]">
              Digitalization is an empowerment tool.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#536458]">
              While it is true that digitalization will be an added advantage in
              the economy and daily lives, it serves only as a catalyst in the
              reaction. Strong key players in the process of reviving and
              stimulating an economy, combined with digitalization of processes,
              will boost the economy.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-[#fff8ef] p-6 shadow-[0_25px_85px_rgba(16,35,25,0.08)] lg:p-8">
            <div className="absolute right-[-10%] top-[-35%] h-[380px] w-[380px] rounded-full bg-[#c69a42]/14 blur-3xl" />
            <div className="absolute bottom-[-30%] left-[-8%] h-[360px] w-[360px] rounded-full bg-[#0b7a3a]/10 blur-3xl" />

            <div className="relative mb-8 rounded-[1.3rem] bg-[#07120d] p-5 text-center text-white shadow-[0_20px_60px_rgba(16,35,25,0.12)]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#fff8ef]">
                How a youth moves through the ecosystem
              </p>
              <p className="mt-2 text-sm text-white/78">
                Digitalization aids the person in achieving goals easier and
                faster.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-[6%] right-[6%] top-8 hidden h-[2px] xl:block">
                <div className="ecosystem-dotted-horizontal h-full w-full" />
              </div>

              <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                {ecosystemSteps.map(({ title, body, Icon }, index) => (
                  <article key={title} className="relative text-center">
                    <div className="relative mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-[#07120d] text-[#fff8ef] shadow-[0_14px_35px_rgba(7,18,13,0.14)]">
                      <Icon className="h-6 w-6" />

                      <span className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full border border-[#fff8ef] bg-[#b73535] text-[0.68rem] font-black text-[#fff8ef] shadow-[0_10px_25px_rgba(183,53,53,0.18)]">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl leading-6 text-[#13271b]">
                      {title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[9rem] text-sm leading-6 text-[#536458]">
                      {body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mt-8">
              <div className="mb-5 text-center">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#07120d]">
                  Pathways opened by the ecosystem
                </p>
              </div>

              <div className="relative mx-auto mb-6 hidden h-12 max-w-5xl xl:block">
                <div className="absolute left-1/2 top-0 h-12 w-[2px] -translate-x-1/2">
                  <div className="ecosystem-dotted-vertical h-full w-full" />
                </div>

                <div className="absolute bottom-0 left-[6%] right-[6%] border-t border-dashed border-[#b73535]/75" />

                {[6, 28, 50, 72, 94].map((left) => (
                  <span
                    key={left}
                    className="absolute bottom-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#b73535]"
                    style={{ left: `${left}%` }}
                  />
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {pathwayCards.map(({ title, body, leadsTo, Icon }) => (
                  <article
                    key={title}
                    className="rounded-[1.25rem] border border-[#13271b]/10 bg-white p-5 text-left shadow-[0_18px_55px_rgba(16,35,25,0.06)]"
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#07120d] text-[#fff8ef]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="font-serif text-xl leading-6 text-[#13271b]">
                        {title}
                      </h3>
                    </div>

                    <p className="text-sm leading-6 text-[#536458]">{body}</p>

                    <div className="mt-4 space-y-2">
                      {leadsTo.map((item) => (
                        <p
                          key={item}
                          className="text-[0.58rem] font-extrabold uppercase leading-4 tracking-[0.06em] text-[#b73535]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-center">
              <div className="rounded-[1.2rem] bg-[#07120d] p-5 text-center text-white">
                <p className="font-serif text-3xl">Skills</p>
                <p className="mt-1 text-sm text-white/68">Built today</p>
              </div>

              <div className="rounded-[1.2rem] bg-[#8f1f1f] p-5 text-center text-[#fff8ef]">
                <p className="font-serif text-3xl">Opportunities</p>
                <p className="mt-1 text-sm font-semibold">
                  Opened through the ecosystem
                </p>
              </div>

              <div className="rounded-[1.2rem] bg-[#07120d] p-5 text-center text-white">
                <p className="font-serif text-3xl">Impact</p>
                <p className="mt-1 text-sm text-white/68">
                  Generational change
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="digital-youth-ecosystem"
        className="relative overflow-hidden bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="absolute left-[-14%] top-[12%] h-[460px] w-[460px] rounded-full bg-[#0b7a3a]/10 blur-3xl" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#c69a42]/14 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mx-auto mb-12 max-w-[980px] text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#b17819]">
              Components of the Youth Development Centre
            </p>

            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.065em] text-[#13271b]">
              Eight integrated components.
              <br />
              One transformational ecosystem.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <YouthFeatureCard />

            <YouthImagePanel
              image={digitalYouthCampusAtrium}
              title="Youth Development Environment"
              body="A visual anchor for the ecosystem where learning, production, creativity and enterprise meet."
              className="min-h-[520px]"
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <YouthComponentCard card={industrialParkCard} />

            <YouthComponentCard card={creativeHubCard} />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.45fr_1fr]">
            <YouthComponentCard
              card={marketplaceCard}
              className="lg:min-h-[360px]"
            />

            <YouthImagePanel
              image={digitalYouthCampusInnovationHub}
              title="Interactive Campus Environment"
              body="A central visual moment for the centre’s learning, innovation and creative production environment."
              className="min-h-[420px]"
            />

            <YouthComponentCard
              card={vocationalCard}
              className="lg:min-h-[360px]"
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <YouthComponentCard
              card={dataBankCard}
              className="lg:min-h-[340px]"
            />

            <YouthComponentCard
              card={thinkTankCard}
              className="lg:min-h-[340px]"
            />

            <YouthComponentCard
              card={sportsCard}
              className="lg:min-h-[340px]"
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <blockquote className="relative overflow-hidden rounded-[1.6rem] bg-[#07120d] p-7 font-serif text-3xl leading-tight text-[#f2d184] shadow-[0_24px_80px_rgba(7,18,13,0.14)]">
              <span className="absolute -left-1 top-2 text-7xl leading-none text-[#c69a42]/22">
                “
              </span>
              <span className="relative block pl-4">
                The 20ft containers are the module. Multiple containers can be
                combined in various ways to achieve design space requirements.
                Design considerations will be made towards achieving some of the
                SDGs.
              </span>
              <span className="absolute bottom-0 right-5 text-7xl leading-none text-[#c69a42]/22">
                ”
              </span>
            </blockquote>

            <article className="rounded-[1.6rem] border border-[#13271b]/10 bg-white/82 p-7 shadow-[0_18px_55px_rgba(16,35,25,0.07)]">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b7a3a]">
                Design Concept
              </p>

              <h3 className="font-serif text-3xl leading-8 text-[#13271b]">
                Digitalization is purity and simplicity at their maximum
                potential.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#536458]">
                The design concept of the Youth Development Centre draws
                inspiration from binary code, with the digits represented by mass
                and void respectively. To achieve the 1 and 0 effect, a single
                module has to be selected and combined in different ways to
                create an effect.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#536458]">
                The chosen module is the shipping container. Container
                construction has gained momentum in recent years, and the
                container is a durable space which can withstand weather
                conditions over long periods of time as a single module.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="digital-literacy-project"
        className="relative overflow-hidden bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="absolute left-[-18%] top-[12%] h-[440px] w-[440px] rounded-full bg-[#0b7a3a]/8 blur-3xl" />
        <div className="absolute right-[-12%] bottom-[6%] h-[440px] w-[440px] rounded-full bg-[#c69a42]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.48fr_1fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
                The Youth Development Program
              </p>

              <h2 className="font-serif text-[clamp(2.7rem,4.9vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.065em] text-[#13271b]">
                The Digital Literacy Project.
              </h2>
            </div>

            <div className="max-w-4xl space-y-5 text-base leading-8 text-[#4d5f54]">
              <p>
                The Digital Literacy Project is an initiative of Aspire Africa
                and G Projects in conjunction with Imo State Government and
                various training partners, which aims to train young people in
                digital skills, prepare them for the future of work and build an
                ecosystem of highly skilled young people in digital tools. This
                project will be anchored on a mix of virtual and real-life
                training sessions.
              </p>

              <p>
                The Digital Literacy Project believes that with improvements in
                digital skills, digital connectivity and other core areas of
                digital development, Nigeria can fully unleash new economic
                opportunities, create jobs and transform people’s lives.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="h-fit rounded-[1.5rem] border border-[#13271b]/10 bg-[#fff8ef] p-7 shadow-[0_18px_55px_rgba(16,35,25,0.06)]">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#b17819]">
                Vision
              </p>

              <h3 className="font-serif text-[clamp(2rem,3.4vw,3.7rem)] font-normal leading-[0.96] tracking-[-0.045em] text-[#13271b]">
                To develop a vibrant digital workforce by bridging the skills
                gap through digital literacy.
              </h3>
            </article>

            <article className="h-fit rounded-[1.5rem] border border-[#13271b]/10 bg-[#07120d] p-7 text-white shadow-[0_20px_65px_rgba(7,18,13,0.12)]">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#f2d184]">
                Mission
              </p>

              <p className="text-base leading-8 text-white/78">
                To create and sustain a digital ecosystem compatible with the new
                era. To provide policy backing for massive training of Nigerians
                from all walks of life in order to enable them obtain digital
                literacy and other digital skills.
              </p>
            </article>
          </div>

          <div className="mt-14 space-y-12">
            <EditorialTextBlock
              eyebrow="Understanding"
              title="Understanding a Digital Economy"
            >
              <p>
                The digital economy has been defined in many ways by various
                individuals and institutions. The European Commission defines the
                digital economy as an economy that encompasses businesses that
                sell goods and services via the internet, and digital platforms
                that connect spare capacity and demand.
              </p>

              <p>
                The World Economic Forum and the Group of Twenty define the
                digital economy as a broad range of economic activities
                comprising all jobs in the digital sector as well as digital
                occupations in non-digital sectors. In this policy document, we
                refer to digital economy as any aspect of the economy that is
                based on or driven by digital technologies.
              </p>
            </EditorialTextBlock>

            <EditorialTextBlock
              eyebrow="Opportunity"
              title="The Challenge and the Opportunity"
            >
              <p>
                Nigeria is capturing only a fraction of its digital economic
                potential and will need to make strategic investments to develop
                a dynamic, transformative digital economy, according to a new
                World Bank assessment.
              </p>

              <p>
                As the biggest economy in Africa with one of the largest
                populations of young people in the world, Nigeria is
                well-positioned to develop a strong digital economy, which would
                have a transformational impact on the country.
              </p>

              <p>
                Through innovations and investments, the Nigerian economy can
                harness digital data and new technologies, generate new content,
                link individuals with markets and government services, and roll
                out new, sustainable business models.
              </p>
            </EditorialTextBlock>

            <EditorialTextBlock
              eyebrow="Digital Skills"
              title="Closing the Digital Skills Knowledge Gap"
            >
              <p>
                Nigeria’s digital-led strategy to become more competitive in the
                21st century global economy may have come under serious threat.
                Acute shortage of digital skills is a major impediment for
                organisations willing to implement the transition to a digital
                economy.
              </p>

              <p>
                With technology evolving faster than the rate at which digital
                skills are being developed, experts warn that without urgent
                up-skilling, Nigeria risks being left behind in the digital
                skills space.
              </p>

              <p>
                The capabilities and skills required to use various forms of
                digital technologies remain limited to a small segment of the
                population. Low enrollment in basic education and the poor
                quality of that education, coupled with a lack of digital skills
                in curricula, is segmenting digital skills into a slim share of
                the population, excluding the poorest from the benefits of the
                digital world.
              </p>
            </EditorialTextBlock>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll relative overflow-hidden bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute left-[-14%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#0b7a3a]/7 blur-3xl" />
        <div className="absolute right-[-12%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-[#c69a42]/9 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#b73535]">
              Digital Literacy Delivery Plan
            </p>

            <h2 className="font-serif text-[clamp(2.6rem,4.8vw,5.4rem)] font-normal leading-[0.92] tracking-[-0.06em] text-[#13271b]">
              Objectives and implementation working as one plan.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#536458]">
              The project objectives define what the Digital Literacy Project is trying to achieve, while the implementation strategies explain how the programme will be delivered across schools, public sector institutions, communities and training partners.
            </p>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.58fr_auto_1.42fr] lg:items-start">
            <article>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#b73535]" />
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b3a1f]">
                  Project Objectives
                </p>
              </div>

              <div className="space-y-5">
                {objectives.map((item, index) => (
                  <div key={item} className="grid gap-3 sm:grid-cols-[2.6rem_1fr]">
                    <span className="font-serif text-2xl leading-none text-[#b73535]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="border-b border-[#13271b]/10 pb-5 text-sm leading-7 text-[#4d5f54]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="hidden h-full min-h-[520px] w-px bg-[linear-gradient(180deg,transparent,rgba(183,53,53,0.58),rgba(11,58,31,0.28),transparent)] lg:block" />

            <article>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#0b3a1f]" />
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b73535]">
                  Implementation Strategies
                </p>
              </div>

              <div className="space-y-4">
                {strategies.map((item, index) => (
                  <div key={item} className="grid gap-4 border-b border-[#13271b]/10 pb-4 sm:grid-cols-[2.8rem_1fr]">
                    <span className="font-serif text-2xl leading-none text-[#0b3a1f]/55">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-[#4d5f54]">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="reveal-on-scroll relative overflow-hidden bg-[#07120d] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute left-[-18%] top-[-28%] h-[560px] w-[560px] rounded-full bg-[#0b7a3a]/18 blur-3xl" />
        <div className="absolute right-[-16%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#c69a42]/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="relative mx-auto grid max-w-[1440px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#07120d] shadow-[0_35px_100px_rgba(7,18,13,0.22)] lg:grid-cols-[0.9fr_1.25fr]">
          <article className="relative overflow-hidden p-7 lg:p-12">
            <div className="absolute bottom-[-18%] left-[-20%] h-[360px] w-[360px] rounded-full bg-[#0b7a3a]/22 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

            <div className="relative">
              <div className="mb-14">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-[#c69a42]">
                  Our Focus. Their Future.
                </p>
                <div className="mt-4 h-px w-16 bg-[#c69a42]" />
              </div>

              <h2 className="max-w-xl font-serif text-[clamp(3.2rem,6.4vw,7rem)] font-normal leading-[0.88] tracking-[-0.07em] text-[#fff8ef]">
                Sectors of
                <br />
                the Economy<span className="text-[#c69a42]">.</span>
              </h2>

              <div className="mt-8 h-px w-20 bg-[#c69a42]" />

              <p className="mt-9 max-w-xl text-base leading-8 text-white/72">
                Across these vital sectors, G Initiative Digital Youth Project is building tomorrow’s workforce through industry-aligned training, enterprise exposure and real-world experience.
              </p>

              <div className="mt-16 grid max-w-lg grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#c69a42]/45 bg-white/6 text-[#c69a42]">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <p className="font-serif text-5xl leading-none text-[#c69a42]">7</p>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#c69a42]">
                    Key Sectors
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    Targeted for impact and growth.
                  </p>
                </div>

                <div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#c69a42]/45 bg-white/6 text-[#c69a42]">
                    <UsersRound className="h-6 w-6" />
                  </div>
                  <p className="font-serif text-5xl leading-none text-[#c69a42]">1</p>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#c69a42]">
                    Mission
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    Empowering youth. Transforming industries.
                  </p>
                </div>
              </div>

              <div className="mt-14 flex items-center gap-4 text-xs font-black uppercase tracking-[0.22em] text-[#c69a42]">
                <span>Our Impact Areas</span>
                <span className="impact-line-flow h-px w-20 bg-[#c69a42]" />
                <ArrowRight className="digital-arrow-icon h-4 w-4 text-[#c69a42]" />
              </div>
            </div>
          </article>

          <div className="relative bg-[#fff8ef] p-5 text-[#13271b] lg:p-8">
            <div className="overflow-hidden rounded-[1.6rem] border border-[#c69a42]/25 bg-white/70 shadow-[0_20px_70px_rgba(16,35,25,0.08)]">
              {sectorPathways.map(({ title, items }, index) => {
                const isActive = activeSector === index;

                return (
                  <article
                    key={title}
                    className={`group border-b border-[#13271b]/10 last:border-b-0 ${
                      isActive
                        ? "bg-[#07120d] text-white"
                        : "bg-[#fffaf2] text-[#13271b] hover:bg-white"
                    }`}
                  >
                    <div className="grid gap-5 px-6 py-6 sm:grid-cols-[4rem_1fr_3.5rem] sm:items-start lg:px-8">
                      <div className="font-serif text-3xl leading-none text-[#c69a42]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="border-l border-[#c69a42]/30 pl-6">
                        <button
                          type="button"
                          onClick={() => setActiveSector(isActive ? null : index)}
                          className="block w-full text-left"
                          aria-expanded={isActive}
                        >
                          <h3
                            className={`font-serif text-[clamp(1.7rem,2.3vw,2.65rem)] font-normal leading-tight tracking-[-0.035em] ${
                              isActive ? "text-white" : "text-[#13271b]"
                            }`}
                          >
                            {title}
                          </h3>
                        </button>

                        {isActive ? (
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm leading-6 text-white/78">
                            {items.map((item, itemIndex) => (
                              <span key={item} className="inline-flex items-center gap-3">
                                {itemIndex > 0 ? (
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#c69a42]" />
                                ) : null}
                                {item.replace(/:$/g, "")}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveSector(isActive ? null : index)}
                        aria-label={isActive ? `Close ${title}` : `Open ${title}`}
                        aria-expanded={isActive}
                        className={`grid h-12 w-12 place-items-center rounded-full border text-2xl leading-none transition ${
                          isActive
                            ? "border-[#c69a42] bg-[#c69a42] text-[#07120d]"
                            : "border-[#c69a42]/55 text-[#a87517] group-hover:border-[#c69a42] group-hover:text-[#c69a42]"
                        }`}
                      >
                        {isActive ? "−" : "+"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto mb-10 max-w-[1440px]">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#b17819]">
            Specialized Training Tracks
          </p>

          <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,4.7vw,5.2rem)] font-normal leading-[0.93] tracking-[-0.06em] text-[#13271b]">
            Practical training pathways for construction and public service performance.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#536458]">
            This part of the project connects hands-on construction skills, artisan development and public service performance training to the broader digital youth ecosystem.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[1.7rem] bg-[#07120d] p-7 text-white shadow-[0_25px_85px_rgba(7,18,13,0.14)] lg:p-10">
            <div className="absolute bottom-[-35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-[#c69a42]/10 blur-3xl" />

            <div className="relative">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#f2d184]">
                The Building Academy
              </p>

              <h2 className="max-w-2xl font-serif text-[clamp(2.4rem,4.4vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]">
                An institute designed to improve the quality of building and
                construction practices in the state.
              </h2>

              <ul className="mt-7 space-y-4">
                {[
                  "The success of the program will be measured by the quality of construction across the state.",
                  "All stages of the building process will be taught to educated, skilled and unskilled candidates.",
                  "Furniture production, welding, finishes, landscaping, building material production, etc. will be courses in the academy.",
                  "Candidates that complete the whole program will be issued certificates.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="course-outline-item flex gap-3 text-sm leading-7 text-white/78"
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <CheckCircle2 className="course-check-icon mt-1 h-5 w-5 shrink-0 text-[#f2d184]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[1.2rem] border border-[#c69a42]/30 bg-white/6 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#c69a42]/18 text-[#f2d184]">
                    <Hammer className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#f2d184]">
                    The Master Craftsman Program
                  </h3>
                </div>

                <p className="text-sm leading-7 text-white/72">
                  This program will be held in the Building Academy. The Master
                  Craftsman Training Program is a leadership training program
                  designed for intermediate to professional artisans and
                  technicians. Candidates’ skill sets will be refined and
                  upgraded; they will be trained to educate and transfer their
                  already developed skills to amateur and entry-level candidates.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/72">
                  At the end of the training, certificates will be given to
                  graduates. Every artisan and technician in the state will pass
                  through the training. Progress will be monitored and a ranking
                  system will be applied.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/72">
                  Only registered and active members will be given an artisanal
                  license and qualify for loans to equip themselves. Contractors
                  in the state will be mandated to use certified artisans and pay
                  a fee towards the program before being given approval to
                  commence projects.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.7rem] border border-[#13271b]/10 bg-white p-7 shadow-[0_20px_70px_rgba(16,35,25,0.08)] lg:p-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#b17819]">
              Public Service Trainings
            </p>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.05em]">
              Balanced Scorecard as a tool for Performance Management.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#4d5f54]">
              The Balanced Business Scorecard is a framework to help
              organizations clarify their vision and strategy and translate them
              into operational objectives that drive both performance and
              behavior.
            </p>

            <p className="mt-5 text-base leading-8 text-[#4d5f54]">
              For the benefit of effective delivery, this program uses a lively
              mixture of theory and work on public sector case studies to help
              delegates gain a thorough understanding of the benefits and
              challenges of implementing a Balanced Scorecard in the public
              sector.
            </p>

            <div className="mt-7 grid gap-3">
              {balancedScorecardObjectives.map((item, index) => (
                <div
                  key={item}
                  className="course-outline-item flex items-center gap-3 rounded-[1rem] bg-[#fff8ef] p-4 text-sm font-semibold text-[#4d5f54]"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <CheckCircle2 className="course-check-icon h-5 w-5 shrink-0 text-[#0b7a3a]" />
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>



        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden bg-[#07120d] text-white shadow-[0_30px_95px_rgba(7,18,13,0.18)]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.96fr_1.04fr]">
            <article className="relative overflow-hidden p-7 lg:p-10">
              <div className="absolute left-[-25%] top-[-35%] h-[380px] w-[380px] rounded-full bg-[#c69a42]/12 blur-3xl" />
              <div className="absolute bottom-[-30%] right-[-20%] h-[360px] w-[360px] rounded-full bg-[#0b7a3a]/18 blur-3xl" />

              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c69a42]/35 bg-white/6 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#f2d184]">
                  <Hammer className="h-4 w-4" />
                  From training to opportunity
                </div>

                <a
                  href="/initiatives/build-it"
                  className="mb-4 inline-flex text-xs font-black uppercase tracking-[0.24em] text-[#b73535] transition hover:text-[#f2d184]"
                >
                  BuildIT / GProjects
                </a>

                <h2 className="max-w-3xl font-serif text-[clamp(2.7rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.065em] text-[#fff8ef]">
                  The Future of Construction &amp; Trade.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
                  Graduates of the Building Academy can transition into BuildIT/GProjects, where certified skills connect to visibility, trade access, supplier networks and real-world construction opportunities.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {buildItPathwaySteps.map(({ step, title, body, Icon }) => (
                    <article
                      key={title}
                      className={`buildit-pathway-card ${step === "03" ? "buildit-pathway-card-final" : ""} rounded-[1.15rem] border border-[#c69a42]/25 bg-white/[0.06] p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.09]`}
                      style={{ animationDelay: `${(Number(step) - 1) * 1.15}s` }}
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#c69a42] text-xs font-black text-[#07120d]">
                          {step}
                        </span>
                        <Icon className="h-6 w-6 text-[#f2d184]" />
                      </div>

                      <h3 className="font-serif text-2xl leading-7 text-[#fff8ef]">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/68">
                        {body}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 flex flex-row flex-wrap gap-3">
                  <a
                    href="/initiatives/build-it"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#b73535] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#9f2c2c]"
                  >
                    Explore BuildIT <ArrowRight className="digital-arrow-icon h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>

            <aside className="relative min-h-[440px] overflow-hidden bg-[#07120d] lg:min-h-full">
              <img
                src={buildItConstructionHero}
                alt="BuildIT and GProjects construction and trade pathway"
                className="luxury-image-reveal absolute inset-0 h-full w-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.48)_0%,rgba(7,18,13,0.16)_42%,rgba(7,18,13,0.03)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,18,13,0.42)_0%,rgba(7,18,13,0.12)_42%,transparent_100%)]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-[linear-gradient(90deg,rgba(255,248,239,0.24)_0%,rgba(242,209,132,0.14)_46%,transparent_100%)] backdrop-blur-[1px] lg:block" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.25rem] border border-white/15 bg-[#07120d]/70 p-5 backdrop-blur-md">
                <a
                  href="/initiatives/build-it"
                  className="mb-2 inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#f2d184] transition hover:text-white"
                >
                  BuildIT Deployment Pathway
                </a>
                <h3 className="font-serif text-3xl leading-8 text-white">
                  You train. You certify. You build communities and careers.
                </h3>
              </div>
            </aside>
          </div>

          <div className="border-t border-[#13271b]/10 bg-[#fff8ef] px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
            <div className="mx-auto max-w-[1440px]">
              <a
                href="/initiatives/build-it"
                className="mb-5 inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#8f1f1f] transition hover:text-[#b73535]"
              >
                BuildIT Platform Capabilities
              </a>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {buildItCapabilities.map(({ title, body, Icon }) => (
                  <article
                    key={title}
                    className="group rounded-[1rem] border border-[#13271b]/10 bg-white p-4 shadow-[0_16px_45px_rgba(16,35,25,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#8f1f1f]/30 hover:shadow-[0_22px_60px_rgba(16,35,25,0.1)]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#8f1f1f] text-[#fff8ef] transition duration-500 group-hover:bg-[#07120d]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif text-xl leading-6 text-[#13271b]">
                        {title}
                      </h3>
                    </div>

                    <p className="text-sm leading-6 text-[#536458]">
                      {body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1440px]">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b7a3a]">
            Public Service Training Details
          </p>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <article className="rounded-[1.5rem] border border-[#13271b]/10 bg-white p-7 shadow-[0_18px_55px_rgba(16,35,25,0.06)]">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b7a3a]">
              Course Outline
            </p>

            <ul className="space-y-3">
              {balancedScorecardOutline.map((item, index) => (
                <li
                  key={item}
                  className="course-outline-item flex gap-3 text-sm leading-7 text-[#4d5f54]"
                  style={{ transitionDelay: `${index * 85}ms` }}
                >
                  <CheckCircle2 className="course-check-icon mt-1 h-5 w-5 shrink-0 text-[#0b7a3a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.5rem] border border-[#13271b]/10 bg-white p-7 shadow-[0_18px_55px_rgba(16,35,25,0.06)]">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#b17819]">
              Target Group and Key Assessment Methods
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <AnimatedPercent value={20} label="Attendance" />
              <AnimatedPercent value={30} label="Written Test" />
              <AnimatedPercent value={50} label="Group Presentation" />
            </div>

            <p className="mt-6 text-sm leading-7 text-[#536458]">
              Target Group: All staff.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#536458]">
              The sessions would essentially be lectures, discussions and
              scenario analysis backed with audio-visual materials used to
              facilitate learning.
            </p>
          </article>
          </div>
        </div>
      </section>


      <section className="reveal-on-scroll bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
            <article className="relative overflow-hidden rounded-[1.7rem] border border-[#13271b]/10 bg-white p-7 shadow-[0_20px_70px_rgba(16,35,25,0.08)] lg:p-10">
              <div className="absolute right-[-25%] top-[-38%] h-[330px] w-[330px] rounded-full bg-[#c69a42]/12 blur-3xl" />

              <div className="relative">
                <div
                  className="relative mb-8 h-28 w-28 overflow-hidden rounded-full shadow-[0_18px_50px_rgba(16,35,25,0.12)]"
                  aria-hidden="true"
                >
                  <div
                    className="sdg-wheel-spin absolute inset-0 rounded-full"
                    style={{ background: sdgWheelBackground }}
                  />
                  <div className="absolute inset-[18px] rounded-full bg-white" />
                  <span className="absolute inset-0 grid place-items-center text-sm font-black uppercase tracking-[0.12em] text-[#13271b]">
                    SDGs
                  </span>
                </div>

                <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
                  Supporting Sustainable Development Goals
                </p>

                <h2 className="font-serif text-[clamp(2.4rem,4.4vw,4.8rem)] font-normal leading-[0.95] tracking-[-0.055em]">
                  A digital future that creates inclusive growth.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#4d5f54]">
                  The Digital Youth Project aligns with the Sustainable
                  Development Goals that directly connect to education, work,
                  innovation, inclusion, production, institutions and
                  partnerships.
                </p>
              </div>
            </article>

            <div className="rounded-[1.7rem] border border-[#13271b]/10 bg-white/70 p-5 shadow-[0_20px_70px_rgba(16,35,25,0.06)] lg:p-6">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-[#b17819]">
                Relevant Global Goals
              </p>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {sdgCards.map(({ code, title, body, className, Icon }, index) => {
                  const isLastCenteredCard = index === sdgCards.length - 1;

                  return (
                    <article
                      key={code}
                      className={`${className} group min-h-[190px] rounded-[1rem] p-4 text-white shadow-[0_16px_45px_rgba(0,0,0,0.12)] transition duration-500 hover:-translate-y-1.5 hover:scale-[1.012] hover:shadow-[0_24px_65px_rgba(0,0,0,0.18)] ${isLastCenteredCard ? "xl:col-start-2" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-4xl font-black leading-none">
                          {code}
                        </span>
                        <Icon className="h-8 w-8 transition duration-500 group-hover:scale-110 group-hover:rotate-3" />
                      </div>

                      <h3 className="mt-4 max-w-[13rem] text-[0.78rem] font-black uppercase leading-5 tracking-[0.02em]">
                        {title}
                      </h3>

                      <p className="mt-3 text-[0.78rem] leading-6 text-white/88">
                        {body}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reveal-on-scroll relative overflow-hidden bg-[#07120d] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="absolute left-[-12%] bottom-[-60%] h-[420px] w-[420px] rounded-full bg-[#c69a42]/12 blur-3xl" />
        <div className="absolute right-[-12%] top-[-50%] h-[420px] w-[420px] rounded-full bg-[#0b7a3a]/18 blur-3xl" />

        <div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#f2d184]">
              The Digital Literacy Project
            </p>

            <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              To create and sustain a digital ecosystem compatible with the new
              era.
            </h2>
          </div>

          <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
            <a
              href="/#partners"
              className="inline-flex min-w-max shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#c69a42] px-4 py-3 text-xs font-black text-[#07120d] transition hover:-translate-y-0.5 hover:bg-[#e3bb62] sm:px-5"
            >
              Partner With This Initiative <ArrowRight className="digital-arrow-icon h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
