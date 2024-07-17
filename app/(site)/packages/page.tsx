import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/P28ServiceDetailwebCont-175.jpg';
import AllPackages from './_components/AllPackages';
import Wrapper from '@/app/_layout/Wrapper';

export const metadata: Metadata = {
    title: metaData.packages.title,
    description: metaData.packages.description,
};

export default function Packages() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Packages"
                subtitle="With a variety of packages you have plenty to choose from and none fall short of a perfect Service."
            />
            <Wrapper>
                <AllPackages />
            </Wrapper>
        </main>
    );
}
