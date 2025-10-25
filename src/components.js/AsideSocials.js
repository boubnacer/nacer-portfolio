import React, { useEffect, useState } from "react";
import "../templates.js/asidesocials.css";
import { socials } from "../data";

const AsideSocials = () => {
  return (
    <main>
      {socials.map((social, index) => {
        const iconClasses = [
          'icon-linkedin',
          'icon-facebook',
          'icon-github',
          'icon-x'
        ];
        return (
          <div key={social.id} className="aside__socials">
            <a href={social.link} target="_blank" className={iconClasses[index]}>
              <div>{social.icon}</div>
            </a>
          </div>
        );
      })}
    </main>
  );
};

export default AsideSocials;
