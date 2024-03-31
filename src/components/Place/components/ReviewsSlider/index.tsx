'use client'

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './ReviewsSlider.module.css';

const ReviewsSlider = () => {
    return (
        <Swiper
            className={styles.container}
            spaceBetween={8}
            slidesPerView={1.5}
        >
            <SwiperSlide className={styles.slide}>
                <div className={styles.header}>
                    <p className={styles.name}>Марина</p>
                    <p className={styles.rating}>⭐️ 4.5</p>
                </div>
                <p className={styles.description}>Бизнес-район с большим количеством хороших ресторанов и современной
                    архитектурой. Здесь можно
                    провести фотосессию и попробовать изысканные блюда, сидя на летней веранде.</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <div className={styles.header}>
                    <p className={styles.name}>Марина</p>
                    <p className={styles.rating}>⭐️ 4.5</p>
                </div>
                <p className={styles.description}>Бизнес-район с большим количеством хороших ресторанов и современной
                    архитектурой. Здесь можно
                    провести фотосессию и попробовать изысканные блюда, сидя на летней веранде.</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <div className={styles.header}>
                    <p className={styles.name}>Марина</p>
                    <p className={styles.rating}>⭐️ 4.5</p>
                </div>
                <p className={styles.description}>Бизнес-район с большим количеством хороших ресторанов и современной
                    архитектурой. Здесь можно
                    провести фотосессию и попробовать изысканные блюда, сидя на летней веранде.</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <div className={styles.header}>
                    <p className={styles.name}>Марина</p>
                    <p className={styles.rating}>⭐️ 4.5</p>
                </div>
                <p className={styles.description}>Бизнес-район с большим количеством хороших ресторанов и современной
                    архитектурой. Здесь можно
                    провести фотосессию и попробовать изысканные блюда, сидя на летней веранде.</p>
            </SwiperSlide>
        </Swiper>
    );
};

export default ReviewsSlider;
