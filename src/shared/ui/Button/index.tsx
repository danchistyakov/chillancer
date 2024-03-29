import React, {FC} from 'react';
import styles from './Button.module.css';
import {IButtonProps} from "@/shared/ui/Button/interfaces";

const Button: FC<IButtonProps> = ({text}) => {
    return (
        <button className={styles.container}>
            {text}
        </button>
    );
};

export default Button;
