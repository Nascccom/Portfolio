import React from 'react';
import style from "./Skills.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
      <div className={style.skillsBlock}>
          <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <h2 className={style.title}>My Skills</h2>

              <div className={style.skills}>
                  <Skill title={'HTML'}
                         description={"Tempor eos dolore amet tempor dolor tempor. " +
                           "Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita " +
                           "lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"}/>
                  <Skill title={'CSS'}
                         description={"Tempor eos dolore amet tempor dolor tempor. " +
                           "Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita "}/>
                  <Skill title={'JavaScript'}
                         description={"Tempor eos dolore amet tempor dolor tempor. " +
                           "lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"}/>
                  <Skill title={'React'}
                         description={"Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita " +
                           "lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"}/>

              </div>

          </div>
      </div>
    );
};
