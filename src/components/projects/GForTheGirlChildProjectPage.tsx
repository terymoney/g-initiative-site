import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Droplets,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Sparkles,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Initiative } from "@/data/initiatives";
import type { ImpactProject } from "@/data/projects";

import gfgcHeroAudience from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-hero-audience-under-canopy.jpg";
import gfgcGirlsLineupWide from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-full-girls-lineup-wide.jpg";
import gfgcGirlsCelebration from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-girls-celebration-moment.jpg";
import womenCommunityLineup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/women-community-lineup-and-officials.jpg";

import gfgcFemaleFacilitatorAddress from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-female-facilitator-address.jpg";
import gfgcGirlChildSpeaker from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-girl-child-speaker.jpg";
import gfgcHealthWorkerSpeaker from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-health-worker-speaker.jpg";
import gfgcLiquidSoapBleachDemo from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-liquid-soap-jik-practical-demo.jpg";
import gfgcSanitaryPadBoxes from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-sanitary-pad-support-boxes.jpg";
import gfgcPadDaySkillsVideo from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/g-girl-child-pad-day-skills-video.mov?url";

import gfgcCollaborationTeamGroup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-collaboration-team-group-01.jpg";
import gfgcCommunityLeaderAddress from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-community-leader-address.jpg";
import gfgcCommunityStakeholdersGroup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-community-stakeholders-group.jpg";
import gfgcEventTeamWhiteShirts from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-event-team-white-shirts.jpg";
import gfgcFacilitatorStandingAddress from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-facilitator-standing-address.jpg";
import gfgcMaleSpeakerAddress from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-male-speaker-address.jpg";
import gfgcPartnersSeatedUnderCanopy from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-partners-seated-under-canopy.jpg";
import gfgcSupportTeamSafetyVests from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-support-team-safety-vests.jpg";
import gfgcWomenLeadersGroup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-women-leaders-and-ginitiative-group.jpg";

const gGirlSdgColors: Record<string, string> = {
  "SDG 3": "bg-[#2f9b48]",
  "SDG 4": "bg-[#c7252d]",
  "SDG 5": "bg-[#f04b2f]",
  "SDG 8": "bg-[#8f1f5f]",
  "SDG 10": "bg-[#dd1685]",
  "SDG 17": "bg-[#1d5b89]",
};

const gGirlJourney = [
  {
    number: "01",
    title: "Gathering & awareness",
    body:
      "Girls from across communities came together for inspiration, awareness, and celebration during the International Day for the Girl Child 2025.",
    Icon: UsersRound,
  },
  {
    number: "02",
    title: "Health & dignity",
    body:
      "PAD Day support and menstrual-health education helped promote dignity, confidence, and wellbeing.",
    Icon: HeartPulse,
  },
  {
    number: "03",
    title: "Practical skills training",
    body:
      "Hands-on training in liquid soap and bleach production connected learning to hygiene, self-reliance, and enterprise thinking.",
    Icon: Droplets,
  },
  {
    number: "04",
    title: "Voice & confidence",
    body:
      "Girls listened, participated, asked questions, and experienced a platform that encouraged confidence and future readiness.",
    Icon: Sparkles,
  },
  {
    number: "05",
    title: "Partnership & support",
    body:
      "The project was strengthened through public leadership, G Initiative, WHO, and community support.",
    Icon: HeartHandshake,
  },
];

