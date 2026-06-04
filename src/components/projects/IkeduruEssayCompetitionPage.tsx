import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Handshake,
  Lightbulb,
  PenLine,
  Play,
  School,
  Sparkles,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { Initiative } from "@/data/initiatives";
import type { ImpactProject } from "@/data/projects";

import ikeduruStudentWritingCloseup from "@/assets/essay/ikeduru-essay-student-writing-closeup.jpeg";
import ikeduruClassroomWide from "@/assets/essay/ikeduru-essay-classroom-wide.jpeg";
import ikeduruClassroomAlt from "@/assets/essay/ikeduru-essay-classroom-alt.jpeg";
import ikeduruOfficialBanner from "@/assets/essay/ikeduru-essay-official-banner.jpeg";
import ikeduruSoutheastPoster from "@/assets/essay/ikeduru-essay-southeast-poster.jpeg";
import ikeduruExerciseBookCover from "@/assets/essay/ikeduru-essay-exercise-book-cover.jpeg";
import ikeduruProjectTeamArrival from "@/assets/essay/ikeduru-essay-project-team-arrival.jpeg";
import ikeduruStudentOfficials from "@/assets/essay/ikeduru-essay-student-officials.jpeg";
import ikeduruSchoolGathering from "@/assets/essay/ikeduru-essay-school-gathering.jpeg";
import ikeduruPrizePresentationOne from "@/assets/essay/ikeduru-essay-prize-presentation-01.jpeg";
import ikeduruPrizePresentationTwo from "@/assets/essay/ikeduru-essay-prize-presentation-02.jpeg";

import gProjectsLogo from "@/assets/essay/logos/g-projects-logo.png";
import aspireLogo from "@/assets/essay/logos/aspire-logo.png";
import workWhileLogo from "@/assets/essay/logos/work-while-in-school-ventures-logo.png";
import imoOfficeLogo from "@/assets/essay/logos/imo-youth-sports-office-logo.png";

type IconCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
  tone?: string;
};

type ProjectImage = {
  src: string;
  alt: string;
  label: string;
  position: string;
  span?: string;
  imageClassName?: string;
};

const quickFacts = [
  {
    label: "Date",
    value: "November 2021",
    sub: "28 Nov",
    Icon: CalendarDays,
  },
  {
    label: "Topic",
    value: "Sustainable Development",
    sub: "Igboland / South-Eastern Nigeria",
    Icon: BookOpen,
  },
  {
    label: "Prize Pool",
    value: "₦500,000",
    sub: "Award support",
    Icon: Trophy,
  },
  {
    label: "Participants",
    value: "Senior Secondary",
    sub: "School students",
    Icon: UsersRound,
  },
];

const projectPillars: IconCard[] = [
  {
    title: "Education",
    body: "Promoting learning, writing, and research among secondary school students.",
    Icon: GraduationCap,
    tone: "bg-[#0b7a3a]",
  },
  {
    title: "Leadership",
    body: "Encouraging students to think about development, responsibility, and community progress.",
    Icon: Sparkles,
    tone: "bg-[#f97316]",
  },
  {
    title: "Critical Thinking",
    body: "Using essay writing to strengthen analysis, expression, and problem-solving.",
    Icon: PenLine,
    tone: "bg-[#0f70b7]",
  },
  {
    title: "SDG Awareness",
    body: "Introducing young minds to sustainable development as a practical community roadmap.",
    Icon: Lightbulb,
    tone: "bg-[#7c3aed]",
  },
];

const actionGallery: ProjectImage[] = [
  {
    src: ikeduruClassroomWide,
    alt: "Students seated in a hall during the Ikeduru Essay Competition",
    label: "Students writing",
    position: "object-[center_48%]",
    span: "lg:col-span-2",
  },
  {
    src: ikeduruStudentWritingCloseup,
    alt: "Student writing during the Ikeduru Essay Competition",
    label: "Essay in progress",
    position: "object-[center_42%]",
    span: "",
  },
  {
    src: ikeduruClassroomAlt,
    alt: "Students writing essays inside the school hall",
    label: "Competition hall",
    position: "object-[center_45%]",
    span: "",
  },
  {
    src: ikeduruProjectTeamArrival,
    alt: "G Projects representatives at the school grounds",
    label: "Project team",
    position: "object-[center_34%]",
    span: "",
  },
  {
    src: ikeduruOfficialBanner,
    alt: "Ikeduru Senior Secondary School Essay Writing Competition 2021 official banner",
    label: "Official Competition Banner",
    position: "object-center",
    span: "lg:col-span-3",
    imageClassName: "h-72 sm:h-80",
  },
  {
    src: ikeduruSchoolGathering,
    alt: "Students and project representatives gathered at the school",
    label: "School community",
    position: "object-[center_32%]",
    span: "lg:col-span-4",
    imageClassName: "h-72 sm:h-80",
  },
];

