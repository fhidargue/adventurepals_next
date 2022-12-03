import Head from 'next/head';
import Image from 'next/image';
import { AboutUs, HomepageHero } from '../components';

export default function Home() {
    return (
        <>
            <HomepageHero />
            <AboutUs />
        </>
    );
}
