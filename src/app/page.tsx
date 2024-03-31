"use client"

import styles from "./page.module.css";
import YandexMap from "@/components/YandexMap";
import Place from "@/components/Place";

export default function Home() {
    return (
        <main className={styles.main}>
            <YandexMap/>
            <Place/>
        </main>
    );
}
