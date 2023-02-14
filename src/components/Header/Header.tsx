import React from 'react';
import style from './Header.module.css'
import {NavBar} from "../NavBar/NavBar";
import styleContainer from "../../common/styles/Container.module.css";

export const Header = () => {
    return (
      <div className={style.header}>
          <div className={`${styleContainer.container} ${style.headerContainer}`}>
              <NavBar/>
          </div>
      </div>
    );
};

