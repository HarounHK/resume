import sample1 from "../../public/sample1.jpeg";
import sample2 from "../../public/sample2.jpeg";
import sample3 from "../../public/sample3.jpeg";
import sample4 from "../../public/sample4.jpeg";

import c1 from "../../public/c1.jpeg";
import c2 from "../../public/c2.jpeg";

import { FaGithub, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
      "Spearheaded the development of a digital onboarding system, utilizing Angular for the front-end and Oracle databases for backend storage. This initiative reduced onboarding time and resource usage, supported thousands of new hires, and streamlined HR operations.",
      'Contributed to the "Digital Forms" platform, enhancing efficiency across departments by digitizing essential forms. Used Angular (HTML, CSS, TypeScript) for front-end development and integrated with backend systems.',
      "Led the migration of business-critical forms from the legacy PAM system to Kogito. Re-engineered workflows and modified code for seamless integration, resulting in improved internal communication and faster, more reliable form submissions.",
      "Integrated Angular-based front-end with Oracle databases and used Node.js for server-side logic and API management. Collaborated with database developers to ensure secure data exchange and system functionality.",
      "______________________________________________________________________________________"
    ],
    technologies: ["Angular", "TypeScript", "HTML/CSS", "Node.js", "Kogito", "Oracle"],
  },
  {
    img: c2,
    year: "August 2024 - Present",
    role: "FreeLance Software Engineer",
    company: "Self Employed",
    description: [
      "______________________________________________________________________________________",
      'Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler.',
      "Filler FillerFiller Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler.",
      "______________________________________________________________________________________"
    ],
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Node.js"],
  },
];

export const SOCIALS = [
  {icon: <FaGithub/>, path:"https://github.com/HarounHK"},
  {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/harounkassouri/"},
  {icon: <FaGlobe/>, path:"https://harounkassouri.com/"},
  {icon: <FaEnvelope/>, path:"mailto:haroun.kassouri@outlook.com"},
]