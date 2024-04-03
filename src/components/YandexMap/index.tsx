'use client'

import React, {FC} from 'react';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import { useRouter} from "next/navigation";

const YandexMap: FC<any> = ({data}) => {
    const router = useRouter()

    return (
        <YMaps>
            <Map
                width="100%"
                height={844}
                defaultState={{center: [55.751574, 37.573856], zoom: 11}}
            >
                {data?.map((item, index: number) => (
                    <Placemark
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        geometry={[item.attributes.address.coordinates.lat, item.attributes.address.coordinates.lng]}
                        onClick={() => router.push(`/place/${item.id}`)}
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
