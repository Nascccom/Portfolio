import React, {useState} from 'react';
import style from "./Work.module.css";

type PropsType = {
    title: string
    description: string
    link: string
}

export const Work = ({title, description, link}: PropsType) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (

      <div className={style.portfolioBox}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
          <div className={style.imgBox}>
              <img
                src="https://bipbap.ru/wp-content/uploads/2017/06/1a7a46es-960.jpg"
                alt=""/>
          </div>

          {isHovered && (
            <a href="#" className={style.portfolioText}>
                <div className={style.text}>
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
            </a>
          )}

      </div>

    );
};
