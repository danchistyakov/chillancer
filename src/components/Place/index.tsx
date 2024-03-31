'use client'

import React, {useState} from 'react';
import styles from './Place.module.css';
import {Drawer} from 'vaul';
import Slider from "@/components/Place/components/Slider";
import Feature from "@/components/Place/components/Feature";
import Button from "@/shared/ui/Button";
import Info from "@/components/Place/components/Info";
import CloseIcon from '@/assets/icons/Place/CloseIcon.svg'
import Location from '@/assets/icons/Place/Location.svg'
import Train from '@/assets/icons/Place/Train.svg'
import Clock from '@/assets/icons/Place/Clock.svg'
import NavigationArrow from '@/assets/icons/shared/Button/NavigationArrow.svg'
import ReviewsSlider from "@/components/Place/components/ReviewsSlider";

const Place = () => {
    const [isClose, setClose] = useState(false);
    const [open, setOpen] = useState(true)

    // if (isClose) {
    //     return <></>
    // }

    return (
        <Drawer.Root>
            <Drawer.Trigger asChild>
                <button className={styles.button}>ОТКРЫТЬ КРАСИВУЮ ВСПЛЫВАШКУ</button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className={styles.overlay}/>
                <Drawer.Content className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.thumb}/>
                        <h1 className={styles.title}>Mátes Pizza&Bar</h1>
                        <p className={styles.categories}>Ресторан, Кофейня</p>
                        <Slider/>
                        <div className={styles.infos}>
                            <Info icon={<Location/>} text='Ленинградский просп., 29, стр. 5'/>
                            <Info icon={<Train/>} text='м. Динамо'/>
                            <Info icon={<Clock/>} text='c 10:00 до 20:00'/>
                        </div>
                        <div className={styles.middle}>
                            <Button icon={<NavigationArrow/>} text='Построить маршрут'/>
                        </div>
                        <h3 className={styles.subtitle}>Описание</h3>
                        <p className={styles.description}>Бизнес-район с большим количеством хороших ресторанов и
                            современной
                            архитектурой. Здесь можно
                            провести фотосессию и попробовать изысканные блюда, сидя на летней веранде. </p>
                        <h3 className={styles.subtitle}>Преимущества</h3>
                        <div className={styles.features}>
                            {['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'].map((item, key) => (
                                <Feature key={key} text={item}/>
                            ))}
                        </div>
                        <ReviewsSlider/>
                        <Button text='Оставить отзыв'/>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default Place;
