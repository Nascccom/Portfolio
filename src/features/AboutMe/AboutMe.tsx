import React from 'react';
import style from "./AboutMe.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {ParagraphTitle} from "../../components/ParagraphTitle/ParagraphTitle";
import {SkillsList} from "./SkillsList/SkillsList";

export const AboutMe = () => {
    return (
      <section id={'aboutMe'} className={style.skillsBlock}>
          <div className={`${styleContainer.container} ${style.skillsContainer}`}>

              {/*<div className={style.aboutMe}>*/}
              <div className={style.column1}>
                  <ParagraphTitle nameTitle={'About me'}/>
                  <div className={style.aboutMeText}>
                      <h3>MY NAME IS ANASTASIYA SALIMOVA</h3>
                      <h5>I'm a frontend developer</h5>
                      <p>
                          Hi there! I'm a young and ambitious frontend developer with a results-focused attitude. My
                          expertise lies in React (JS/TS) and Redux Toolkit, and I'm constantly honing my skills by
                          solving challenges on Codewars and learning new technologies through online courses. I'm open
                          to considering project work or full-time employment opportunities in this field.
                      </p>
                  </div>

                  <div className={style.line}></div>

                  <div>
                      <ParagraphTitle nameTitle={'Skills'}/>
                      <SkillsList/>
                  </div>


              </div>


              <div className={style.column2}>

              </div>


              {/*</div>*/}


          </div>
      </section>

    );
};
