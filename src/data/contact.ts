export interface ContactLink {
  name: string;
  url: string;
  icon: string;
}

export interface Contact {
  title: string;
  description: string;
  links: ContactLink[];
}

export const contactSection: Contact = {
  title: "Get in Touch",
  description:
    "I'd love to hear from you. Feel free to reach out via email or social media.",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/MohamedIsa",
      icon: "https://skillicons.dev/icons?i=github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-isa122/",
      icon: "https://skillicons.dev/icons?i=linkedin",
    },
    {
      name: "Email",
      url: "mailto:mohamed.isa.has@gmail.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
  ],
}; 