import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen bg-(--base-1) text-(--text-1) flex items-center">
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="mb-6">
                            <span className="text-(--principal-1) text-lg font-semibold uppercase tracking-wider">
                                Bienvenido a mi Portafolio
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Juan Sebastián
                            <br />
                            <span className="text-(--principal-1)">Cardona</span>
                        </h1>

                        <h2 className="text-3xl md:text-4xl text-(--text-2) mb-6">
                            Full Stack Developer
                        </h2>

                        <p className="text-xl text-(--text-3) mb-8 max-w-lg">
                            Construyo soluciones web rápidas, modernas y escalables con las mejores tecnologías del mercado.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" size="lg" href="#contact">
                                Contact Me
                            </Button>
                            <Button variant="outline" size="lg" href="/cv.pdf">
                                Download CV
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-linear-to-br from-(--principal-1) to-(--gradient) opacity-20 rounded-full blur-3xl"></div>

                            {/* Image placeholder */}
                            <div className="relative z-10 w-full h-full bg-linear-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border-4 border-(--principal-1)">
                                <div className="w-full h-full flex items-center justify-center text-(--text-2)">
                                    {/* Replace with actual image */}
                                    <Image src={'/profile_p.png'} alt='Foto de perfil' height={1000} width={1000} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-[--principal-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
