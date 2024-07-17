import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/durham-castle.jpg';
import GoogleIframe from '@/app/_components/GoogleIframe';

export const metadata: Metadata = {
    title: metaData.location.title,
    description: metaData.location.description,
};

export default function Location() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Location"
                subtitle="Car Garage located in North East UK"
            />
            <section className="h-screen w-screen md:h-[70vh]">
                <GoogleIframe />
            </section>
        </main>
    );
}
