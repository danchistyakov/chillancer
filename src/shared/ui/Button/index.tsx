import React, {FC} from 'react';
import styles from './Button.module.css';
import {IButtonProps} from "@/shared/ui/Button/interfaces";

const Button: FC<IButtonProps> = ({icon = <></>, text}) => {
    return (
        <button className={styles.container}>
            {text}
            {icon}
        </button>
    );
};

export default Button;
