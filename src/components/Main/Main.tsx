import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {BackgroundEffect} from "./Background_Effect/BackgroundEffect";

export const Main = () => {
    return (
      <div className={style.mainBlock}>
          <BackgroundEffect/>

          <div className={`${styleContainer.container} ${style.mainContainer}`}>
              <div className={style.photo}>
                  <img src="../../common/assets/photo.jpg" alt='my-photo'/>
              </div>
              <div className={style.title}>
                  <span>Hi, There</span>
                  <h1>I'm ANASTASIYA SALIMOVA</h1>
                  <span>Front-end Developer</span>
              </div>
          </div>
      </div>
    );
};

