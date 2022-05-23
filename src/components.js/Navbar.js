import React, { useEffect, useState } from "react";
import "../templates.js/navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import AsideSocials from "./AsideSocials";

const Navbar = () => {
  const [activeClass, setActiveClass] = useState("#");

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
        </div>
        <AsideSocials />
      </div>
    </nav>
  );
};

export default Navbar;
