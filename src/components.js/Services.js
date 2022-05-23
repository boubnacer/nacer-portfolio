import React from "react";
import "../templates.js/services.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Services = () => {
  return (
    <section id="skills">
      <h5>What i offre</h5>
      <h2>Skills</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              modeling <br /> method
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Merise</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>UML</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>
              Office <br /> tools
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>VS Code</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Eclipse</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Sublime Text 3</p>
            </li>

            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Android Studio</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Programming Languages & Frameworks</h3>
          </div>

          <ul className="service__list">
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>JavaScript & NodeJs/ExpressJs</p>
            </li>

            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>ReactJs & VueJs</p>
            </li>

            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>C & JAVA</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>HTML/CSS, SASS and TailwindCss</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Git/Github</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Python et Django</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>SGBD</h3>
          </div>

          <ul className="service__list">
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>MongoDB</p>
            </li>

            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>MySQL</p>
            </li>
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>SqlLite</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>
              operating <br /> system
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Linux</p>
            </li>

            <li>
              <h2 className="service__list-icon">
                <HiOutlineBadgeCheck />
              </h2>
              <p>Windows</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
