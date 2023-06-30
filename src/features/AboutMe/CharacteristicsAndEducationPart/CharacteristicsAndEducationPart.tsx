import React from 'react';
import {ParagraphTitle} from "../../../components/ParagraphTitle/ParagraphTitle";
import {AboutMeText} from "./AboutMeText/AboutMeText";
import style from "./CharacteristicsAndEducationPart.module.css";
import {EducationBox} from "./EducationBox/EducationBox";

export const CharacteristicsAndEducationPart = () => {
    return (
      <>
          <ParagraphTitle nameTitle={'About me'}/>
          <AboutMeText/>

          <div className={style.line}></div>

          <div className={style.educationBlock}>
              <ParagraphTitle nameTitle={'Education'}/>
              <EducationBox/>
          </div>
      </>
    );
};