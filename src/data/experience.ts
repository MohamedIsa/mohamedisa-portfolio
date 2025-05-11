export interface Experience {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
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
      skills: ["Ionic", "Angular", "Laravel", "MySQL", "Firebase Storage"]
    },
    {
      id:2,
      title:"Web Developer Intern",
      company: "Ministry of Justice, Islamic Affairs and Waqf",
      year: "March-2025 - May-2025",
      description:
        "Google Sites was used to turn a book into a website, creating and organizing pages for reading and ease of navigation while guaranteeing device responsiveness and accessibility.",
      skills: ["Google Sites"]
    },
  ],
};

