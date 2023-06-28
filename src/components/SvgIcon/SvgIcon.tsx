import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    icon: IconDefinition
    className?: string
}

export const SvgIcon = ({icon, className}: PropsType) => {
    return (
      <FontAwesomeIcon icon={icon} className={className} style={{width: '18px', height: '18px'}}/>
    );
};
