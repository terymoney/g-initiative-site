import projectGrillit from "@/assets/initiativessouth-east-food-security/se-food-security-field-team.jpeg";
import projectHealth from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-health-worker-speaker.jpg";
import projectMarathon from "@/assets/ikeduru-half-marathon/ikeduru-marathon-runner-portrait-sepia.jpeg";
import projectCovid from "@/assets/initiativessouth-east-food-security/covid_egg_04_g_initiative_vest_distribution.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import heroFoodSecurity from "@/assets/hero-foodsecurity.jpg";
import heroImpact from "@/assets/essay/ikeduru-essay-classroom-wide.jpeg";
import gallery2 from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-full-girls-lineup-wide.jpg";
import gallery3 from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-community-stakeholders-group.jpg";
import buildItHero from "@/assets/build-it/builditt-hero.jpg";

export type InitiativeStatus = "Active" | "Expansion" | "Recorded" | "Future";

export type Initiative = {
  title: string;
  slug: string;
  status: InitiativeStatus;
  image: string;
  eyebrow: string;
  description: string;
  storyTitle: string;
  storySummary: string;
  focus: string[];
  projectCountLabel: string;
  sdgs: string[];
};

export const initiatives: Initiative[] = [
  {
    title: "South-East Food Security Initiative",
    slug: "south-east-food-security-initiative",
    status: "Expansion",
    image: heroCommunity,
    eyebrow: "Food Security",
    description:
      "A broader food-resilience initiative connecting emergency nutrition relief, food storage, distribution systems, and long-term community support.",
    storyTitle:
      "From emergency nutrition support to long-term food resilience.",
    storySummary:
      "The South-East Food Security Initiative brings together G Initiative’s food-security work across immediate nutrition support, vulnerable household relief, Agro-SME support, food storage, distribution systems, and long-term community resilience. It connects direct community relief with a bigger vision for sustainable food access across the South-East.",
    focus: [
      "Emergency nutrition support for vulnerable children and households.",
      "Agro-SME support designed to protect food supply and reduce starvation risk.",
      "Food storage and distribution systems for longer-term resilience.",
      "Community food support that connects local resources to household wellbeing.",
    ],
    projectCountLabel: "4 related projects",
    sdgs: ["SDG 1", "SDG 2", "SDG 3", "SDG 11", "SDG 17"],
  },
  {
    title: "Emergency & Public Health Response Initiative",
    slug: "emergency-public-health-response-initiative",
    status: "Recorded",
    image: projectCovid,
    eyebrow: "Emergency Response",
    description:
      "Community-facing crisis response work covering COVID-19 awareness, preventive support, sensitization, and emergency public health action.",
    storyTitle:
      "Rapid response when communities need protection most.",
    storySummary:
      "This initiative captures G Initiative’s response to public-health emergencies and crisis moments, especially during COVID-19. It includes preventive-item distribution, awareness campaigns, community sensitization, and practical support for families who lacked access to basic protective resources.",
    focus: [
      "Public-health awareness and community sensitization.",
      "Distribution of preventive items such as masks and sanitizers.",
      "Emergency response for vulnerable grassroots communities.",
      "Health education through media, banners, flyers, and outreach materials.",
    ],
    projectCountLabel: "2 related projects",
    sdgs: ["SDG 3", "SDG 11", "SDG 17"],
  },
  {
    title: "Youth & Sports Development Initiative",
    slug: "youth-sports-development-initiative",
    status: "Recorded",
    image: projectMarathon,
    eyebrow: "Youth & Sports",
    description:
      "Sports-led development work using marathon events, grassroots football, discipline, visibility, and youth participation to strengthen communities.",
    storyTitle:
      "Using sports to create visibility, discipline, and opportunity.",
    storySummary:
      "This initiative positions sport as a tool for youth development, talent discovery, community pride, fitness, discipline, and local visibility. It includes sports programmes like the Ikeduru Half Marathon and Akabo Super League.",
    focus: [
      "Grassroots sports development and youth participation.",
      "Talent discovery through football and marathon events.",
      "Community identity, discipline, and healthy living.",
      "Sports as a platform for visibility, confidence, and opportunity.",
    ],
    projectCountLabel: "2 related projects",
    sdgs: ["SDG 3", "SDG 4", "SDG 8", "SDG 11", "SDG 17"],
  },
  {
    title: "Education & Leadership Empowerment Initiative",
    slug: "education-leadership-empowerment-initiative",
    status: "Recorded",
    image: heroImpact,
    eyebrow: "Education",
    description:
      "Education support, leadership training, essay competition, school support, and learning-infrastructure projects for young people.",
    storyTitle:
      "Strengthening learning, leadership, and future readiness.",
    storySummary:
      "This initiative brings together G Initiative’s education and leadership support work, including school support, student assistance, essay competitions, leadership training, and learning-infrastructure improvement.",
    focus: [
      "Education access and student support.",
      "Leadership training and mentorship for young people.",
      "Essay competitions and intellectual development.",
      "Learning infrastructure support through school rehabilitation projects.",
    ],
    projectCountLabel: "4 related projects",
    sdgs: ["SDG 4", "SDG 8", "SDG 10", "SDG 17"],
  },
  {
    title: "Digital Youth Project",
    slug: "digital-youth-project",
    status: "Future",
    image: heroImpact,
    eyebrow: "Digital Youth",
    description:
      "A youth development ecosystem designed to build digital literacy, innovation, enterprise, creative capacity, vocational pathways, and future-ready work opportunities.",
    storyTitle:
      "Building the digital, creative, industrial, and vocational workforce of tomorrow.",
    storySummary:
      "The Digital Youth Project connects digital literacy, incubation, design, technology, vocational training, enterprise, public service capacity, and BuildIT-linked opportunity pathways into one youth development ecosystem. It is designed to help young people gain skills, create ideas, build products, access markets, and move toward jobs, contracts, enterprise, and economic participation.",
    focus: [
      "Digital literacy and future-of-work skills for young people.",
      "Youth Development Centre with incubation, technology, marketplace, design, data, think tank, and vocational components.",
      "Creative, enterprise, public service, and vocational pathways that lead to different kinds of opportunity.",
      "BuildIT-linked advantage for vocational and construction trainees through verified training, profile strength, recommendations, and job visibility.",
    ],
    projectCountLabel: "8 ecosystem components",
    sdgs: ["SDG 4", "SDG 8", "SDG 9", "SDG 17"],
  },
  {
    title: "BUILD IT / GProjects",
    slug: "build-it",
    status: "Active",
    image: buildItHero,
    eyebrow: "Construction & Trade",
    description:
      "A comprehensive unified ecosystem designed to bridge the gap between architectural planning, project management, material sourcing, professional hiring, real estate access, and global trade.",
    storyTitle:
      "Redefining construction and real estate through one connected ecosystem.",
    storySummary:
      "BUILD IT / GProjects is a construction and trade ecosystem built to simplify how people plan projects, source materials, manage builds, hire verified professionals, access real estate opportunities, and connect local construction activity to wider global supply chains. It brings together builders, artisans, suppliers, investors, developers, and project owners through a transparent digital platform.",
    focus: [
      "Builders Market for architectural plans, materials, sourcing, and escrow-backed transactions.",
      "Pool Funding, co-op buying, and global supply-chain access for better pricing and smoother delivery.",
      "Project Portfolio tools for budgets, timelines, BIM documents, task tracking, and collaboration.",
      "Professional Job Pool, artisan visibility, AI Architect support, real estate access, and REIT-linked opportunities.",
    ],
    projectCountLabel: "7 ecosystem modules",
    sdgs: ["SDG 8", "SDG 9", "SDG 11", "SDG 17"],
  },
  {
    title: "Girl Child & Women Development Initiative",
    slug: "girl-child-women-development-initiative",
    status: "Recorded",
    image: gallery2,
    eyebrow: "Women & Girls",
    description:
      "A women-and-girl-child focused initiative supporting digital literacy, entrepreneurship, skills, counselling, empowerment, and confidence-building.",
    storyTitle:
      "Empowering women and girls to lead, learn, and thrive.",
    storySummary:
      "This initiative focuses on the girl child and women development through digital literacy, entrepreneurship, skill acquisition, counselling, confidence-building, and access to development spaces.",
    focus: [
      "Girl-child empowerment through digital literacy and entrepreneurship.",
      "Women development through training, counselling, and community support.",
      "Confidence-building, self-reliance, and leadership exposure.",
      "Safe community spaces for women-focused development activities.",
    ],
    projectCountLabel: "2 related projects",
    sdgs: ["SDG 4", "SDG 5", "SDG 8", "SDG 10", "SDG 17"],
  },
  {
    title: "Enterprise & Creative Empowerment Initiative",
    slug: "enterprise-creative-empowerment-initiative",
    status: "Recorded",
    image: heroCommunity,
    eyebrow: "Enterprise",
    description:
      "Enterprise, SME, creative-industry, and digital-support work designed to help young people build livelihoods and practical capacity.",
    storyTitle:
      "Supporting enterprise, creativity, and practical livelihoods.",
    storySummary:
      "This initiative covers SME support, creative-industry assistance, digital tools, youth enterprise, and entrepreneurship support. It helps young people and small businesses access resources that can improve income, creativity, and self-reliance.",
    focus: [
      "SME grants and youth enterprise support.",
      "Creative-industry tools and digital-literacy support.",
      "Entrepreneurship assistance for practical livelihood development.",
      "Support for young people building creative and business capacity.",
    ],
    projectCountLabel: "2 related projects",
    sdgs: ["SDG 1", "SDG 4", "SDG 8", "SDG 9"],
  },
  {
    title: "G–For The Glaucoma Initiative",
    slug: "g-for-the-glaucoma-initiative",
    status: "Future",
    image: projectHealth,
    eyebrow: "Health & Eye Care",
    description:
      "A health initiative focused on glaucoma awareness, early detection, screening, access to care, health education, and future community eye-care partnerships.",
    storyTitle:
      "Protecting sight through awareness, screening, and early care.",
    storySummary:
      "This initiative focuses on glaucoma awareness and early detection. It is designed to support education, community screening, treatment pathways, capacity development, and partnerships that help protect vulnerable people from preventable vision loss.",
    focus: [
      "Glaucoma awareness and public health education.",
      "Early detection and community-based screening.",
      "Access-to-care pathways through health partnerships.",
      "Capacity development for local health workers and volunteers.",
    ],
    projectCountLabel: "1 core initiative",
    sdgs: ["SDG 3", "SDG 4", "SDG 10", "SDG 17"],
  },
  {
    title: "GrillIt Movement",
    slug: "grillit-movement",
    status: "Expansion",
    image: projectGrillit,
    eyebrow: "Food Enterprise",
    description:
      "A scalable grilled-food innovation and empowerment movement built around hygiene, youth employment, branded packaging, and enterprise growth.",
    storyTitle:
      "Redefining grilled food as hygiene, employment, and enterprise.",
    storySummary:
      "GrillIt is an innovation and enterprise movement designed to transform grilled-food service into a structured, hygienic, scalable, and youth-employment-driven model. It connects food, health, branding, training, and investment opportunity.",
    focus: [
      "Hygienic and standardized grilled-food stations.",
      "Youth employment and food entrepreneurship pathways.",
      "Branded packaging, natural spices, and consistent customer experience.",
      "Investor-ready expansion through replicable food-service systems.",
    ],
    projectCountLabel: "4 future project tracks",
    sdgs: ["SDG 3", "SDG 8", "SDG 9", "SDG 17"],
  },
  {
    title: "Culture & Heritage Initiative",
    slug: "culture-heritage-initiative",
    status: "Recorded",
    image: gallery3,
    eyebrow: "Culture",
    description:
      "Community identity, cultural heritage display, youth carnival, local pride, and heritage-centered participation.",
    storyTitle:
      "Preserving identity through culture, youth, and community pride.",
    storySummary:
      "This initiative supports cultural identity, heritage display, youth carnival, community celebration, and local participation. It connects impact work to pride, belonging, and social cohesion.",
    focus: [
      "Cultural heritage display and preservation.",
      "Youth carnival and community celebration.",
      "Local identity, pride, and participation.",
      "Cultural programming as a tool for unity and visibility.",
    ],
    projectCountLabel: "2 related projects",
    sdgs: ["SDG 10", "SDG 11", "SDG 17"],
  },
  {
    title: "Community Infrastructure & Sustainable Communities Initiative",
    slug: "community-infrastructure-sustainable-communities-initiative",
    status: "Recorded",
    image: heroFoodSecurity,
    eyebrow: "Sustainable Communities",
    description:
      "Community-development work connected to infrastructure, learning spaces, women development facilities, and the broader SDG 11 sustainable communities thread.",
    storyTitle:
      "Building spaces and systems that make communities stronger.",
    storySummary:
      "This initiative covers physical and social infrastructure that improves community life, including women development facilities, learning spaces, classroom rehabilitation, and sustainable community development linked to SDG 11.",
    focus: [
      "Community infrastructure and shared development spaces.",
      "Women development facilities and counselling/training environments.",
      "Education infrastructure such as classroom rehabilitation.",
      "Sustainable community development and long-term local resilience.",
    ],
    projectCountLabel: "2 related projects",
    sdgs: ["SDG 4", "SDG 5", "SDG 9", "SDG 11", "SDG 17"],
  },
];

export function getInitiativeBySlug(slug: string): Initiative | undefined {
  return initiatives.find((initiative) => initiative.slug === slug);
}
