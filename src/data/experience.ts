export interface Experience {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
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
      company: "Sama Health Care",
      year: "July-2024 - Sept-2024",
      description:
        "Developing a cross-platform and full-stack website and mobile app using Ionic-Angular and Laravel for the backend.",
    },
  ],
};

