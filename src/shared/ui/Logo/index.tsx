import React from 'react';
import styles from './Logo.module.css';
import LogoIcon from '@/assets/icons/shared/Logo.svg'

const Logo = () => {
    return (
        <div className={styles.container}>
            <LogoIcon/>
        </div>
    );
};

export default Logo;
