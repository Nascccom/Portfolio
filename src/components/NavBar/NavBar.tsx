import React from 'react';
import style from './NavBar.module.css'


export const NavBar = () => {
    return (
      <ul className={style.navbar}>
          <li>
              <a href="#" className={style.link}>
                  <span>
<img src="../../icons/house-door.svg" alt=""/>
                  </span>
                  <span>Главная</span>
              </a>
          </li>


          <li><a href="#" className={style.link}>Скиллы</a></li>
          <li><a href="#" className={style.link}>Проекты</a></li>
          <li><a href="#">Контакты</a></li>
      </ul>
    );
};
