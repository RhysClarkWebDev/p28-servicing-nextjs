'use client';

import { useEffect, useState } from 'react';
import useRoutes from '@/app/_hooks/useRoutes';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/app/_assets/images/P28-logo-with-name_WhiteRed-1.png';
import clsx from 'clsx';

const Header = () => {
    const routes = useRoutes();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={clsx(
                'py-6 lg:py-12 fixed top-0 z-20 w-full transition-opacity duration-300',
                isScrolled ? 'bg-opacity-75 bg-black' : 'bg-opacity-0'
            )}
        >
            <nav
                className="flex gap-8 items-center w-11/12 mx-auto justify-between"
                style={{ maxWidth: 'var(--max-width)' }}
            >
                <Image
                    className="w-48 lg:w-96"
                    src={Logo.src}
                    alt="Performance28 Logo"
                    width={400}
                    height={100}
                />

                <ul className="gap-x-6 gap-y-2 text-[22px] hidden lg:flex lg:flex-wrap">
                    {routes.map((route) => (
                        <li
                            key={route.href}
                            className={clsx(
                                'hover:text-brand transition-colors duration-300 min-w-max',
                                route.active && 'text-brand'
                            )}
                        >
                            <Link href={route.href}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
