// Centralized portfolio content for easy edits

export const profile = {
  name: "Jorge Sobrino Fernández-Miranda",
  role: "MEng Maths & CS @ Imperial",
  tagline: "Computer engineering and Mathematics background, now breaking into AI tooling. Focused on large language models and building AI-powered tools.",
  location: "London, UK",
  links: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/jorge-sobrino/",
    email: "mailto:jsobrinofm@gmail.com",
  },
};

import thoughtMachineLogo from "@/assets/thought-machine-logo.png";
import bitcodeLogo from "@/assets/bitcode-logo.png";
import imperialLogo from "@/assets/imperial-logo.png";
import googleLogo from "@/assets/google-logo.png";
import profilePhoto from "@/assets/foto-jorge.jfif";
import projectStudy from "@/assets/project-study-planner.jpg";
import projectBanking from "@/assets/project-mobile-banking.jpg";
import projectChat from "@/assets/project-realtime-chat.jpg";
import projectOpenWebUI from "@/assets/open-webui-home.png";
import projectReRoute from "@/assets/reroute.png";
import projectOsstrack from "@/assets/osstrack.png";

export const profileImage = profilePhoto;

export const experience = [
  {
    company: "Thought Machine",
    role: "Software Engineering Intern — Vault Bridge Team",
    period: "Jul 2025 – Sep 2025",
    logo: thoughtMachineLogo,
    points: [
      "Developed an end-to-end data pipeline using Kafka, ElasticSearch, Go, and gRPC.",
      "Enabled 250M+ accounts to be queried via a new Rich Query API.",
      "Shipped Bridge API and index migration tooling with Kubernetes deployment.",
      "Accelerated Vault’s ecosystem by unblocking integrations and advanced user journeys.",
    ],
  },
  {
    company: "Bitcode Technology SL",
    role: "Software Engineering Intern",
    period: "Dec 2024 – Jan 2025",
    logo: bitcodeLogo,
    points: [
      "Built a C# payroll automation tool reducing processing time by 95%.",
      "Migrated backend from SQL Server to SQLite for lightweight deployment.",
      "Implemented encrypted payroll distribution and tested key logic components.",
      "Researched licensing strategies for SME rollout.",
    ],
  },
];

export interface ProjectItem {
  title: string;
  blurb: string;
  repoUrl?: string;
  websiteUrl?: string;
  image: string;
  details: string;
  stack: string[];
  award?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "DSL AI — Natural Language Interface for Financial DSLs",
    blurb: "LLM-driven tooling for designing financial products in natural language.",
    repoUrl: "https://github.com/yourhandle/dsl-ai",
    websiteUrl: "https://dsl-ai-demo.vercel.app",
    image: projectStudy,
    details:
      "Prototyping an AI-powered platform that converts structured English into DSL code for financial product configuration. Targeting faster iteration, documentation, and testing.",
    stack: ["LLMs", "Prompt Engineering", "NLP", "Software Design"],
  },
  {
    title: "Local LLM Server & RAG Stack",
    blurb: "Private AI infrastructure with local inference and retrieval-augmented generation.",
    repoUrl: "https://github.com/yourhandle/rag-stack",
    image: projectOpenWebUI,
    details:
      "Built a secure, self-hosted LLM backend with Ollama + Docker for SMEs, integrating local RAG capabilities. Prioritized data privacy and on-prem control.",
    stack: ["Ollama", "Docker", "LLMs", "TypeScript", "RAG"],
  },
  {
    title: "ReRoute — Health-First Navigation App",
    blurb: "Award-winning app promoting walkable commutes.",
    websiteUrl: "https://reroute-app.netlify.app",
    image: projectReRoute,
    details:
      "Led UI/UX design for a navigation app encouraging walking to combat prediabetes. Informed by 50+ user interviews. Won Imperial’s 2nd Year Project competition + Amadeus Prize.",
    stack: ["Figma", "React Native", "User Research", "HealthTech"],
    award: "1st Place - Imperial 2nd Year Project + Amadeus Prize",
  },
  {
    title: "Osstrack — Bone Health with Ultrasound AI",
    blurb: "Hackathon-winning tool to assess osteoporosis risk using ultrasound and ML.",
    websiteUrl: "https://osstrack.ai",
    image: projectOsstrack,
    details:
      "Built a deep-learning diagnostic interface using ultrasound images to assess bone density. Won Longevity x AI hackathon. Designed UI with Cursor AI and Lovable.",
    stack: ["Deep Learning", "Python", "Cursor AI", "Lovable", "UX Design"],
    award: "1st Place - Longevity x AI Hackathon",
  },
];

