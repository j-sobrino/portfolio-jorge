// Centralized portfolio content for easy edits

export const profile = {
  name: "Jorge Sobrino Fernández-Miranda",
  role: "MEng Maths & CS @ Imperial",
  tagline: "Mathematics & Computer Engineering student at Imperial College London with a strong foundation in software engineering. Experience building data pipelines, APIs, and user-focused tools, and eager to apply these skills in impactful SWE roles.",
  location: "London, UK",
  links: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/jorge-sobrino/",
    email: "mailto:jsobrinofm@gmail.com",
  },
};

import squarepointLogo from "@/assets/squarepoint-logo.jpg";
import thoughtMachineLogo from "@/assets/thought-machine-logo.png";
import bitcodeLogo from "@/assets/bitcode-logo.png";
import imperialLogo from "@/assets/imperial-logo.png";
import profilePhoto from "@/assets/foto-jorge.jfif";
import projectOpenWebUI from "@/assets/open-webui-home.png";
import projectReRoute from "@/assets/reroute.png";
import projectOsstrack from "@/assets/osstrack.png";

export const profileImage = profilePhoto;

export const experience = [
  {
    company: "Squarepoint Capital LLP",
    role: "Software Developer Intern",
    period: "Jun 2026 – Sep 2026",
    logo: squarepointLogo,
    points: [
      "Built a system that enforced engineering standards across the company: connected to external systems and evaluated checks against them.",
      "Surfaced results in a way teams could act on, designed to extend to new systems and checks without core changes, scaling to 2,000+ entities across the firm's service catalog.",
      "Profiled the system's I/O, compute, and memory usage to find and fix performance bottlenecks, cutting evaluation time from 17s to 1s.",
    ],
  },
  {
    company: "Thought Machine",
    role: "Software Engineering Intern",
    period: "Jul 2025 – Sep 2025",
    logo: thoughtMachineLogo,
    points: [
      "Developing an end-to-end data pipeline: consumed Kafka event streams, indexed Vault data in ElasticSearch, and exposed low-latency query endpoints over gRPC.",
      "Enabling flexible data search of 250M+ bank accounts.",
      "Designing and deploying a new API ensuring compatibility with the high-performance production systems.",
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
    title: "Local LLM Infrastructure",
    blurb: "Self-hosted language model infrastructure for local inference and deployment.",
    repoUrl: "https://github.com/j-sobrino/local-llm",
    image: projectOpenWebUI,
    details:
    "Part of my early journey into LLM infrastructure — understanding deployment, serving, and integration. Built a self-hosted language model stack with Ollama (Docker-based, GPU-enabled), exposing it via HTTP API and connecting to frontends like OpenWebUI and Langflow. Features include model selection, wake-on-LAN server activation, local network API exposure, and optional cloud deployment using RunPod. Focused on learning end-to-end flow, API processing, backend hosting alternatives to OpenAI, and gaining practical skills in GPU setup and deployment.",
    stack: ["Ollama", "Docker", "LLMs", "GPU", "API"],
  },
  {
    title: "ReRoute — Health-First Navigation App",
    blurb: "Award-winning app promoting walkable commutes.",
    repoUrl: "https://gitlab.doc.ic.ac.uk/pp1523/drping",
    websiteUrl: "https://pp1523.pages.doc.ic.ac.uk/drping/",
    image: projectReRoute,
    details:
      "Led UI/UX design for ReRoute, a health-focused navigation app to combat rising prediabetes rates. Conducted 50+ user interviews in London to inform design decisions. Applied user-centered design principles with rapid iteration, thin slicing, and prototyping. Won the Amadeus Prize for Best Project and selected by Amazon for mentorship.",
    stack: ["React Native", "User Research", "User-Centered Design", "Prototyping"],
    award: "1st Place - Imperial 2nd Year Project + Amadeus Prize",
  },
  {
    title: "Osstrack — Bone Health with Ultrasound AI",
    blurb: "Hackathon-winning tool to assess osteoporosis risk using ultrasound and ML.",
    websiteUrl: "https://osstrackhealth.com",
    image: projectOsstrack,
    details:
      "Built a deep-learning diagnostic interface using ultrasound images to assess bone density. Won Longevity x AI hackathon. Designed UI with Cursor AI and Lovable.",
    stack: ["Deep Learning", "Python", "Cursor AI", "Lovable", "UX Design"],
    award: "1st Place - Longevity x AI Hackathon",
  },
  {
    title: "Trading Desk Sentiment Pipeline — Onyx Assessment Centre",
    blurb: "Three-stage pipeline extracting quotes and sentiment from trading desk chat, correlated against price signals.",
    repoUrl: "https://github.com/j-sobrino/onyx-assessment-centre",
    image: "/placeholder.svg",
    details:
      "Take-home assessment for Onyx. Built a pipeline that extracts price quotes from trading desk messages with an LLM, classifies 29,000 messages across 65 trading days as bullish/bearish/neutral (Claude Haiku, validated at 90% agreement against Claude Sonnet), and correlates the resulting daily sentiment index against commodity price returns, surfacing a statistically significant lag-1 relationship.",
    stack: ["LLMs", "Python", "Pandas", "Time Series", "Data Pipelines"],
  },
];

export const education = [
  {
    school: "Imperial College London",
    degree: "MEng Mathematics and Computer Science",
    period: "2023 – 2027",
    notes: "First Class Honours. Modules: Graphs & Algorithms, SWE Design, Symbolic Reasoning, Operating Systems, AI, and more.",
    logo: imperialLogo,
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
  {
    title: "3rd Place, Spanish U18 Athletics Championship (Huelva)",
    org: "RFEA",
    date: "2021",
    details: "3rd place in the U-18 National Championships 4x100m relay, representing E.A. Majadahonda.",
  },
];

export const volunteering = [
  {
    title: "President, Imperial Spanish Society",
    period: "2025 – 2026",
    details: "Leading a 200+ member society. Coordinating events, sponsorships, and engagement.",
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
