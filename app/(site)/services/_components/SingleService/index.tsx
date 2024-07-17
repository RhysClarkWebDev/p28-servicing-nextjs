import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Image from 'next/image';

interface SingleServiceProps {
    title: string;
    text: string[];
    image: StaticImageData;
    id: string;
}

const SingleService: FC<SingleServiceProps> = ({ title, text, image, id }) => {
    return (
        <article id={id}>
            <h2 className="text-3xl mb-6">{title}</h2>
            <Image
                src={image.src}
                alt=""
                width={1200}
                height={400}
                className="w-full h-96 object-cover"
                objectFit="cover"
            />
            {text.map((para) => (
                <p key={para} className="text-xl mb-4 [&:nth-child(3)]:mt-4">
                    {para}
                </p>
            ))}
        </article>
    );
};

export default SingleService;
