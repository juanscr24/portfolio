import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'bordered';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-(--base-3) text-(--text-1)',
    dark: 'bg-(--base-1) text-(--text-1)',
    bordered: 'bg-transparent border-2 border-(--base-3) text-(--text-1)'
  }; return (
    <div className={`p-6 rounded-lg ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
