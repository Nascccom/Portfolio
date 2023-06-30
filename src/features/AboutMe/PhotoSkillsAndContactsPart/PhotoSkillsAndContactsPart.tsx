import React from 'react';
import style from "./PhotoSkillsAndContactsPart.module.css";
import {AboutMeContactList} from "./AboutMeContactList/AboutMeContactList";
import {ParagraphTitle} from "../../../components/ParagraphTitle/ParagraphTitle";
import {SkillsList} from "./SkillsList/SkillsList";

export const PhotoSkillsAndContactsPart = () => {
    return (
      <>
          <div className={style.aboutMePhotoBlock}>
              <div className={style.aboutMeImg}></div>
          </div>


          <div className={style.contactWithMeBlock}>
              <div className={style.aboutContent}>
                  <AboutMeContactList/>
              </div>
          </div>


          <div className={style.skillsBlock}>
              <ParagraphTitle nameTitle={'Skills'}/>
              <SkillsList/>
          </div>
      </>
    );
};

