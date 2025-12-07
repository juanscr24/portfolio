import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        sections: [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' }
        ],
        social: [
            { name: 'GitHub', href: 'https://github.com/juanscr24' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/juanscr24' },
            { name: 'Twitter', href: 'https://twitter.com/juanscr24' }
        ]
    };

    return (
        <footer className="bg-(--base-1) text-(--text-1) py-12 border-t border-(--base-3)">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-(--text-1)">Juan</span>
                            <span className="text-(--principal-1)">.dev</span>
                        </h3>
                        <p className="text-(--text-2) mb-4">
                            Full Stack Developer construyendo soluciones web modernas y escalables.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.sections.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-(--text-2) hover:text-(--principal-1) transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold mb-4">Follow Me</h4>
                        <ul className="space-y-2">
                            {footerLinks.social.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--text-2) hover:text-(--principal-1) transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-(--base-3) text-center text-(--text-2) text-sm">
                    <p>© {currentYear} Juan Cardona. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
