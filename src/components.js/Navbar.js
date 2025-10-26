import React, { useEffect, useState } from "react";
import "../templates.js/navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import AsideSocials from "./AsideSocials";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [activeClass, setActiveClass] = useState("#");
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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
            onClick={() => setActiveClass("#")}
            className={activeClass === "#" ? "active" : ""}
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
