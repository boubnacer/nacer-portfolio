import React from "react";
import "../templates.js/footer.css";
import { footerSocials } from "../data";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__socials">
        {footerSocials.map((social, index) => {
          const iconClasses = [
            'icon-linkedin',
            'icon-facebook',
            'icon-github',
            'icon-x'
          ];
          return (
            <div key={social.id}>
              <a href={social.link} target="_blank" className={iconClasses[index]}>
                <div>{social.icon}</div>
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <small className="footer__copyright">
          &copy; Boubkraoui Nacer, 2022.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
