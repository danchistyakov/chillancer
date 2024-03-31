'use client'

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './Slider.module.css';

const Slider = () => {
    return (
        <Swiper
            className={styles.container}
            spaceBetween={8}
            slidesPerView={1.5}
        >
            <SwiperSlide className={styles.slide}>
                <img data-vaul-no-drag={true}
                    src='https://avatars.mds.yandex.net/get-altay/10963815/2a0000018dfa5c196a1e2dbdfc985964f6d2/XXXL'/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img data-vaul-no-drag={true}
                    src='https://avatars.mds.yandex.net/get-altay/11937297/2a0000018e0fe8940cc55f005fe003c8c29d/XXXL'/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img data-vaul-no-drag={true}
                    src='https://avatars.mds.yandex.net/get-altay/11860411/2a0000018dfa0730189e53d05d68f4237685/XXXL'/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img data-vaul-no-drag={true}
                    src='https://avatars.mds.yandex.net/get-altay/11403733/2a0000018e0b0f0f25acd014cadfaf182fb4/XXXL'/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
