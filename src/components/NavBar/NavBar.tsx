import React from 'react';
import style from './NavBar.module.css'
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {DataScrollNav} from "./DataScrollNav/DataScrollNav";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faBorderNone, faPhoneFlip} from "@fortawesome/free-solid-svg-icons";


export const NavBar = () => {
    return (
      <ul className={style.navbar}>
          <DataScrollNav icon={faHouse} name={'Главная'} hrefWay={'home'}/>
          <DataScrollNav icon={faUser} name={'Скиллы'} hrefWay={'aboutMe'}/>
          <DataScrollNav icon={faBorderNone} name={'Проекты'}/>
          <DataScrollNav icon={faPhoneFlip} name={'Контакты'}/>
      </ul>
    );
};

