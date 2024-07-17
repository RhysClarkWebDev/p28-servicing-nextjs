import Link from 'next/link';
import { ServicePackage } from '../AllPackages';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

const SinglePackage: FC<ServicePackage> = ({ name, points, price, href }) => {
    return (
        <div className="text-xl min-w-max grow shrink border-2 border-white rounded-xl p-8 flex flex-col justify-between">
            <h3 className="text-3xl mb-8">{name}</h3>
            <ul className="mb-8">
                {points.map((point) => (
                    <li key={point} className="flex gap-x-2 items-center">
                        <FaCheck className="fill-green-500" />
                        {point}
                    </li>
                ))}
            </ul>

            {!href && (
                <Link
                    href="/request-quote"
                    className="border-2 border-white rounded-md text-center py-2 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Request Booking
                    <br />
                    From(£{price})
                </Link>
            )}

            {href && (
                <a
                    href={href}
                    target="_blank"
                    className="border-2 border-white rounded-md text-center py-2 hover:bg-white hover:text-black transition-all duration-300"
                >
                    View Main Site
                </a>
            )}
        </div>
    );
};

export default SinglePackage;
