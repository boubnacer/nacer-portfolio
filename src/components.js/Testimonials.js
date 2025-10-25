import React from "react";
import { languages } from "../data";
import "../templates.js/testimonials.css";
import { FaGlobe, FaLanguage } from "react-icons/fa";

const Languages = () => {
  return (
    <section id="languages" className="languages__section">
      <div className="languages__header">
        <div className="languages__icon">
          <FaLanguage />
        </div>
        <h2>Languages</h2>
        <p className="languages__subtitle">
          Multilingual communication skills across different cultures and contexts
        </p>
      </div>

      <div className="container languages__container">
        <div className="languages__grid">
          {languages.map((language) => (
            <div key={language.id} className="language__card">
              <div className="language__flag">
                <img src={language.flag} alt={`${language.name} flag`} />
              </div>
              
              <div className="language__content">
                <h3 className="language__name">{language.name}</h3>
                <div className="language__level">
                  <span className={`level__badge level__${language.level.toLowerCase()}`}>
                    {language.level}
                  </span>
                </div>
                
                <div className="language__proficiency">
                  <div className="proficiency__bar">
                    <div 
                      className="proficiency__fill" 
                      style={{ width: `${language.proficiency}%` }}
                    ></div>
                  </div>
                  <span className="proficiency__percentage">{language.proficiency}%</span>
                </div>
                
                <div className="language__skills">
                  {language.skills.map((skill, index) => (
                    <span key={index} className="skill__tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="language__description">{language.description}</p>
              </div>
              
              <div className="language__globe">
                <FaGlobe />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
