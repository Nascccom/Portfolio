import React from 'react';
import style from "./PhtotoTitle.module.css";

type PropsType = {
    styles: Object
}

export const PhotoTitle = ({styles}: PropsType) => {
    return (
      <div className={style.homeImg}>
          <div className={`${style.homeImgIn}`} style={styles}>
              <div className={style.photo}></div>
          </div>
      </div>
    );
};