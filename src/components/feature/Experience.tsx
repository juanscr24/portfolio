import React from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
    const experiences = [
        {
            role: 'Full Stack Developer',
            company: 'Tech Solutions Inc.',
            period: '2023 - Present',
            type: 'Full-time',
            achievements: [
                'Desarrollé 5+ aplicaciones web full stack que mejoraron la eficiencia operativa en un 40%',
                'Lideré la migración de una aplicación legacy a Next.js, reduciendo tiempos de carga en 60%',
                'Implementé arquitectura de microservicios con Node.js y Docker',
                'Mentoricé a 3 desarrolladores junior en mejores prácticas de código'
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
        },
        {
            role: 'Frontend Developer',
            company: 'Digital Agency XYZ',
            period: '2022 - 2023',
            type: 'Full-time',
            achievements: [
                'Creé interfaces responsivas para más de 10 clientes utilizando React y Tailwind',
                'Optimicé el rendimiento de aplicaciones existentes, logrando scores de 95+ en Lighthouse',
                'Implementé sistema de design system reutilizable que aceleró desarrollo en 30%',
                'Colaboré con diseñadores UX para traducir wireframes en código funcional'
            ],
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma']
        },
        {
            role: 'Freelance Web Developer',
            company: 'Self-Employed',
            period: '2021 - 2022',
            type: 'Freelance',
            achievements: [
                'Completé 15+ proyectos para clientes locales e internacionales',
                'Desarrollé sitios web corporativos, e-commerce y landing pages',
                'Mantuve una calificación de 5.0 estrellas en plataformas freelance',
                'Gestioné proyectos de inicio a fin incluyendo deployment y mantenimiento'
            ],
            technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'WordPress']
        },
        {
            role: 'Junior Developer',
            company: 'StartUp Innovate',
            period: '2020 - 2021',
            type: 'Full-time',
            achievements: [
                'Participé en el desarrollo de MVP de una aplicación SaaS',
                'Implementé features frontend utilizando React y Material-UI',
                'Escribí tests unitarios e integración con Jest y React Testing Library',
                'Contribuí en code reviews y documentación técnica'
            ],
            technologies: ['React', 'JavaScript', 'Express', 'MySQL', 'Jest']
        }
    ];

    return (
        <section id="experience" className="bg-(--base-1) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    Work <span className="text-(--principal-1)">Experience.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    Mi trayectoria profesional construyendo soluciones web para diferentes empresas y clientes.
                </p>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-linear-to-b from-(--principal-1) to-transparent"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-(--principal-1) rounded-full border-4 border-(--base-1) z-10"></div>

                                {/* Content */}
                                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-(--base-2) p-6 rounded-lg border border-(--base-3) hover:border-(--principal-1) transition-all">
                                        <div className="flex flex-wrap items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1 text-(--text-1)">{exp.role}</h3>
                                                <p className="text-(--principal-1) text-lg font-semibold">{exp.company}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-(--text-2)">{exp.period}</p>
                                                <span className="inline-block bg-(--base-3) px-3 py-1 rounded-full text-sm mt-2">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold mb-3 text-(--text-2)">Logros:</h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start text-(--text-3)">
                                                        <span className="text-(--principal-1) mr-2 mt-1">▹</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="font-semibold mb-2 text-sm text-(--text-2)">Tecnologías:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span key={idx} className="bg-(--base-3) px-3 py-1 rounded-full text-sm text-(--principal-1)">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
