"use client";

import Image from "next/image";
import { ReactNode } from "react";

const Avatar = () => (
  <div className="relative mx-auto w-32 h-32 mb-4">
    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
      <Image src={"/me-pro.jpeg"} alt="Abu Raihan" width={128} height={128} />
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500 mb-3 mt-1">
    {children}
  </h2>
);

const Divider = () => <div className="border-t border-slate-200 my-4" />;

const ContactItem = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
    <span className="text-slate-400 w-4 flex-shrink-0">{icon}</span>
    <span className="break-all">{text}</span>
  </div>
);

const SkillBadge = ({ label }: { label: string }) => (
  <span className="inline-block text-[11px] bg-slate-100 text-slate-600 rounded px-2 py-0.5 mb-1 mr-1">
    {label}
  </span>
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
  <div className="mb-5">
    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-0.5">
      // {title}
    </p>
    <p className="text-sm font-semibold text-slate-800 leading-tight">
      {company}{" "}
      <span className="font-normal text-slate-400">
        — {location} — {period}
      </span>
    </p>
    <ul className="mt-2 space-y-1.5">
      {bullets.map((b, i) => (
        <li
          key={i}
          className="flex gap-2 text-[12.5px] text-slate-600 leading-snug"
        >
          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const EducationItem = ({
  degree,
  school,
  location,
  year,
}: {
  degree: string;
  school: string;
  location: string;
  year: string;
}) => (
  <div className="mb-4 text-center">
    <p className="text-[12px] font-bold text-slate-800">{degree}</p>
    <p className="text-[11px] text-slate-500">{school}</p>
    <p className="text-[11px] text-slate-400">{location}</p>
    <p className="text-[11px] text-slate-400">{year}</p>
  </div>
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
        title: "Founder",
        company: "LiniarCity",
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
        title: "Founder",
        company: "HighX",
        location: "Remote",
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
      {
        title: "Senior Software Engineer",
        company: "Amarlodge Ltd.",
        location: "Dhaka, Bangladesh",
        period: "2023–2024",
        bullets: [
          "Led product research, prototyping, and full-cycle development of SaaS solutions.",
          "Managed client feedback loops and consistently delivered projects on time and within scope.",
          "Collaborated cross-functionally to launch and scale core platform features.",
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
    <div className="min-h-screen bg-slate-100 flex items-start justify-center py-8 px-4 font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .resume-shadow { box-shadow: 0 4px 40px 0 rgba(0,0,0,0.13); }
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .resume-shadow { box-shadow: none !important; }
        }
      `}</style>

      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="no-print fixed top-4 right-4 z-50 bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        Print / PDF
      </button>

      {/* Resume Card */}
      <div className="w-full max-w-4xl bg-white resume-shadow rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* LEFT SIDEBAR */}
          <div className="w-full md:w-[300px] md:min-w-[260px] bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-8 flex flex-col items-center md:items-stretch">
            {/* Avatar & Name */}
            <div className="flex flex-col items-center text-center mb-2">
              <Avatar />
              <h1 className="text-3xl font-black text-slate-800 leading-tight tracking-tight mt-1">
                {data.name}
              </h1>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mt-1">
                {data.title}
              </p>
            </div>

            <Divider />

            {/* Contact */}
            <SectionTitle>Contact</SectionTitle>
            <ContactItem
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              }
              text={data.contact.phone}
            />
            <ContactItem
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              text={data.contact.email}
            />
            <ContactItem
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              text={data.contact.location}
            />
            <ContactItem
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
              text={data.contact.linkedin}
            />

            <Divider />

            {/* Overview */}
            <SectionTitle>Professional Overview</SectionTitle>
            <p className="text-[12px] text-slate-500 leading-relaxed text-center md:text-left">
              {data.overview}
            </p>

            <Divider />

            {/* Education */}
            {/* <SectionTitle>Education</SectionTitle>
            <div>
              {data.education.map((e, i) => (
                <EducationItem key={i} {...e} />
              ))}
            </div> */}
          </div>

          {/* RIGHT MAIN */}
          <div className="flex-1 p-8">
            {/* Professional Experience */}
            <SectionTitle>Professional Experience</SectionTitle>
            {data.experience.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}

            <Divider />

            {/* Core Skills */}
            <SectionTitle>Core Skills</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                  // Professional
                </p>
                <div>
                  {data.skills.professional.map((s) => (
                    <SkillBadge key={s} label={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                  // Technical
                </p>
                <div>
                  {data.skills.technical.map((s) => (
                    <SkillBadge key={s} label={s} />
                  ))}
                </div>
              </div>
            </div>

            <Divider />

            {/* Footer */}
            <p className="text-center text-[10px] text-slate-300 tracking-widest uppercase mt-2">
              References available upon request
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
