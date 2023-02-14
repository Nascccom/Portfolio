import React from 'react';
import style from "./MyWorks.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {Work} from "./work/Work";


export const MyWorks = () => {
    return (
      <div className={style.worksBlock}>
          <div className={`${styleContainer.container} ${style.worksContainer}`}>
              <h2 className={style.title}>My Works</h2>

              <div className={style.works}>
                  <Work title={'Todolist'}
                        description={"Tempor eos dolore amet tempor dolor tempor. " +
                          "Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita " +
                          "lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"}/>
                  <Work title={'Social Network'}
                        description={"Tempor eos dolore amet tempor dolor tempor. " +
                          "Dolore ea magnpor dolor. Clita lorem kasd sed euo sit ipsum stet lorem diam"}/>
              </div>

          </div>
      </div>
    );
};
