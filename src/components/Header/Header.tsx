import React, {useState} from 'react';
import style from './Header.module.css'
import {NavBar} from "../NavBar/NavBar";
import {faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons/faCircleHalfStroke";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";


export const Header = () => {
    const [isToggle, setToggle] = useState(false);
    const isSmallScreen = window.matchMedia('(max-width: 1000px)').matches;
    console.log(isSmallScreen)

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
          <div className={style.themeBtn}>
              <button className={style.dropdownToggle}>
                  <SvgIcon icon={faCircleHalfStroke} className={style.icon}/>
              </button>
          </div>
      </div>
    )

    return (
      <>
          {openTopMenu}
          {openLeftMenu}
      </>
    );
};

