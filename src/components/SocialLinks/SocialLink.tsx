import React from 'react';
import style from './SocialLinks.module.css'
import {FaCode, FaGithub, FaTelegram} from "react-icons/fa6";


export const SocialLinks = () => {
    return (
      <ul className={style.socialLinks}>
          <li><a href="https://t.me/Nascccom"><FaTelegram/></a></li>
          <li><a href="https://www.codewars.com/users/Nascccom"><FaCode/></a></li>
          <li><a href="https://github.com/Nascccom"><FaGithub/></a></li>
      </ul>
    );
}