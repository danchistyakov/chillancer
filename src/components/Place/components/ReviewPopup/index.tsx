import React, {useState} from 'react';
import styles from './ReviewPopup.module.css';
import {Drawer} from "vaul";
import Button from "@/shared/ui/Button";
import StarIcon from '@/assets/icons/Place/ReviewPopup/StarIcon.svg'
import Input from "@/shared/ui/Input";
import TextArea from "@/shared/ui/TextArea";
import {createReview} from "@/app/actions";

const ReviewPopup = ({isOpenReview, onHandleReviewPopup, onHandleThanksPopup}) => {
    const [review, setReview] = useState({content: '', name: '', rate: 0})

    const onSelectStar = (e) => {
        const rate = Number(e.currentTarget.id);
        setReview(prev => ({...prev, rate}));
    }

    const onSendReview = async () => {
        const placeId = Number(window.location.href.split('/')[4]);
        const {data} = await createReview(review, placeId);
        if (data) {
            onHandleReviewPopup(false)
            onHandleThanksPopup(true)
        }
    }

    return (
        <Drawer.NestedRoot open={isOpenReview} onOpenChange={onHandleReviewPopup}>
            <Drawer.Portal>
                <Drawer.Overlay className={styles.overlay}/>
                <Drawer.Content className={styles.container} style={{zIndex: 1}}>
                    <div className={styles.thumb}/>
                    <p className={styles.title}>Оставь свой отзыв</p>
                    <Input onChange={(e) => setReview(prev => ({...prev, name: e.target.value}))}
                           placeholder='Как отображать твоё имя?'/>
                    <TextArea onChange={(e) => setReview(prev => ({...prev, content: e.target.value}))}
                              className={styles.textarea} placeholder='Ты можешь написать свой отзыв тут.'/>
                    <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map((item, key) => (
                            <StarIcon className={item <= review.rate ? styles.activeStar : ''} id={item} key={key}
                                      onClick={onSelectStar}/>
                        ))}
                    </div>
                    <p className={styles.info}>Проверка отзыва от 2-х часов. Спасибо тебе ❤️</p>
                    <Button text='Отправить' onClick={onSendReview}/>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.NestedRoot>
    );
};

export default ReviewPopup;
