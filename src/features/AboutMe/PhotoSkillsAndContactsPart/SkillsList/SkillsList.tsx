import React, {useEffect, useRef} from 'react';
import style from "./SkillList.module.css";

type skillType = {
    title: string
    percent: number
}
const skillsData: skillType[] = [
    {title: 'HTML', percent: 98},
    {title: 'CSS', percent: 93},
    {title: 'JavaScript', percent: 93},
    {title: 'React', percent: 94},
    {title: 'Redux', percent: 95},
]

export const SkillsList = () => {

    const skillBarInRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleScroll() {
            const skillContainer = document.querySelector(
              ".skill"
            ) as HTMLElement | null;
            const skillBarIn = skillBarInRef.current;
            const scrollPosition = window.scrollY;
            const skillContainerPosition = skillContainer?.offsetTop ?? 0;
            const skillContainerHeight = skillContainer?.offsetHeight ?? 0;
            const windowHeight = window.innerHeight;

            if (
              skillContainer &&
              skillBarIn &&
              scrollPosition > skillContainerPosition + skillContainerHeight - windowHeight
            ) {
                if (!skillBarIn.classList.contains("open")) {
                    skillBarIn.classList.add("open");
                }
            } else {
                if (skillBarIn && skillBarIn.classList.contains("open")) {
                    skillBarIn.classList.remove("open");
                }
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
      <>
          {skillsData.map(skill => (
            <div className={style.skill} key={skill.title}>
                <h6>{skill.title}</h6>
                <div className={style.skillBar}>
                    <div className={style.skillBarIn}
                         style={{width: `${skill.percent}%`}}>
                        <span> {`${skill.percent}%`} </span>
                    </div>
                </div>
            </div>
          ))}
      </>
    );
};