const gGirlGallery = [
  {
    src: gfgcGirlsLineupWide,
    alt: "Wide lineup of girls and officials at the project event",
    position: "object-[center_28%]",
    span: "lg:col-span-2",
  },
  {
    src: gfgcCollaborationTeamGroup,
    alt: "Collaboration team group at the project event",
    position: "object-[center_22%]",
    span: "",
  },
  {
    src: gfgcCommunityLeaderAddress,
    alt: "Community leader addressing the programme",
    position: "object-[center_12%]",
    span: "",
  },
  {
    src: gfgcCommunityStakeholdersGroup,
    alt: "Community stakeholders group during the programme",
    position: "object-[center_22%]",
    span: "lg:col-span-2",
  },
  {
    src: gfgcEventTeamWhiteShirts,
    alt: "Event team in white shirts during the programme",
    position: "object-[center_18%]",
    span: "",
  },
  {
    src: gfgcFacilitatorStandingAddress,
    alt: "Facilitator standing and addressing participants",
    position: "object-[center_10%]",
    span: "",
  },
  {
    src: gfgcMaleSpeakerAddress,
    alt: "Male speaker addressing the project audience",
    position: "object-[center_12%]",
    span: "",
  },
  {
    src: gfgcPartnersSeatedUnderCanopy,
    alt: "Partners seated under the canopy during the programme",
    position: "object-[center_18%]",
    span: "",
  },
  {
    src: gfgcSupportTeamSafetyVests,
    alt: "Support team in safety vests during the event",
    position: "object-[center_18%]",
    span: "",
  },
  {
    src: gfgcWomenLeadersGroup,
    alt: "Women leaders and G Initiative group",
    position: "object-[center_22%]",
    span: "lg:col-span-2",
  },
  {
    src: gfgcFemaleFacilitatorAddress,
    alt: "Female facilitator addressing girls during the programme",
    position: "object-[center_18%]",
    span: "",
  },
  {
    src: gfgcHealthWorkerSpeaker,
    alt: "Health worker speaking during the girl-child empowerment programme",
    position: "object-[center_16%]",
    span: "",
  },
  {
    src: gfgcSanitaryPadBoxes,
    alt: "Sanitary pad boxes provided during PAD Day support",
    position: "object-[center_14%]",
    span: "",
  },
  {
    src: gfgcLiquidSoapBleachDemo,
    alt: "Liquid soap and bleach practical skills demonstration",
    position: "object-[center_18%]",
    span: "",
  },
  {
    src: gfgcGirlChildSpeaker,
    alt: "Girl speaking during the empowerment programme",
    position: "object-[center_22%]",
    span: "",
  },
  {
    src: womenCommunityLineup,
    alt: "Girls, women, and community officials during the programme",
    position: "object-[center_26%]",
    span: "",
  },
  {
    src: gfgcGirlsCelebration,
    alt: "Girls celebrating during the programme",
    position: "object-[center_28%]",
    span: "",
  },
];

