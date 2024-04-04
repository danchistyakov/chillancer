import React from 'react';
import styles from './Logo.module.css';
import LogoIcon from '@/assets/icons/shared/Logo.svg'
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className={styles.container}>
            <LogoIcon/>
        </Link>
    );
};

export default Logo;
