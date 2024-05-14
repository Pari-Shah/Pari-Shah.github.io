import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  cplusplusIcon,
  cIcon,
  csharpIcon,
  linuxIcon,
  bashIcon,
  angularIcon,
  azureIcon,
  jiraIcon,
  netIcon,
  sqlIcon,
  swiftIcon,
  typescriptIcon,
  xcodeIcon,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  eslintIcon,
  pyIcon,
  nodeIcon,
  figmaIcon,
  biquadris,
  paint,
  pdfReader,
  watEvent,
  waterloo,
  bdo,
  limelight,
  newfront,
  ford,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  eslintIcon,
  pyIcon,
  nodeIcon,
  figmaIcon,
  waterloo,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
];

const projects = [
  {
    name: "Biquadris",
    description: 'A multiplayer command-line and GUI version of Tetris! This project was developed with two other group members in C++ using OOP principles and the Observer, MVC, and Factory design patterns. We created complex UML diagrams to plan class relationships and develop well-structured code. The project was built on Linux environment and consisted of 50+ program files using Git and Visual Studio.',
    image: biquadris,
  },
  {
    name: 'PaintIt',
    description: 'A recreation of Microsoft Paint, coded in Java! The application allows users to draw various shapes, stroke lines, colour them, and erase them, with very accurate hit-test detection along with save, import, and export features, using IntelliJ IDEA.',
    image: paint,
  },
  {
    name: 'WatEvent',
    description: 'An interactive website that allows students at the University of Waterloo to register for and manage club events, using React for the frontend and MySQL relational database to store event information in the backend.',
    image: watEvent,
  },
  {
    name: 'PDF Reader',
    description: 'An Android application intended to allow users to annotate and highlight text on any multi-page PDF document, and erase annotations. A complex feature of this app is allowing users to zoom and pan the document, with a highly accurate gesture detection mechanism! This project was developed using the MVC design pattern to keep annotations on each page independent of other pages.',
    image: pdfReader,
  },
];

const experiences = [
  {
    name: "BDO Canada",
    description: "As a Software Consultant at BDO, I designed, implemented, and managed multiple client-driven websites, working with the frontend using Angular, TypeScript, HTML, and CSS, as well as the backend using ASP.NET, Entity Framework Core, and C#. I also created project-specific technical documentation to help new developers grasp the project's workflow easily. Using Azure DevOps and Git, I created pull requests and deployed code using Azure CI/CD Pipelines.",
    image: bdo,
  },
  {
    name: 'Newfront Insurance',
    description: "Being a Software Engineer at Newfront, I built an automated Github Pull Request creation service using Typescript AST to improve developer productivity by 50%. I also maintained a website to visualize insurance forms using React, and implemented APIs using Next.js. I presented many interactive demos and had the opportunity to act as a Project Manager to conduct internal project planning.",
    image: newfront,
  },
  {
    name: 'Ford Motor Company',
    description: "As a Software Developer at Ford, I implemented high-volume software solutions in C++ for infotainment systems to support the projection of Apple CarPlay and Android Auto, and also built Android applications in Java for AOSP automotive emulators using Android Studio.",
    image: ford,
  },
  {
    name: 'Limelight Platform',
    description: "As a Quality Assurance Analyst at Limelight Platform, I created and executed manual tests for web-based SaaS and iOS applications to improve product quality. Working in a fast-paced Agile environment, I documented defects using JIRA, Confluence, & TestRail.",
    image: limelight,
  },
];

const icon = {
  image: [waterloo],
};

const skills = [
  {
    id: 'c++',
    title: 'C++',
    icon: cplusplusIcon,
  },
  {
    id: 'c',
    title: 'C',
    icon: cIcon,
  },
  {
    id: 'csharp',
    title: 'C#',
    icon: csharpIcon,
  },
  {
    id: 'typescript',
    title: 'Typescript',
    icon: typescriptIcon,
  },
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
  },
  {
    id: 'aws',
    title: 'AWS',
    icon: awsIcon,
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
  },
  {
    id: 'swift',
    title: 'Swift',
    icon: swiftIcon,
  },
  {
    id: 'xcode',
    title: 'XCode',
    icon: xcodeIcon,
  },
  {
    id: 'net',
    title: '.NET Core',
    icon: netIcon,
  },
  {
    id: 'linux',
    title: 'Linux',
    icon: linuxIcon,
  },
  {
    id: 'sql',
    title: 'SQL',
    icon: sqlIcon,
  },
  {
    id: 'azure',
    title: 'Azure',
    icon: azureIcon,
  },
  {
    id: 'angular',
    title: 'Angular',
    icon: angularIcon,
  },
  {
    id: 'bash',
    title: 'Bash',
    icon: bashIcon,
  },
  {
    id: 'jira',
    title: 'Jira',
    icon: jiraIcon,
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  projects,
  experiences,
  icon,
  skills,
  markerSvg,
  icons,
};
