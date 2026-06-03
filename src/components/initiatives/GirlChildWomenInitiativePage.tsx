import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Droplets,
  Globe2,
  HeartHandshake,
  HeartPulse,
  Play,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Initiative } from "@/data/initiatives";

import gfgcHeroAudience from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-hero-audience-under-canopy.jpg";
import gfgcGirlsLineupWide from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-full-girls-lineup-wide.jpg";
import gfgcGirlsCelebration from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/gfgc-girls-celebration-moment.jpg";
import womenCommunityLineup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/01-hero-and-audience/women-community-lineup-and-officials.jpg";

import gfgcLiquidSoapBleachDemo from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-liquid-soap-jik-practical-demo.jpg";
import gfgcSanitaryPadBoxes from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-sanitary-pad-support-boxes.jpg";
import gfgcGirlChildSpeaker from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/gfgc-girl-child-speaker.jpg";
// import gfgcPadDaySkillsVideo from "@/assets/girl-child-women/01-g-for-the-girl-child-project/02-health-dignity-and-skills/g-girl-child-pad-day-skills-video.mov?url";

import gfgcWomenLeadersGroup from "@/assets/girl-child-women/01-g-for-the-girl-child-project/03-partnership-and-officials/gfgc-women-leaders-and-ginitiative-group.jpg";

type PathwayIcon = ComponentType<{ className?: string }>;

const heroSdgCards: {
  code: string;
  title: string;
  label: string;
  tone: string;
  Icon: PathwayIcon;
}[] = [
  {
    code: "3",
    title: "Good Health",
    label: "& Well-being",
    tone: "bg-[#279B48]",
    Icon: HeartHandshake,
  },
  {
    code: "4",
    title: "Quality",
    label: "Education",
    tone: "bg-[#C5192D]",
    Icon: BookOpen,
  },
  {
    code: "5",
    title: "Gender",
    label: "Equality",
    tone: "bg-[#FF3A21]",
    Icon: Sparkles,
  },
  {
    code: "8",
    title: "Decent Work",
    label: "& Growth",
    tone: "bg-[#A21942]",
    Icon: BriefcaseBusiness,
  },
  {
    code: "10",
    title: "Reduced",
    label: "Inequalities",
    tone: "bg-[#DD1367]",
    Icon: UsersRound,
  },
  {
    code: "17",
    title: "Partnerships",
    label: "For the Goals",
    tone: "bg-[#19486A]",
    Icon: Globe2,
  },
];

const miniFocus = [
  {
    title: "Access & Inclusion",
    Icon: UsersRound,
  },
  {
    title: "Skills & Enterprise",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Confidence & Leadership",
    Icon: Sparkles,
  },
  {
    title: "Health & Dignity",
    Icon: HeartPulse,
  },
];

const pathwayNodes: {
  title: string;
  Icon: PathwayIcon;
}[] = [
  {
    title: "Access & Inclusion",
    Icon: UsersRound,
  },
  {
    title: "Health & Dignity",
    Icon: HeartPulse,
  },
  {
    title: "Practical Skills",
    Icon: Droplets,
  },
  {
    title: "Take-home Knowledge",
    Icon: BookOpen,
  },
  {
    title: "Community Ripple",
    Icon: HeartHandshake,
  },
  {
    title: "Self-Reliance",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Global Readiness",
    Icon: Globe2,
  },
];

const storyPillars = [
  {
    eyebrow: "Health & dignity",
    title: "PAD Day support created a practical dignity moment.",
    body:
      "The project connected girl-child empowerment with menstrual dignity and health awareness, helping young girls feel seen, supported, and protected in a setting that encouraged learning and confidence.",
    image: gfgcSanitaryPadBoxes,
    sdgs: ["SDG 3", "SDG 5", "SDG 10"],
  },
  {
    eyebrow: "Practical skills",
    title: "Liquid soap and bleach production turned learning into usable skill.",
    body:
      "Beyond awareness, the girls experienced practical demonstrations around liquid soap and bleach production, linking empowerment to useful household, hygiene, and enterprise-related skills.",
    image: gfgcLiquidSoapBleachDemo,
    sdgs: ["SDG 4", "SDG 8", "SDG 12"],
  },
  {
    eyebrow: "Knowledge ripple",
    title: "What a girl learns can travel home, to friends, and into community life.",
    body:
      "The programme was not only about one event day. The girls can carry the knowledge into their homes, share it with family and friends, and help spread health, dignity, skills, and SDG awareness.",
    image: gfgcGirlChildSpeaker,
    sdgs: ["SDG 4", "SDG 5", "SDG 17"],
  },
];

