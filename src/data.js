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
    descri: "2+ months graduation project",
    descri1: "3+ months self-training",
  },
  {
    id: 2,
    icon: <GoProject />,
    title: "Projects",
    descri: "15+ ReactJs mini projets",
    descri1: "2+ MongoDB/ExpressJs/ReactJs/NodeJs projects",
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
    link: "mailto:boubkraoui.nacer@email.com",
  },
  {
    id: 2,
    icon: <ImWhatsapp />,
    title: "Whatsapp",
    email: "+212654587065",
    link: "https://api.whatsapp.com/send?phone=+212654587065",
  },
];

export const timelineElements = [
  {
    id: 1,
    title: "Entreprise AJICOD",
    location: "Dcheira El Jihadia",
    descreption:
      "Il s'agit d'un projet de fin d'année, dans lequel j'ai travaillé sur le front-end du Site Web qui fait la gestion des activités des écoles, En utilisant le framework VueJs.",
    buttonText: "View Frontend projects",
    date: "15/05/2021 - 05/07/2021",
    icon: "work",
  },
  {
    id: 2,
    title: "Université Ibnou Zohr",
    location: " Ayt Melloul",
    descreption:
      "Licence professionnelle, Mention Assez Bien en Systèmes informatiques embarqués",
    buttonText: "View Frontend projects",
    date: "2018 - 2021",
    icon: "school",
  },
  {
    id: 3,
    title: "Université Ibnou Zohr",
    location: " Ayt Melloul",
    descreption:
      " DEUP, Mention Assez Bien en Systèmes informatiques embarqués",
    buttonText: "View Frontend projects",
    date: "2018 - 2020",
    icon: "school",
  },
  {
    id: 4,
    title: "Université Ibnou Zohr",
    location: " Ayt Melloul",
    descreption: " Licence fondamentale en Sciences de matière physique",
    buttonText: "View Frontend projects",
    date: "2018 - 2019",
    icon: "school",
  },
  {
    id: 5,
    title: "Lycée Al Arak",
    location: "Taroudant",
    descreption:
      "Baccalauréat, Mention Bien en Sciences physiques et chimiques",
    buttonText: "View Frontend projects",
    date: "21 Juin 2018",
    icon: "school",
  },
];
