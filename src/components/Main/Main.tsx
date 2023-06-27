import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {BackgroundEffect} from "./Background_Effect/BackgroundEffect";

export const Main = () => {
    return (
      <div className={style.mainBlock}>
          <BackgroundEffect/>

          <section id={'home'} className={style.home}>
              <div className={`${styleContainer.container} ${style.mainContainer}`}>


                      <div className={style.homeCard}>
                          <div className={style.homeImg}>
                              <div className={style.homeImgIn}>
                                  <img src="../../common/assets/MyPhoto.jpg" alt='title'/>
                              </div>
                          </div>

                          <div className={style.homeIntro}>
                              <h1>Anastasiya Salimova</h1>
                              <h2>I'm Front-end Developer</h2>
                              <ul>
                                  <li><a href="#">Telegram</a></li>
                                  <li><a href="#">Telegram</a></li>
                                  <li><a href="#">Telegram</a></li>
                                  <li><a href="#">Telegram</a></li>
                              </ul>
                          </div>
                      </div>


              </div>
          </section>

      </div>
    );
};

