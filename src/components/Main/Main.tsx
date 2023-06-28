import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {BackgroundEffect} from "./Background_Effect/BackgroundEffect";
import {SocialLinks} from "../SocialLinks/SocialLink";


export const Main = () => {
    return (
      <div className={style.mainBlock}>
          <BackgroundEffect/>

          <section id={'home'} className={style.home}>
              <div className={`${styleContainer.container} ${style.mainContainer}`}>

                  <div className={style.homeCard}>
                      <div className={style.homeImg}>
                          <div className={style.homeImgIn}>
                              <div className={style.photo}></div>
                          </div>
                      </div>

                      <div className={style.homeIntro}>
                          <h1>Anastasiya Salimova</h1>
                          <h2>I'm Front-end Developer</h2>
                          <SocialLinks/>
                      </div>
                  </div>
              </div>
          </section>

      </div>
    );
};

