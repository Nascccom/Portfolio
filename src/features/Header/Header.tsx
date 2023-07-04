import React, {useState} from 'react';
import style from './Header.module.css'
import {NavBar} from "../NavBar/NavBar";
import {SvgIcon} from "../../components/SvgIcon/SvgIcon";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";


export const Header = () => {
    const [isToggle, setToggle] = useState(false);
    const isSmallScreen = window.matchMedia('(max-width: 1000px)').matches;

    function onClickButtonHandler() {
        setToggle(!isToggle);
    }

    const openTopMenu = (
      <div className={`${style.header} ${style.topHeader}`}>
          <span>PORTFOLIO</span>
          <button className={style.togglerMenu} onClick={onClickButtonHandler}>
              <SvgIcon icon={faBars} className={style.icon}/>
          </button>
      </div>
    )

    const openLeftMenu = (
      <div className={`${style.header} ${style.leftHeader}`}
           style={{display: isToggle || !isSmallScreen ? 'flex' : 'none'}}>
          <NavBar/>
      </div>
    )

    return (
      <>
          {openTopMenu}
          {openLeftMenu}
      </>
    );
};