const recognitionGallery: ProjectImage[] = [
  {
    src: ikeduruPrizePresentationOne,
    alt: "Student prize presentation at the essay competition",
    label: "Recognition moment",
    position: "object-[center_35%]",
  },
  {
    src: ikeduruPrizePresentationTwo,
    alt: "Award support presented during the Ikeduru Essay Competition",
    label: "Prize support",
    position: "object-[center_34%]",
  },
  {
    src: ikeduruStudentOfficials,
    alt: "Recognized student with project officials",
    label: "Student recognition",
    position: "object-[center_35%]",
  },
];

const sdgCards = [
  {
    code: "4",
    title: "Quality Education",
    body: "Promoting inclusive learning, research, writing, and academic confidence.",
    className: "bg-[#c5192d]",
    Icon: BookOpen,
  },
  {
    code: "8",
    title: "Decent Work & Economic Growth",
    body: "Preparing students to think about future skills, work, and enterprise.",
    className: "bg-[#a21942]",
    Icon: Trophy,
  },
  {
    code: "11",
    title: "Sustainable Cities & Communities",
    body: "Encouraging ideas for sustainable communities across Igboland and the South-East.",
    className: "bg-[#fd9d24]",
    Icon: School,
  },
  {
    code: "17",
    title: "Partnerships for the Goals",
    body: "Bringing schools, public leadership, and private supporters into one education impact story.",
    className: "bg-[#19486a]",
    Icon: Handshake,
  },
];

const supporterCards = [
  {
    logo: gProjectsLogo,
    alt: "G Projects logo",
    logoClassName: "max-h-24 max-w-[88%]",
  },
  {
    logo: aspireLogo,
    alt: "Aspire logo",
    logoClassName: "max-h-24 max-w-[88%]",
  },
  {
    logo: workWhileLogo,
    alt: "Work While in School Ventures Ltd logo",
    logoClassName: "max-h-24 max-w-[88%]",
  },
  {
    logo: imoOfficeLogo,
    alt: "Office of the Special Assistant on Youth Development and Sports, Ikeduru LGA",
    logoClassName: "max-h-32 max-w-[98%] scale-[1.15]",
  },
];

