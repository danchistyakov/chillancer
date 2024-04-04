'use client'

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './Slider.module.css';

const Slider = ({data}) => {
    return (
        <Swiper
            className={styles.container}
            spaceBetween={8}
            slidesPerView={1.5}
        >
            {data.map(({attributes, id}) => (
                <SwiperSlide className={styles.slide} key={id}>
                    <img data-vaul-no-drag={true}
                         src={`${process.env.NEXT_PUBLIC_API_URL}${attributes.formats.small.url}`}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
