/**
 * Single source of truth for everything rendered on the site.
 * Update this file to change content; components only read from it.
 */

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  siteUrl: string;
  github: string;
  linkedin: string;
  /** Path under /public */
  cvPath: string;
  about: string;
  languages: string[];
}

export type BulletGroup =
  | "Release & CI/CD"
  | "Security"
  | "Monitoring"
  | "Backend"
  | "Development";

export interface Bullet {
  text: string;
  /** Used to visually group bullets within one role. */
  group?: BulletGroup;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: Bullet[];
}

export interface Project {
  name: string;
  start: string;
  end: string;
  description: string;
  stack: string[];
  live?: string;
  source: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  start: string;
  end: string;
}

export const profile: Profile = {
  name: "Mohamed Isa",
  headline: "Mobile Engineer",
  location: "Sitra, Bahrain",
  email: "mohamed.isa.has@gmail.com",
  siteUrl: "https://mohamedisa.tech",
  github: "https://github.com/MohamedIsa",
  linkedin: "https://www.linkedin.com/in/mohamed-isa-0110b529b",
  cvPath: "/MohamedIsa_CV.pdf",
  about:
    "Mobile engineer shipping cross-platform iOS and Android apps with React Native, Expo and TypeScript, previously Flutter. Work goes beyond the UI layer: release pipelines and code signing, app security hardening and assessment, production monitoring, and Node.js/PostgreSQL backend work on AWS.",
  languages: ["Arabic", "English"],
};

/** Short capability list shown in the hero; drawn from the About text. */
export const focusAreas: string[] = [
  "Release pipelines & code signing",
  "App security hardening & assessment",
  "Production monitoring",
  "Node.js / PostgreSQL on AWS",
];

export const experience: Experience[] = [
  {
    company: "Array Innovation",
    role: "Software Engineer",
    start: "08/2025",
    end: "Present",
    bullets: [
      {
        group: "Release & CI/CD",
        text: "Owned the mobile release process: built CI/CD with EAS Build from Bitbucket Pipelines, managed code signing across multi-environment builds, and automated App Store and Google Play submission with EAS Submit.",
      },
      {
        group: "Release & CI/CD",
        text: "Led the migration of a production React Native app to the Expo ecosystem (Expo SDK 57, React Native 0.86, New Architecture), replacing legacy libraries with maintained Expo modules.",
      },
      {
        group: "Release & CI/CD",
        text: "Designed and prototyped OTA updates with EAS Update.",
      },
      {
        group: "Security",
        text: "Hardened app security with certificate pinning (SSL pinning), code obfuscation, secure token storage and RASP, and performed a mobile security assessment with MobSF and Frida.",
      },
      {
        group: "Security",
        text: "Remediated a known security vulnerability (CVE) by upgrading a Next.js web portal from v14 to v16.",
      },
      {
        group: "Monitoring",
        text: "Integrated crash reporting and performance monitoring with EAS Observe, and push notifications with Firebase Cloud Messaging (FCM).",
      },
      {
        group: "Backend",
        text: "Contributed to REST APIs with Node.js, Fastify, Express.js and PostgreSQL (Sequelize), deployed on AWS.",
      },
    ],
  },
  {
    company: "Ministry of Justice, Islamic Affairs and Waqf",
    role: "Web Developer Intern",
    start: "03/2025",
    end: "05/2025",
    bullets: [
      {
        text: "Built an interactive, accessible website from a Tajwid reference book.",
      },
    ],
  },
  {
    company: "Sama Bahrain HealthCare",
    role: "Frontend Developer Intern",
    start: "07/2024",
    end: "09/2024",
    bullets: [
      {
        text: "Built a pet care mobile app and website with Angular and Ionic, including booking and profile management, integrating REST APIs with the backend team.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "QuizApp",
    start: "10/2024",
    end: "12/2024",
    description:
      "Flutter quiz app on Firebase (Authentication, Firestore) with real-time quiz updates and student progress tracking.",
    stack: ["Flutter", "Dart", "Firebase"],
    source: "https://github.com/MohamedIsa/QuizApp",
  },
  {
    name: "Dental Clinic System",
    start: "02/2024",
    end: "05/2024",
    description:
      "Cross-platform Flutter app (web and mobile) for appointment booking using Firebase Authentication, Firestore, Storage and Hosting, with in-app patient–admin chat and admin-managed facility accounts.",
    stack: ["Flutter", "Dart", "Firebase"],
    live: "https://dental-clinic-f6971.firebaseapp.com",
    source: "https://github.com/MohamedIsa/Dental-Clinic-System",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Mobile",
    items: ["React Native", "Expo", "EAS", "Flutter", "Ionic"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "SQL"],
  },
  {
    label: "Release & Security",
    items: [
      "Mobile CI/CD",
      "Bitbucket Pipelines",
      "Code Signing",
      "MobSF",
      "Frida",
    ],
  },
  {
    label: "Backend & Cloud",
    items: [
      "Node.js",
      "Fastify",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS",
      "Linux",
    ],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "Angular"],
  },
];

export const education: Education = {
  degree: "B.Sc. in Software Engineering",
  school: "University of Bahrain",
  start: "09/2020",
  end: "01/2025",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
