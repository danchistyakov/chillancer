'use client'

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './ReviewsSlider.module.css';
import Markdown from "markdown-to-jsx";

const ReviewsSlider = ({data}) => {
    return (
        <Swiper
            className={styles.container}
            spaceBetween={8}
            slidesPerView={1.5}
        >
            {data.map(({attributes, id}) => (
                <SwiperSlide className={styles.slide} key={id}>
                    <div className={styles.header}>
                        <p className={styles.name}>{attributes.name}</p>
                        <p className={styles.rating}>⭐️ {attributes.rate}</p>
                    </div>
                    <Markdown className={styles.description}>{attributes.content}</Markdown>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewsSlider;
