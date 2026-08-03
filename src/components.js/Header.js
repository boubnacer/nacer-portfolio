import React, { useState, useEffect } from "react";
import me from "../assets/me.jpg";
import meLight from "../assets/meLight.jpg";
import "../templates.js/header.css";
import Resume from "../assets/Resume.pdf";
import { useGlobalContext } from "../context";

const Header = () => {
  const { isDarkMode } = useGlobalContext();
  const [currentImage, setCurrentImage] = useState(isDarkMode ? me : meLight);
  const [nextImage, setNextImage] = useState(isDarkMode ? meLight : me);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const newImage = isDarkMode ? me : meLight;
    if (newImage !== currentImage) {
      setNextImage(newImage);
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setCurrentImage(newImage);
        setIsTransitioning(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isDarkMode, currentImage]);

  return (
    <header id="header">
      <div className="header__container">
        <div className="me">
          <div className="image-container">
            <img 
              className="me_img current" 
              src={currentImage} 
              alt="me" 
            />
            <img 
              className={`me_img next ${isTransitioning ? 'fade-in' : ''}`}
              src={nextImage} 
              alt="me" 
            />
          </div>
        </div>
        <div className="container header__details">
          <h1>Boubkraoui Nacer</h1>
          <h5 className="text-light">Embedded AI Engineer (M.Sc. in Embedded Artificial Intelligence) |<br/> Full-Stack Web Developer (React, Node.js, MongoDB) |  <br/> Passionate About AI, Embedded AI & IoT Systems |<br/> Founder & CTO of mafqoudat.com</h5>
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
