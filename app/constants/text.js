import sample1 from "../../public/sample1.jpeg";
import sample2 from "../../public/sample2.jpeg";
import sample3 from "../../public/sample3.jpeg";
import sample4 from "../../public/sample4.jpeg";

import c1 from "../../public/c1.jpeg";

export const PROFILE = {
  name: "Haroun Kassouri",
  location: "Dublin, Ireland 🇮🇪",
  message: "Hello, Welcome to my Website",
};

export const PROJECTS = [
  {
    name: "Project 1",
    image: sample1,
    url: "https://github.com", 
  },
  {
    name: "Project 2",
    image: sample2,
    url: "https://github.com", 
  },
  {
    name: "Project 3",
    image: sample3,
    url: "https://github.com", 
  },
  {
    name: "Project 4",
    image: sample4,
    url: "https://github.com",
  }
];

export const SKILLS = [
  "Frameworks: React, Angular, Next.js",
  "Languages: Java, Python",
  "Languages: HTML, CSS/TailwindCSS, JavaScript, Typescript",
  "TechnologiesNode.js, Django, Docker",
  "Databases: PostgreSQL, MySQL, MongoDB",
];

export const EXPERIENCES = [
  {
    img: c1,
    year: "January 2024 - August 2024",
    role: "Full Stack Software Engineer Intern",
    company: "Department of Agriculture, Food and Marine",
    description: [
      "______________________________________________________________________________________",
      "Contributed to the 'Digital Forms' platform, digitizing essential company forms. Utilized Angular (HTML, CSS, TypeScript) for front-end and integrated with backend systems, enhancing departmental efficiency.",
      "Spearheaded a fully digital new hire onboarding process with Angular and Oracle databases. Reduced onboarding time, resource usage, and improved data accuracy for thousands of future employees.",
      "Assisted with migrating critical forms from PAM to Kogito, including modifying existing code and automating workflows. Improved internal communication through automated emails and enhanced form submission speed and reliability across the company.",
      "Connected Angular-based forms with Oracle databases, ensuring secure data exchange. Utilized Node.js for server-side logic, strengthening front-end and back-end integration and ensuring data integrity.",
      "______________________________________________________________________________________"
    ],
    technologies: ["Angular", "TypeScript", "HTML/CSS", "Node.js", "Kogito", "Oracle"],
  },
];