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
              Je m'appelle Nacer, Je suis titulaire d'une licence
              professionnelle en Systèmes informatiques embarqués, avec une
              connaissance holistique du développement Web et de la conception
              de logiciels. Je suis un bon communicateur et je crois au partage
              et à l'échange d'opinions et de connaissances.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
