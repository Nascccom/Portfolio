import React from 'react';
import style from "./EducationBox.module.css";
import {BsFillBriefcaseFill} from "react-icons/bs";

type EducationDataType = {
    organization: string,
    year: string,
    hrefWay: string,
    description: string,
    nameCourse: string
}
const educationData: EducationDataType[] = [
    {
        organization: 'IT-Incubator',
        year: '2022-2023',
        hrefWay: 'https://it-incubator.io/',
        description: 'JavaScript, React, Redux, TypeScript, React Router Dom, ' +
          'Class Components, HTML & CSS, Postman, MUI, TDD, Storybook',
        nameCourse: 'Front-end (React/Redux/Typescript)'
    },
    {
        organization: 'Stepik',
        year: '2022',
        hrefWay: 'https://stepik.org/course/114165/promo',
        description: 'Фундаментальные основы JavaScript, cтруктуры данных и работа с ними, ' +
          'ООП в JavaScript, модульная система, создание UI элементов, ' +
          'обмен данными между клиентом и сервером через JavaScript',
        nameCourse: 'Фундаментальный JavaScript'
    },
    {
        organization: 'Stepik',
        year: '2022',
        hrefWay: 'https://stepik.org/course/86379/promo',
        description: 'Основы JavaScript, типы данных, приведение типов' +
          'способы задания переменных, функции, контекст this, прототипы' +
          'promise, async / Await, замыкания, классы ES6' +
          'методы массивов, event Loop. Асинхронность',
        nameCourse: 'Полный курс по JavaScript - понимаем тонкости языка'
    },
]

export const EducationBox = () => {
    return (
      <div className={style.educationBox}>
          <ul>
              {educationData.map(course => {
                  return (
                    <li key={course.nameCourse}>
                        <div className={style.icon}>
                            <BsFillBriefcaseFill/>
                        </div>
                        <span className={style.year}>{course.year}</span>
                        <h5>{course.organization} - {course.nameCourse}</h5>
                        <p>{course.description}</p>
                    </li>
                  )
              })}
          </ul>
      </div>
    );
};

