import React, {FC} from 'react';
import styles from './Info.module.css';
import {IInfoProps} from "./interfaces";

const Info: FC<IInfoProps> = ({icon, text}) => {
    return (
        <div className={styles.container}>
            {icon}
            <p>{text}</p>
        </div>
    );
};

export default Info;
