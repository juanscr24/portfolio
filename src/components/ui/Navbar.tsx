'use client'
import { useState } from "react";
import { navLinks } from "@/constants/navbarLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
    const t = useTranslations('navbar');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-(--base-1) backdrop-blur-sm border-b border-(--base-3)">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold">
                        <span className="text-(--text-1)">Juan</span>
                        <span className="text-(--principal-1)">.dev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-(--text-2) hover:text-(--principal-1) transition-colors text-sm font-medium"
                            >
                                {t(link.name)}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-(--text-1) z-50"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            // Close icon (X)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed w-full inset-0 top-20 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="container mx-auto px-6 py-8 bg-(--base-1)">
                    <div className="flex flex-col space-y-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-(--text-1) hover:text-(--principal-1) transition-colors text-lg font-medium py-2 border-b border-(--base-3)"
                            >
                                {t(link.name)}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
