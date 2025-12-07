import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    accent?: string;
    className?: string;
}

export default function SectionTitle({ children, accent, className = '' }: SectionTitleProps) {
    return (
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${className}`}>
            {children}
            {accent && <span className="text-[#FF0080]">{accent}</span>}
        </h2>
    );
}
