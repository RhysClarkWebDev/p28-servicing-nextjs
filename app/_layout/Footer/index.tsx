import Image from 'next/image';

import Logo from '@/app/_assets/images/P28-Short-Outline.png';
import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaWhatsapp,
} from 'react-icons/fa';
import { socialLinks } from '@/app/_data/socialLinks';

const Footer = () => {
    return (
        <footer className="pb-8 pt-12">
            {/* Footer Top */}
            <div
                className="grid mx-auto w-11/12 gap-8 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                style={{ maxWidth: 'var(--max-width)' }}
            >
                <Image
                    className="self-baseline"
                    src={Logo}
                    alt="Performance28 Logo"
                    width={250}
                    height={250}
                />
                <div className="h-full">
                    <h2 className="text-3xl mb-2">Contact Us</h2>
                    <div>
                        <p className="text-lg">
                            <span className="font-bold">Monday - Friday:</span>{' '}
                            8:30 - 17:00
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">
                                Saturday - Sunday:
                            </span>{' '}
                            Appointment Only
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl mt-8 mb-2">Social Media</h2>
                        <div className="flex flex-wrap gap-2">
                            <Link href={socialLinks.facebook}>
                                <FaFacebookF
                                    size={24}
                                    className="fill-white hover:fill-brand cursor-pointer transition-colors duration-300"
                                />
                            </Link>

                            <Link href={socialLinks.instagram}>
                                <FaInstagram
                                    size={24}
                                    className="fill-white hover:fill-brand cursor-pointer transition-colors duration-300"
                                />
                            </Link>

                            <Link href={socialLinks.youtube}>
                                <FaYoutube
                                    size={24}
                                    className="fill-white hover:fill-brand cursor-pointer transition-colors duration-300"
                                />
                            </Link>

                            <Link href={socialLinks.linkedin}>
                                <FaLinkedinIn
                                    size={24}
                                    className="fill-white hover:fill-brand cursor-pointer transition-colors duration-300"
                                />
                            </Link>

                            <Link href={socialLinks.whatsapp}>
                                <FaWhatsapp
                                    size={24}
                                    className="fill-white hover:fill-brand cursor-pointer transition-colors duration-300"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-full">
                    <h2 className="text-3xl mb-2">P28</h2>
                    <ul>
                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/about-us">About Us</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/location">Our Location</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/contact">Contact Us</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/request-quote">Request Quote</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link
                                href="https://performance28.com"
                                target="_blank"
                            >
                                Our Main Site
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="h-full">
                    <h2 className="text-3xl mb-2">Services</h2>
                    <ul>
                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/services#tyres">Tyres</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/services#repairs">Repairs</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/services#diagnostics">
                                Diagnostics
                            </Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/services#servicing">Servicing</Link>
                        </li>

                        <li className="text-lg hover:text-brand transition-colors duration-300">
                            <Link href="/services">All Services</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div
                className="mx-auto w-11/12 mt-12 flex justify-between"
                style={{ maxWidth: 'var(--max-width)' }}
            >
                <div>
                    <ul className="flex gap-x-4">
                        <li className="hover:text-brand transition-colors duration-300">
                            <Link
                                href="https://performance28.com/privacy-policy"
                                target="_blank"
                            >
                                Privacy Policy
                            </Link>
                        </li>

                        <li className="hover:text-brand transition-colors duration-300">
                            <Link
                                href="https://performance28.com/terms-and-conditions/"
                                target="_blank"
                            >
                                Terms & Conditions
                            </Link>
                        </li>

                        <li className="hover:text-brand transition-colors duration-300">
                            <Link
                                href="https://performance28.com/cookies/"
                                target="_blank"
                            >
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link
                    href="https://verumdigital.co.uk"
                    target="_blank"
                    className="group"
                >
                    <p>
                        Site by{' '}
                        <span className="transition-colors duration-300 group-hover:text-brand">
                            Verum Digital
                        </span>
                    </p>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
