export interface Project {
  id: number;
  name: string;
  description: string;
  github: string;
  live?: string;
}

export interface Projects {
  title: string;
  projects: Project[];
}

export const projectsSection: Projects = {
  title: "My Work",
  projects: [
    {
      id: 1,
      name: "Web Development Project",
      description:
        "A web-based application to create and manage questionnaires using PHP, HTML/CSS, JavaScript, and MySQL.",
      github: "https://github.com/MohammedBaqerAdnan/WebDevolpment_Project",
    },
    {
      id: 2,
      name: "Dental Clinic System",
      description:
        "A cross-platform app using Flutter and Firebase for managing dental clinic operations.",
      github: "https://github.com/MohamedIsa/Dental-Clinic-System",
      live: "https://dental-clinic-f6971.firebaseapp.com/",
    },
    {
      id: 3,
      name: "QuizApp",
      description:
        "A Flutter app that allows students to take quizzes with Firebase for storage.",
      github: "https://github.com/MohamedIsa/QuizApp",
    },
    {
      id: 4,
      name: "QuizHub",
      description:
        "A Kahoot-like website built with React and Supabase for real-time quiz functionality.",
      github: "https://github.com/MohamedIsa/QuizHub",
      live: "https://quizhub.me/",
    },
  ],
}; 