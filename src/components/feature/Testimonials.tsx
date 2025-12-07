import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'María García',
            role: 'CEO at Tech Startup',
            company: 'InnovateTech',
            image: '/testimonials/maria.jpg',
            rating: 5,
            text: 'Juan es un desarrollador excepcional. Entregó nuestro proyecto a tiempo y superó todas nuestras expectativas. Su atención al detalle y capacidad para resolver problemas complejos es impresionante.',
            project: 'E-commerce Platform'
        },
        {
            name: 'Carlos Rodríguez',
            role: 'Product Manager',
            company: 'Digital Solutions',
            image: '/testimonials/carlos.jpg',
            rating: 5,
            text: 'Trabajar con Juan fue una experiencia fantástica. No solo tiene habilidades técnicas sólidas, sino que también comprende las necesidades del negocio y propone soluciones innovadoras.',
            project: 'SaaS Dashboard'
        },
        {
            name: 'Ana Martínez',
            role: 'Lead Designer',
            company: 'Creative Agency',
            image: '/testimonials/ana.jpg',
            rating: 5,
            text: 'La colaboración con Juan fue perfecta. Tradujo nuestros diseños a código de manera impecable y siempre estuvo abierto a feedback. Altamente recomendado para cualquier proyecto web.',
            project: 'Portfolio Website'
        },
        {
            name: 'David López',
            role: 'CTO',
            company: 'FinTech Solutions',
            image: '/testimonials/david.jpg',
            rating: 5,
            text: 'Juan demostró un profundo conocimiento técnico en el desarrollo de nuestra aplicación. Su código es limpio, bien documentado y fácil de mantener. Un profesional de primer nivel.',
            project: 'Financial Dashboard'
        },
        {
            name: 'Laura Sánchez',
            role: 'Founder',
            company: 'SmallBiz Co.',
            image: '/testimonials/laura.jpg',
            rating: 5,
            text: 'Como startup pequeña, necesitábamos alguien confiable que entendiera nuestras limitaciones. Juan fue flexible, comunicativo y entregó exactamente lo que necesitábamos dentro de nuestro presupuesto.',
            project: 'Business Website'
        },
        {
            name: 'Roberto Díaz',
            role: 'Tech Lead',
            company: 'Enterprise Corp',
            image: '/testimonials/roberto.jpg',
            rating: 5,
            text: 'Excelente trabajo en la refactorización de nuestro código legacy. Juan identificó y solucionó múltiples problemas de rendimiento. Su experiencia en arquitectura de software es invaluable.',
            project: 'Legacy Code Refactoring'
        }
    ];

    return (
        <section id="testimonials" className="bg-(--base-1) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    Client <span className="text-(--principal-1)">Testimonials.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    Lo que dicen clientes y colegas sobre trabajar conmigo.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="hover:border-(--principal-1) bg-(--base-1) border-2 border-transparent transition-all flex flex-col">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-(--principal-1)" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-400 mb-6 grow italic">
                                "{testimonial.text}"
                            </p>

                            {/* Project Tag */}
                            <div className="mb-4">
                                <span className="inline-block bg-(--base-2) px-3 py-1 rounded-full text-xs text-(--principal-1)">
                                    {testimonial.project}
                                </span>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-(--base-2)">
                                <div className="w-12 h-12 bg-linear-to-br from-(--principal-1) to-(--gradient) rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-(--text-2)">{testimonial.role}</p>
                                    <p className="text-xs text-(--principal-1)">{testimonial.company}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">50+</div>
                        <p className="text-(--text-2)">Proyectos Completados</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">30+</div>
                        <p className="text-(--text-2)">Clientes Satisfechos</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">100%</div>
                        <p className="text-(--text-2)">Recomendación</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
