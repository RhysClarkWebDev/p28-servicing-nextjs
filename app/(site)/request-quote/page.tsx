import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/newImages/booking.jpg';
import BookingAndMap from '@/app/_components/BookingAndMap';
import Wrapper from '@/app/_layout/Wrapper';

export const metadata: Metadata = {
    title: metaData.quote.title,
    description: metaData.quote.description,
};

export default function Quote() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Request Quote"
                subtitle="Request a quote with Performance28 for Car Servicing, Repairs & Diagnostics"
            />

            <Wrapper>
                <BookingAndMap />
            </Wrapper>
        </main>
    );
}
