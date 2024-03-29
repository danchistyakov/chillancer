import React, {FC} from 'react';
import styles from './Feature.module.css';
import {IFeatureProps} from "./interfaces";

const Feature: FC<IFeatureProps> = ({text}) => {
    return (
        <span className={styles.container}>
            {text}
        </span>
    );
};

export default Feature;
