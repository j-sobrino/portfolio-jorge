// Centralized portfolio content for easy edits
// Update this file to change your portfolio data in one place.

export const profile = {
  name: "Jorge Sobrino Fernández-Miranda",
  role: "Software Engineering Student",
  tagline: "Building reliable, user-first software. Seeking Summer '26 internships.",
  location: "London, UK",
  links: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle/",
    email: "mailto:you@example.com",
  },
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
  logo: string;
};

import thoughtMachineLogo from "@/assets/thought-machine-logo.png";
import bitcodeLogo from "@/assets/bitcode-logo.png";

export const experience: ExperienceItem[] = [
  {
    company: "Thought Machine",
    role: "Software Engineering Intern",
    period: "Jun 2024 – Aug 2024",
    logo: thoughtMachineLogo,
    points: [
      "Built a fast React UI with type-safe APIs.",
      "Improved load times by ~30% via code-splitting and caching.",
      "Wrote unit tests and added CI checks for reliability.",
    ],
  },
  {
    company: "Bitcode Technology SLU",
    role: "Research Assistant",
    period: "Jan 2024 – May 2024",
    logo: bitcodeLogo,
    points: [
      "Prototyped data pipelines and visualizations.",
      "Collaborated in a small team with agile rituals.",
    ],
  },
];

export type ProjectItem = {
  title: string;
  blurb: string;
  repoUrl: string;
  image: string;
  details: string;
  stack: string[];
};

import projectStudy from "@/assets/project-study-planner.jpg";
import projectBanking from "@/assets/project-mobile-banking.jpg";
import projectChat from "@/assets/project-realtime-chat.jpg";
import imperialLogo from "@/assets/imperial-logo.png";
import profilePhoto from "@/assets/foto-jorge.jfif";

export const profileImage = profilePhoto;

export const projects: ProjectItem[] = [
  {
    title: "Wacc Compiler",
    blurb: "Full-stack compiler development with functional programming.",
    repoUrl: "https://github.com/yourhandle/wacc-compiler",
    image: projectStudy, // Using placeholder image for now
    details:
      "Developed a full-stack compiler for the Wacc language, implementing both the front-end (lexical analysis, parsing, semantic validation) and back-end (internal program representation, error handling, and optimization) using Scala (Parsley). Collaborated in a team of 4, leveraging GitLab CI/CD, automated testing, and agile workflows to ensure code quality, maintainability, and efficient integration of new features.",
    stack: ["Scala", "Parsley", "GitLab CI/CD", "Functional Programming"],
  },
  {
    title: "AI Study Planner",
    blurb: "Plan smarter with adaptive schedules and progress insights.",
    repoUrl: "https://github.com/yourhandle/ai-study-planner",
    image: projectStudy,
    details:
      "I built an AI-assisted planner that generates study blocks based on deadlines and focus windows, with progress charts and reminders.",
    stack: ["React", "TypeScript", "Tailwind", "OpenAI API"],
  },
  {
    title: "Mobile Banking UI",
    blurb: "Clean finance flows with transfers and analytics.",
    repoUrl: "https://github.com/yourhandle/mobile-banking-ui",
    image: projectBanking,
    details:
      "A responsive, accessible banking interface prototype featuring transaction history, insights, and money movement flows.",
    stack: ["React", "TypeScript", "Radix", "Recharts"],
  },
  {
    title: "Realtime Chat",
    blurb: "Typing indicators, presence, and channels.",
    repoUrl: "https://github.com/yourhandle/realtime-chat",
    image: projectChat,
    details:
      "A performant chat experience with channel lists, message threads, and presence indicators.",
    stack: ["React", "TypeScript", "WebSocket"],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  notes?: string;
  logo?: string;
};

export const education: EducationItem[] = [
  {
    school: "Imperial College London",
    degree: "B.S. in Computer Science",
    period: "2022 – 2026",
    notes: "Relevant coursework: Algorithms, Systems, Databases, HCI",
    logo: imperialLogo,
  },
];

export const languages = [
  { name: "Spanish", level: "Native", flag: "🇪🇸" },
  { name: "English", level: "Native", flag: "🇬🇧" },
  { name: "French", level: "Bilingual", flag: "🇫🇷" },
  { name: "Chinese", level: "Basic", flag: "🇨🇳" },
];
