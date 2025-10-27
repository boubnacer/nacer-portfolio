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
              I'm Nacer, a Master's student in Embedded Artificial Intelligence at Université Ibn Zohr, 
              with a strong foundation in full-stack development and embedded systems. I hold a Professional 
              License in Embedded Computer Systems and have hands-on experience building real-world applications.
            </p>
            <p>
              As the Founder & CTO of Mafqoudat.com, I've successfully launched a complete web platform 
              for lost and found objects, demonstrating my ability to transform ideas into deployed products. 
              My technical expertise spans across MERN stack development, IoT systems with ESP32 and Arduino, 
              AI/ML applications using TensorFlow and PyTorch, and embedded systems programming in C.
            </p>
            <p>
              Beyond technical skills, I'm a strong communicator who values collaboration and knowledge sharing. 
              Currently, I'm focused on advancing my expertise in Embedded AI while continuing to build innovative 
              solutions that bridge the gap between web technologies and intelligent embedded systems.
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
