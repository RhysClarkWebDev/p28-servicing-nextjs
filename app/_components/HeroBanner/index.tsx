import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface HeroBannerProps {
    image: StaticImageData;
    title: string;
    subtitle: string;
}

const HeroBanner: FC<HeroBannerProps> = ({ image, title, subtitle }) => {
    return (
        <div className="h-screen w-screen relative lg:h-[70vh]">
            <Image
                className="object-cover h-full w-screen"
                src={image.src}
                width={4000}
                height={2000}
                alt=""
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-opacity-65 bg-black flex justify-center items-center ">
                <div className="text-center w-11/12">
                    <h1 className="text-3xl lg:text-5xl">{title}</h1>
                    <p className="text-xl mt-2">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
