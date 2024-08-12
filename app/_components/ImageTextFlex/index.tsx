import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa';

interface ImageFlexTextProps {
    pretitle?: string;
    title: string;
    text: string[];
    image: StaticImageData;
    imageAlt?: boolean;
    showChecks?: boolean;
    minImageHeight?: number;
    containImage?: boolean;
    id?: string;
    flip?: boolean;
}

const ImageFlexText: FC<ImageFlexTextProps> = ({
    pretitle,
    title,
    text,
    image,
    imageAlt,
    showChecks,
    minImageHeight,
    containImage,
    id,
    flip,
}) => {
    return (
        <article id={id}>
            <div
                className={clsx(
                    'flex gap-8 flex-col lg:flex-row',
                    flip && '!flex-row-reverse'
                )}
            >
                {/* Text */}
                <div className="lg:w-1/2 flex flex-col">
                    {pretitle && (
                        <p className="font-semibold text-xl">{pretitle}</p>
                    )}
                    <h2 className="text-3xl mb-4">{title}</h2>
                    {Array.isArray(text) &&
                        text.map((para) => (
                            <p key={para} className="text-lg mb-3 last:mb-0">
                                {para}
                            </p>
                        ))}
                    {showChecks && (
                        <div className="flex flex-col md:flex-row gap-x-7 gap-y-3 mt-8">
                            <div className="flex gap-2">
                                <FaCheck className="fill-brand" size={30} />
                                <h4 className="text-brand text-2xl">
                                    Qualified Technicians
                                </h4>
                            </div>

                            <div className="flex gap-2">
                                <FaCheck className="fill-brand" size={30} />
                                <h4 className="text-brand text-2xl">
                                    25 Years Experience
                                </h4>
                            </div>
                        </div>
                    )}
                </div>

                {/* Image */}
                <div
                    className={clsx(
                        'lg:w-1/2 flex-1 relative min-h-96',
                        minImageHeight && `min-h-[${minImageHeight}px]`
                    )}
                >
                    <Image
                        draggable={false}
                        src={image}
                        alt={imageAlt ? `${imageAlt}` : ''}
                        layout="fill"
                        objectFit={containImage ? 'contain' : 'cover'}
                        className="rounded-lg pointer-events-none"
                    />
                </div>
            </div>
        </article>
    );
};

export default ImageFlexText;
