import React from 'react';
import style from './ParagraphTitle.module.css'

type PropsType = {
    nameTitle: string
}

export const ParagraphTitle = ({nameTitle}: PropsType) => {
    return (
      <div className={style.title}>
          <span>{nameTitle}</span>
      </div>
    );
};

