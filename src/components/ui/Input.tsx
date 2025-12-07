import React from 'react';

interface InputProps {
    type?: 'text' | 'email' | 'tel' | 'textarea';
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    rows?: number;
}

export default function Input({
    type = 'text',
    placeholder,
    name,
    value,
    onChange,
    className = '',
    rows = 4
}: InputProps) {
    const baseStyles = 'w-full px-4 py-3 bg-(--base-3) border border-(--base-2) text-(--text-1) placeholder-(--text-2) focus:outline-none focus:border-(--principal-1) transition-colors'; if (type === 'textarea') {
        return (
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
                className={`${baseStyles} ${className}`}
            />
        );
    }

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${baseStyles} ${className}`}
        />
    );
}
