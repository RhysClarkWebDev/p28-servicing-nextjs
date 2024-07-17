import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/newImages/luxuryServicing.jpg';
import Wrapper from '@/app/_layout/Wrapper';
import ImageFlexText from '@/app/_components/ImageTextFlex';

// Images
import ExpertiseImage from '@/app/_assets/images/Luxury/P28-Service-Detail-web-Cont-438-1024x684.webp';
import FacilitiesImage from '@/app/_assets/images/Luxury/P28-Service-Detail-web-Cont-2-scaled.webp';
import SolutionsImage from '@/app/_assets/images/Luxury/P28-Service-Detail-web-Cont-103-1024x684.webp';
import SatisfactionImage from '@/app/_assets/images/Luxury/P28-Service-Detail-web-Cont-5-scaled.webp';

export const metadata: Metadata = {
    title: metaData.luxury.title,
    description: metaData.luxury.description,
};

export default function Luxury() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Luxury, Sports & American Muscle Car Servicing"
                subtitle="Servicing at the highest standards for the highest standard vehicles"
            />

            <Wrapper>
                <ImageFlexText
                    title="Expertise"
                    text={[
                        `Welcome to Performance28, Your Luxury, Supercar, and Sports Cars servicing center, 
                        where exceptional performance meets unrivaled craftsmanship. With a passion for 
                        automotive excellence, we provide top-notch servicing solutions tailored specifically 
                        to the needs of Luxury car owners. Our experienced team of skilled technicians possess 
                        extensive knowledge and hands-on experience working with exclusive automotive brands. 
                        Trust us to ensure your vehicle receives meticulous care.`,
                    ]}
                    image={ExpertiseImage}
                />

                <ImageFlexText
                    title="State Of The Art Facilities"
                    text={[
                        `Equipped with cutting-edge technology and tools, our purpose-built facilities cater 
                        to the unique requirements of Luxury, Supercar, and Sports Cars. Our advanced 
                        diagnostic equipment, precision-engineered machinery, and genuine manufacturer parts 
                        enable us to deliver precise and high-quality servicing for your vehicle, all while 
                        maintaining your manufacturers warranty.`,

                        `Our state-of-the-art facilities provide us with the capability to perform a wide 
                        range of services with utmost precision. From computer-aided diagnostics to specialised 
                        equipment for handling delicate components, we have invested in the latest advancements 
                        in automotive technology. This ensures that we can meet the exacting standards of 
                        Luxury car owners and deliver exceptional results that match the craftsmanship of your 
                        vehicle.`,
                    ]}
                    image={FacilitiesImage}
                    flip
                />

                <ImageFlexText
                    title="Comprehensive Servicing Solutions"
                    text={[
                        `Our dedicated team specializes in routine maintenance and complex repairs for 
                        Luxury, Supercar, and Sports Cars. From oil changes to brake upgrades, engine 
                        tuning to electrical repairs, we provide comprehensive servicing solutions. 
                        We understand the specific needs of different automotive brands, ensuring 
                        your vehicle receives the attention it deserves.`,

                        `Our commitment to comprehensive servicing extends to all aspects of your 
                        vehicle. Whether it's addressing common wear and tear or tackling intricate 
                        mechanical issues, we take a meticulous approach to ensure that your car is 
                        operating at its best. We utilize specialized tools and techniques that 
                        are tailored to the unique requirements of Luxury, Supercar, and Sports Cars, 
                        providing you with peace of mind and optimal performance on the road.`,
                    ]}
                    image={SolutionsImage}
                />

                <ImageFlexText
                    title="Commitment To Customer Satisfaction"
                    text={[
                        `We prioritize your satisfaction above all else. Our friendly and knowledgeable 
                        staff is committed to providing personalized attention and transparent 
                        communication throughout the servicing process. Trust us to exceed your 
                        expectations, building a long-term relationship based on trust, reliability, 
                        and exceptional service quality. Schedule an appointment today for the 
                        pinnacle of tailored automotive servicing.`,

                        `We understand that Luxury car owners have high standards and unique preferences. 
                        Our commitment to customer satisfaction extends beyond the technical aspects 
                        of servicing. We take the time to listen to your concerns, answer your questions, 
                        and address any specific requests you may have. By providing a personalized 
                        experience and ensuring clear and open communication, we strive to deliver a 
                        level of service that matches the exceptional nature of your Luxury, Supercar, 
                        or Sports Car.`,
                    ]}
                    image={SatisfactionImage}
                    flip
                />
            </Wrapper>
        </main>
    );
}
