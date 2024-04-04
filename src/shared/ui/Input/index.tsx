import React, {FC} from 'react';
import styles from './Input.module.css'
import {IInputProps} from "./interfaces";

const Input: FC<IInputProps> = ({className = '', onChange = null, placeholder}) => {
    return (
        <input className={`${styles.input} ${className}`} onChange={onChange} placeholder={placeholder}>

        </input>
    );
};

export default Input;
