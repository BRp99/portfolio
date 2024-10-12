import {
  mobile,
  backend,
  ubi,
  sen,
  assec,
  code,
  creator,
  web,
  javascript,
  py,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  oldPortfolio,
  bootstrap,
  figma,
  reactNative,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "React Native",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "CMS Integration",
    icon: backend,
  },
  {
    title: "Responsive",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
]

const experiences = [
  {
    title: "Web Developer",
    company_name: "Assec sim",
    icon: assec,
    iconBg: "#383E56",
    date: "Jul 2024 - at present",
    points: [
      "Developing and maintaining web and mobile applications using React Native and Bootstrap.",
      "Collaborating with cross-functional teams including designers, product managers and other developers.",
      "Implementing responsive design, ensuring cross-browser compatibility, unit testing, ERP (Enterprise Resource Planning) and CRM (Customer Relanshionship Managment).",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Web Design.",
    ],
  },
  {
    title: "Recognition of Merit",
    company_name: "University of Beira Interior",
    icon: ubi,
    iconBg: "#383E56",
    date: "15 May 2024",
    points: ["Dissertation in Sports Sciences - 18/20"],
  },
  {
    title: "Software Engineer",
    company_name: "SensoMatt",
    icon: sen,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Use Python to detect and analyze the COCO and MPII datasets, extracting images with keypoint annotations of humans in various poses and everyday activities.",
      "Compare and analyze both models in terms of precision and accuracy using metrics such as percentage error (PE), percentage of correct keypoints (PCK), mean per-joint position error (MPJPE), as well as processing time and speed.",
      "Carry out research and a comparative analysis of the company's competing products, classifying them according to their specific characteristics.",
    ],
  },
  {
    title: "MSc in Sports Science",
    company_name: "University of Beira Interior",
    icon: ubi,
    iconBg: "#383E56",
    date: "Mar 2023 ",
  },
  {
    title: "Self-taught: My journey into programming",
    company_name: "By myself",
    icon: code,
    iconBg: "#383E56",
    // date: "Dec 2022 - Jan 2024",
    date: "Dec 2022",
    points: [
      "During the stages of my Master's thesis in Sports Science, I developed a strong interest in Computer Science. After completing my thesis in March 2023, I delved more deeply into a self-taught journey in the world of programming.",
      "I started by building several small, undocumented projects in JavaScript to explore fundamental concepts, such as math and tax calculators. This hands-on approach gave me a solid foundation in programming logic. Later, I shifted my focus to frontend development, creating classic projects like a To-Do List, a Hangman Game, and more.",
      "A few months into my journey, I began learning React with TypeScript. I applied these skills by developing an e-commerce application using a placeholder backend API, as well as building my own portfolio.",
      "Now, I'm working in my second position within the tech industry.",
    ],
  },
]

const projects = [
  {
    name: "My old portfolio",
    description: "This portfolio was the result of my journey during 2023, a testimony of my learning, improvement and passion for development.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: oldPortfolio, //change
    source_code_link: "https://github.com/BRp99/BRp99.github.io",
  },
  // {
  //   name: "This portfolio",
  //   description: "Bla Bla Bla.",
  //   tags: [
  //     {
  //       name: "some",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "thing",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "here",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: oldPortfolio, //change
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Casinha da Praia",
  //   description: "Bla bla bla FIX height cards.",
  //   tags: [
  //     {
  //       name: "s",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "s",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "s",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: oldPortfolio, //change
  //   source_code_link: "https://github.com/",
  // },
]

export { services, technologies, experiences, projects }
