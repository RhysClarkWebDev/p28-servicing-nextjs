import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/contactPageImage.jpg';
import Wrapper from '@/app/_layout/Wrapper';
import ContactAndMap from './_components/ContactAndMap';

export const metadata: Metadata = {
    title: metaData.contact.title,
    description: metaData.contact.description,
};

export default function Contact() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Contact Us"
                subtitle="Get in touch with Performance28 today with our contact information below"
            />
            <Wrapper>
                <ContactAndMap />
            </Wrapper>
        </main>
    );
}
