import React from "react";
import "../templates.js/services.css";
import { 
  HiOutlineBadgeCheck, 
  HiCode, 
  HiServer, 
  HiDesktopComputer,
  HiCloud,
  HiDatabase
} from "react-icons/hi";
import { BiCodeBlock } from "react-icons/bi";
import { SiAdobephotoshop, SiMicrosoftexcel } from "react-icons/si";
import { FaRobot, FaMobileAlt, FaCogs } from "react-icons/fa";

const Services = () => {
  return (
    <section id="skills">
      <div className="skills__header">
        <h5>What I Offer</h5>
        <h2>My Technical Skills</h2>
        <p className="skills__subtitle">
          A comprehensive overview of my technical expertise across various domains
        </p>
      </div>

      <div className="container skills__container">
        {/* Programming Languages & Frameworks */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiCode />
          </div>
          <h3>Programming Languages & Frameworks</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Python (AI/ML Focus)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>C/C++ (Embedded Systems)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>JavaScript & Node.js</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>React (Web Interfaces)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Java (Android Development)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Git/GitHub</span>
            </div>
          </div>
        </div>

        {/* Database & Data Management */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiDatabase />
          </div>
          <h3>Database & Data Management</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>MongoDB</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Big Data Processing</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Data Pipeline Design</span>
            </div>
          </div>
        </div>

        {/* AI & Machine Learning */}
        <div className="skill__card">
          <div className="skill__icon">
            <FaRobot />
          </div>
          <h3>AI & Machine Learning</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Deep Learning (CNN, RNN, LSTM)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>TensorFlow & PyTorch</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Computer Vision & OpenCV</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Natural Language Processing</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>TinyML & Model Optimization</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Data Analysis (Pandas, NumPy)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>RAG Systems</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>OpenAI API</span>
            </div>
          </div>
        </div>

        {/* IoT & Embedded Systems */}
        <div className="skill__card">
          <div className="skill__icon">
            <FaCogs />
          </div>
          <h3>IoT & Embedded Systems</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>ESP32 & Arduino</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Circuit Design</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Microcontroller Programming</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Sensor Integration & Calibration</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>IoT Protocols (MQTT, CoAP)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Edge Computing Architecture</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Hardware-Software Integration</span>
            </div>
          </div>
        </div>

        {/* Networking & Security */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiServer />
          </div>
          <h3>Networking & Security</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Network Protocols (TCP/IP)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Cybersecurity</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Encryption & Security Protocols</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Parallel Computing</span>
            </div>
          </div>
        </div>

        {/* Development Tools */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiDesktopComputer />
          </div>
          <h3>Development Tools</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>VS Code</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>MongoDB Atlas</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Postman</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Linux Kernel</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Real-time Systems</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Device Drivers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
