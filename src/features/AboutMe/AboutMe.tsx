import React from 'react';
import style from "./AboutMe.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {CharacteristicsAndEducationPart} from "./CharacteristicsAndEducationPart/CharacteristicsAndEducationPart";
import {PhotoSkillsAndContactsPart} from "./PhotoSkillsAndContactsPart/PhotoSkillsAndContactsPart";

export const AboutMe = () => {
    return (
      <section id={'aboutMe'} className={style.aboutMeBlock}>
          <div className={styleContainer.container}>

              <div className={style.aboutMe}>
                  <div className={style.column1}>
                      <CharacteristicsAndEducationPart/>
                  </div>

                  <div className={style.column2}>
                      <PhotoSkillsAndContactsPart/>
                  </div>
              </div>

          </div>
      </section>

    );
};