export const education = [
  {
    school: "Imperial College London",
    degree: "MEng Mathematics and Computer Science",
    period: "2023 – 2027",
    notes: "First Class Honours. Modules: Graphs & Algorithms, SE Design, Symbolic Reasoning, Operating Systems.",
    logo: imperialLogo,
  },
  {
    school: "Google",
    degree: "Machine Learning Course",
    period: "2024",
    notes: "Completed to learn the mathematical foundations and theoretical background behind large language models.",
    logo: googleLogo,
    link: "https://developers.google.com/machine-learning/crash-course",
  },
  {
    school: "British Council School of Madrid",
    degree: "Título de Bachiller",
    period: "2021 – 2023",
    notes: "9.9 GPA. 6 Honours. Finalist in Declamation contest on AI & digital ethics.",
  },
  {
    school: "Mathematical Thinking School Miguel de Guzmán (EPM)",
    degree: "Advanced Math Programme",
    period: "2012 – 2023",
    notes: "Weekly math lectures, robotics labs, ethical hacking course.",
  },
];

export const languages = [
  { name: "Spanish", level: "Native", flag: "🇪🇸", countryCode: "es" },
  { name: "English", level: "Native (C2 - Grade A)", flag: "🇬🇧", countryCode: "gb" },
  { name: "French", level: "Bilingual", flag: "🇫🇷", countryCode: "fr" },
  { name: "Chinese", level: "Basic (HSK2)", flag: "🇨🇳", countryCode: "cn" },
];

export const techSkills = {
  languages: ["Python", "Go", "Java", "Kotlin", "C#", "C", "Scala", "JavaScript", "Haskell"],
  tools: ["Git", "CI/CD", "Kubernetes", "Kafka", "ElasticSearch", "Docker", "gRPC", "SQLite"],
  web: ["HTML", "CSS", "JavaScript", "Cursor AI", "Lovable"],
};

export const awards = [
  {
    title: "1st Place, Imperial 2nd Year Project Competition",
    org: "Imperial College London",
    date: "May 2025",
    details: "Won Amadeus Prize for 'ReRoute'. Selected by Amazon for mentorship.",
  },
  {
    title: "1st Place, Longevity x AI Hackathon",
    org: "Longevity & AI",
    date: "May 2025",
    details: "Built Osstrack. £2K cash prize + £5K cloud credits.",
  },
  {
    title: "Silver Medal, Spanish Math Olympiad Regionals",
    org: "RSME",
    date: "June 2023",
    details: "Top ranking in problem-solving (algebra, combinatorics, geometry).",
  },
];

export const volunteering = [
  {
    title: "President, Imperial Spanish Society",
    period: "2025 – 2026",
    details: "Led 200+ member society. Coordinated events, sponsorships, and engagement.",
  },
  {
    title: "Volunteering in Chame, Panama (ONGVoluntariado)",
    period: "Aug – Sep 2024",
    details: "Led PE workshops. Tutored children with learning difficulties.",
  },
  {
    title: "Red Cross Madrid",
    period: "2020 – 2024",
    details: "Led youth education workshops. Contributed to flood relief and aid campaigns.",
  },
];