export function IkeduruEssayCompetitionPage({
  project,
  parentInitiative,
  relatedProjects,
}: {
  project: ImpactProject;
  parentInitiative?: Initiative;
  relatedProjects: ImpactProject[];
}) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const relatedProject = relatedProjects[0];

  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-[#07120d] px-5 pt-36 pb-24 text-white sm:px-8 lg:px-12 lg:pt-44">
        <img
          src={ikeduruStudentWritingCloseup}
          alt="Student writing during the Ikeduru Essay Competition"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,10,0.98)_0%,rgba(3,18,10,0.9)_38%,rgba(3,18,10,0.58)_70%,rgba(3,18,10,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(11,122,58,0.28),transparent_34%),linear-gradient(180deg,rgba(3,18,10,0.12)_0%,rgba(3,18,10,0.2)_58%,rgba(3,18,10,0.46)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,transparent,#fbfdf9)]" />
        <div className="absolute -bottom-40 left-[-5%] h-72 w-[120%] -rotate-2 rounded-[50%] bg-[#fbfdf9]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="max-w-[760px]">
            <div className="mb-7 inline-flex rounded-full bg-[#0c7a3d] px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(4,64,31,0.34)]">
              Education & Leadership Empowerment
            </div>

            <h1 className="max-w-3xl text-[clamp(3.6rem,7vw,7.6rem)] font-black leading-[0.88] tracking-[-0.075em] text-white drop-shadow-[0_18px_35px_rgba(0,0,0,0.28)]">
              Ikeduru Essay Competition
            </h1>

            <p className="mt-5 text-[clamp(1.15rem,2vw,1.95rem)] font-black leading-tight text-[#def76f] drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
              Senior Secondary School Essay Writing Competition 2021
            </p>

            <p className="mt-6 max-w-[600px] text-base font-medium leading-8 text-white/90 sm:text-lg">
              Inspiring young minds to think, write, and propose solutions for
              sustainable development in Igboland and South-Eastern Nigeria.
            </p>

            <div className="mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map(({ label, value, sub, Icon }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-white/20 bg-[#052315]/82 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-md"
                >
                  <Icon className="mb-3 h-6 w-6 text-[#def76f]" />
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/64">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-black text-white">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/72">{sub}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfdf9] px-5 pt-8 pb-16 text-[#16251c] sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
              About the Project
            </p>
            <h2 className="max-w-2xl text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
              Raising young thinkers through writing, leadership & SDG awareness.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#3f5146]">
              The Ikeduru Essay Writing Competition challenged senior secondary
              school students to research, think critically, and write original
              essays on sustainable development. The project created a platform
              for students to connect classroom learning with the future of their
              communities.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#3f5146]">
              Through the theme of sustainable development in Igboland and
              South-Eastern Nigeria, students were encouraged to see themselves
              as future leaders, problem-solvers, and contributors to community
              progress.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setSelectedImage({
                src: ikeduruClassroomWide,
                alt: "Students seated in a hall during the Ikeduru Essay Competition",
                label: "Students writing",
                position: "object-[center_48%]",
              })
            }
            className="group overflow-hidden rounded-[1.6rem] bg-white p-2 text-left shadow-[0_25px_80px_rgba(15,45,25,0.12)]"
          >
            <img
              src={ikeduruClassroomWide}
              alt="Students seated in a hall during the Ikeduru Essay Competition"
              className="h-[360px] w-full rounded-[1.2rem] object-cover object-[center_48%] transition duration-700 group-hover:scale-105 lg:h-[430px]"
            />
          </button>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1440px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectPillars.map(({ title, body, Icon, tone }) => (
            <article
              key={title}
              className="rounded-[1.4rem] border border-[#dce7df] bg-white p-6 text-center shadow-[0_20px_60px_rgba(15,45,25,0.06)]"
            >
              <div
                className={`${tone} mx-auto grid h-16 w-16 place-items-center rounded-full text-white shadow-[0_18px_40px_rgba(15,45,25,0.18)]`}
              >
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-lg font-black text-[#17251d]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#526258]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
                Essay in Action
              </p>
              <h2 className="max-w-4xl text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
                Students thinking, writing, and presenting ideas for the future.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actionGallery.map((image) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(image)}
                className={`${image.span} group relative overflow-hidden rounded-[1.2rem] bg-[#07120d] text-left shadow-[0_22px_65px_rgba(15,45,25,0.12)]`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={[
                    image.imageClassName ?? "h-72",
                    "w-full object-cover transition duration-700 group-hover:scale-105",
                    image.position,
                  ].join(" ")}
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(5,24,14,0.86))] p-5 pt-16">
                  <span className="inline-flex max-w-full whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#0b3a1f]">
                    {image.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfdf9] px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
              Recognition & Encouragement
            </p>
            <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
              Rewarding effort and encouraging excellence.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#3f5146]">
              Outstanding students were recognized and supported as a way of
              encouraging academic excellence, confidence, and continued growth.
            </p>

            <div className="mt-8 rounded-[1.4rem] border border-[#dce7df] bg-white p-6 shadow-[0_20px_60px_rgba(15,45,25,0.06)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0a7a3b]">
                Prize pool
              </p>
              <p className="mt-3 text-5xl font-black tracking-[-0.06em] text-[#17251d]">
                ₦500,000
              </p>
              <p className="mt-3 text-sm leading-7 text-[#526258]">
                Financial recognition and award support for outstanding essays.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recognitionGallery.map((image, index) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(image)}
                className={[
                  "group overflow-hidden rounded-[1.5rem] bg-[#07120d] text-left shadow-[0_24px_70px_rgba(15,45,25,0.12)]",
                  index === 2 ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-[330px] w-full object-cover transition duration-700 group-hover:scale-105 ${image.position}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-[1.8rem] bg-[#07120d] p-5 text-white shadow-[0_30px_90px_rgba(15,45,25,0.2)] sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#def76f]">
              Project Video
            </p>
            <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em]">
              Watch the Essay Competition Story.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              A polished video highlight section is reserved here for the event
              footage. The block is ready for the project video when it is added.
            </p>
          </div>

          <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem] bg-black">
            <img
              src={ikeduruClassroomWide}
              alt="Students writing during the Ikeduru Essay Competition video placeholder"
              className="absolute inset-0 h-full w-full object-cover object-[center_48%] opacity-55"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,18,13,0.72),rgba(7,18,13,0.28),rgba(11,122,58,0.28))]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-white/30 bg-white/14 text-white shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                <Play className="ml-1 h-10 w-10 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0b3a1f]">
              Video highlight coming soon
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
              Aligned Sustainable Development Goals
            </p>
            <h2 className="max-w-xl text-[clamp(2.4rem,4vw,4.7rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
              A school project connected to a bigger development roadmap.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sdgCards.map(({ code, title, body, className, Icon }) => (
              <article
                key={code}
                className={`${className} min-h-[230px] rounded-lg p-5 text-white shadow-[0_20px_55px_rgba(0,0,0,0.12)]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-4xl font-black leading-none">{code}</span>
                  <Icon className="h-8 w-8" />
                </div>
                <p className="mt-5 text-sm font-black uppercase leading-5">
                  {title}
                </p>
                <p className="mt-4 text-xs leading-6 text-white/88">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfdf9] px-5 py-20 text-[#16251c] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
            Partners & Supporters
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supporterCards.map((supporter) => (
              <article
                key={supporter.alt}
                className="grid min-h-[230px] place-items-center overflow-visible rounded-[1.6rem] border border-[#dce7df] bg-white p-7 text-center shadow-[0_24px_75px_rgba(15,45,25,0.08)]"
              >
                <div className="grid min-h-[145px] w-full place-items-center overflow-visible rounded-[1.2rem] bg-[#f8fbf6] p-4">
                  <img
                    src={supporter.logo}
                    alt={supporter.alt}
                    className={`${supporter.logoClassName} object-contain`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {parentInitiative && (
        <section className="bg-white px-5 pb-20 text-[#16251c] sm:px-8 lg:px-12 lg:pb-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#eaf4ec] p-8 shadow-[0_24px_75px_rgba(15,45,25,0.1)] sm:p-10 lg:p-12">
              <img
                src={ikeduruExerciseBookCover}
                alt="G Projects exercise book cover with Sustainable Development Goals"
                className="absolute inset-y-0 right-0 hidden h-full w-[44%] object-cover object-center lg:block"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#eaf4ec_0%,#eaf4ec_55%,rgba(234,244,236,0.78)_76%,rgba(234,244,236,0.18)_100%)]" />

              <div className="relative max-w-3xl">
                <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#0a7a3b]">
                  Part of a Greater Education Pathway
                </p>
                <h2 className="text-[clamp(2.2rem,3.4vw,4.2rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#17251d]">
                  Connected to the {parentInitiative.title}
                </h2>
                <p className="mt-6 text-base leading-8 text-[#3f5146]">
                  The essay competition sits at the early foundation of G
                  Initiative&apos;s education pathway: helping students build
                  literacy, confidence, leadership, and development awareness
                  before advancing into deeper skills and digital-opportunity
                  programmes.
                </p>
                <a
                  href={`/initiatives/${parentInitiative.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0b7a3a] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#096b33]"
                >
                  Explore Initiative <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {relatedProject && (
        <section className="bg-[#07120d] px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#def76f]">
                Next Project
              </p>
              <h2 className="max-w-xl text-[clamp(2.2rem,4vw,4.6rem)] font-black leading-[1.02] tracking-[-0.055em]">
                {relatedProject.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                {relatedProject.description}
              </p>
              <a
                href={`/projects/${relatedProject.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0b7a3a] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#096b33]"
              >
                View Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: ikeduruSoutheastPoster,
                  alt: "Ikeduru essay competition poster",
                  label: "Project poster",
                  position: "object-center",
                })
              }
              className="group overflow-hidden rounded-[1.5rem] bg-[#07120d] text-left shadow-[0_24px_75px_rgba(0,0,0,0.24)]"
            >
              <img
                src={ikeduruSoutheastPoster}
                alt="Ikeduru essay competition poster"
                className="h-[420px] w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
            </button>
          </div>
        </section>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#07120d]/90 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:bg-white/18"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative max-h-[88vh] max-w-[92vw]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            />

            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#13271b] shadow-[0_18px_55px_rgba(0,0,0,0.22)] sm:text-sm">
              {selectedImage.label}
            </div>
          </div>
        </div>
      )}
    </>
  );
}