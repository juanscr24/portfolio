import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function Education() {
    const education = [
        {
            type: 'Bootcamp',
            title: 'Full Stack Development',
            institution: 'Riwi',
            period: '2020',
            description: 'Programa intensivo de desarrollo full stack con enfoque en JavaScript, React, Node.js y metodologías ágiles.',
            icon: '🎓'
        },
        {
            type: 'Certification',
            title: 'AWS Certified Developer',
            institution: 'Amazon Web Services',
            period: '2022',
            description: 'Certificación en servicios de AWS para desarrollo de aplicaciones en la nube.',
            icon: '☁️'
        },
        {
            type: 'Course',
            title: 'Advanced React & Redux',
            institution: 'Udemy',
            period: '2021',
            description: 'Curso avanzado sobre React patterns, hooks, Redux y mejores prácticas.',
            icon: '📚'
        },
        {
            type: 'Certification',
            title: 'English Proficiency - C1',
            institution: 'Open English',
            period: '2023',
            description: 'Certificación de nivel avanzado de inglés para comunicación profesional.',
            icon: '🌍'
        }
    ];

    const continuousLearning = [
        {
            title: 'Node.js Microservices',
            platform: 'Coursera',
            status: 'In Progress'
        },
        {
            title: 'Docker & Kubernetes',
            platform: 'Pluralsight',
            status: 'In Progress'
        },
        {
            title: 'System Design',
            platform: 'ByteByteGo',
            status: 'In Progress'
        }
    ];

    return (
        <section id="education" className="bg-(--base-2) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    Education & <span className="text-(--principal-1)">Certifications.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    Mi formación académica y certificaciones que respaldan mi experiencia profesional.
                </p>

                {/* Main Education Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {education.map((item, index) => (
                        <Card key={index} variant="dark" className="hover:border-(--principal-1) border-2 border-transparent transition-all">
                            <div className="flex items-start gap-4">
                                <div className="text-5xl">{item.icon}</div>
                                <div className="flex-1">
                                    <span className="inline-block bg-(--principal-1) px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                        {item.type}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-(--principal-1) font-semibold mb-2">{item.institution}</p>
                                    <p className="text-(--text-2) text-sm mb-3">{item.period}</p>
                                    <p className="text-(--text-3) text-sm">{item.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Continuous Learning Section */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Aprendizaje <span className="text-(--principal-1)">Continuo</span>
                    </h3>
                    <Card variant="dark" className="border border-(--base-3)">
                        <p className="text-(--text-2) mb-6 text-center">
                            Actualmente estudiando para mantenerme actualizado con las últimas tecnologías
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {continuousLearning.map((course, index) => (
                                <div key={index} className="bg-(--base-2) p-4 rounded-lg border border-(--base-3)">
                                    <h4 className="font-semibold mb-2">{course.title}</h4>
                                    <p className="text-sm text-(--text-2) mb-2">{course.platform}</p>
                                    <span className="inline-block bg-(--principal-1) bg-opacity-20 text-(--text-1) px-2 py-1 rounded text-xs">
                                        {course.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">15+</div>
                        <p className="text-(--text-2)">Cursos Completados</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">5</div>
                        <p className="text-(--text-2)">Certificaciones</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">3</div>
                        <p className="text-(--text-2)">Años Experiencia</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">500+</div>
                        <p className="text-(--text-2)">Horas de Estudio</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
