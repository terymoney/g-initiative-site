import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Play,
  Rocket,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { Initiative } from "@/data/initiatives";
import type { ImpactProject } from "@/data/projects";

import aspireStageSpeakers from "@/assets/aspire/aspire-masterclass-stage-speakers.jpg";
import aspireGroupPresentation from "@/assets/aspire/aspire-masterclass-group-presentation.jpg";
import aspireFacilitatorWindow from "@/assets/aspire/aspire-masterclass-facilitator-window.png";
import aspireAudienceWide from "@/assets/aspire/aspire-masterclass-audience-wide.jpg";
import aspireAudienceWorkbook from "@/assets/aspire/aspire-masterclass-audience-workbook.jpg";
import aspireCandidMoment from "@/assets/aspire/aspire-masterclass-speaker-address.jpg";
import aspireRecognitionOne from "@/assets/aspire/aspire-masterclass-participant-recognition-01.jpg";
import aspireRecognitionTwo from "@/assets/aspire/aspire-masterclass-participant-recognition-02.jpg";
import aspireVideoThumbnail from "@/assets/aspire/aspire-masterclass-video-thumbnail.png";

import gProjectsLogo from "@/assets/essay/logos/g-projects-logo.png";

type ProjectImage = {
  src: string;
  alt: string;
  label: string;
  position: string;
  span?: string;
};

type BuildCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

const quickFacts = [
  {
    label: "Duration",
    value: "Two Weeks",
    sub: "Leadership training and seminar",
    Icon: CalendarDays,
  },
  {
    label: "Focus",
    value: "Leadership",
    sub: "Values, confidence and purpose",
    Icon: GraduationCap,
  },
  {
    label: "Partner",
    value: "Iwanyanwu Foundation",
    sub: "Programme partnership",
    Icon: Handshake,
  },
  {
    label: "Impact",
    value: "Youth Capacity",
    sub: "Confidence and future readiness",
    Icon: Rocket,
  },
];

const buildCards: BuildCard[] = [
  {
    title: "Leadership Mindset",
    body: "Helping young people think beyond themselves and lead with values, service, and responsibility.",
    Icon: Target,
  },
  {
    title: "Confidence & Voice",
    body: "Creating room for participants to speak, ask questions, learn, and express their ideas.",
    Icon: Sparkles,
  },
  {
    title: "Values & Purpose",
    body: "Anchoring leadership in discipline, purpose, ethical choices, and community impact.",
    Icon: Lightbulb,
  },
  {
    title: "Future Readiness",
    body: "Preparing emerging young leaders to recognize opportunities and take action with clarity.",
    Icon: CheckCircle2,
  },
];

const galleryImages: ProjectImage[] = [
  {
    src: aspireStageSpeakers,
    alt: "Aspire Leadership Master Class stage session with speakers",
    label: "Expert-led session",
    position: "object-[center_30%]",
    span: "lg:col-span-2",
  },
  {
    src: aspireAudienceWide,
    alt: "Audience seated during Aspire Leadership Master Class",
    label: "Engaged learning",
    position: "object-[center_45%]",
    span: "lg:col-span-2",
  },
  {
    src: aspireAudienceWorkbook,
    alt: "Participant holding Aspire Master Class workbook material",
    label: "Practical materials",
    position: "object-[center_45%]",
  },
  {
    src: aspireCandidMoment,
    alt: "Candid moment during Aspire Leadership Master Class",
    label: "Candid moment",
    position: "object-[center_38%]",
  },
  {
    src: aspireGroupPresentation,
    alt: "Participants presenting during Aspire Leadership Master Class",
    label: "Presentation moment",
    position: "object-[center_38%]",
  },
  {
    src: aspireFacilitatorWindow,
    alt: "Mentorship moment at Aspire Leadership Master Class",
    label: "Mentorship session",
    position: "object-[center_35%]",
  },
];

const recognitionImages: ProjectImage[] = [
  {
    src: aspireRecognitionOne,
    alt: "Participant recognition at Aspire Leadership Master Class",
    label: "Participant recognition",
    position: "object-[center_40%]",
  },
  {
    src: aspireRecognitionTwo,
    alt: "Recognition moment at Aspire Leadership Master Class",
    label: "Growth and encouragement",
    position: "object-[center_40%]",
  },
];

const sdgCards = [
  {
    code: "4",
    title: "Quality Education",
    body: "Supporting learning, mentorship, and structured leadership development.",
    className: "bg-[#c5192d]",
    Icon: BookOpen,
  },
  {
    code: "8",
    title: "Decent Work & Economic Growth",
    body: "Building skills and confidence that prepare young people for future opportunity.",
    className: "bg-[#a21942]",
    Icon: Rocket,
  },
  {
    code: "17",
    title: "Partnerships for the Goals",
    body: "Delivered through partnership and shared commitment to youth development.",
    className: "bg-[#19486a]",
    Icon: Handshake,
  },
];

