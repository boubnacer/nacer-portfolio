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
              <span>JavaScript & NodeJs/ExpressJs</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>ReactJs | Redux/Redux Toolkit & VueJs</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>C & JAVA</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Python</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>HTML5/CSS3, Axios, SASS, Bootstrap & TailwindCss</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Git/Github</span>
            </div>
          </div>
        </div>

        {/* Database Management */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiDatabase />
          </div>
          <h3>Database Management</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>MongoDB</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>MySQL</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>SQLite</span>
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
              <span>OpenAI API</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>RAG Systems</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Document Processing</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>AI Integration</span>
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
              <span>ESP32</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Arduino</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Biometric Sensors</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>IoT Development</span>
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
              <span>Android Studio</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Java</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Native Android Development</span>
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
              <span>Eclipse</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Android Studio</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>MongoDB Atlas</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Postman</span>
            </div>
          </div>
        </div>

        {/* Modeling & Design */}
        <div className="skill__card">
          <div className="skill__icon">
            <BiCodeBlock />
          </div>
          <h3>Modeling & Design</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Merise</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>UML</span>
            </div>
          </div>
        </div>

        {/* Operating Systems */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiServer />
          </div>
          <h3>Operating Systems</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Linux</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Windows</span>
            </div>
          </div>
        </div>

        {/* Cloud & Deployment */}
        <div className="skill__card">
          <div className="skill__icon">
            <HiCloud />
          </div>
          <h3>Additional Skills</h3>
          <div className="skill__items">
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>RESTful APIs</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Responsive Design</span>
            </div>
            <div className="skill__item">
              <HiOutlineBadgeCheck className="skill__check" />
              <span>Version Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
