"use client";

import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="mt-7 mb-4">
    <h2 className="font-display text-center text-[13px] font-semibold uppercase tracking-[0.32em] text-stone-900">
      {children}
    </h2>
    <div className="mt-2 border-t border-stone-800" />
    <div className="mt-[2px] border-t border-stone-300" />
  </div>
);

const Ornament = () => (
  <div className="flex items-center justify-center gap-3 text-stone-400">
    <span className="h-px w-16 bg-stone-300" />
    <span className="text-[10px]">❦</span>
    <span className="h-px w-16 bg-stone-300" />
  </div>
);

const ExperienceItem = ({
  title,
  company,
  location,
  period,
  bullets,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}) => (
  <div className="mb-5 break-inside-avoid">
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-display text-[15px] font-semibold text-stone-900">
        {company}
      </h3>
      <span className="text-[12.5px] italic text-stone-600 whitespace-nowrap">
        {period}
      </span>
    </div>
    <div className="flex items-baseline justify-between gap-4">
      <p className="text-[13px] italic text-stone-700">{title}</p>
      <p className="text-[12.5px] italic text-stone-500 text-right">
        {location}
      </p>
    </div>
    <ul className="mt-2 space-y-1">
      {bullets.map((b, i) => (
        <li
          key={i}
          className="relative pl-4 text-[13px] leading-[1.55] text-stone-800 text-justify"
        >
          <span className="absolute left-0 top-0 text-stone-500">&bull;</span>
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const SkillRow = ({ label, items }: { label: string; items: string[] }) => (
  <p className="text-[13px] leading-[1.6] text-stone-800 mb-2">
    <span className="font-display font-semibold small-caps tracking-wide mr-2">
      {label}:
    </span>
    {items.join(" · ")}
  </p>
);

export default function Resume() {
  const data = {
    name: "Abu Raihan",
    title: "Senior Software Engineer",

    contact: {
      phone: "+8801973789509",
      email: "aburaihaninbox@gmail.com",
      location: "Khulna, Bangladesh",
      linkedin: "linkedin.com/in/abura1han",
    },

    overview:
      "Senior Software Engineer with a strong product mindset and 4+ years of experience building scalable, high-performance systems. Proven ability to architect cloud-native solutions, optimize complex data flows, and deliver impactful features that improve user engagement and system reliability. Passionate about solving real-world problems through technology, with a growing focus on AI-driven platforms and developer infrastructure.",

    experience: [
      {
        title: "Senior Software Engineer",
        company: "Pikky Tech Pvt Ltd",
        location: "Hyderabad, India",
        period: "2022–Present",
        bullets: [
          "Led the design and implementation of multiple core product features, significantly increasing daily active users and engagement.",
          "Architected and maintained a scalable, efficient cloud infrastructure to support high-growth workloads.",
          "Identified and eliminated performance bottlenecks, resolving critical data loading issues and improving system responsiveness.",
          "Collaborated closely with product managers and engineering teams to deliver bi-weekly releases with zero critical regressions.",
        ],
      },
      {
        title: "Founder & Developer",
        company: "FindJobBot.com",
        location: "Global · Remote",
        period: "2026–Present",
        bullets: [
          "Founded and built an automated job-search service: users upload a resume once, and it scans job boards, company career pages, and remote and local portals every day.",
          "Developed a match-ranking engine that scores openings against each user's experience and alerts them when a relevant role is posted.",
          "Built an approval-gated application flow that submits tailored applications only after the user confirms each role.",
          "Added resume and LinkedIn profile reviews with suggested edits aligned to a user's target roles.",
        ],
      },
      {
        title: "Founder & Developer",
        company: "LiniarCity.com",
        location: "Khulna, Bangladesh",
        period: "2025–Present",
        bullets: [
          "Founded a platform aimed at solving key inefficiencies in Bangladesh’s real estate and rental ecosystem.",
          "Designed and built an intelligent recommendation system tailored to user preferences and needs.",
          "Developed a secure booking system to minimize fraud and streamline the rental process.",
          "Implemented a transparent review system to build trust and improve user decision-making.",
        ],
      },
      {
        title: "Senior Software Engineer",
        company: "Amarlodge.com",
        location: "Dhaka, Bangladesh",
        period: "2023–2024",
        bullets: [
          "Led product research, prototyping, and full-cycle development of SaaS solutions.",
          "Managed client feedback loops and consistently delivered projects on time and within scope.",
          "Collaborated cross-functionally to launch and scale core platform features.",
        ],
      },
      {
        title: "Founder & Developer",
        company: "Sylo.run",
        location: "Global · Remote",
        period: "2026–Present",
        bullets: [
          "Founded and built an AI presentation platform that drafts, designs, and updates slide decks directly from a company's business data.",
          "Integrated live data sources (Sheets, Stripe, Postgres, Notion, Drive) so every chart stays linked to its source and decks never go stale.",
          "Built sharing analytics showing who read a deck and where they dropped off, with suggested fixes to improve engagement.",
          "Developed automatic brand application and a market-watch feature that drafts responsive slides when competitors or markets change; customer data is encrypted and never used for model training.",
        ],
      },
      {
        title: "Founder & Developer",
        company: "HighX.dev",
        location: "Global . Remote",
        period: "2025–Present",
        bullets: [
          "Building an AI-native cloud platform for developers to create, deploy, and distribute AI applications and agents.",
          "Developed a modular AI package manager enabling reusable third-party services, agents, and tools.",
          "Driving innovation in next-generation AI infrastructure and developer ecosystems.",
        ],
      },
      {
        title: "Software Engineer",
        company: "MyQuranGoal",
        location: "Remote",
        period: "2024–Present",
        bullets: [
          "Engineered responsive, high-performance interfaces for a high-traffic platform.",
          "Enhanced user experience through performance optimization and intuitive design improvements.",
          "Contributed to product development from early research through implementation and iteration.",
        ],
      },
    ],

    education: [
      {
        degree: "High School Certificate",
        school: "Bangladesh Nevi School and Collage Khulna",
        location: "Khulna",
        year: "2018–2020",
      },
      {
        degree: "Dropout",
        school: "...",
        location: "Online",
        year: "2021->",
      },
    ],

    skills: {
      professional: [
        "System Architecture",
        "Product Thinking",
        "Scalable System Design",
        "Performance Optimization",
        "Serverless Architecture",
        "Edge Computing",
        "Cross-functional Collaboration",
        "Technical Leadership",
        "Cloud Services (AWS, CLoudflare, DigitalOcean)",
        "Web / Mobile / Desktop",
      ],

      technical: [
        "JavaScript / TypeScript",
        "Node.js / Bun / Deno",
        "Go",
        "Distributed Systems",
        "MongoDB / SQL",
        "API Design",
        "AI Systems & Agent Architecture",
        "Figma (for product collaboration)",
        "Git / CI-CD",
        "Docker",
        "Redis",
      ],
    },
  };


  return (
    <div className="min-h-screen bg-stone-200 py-10 px-4 font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        .font-body { font-family: 'EB Garamond', Garamond, Georgia, serif; }
        .font-display { font-family: 'Cormorant Garamond', 'EB Garamond', Georgia, serif; }
        .small-caps { font-variant: small-caps; }
        .paper { box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 10px 40px rgba(60,40,20,0.18); }
        @media print {
          body, .font-body { background: white !important; }
          .no-print { display: none !important; }
          .paper { box-shadow: none !important; margin: 0 !important; max-width: none !important; padding: 0 !important; }
        }
      `}</style>

      <button
        onClick={() => window.print()}
        className="no-print fixed top-4 right-4 z-50 bg-stone-900 text-stone-50 font-body text-sm px-4 py-1.5 rounded-sm shadow-lg hover:bg-stone-700 transition-colors"
      >
        Print / PDF
      </button>

      <div className="paper mx-auto max-w-[820px] bg-[#fffdf8] px-8 py-10 sm:px-16 sm:py-14 text-stone-900">
        {/* Header */}
        <header className="text-center">
          <h1 className="font-display text-5xl font-semibold uppercase tracking-[0.18em] sm:text-[54px]">
            {data.name}
          </h1>
          <p className="mt-2 text-[15px] italic text-stone-600">{data.title}</p>
          <div className="mt-4">
            <Ornament />
          </div>
          <p className="mt-4 text-[13px] text-stone-700 leading-relaxed">
            {data.contact.location}
            <span className="mx-2 text-stone-400">|</span>
            {data.contact.phone}
            <span className="mx-2 text-stone-400">|</span>
            {data.contact.email}
            <span className="mx-2 text-stone-400">|</span>
            {data.contact.linkedin}
          </p>
        </header>

        <SectionTitle>Profile</SectionTitle>
        <p className="text-[13.5px] leading-[1.65] text-stone-800 text-justify first-letter:font-display first-letter:text-4xl first-letter:font-semibold first-letter:float-left first-letter:leading-[0.9] first-letter:pr-2 first-letter:pt-1">
          {data.overview}
        </p>

        <SectionTitle>Professional Experience</SectionTitle>
        {data.experience.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}

        <SectionTitle>Core Skills</SectionTitle>
        <SkillRow label="Professional" items={data.skills.professional} />
        <SkillRow label="Technical" items={data.skills.technical} />

        <div className="mt-8">
          <Ornament />
          <p className="mt-3 text-center text-[11px] italic tracking-wide text-stone-500">
            References available upon request
          </p>
        </div>
      </div>
    </div>
  );
}
