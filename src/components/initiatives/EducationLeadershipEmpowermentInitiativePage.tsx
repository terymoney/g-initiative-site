import {
  ArrowRight,
  BookOpen,
  Brain,
  FileCheck2,
  GraduationCap,
  Handshake,
  PenLine,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import type { Initiative } from "@/data/initiatives";

import essayStudentWriting from "@/assets/essay/ikeduru-essay-student-writing-closeup.jpeg";
import essayClassroomWide from "@/assets/essay/ikeduru-essay-classroom-wide.jpeg";
import essayExerciseBookCover from "@/assets/essay/ikeduru-essay-exercise-book-cover.jpeg";
import essayAwardPresentation from "@/assets/essay/ikeduru-essay-prize-presentation-02.jpeg";
import essayPrizePresentation from "@/assets/essay/ikeduru-essay-prize-presentation-01.jpeg";
import essayStudentOfficials from "@/assets/essay/ikeduru-essay-student-officials.jpeg";
import essaySchoolGathering from "@/assets/essay/ikeduru-essay-school-gathering.jpeg";

import aspireStageSpeakers from "@/assets/aspire/aspire-masterclass-stage-speakers.jpg";
import aspireAudienceWide from "@/assets/aspire/aspire-masterclass-audience-wide.jpg";
import aspireGroupPresentation from "@/assets/aspire/aspire-masterclass-group-presentation.jpg";
import aspireRecognitionOne from "@/assets/aspire/aspire-masterclass-participant-recognition-01.jpg";

type PathwayStep = {
  label: string;
  title: string;
  project: string;
  body: string;
  Icon: LucideIcon;
};

type ImpactCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

type StoryCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

type InterventionCard = {
  title: string;
  image: string;
  description: string;
  href: string;
  cta: string;
};

type MomentImage = {
  image: string;
  alt: string;
  position?: string;
};

const pathwaySteps: PathwayStep[] = [
  {
    label: "01. Think",
    title: "Ikeduru Essay Competition",
    project: "Critical thinking through writing",
    body: "Students are challenged to research, reason, write, and express ideas around sustainable development.",
    Icon: Brain,
  },
  {
    label: "02. Access",
    title: "Exam & Form Support",
    project: "First School Leaving & WAEC forms",
    body: "G Initiative reduces financial pressure by supporting examination forms for students in Ikeduru.",
    Icon: FileCheck2,
  },
  {
    label: "03. Lead",
    title: "Aspire Leadership Master Class",
    project: "Training, seminar, and mentorship",
    body: "Young people are exposed to values, confidence, mentorship, and purpose-driven leadership.",
    Icon: UsersRound,
  },
  {
    label: "04. Build",
    title: "Future Opportunity",
    project: "Education into impact",
    body: "Learning becomes a bridge to skills, enterprise, community leadership, and future readiness.",
    Icon: Star,
  },
];

const impactCards: ImpactCard[] = [
  {
    title: "Stronger Minds",
    body: "Young people develop knowledge, critical thinking, confidence, and the courage to express ideas.",
    Icon: Brain,
  },
  {
    title: "Fewer Barriers",
    body: "Support for examination forms helps keep students moving through important education milestones.",
    Icon: ShieldCheck,
  },
  {
    title: "Better Leaders",
    body: "Leadership training shapes values, purpose, discipline, confidence, and service.",
    Icon: Sparkles,
  },
  {
    title: "Greater Impact",
    body: "Communities benefit when young people are prepared to think, lead, work, and contribute.",
    Icon: Target,
  },
];

const storyCards: StoryCard[] = [
  {
    title: "It begins with the mind.",
    body: "Through the Ikeduru Essay Competition, G Initiative gives students room to think deeply, research, write, and connect classroom learning with real community issues.",
    Icon: PenLine,
  },
  {
    title: "Then access keeps the journey open.",
    body: "By supporting First School Leaving and WAEC forms for students in Ikeduru, the initiative helps remove one of the quiet barriers that can interrupt a child’s education.",
    Icon: FileCheck2,
  },
  {
    title: "Leadership turns learning into capacity.",
    body: "Aspire Leadership Master Class extends the work beyond academics by exposing young people to mentorship, confidence-building, values, and purpose.",
    Icon: GraduationCap,
  },
];

const interventionCards: InterventionCard[] = [
  {
    title: "Ikeduru Essay Competition",
    image: essayClassroomWide,
    description:
      "Sponsored Ikeduru Essay Competition tagged “Sustainable Development in Igboland,” encouraging research, writing, creativity, and development awareness.",
    href: "/projects/ikeduru-essay-competition",
    cta: "View Project",
  },
  {
    title: "Exam & Form Support",
    image: essayExerciseBookCover,
    description:
      "Sponsored First School Leaving and WAEC forms for 20 school students in Ikeduru, helping candidates continue their academic journey.",
    href: "/projects/ikeduru-essay-competition",
    cta: "Learn More Under Ikeduru",
  },
  {
    title: "Aspire Leadership Master Class",
    image: aspireAudienceWide,
    description:
      "A two-week leadership training and seminar organized in partnership with Iwanyanwu Foundation to build confidence, values, and youth leadership capacity.",
    href: "/projects/aspire-leadership-master-class",
    cta: "View Project",
  },
];

const sdgCards = [
  {
    code: "4",
    title: "Quality Education",
    body: "Promoting inclusive and equitable quality education and lifelong learning.",
    className: "bg-[#c5192d]",
    Icon: BookOpen,
  },
  {
    code: "8",
    title: "Decent Work & Economic Growth",
    body: "Building skills and leadership capacity for participation, work, and growth.",
    className: "bg-[#a21942]",
    Icon: Rocket,
  },
  {
    code: "17",
    title: "Partnerships for the Goals",
    body: "Working with partners to strengthen impact and create lasting change.",
    className: "bg-[#19486a]",
    Icon: Handshake,
  },
];

const mediaMoments: MomentImage[] = [
  {
    image: essayPrizePresentation,
    alt: "Ikeduru Essay Competition prize presentation",
  },
  {
    image: essayStudentOfficials,
    alt: "Students and officials at Ikeduru Essay Competition",
  },
  {
    image: aspireGroupPresentation,
    alt: "Aspire Leadership Master Class group presentation",
  },
  {
    image: aspireRecognitionOne,
    alt: "Aspire Leadership Master Class recognition moment",
    position: "object-[center_18%]",
  },
];

export function EducationLeadershipEmpowermentInitiativePage({
  initiative,
}: {
  initiative: Initiative;
}) {
  const [selectedMoment, setSelectedMoment] = useState<MomentImage | null>(null);

  return (
    <>
      <style>
        {`
          @keyframes eduPathFlow {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              transform: translateX(320%);
              opacity: 0;
            }
          }

          @keyframes eduNodeGlow {
            0%, 100% {
              box-shadow: 0 16px 45px rgba(11, 58, 31, 0.16);
            }
            50% {
              box-shadow: 0 18px 58px rgba(198, 154, 66, 0.34);
            }
          }

          .edu-path-track {
            position: absolute;
            left: 9%;
            right: 9%;
            top: 4rem;
            height: 2px;
            background: linear-gradient(90deg, rgba(198,154,66,0.05), rgba(198,154,66,0.65), rgba(198,154,66,0.05));
            overflow: hidden;
          }

          .edu-path-track::after {
            content: "";
            position: absolute;
            top: -2px;
            left: 0;
            height: 6px;
            width: 30%;
            background: linear-gradient(90deg, transparent, rgba(198,154,66,1), transparent);
            animation: eduPathFlow 4.2s ease-in-out infinite;
          }

          .edu-node {
            animation: eduNodeGlow 3.8s ease-in-out infinite;
            animation-delay: var(--delay);
          }

          @media (max-width: 1023px) {
            .edu-path-track {
              display: none;
            }

            .edu-node {
              animation: none;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden bg-[#fff8ef] px-5 pt-32 pb-14 text-[#13271b] sm:px-8 lg:px-12 lg:pt-[8.5rem] lg:pb-20">
        <div className="absolute left-[-16%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#d9b66f]/20 blur-3xl" />
        <div className="absolute right-[-12%] top-[12%] h-[460px] w-[460px] rounded-full bg-[#0b7a3a]/12 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#b17819]">
              {initiative.title}
            </p>

            <h1 className="max-w-3xl font-serif text-[clamp(3.1rem,5.5vw,6.4rem)] font-normal leading-[0.9] tracking-[-0.07em] text-[#102319]">
              We connect education, access, mentorship, and leadership to build{" "}
              <span className="text-[#b17819]">a stronger future.</span>
            </h1>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group h-[230px] overflow-hidden rounded-[1.5rem] bg-[#07120d] shadow-[0_25px_75px_rgba(16,35,25,0.14)] sm:col-span-2 lg:h-[260px]">
              <img
                src={aspireStageSpeakers}
                alt="Aspire Leadership Master Class stage session"
                className="h-full w-full object-cover object-[center_38%] transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group h-[190px] overflow-hidden rounded-[1.5rem] bg-[#07120d] shadow-[0_25px_75px_rgba(16,35,25,0.12)] lg:h-[210px]">
              <img
                src={essayStudentWriting}
                alt="Student writing during Ikeduru Essay Competition"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group h-[190px] overflow-hidden rounded-[1.5rem] bg-[#07120d] shadow-[0_25px_75px_rgba(16,35,25,0.12)] lg:h-[210px]">
              <img
                src={aspireAudienceWide}
                alt="Audience during Aspire Leadership Master Class"
                className="h-full w-full object-cover object-[center_45%] transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              The Education Pathway
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              How the dots connect
            </h2>
            <div className="mx-auto mt-5 h-px w-20 bg-[#c69a42]" />
          </div>

          <div className="relative">
            <div className="edu-path-track hidden lg:block" />

            <div className="grid gap-7 lg:grid-cols-4">
              {pathwaySteps.map(({ label, title, project, body, Icon }, index) => (
                <article
                  key={title}
                  className="relative rounded-[1.5rem] border border-[#13271b]/10 bg-white/60 p-6 text-center shadow-[0_18px_55px_rgba(16,35,25,0.06)]"
                >
                  <div
                    className="edu-node relative z-10 mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border border-[#c69a42]/55 bg-[#0b3a1f] text-[#f2d184]"
                    style={{ "--delay": `${index * 0.35}s` } as CSSProperties}
                  >
                    <Icon className="h-9 w-9" />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17819]">
                    {label}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl leading-7 text-[#13271b]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm font-black text-[#0b3a1f]">
                    {project}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#59695f]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              The Story Behind the Pathway
            </p>
            <h2 className="max-w-2xl font-serif text-[clamp(2.6rem,4.8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.06em]">
              From ideas, to access, to leadership.
            </h2>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-[#07120d] shadow-[0_24px_75px_rgba(16,35,25,0.14)]">
              <img
                src={essayAwardPresentation}
                alt="G Initiative representative presenting support to a student"
                className="h-[420px] w-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {storyCards.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="grid gap-5 rounded-[1.5rem] border border-[#13271b]/10 bg-[#fff8ef] p-6 shadow-[0_18px_55px_rgba(16,35,25,0.06)] sm:grid-cols-[auto_1fr]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0b3a1f] text-[#f2d184]">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl leading-7 text-[#13271b]">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[#536458]">
                    {body}
                  </p>
                </div>
              </article>
            ))}

            <article className="rounded-[1.5rem] bg-[#07120d] p-7 text-white shadow-[0_24px_75px_rgba(7,18,13,0.16)]">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f2d184]">
                How the dots connect
              </p>
              <p className="mt-4 max-w-4xl text-lg leading-9 text-white/78">
                Together, these projects show a deliberate G Initiative pathway:
                essay writing builds the mind, exam support keeps the door open,
                mentorship shapes confidence, and leadership prepares young people
                for the future.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="education-projects"
        className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Key Interventions
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Projects under this initiative
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {interventionCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[1.45rem] border border-[#13271b]/10 bg-white shadow-[0_22px_70px_rgba(16,35,25,0.08)] transition hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden bg-[#07120d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-3xl leading-8 text-[#13271b]">
                    {item.title}
                  </h3>
                  <p className="mt-4 min-h-[6.5rem] text-sm leading-7 text-[#536458]">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0b3a1f]">
                    {item.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[1.7rem] bg-[#071f14] px-6 py-10 shadow-[0_25px_85px_rgba(7,18,13,0.14)] sm:px-8 lg:px-12">
          <p className="mb-8 text-center text-xs font-black uppercase tracking-[0.24em] text-[#f2d184]">
            Our Collective Impact
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impactCards.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="border-white/10 lg:border-r lg:pr-8 last:border-r-0"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-full border border-[#c69a42]/50 text-[#f2d184]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Real Project Moments
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,4.4vw,4.8rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Education, access and leadership in action
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mediaMoments.map((item) => (
              <button
                type="button"
                key={item.alt}
                onClick={() => setSelectedMoment(item)}
                className="group h-56 overflow-hidden rounded-[1.2rem] bg-[#07120d] text-left shadow-[0_18px_55px_rgba(16,35,25,0.1)]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
                    item.position ?? "object-center"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setSelectedMoment({
                image: essaySchoolGathering,
                alt: "Students gathered for education support and community engagement",
              })
            }
            className="mt-5 block h-64 w-full overflow-hidden rounded-[1.5rem] bg-[#07120d] text-left shadow-[0_18px_55px_rgba(16,35,25,0.1)] lg:h-80"
          >
            <img
              src={essaySchoolGathering}
              alt="Students gathered for education support and community engagement"
              className="h-full w-full object-cover object-[center_42%] transition duration-700 hover:scale-105"
            />
          </button>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Aligned Sustainable Development Goals
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,4.2vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Education today. Leadership tomorrow. Impact for generations.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {sdgCards.map(({ code, title, body, className, Icon }) => (
              <article
                key={code}
                className={`${className} min-h-[230px] rounded-[1rem] p-6 text-white shadow-[0_20px_55px_rgba(0,0,0,0.12)]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-5xl font-black leading-none">
                    {code}
                  </span>
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="mt-6 max-w-[12rem] text-lg font-black uppercase leading-5">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/88">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="absolute left-[-8%] bottom-[-60%] h-[360px] w-[360px] rounded-full bg-[#c69a42]/12 blur-3xl" />
        <div className="absolute right-[-8%] top-[-50%] h-[360px] w-[360px] rounded-full bg-[#0b7a3a]/18 blur-3xl" />

        <div className="relative mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#f2d184]">
              Together, we educate. We empower. We elevate.
            </p>
            <h2 className="max-w-3xl font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Support the next generation of thinkers, learners and leaders.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#partners"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c69a42] px-6 py-4 text-sm font-black text-[#07120d] transition hover:-translate-y-0.5 hover:bg-[#e3bb62]"
            >
              Partner With This Initiative <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {selectedMoment && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#07120d]/90 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedMoment(null)}
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition hover:bg-white/18"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative max-h-[88vh] max-w-[92vw]">
            <img
              src={selectedMoment.image}
              alt={selectedMoment.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      )}
    </>
  );
}