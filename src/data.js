import fr from "./assets/fr.png";
import en from "./assets/en.png";
import ar from "./assets/ar.png";
import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { GoProject } from "react-icons/go";
import { MdWork } from "react-icons/md";

import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FiGithub } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const about = [
  {
    id: 1,
    icon: <MdWork />,
    title: "Experience",
    descri: "2+ months professional internship",
    descri1: "3+ years self-training & projects",
  },
  {
    id: 2,
    icon: <GoProject />,
    title: "Projects",
    descri: "6+ Full-Stack MERN applications",
    descri1: "4+ AI/ML, IoT & RAG systems",
  },
  {
    id: 3,
    icon: <GoProject />,
    title: "Technologies",
    descri: "9+ Programming Languages & Frameworks",
    descri1: "Full-Stack, IoT, AI/ML Expertise",
  },
];

export const socials = [
  {
    id: 1,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/nacer-boubkraoui-a98011206/",
  },
  {
    id: 2,
    icon: <GrFacebook />,
    link: "https://www.facebook.com/profile.php?id=100009028883020",
  },
  { id: 3, icon: <FaGithubSquare />, link: "https://github.com/boubnacer" },
  {
    id: 4,
    icon: <FaTwitter />,
    link: "https://twitter.com/NacerBoubkraoui",
  },
];

export const footerSocials = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nacer-boubkraoui-a98011206/",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100009028883020",
  },
  { id: 3, icon: <FiGithub />, link: "https://github.com/boubnacer" },
  {
    id: 4,
    icon: <FaTwitter />,
    link: "https://twitter.com/NacerBoubkraoui",
  },
];

export const languages = [
  {
    id: 1,
    name: "English",
    flag: en,
    proficiency: 85,
    level: "Advanced",
    skills: ["Reading", "Writing", "Speaking"],
    description: "Professional working proficiency in English with strong technical communication skills"
  },
  {
    id: 2,
    name: "Français",
    flag: fr,
    proficiency: 95,
    level: "Native",
    skills: ["Reading", "Writing", "Speaking"],
    description: "Native French speaker with excellent written and verbal communication"
  },
  {
    id: 3,
    name: "العربية",
    flag: ar,
    proficiency: 90,
    level: "Native",
    skills: ["Reading", "Writing", "Speaking"],
    description: "Native Arabic speaker with fluency in both Modern Standard Arabic and dialect"
  },
  {
    id: 4,
    name: "Tamazight",
    flag: ar,
    proficiency: 80,
    level: "Fluent",
    skills: ["Speaking"],
    description: "Fluent in Tamazight (Berber) with conversational proficiency"
  },
];

export const testmonials = languages;

export const contacts = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    title: "Email",
    email: "boubkraoui.nacer@gmail.com",
    link: "mailto:boubkraoui.nacer@gmail.com",
  },
  {
    id: 2,
    icon: <ImWhatsapp />,
    title: "Whatsapp",
    email: "+212 654-587-065",
    link: "https://api.whatsapp.com/send?phone=+212654587065",
  },
];

export const timelineElements = [
  {
    id: 1,
    title: "Master's Degree in Embedded Artificial Intelligence",
    location: "Université Ibn Zohr",
    descreption:
      "Currently pursuing Master's degree in Embedded Artificial Intelligence.",
    buttonText: "View AI Projects",
    date: "2024 - Present",
    icon: "school",
  },
  {
    id: 2,
    title: "Lost Objects Platform",
    location: "Personal Project - mafqoudat.com",
    descreption:
      "Complete web service with geolocation and notification system. Full-stack development with React, Node.js and MongoDB.",
    buttonText: "Visit Website",
    date: "2024 - Present",
    icon: "work",
  },
  {
    id: 3,
    title: "IoT Health Monitoring System",
    location: "Academic Project",
    descreption:
      "Embedded solution for vital parameters tracking using ESP32 and biometric sensors. Secure data transmission to cloud dashboard.",
    buttonText: "View Project",
    date: "2024",
    icon: "work",
  },
  {
    id: 4,
    title: "RAG Web Application",
    location: "Academic Project",
    descreption:
      "Document-based Q&A application using MERN stack. Features: document upload, OpenAI API integration, contextual response generation.",
    buttonText: "View Project",
    date: "2024",
    icon: "work",
  },
  {
    id: 5,
    title: "RAG Android Application",
    location: "Academic Project",
    descreption:
      "Native mobile application with Java. Same RAG functionality as web version, optimized for mobile devices with intuitive UI.",
    buttonText: "View Project",
    date: "2024",
    icon: "work",
  },
  {
    id: 6,
    title: "Frontend Developer Intern",
    location: "AJICOD, Dcheira El Jihadia",
    descreption:
      "Developed user interface for school activity management system using Vue.js. Created reusable components and optimized performance.",
    buttonText: "View Projects",
    date: "May 2021 - July 2021",
    icon: "work",
  },
  {
    id: 7,
    title: "Professional License in Embedded Computer Systems",
    location: "Université Ibn Zohr",
    descreption:
      "Professional License with honors in Embedded Computer Systems",
    buttonText: "View Academic Projects",
    date: "2018 - 2021",
    icon: "school",
  },
  {
    id: 8,
    title: "Baccalaureate in Physical and Chemical Sciences",
    location: "Lycée Al Arak, Taroudant",
    descreption:
      "Baccalaureate with honors in Physical and Chemical Sciences",
    buttonText: "View Academic Record",
    date: "June 2018",
    icon: "school",
  },
];

// Optional: Add technical skills section
export const technicalSkills = [
  {
    id: 1,
    title: "Frontend Development",
    description: "React, Vue.js, JavaScript, HTML5, CSS3, TailwindCSS",
    icon: "🎨"
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Node.js, Express, REST APIs, MongoDB",
    icon: "⚙️"
  },
  {
    id: 3,
    title: "Programming Languages",
    description: "JavaScript, Python, C, Java",
    icon: "💻"
  },
  {
    id: 4,
    title: "IoT & Embedded Systems",
    description: "ESP32, Arduino, C Programming, Biometric Sensors",
    icon: "🔌"
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    description: "OpenAI API, RAG Systems, Document Processing",
    icon: "🤖"
  },
  {
    id: 6,
    title: "Mobile Development",
    description: "Android Studio, Java, Native Android Development",
    icon: "📱"
  },
  {
    id: 7,
    title: "DevOps & Tools",
    description: "Git/GitHub, VS Code, MongoDB Atlas, Postman",
    icon: "🛠️"
  },
  {
    id: 8,
    title: "Modeling & Design",
    description: "UML, Merise (Database Modeling)",
    icon: "📊"
  },
  {
    id: 9,
    title: "Operating Systems",
    description: "Linux, Windows",
    icon: "🖥️"
  }
];
