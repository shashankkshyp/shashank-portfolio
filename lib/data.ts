export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  year?: string;
  badge?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  coursework: string[];
}

export interface PracticalExperienceItem {
  role: string;
  project: string;
  focus: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shashank Kashyap",
    eyebrow: "COMPUTER SCIENCE UNDERGRADUATE",
    title: "Full-Stack Developer × AI Engineer",
    subheading:
      "Computer Science undergraduate focused on full-stack development, AI engineering, and building scalable, interactive web applications.",
    aboutStatement: "Full-Stack Developer × AI Engineer",
    aboutBio:
      "Computer Science undergraduate specializing in modern full-stack development and AI engineering. Experienced in building scalable web architectures, interactive cloud-based developer tools, and low-latency voice platforms. Focused on writing clean, production-ready software using contemporary frameworks, distributed databases, and generative AI APIs.",
    email: "shashankkashyap2004@gmail.com",
    location: "Dehradun, Uttarakhand, India",
    github: "https://github.com/shashankkshyp",
    githubUsername: "shashankkshyp",
    linkedin: "https://linkedin.com/in/shashankkshyp",
    linkedinDisplay: "linkedin.com/in/shashankkshyp",
    status: "Available for engineering roles & collaborations",
  },

  skills: [
    {
      title: "Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      title: "Databases, AI & APIs",
      skills: [
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "REST APIs",
        "OpenAI API",
        "OpenAI Realtime API",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Clerk", "Inngest", "Sentry"],
    },
    {
      title: "Core Concepts",
      skills: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Problem Solving",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Leadership",
        "Time Management",
        "Adaptability",
        "Continuous Learning",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "nexus",
      title: "Nexus",
      tagline: "AI-Powered Cloud IDE",
      description:
        "Nexus is a browser-based AI-powered cloud IDE featuring real-time collaborative code editing, multi-file project management, and intelligent coding assistance.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS 4",
        "Convex",
        "OpenAI API",
        "CodeMirror 6",
        "WebContainer API",
      ],
      features: [
        "AI code suggestions & natural-language editing",
        "Conversational AI assistant & project generation",
        "Real-time multi-file collaboration via Convex",
        "In-browser code execution using WebContainer API",
        "GitHub integration & Clerk authentication",
        "Inngest background workflows & Sentry monitoring",
      ],
      githubUrl: "https://github.com/shashankkshyp",
      accentColor: "#6366f1",
    },
    {
      id: "resonex",
      title: "Resonex",
      tagline: "AI Voice & Text-to-Speech Platform",
      description:
        "Resonex is a full-stack AI-powered voice platform enabling users to generate speech and clone voices in real time.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "SQL Database",
        "Clerk Authentication",
        "Cloud Storage",
        "MODAL",
      ],
      features: [
        "AI text-to-speech & zero-shot voice cloning",
        "Real-time voice generation with low latency",
        "Interactive audio waveform visualization",
        "Audio history logging with playback management",
        "Secure user-isolated voice model storage",
        "Production-grade error monitoring & responsive UI",
      ],
      githubUrl: "https://github.com/shashankkshyp",
      accentColor: "#10b981",
    },
  ] as Project[],

  practicalExperience: [
    {
      role: "Architect & Lead Engineer",
      project: "Nexus — AI Cloud IDE",
      focus: "Browser OS Virtualization & Collaborative Systems",
      highlights: [
        "Engineered an in-browser code execution sandbox leveraging WebContainer API to run Node.js processes client-side with near-native performance.",
        "Implemented real-time synchronization pipelines using Convex reactive database to support multi-client code editing and cursor awareness.",
        "Integrated CodeMirror 6 with custom extensions for syntax parsing, AI code completion hooks, and inline diff projections.",
        "Orchestrated background job pipelines with Inngest and implemented end-to-end exception telemetry using Sentry.",
      ],
    },
    {
      role: "Full-Stack & Systems Engineer",
      project: "Resonex — AI Voice Platform",
      focus: "High-Throughput Audio Streaming & Model Orchestration",
      highlights: [
        "Constructed a low-latency speech generation architecture interfacing with MODAL serverless GPU containers for voice synthesis and cloning.",
        "Designed strict relational schemas using Prisma ORM on SQL database for granular user audio asset management and voice profiles.",
        "Implemented real-time client-side waveform rendering and audio chunk buffering using modern Web Audio APIs.",
        "Enforced multi-tenant security and session authorization using Clerk authentication alongside cloud storage policies.",
      ],
    },
  ] as PracticalExperienceItem[],

  education: {
    degree: "B.Tech in Computer Science and Engineering (AI/ML)",
    institution: "Shivalik College of Engineering",
    period: "2025 – 2028 (Expected)",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  } as EducationItem,

  achievements: [
    {
      title: "Team Lead — National-Level College Hackathon",
      organization: "Quantum University",
      year: "2025",
      badge: "Top 20 Finalist",
      description:
        "Led a team to design, develop, and present a functional full-stack software solution within a competitive national-level hackathon, ranking in the Top 20 finalists.",
    },
    {
      title: "National-Level Hackathon",
      organization: "Shivalik College of Engineering",
      badge: "Finalist",
      description:
        "Collaborated with a team to design and develop a full-stack software solution under strict time constraints, applying advanced problem-solving and rapid prototyping skills.",
    },
  ] as Achievement[],

  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ],
};
