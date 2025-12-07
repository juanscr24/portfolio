import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Services() {
    const services = [
        {
            icon: '🎨',
            title: 'Desarrollo Web Full Stack',
            description: 'Desarrollo completo de aplicaciones web desde la concepción hasta el deploy, usando las últimas tecnologías.',
            features: [
                'Frontend responsivo y moderno',
                'Backend robusto y escalable',
                'Integración de APIs',
                'Deploy y configuración'
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'Express']
        },
        {
            icon: '📱',
            title: 'Diseño UI/UX',
            description: 'Creación de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
            features: [
                'Wireframes y prototipos',
                'Design system',
                'Diseño responsivo',
                'Optimización UX'
            ],
            technologies: ['Figma', 'Tailwind CSS', 'Material-UI', 'Framer']
        },
        {
            icon: '⚡',
            title: 'Consultoría Técnica',
            description: 'Asesoría en arquitectura, mejores prácticas, selección de tecnologías y optimización de proyectos.',
            features: [
                'Revisión de código',
                'Arquitectura de software',
                'Optimización de rendimiento',
                'Mejores prácticas'
            ],
            technologies: ['Code Review', 'Architecture', 'Performance', 'Security']
        },
        {
            icon: '🔧',
            title: 'Mantenimiento y Mejoras',
            description: 'Actualización, optimización y mantenimiento de aplicaciones web existentes.',
            features: [
                'Corrección de bugs',
                'Actualización de dependencias',
                'Nuevas funcionalidades',
                'Optimización de código'
            ],
            technologies: ['Refactoring', 'Testing', 'CI/CD', 'Monitoring']
        },
        {
            icon: '🗄️',
            title: 'Desarrollo de APIs',
            description: 'Diseño e implementación de APIs RESTful o GraphQL para tus aplicaciones.',
            features: [
                'REST APIs',
                'GraphQL',
                'Documentación',
                'Autenticación y seguridad'
            ],
            technologies: ['Node.js', 'Express', 'NestJS', 'GraphQL']
        },
        {
            icon: '☁️',
            title: 'Deploy y DevOps',
            description: 'Configuración de infraestructura, deploy automatizado y monitoreo de aplicaciones.',
            features: [
                'Deploy en cloud',
                'CI/CD pipelines',
                'Containerización',
                'Monitoreo'
            ],
            technologies: ['AWS', 'Docker', 'GitHub Actions', 'Vercel']
        }
    ];

    return (
        <section id="services" className="bg-(--base-1) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    My <span className="text-[--principal-1]">Services.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    Ofrezco servicios profesionales de desarrollo web para ayudarte a llevar tu proyecto
                    al siguiente nivel.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} variant="dark" className="hover:border-[--principal-1] bg-(--base-2) border-2 border-transparent transition-all group">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-(--text-2) mb-4">{service.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-(--text-2)">
                                        <span className="text-[--principal-1] mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="pt-4 border-t border-(--base-3)">
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, idx) => (
                                        <span key={idx} className="bg-(--base-3) px-2 py-1 rounded text-xs text-(--text-2)">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
