import React, {FC} from 'react';
import styles from './Button.module.css';
import {IButtonProps} from "@/shared/ui/Button/interfaces";

const Button: FC<IButtonProps> = ({className = '', icon = <></>, onClick, text}) => {
    return (
        <button className={`${styles.container} ${className}`} onClick={onClick}>
            {text}
            {icon}
        </button>
    );
};

export default Button;