export function AspireLeadershipMasterClassPage({
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
      <section className="relative overflow-hidden bg-[#fff8ef] px-5 pt-36 pb-16 text-[#13271b] sm:px-8 lg:px-12 lg:pt-40">
        <div className="absolute left-[-16%] top-[-22%] h-[520px] w-[520px] rounded-full bg-[#d9b66f]/22 blur-3xl" />
        <div className="absolute right-[-14%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#0b7a3a]/14 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#b17819]">
              Our Project
            </p>

            <h1 className="max-w-3xl font-serif text-[clamp(3.3rem,6.5vw,7.4rem)] font-normal leading-[0.9] tracking-[-0.07em] text-[#102319]">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#35483c]">
              A two-week leadership training and seminar delivered under the
              Education & Leadership Empowerment Initiative in partnership with
              Iwanyanwu Foundation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#536458]">
              The programme helped emerging young leaders build confidence,
              values, purpose, mentorship exposure, and the mindset to create
              positive impact in their communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b7a3a]/18 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#0b3a1f] shadow-[0_14px_40px_rgba(15,45,25,0.06)]">
                <BookOpen className="h-4 w-4" />
                Education & Leadership
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b7a3a]/18 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#0b3a1f] shadow-[0_14px_40px_rgba(15,45,25,0.06)]">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b7a3a]/18 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#0b3a1f] shadow-[0_14px_40px_rgba(15,45,25,0.06)]">
                <CalendarDays className="h-4 w-4" />
                Two Weeks
              </span>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.75fr] lg:items-stretch">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: aspireStageSpeakers,
                  alt: "Aspire Leadership Master Class stage session with speakers",
                  label: "Expert-led session",
                  position: "object-center",
                })
              }
              className="group overflow-hidden rounded-[1.7rem] bg-[#07120d] text-left shadow-[0_28px_90px_rgba(16,35,25,0.18)]"
            >
              <img
                src={aspireStageSpeakers}
                alt="Aspire Leadership Master Class stage session with speakers"
                className="h-[360px] w-full object-cover object-center transition duration-700 group-hover:scale-105 lg:h-[560px]"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: aspireFacilitatorWindow,
                  alt: "Mentorship moment at Aspire Leadership Master Class",
                  label: "Mentorship session",
                  position: "object-[center_35%]",
                })
              }
              className="group overflow-hidden rounded-[1.7rem] bg-[#07120d] text-left shadow-[0_20px_60px_rgba(16,35,25,0.12)]"
            >
              <img
                src={aspireFacilitatorWindow}
                alt="Mentorship moment at Aspire Leadership Master Class"
                className="h-[360px] w-full object-cover object-[center_35%] transition duration-700 group-hover:scale-105 lg:h-[560px]"
              />
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(({ label, value, sub, Icon }) => (
            <article
              key={label}
              className="rounded-[1.2rem] border border-[#13271b]/10 bg-white p-5 shadow-[0_18px_55px_rgba(16,35,25,0.08)]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#0b3a1f] text-[#f2d184]">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17819]">
                {label}
              </p>
              <p className="mt-2 font-serif text-2xl leading-6 text-[#13271b]">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5a695f]">{sub}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              About the Project
            </p>

            <h2 className="max-w-xl font-serif text-[clamp(2.6rem,4.6vw,5.4rem)] font-normal leading-[0.92] tracking-[-0.06em]">
              Developing leaders. Building futures.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#4d5f54]">
              Aspire Leadership Master Class was created to expose young people
              to structured leadership learning, practical mentorship,
              confidence-building, and purpose-driven conversations.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#4d5f54]">
              Through seminars, interactive discussions, and guided sessions,
              participants were encouraged to think differently about leadership,
              responsibility, service, and their future role in society.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setSelectedImage({
                src: aspireAudienceWide,
                alt: "Audience seated during Aspire Leadership Master Class",
                label: "Engaged learning",
                position: "object-[center_45%]",
              })
            }
            className="group overflow-hidden rounded-[1.8rem] bg-[#07120d] p-2 text-left shadow-[0_28px_90px_rgba(16,35,25,0.14)]"
          >
            <img
              src={aspireAudienceWide}
              alt="Audience seated during Aspire Leadership Master Class"
              className="h-[390px] w-full rounded-[1.3rem] object-cover object-[center_45%] transition duration-700 group-hover:scale-105 lg:h-[500px]"
            />
          </button>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              What the Master Class Builds
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Leadership capacity that lasts beyond the room.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buildCards.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="rounded-[1.4rem] border border-[#13271b]/10 bg-[#fffaf2] p-6 shadow-[0_20px_60px_rgba(16,35,25,0.06)]"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#eaf4dc] text-[#0b3a1f]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-2xl leading-7 text-[#13271b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#526258]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
                Inside the Master Class
              </p>
              <h2 className="max-w-4xl font-serif text-[clamp(2.6rem,4.6vw,5.4rem)] font-normal leading-[0.92] tracking-[-0.06em]">
                Learning moments, speaker sessions, and participant growth.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(image)}
                className={`${image.span ?? ""} group relative overflow-hidden rounded-[1.35rem] bg-[#07120d] text-left shadow-[0_22px_65px_rgba(16,35,25,0.12)]`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-72 w-full object-cover transition duration-700 group-hover:scale-105 ${image.position}`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(5,24,14,0.88))] p-5 pt-16">
                  <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#0b3a1f]">
                    {image.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.8rem] bg-[#07120d] shadow-[0_28px_90px_rgba(16,35,25,0.16)]">
            <img
              src={aspireVideoThumbnail}
              alt="Aspire Leadership Master Class event video thumbnail"
              className="absolute inset-0 h-full w-full object-contain object-center opacity-95"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.02),rgba(7,18,13,0.42))]" />
            <div className="absolute inset-0 grid place-items-center">
              <Play className="h-16 w-16 fill-white text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]" />
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[#13271b]/10 bg-[#fff8ef] p-8 shadow-[0_20px_70px_rgba(16,35,25,0.08)] lg:p-10">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#b17819]">
              Project Story / Event Highlights
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              See the master class experience in motion.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4d5f54]">
              The event story brings together arrival moments, seminar sessions,
              mentorship conversations, participant engagement, and recognition
              highlights from the Aspire Leadership Master Class.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Recognition & Growth
            </p>
            <h2 className="max-w-xl font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.92] tracking-[-0.06em]">
              Encouraging every participant’s journey.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#4d5f54]">
              Recognition moments helped close the programme with encouragement,
              confidence, and a sense of progress for participants who took part
              in the leadership experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recognitionImages.map((image) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(image)}
                className="group overflow-hidden rounded-[1.5rem] bg-[#07120d] text-left shadow-[0_24px_70px_rgba(16,35,25,0.12)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 ${image.position}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Partners & Support
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              Built through education-focused partnership.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="grid min-h-[220px] place-items-center rounded-[1.5rem] border border-[#13271b]/10 bg-[#fff8ef] p-8 text-center shadow-[0_22px_70px_rgba(16,35,25,0.08)]">
              <img
                src={gProjectsLogo}
                alt="G Projects logo"
                className="max-h-28 max-w-[82%] object-contain"
              />
            </article>

            <article className="grid min-h-[220px] place-items-center rounded-[1.5rem] border border-[#13271b]/10 bg-[#fff8ef] p-8 text-center shadow-[0_22px_70px_rgba(16,35,25,0.08)]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b17819]">
                  Programme Partner
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-8 text-[#13271b]">
                  Iwanyanwu Foundation
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5a695f]">
                  Leadership Training & Seminar
                </p>
              </div>
            </article>

            <article className="grid min-h-[220px] place-items-center rounded-[1.5rem] border border-[#13271b]/10 bg-[#fff8ef] p-8 text-center shadow-[0_22px_70px_rgba(16,35,25,0.08)]">
              <div>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#eaf4dc] text-[#0b3a1f]">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0b7a3a]">
                  Education & Leadership
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-7 text-[#13271b]">
                  Empowerment Initiative
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] px-5 py-16 text-[#13271b] sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#0b7a3a]">
              Aligned Sustainable Development Goals
            </p>
            <h2 className="max-w-xl font-serif text-[clamp(2.5rem,4.5vw,5rem)] font-normal leading-[0.92] tracking-[-0.06em]">
              A leadership programme connected to opportunity.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
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

      <section className="bg-[#07120d] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#f2d184]">
              Invest in young leaders
            </p>
            <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,4vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              The future strengthens when young people learn to lead.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#c69a42] px-6 py-4 text-sm font-black text-[#07120d] transition hover:-translate-y-0.5 hover:bg-[#e3bb62]"
            >
              Support This Project
            </a>

            {parentInitiative && (
              <a
                href={`/initiatives/${parentInitiative.slug}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Education Projects <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {relatedProject && (
        <section className="bg-white px-5 py-14 text-[#13271b] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-6 overflow-hidden rounded-[1.5rem] border border-[#13271b]/10 bg-[#fff8ef] shadow-[0_20px_70px_rgba(16,35,25,0.08)] lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <a
              href={`/projects/${relatedProject.slug}`}
              className="group block min-h-[280px] overflow-hidden bg-[#07120d]"
            >
              <img
                src={relatedProject.image}
                alt={relatedProject.title}
                className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </a>

            <div className="flex flex-col justify-center p-7 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b7a3a]">
                Related Project
              </p>
              <h3 className="mt-3 font-serif text-[clamp(2.1rem,3.8vw,4.4rem)] leading-[0.95] tracking-[-0.055em] text-[#13271b]">
                {relatedProject.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#526258]">
                {relatedProject.description}
              </p>

              <a
                href={`/projects/${relatedProject.slug}`}
                className="mt-7 inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#0b7a3a] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#096b33]"
              >
                View Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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