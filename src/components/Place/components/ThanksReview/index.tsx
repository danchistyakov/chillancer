import React, {FC} from 'react';
import styles from './ThanksReview.module.css';
import {Drawer} from 'vaul';
import {IThanksReviewProps} from "./interfaces";
import Button from "@/shared/ui/Button";
import Link from "next/link";
import {useRouter} from "next/navigation";

const ThanksReview: FC<IThanksReviewProps> = ({isOpen, onHandlePopup, onClose}) => {
    const router = useRouter();

    const handleClose = () => {
        onHandlePopup(false);
        onClose(false);
        setTimeout(() => {
            router.push('/');
        }, 500)
    }

    return (
        <Drawer.NestedRoot open={isOpen} onOpenChange={onHandlePopup}>
            <Drawer.Portal>
                <Drawer.Overlay className={styles.overlay}/>
                <Drawer.Content className={styles.container} style={{zIndex: 2}}>
                    <div className={styles.thumb}/>
                    <div>
                        <p className={styles.title}>Спасибо ❤️</p>
                        <p className={styles.description}>Только что. На этом месте. Ты совершил вклад в развитие
                            сообщества
                            чилансеров.</p>
                    </div>
                    <Button text='На главную' onClick={handleClose}/>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.NestedRoot>
    );
};

export default ThanksReview;
