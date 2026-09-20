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
              I'm Nacer, an Embedded AI Engineer holding a Master's degree in Embedded Artificial
              Intelligence from Université Ibn Zohr. I specialize in IoT systems, embedded programming
              with ESP32, and AI/ML/DL applications using TensorFlow. I hold a Professional Bachelor's
              Degree in Embedded Computer Systems.
            </p>
            <p>
              For my end-of-studies project at SiliconeSignal Technologies, I designed and deployed a
              real-time snoring detection system running entirely on an ESP32-S3 microcontroller — a full
              TinyML pipeline from embedded C++ digital signal processing to an INT8-quantized CNN via
              TensorFlow Lite for Microcontrollers, reaching 97.80% accuracy with 1-second detection
              latency and zero cloud dependency.
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