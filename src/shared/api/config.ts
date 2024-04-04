import Fetch from './Fetch';

const domain = process.env.NEXT_PUBLIC_API_URL;

export const $reviews = Fetch(`${domain}/api/reviews`);
