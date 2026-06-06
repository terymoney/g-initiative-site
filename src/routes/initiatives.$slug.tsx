import { createFileRoute, Navigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/initiatives/SiteHeader";
import { GirlChildWomenInitiativePage } from "@/components/initiatives/GirlChildWomenInitiativePage";
import { SouthEastFoodSecurityPage } from "@/components/initiatives/south-east-food-security/SouthEastFoodSecurityPage";
import { EducationLeadershipEmpowermentInitiativePage } from "@/components/initiatives/EducationLeadershipEmpowermentInitiativePage";
import { getInitiativeBySlug } from "@/data/initiatives";

export const Route = createFileRoute("/initiatives/$slug")({
  component: InitiativeDetailPage,
});

function InitiativeDetailPage() {
  const { slug } = Route.useParams();
  const initiative = getInitiativeBySlug(slug);

  if (!initiative) {
    return <Navigate to="/projects" />;
  }

  if (initiative.slug === "south-east-food-security-initiative") {
    return (
      <main className="min-h-screen bg-[#fff3e4] text-[#13271b]">
        <SiteHeader />
        <SouthEastFoodSecurityPage initiative={initiative} />
      </main>
    );
  }

  if (initiative.slug === "girl-child-women-development-initiative") {
    return (
      <main className="min-h-screen bg-[#fff3e4] text-[#13271b]">
        <SiteHeader />
        <GirlChildWomenInitiativePage initiative={initiative} />
      </main>
    );
  }
  
  if (initiative.slug === "education-leadership-empowerment-initiative") {
  return (
    <main className="min-h-screen bg-[#fff3e4] text-[#13271b]">
      <SiteHeader />
      <EducationLeadershipEmpowermentInitiativePage initiative={initiative} />
     </main>
   );
  }
  return <Navigate to="/projects" />;
}