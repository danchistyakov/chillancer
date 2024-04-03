import React, {FC} from 'react';
import styles from './OpenMapApp.module.css';
import {Drawer} from 'vaul';
import Image from "next/image";
import {IOpenMapAppProps} from "./interfaces";

const OpenMapApp: FC<IOpenMapAppProps> = ({coordinates, isOpenMap, onHandleMapPopup}) => {
    return (
        <Drawer.NestedRoot open={isOpenMap} onOpenChange={onHandleMapPopup}>
            <Drawer.Portal>
                <Drawer.Overlay className={styles.overlay}/>
                <Drawer.Content className={styles.container} style={{zIndex: 1}}>
                    <div className={styles.thumb}/>
                    <p className={styles.title}>Где откроем?</p>
                    <div className={styles.apps}>
                        <a href={`https://www.google.com/maps/place/${coordinates.lat}, ${coordinates.lng}`} className={styles.app}>
                            <Image className={styles.logo} alt='Google Maps' src='/images/OpenMapApp/GoogleMaps.png'
                                   width={90} height={90}/>
                            <p className={styles.appName}>Google</p>
                        </a>
                        <a href={`yandexmaps://maps.yandex.com/?ll=${coordinates.lng}, ${coordinates.lat}&z=12`} className={styles.app}>
                            <Image className={styles.logo} alt='Яндекс Карты' src='/images/OpenMapApp/YandexMaps.png'
                                   width={90} height={90}/>
                            <p className={styles.appName}>Yandex</p>
                        </a>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.NestedRoot>
    );
};

export default OpenMapApp;
