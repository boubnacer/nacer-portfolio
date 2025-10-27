import React from "react";
import me from "../assets/me.jpg";
import "../templates.js/header.css";
import Resume from "../assets/Resume.pdf";

const Header = () => {
  return (
    <header id="header">
      <div className="header__container">
        <div className="me">
          <img className="me_img" src={me} alt="me" />
        </div>
        <div className="container header__details">
          <h1>Boubkraoui Nacer</h1>
          <h5 className="text-light">Master's Student in Embedded Artificial Intelligence | Full-Stack Web Developer (React, Node.js, MongoDB) | Founder & CTO of mafqoudat.com | Passionate About AI & IoT Systems</h5>
          <div className="contact-cv__btns">
            <a href={Resume} className="btn" download>
              Download CV
            </a>
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
