import React from 'react';
import style from './NavBar.module.css'

export const NavBar = () => {
    return (
      <div className={style.navbar}>
          <a href="#" className={style.link}>Главная</a>
          <a href="#" className={style.link}>Скиллы</a>
          <a href="#" className={style.link}>Проекты</a>
          <a href="#" >Контакты</a>
      </div>
    );
};
