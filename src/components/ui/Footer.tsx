'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import { navLinks } from '@/constants/navbarLinks';
import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('navbar');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-(--base-1) text-(--text-1) py-12 max-md:py-8 max-sm:py-5 border-t border-(--base-3)">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-(--text-1)">Juan</span>
                            <span className="text-(--principal-1)">.dev</span>
                        </h3>
                        <p className="text-(--text-2) mb-4">
                            {t('brand_description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4">{t('quick_links')}</h4>
                        <ul className="space-y-2">
                            {navLinks.slice(0, 4).map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-(--text-2) hover:text-(--principal-1) transition-colors">
                                        {tNav(link.name)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold mb-4">{t('follow_me')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://github.com/juanscr24" target="_blank" rel="noopener noreferrer" className="text-(--text-2) hover:text-(--principal-1) transition-colors">
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com/in/juanscr24" target="_blank" rel="noopener noreferrer" className="text-(--text-2) hover:text-(--principal-1) transition-colors">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-(--base-3) text-center text-(--text-2) text-sm">
                    <p>© {currentYear} Juan Cardona. {t('rights')}</p>
                </div>
            </div>
        </footer>
    );
}
