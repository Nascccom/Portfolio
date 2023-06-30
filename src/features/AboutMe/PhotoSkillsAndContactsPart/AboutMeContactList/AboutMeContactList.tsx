import React from 'react';
import {AiFillSkype, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {BsFiletypePdf} from "react-icons/bs";
import style from "./AboutMeContactList.module.css";


type ContactType = {
    icon: JSX.Element
    text: string
    id: number
    hrefWay: string
}
const contactsData: ContactType[] = [
    {icon: <AiFillSkype/>, text: 'Skype Me', hrefWay: '', id: 1},
    {icon: <AiOutlineMail/>, text: 'Mail Me', hrefWay: '', id: 2},
    {icon: <AiOutlineWhatsApp/>, text: 'WhatsApp Me', hrefWay: '', id: 3},
    {icon: <BsFiletypePdf/>, text: 'Resume', hrefWay: '', id: 4},
]


export const AboutMeContactList = () => {
    return (
      <ul className={style.container}>
          {contactsData.map(c => {
              return (
                <li>
                    <div className={style.icon}>
                        {c.icon}
                    </div>
                    <div className={style.text}>
                        <a href={c.hrefWay}>{c.text}</a>
                    </div>
                </li>
              )
          })}
      </ul>
    );
};
