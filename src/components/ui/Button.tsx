import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    href?: string;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    className = ''
}: ButtonProps) {
    const baseStyles = 'font-semibold transition-all duration-300 inline-block text-center';

    const variants = {
        primary: 'bg-(--principal-1) hover:bg-(--principal-2) text-white',
        secondary: 'bg-white hover:bg-gray-100 text-black',
        outline: 'border-2 border-(--principal-1) text-(--principal-1) hover:bg-(--principal-1) hover:text-white'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
