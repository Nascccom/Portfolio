import style from "../NavBar.module.css";
import {SvgIcon} from "../../../components/SvgIcon/SvgIcon";
import React from "react";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    icon: IconDefinition
    hrefWay?: string
    name: string
}
export const DataScrollNav = ({icon, hrefWay, name}: PropsType) => {
    return (
      <li className={style.dataScrollNav}>
          <a href={`#${hrefWay}`} className={style.link}>
              <span className={style.activeLink}>
                  <SvgIcon icon={icon}/>
              </span>
              <span>{name}</span>
          </a>
      </li>
    )
}