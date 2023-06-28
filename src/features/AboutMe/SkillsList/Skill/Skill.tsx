import React, {useEffect, useRef} from 'react';
import style from "./Skill.module.css";

type PropsType = {
    title: string
    percent: number
}

export const Skill = ({title, percent}: PropsType) => {
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

      <div className={style.skill}>
          <h6>{title}</h6>
          <div className={style.skillBar}>
              <div className={style.skillBarIn}
                   style={{width: `${percent}%`}}>
                  <span> {`${percent}%`} </span>
              </div>
          </div>
      </div>

    );
};
