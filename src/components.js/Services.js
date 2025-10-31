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
          Technical skills and competencies developed through my master's program, including hands-on projects and coursework across diverse technology domains
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
              <span>C (Embedded Systems)</span>
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
              <span>Data Analysis with Python</span>
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
              <span>Deep Learning (CNN, RNN, LSTM, GRU)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>TensorFlow</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Computer Vision & OpenCV</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Artificial Vision & Image Processing</span>
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
              <span>RAG Systems</span>
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
              <span>IoT Protocols (MQTT)</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Linux Embedded & RTOS</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Edge & Fog Computing</span>
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
              <span>Encryption & Security Protocols</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Embedded Systems Security</span>
            </div>
          </div>
        </div>

        {/* SoC & Parallel Programming */}
        <div className="skill__card">
          <div className="skill__icon">
            <BiCodeBlock />
          </div>
          <h3>SoC & Parallel Programming</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>System-on-Chip (SoC) Design</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Parallel Programming</span>
            </div>
          </div>
        </div>
        

        {/* Mobile Development */}
        <div className="skill__card">
          <div className="skill__icon">
            <FaMobileAlt />
          </div>
          <h3>Mobile Development</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Android Development</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Cross-platform Development</span>
            </div>
          </div>
        </div>


        {/* Soft Skills & Digital Culture */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiOutlineBadgeCheck />
          </div>
          <h3>Soft Skills & Digital Culture</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Communication & Teamwork</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Digital Culture</span>
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
              <span>Android Studio</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Arduino IDE</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Git/GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
