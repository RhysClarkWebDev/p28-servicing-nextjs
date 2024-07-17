import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/services.jpg';
import AllServicesList from './_components/AllServicesInfo';
import Wrapper from '@/app/_layout/Wrapper';

export const metadata: Metadata = {
    title: metaData.services.title,
    description: metaData.services.description,
};

export default function Services() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Services"
                subtitle="View our plethora of services we can carry out in our state of the art Garage"
            />
            <Wrapper>
                <AllServicesList />
            </Wrapper>
        </main>
    );
}
