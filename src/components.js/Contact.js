import React, { useState, useRef } from "react";
import { contacts } from "../data";
import "../templates.js/contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_92ud7eh",
      "template_uplsrwb",
      form.current,
      "MsmGLrfWkFhMfVXqe"
    );

    e.target.reset();
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contacts.map(({ id, icon, title, email, link }) => {
            return (
              <article key={id} className="contact">
                <div className="contact__icon">{icon}</div>
                <h2>{title}</h2>
                <small>{email}</small>
                <a href={link} target="_blank">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn primary-btn" type="submit">
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
