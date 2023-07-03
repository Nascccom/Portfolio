import React from 'react';
import style from "./BackgroundEffect.module.css";

export const BackgroundEffect = () => {
    return (
      <div className={style.background_effect}>
          <div className={style.marquee}>
              <SliderAnimation/>
              <SliderAnimation/>
          </div>
      </div>
    );
};

const SliderAnimation = () => {
    return <h2> SALIMOVA PORTFOLIO ANASTASIYA </h2>
}