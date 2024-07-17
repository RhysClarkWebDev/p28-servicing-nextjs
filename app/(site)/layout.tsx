import local from 'next/font/local';
import { Cairo } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '../_layout/Header';
import Footer from '../_layout/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import MobileHeader from '../_layout/MobileHeader';

import './globals.css';

const aero = local({
    src: [
        {
            path: '../../public/fonts/Aero.ttf',
            weight: '800',
        },
    ],
    variable: '--font-aero',
});

const reg = local({
    src: [
        {
            path: '../../public/fonts/UKNumberPlate.ttf',
            weight: '500',
        },
    ],
    variable: '--main-sub-header-font',
});

const cairo = Cairo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cairo',
    weight: ['300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${aero.variable} ${reg.variable} ${cairo.variable}`}
            >
                <Header />
                <MobileHeader />
                {children}
                <Footer />
            </body>

            <GoogleAnalytics gaId="G-YQPP2RV9VG" />
        </html>
    );
}
