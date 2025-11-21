import { About } from "./about";

export interface Experience extends About {
  id: number;
  company: string;
  year: string;
  skills?: string[];
}

export interface ExperienceSection {
  title: string;
  experiences: Experience[];
}

export const experienceSection: ExperienceSection = {
  title: "Experience",
  experiences: [
    {
      id: 1,
      title: "Front-End Developer Intern",
      company: "Sama Bahrain HealthCare",
      year: "July-2024 - Sept-2024",
      description:
        "Developing a cross-platform and full-stack website and mobile app using Ionic-Angular and Laravel for the backend.",
      skills: ["Ionic", "Angular", "Laravel", "MySQL", "Firebase Storage"],
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "Ministry of Justice, Islamic Affairs and Waqf",
      year: "March-2025 - May-2025",
      description:
        "Google Sites was used to turn a book into a website, creating and organizing pages for reading and ease of navigation while guaranteeing device responsiveness and accessibility.",
      skills: ["Google Sites"],
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Array Innovation",
      year: "Aug-2025 - Nov-2025",
      description:
        "Working on a project involving the development of a mobile application using React-Native for the frontend and Express.js with PostgreSQL for the backend.",
      skills: [
        "React-Native",
        "TypeScript",
        "Material UI",
        "Express.js",
        "AWS",
        "Sequelize",
        "PostgreSQL",
      ],
    },
  ],
};
