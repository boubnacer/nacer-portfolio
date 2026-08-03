import fr from "./assets/fr.png";
import en from "./assets/en.png";
import ar from "./assets/ar.png";
import twitterIcon from "./assets/twitter.svg";
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
    descri: "5-month Embedded AI internship (PFE)",
    descri1: "4+ years self-training & projects",
  },
  {
    id: 2,
    icon: <GoProject />,
    title: "Projects",
    descri: "2+ Full-Stack MERN applications",
    descri1: "6+ AI/ML, IoT, Computer Vision, TinyML & RAG systems",
  },
];

export const socials = [
  {
    id: 1,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/nacer-boubkraoui/",
  },
  {
    id: 2,
    icon: <GrFacebook />,
    link: "https://www.facebook.com/profile.php?id=100009028883020",
  },
  { id: 3, icon: <FaGithubSquare />, link: "https://github.com/boubnacer" },
  {
    id: 4,
    icon: <img src={twitterIcon} alt="Twitter" />,
    link: "https://twitter.com/NacerBoubkraoui",
  },
];

export const footerSocials = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nacer-boubkraoui/",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100009028883020",
  },
  { id: 3, icon: <FiGithub />, link: "https://github.com/boubnacer" },
  {
    id: 4,
    icon: <img src={twitterIcon} alt="Twitter" />,
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
    level: "Fluent",
    skills: ["Reading", "Writing", "Speaking"],
    description: "Fluent French speaker with excellent written and verbal communication"
  },
  {
    id: 3,
    name: "العربية",
    flag: ar,
    proficiency: 90,
    level: "Fluent",
    skills: ["Reading", "Writing", "Speaking"],
    description: "Fluent Arabic speaker with proficiency in both Modern Standard Arabic and dialect"
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
    email: "nacer.boubkraoui.43@edu.uiz.ac.ma",
    link: "mailto:nacer.boubkraoui.43@edu.uiz.ac.ma",
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
      "Graduated with a Master's degree in Embedded Artificial Intelligence, defended on 04/07/2026. End-of-studies project: real-time snoring detection system deployed on an ESP32-S3 microcontroller using the TinyML paradigm.",
    buttonText: "View AI Projects",
    date: "2024 - 2026",
    icon: "school",
  },
  {
    id: 1.1,
    title: "PFE Intern — Edge AI for Sleep Health Monitoring",
    location: "SiliconeSignal Technologies, Meknès",
    descreption:
      "End-of-studies internship: designed and deployed a real-time snoring detection system running entirely on an ESP32-S3 microcontroller, with no cloud dependency and no hardware AI accelerator. Built the full pipeline — PDM microphone capture, embedded C++ DSP (FFT, mel-spectrogram), and an INT8-quantized CNN via TensorFlow Lite for Microcontrollers — through six iterative retraining versions, reaching 97.80% test accuracy, 97.0% snore recall, a ROC AUC of 0.9976, and a 1-second real-time detection latency.",
    buttonText: "View Project",
    date: "February 2026 - July 2026",
    icon: "work",
  },
  {
    id: 1.5,
    title: "NRF24L01+ Performance & Security Analysis",
    location: "Embedded Systems Security",
    descreption:
      "Analysis of NRF24L01+ transceiver performance and security vulnerabilities. Investigated 2.4GHz ISM band challenges, implemented jamming attacks and eavesdropping techniques. Evaluated countermeasures including software encryption and frequency hopping.",
    buttonText: "View on Google Drive",
    date: "2025 - Present",
    icon: "work",
  },
  {
    id: 1.6,
    title: "Intelligent Edge Health Gateway (IoT & AI)",
    location: "Edge and Fog Computing",
    descreption:
      "Edge computing architecture for real-time medical monitoring. ESP32 captures vitals (SpO2, BPM, Temperature) and activity data, processed locally on Raspberry Pi gateway with MQTT, Node-RED, InfluxDB, and Grafana for low-latency healthcare analytics.",
    buttonText: "View Project",
    date: "November 21, 2025 - Present",
    icon: "work",
  },
  {
    id: 2,
    title: "Founder & CTO - Mafqoudat.com",
    location: "Digital Platform for Lost & Found Objects",
    descreption:
      "Founded and launched a complete web service for helping people find lost objects. Features: geolocation, notifications, multi-language support, advanced search filters. Full-stack development with React, Node.js and MongoDB. Currently active and deployed.",
    buttonText: "Visit Website",
    link: "https://mafqoudat.com",
    linkText: "Visit the site",
    date: "2022 - Present",
    icon: "work",
  },
  {
    id: 3,
    title: "IoT Health Monitoring System",
    location: "IoT and Sensor Technologies",
    descreption:
      "Embedded solution for vital parameters tracking using ESP32 and biometric sensors. Secure data transmission to cloud dashboard.",
    buttonText: "View Project",
    link: "https://www.linkedin.com/posts/nacer-boubkraoui_phase-1-of-an-iot-solution-for-obesity-care-activity-7314704870870056961-xjxV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADRTvdQBCHEvu3DCBl31BMEAXxdB7F0snOs",
    linkText: "View on LinkedIn",
    date: "April 2025 - July 23, 2025",
    icon: "work",
  },
  {
    id: 4,
    title: "Autonomous Vehicle Vision System",
    location: "Computer Vision & Robotics",
    descreption:
      "Complete autonomous driving system using Raspberry Pi 4. Features: real-time lane detection, traffic sign recognition (traffic lights, stop signs, speed limits), ultrasonic obstacle detection, and multi-sensor data fusion. Achieved 23+ FPS processing with 90%+ accuracy using OpenCV and Python.",
    buttonText: "View Report",
    link: "https://drive.google.com/drive/folders/1-h6ouVKozfkBjnrRgg5FXHqwoIagIjNy?usp=drive_link",
    linkText: "View on Google Drive",
    date: "April 2025 - July 23, 2025",
    icon: "work",
  },
  {
    id: 5,
    title: "RAG Web Application",
    location: "Deep Learning",
    descreption:
      "Document-based Q&A application using MERN stack. Features: document upload, OpenAI API integration, contextual response generation.",
    buttonText: "View Project",
    link: "https://github.com/boubnacer/rag-llm-website",
    linkText: "View on GitHub",
    date: "June 2025 - July 13, 2025",
    icon: "work",
  },
  {
    id: 6,
    title: "RAG Android Application",
    location: "Mobile Programming",
    descreption:
      "Native mobile application with Java. Same RAG functionality as web version, optimized for mobile devices with intuitive UI.",
    buttonText: "View Project",
    link: "https://github.com/boubnacer/smart-study-assistant",
    linkText: "View on GitHub",
    date: "25 June, 2025 - July 20, 2025",
    icon: "work",
  },
  {
    id: 7,
    title: "Frontend Developer Intern",
    location: "AJICOD, Dcheira El Jihadia",
    descreption:
      "Developed user interface for school activity management system using Vue.js. Created reusable components and optimized performance.",
    buttonText: "View Projects",
    date: "May 2021 - July 2021",
    icon: "work",
  },
  {
    id: 8,
    title: "Professional License in Embedded Computer Systems",
    location: "Université Ibn Zohr",
    descreption:
      "Professional License in Embedded Computer Systems",
    buttonText: "View Academic Projects",
    date: "2018 - 2021",
    icon: "school",
  },
  {
    id: 9,
    title: "Baccalaureate in Physical and Chemical Sciences",
    location: "Lycée Al Arak, Taroudant",
    descreption:
      "Baccalaureate in Physical and Chemical Sciences",
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
    description: "JavaScript, Python, C, Java, C++",
    icon: "💻"
  },
  {
    id: 4,
    title: "IoT & Embedded Systems",
    description: "ESP32, Arduino, C Programming, Biometric Sensors, MQTT, JSON, I2C, WiFi Station Mode",
    icon: "🔌"
  },
  {
    id: 5,
    title: "Computer Vision & Robotics",
    description: "OpenCV, Real-time Image Processing, Lane Detection, Traffic Sign Recognition, Raspberry Pi, Multi-sensor Fusion",
    icon: "🤖"
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    description: "OpenAI API, RAG Systems, Document Processing, Object Detection, Pattern Recognition, Scikit-learn, Isolation Forest, Unsupervised Learning, Sensor Fusion",
    icon: "🧠"
  },
  {
    id: 7,
    title: "Mobile Development",
    description: "Android Studio, Java, Native Android Development",
    icon: "📱"
  },
  {
    id: 8,
    title: "Edge Computing & Data Engineering",
    description: "Node-RED, InfluxDB, Grafana, Time-Series Databases, Data Visualization, Distributed Edge Architecture",
    icon: "🔧"
  },
  {
    id: 9,
    title: "MLOps & DevOps",
    description: "Docker, Apache Kafka, MLflow, Model Deployment & Monitoring, Git/GitHub, VS Code, Postman, Linux Administration",
    icon: "🚀"
  },
  {
    id: 10,
    title: "Modeling & Design",
    description: "UML, Merise (Database Modeling)",
    icon: "📊"
  },
  {
    id: 11,
    title: "Operating Systems",
    description: "Linux, Windows",
    icon: "🖥️"
  }
];
