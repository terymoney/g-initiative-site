import projectFood from "@/assets/project-food.jpg";
import projectCovid from "@/assets/project-covid.jpg";
import projectGrillit from "@/assets/project-grillit.jpg";
import projectHealth from "@/assets/project-health.jpg";
import projectMarathon from "@/assets/project-marathon.jpg";
import projectSports from "@/assets/project-sports.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import heroFoodSecurity from "@/assets/hero-foodsecurity.jpg";
import heroImpact from "@/assets/hero-impact.jpg";
import heroMarathon from "@/assets/hero-marathon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import seFoodSecurityCardCommunityOutreach from "@/assets/initiativessouth-east-food-security/se-food-security-card-community-outreach.jpeg";
import seFoodSecurityCommunityDistribution from "@/assets/initiativessouth-east-food-security/se-food-security-community-distribution.jpeg";
import seFoodSecurityFieldTeam from "@/assets/initiativessouth-east-food-security/se-food-security-field-team.jpeg";
import seFoodSecurityGardenOverview from "@/assets/initiativessouth-east-food-security/se-food-security-garden-overview.jpeg";
import seFoodSecurityGreenFieldCloseup from "@/assets/initiativessouth-east-food-security/se-food-security-green-field-closeup.jpeg";

import gfgcHeroAudience from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-hero-audience-under-canopy.jpg";
import gfgcGirlsLineupWide from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-full-girls-lineup-wide.jpg";
import womenCommunityLineup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/women-community-lineup-and-officials.jpg";
import nwaihaCenterDesignRender from "@/assets/girl-child-women/03-nwaiha-women-development-center/nwaiha-center-design-render.jpeg";
import ikeduruClassroomWide from "@/assets/essay/ikeduru-essay-classroom-wide.jpeg";

export type ProjectStatus = "Completed" | "Active" | "Expansion" | "Future";

export type ProjectCategory =
  | "Food Security"
  | "Emergency Response"
  | "Youth & Sports"
  | "Education & Leadership"
  | "Women & Girls"
  | "Enterprise & Creative"
  | "Culture & Heritage"
  | "Community Infrastructure";

export type ProjectPathway = {
  source: string;
  output: string;
  impact: string;
};

export type ImpactProject = {
  title: string;
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  image: string;
  year?: string;
  parentInitiativeSlug: string;
  parentInitiativeTitle: string;
  description: string;
  overview: string;
  location?: string;
  highlights: string[];
  sdgs: string[];
  pathway: ProjectPathway;
  storyReady?: boolean;
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Food Security",
  "Emergency Response",
  "Youth & Sports",
  "Education & Leadership",
  "Women & Girls",
  "Enterprise & Creative",
  "Culture & Heritage",
  "Community Infrastructure",
];

