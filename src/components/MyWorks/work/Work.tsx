import React from 'react';
import style from "./Work.module.css";

type WorkType = {
    title: string
    description: string
}

export const Work = (props: WorkType) => {
    return (
      <div className={style.work}>
          <div className={style.imgContainer}>
              <a href="#">
                  Watching
              </a>
          </div>

          <div className={style.text}>
              <h4 className={style.title}>{props.title}</h4>
              <p className={style.description}>{props.description}</p>
          </div>
      </div>
    );
};
