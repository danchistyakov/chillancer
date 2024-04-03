import React from 'react';
import Place from "@/components/Place";

interface MetaDataParams {
    params: { placeId: number }
}

export default async function Page({params}: MetaDataParams) {
    const {data}: any = await getData(params.placeId)

    return (
        <Place data={data.attributes}/>
    );
};

async function getData(placeId: number) {
    const response = await fetch(`http://147.45.110.161:1337/api/places/${placeId}?populate=*`, {next: {revalidate: 3600}})
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json();
}
