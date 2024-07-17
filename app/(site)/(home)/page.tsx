import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HomeHero from '@/app/_components/HomeHero';
import Wrapper from '@/app/_layout/Wrapper';
import ImageFlexText from '@/app/_components/ImageTextFlex';

import WhyUs from '@/app/_assets/images/newImages/whoAreP28.jpg';
import MoparImage from '@/app/_assets/images/moparSection.jpg';
import DiagnosticsImage from '@/app/_assets/images/p28diagnosticsmain.jpg';
import BookingAndMap from '@/app/_components/BookingAndMap';

export const metadata: Metadata = {
    title: metaData.home.title,
    description: metaData.home.description,
};

export default function Home() {
    return (
        <main>
            <HomeHero />
            <Wrapper>
                <ImageFlexText
                    title="Why Choose Performance28 Servicing?"
                    text={[
                        `With a wealth of knowledge Performance28 are one of the North Easts 
                        leading Car Servicing and Sales Garages. Here to serve you and build 
                        a long term relationship built on trust and professional quality.`,

                        `Our team is trained to the best quality and offer transparent advice, 
                        professional service and industry leading technical ability.`,

                        `The heart of Performance28 is the Customers and the Staff. It is our 
                        most important quality to make you feel valued, and give the genuine 
                        professional guidance on the best way to maintain your vehicle. Providing 
                        you the best value for money you will find anywhere in the UK.`,
                    ]}
                    image={WhyUs}
                    showChecks
                />
                <ImageFlexText
                    title="Mopar Diagnostics Services"
                    text={[
                        `We're thrilled to announce a significant enhancement to our servicing 
                        capabilities. With the recent integration of the Mopar diagnostics 
                        device, we now have the expertise to service a wider range of brands 
                        under the Mopar umbrella. This includes Alfa Romeo, Jeep, Fiat, 
                        Dodge, Chrysler, and Ram vehicles.`,

                        `Our cutting-edge diagnostic tool empowers us to delve deeper into your 
                        vehicle's systems, providing comprehensive service and maintenance 
                        solutions. From routine check-ups to complex diagnostics, we're equipped 
                        to handle it all with precision and efficiency.`,

                        `Furthermore, our team can now access the complete service history for 
                        Mopar brands, ensuring a thorough understanding of your vehicle's 
                        maintenance journey. With this invaluable information at our fingertips, 
                        we can tailor our services to meet your specific needs and preferences 
                        seamlessly.`,
                    ]}
                    image={MoparImage}
                    flip
                />

                <ImageFlexText
                    title="What makes us special?"
                    text={[
                        `Exceptional car servicing in the UK. With our dedicated team of skilled 
                        technicians, state-of-the-art facilities, and a commitment to customer 
                        satisfaction, we provide a top-notch car service experience. From routine 
                        maintenance to repairs and performance enhancements, our experts deliver 
                        professional expertise tailored to your needs.`,

                        `Equipped with cutting-edge diagnostic tools, we ensure swift and accurate 
                        solutions. Trust our transparent communication and competitive pricing for 
                        honest recommendations.`,

                        `Join our community of satisfied clients who choose Performance28 for 
                        their car service needs. Book your next appointment today and experience 
                        the difference.`,
                    ]}
                    image={DiagnosticsImage}
                />

                <BookingAndMap includeTitle />
            </Wrapper>
        </main>
    );
}
