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
            <a key={social.id} href={social.link} target="_blank" className={iconClasses[index]}>
              {social.icon}
            </a>
          );
        })}
      </div>
      <div>
        <small className="footer__copyright">
          &copy; Boubkraoui Nacer, 2025.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
