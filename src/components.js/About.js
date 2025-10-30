import React from "react";
import "../templates.js/about.css";
import { about } from "../data";

const About = () => {
  return (
    <section id="about" className="about__section">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="about__content about__container">
          <div className="about__cards">
            {about.map((detail) => {
              return (
                <article key={detail.id} className="about__card">
                  <h1 className="about__icon">{detail.icon}</h1>
                  <h5>{detail.title}</h5>
                  <small>{detail.descri}</small>
                  <small>{detail.descri1}</small>
                </article>
              );
            })}
          </div>
          <div>
            <p>
              I'm Nacer, a Master's student in Embedded Artificial Intelligence at Université Ibn Zohr. 
              I specialize in IoT systems, embedded programming with ESP32, and AI/ML/DL applications 
              using TensorFlow. I hold a Professional License in Embedded Computer Systems.
            </p>
            <p>
              As Founder & CTO of Mafqoudat.com, I've successfully launched a deployed platform, 
              demonstrating my ability to build and deploy real-world solutions.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