const relatedProjects = [
  {
    title: "G–For the Girl Child Project",
    summary:
      "A gender-equality project focused on empowering the Igbo girl-child through digital literacy, entrepreneurial skills, self-reliance, and sustainability.",
    image: gfgcGirlsLineupWide,
    href: "/projects/g-for-the-girl-child-project",
    sdgs: ["SDG 4", "SDG 5", "SDG 8", "SDG 10"],
  },
  {
    title: "Nwaha Women Development Center",
    summary:
      "A functional women-development centre for conferences, seminars, skill acquisition, counselling, recreation, and empowerment activities.",
    image: womenCommunityLineup,
    href: "/projects/nwaha-women-development-center",
    sdgs: ["SDG 5", "SDG 8", "SDG 11", "SDG 17"],
  },
  {
    title: "Women in Sports Recognition",
    summary:
      "A related women-recognition story that may connect to Youth & Sports while still supporting the wider women empowerment narrative.",
    image: gfgcGirlsCelebration,
    href: "/projects",
    sdgs: ["SDG 3", "SDG 5", "SDG 10"],
  },
];

const impactProof: {
  value: string;
  label: string;
  Icon: PathwayIcon;
}[] = [
  {
    value: "Girls",
    label: "Reached through dignity, learning, and practical empowerment.",
    Icon: UsersRound,
  },
  {
    value: "Skills",
    label: "Practical exposure through liquid soap and bleach production.",
    Icon: Droplets,
  },
  {
    value: "PAD Day",
    label: "Health, dignity, and awareness support for the girl child.",
    Icon: HeartPulse,
  },
  {
    value: "Partners",
    label: "Collaboration with public leadership and community stakeholders.",
    Icon: HeartHandshake,
  },
];

const sdgCards = [
  {
    code: "SDG 3",
    title: "Good Health & Well-being",
    body: "Menstrual dignity, health awareness, hygiene, and wellbeing support.",
  },
  {
    code: "SDG 4",
    title: "Quality Education",
    body: "Learning, exposure, digital readiness, and practical skills development.",
  },
  {
    code: "SDG 5",
    title: "Gender Equality",
    body: "Empowering girls and women with confidence, visibility, and opportunity.",
  },
  {
    code: "SDG 8",
    title: "Decent Work & Economic Growth",
    body: "Enterprise exposure and self-reliance through skill-building.",
  },
  {
    code: "SDG 10",
    title: "Reduced Inequalities",
    body: "Bridging access gaps for girls and women in underserved communities.",
  },
  {
    code: "SDG 17",
    title: "Partnerships for the Goals",
    body: "Collaboration with public, community, and development stakeholders.",
  },
];