export const projects: ImpactProject[] = [
  {
    title: "COVID-19 Quick Response / 30,000 Egg Distribution",
    slug: "covid-19-quick-response-30000-egg-distribution",
    category: "Food Security",
    status: "Completed",
    image: projectFood,
    year: "2019",
    parentInitiativeSlug: "south-east-food-security-initiative",
    parentInitiativeTitle: "South-East Food Security Initiative",
    description:
      "Distribution of 30,000 fresh and healthy eggs to curb malnutrition in children during the COVID-19 period.",
    overview:
      "This recorded CSR project responded to hunger and malnutrition by delivering practical protein support to vulnerable households, especially children and families affected by the uncertainty of the COVID-19 period.",
    location: "Ikeduru L.G.A. / Akabo and surrounding communities",
    highlights: [
      "Distributed 30,000 fresh and healthy eggs.",
      "Focused on curbing malnutrition in children.",
      "Served as an emergency nutrition-relief action under the wider food-security initiative.",
    ],
    sdgs: ["SDG 1", "SDG 2", "SDG 3"],
    pathway: {
      source: "South-East Food Security Initiative",
      output: "30,000 eggs distributed",
      impact: "Protein support for children and vulnerable households",
    },
    storyReady: false,
  },
  {
    title: "Provision of Feed to Support Agro-SME",
    slug: "agro-sme-feed-support",
    category: "Food Security",
    status: "Completed",
    image: heroFoodSecurity,
    year: "2019–2020",
    parentInitiativeSlug: "south-east-food-security-initiative",
    parentInitiativeTitle: "South-East Food Security Initiative",
    description:
      "Provision of feed to support Agro-SMEs and prevent starvation during a difficult period for local food systems.",
    overview:
      "This project supported small agricultural operators and food producers with feed provision. It connects directly to the broader South-East Food Security story around source, production, storage, distribution, and community resilience.",
    highlights: [
      "Provided feed support to Agro-SMEs.",
      "Designed to prevent starvation.",
      "Strengthened the source-side of the food-security chain.",
    ],
    sdgs: ["SDG 1", "SDG 2", "SDG 8"],
    pathway: {
      source: "South-East Food Security Initiative",
      output: "Feed support for Agro-SMEs",
      impact: "Stronger local food production and reduced hunger risk",
    },
    storyReady: false,
  },
  {
    title: "Isabella Farms & Resort",
    slug: "isabella-farms-and-resort",
    category: "Food Security",
    status: "Expansion",
    image: seFoodSecurityGardenOverview,
    year: "Expansion",
    parentInitiativeSlug: "south-east-food-security-initiative",
    parentInitiativeTitle: "South-East Food Security Initiative",
    description:
      "A future agro-enterprise and food-resilience expansion connected to cultivation, land development, training, hospitality, and sustainable food systems.",
    overview:
      "Isabella Farms & Resort can sit under the South-East Food Security Initiative as a future-facing agro-enterprise expansion. It connects land, cultivation, community development, food production, and resilience into the broader food-security story.",
    highlights: [
      "Future agro-enterprise expansion.",
      "Connected to food production and local systems.",
      "Supports the long-term South-East food-resilience vision.",
    ],
    sdgs: ["SDG 1", "SDG 2", "SDG 8", "SDG 11"],
    pathway: {
      source: "South-East Food Security Initiative",
      output: "Agro-enterprise and farm-resort expansion",
      impact: "Food production, training, enterprise, and long-term resilience",
    },
    storyReady: false,
  },
  {
    title: "COVID-19 Informative Media & Mass Awareness Campaign",
    slug: "covid-19-media-mass-awareness-campaign",
    category: "Emergency Response",
    status: "Completed",
    image: projectCovid,
    year: "2019",
    parentInitiativeSlug: "emergency-public-health-response-initiative",
    parentInitiativeTitle: "Emergency & Public Health Response Initiative",
    description:
      "Informative media and mass-awareness materials for COVID-19 prevention, protection, and community sensitization.",
    overview:
      "This public-health project used banners, flyers, and awareness materials to educate communities during the COVID-19 period. It strengthened prevention messaging at the grassroots level.",
    highlights: [
      "Printed and deployed COVID-19 awareness materials.",
      "Supported grassroots sensitization.",
      "Helped communities understand prevention and protective practices.",
    ],
    sdgs: ["SDG 3", "SDG 11", "SDG 17"],
    pathway: {
      source: "Emergency & Public Health Response Initiative",
      output: "Awareness banners and media materials",
      impact: "Better public-health awareness and safer communities",
    },
    storyReady: false,
  },
  {
    title: "COVID-19 Preventive Support",
    slug: "covid-19-preventive-support",
    category: "Emergency Response",
    status: "Completed",
    image: projectCovid,
    year: "2020",
    parentInitiativeSlug: "emergency-public-health-response-initiative",
    parentInitiativeTitle: "Emergency & Public Health Response Initiative",
    description:
      "Distribution of over 1,000 hand sanitizers and over 1,000 face masks to support grassroots COVID-19 prevention.",
    overview:
      "This project provided preventive items to local residents during COVID-19, helping communities access basic protective gear that was otherwise difficult or unaffordable for many.",
    highlights: [
      "Distributed over 1,000 hand sanitizers.",
      "Distributed over 1,000 face masks.",
      "Protected local residents through practical emergency support.",
    ],
    sdgs: ["SDG 3", "SDG 11", "SDG 17"],
    pathway: {
      source: "Emergency & Public Health Response Initiative",
      output: "Masks and sanitizers distributed",
      impact: "Grassroots protection and improved emergency readiness",
    },
    storyReady: false,
  },
  {
    title: "SME Support Grants to 20 Undergraduates",
    slug: "sme-support-grants-to-20-undergraduates",
    category: "Enterprise & Creative",
    status: "Completed",
    image: gallery1,
    year: "Recorded CSR",
    parentInitiativeSlug: "enterprise-creative-empowerment-initiative",
    parentInitiativeTitle: "Enterprise & Creative Empowerment Initiative",
    description:
      "SME support grants provided to 20 undergraduates to strengthen enterprise, education, and livelihood possibilities.",
    overview:
      "This project supported young people with practical enterprise assistance, helping them build confidence, self-reliance, and economic participation.",
    highlights: [
      "Supported 20 undergraduates.",
      "Focused on SME and entrepreneurship assistance.",
      "Connected education with livelihood-building.",
    ],
    sdgs: ["SDG 1", "SDG 4", "SDG 8"],
    pathway: {
      source: "Enterprise & Creative Empowerment Initiative",
      output: "SME grants to undergraduates",
      impact: "Youth enterprise, self-reliance, and livelihood support",
    },
    storyReady: false,
  },
  {
    title: "Creative Industry Support",
    slug: "creative-industry-support",
    category: "Enterprise & Creative",
    status: "Completed",
    image: projectGrillit,
    year: "Recorded CSR",
    parentInitiativeSlug: "enterprise-creative-empowerment-initiative",
    parentInitiativeTitle: "Enterprise & Creative Empowerment Initiative",
    description:
      "Digital-literacy grant, graphic/gaming laptops, iPhone support for a content creator, and entrepreneurship assistance.",
    overview:
      "Creative Industry Support helped young creatives and digital workers access tools and funding that support skills, content creation, and enterprise growth.",
    highlights: [
      "Digital-literacy grant support.",
      "Two graphic/gaming laptops.",
      "One iPhone content-creator support.",
      "One million naira entrepreneurship support.",
    ],
    sdgs: ["SDG 4", "SDG 8", "SDG 9"],
    pathway: {
      source: "Enterprise & Creative Empowerment Initiative",
      output: "Digital tools and enterprise support",
      impact: "Creative capacity, digital skills, and youth livelihood growth",
    },
    storyReady: false,
  },
  {
    title: "Ikeduru Half Marathon",
    slug: "ikeduru-half-marathon",
    category: "Youth & Sports",
    status: "Completed",
    image: heroMarathon,
    year: "2020",
    parentInitiativeSlug: "youth-sports-development-initiative",
    parentInitiativeTitle: "Youth & Sports Development Initiative",
    description:
      "A Run for Digital Literacy, youth development, and sports promotion in partnership with Ikeduru Local Government Area.",
    overview:
      "The Ikeduru Half Marathon was tagged as a run for digital literacy. It promoted fitness, local pride, youth participation, and digital-literacy awareness through sport.",
    location: "Ikeduru Local Government Area",
    highlights: [
      "Promoted digital-literacy awareness.",
      "Supported youth fitness and community participation.",
      "Created sports visibility for Ikeduru and surrounding communities.",
    ],
    sdgs: ["SDG 3", "SDG 4", "SDG 11", "SDG 17"],
    pathway: {
      source: "Youth & Sports Development Initiative",
      output: "Half marathon and sports activation",
      impact:
        "Youth visibility, fitness, digital-literacy awareness, and community pride",
    },
    storyReady: false,
  },
  {
    title: "Akabo Super League",
    slug: "akabo-super-league",
    category: "Youth & Sports",
    status: "Completed",
    image: projectSports,
    year: "2019 & 2024",
    parentInitiativeSlug: "youth-sports-development-initiative",
    parentInitiativeTitle: "Youth & Sports Development Initiative",
    description:
      "A grassroots football platform showcasing and projecting local talent for global visibility and foreign exchange.",
    overview:
      "Akabo Super League created a grassroots football showcase for local talent, discipline, sports culture, and global visibility.",
    highlights: [
      "Sponsored grassroots football competition.",
      "Projected local talent for global visibility.",
      "Built sports pride and community engagement.",
    ],
    sdgs: ["SDG 3", "SDG 8", "SDG 11"],
    pathway: {
      source: "Youth & Sports Development Initiative",
      output: "Grassroots football league",
      impact: "Talent visibility, discipline, and community sports development",
    },
    storyReady: false,
  },
  {
    title: "Ikeduru Essay Competition",
    slug: "ikeduru-essay-competition",
    category: "Education & Leadership",
    status: "Completed",
    image: ikeduruClassroomWide,
    year: "2021",
    parentInitiativeSlug: "education-leadership-empowerment-initiative",
    parentInitiativeTitle: "Education & Leadership Empowerment Initiative",
    description:
      "Senior secondary school essay writing competition focused on sustainable development in Igboland and South-Eastern Nigeria.",
    overview:
      "The Ikeduru Essay Competition encouraged students to research, think critically, and write original ideas on sustainable development, helping them connect classroom learning with leadership, community progress, and the future of the South-East.",
    location: "Ikeduru L.G.A., Imo State",
    highlights: [
      "Focused on sustainable development in Igboland and South-Eastern Nigeria.",
      "Created a platform for secondary school students to write, think, and propose ideas.",
      "Included prize recognition and award support for outstanding essays.",
      "Strengthened early leadership, SDG awareness, and education engagement.",
    ],
    sdgs: ["SDG 4", "SDG 8", "SDG 11", "SDG 17"],
    pathway: {
      source: "Education & Leadership Empowerment Initiative",
      output: "Essay competition, SDG awareness, and student recognition",
      impact:
        "Critical thinking, writing confidence, leadership awareness, and sustainable-development consciousness",
    },
    storyReady: true,
  },
  {
    title: "First School Leaving & WAEC Forms Support",
    slug: "first-school-leaving-waec-forms-support",
    category: "Education & Leadership",
    status: "Completed",
    image: heroImpact,
    year: "Education Support",
    parentInitiativeSlug: "education-leadership-empowerment-initiative",
    parentInitiativeTitle: "Education & Leadership Empowerment Initiative",
    description:
      "Sponsorship of First School Leaving and WAEC forms for 20 school students in Ikeduru.",
    overview:
      "This education-support project reduced financial barriers for students by sponsoring First School Leaving and WAEC forms.",
    location: "Ikeduru",
    highlights: [
      "Sponsored First School Leaving forms.",
      "Sponsored WAEC forms.",
      "Supported 20 school students in Ikeduru.",
    ],
    sdgs: ["SDG 1", "SDG 4", "SDG 10"],
    pathway: {
      source: "Education & Leadership Empowerment Initiative",
      output: "Exam-form sponsorship",
      impact: "Reduced education barriers for 20 students",
    },
    storyReady: false,
  },
  {
    title: "Aspire Leadership Master Class",
    slug: "aspire-leadership-master-class",
    category: "Education & Leadership",
    status: "Completed",
    image: projectHealth,
    year: "Leadership Training",
    parentInitiativeSlug: "education-leadership-empowerment-initiative",
    parentInitiativeTitle: "Education & Leadership Empowerment Initiative",
    description:
      "A two-week leadership training and seminar organized in partnership with Iwanyanwu Foundation.",
    overview:
      "Aspire Leadership Master Class developed young leaders through structured leadership training, mentorship, seminars, and values-based empowerment.",
    highlights: [
      "Two-week leadership training.",
      "Educational seminar and mentorship.",
      "Partnership with Iwanyanwu Foundation.",
    ],
    sdgs: ["SDG 4", "SDG 8", "SDG 17"],
    pathway: {
      source: "Education & Leadership Empowerment Initiative",
      output: "Leadership training and seminar",
      impact: "Youth leadership capacity and confidence",
    },
    storyReady: false,
  },
  {
    title: "G–For the Girl Child Project",
    slug: "g-for-the-girl-child-project",
    category: "Women & Girls",
    status: "Completed",
    image: gfgcHeroAudience,
    year: "Gender Equality",
    parentInitiativeSlug: "girl-child-women-development-initiative",
    parentInitiativeTitle: "Girl Child & Women Development Initiative",
    description:
      "A gender-equality project empowering the Igbo girl-child through digital literacy, entrepreneurial skills, self-reliance, and sustainability.",
    overview:
      "G–For the Girl Child Project focuses on digital literacy, entrepreneurial skillset, self-reliance, and sustainability for the Igbo girl-child. The International Day for the Girl Child 2025 event, PAD Day support, practical skills demonstrations, and partnership with public leadership should sit inside this project story page as proof of impact.",
    highlights: [
      "Gender-equality focused.",
      "Digital-literacy and entrepreneurial skills.",
      "PAD Day support, health dignity, and practical skills exposure.",
      "Built around self-reliance and sustainability.",
    ],
    sdgs: ["SDG 3", "SDG 4", "SDG 5", "SDG 8", "SDG 10", "SDG 17"],
    pathway: {
      source: "Girl Child & Women Development Initiative",
      output: "Digital, dignity, and entrepreneurial empowerment for girls",
      impact:
        "Confidence, self-reliance, health dignity, and opportunity for the Igbo girl-child",
    },
    storyReady: true,
  },
  {
    title: "Nwaiha Women Development Center",
    slug: "nwaiha-women-development-center",
    category: "Women & Girls",
    status: "Completed",
    image: nwaihaCenterDesignRender,
    year: "Community Infrastructure",
    parentInitiativeSlug: "girl-child-women-development-initiative",
    parentInitiativeTitle: "Girl Child & Women Development Initiative",
    description:
      "A women development center designed and built through a crowdfunding system as a functional event hub for recreation, conferences, educational seminars, skill acquisition, and counseling.",
    overview:
      "Nwaiha Women Development Center is a community space designed and built through crowdfunding to support women through recreation, conferences, educational seminars, skill acquisition, and counseling.",
    highlights: [
      "Designed and built through a crowdfunding system.",
      "Fully functional event hub for women development.",
      "Supports recreation, conferences, educational seminars, skill acquisition, and counseling.",
    ],
    sdgs: ["SDG 4", "SDG 5", "SDG 8", "SDG 11", "SDG 17"],
    pathway: {
      source: "Girl Child & Women Development Initiative",
      output: "Women development center and community event hub",
      impact:
        "A functional space for learning, counseling, skills, recreation, and empowerment",
    },
    storyReady: true,
  },
  {
    title: "Rehabilitation of a 2-Classroom Block",
    slug: "rehabilitation-of-a-2-classroom-block",
    category: "Community Infrastructure",
    status: "Completed",
    image: heroImpact,
    year: "Education Infrastructure",
    parentInitiativeSlug:
      "community-infrastructure-sustainable-communities-initiative",
    parentInitiativeTitle:
      "Community Infrastructure & Sustainable Communities Initiative",
    description:
      "Rehabilitation of a 2-classroom block at Akabo Community School to improve local learning infrastructure.",
    overview:
      "This project improved learning infrastructure by rehabilitating a 2-classroom block at Akabo Community School. It supports education access through better physical learning environments.",
    location: "Akabo Community School",
    highlights: [
      "Rehabilitated a 2-classroom block.",
      "Supported Akabo Community School.",
      "Improved local education infrastructure.",
    ],
    sdgs: ["SDG 4", "SDG 9", "SDG 11"],
    pathway: {
      source: "Community Infrastructure & Sustainable Communities Initiative",
      output: "2-classroom block rehabilitation",
      impact: "Better learning conditions for students and teachers",
    },
    storyReady: false,
  },
  {
    title: "Ikeduru Green City",
    slug: "ikeduru-green-city",
    category: "Community Infrastructure",
    status: "Future",
    image: heroImpact,
    year: "Future",
    parentInitiativeSlug:
      "community-infrastructure-sustainable-communities-initiative",
    parentInitiativeTitle:
      "Community Infrastructure & Sustainable Communities Initiative",
    description:
      "A sustainable-community vision connected to greener planning, community development, environmental consciousness, and future-ready local infrastructure.",
    overview:
      "Ikeduru Green City belongs under the sustainable communities umbrella. It represents a future-facing vision for greener community development, planning, environmental awareness, and long-term local transformation.",
    highlights: [
      "Future sustainable-community concept.",
      "Connected to SDG 11 and local development.",
      "Supports greener, more organized community growth.",
    ],
    sdgs: ["SDG 9", "SDG 11", "SDG 13", "SDG 17"],
    pathway: {
      source: "Community Infrastructure & Sustainable Communities Initiative",
      output: "Green community-development concept",
      impact: "Cleaner, more sustainable, future-ready communities",
    },
    storyReady: false,
  },
  {
    title: "Climate Action & Green Footprint Expansion",
    slug: "climate-action-green-footprint-expansion",
    category: "Community Infrastructure",
    status: "Future",
    image: seFoodSecurityGreenFieldCloseup,
    year: "Future",
    parentInitiativeSlug:
      "community-infrastructure-sustainable-communities-initiative",
    parentInitiativeTitle:
      "Community Infrastructure & Sustainable Communities Initiative",
    description:
      "A climate-action expansion track focused on environmental responsibility, green footprint, sustainability awareness, and community resilience.",
    overview:
      "This project track connects G Initiative’s community-development work with climate action. It can support tree planting, environmental education, greener infrastructure, and climate-conscious local development.",
    highlights: [
      "Connected to SDG 13 / Climate Action.",
      "Supports green footprint and environmental responsibility.",
      "Can grow into tree planting, awareness, and sustainability programmes.",
    ],
    sdgs: ["SDG 11", "SDG 12", "SDG 13", "SDG 17"],
    pathway: {
      source: "Community Infrastructure & Sustainable Communities Initiative",
      output: "Climate-action and green-footprint programming",
      impact: "More environmentally responsible and resilient communities",
    },
    storyReady: false,
  },
  {
    title: "Responsible Consumption & Biofuel Awareness Track",
    slug: "responsible-consumption-biofuel-awareness-track",
    category: "Community Infrastructure",
    status: "Future",
    image: heroCommunity,
    year: "Future",
    parentInitiativeSlug:
      "community-infrastructure-sustainable-communities-initiative",
    parentInitiativeTitle:
      "Community Infrastructure & Sustainable Communities Initiative",
    description:
      "A sustainability track connected to responsible consumption, environmental education, waste-conscious systems, and alternative energy awareness.",
    overview:
      "This track fits under sustainable communities because it deals with how communities consume, manage resources, think about waste, and explore cleaner or alternative energy possibilities such as biofuel awareness.",
    highlights: [
      "Connected to SDG 12 / Responsible Consumption and Production.",
      "Supports sustainability and resource-conscious behaviour.",
      "Can become an education and community-awareness programme.",
    ],
    sdgs: ["SDG 7", "SDG 11", "SDG 12", "SDG 13"],
    pathway: {
      source: "Community Infrastructure & Sustainable Communities Initiative",
      output: "Responsible-consumption and biofuel awareness",
      impact: "Cleaner habits, sustainability education, and better resource use",
    },
    storyReady: false,
  },
  {
    title: "Akabo Cultural Heritage Display & Youth Carnival",
    slug: "akabo-cultural-heritage-display-youth-carnival",
    category: "Culture & Heritage",
    status: "Completed",
    image: gallery3,
    year: "Cultural Heritage",
    parentInitiativeSlug: "culture-heritage-initiative",
    parentInitiativeTitle: "Culture & Heritage Initiative",
    description:
      "Co-sponsored and organized Akabo Cultural Heritage Display and Youth Carnival.",
    overview:
      "This project supported cultural pride, youth participation, local identity, and community celebration through heritage display and carnival activities.",
    location: "Akabo",
    highlights: [
      "Co-sponsored and organized cultural heritage display.",
      "Supported youth carnival participation.",
      "Promoted community identity and local pride.",
    ],
    sdgs: ["SDG 10", "SDG 11", "SDG 17"],
    pathway: {
      source: "Culture & Heritage Initiative",
      output: "Cultural display and youth carnival",
      impact: "Community pride, youth participation, and cultural preservation",
    },
    storyReady: false,
  },
  {
    title: "Peace, Security & Community Protection Support",
    slug: "peace-security-community-protection-support",
    category: "Culture & Heritage",
    status: "Completed",
    image: gallery3,
    year: "Community Support",
    parentInitiativeSlug: "culture-heritage-initiative",
    parentInitiativeTitle: "Culture & Heritage Initiative",
    description:
      "Community protection and peace-support work connected to Akabo security, cultural identity, social stability, and local safety.",
    overview:
      "This support track can sit close to Culture & Heritage for now because it protects the community environment where culture, youth participation, identity, and social cohesion can thrive.",
    highlights: [
      "Connected to peace, safety, and community stability.",
      "Supports local protection and community confidence.",
      "Can later become its own Peace & Security initiative if more materials are provided.",
    ],
    sdgs: ["SDG 10", "SDG 11", "SDG 16", "SDG 17"],
    pathway: {
      source: "Culture & Heritage Initiative",
      output: "Community protection and peace-support track",
      impact: "Safer, more confident, and more cohesive communities",
    },
    storyReady: false,
  },
];

export const recordedCsrEvidenceImage = gfgcGirlsLineupWide;

export function getProjectBySlug(slug: string) {
  const normalizedSlug =
    slug === "nwaha-women-development-center"
      ? "nwaiha-women-development-center"
      : slug;

  return projects.find((project) => project.slug === normalizedSlug);
}

export function getProjectsByInitiative(slug: string) {
  return projects.filter((project) => project.parentInitiativeSlug === slug);
}