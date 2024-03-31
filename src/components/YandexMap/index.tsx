'use client'

import React, {useEffect, useRef} from 'react';
import {Map, Placemark, useYMaps, YMaps} from "@pbe/react-yandex-maps";

const YandexMap = () => {
    //const mapRef = useRef(null);
    // const ymaps = useYMaps(['Map', 'Placemark', 'templateLayoutFactory']);
    //
    // useEffect(() => {
    //     if (!ymaps || !mapRef.current) {
    //         return;
    //     }
    //     console.log(ymaps)
    //     var myMap = new ymaps.Map(mapRef.current, {
    //             center: [55.784111, 37.560727],
    //             zoom: 10,
    //             controls: ['control.ZoomControl']
    //         }),
    //
    //         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //             hintContent: 'Собственный значок метки',
    //             balloonContent: 'Это красивая метка'
    //         }, {
    //             // Опции.
    //             // Необходимо указать данный тип макета.
    //             iconLayout: 'default#image',
    //             // Своё изображение иконки метки.
    //             iconImageHref: '/Map_Icon.svg',
    //             // Размеры метки.
    //             iconImageSize: [39, 49],
    //             // Смещение левого верхнего угла иконки относительно
    //             // её "ножки" (точки привязки).
    //             iconImageOffset: [-5, -38]
    //         });
    //
    //     myMap.geoObjects
    //         .add(myPlacemark)
    // }, [ymaps]);

    return (
        <YMaps>
            <Map
                width="100%"
                height={844}
                // modules={[
                //     'control.ZoomControl',
                //     'control.FullscreenControl',
                //     'geoObject.addon.balloon',
                //     'geoObject.addon.hint',
                // ]}
                defaultState={{center: [55.751574, 37.573856], zoom: 11}}
                //className={className}
                //{...rest}
            >
                {['placeMarks'].map((_, index: number) => (
                    <Placemark
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        geometry={[55.784111, 37.560727]}
                        options={{
                            iconColor: 'var(--primary)',
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: '/Map_Icon.svg',
                            // Размеры метки.
                            iconImageSize: [39, 49],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-5, -38]
                        }}
                    />
                ))}
            </Map>
        </YMaps>
    )
};

export default YandexMap;
