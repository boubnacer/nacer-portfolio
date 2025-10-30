import React, { useEffect, useState } from "react";
import "../templates.js/asidesocials.css";
import { socials } from "../data";

const AsideSocials = () => {
  return (
    <div className="aside__socials">
      {socials.map((social, index) => {
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
  );
};

export default AsideSocials;