export function GirlChildWomenInitiativePage({
  initiative,
}: {
  initiative: Initiative;
}) {
  return (
    <>
      <style>{`
        @keyframes girlChildArrowMove {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.55;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
        }

        @keyframes girlChildLineGlow {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.9;
          }
        }

        .girl-child-path-arrow {
          animation: girlChildArrowMove 1.6s ease-in-out infinite;
        }

        .girl-child-path-line {
          animation: girlChildLineGlow 1.6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-[820px] overflow-hidden bg-[#fff8f3] pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,178,199,0.34),transparent_32%),radial-gradient(circle_at_84%_26%,rgba(198,154,66,0.18),transparent_30%),linear-gradient(135deg,#fff8f3_0%,#fde8df_48%,#fff8ef_100%)]" />

        <div className="absolute inset-y-0 right-0 hidden w-[64%] bg-[#fde8df] lg:block">
          <img
            src={gfgcHeroAudience}
            alt="Girls and women gathered under a canopy during the G–For the Girl Child Project"
            className="h-full w-full object-cover object-[center_42%]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8f3_0%,rgba(255,248,243,0.98)_14%,rgba(255,232,223,0.82)_34%,rgba(255,232,223,0.38)_58%,rgba(255,248,243,0.03)_86%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,243,0.08)_0%,rgba(255,248,243,0)_52%,#fff8f3_100%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(820px-7rem)] max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          <div>
            <a
              href="/#initiatives"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#13271b]/15 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#13271b] shadow-[0_12px_40px_rgba(16,35,25,0.08)] backdrop-blur-xl"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to initiatives
            </a>

            <p className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-[#c45a7b]">
              <Sparkles className="h-4 w-4" />
              {initiative.title}
            </p>

            <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,7vw,8rem)] font-normal leading-[0.86] tracking-[-0.075em] text-[#101f17]">
              Building her today. Transforming tomorrow.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#33483b] sm:text-lg">
              Empowering the girl child and women with digital literacy,
              entrepreneurial skills, confidence, health dignity, and access to
              opportunities — creating a future where they are self-reliant,
              globally competitive, and prepared to lead.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#partners"
                className="inline-flex items-center gap-2 rounded-full bg-[#c45a7b] px-6 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(196,90,123,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a93d62]"
              >
                <HeartHandshake className="h-4 w-4" /> Partner With Us
              </a>

              <a
                href="#girl-child-projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#c45a7b]/35 bg-white/55 px-6 py-3 text-sm font-black text-[#13271b] shadow-[0_18px_45px_rgba(16,35,25,0.07)] backdrop-blur transition hover:bg-white"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 max-w-[680px] rounded-[1.45rem] border border-[#13271b]/10 bg-white/82 p-5 shadow-[0_24px_70px_rgba(16,35,25,0.1)] backdrop-blur-xl">
              <p className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#13271b]">
                SDG Alignment
              </p>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {heroSdgCards.map((sdg) => {
                  const Icon = sdg.Icon;

                  return (
                    <article
                      key={sdg.code}
                      className={`${sdg.tone} flex min-h-[104px] flex-col justify-between overflow-hidden rounded-[0.95rem] p-3 text-white shadow-[0_16px_35px_rgba(16,35,25,0.16)]`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[1.65rem] font-black leading-none tracking-[-0.06em]">
                          {sdg.code}
                        </span>

                        <Icon className="h-5 w-5 shrink-0 opacity-95" />
                      </div>

                      <div>
                        <p className="text-[0.52rem] font-black uppercase leading-[0.95] tracking-[0.035em]">
                          {sdg.title}
                        </p>

                        <p className="mt-1 text-[0.49rem] font-bold uppercase leading-[0.95] tracking-[0.035em] text-white/84">
                          {sdg.label}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative lg:hidden">
            <img
              src={gfgcHeroAudience}
              alt="Girls and women gathered during the G–For the Girl Child Project"
              className="h-[430px] w-full rounded-[2rem] bg-[#fde8df] object-cover object-[center_42%] shadow-[0_28px_90px_rgba(16,35,25,0.18)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f3] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/55 p-2 shadow-[0_30px_90px_rgba(16,35,25,0.1)]">
            <div className="grid gap-2 sm:grid-cols-2">
              <img
                src={gfgcSanitaryPadBoxes}
                alt="Sanitary pad support boxes for the girl child project"
                className="h-[420px] w-full rounded-[1.55rem] object-cover sm:col-span-1"
              />

              <img
                src={gfgcLiquidSoapBleachDemo}
                alt="Liquid soap and bleach practical skills demonstration"
                className="h-[420px] w-full rounded-[1.55rem] object-cover sm:col-span-1"
              />
            </div>

            <div className="mt-3 rounded-[1.45rem] bg-[#c45a7b] p-6 text-white shadow-[0_20px_55px_rgba(196,90,123,0.24)]">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-white/88">
                Our Mission
              </p>

              <p className="max-w-2xl text-sm leading-7 text-white/88">
                To raise a generation of confident, skilled, healthy, and
                self-reliant girls and women who can thrive locally and compete
                globally.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#c45a7b]">
              About the initiative
            </p>

            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.8rem)] leading-[0.88] tracking-[-0.065em] text-[#101f17]">
              Empowering one girl can strengthen a family, a community, and the
              future.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#405244]">
              The Girl Child & Women Development Initiative strengthens the
              human side of G Initiative’s long-term vision. It begins with
              girls and women who need access, confidence, health awareness,
              skill exposure, and safe development spaces — then connects them
              to wider possibilities in education, entrepreneurship, digital
              participation, and global opportunity.
            </p>

            <p className="mt-5 text-base leading-8 text-[#405244]">
              Through projects like G–For the Girl Child and Nwaha Women
              Development Center, the initiative supports a future where African
              girls and women are not left behind, but are prepared to learn,
              lead, build, and connect beyond local limitations.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {miniFocus.map((item) => {
                const Icon = item.Icon;

                return (
                  <article key={item.title} className="text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#fde8df] text-[#c45a7b]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="mt-3 text-xs font-black text-[#13271b]">
                      {item.title}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f3] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[#13271b]/10 bg-[#fde8df]/70 p-5 shadow-[0_32px_100px_rgba(16,35,25,0.1)] backdrop-blur-xl sm:p-7 lg:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(244,178,199,0.28),transparent_30%),radial-gradient(circle_at_92%_72%,rgba(198,154,66,0.18),transparent_28%)]" />

            <div className="relative mb-10">
              <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c45a7b]">
                Our empowerment pathway
              </p>

              <h2 className="max-w-4xl font-serif text-[clamp(2.1rem,3.6vw,4.4rem)] leading-[0.9] tracking-[-0.055em] text-[#101f17]">
                From access to global impact.
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#526555]">
                The impact does not end with one girl. When girls learn, they
                take the knowledge home, share it with family and friends, and
                create a wider ripple of health awareness, practical skills,
                SDG understanding, and confidence.
              </p>
            </div>

            <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-7">
              {pathwayNodes.map((node, index) => {
                const Icon = node.Icon;
                const isLast = index === pathwayNodes.length - 1;

                return (
                  <div key={node.title} className="relative">
                    {!isLast && (
                      <div className="absolute left-[calc(100%-0.2rem)] top-[2.85rem] z-10 hidden items-center xl:flex">
                        <div className="girl-child-path-line h-px w-6 bg-[#c45a7b]/45" />
                        <ArrowRight className="girl-child-path-arrow -ml-1 h-3.5 w-3.5 text-[#c45a7b]" />
                      </div>
                    )}

                    <article className="flex min-h-[130px] flex-col items-center justify-center rounded-[1.15rem] border border-[#c45a7b]/16 bg-[#fff8ef]/84 px-3 py-4 text-center shadow-[0_18px_50px_rgba(16,35,25,0.07)] backdrop-blur">
                      <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c45a7b]/22 bg-white/80 text-[#c45a7b] shadow-[0_12px_30px_rgba(196,90,123,0.11)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="mt-2.5 text-[0.5rem] font-black uppercase tracking-[0.14em] text-[#c45a7b]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-1.5 max-w-[6.8rem] text-balance font-serif text-[0.78rem] leading-[0.95] tracking-[-0.02em] text-[#13271b]">
                        {node.title}
                      </h3>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f3] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            <img
              src={gfgcGirlsLineupWide}
              alt="Girls lined up during the G–For the Girl Child Project"
              className="h-[360px] w-full rounded-[1.8rem] object-cover shadow-[0_28px_80px_rgba(16,35,25,0.12)] sm:col-span-2"
            />

            <img
              src={gfgcGirlsCelebration}
              alt="Girls celebrating during the empowerment programme"
              className="h-[270px] w-full rounded-[1.8rem] object-cover shadow-[0_22px_70px_rgba(16,35,25,0.1)]"
            />

            <img
              src={womenCommunityLineup}
              alt="Women and community officials lined up during the programme"
              className="h-[270px] w-full rounded-[1.8rem] object-cover shadow-[0_22px_70px_rgba(16,35,25,0.1)]"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#c45a7b]">
              Human development pipeline
            </p>

            <h2 className="font-serif text-[clamp(2.8rem,5vw,6rem)] leading-[0.88] tracking-[-0.065em] text-[#101f17]">
              The girl child is not a side story — she is part of the future
              framework.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#405244]">
              This initiative connects girl-child empowerment to the wider
              vision of building a stable digital economy, expanding access, and
              bridging Africa with the world. Every girl equipped with dignity,
              confidence, skills, and exposure becomes part of a stronger
              African future.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                "Digital participation",
                "Self-reliance",
                "Enterprise exposure",
                "Global connectivity",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#13271b]/10 bg-white/55 px-3 py-3 text-center text-[0.68rem] font-black text-[#13271b] shadow-[0_14px_40px_rgba(16,35,25,0.06)]"
                >
                  <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#c45a7b]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        Video story section temporarily commented out because the .mov file is too large for GitHub/Vercel.
        Later, upload the video to Cloudinary/YouTube/Supabase Storage or convert/compress it to a web-friendly .mp4.

      <section className="bg-[#fff8f3] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_35px_100px_rgba(16,35,25,0.18)]">
            <video
              src={gfgcPadDaySkillsVideo}
              poster={gfgcLiquidSoapBleachDemo}
              controls
              playsInline
              className="h-[520px] w-full object-cover opacity-90"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.82)_0%,rgba(7,18,13,0.42)_42%,rgba(7,18,13,0.08)_100%)]" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between gap-8 p-8 text-[#fff8e7] sm:p-10 lg:p-14">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#f4b2c7]">
                  Video story
                </p>

                <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5vw,5.8rem)] leading-[0.88] tracking-[-0.06em]">
                  PAD Day, practical skills, and dignity in motion.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  A glimpse into the day’s activities — including health and
                  dignity support, liquid soap and bleach production, learning
                  moments, and collaboration around the girl child.
                </p>
              </div>

              <div className="hidden h-24 w-24 shrink-0 place-items-center rounded-full border border-white/45 bg-white/10 text-white backdrop-blur-xl lg:grid">
                <Play className="ml-1 h-10 w-10 fill-white" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-6 text-[#526555]">
            Note: this video is currently a .mov asset. If browser playback is
            inconsistent, convert it to .mp4 later for stronger web support.
          </p>
        </div>
      </section>

      */}

      <section className="bg-[#fff8f3] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#c45a7b]">
              Project proof
            </p>

            <h2 className="mx-auto max-w-5xl font-serif text-[clamp(2.8rem,5vw,6rem)] leading-[0.88] tracking-[-0.065em] text-[#101f17]">
              Health, dignity, skills, and confidence — organised as one story.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {storyPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/50 shadow-[0_28px_90px_rgba(16,35,25,0.09)]"
              >
                <div className="relative h-[310px] overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.02),rgba(7,18,13,0.55))]" />
                </div>

                <div className="p-6">
                  <p className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#c45a7b]">
                    {pillar.eyebrow}
                  </p>

                  <h3 className="font-serif text-[clamp(2rem,3vw,3.4rem)] leading-[0.9] tracking-[-0.055em] text-[#13271b]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#445648]">
                    {pillar.body}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.sdgs.map((sdg) => (
                      <span
                        key={sdg}
                        className="rounded-full bg-[#fde8df] px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#13271b]"
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-14 text-[#fff8e7] sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#f4b2c7]">
              Impact proof
            </p>

            <h2 className="max-w-xl font-serif text-[clamp(2.5rem,4vw,4.9rem)] leading-[0.9] tracking-[-0.06em]">
              Empowerment that can be seen, felt, and built upon.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactProof.map((item) => {
              const Icon = item.Icon;

              return (
                <article
                  key={item.value}
                  className="border-l border-white/10 px-5 py-4"
                >
                  <Icon className="mb-4 h-6 w-6 text-[#f4b2c7]" />

                  <p className="font-serif text-3xl leading-none tracking-[-0.04em]">
                    {item.value}
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/62">
                    {item.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="girl-child-projects"
        className="bg-[#fff8f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#c45a7b]">
                Projects under this initiative
              </p>

              <h2 className="max-w-5xl font-serif text-[clamp(2.8rem,5vw,6rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#101f17]">
                Specific stories connected to women and girl-child development.
              </h2>
            </div>

            <a
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#13271b]/20 bg-white/55 px-5 py-3 text-sm font-black text-[#13271b] transition hover:bg-white"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-[#13271b]/10 bg-white/55 shadow-[0_24px_80px_rgba(16,35,25,0.09)]"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.02),rgba(7,18,13,0.45))]" />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-[clamp(2rem,3vw,3.4rem)] leading-[0.9] tracking-[-0.055em] text-[#13271b]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base font-semibold leading-7 text-[#13271b]">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.sdgs.map((sdg) => (
                      <span
                        key={sdg}
                        className="rounded-full bg-[#fde8df] px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#13271b]"
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c45a7b]/45 bg-white/55 px-4 py-2.5 text-xs font-black text-[#c45a7b] transition hover:border-[#c45a7b] hover:bg-[#c45a7b] hover:text-white"
                  >
                    View project <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f3] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#c45a7b]">
              SDG alignment
            </p>

            <h2 className="font-serif text-[clamp(2.6rem,4.6vw,5.6rem)] leading-[0.88] tracking-[-0.06em] text-[#101f17]">
              A women-and-girls initiative aligned with human dignity and future
              opportunity.
            </h2>

            <div className="mt-7 space-y-4">
              {[
                "Empowers the Igbo girl-child through digital literacy and entrepreneurial skills.",
                "Supports women and girls with confidence-building, counselling, dignity, and practical learning.",
                "Spreads knowledge beyond the event as girls carry lessons home to family, friends, and community.",
                "Connects local development to a bigger mission of global connectivity and African opportunity.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c45a7b]" />

                  <p className="leading-7 text-[#33483b]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sdgCards.map((sdg, index) => (
              <article
                key={sdg.code}
                className={[
                  "flex min-h-[180px] flex-col justify-between rounded-[1.35rem] p-5 shadow-[0_18px_50px_rgba(16,35,25,0.08)]",
                  index === 2
                    ? "bg-[#c45a7b] text-[#fff8ef]"
                    : index === 5
                      ? "bg-[#c69a42] text-[#fff8ef]"
                      : "bg-[#07120d] text-[#fff8ef]",
                ].join(" ")}
              >
                <p className="text-[0.68rem] font-black uppercase tracking-[0.12em]">
                  {sdg.code}
                </p>

                <div>
                  <h3 className="font-serif text-2xl leading-none tracking-[-0.04em]">
                    {sdg.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-white/68">
                    {sdg.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f3] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2.2rem] border border-[#13271b]/10 bg-[#07120d] shadow-[0_35px_110px_rgba(16,35,25,0.2)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 text-[#fff8e7] sm:p-10 lg:p-14">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-[#f4b2c7]">
                Partner opportunity
              </p>

              <h2 className="font-serif text-[clamp(2.6rem,4.8vw,5.8rem)] leading-[0.9] tracking-[-0.06em]">
                Help more girls and women access dignity, skills, and global
                opportunity.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                With the right partners, this initiative can expand dignity
                support, practical skill acquisition, digital-literacy exposure,
                women development spaces, and future-ready pathways for African
                girls and women.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#partners"
                  className="premium-red-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black text-white"
                >
                  Partner with us <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/assets/g-initiative-portfolio-2026.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white/85 transition hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> Download Project Portfolio
                </a>
              </div>
            </div>

            <div className="relative min-h-[450px]">
              <img
                src={gfgcWomenLeadersGroup}
                alt="Women leaders and G Initiative group"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,13,0.78)_0%,rgba(7,18,13,0.1)_100%)]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}