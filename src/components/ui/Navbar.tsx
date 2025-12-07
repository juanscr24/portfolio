'use client'
import { navLinks } from "@/constants/navbarLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
    const t = useTranslations('navbar');
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-(--base-1) bg-opacity-90 backdrop-blur-sm border-b border-(--base-3)">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold">
                        <span className="text-(--text-1)">Juan</span>
                        <span className="text-(--principal-1)">.dev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
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
                    <button className="md:hidden text-(--text-1)">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
