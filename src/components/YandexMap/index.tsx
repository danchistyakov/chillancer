'use client'

import React from 'react';
import {Map, Placemark, Rectangle, YMaps} from "@pbe/react-yandex-maps";

const YandexMap = () => {
    return (
        <YMaps>
            <Map defaultState={{center: [55.740200, 37.583856], zoom: 11}} width='100%' height={600}>
                <Placemark defaultGeometry={[55.781106, 37.567824]}/>
                <Rectangle
                    geometry={[
                        [55.66, 37.6],
                        [55.71, 37.69],
                    ]}
                    options={{
                        draggable: true,
                        fillColor: "#ffff0022",
                        strokeColor: "#3caa3c88",
                        strokeWidth: 7,
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;
