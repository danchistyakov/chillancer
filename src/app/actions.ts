'use server'

import {$reviews} from "@/shared/api/config";

export const createReview = async (review, placeId) => {
    const {data} = await $reviews.post('', {data: {...review, place: {connect: [placeId]}, publishedAt: null}})
    return data;
}
