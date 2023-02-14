import React from 'react';
import style from "./Skill.module.css";

type SkillType = {
    title: string
    description: string
}

export const Skill = (props: SkillType) => {
    return (

      <div className={style.skill}>
          <div className={style.icon}>
              <img src="https://www.inventicons.com/uploads/iconset/1692/wm/512/Skills-80.png"
                   alt="skill"/>
          </div>

          <h3 >{props.title}</h3>
          <p >{props.description}</p>
      </div>

    );
};
