'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import useRoutes from '@/app/_hooks/useRoutes';

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const routes = useRoutes();

    return (
        <header className="lg:hidden relative">
            <nav>
                <div
                    className="fixed right-7 top-7 z-50"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                    <i
                        className={clsx(
                            'h-0.5 w-9 bg-white block duration-300',
                            isOpen && 'rotate-45 translate-y-2.5'
                        )}
                    />
                    <i
                        className={clsx(
                            'h-0.5 w-9 bg-white block my-2 transition-opacity duration-300',
                            isOpen && 'opacity-0'
                        )}
                    />
                    <i
                        className={clsx(
                            'h-0.5 w-9 bg-white block duration-300',
                            isOpen && '-rotate-45 -translate-y-2.5'
                        )}
                    />
                </div>
            </nav>

            <div
                className={clsx(
                    'w-screen h-screen flex justify-center items-center text-white font-semibold text-xl translate-x-full z-40 transition-transform duration-150 fixed top-0 bg-black',
                    isOpen && 'translate-x-px'
                )}
            >
                <ul className="flex flex-col gap-y-3">
                    {routes.map((route) => (
                        <li
                            key={route.href}
                            className={clsx(
                                'hover:text-brand transition-colors duration-300 min-w-max',
                                route.active && 'text-brand'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            <Link href={route.href}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default MobileHeader;
