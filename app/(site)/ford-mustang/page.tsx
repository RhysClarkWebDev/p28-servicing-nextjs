import { Metadata } from 'next';
import { metaData } from '@/app/_data/metaData';
import HeroBanner from '@/app/_components/HeroBanner';

import Background from '@/app/_assets/images/Mustang/mustang-showroom.jpg';
import Wrapper from '@/app/_layout/Wrapper';
import ImageFlexText from '@/app/_components/ImageTextFlex';
import PricingTable from '@/app/_components/PricingTable';

// Images
import MustangFord from '@/app/_assets/images/Mustang/Showroom-Mustangs-20240212-9-Edit-scaled.jpeg';
import MustangFordModifications from '@/app/_assets/images/Mustang/Showroom-Mustangs-20240212-40-Edit-scaled.jpeg';

export const metadata: Metadata = {
    title: metaData.mustang.title,
    description: metaData.mustang.description,
};

const mustangTableOptions = [
    {
        name: 'Mustang 5.0 litre GT First Service',
        description: 'Oil, Oil filter, Sump Plug',
        pricing: '£265 inc VAT',
    },
    {
        name: 'Mustang 5.0 litre GT Second Service',
        description: 'Oil, Oil filter, Sump Plug, Pollen Filter',
        pricing: '£310 inc VAT',
    },
    {
        name: 'Mustang 5.0 litre GT Third service',
        description: 'oil, oil filter, sump plug, Air Filter',
        pricing: '£386 inc VAT ',
    },
    {
        name: 'Mustang 5.0 litre GT Fourth service',
        description:
            'Oil, Oil filter, sump plug, pollen filter and spark plugs.',
        pricing: '£595 inc VAT',
    },
    {
        name: 'Mustang 5.0 brake fluid service',
        description: 'Every 2 Years',
        pricing: '£85 inc VAT',
    },
];

const mustangModificationsTableOptions = [
    {
        name: 'Mustang Steeda ultimate dual rate handling springs lowering.',
        description: 'Magneride cars',
        pricing: '£899 inc VAT',
    },
    {
        name: 'Ford mustang lowering',
        description: 'Steeda lowering standard springs',
        pricing: '£699 inc VAT',
    },
    {
        name: 'Mustang 5.0 litre Steeda H-pipe fitting ',
        description: 'Premium Fitting Service',
        pricing: '£399 inc VAT ',
    },
    {
        name: 'Mustang bodykit fitting',
        description: 'Premium Fitting Service',
        pricing: 'from £85 per hour',
    },
    {
        name: 'Ford mustang Maxton Street Pro bodykit ',
        description:
            'Front splitter, side skirts, side splitters, rear diffuser.',
        pricing: '£999 Fitted',
    },
];

export default function About() {
    return (
        <main>
            <HeroBanner
                image={Background}
                title="Ford Mustang Servicing"
                subtitle="We are Ford Specialists"
            />
            <Wrapper>
                <ImageFlexText
                    pretitle="We can now"
                    title="Update Ford Digital Service Record"
                    text={[
                        `Our ability to update the Ford Digital Service Record specifically 
                        for Mustang owners  underscores our expertise and passion for this 
                        iconic vehicle. We know that owning a Mustang is more than just 
                        having a car—it's about being part of a legacy. By ensuring that 
                        your Mustang's service history is accurately and meticulously 
                        recorded in Ford's official system, we help you protect the value, 
                        performance, and heritage of your vehicle. This commitment to 
                        precision and excellence sets us apart as a service provider 
                        that truly understands the unique needs of Mustang enthusiasts. 
                        We take pride in offering a service that not only maintains your 
                        vehicle's integrity but also enhances your ownership experience, 
                        making us the ideal partner for those who demand the best for 
                        their Mustang.`,
                    ]}
                    image={MustangFord}
                />

                <PricingTable
                    title="Ford Mustang Maintenance Prices"
                    options={mustangTableOptions}
                />

                <div />

                <ImageFlexText
                    pretitle="Don’t forget to"
                    title="Modify Your Ford Mustang"
                    text={[
                        `Don’t miss the chance to elevate your Ford Mustang to the next level 
                        with custom modifications! Whether it’s boosting performance, enhancing 
                        style, or adding cutting-edge features, modifying your Mustang is the 
                        perfect way to make it uniquely yours. From exhaust systems to custom 
                        wheels, every upgrade you choose reflects your personality and passion 
                        for this legendary ride. So why settle for stock when you can create 
                        something truly extraordinary? Unleash your Mustang’s full potential 
                        and make it a true reflection of who you are.`,
                    ]}
                    image={MustangFordModifications}
                />

                <PricingTable
                    title="Ford Mustang Modification Prices"
                    options={mustangModificationsTableOptions}
                />
            </Wrapper>
        </main>
    );
}
