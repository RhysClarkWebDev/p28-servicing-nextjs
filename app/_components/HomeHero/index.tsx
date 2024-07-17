import Image from 'next/image';
import Button from '../Button';
import Background from '@/app/_assets/images/newImages/homeBanner.jpg';

const HomeHero = () => {
    return (
        <div className="h-screen w-screen relative">
            {/* Background Image */}
            <Image
                className="object-cover h-screen w-screen"
                src={Background.src}
                alt="Performance28 Garage with Dodge Challenger"
                width={4000}
                height={2000}
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-opacity-50 bg-black flex justify-center items-center ">
                <div className="text-center w-11/12">
                    <p className="text-xl text-brand">Welcome to</p>
                    <h1 className="text-3xl lg:text-6xl">
                        PERFORMANCE28 SERVICING
                    </h1>
                    <p className="text-xl">
                        Top Car Servicing Experience in the North East.
                    </p>
                    <div className="mt-8 min-w-14">
                        <Button
                            type="button"
                            internalLink="/request-quote"
                            isSecondary
                        >
                            Request Quote
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