export function GForTheGirlChildProjectPage({
  project,
  parentInitiative,
  relatedProjects,
}: {
  project: ImpactProject;
  parentInitiative?: Initiative;
  relatedProjects: ImpactProject[];
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const relatedProject = relatedProjects[0];
  const selectedImage =
    selectedImageIndex === null ? null : gGirlGallery[selectedImageIndex];

  const showPreviousImage = () => {
    setSelectedImageIndex((current) => {
      if (current === null) return null;
      return current === 0 ? gGirlGallery.length - 1 : current - 1;
    });
  };

  const showNextImage = () => {
    setSelectedImageIndex((current) => {
      if (current === null) return null;
      return current === gGirlGallery.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#07120d] px-5 pt-32 pb-16 text-[#fff8e7] sm:px-8 lg:px-12 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(196,90,123,0.24),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(198,154,66,0.18),transparent_28%),linear-gradient(135deg,#07120d_0%,#0c2117_52%,#07120d_100%)]" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full border border-[#c69a42]/20" />
        <div className="absolute right-8 top-28 hidden text-[12rem] font-black leading-none text-white/[0.025] lg:block">
          G
        </div>

        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <a
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/68 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </a>

            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#f4b2c7]">
              Women & Girls Empowerment
            </p>

            <h1 className="max-w-3xl font-serif text-[clamp(3.4rem,7vw,7.6rem)] font-normal leading-[0.86] tracking-[-0.075em] text-[#fff8e7]">
              G–For the Girl Child Project
            </h1>

            <p className="mt-5 font-serif text-[clamp(1.35rem,2vw,2.1rem)] italic leading-tight text-[#f4b2c7]">
              International Day for the Girl Child 2025
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
              Empowering the Igbo girl-child through dignity, health support,
              practical skills, digital literacy, and self-reliance.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white/78">
                SDGs
              </span>

              {project.sdgs.map((sdg) => (
                <span
                  key={sdg}
                  className={[
                    "grid h-9 w-9 place-items-center rounded-full text-xs font-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)]",
                    gGirlSdgColors[sdg] ?? "bg-[#13271b]",
                  ].join(" ")}
                >
                  {sdg.replace("SDG ", "")}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#project-journey"
                className="inline-flex items-center gap-2 rounded-full bg-[#c69a42] px-6 py-3 text-sm font-black text-[#07120d] shadow-[0_18px_45px_rgba(198,154,66,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e3bb62]"
              >
                Explore the Project <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#project-gallery"
                className="inline-flex items-center gap-2 rounded-full border border-[#c69a42]/55 px-6 py-3 text-sm font-black text-[#fff8e7] transition hover:bg-white/10"
              >
                View Gallery <Camera className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[540px] lg:min-h-[620px]">
            <div className="absolute left-[3%] top-[5%] h-[78%] w-[78%] rotate-[-2deg] overflow-hidden rounded-[2rem] border border-[#c69a42]/55 bg-white/8 p-2 shadow-[0_32px_100px_rgba(0,0,0,0.38)] backdrop-blur">
              <img
                src={gfgcGirlsCelebration}
                alt="Girls seated at the G–For the Girl Child Project event"
                className="h-full w-full rounded-[1.55rem] object-cover object-[center_32%]"
              />
            </div>

            <div className="absolute right-0 top-[2%] w-[38%] rotate-[4deg] overflow-hidden rounded-[1.4rem] border border-white/45 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <img
                src={gfgcSanitaryPadBoxes}
                alt="PAD Day support boxes"
                className="h-44 w-full rounded-[1rem] object-cover object-[center_14%]"
              />
            </div>

            <div className="absolute bottom-[8%] right-[3%] w-[38%] rotate-[3deg] overflow-hidden rounded-[1.4rem] border border-white/45 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <img
                src={gfgcGirlChildSpeaker}
                alt="Girl speaking during the project event"
                className="h-48 w-full rounded-[1rem] object-cover object-[center_22%]"
              />
            </div>

            <div className="absolute bottom-[4%] left-[18%] w-[36%] rotate-[-4deg] overflow-hidden rounded-[1.25rem] border border-white/35 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <img
                src={gfgcCollaborationTeamGroup}
                alt="Collaboration team group at the project event"
                className="h-40 w-full rounded-[0.9rem] object-cover object-[center_22%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#fff8ef] px-5 pb-10 text-[#13271b] sm:px-8 lg:px-12">
        <div className="mx-auto -mt-8 grid max-w-[1440px] gap-0 overflow-hidden rounded-[1.6rem] border border-[#13271b]/10 bg-white shadow-[0_28px_90px_rgba(16,35,25,0.12)] md:grid-cols-2 lg:grid-cols-5">
          {[
            {
              label: "Project Type",
              value: "Girl-child empowerment",
              Icon: UsersRound,
            },
            {
              label: "Event",
              value: "International Day for the Girl Child 2025",
              Icon: CalendarDays,
            },
            {
              label: "Focus",
              value: "Health dignity, practical skills & empowerment",
              Icon: Target,
            },
            {
              label: "Partners",
              value: "Office of the Wife of the Governor, WHO, G Initiative",
              Icon: HeartHandshake,
            },
            {
              label: "Location",
              value: "Imo State, Nigeria",
              Icon: MapPin,
            },
          ].map((item) => {
            const Icon = item.Icon;

            return (
              <article
                key={item.label}
                className="border-b border-[#13271b]/10 p-5 last:border-b-0 md:even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#fde8df] text-[#c45a7b]">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mb-2 text-[0.64rem] font-black uppercase tracking-[0.14em] text-[#c45a7b]">
                  {item.label}
                </p>

                <p className="text-sm font-bold leading-6 text-[#13271b]">
                  {item.value}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="project-journey"
        className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#c45a7b]">
              Our journey
            </p>

            <h2 className="max-w-xl font-serif text-[clamp(2.5rem,4.4vw,5.2rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              A day of learning, dignity & empowerment.
            </h2>

            <div className="mt-10 space-y-7">
              {gGirlJourney.map((item) => {
                const Icon = item.Icon;

                return (
                  <article
                    key={item.number}
                    className="grid grid-cols-[3rem_1fr] gap-4"
                  >
                    <div className="relative flex flex-col items-center">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c45a7b] text-xs font-black text-white">
                        {item.number}
                      </span>

                      {item.number !== "05" && (
                        <span className="mt-3 h-full min-h-12 w-px bg-[#c45a7b]/35" />
                      )}
                    </div>

                    <div className="pb-2">
                      <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#fde8df] text-[#c45a7b]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-sm font-black uppercase tracking-[0.15em] text-[#13271b]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#526555]">
                        {item.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <img
              src={gfgcGirlsLineupWide}
              alt="Girls and officials gathered at the International Day for the Girl Child 2025 event"
              className="h-[250px] w-full rounded-[1.5rem] object-cover object-[center_28%] shadow-[0_22px_70px_rgba(16,35,25,0.12)]"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={gfgcSanitaryPadBoxes}
                alt="Sanitary pad boxes for PAD Day support"
                className="h-[220px] w-full rounded-[1.5rem] object-cover object-[center_14%] shadow-[0_22px_70px_rgba(16,35,25,0.1)]"
              />

              <img
                src={gfgcLiquidSoapBleachDemo}
                alt="Liquid soap and bleach production demonstration"
                className="h-[220px] w-full rounded-[1.5rem] object-cover object-[center_18%] shadow-[0_22px_70px_rgba(16,35,25,0.1)]"
              />
            </div>

            <img
              src={gfgcGirlChildSpeaker}
              alt="Girl speaking during the empowerment programme"
              className="h-[230px] w-full rounded-[1.5rem] object-cover object-[center_22%] shadow-[0_22px_70px_rgba(16,35,25,0.1)]"
            />

            <img
              src={gfgcWomenLeadersGroup}
              alt="Women leaders and partners at the project event"
              className="h-[230px] w-full rounded-[1.5rem] object-cover object-[center_22%] shadow-[0_22px_70px_rgba(16,35,25,0.1)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white shadow-[0_30px_90px_rgba(16,35,25,0.1)] lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Health. Dignity. Confidence.",
              body:
                "Sanitary pad support and health awareness helped promote menstrual dignity and wellbeing.",
              image: gfgcHealthWorkerSpeaker,
              position: "object-[center_16%]",
            },
            {
              number: "02",
              title: "Practical skills for self-reliance.",
              body:
                "Girls were exposed to liquid soap and bleach production as practical learning for hygiene and enterprise.",
              image: gfgcLiquidSoapBleachDemo,
              position: "object-[center_18%]",
            },
            {
              number: "03",
              title: "Voices of strength. Dreams of more.",
              body:
                "The project created space for girls to listen, speak, participate, and see a future with more possibilities.",
              image: gfgcGirlChildSpeaker,
              position: "object-[center_22%]",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="grid border-b border-[#13271b]/10 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`h-[260px] w-full object-cover ${item.position} lg:order-2`}
              />

              <div className="p-7 lg:order-1">
                <p className="mb-4 font-serif text-3xl text-[#c45a7b]">
                  {item.number}
                </p>

                <h3 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-[0.9] tracking-[-0.055em] text-[#13271b]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526555]">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-[2rem] bg-[#07120d] p-5 text-[#fff8e7] shadow-[0_30px_90px_rgba(16,35,25,0.18)] sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#f4b2c7]">
              Project in motion
            </p>

            <h2 className="max-w-xl font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              Watch the project story.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/68">
              Highlights from the International Day for the Girl Child 2025 —
              PAD Day support, practical skills training, and empowerment in
              action.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
            <video
              src={gfgcPadDaySkillsVideo}
              poster={gfgcHeroAudience}
              controls
              playsInline
              className="h-[420px] w-full object-cover object-[center_32%]"
            />
          </div>
        </div>
      </section>

      <section
        id="project-gallery"
        className="bg-[#fff8ef] px-5 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pb-24"
      >
        <div className="mx-auto max-w-[1440px] rounded-[2rem] border border-[#13271b]/10 bg-white p-5 shadow-[0_26px_80px_rgba(16,35,25,0.09)] sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#c45a7b]">
                Photo gallery
              </p>

              <h2 className="font-serif text-[clamp(2.2rem,4vw,4.6rem)] leading-[0.9] tracking-[-0.055em]">
                Captured moments that tell our story.
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {gGirlGallery.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setSelectedImageIndex(index)}
                className={[
                  "group overflow-hidden rounded-[1rem] bg-[#07120d] text-left shadow-[0_18px_55px_rgba(16,35,25,0.08)]",
                  image.span,
                ].join(" ")}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={[
                    "h-44 w-full object-cover transition duration-700 group-hover:scale-105",
                    image.position,
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#13271b]/10 bg-white p-7 shadow-[0_26px_80px_rgba(16,35,25,0.08)]">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#c45a7b]">
              Our impact
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Health & dignity",
                  body: "Improved menstrual-health confidence.",
                  Icon: HeartPulse,
                },
                {
                  title: "Skills & empowerment",
                  body: "Practical skills for self-reliance.",
                  Icon: GraduationCap,
                },
                {
                  title: "Opportunities for all",
                  body: "Future-ready girls and leaders.",
                  Icon: Target,
                },
                {
                  title: "Stronger communities",
                  body: "A ripple of positive change.",
                  Icon: UsersRound,
                },
              ].map((item) => {
                const Icon = item.Icon;

                return (
                  <article
                    key={item.title}
                    className="border-l border-[#13271b]/10 pl-4"
                  >
                    <Icon className="mb-3 h-7 w-7 text-[#c45a7b]" />

                    <h3 className="text-base font-black text-[#13271b]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#526555]">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {parentInitiative && (
            <div className="relative overflow-hidden rounded-[2rem] bg-[#c45a7b] p-7 text-white shadow-[0_26px_80px_rgba(196,90,123,0.16)]">
              <img
                src={gfgcGirlsCelebration}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-[center_28%] opacity-28"
              />

              <div className="relative">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/78">
                  Connected initiative
                </p>

                <h2 className="max-w-xl font-serif text-[clamp(2.2rem,4vw,4.6rem)] leading-[0.9] tracking-[-0.055em]">
                  {parentInitiative.title}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/82">
                  This project sits under the wider women and girl-child
                  development work of G Initiative.
                </p>

                <a
                  href={`/initiatives/${parentInitiative.slug}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c69a42] px-5 py-3 text-sm font-black text-[#07120d]"
                >
                  View Initiative <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 pb-20 text-[#13271b] sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-[#07120d] p-7 text-[#fff8e7] shadow-[0_26px_80px_rgba(16,35,25,0.18)] sm:p-9">
            <p className="font-serif text-[clamp(2.2rem,4vw,4.8rem)] italic leading-[1] tracking-[-0.045em] text-[#c69a42]">
              Together, we empower more girls to dream, lead, and succeed.
            </p>
          </div>

          {relatedProject && (
            <a
              href={`/projects/${relatedProject.slug}`}
              className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white shadow-[0_26px_80px_rgba(16,35,25,0.08)]"
            >
              <img
                src={relatedProject.image}
                alt={relatedProject.title}
                className="h-full min-h-[170px] w-full object-cover object-[center_30%]"
              />

              <div className="p-6">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#c45a7b]">
                  Related project
                </p>

                <h3 className="font-serif text-3xl leading-[0.95] tracking-[-0.05em] text-[#13271b]">
                  {relatedProject.title}
                </h3>

                <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#c45a7b]">
                  View Project{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </p>
              </div>
            </a>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#07120d]/90 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:bg-white/18"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={showPreviousImage}
            className="absolute left-5 top-1/2 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:bg-white/18 sm:grid"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            onClick={showNextImage}
            className="absolute right-5 top-1/2 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:bg-white/18 sm:grid"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="flex max-h-[88vh] max-w-[92vw] flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            />

            <div className="mt-4 flex items-center gap-3 sm:hidden">
              <button
                onClick={showPreviousImage}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-2xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={showNextImage}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-2xl"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}