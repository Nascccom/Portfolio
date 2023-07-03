import React from 'react';
import style from "./TitleWithLine.module.css";

type PropsType = {
    nameTitle: string
}
export const TitleWithLine = ({nameTitle}: PropsType) => {
    return (
      <div className={style.sectionTitle}>
          <h3>
              {nameTitle}
          </h3>
      </div>
    );
};