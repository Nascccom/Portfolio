import React from 'react';
import style from "./Portfolio.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {Work} from "./work/Work";
import {TitleWithLine} from "../../components/TitleWithLine/TitleWithLine";

export const Portfolio = () => {
    return (
      <section className={style.portfolioBlock}>
          <div className={`${styleContainer.container} ${style.portfolioContainer}`}>

              <TitleWithLine nameTitle={'My portfolio'}/>

              <div className={style.lightboxGallery}>
                  <div className={style.portfolioContent}>
                      <Work title={'Todolist'}
                            description={"Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita " +
                              "lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"}
                            link={''}
                      />
                      <Work title={'Social Network'}
                            description={"Tempor eos dolore amet tempor dolor tempor. " +
                              "Dolore ea magnpor dolor. Clita lorem kasd sed euo sit ipsum stet lorem diam"}
                            link={''}
                      />
                      <Work title={'Filmix'}
                            description={"Tempor eos dolore amet tempor dolor tempor. " +
                              "Dolore ea magnpor dolor. Clita lorem kasd sed euo sit ipsum stet lorem diam"}
                            link={''}
                      />
                      <Work title={'Todolist'}
                            description={"Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita " +
                              "lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"}
                            link={''}
                      />
                      <Work title={'Social Network'}
                            description={"Tempor eos dolore amet tempor dolor tempor. " +
                              "Dolore ea magnpor dolor. Clita lorem kasd sed euo sit ipsum stet lorem diam"}
                            link={''}
                      />
                      <Work title={'Filmix'}
                            description={"Tempor eos dolore amet tempor dolor tempor. " +
                              "Dolore ea magnpor dolor. Clita lorem kasd sed euo sit ipsum stet lorem diam"}
                            link={''}
                      />
                  </div>
              </div>


          </div>
      </section>
    );
};
