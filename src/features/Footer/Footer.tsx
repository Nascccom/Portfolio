import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {SocialLinks} from "../../components/SocialLinks/SocialLink";
import {PhotoTitle} from "../../components/PhotoTitle/PhotoTitle";


export const Footer = () => {
    return (
      <div className={style.footer}>
          <div className={`${styleContainer.container} ${style.footerContainer}`}>
              <div className={style.footerContent}>
                  <div className={style.footerInfo}>
                      <PhotoTitle styles={{width: '100px', height: '100px', border: '8px'}}/>
                      <h6>Anastasiya Salimova</h6>
                  </div>
                  <SocialLinks/>
                  <p>2023. All rights reserved</p>
              </div>
          </div>
      </div>
    );
};

