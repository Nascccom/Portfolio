import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {BackgroundEffect} from "./Background_Effect/BackgroundEffect";
import {SocialLinks} from "../../components/SocialLinks/SocialLink";
import {PhotoTitle} from "../../components/PhotoTitle/PhotoTitle";


export const Main = () => {
    return (
      <div className={style.mainBlock}>
          <BackgroundEffect/>

          <section id={'home'} className={style.home}>
              <div className={`${styleContainer.container} ${style.mainContainer}`}>

                  <div className={style.homeCard}>
                      <PhotoTitle styles={{width: '300px', height: '300px'}}/>

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

