import BookingForm from '@/app/_components/BookingForm';
import GoogleIframe from '@/app/_components/GoogleIframe';
import { FC } from 'react';

interface BookingAndMapProps {
    includeTitle?: boolean;
}

const BookingAndMap: FC<BookingAndMapProps> = ({ includeTitle }) => {
    return (
        <section>
            {includeTitle && (
                <h2 className="text-3xl text-white mb-8">Request a Quote</h2>
            )}
            <div className="flex flex-col lg:flex-row gap-8">
                <BookingForm />

                <div className="flex grow">
                    <GoogleIframe />
                </div>
            </div>
        </section>
    );
};

export default BookingAndMap;
