export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectStorySection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type ProjectImpactProof = {
  eyebrow: string;
  title: string;
  body: string;
};

export type ProjectPathwayItem = {
  title: string;
  subtitle: string;
  icon: "source" | "eggs" | "families" | "storage" | "resilience";
};

export type ProjectVideoBlock = {
  eyebrow: string;
  title: string;
  body: string;
  duration?: string;
};

export type ProjectDetailContent = {
  slug: string;
  heroTitle?: string;
  heroSummary: string;
  storyTitle: string;
  overview: string;
  metrics?: ProjectMetric[];
  pathway?: ProjectPathwayItem[];
  video?: ProjectVideoBlock;
  sections?: ProjectStorySection[];
  impactProof?: ProjectImpactProof;
  highlights?: string[];
  sdgs?: string[];
  partnerOpportunity?: string;
};