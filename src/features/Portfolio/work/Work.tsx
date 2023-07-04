import React, {useState} from 'react';
import style from "./Work.module.css";
import {BsFillArrowUpRightCircleFill} from "react-icons/bs";

type PropsType = {
    title: string
    description: string
}

export const Work = ({title, description}: PropsType) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (

      <div className={style.portfolioBox} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

          <div className={style.portfolioImg}>
              <img
                src="https://nationaltoday.com/wp-content/uploads/2022/09/1-First-Day-of-Autumn-1200x834.jpg"
                alt=""/>
          </div>

          {isHovered && (
            <div className={style.portfolioText}>
                <h6>{title}</h6>
                <p>{description}</p>
                <a href="#" className={style.portfolioLink}>
                    <BsFillArrowUpRightCircleFill/>
                </a>
            </div>
          )}

      </div>

    );
};
