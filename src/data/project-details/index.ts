import { southEastFoodSecurityProject } from "./south-east-food-security-project";
import type { ProjectDetailContent } from "./types";

export const projectDetails: ProjectDetailContent[] = [
  southEastFoodSecurityProject,
];

export function getProjectDetailBySlug(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}

export type {
  ProjectDetailContent,
  ProjectImpactProof,
  ProjectMetric,
  ProjectPathwayItem,
  ProjectStorySection,
  ProjectVideoBlock,
} from "./types";