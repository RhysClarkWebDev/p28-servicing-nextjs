import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ButtonTypes {
    children: ReactNode;
    type: 'button' | 'submit';
    isSecondary?: boolean;
    internalLink?: string;
    disabled?: boolean;
    external?: boolean;
}

const Button: FC<ButtonTypes> = ({
    children,
    type,
    isSecondary,
    internalLink,
    disabled,
    external,
}) => {
    if (internalLink) {
        return (
            <Link
                href={internalLink}
                target={external ? '_blank' : ''}
                className={clsx(
                    'min-h-8 text-xl border-2 px-2 border-white rounded-md transition-colors duration-300',
                    !isSecondary &&
                        !disabled &&
                        'hover:bg-white hover:text-black',
                    isSecondary &&
                        'bg-white text-black hover:bg-brand hover:text-white'
                )}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                'min-h-8 text-xl border-2 border-white rounded-md py-2 transition-colors duration-300',
                !isSecondary && !disabled && 'hover:bg-white hover:text-black',
                isSecondary &&
                    'bg-white text-black hover:bg-brand hover:text-white',
                disabled && 'cursor-not-allowed opacity-75'
            )}
        >
            {children}
        </button>
    );
};

export default Button;
