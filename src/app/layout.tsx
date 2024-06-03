import type {Metadata} from "next";
import "./fonts.css";
import "./globals.css";
import Logo from "@/shared/ui/Logo";
import 'swiper/css';
import YandexMap from "@/components/YandexMap";

export const metadata: Metadata = {
    title: "Chillancer",
    description: "Сообщество цифровых номадов. Превращаем рабочие понедельники в приключения.",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    const {data} = await getData()

    return (
        <html lang="ru">
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ed3f0a"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="theme-color" content="#ffffff"/>
        </head>
        <body>
        <Logo/>
        <YandexMap data={data}/>
        {children}
        </body>
        </html>
    );
}

async function getData() {
    const response = await fetch('http://147.45.110.161:1337/api/places', {next: {revalidate: 3600}})
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json();
}
