import styles from "./page.module.css";
import YandexMap from "@/components/YandexMap";

export default function Home() {
    return (
        <main className={styles.main}>
            <YandexMap/>
        </main>
    );
}
