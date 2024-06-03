'use client'

import React, {FC, useState} from 'react';
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
import {useRouter} from "next/navigation";
import Markdown from "markdown-to-jsx";
import OpenMapApp from "@/components/Place/components/OpenMapApp";
import ReviewPopup from "@/components/Place/components/ReviewPopup";
import ThanksReview from "@/components/Place/components/ThanksReview";

const Place: FC<any> = ({data}) => {
    const [open, setOpen] = useState(true)
    const [isOpenMap, setOpenMap] = useState(false);
    const [isOpenReview, setOpenReview] = useState(false);
    const [isThanksReview, setThanksReview] = useState(false);

    const router = useRouter()
    console.log(data)

    const {address, categories, description, features, images, metro, reviews, title, workingHours} = data;

    const handleChange = (data: boolean) => {
        if (!data) {
            setOpen(false)
            setTimeout(() => {
                router.push('/');
            }, 100)
        }
    }

    const onHandleMapPopup = (data: any) => {
        setOpenMap(prev => typeof data === 'boolean' ? data : !prev)
    }

    const onHandleReviewPopup = (data: any) => {
        setOpenReview(prev => typeof data === 'boolean' ? data : !prev)
    }

    const onHandleThanksPopup = (data: any) => {
        setThanksReview(prev => typeof data === 'boolean' ? data : !prev)
    }

    const onCloseDrawer = () => {
        setOpen(false)
    }


    return (
        <Drawer.Root open={open} onOpenChange={handleChange}>
            <Drawer.Portal>
                <Drawer.Overlay className={styles.overlay}/>
                <Drawer.Content className={styles.container} style={{zIndex: 1}}>
                    <div className={styles.content}>
                        <div className={styles.thumb}/>
                        <h1 className={styles.title}>{title}</h1>
                        <CloseIcon className={styles.closeIcon} onClick={onCloseDrawer}/>
                        <p className={styles.categories}>{categories.data.map(({attributes}) => attributes.title).join(', ')}</p>
                        <Slider data={images.data}/>
                        <div className={styles.infos}>
                            <Info icon={<Location className={styles.infoIcon}/>} text={address.address}/>
                            <Info icon={<Train className={styles.infoIcon}/>} text={metro}/>
                            <Info icon={<Clock className={styles.infoIcon}/>} text={workingHours}/>
                        </div>
                        <Button className={styles.routeButton} icon={<NavigationArrow/>} onClick={onHandleMapPopup}
                                text='Построить маршрут'/>
                        <h3 className={styles.subtitle}>Описание</h3>
                        <Markdown className={styles.description}>{description}</Markdown>
                        {features.data.length > 0 && (
                            <>
                                <h3 className={styles.subtitle}>Преимущества</h3>
                                <div className={styles.features}>
                                    {features.data.map(({attributes, id}) => (
                                        <Feature key={id} text={attributes.title}/>
                                    ))}
                                </div>
                            </>
                        )}
                        <ReviewsSlider data={reviews.data}/>
                        <Button text='Оставить отзыв' onClick={onHandleReviewPopup}/>
                    </div>
                    <OpenMapApp coordinates={data.address.coordinates} isOpenMap={isOpenMap}
                                onHandleMapPopup={onHandleMapPopup}/>
                    <ReviewPopup isOpenReview={isOpenReview} onHandleThanksPopup={onHandleThanksPopup}
                                 onHandleReviewPopup={onHandleReviewPopup}/>
                    <ThanksReview isOpen={isThanksReview} onHandlePopup={onHandleThanksPopup} onClose={setOpen}/>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default Place;
