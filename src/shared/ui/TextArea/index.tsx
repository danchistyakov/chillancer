import React, {FC} from 'react';
import styles from './TextArea.module.css'
import {ITextAreaProps} from "./interfaces";

const TextArea: FC<ITextAreaProps> = ({className = '', onChange = null, placeholder}) => {
    return (
        <textarea className={`${styles.textarea} ${className}`} onChange={onChange} placeholder={placeholder}>

        </textarea>
    );
};

export default TextArea;
