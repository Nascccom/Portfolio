import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";


export const Footer = () => {
    return (
      <div className={style.footerBlock}>
          <div className={`${styleContainer.container} ${style.footerContainer}`}>
              <h4 className={style.name}>Anastasiya Salimova</h4>
              <div className={style.iconsWrapper}>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
              </div>
              <span>2023. All rights reserved</span>
          </div>
      </div>
    );
};

