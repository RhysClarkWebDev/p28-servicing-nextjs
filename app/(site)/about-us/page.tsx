import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/newImages/whoAreP28.jpg';
import Wrapper from '@/app/_layout/Wrapper';
import ImageFlexText from '@/app/_components/ImageTextFlex';

// Images
import AboutImage from '@/app/_assets/images/311983790_648185326863680_3487636654152526024_n.jpg';

export const metadata: Metadata = {
    title: metaData.about.title,
    description: metaData.about.description,
};

export default function About() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="About Us"
                subtitle="Learn more about the amazing team you are trusting your vehicle to"
            />
            <Wrapper>
                <ImageFlexText
                    title="Who Are Performance28?"
                    text={[
                        `Already dominating the sector of performance car sales & modifications, 
                        we at Performance28 have decided it's time to expand our 
                        expertise to servicing and repairs for all cars, regardless of make or model. 
                        Our dedicated team boasts a combined wealth of 25 years of experience, with 
                        backgrounds at renowned garages such as JM Imports. This extensive knowledge 
                        ensures our servicing capabilities are on par with our renowned ability to 
                        modify and maintain the highest quality vehicles.`,

                        `At Performance28, we pride ourselves on delivering top-tier service for 
                        every vehicle that comes through our doors. Our state-of-the-art facility 
                        is equipped with the latest diagnostic tools and technology, enabling us 
                        to provide precise and efficient repairs. Whether you're driving a 
                        high-performance sports car or a reliable family vehicle, our skilled 
                        technicians treat every car with the same level of care and attention 
                        to detail. Trust Performance28 to keep your vehicle in peak condition, 
                        ensuring safety, performance, and peace of mind on the road.`,
                    ]}
                    image={AboutImage}
                    showChecks
                />
            </Wrapper>
        </main>
    );
}
