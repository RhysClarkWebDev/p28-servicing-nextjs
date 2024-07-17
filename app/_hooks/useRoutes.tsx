import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(
        () => [
            {
                label: 'Home',
                href: '/',
                active: pathname === '/',
            },

            {
                label: 'Location',
                href: '/location',
                active: pathname === '/location',
            },

            {
                label: 'Services',
                href: '/services',
                active: pathname === '/services',
            },

            {
                label: 'Luxury',
                href: '/luxury-car-servicing',
                active: pathname === '/luxury-car-servicing',
            },

            {
                label: 'Packages',
                href: '/packages',
                active: pathname === '/packages',
            },

            {
                label: 'Request Quote',
                href: '/request-quote',
                active: pathname === '/request-quote',
            },

            {
                label: 'About Us',
                href: '/about-us',
                active: pathname === '/about-us',
            },

            {
                label: 'Contact',
                href: '/contact',
                active: pathname === '/contact',
            },
        ],
        [pathname]
    );

    return routes;
};

export default useRoutes;
