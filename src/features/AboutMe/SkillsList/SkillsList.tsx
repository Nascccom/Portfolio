import React from 'react';
import {Skill} from "./Skill/Skill";

type skillType = {
    skillTitle: string
    percent: number
}
const skillsData: skillType[] = [
    {skillTitle: 'HTML', percent: 98},
    {skillTitle: 'CSS', percent: 93},
    {skillTitle: 'JavaScript', percent: 93},
    {skillTitle: 'React', percent: 94},
    {skillTitle: 'Redux', percent: 95},
]

export const SkillsList = () => {

    return (
      <>
          {skillsData.map(skill => (
            <Skill key={skill.skillTitle} title={skill.skillTitle} percent={skill.percent}/>
          ))}
      </>
    );
};