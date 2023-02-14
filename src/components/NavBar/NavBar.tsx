import React from 'react';
import style from './NavBar.module.css'

export const NavBar = () => {
    return (
      <div className={style.navbar}>
          <a href="#">Главная</a>
          <a href="#">Скиллы</a>
          <a href="#">Проекты</a>
          <a href="#">Контакты</a>
      </div>
    );
};
