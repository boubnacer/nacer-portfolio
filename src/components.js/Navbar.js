import React, { useEffect, useState } from "react";
import "../templates.js/navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import AsideSocials from "./AsideSocials";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [activeClass, setActiveClass] = useState("#header");
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const header = document.querySelector("header[id]");
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check if we're at the top (in header area)
      if (header && scrollPosition < header.offsetTop + header.offsetHeight) {
        setActiveClass("#header");
        return;
      }

      // Check sections
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveClass(`#${sectionId}`);
        }
      });
    };

    // Set initial active class based on scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <nav>
      <div className="sidebar">
        <div className="nav__links">
          <a
            href="#header"
            onClick={() => setActiveClass("#header")}
            className={activeClass === "#header" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveClass("#about")}
            className={activeClass === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveClass("#experience")}
            className={activeClass === "#experience" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#skills"
            onClick={() => setActiveClass("#skills")}
            className={activeClass === "#skills" ? "active" : ""}
          >
            <RiServiceLine />
          </a>
          <a
            href="#languages"
            onClick={() => setActiveClass("#languages")}
            className={activeClass === "#languages" ? "active" : ""}
          >
            <FaLanguage />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveClass("#contact")}
            className={activeClass === "#contact" ? "active" : ""}
          >
            <MdOutlineMail />
          </a>
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
        <AsideSocials />
      </div>
    </nav>
  );
};

export default Navbar;
