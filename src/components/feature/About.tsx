import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function About() {
    const strengths = [
        { title: 'Problem Solver', description: 'Analizo y resuelvo problemas complejos con soluciones eficientes' },
        { title: 'Fast Learner', description: 'Me adapto rápidamente a nuevas tecnologías y frameworks' },
        { title: 'Team Player', description: 'Colaboro efectivamente con equipos multidisciplinarios' },
        { title: 'Clean Code', description: 'Escribo código limpio, mantenible y bien documentado' }
    ];

    return (
        <section id="about" className="bg-(--base-2) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    About <span className="text-(--principal-1)">Me.</span>
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Description */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            Desarrollador Full Stack apasionado por crear experiencias web excepcionales
                        </h3>
                        <div className="space-y-4 text-(--text-2) text-lg">
                            <p>
                                Soy un desarrollador full stack con más de 3 años de experiencia construyendo
                                aplicaciones web modernas y escalables. Me especializo en el ecosistema de
                                JavaScript/TypeScript, tanto en frontend como en backend.
                            </p>
                            <p>
                                Mi enfoque está en crear soluciones que no solo funcionen perfectamente, sino
                                que también brinden una experiencia de usuario excepcional y sean fáciles de
                                mantener a largo plazo.
                            </p>
                            <p>
                                Actualmente trabajo con tecnologías como React, Next.js, Node.js, y bases de
                                datos tanto SQL como NoSQL. También tengo experiencia en Java y Python para
                                proyectos de backend más robustos.
                            </p>
                        </div>
                    </div>

                    {/* Stack Principal */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-(--principal-1)">Mi Stack Principal</h3>
                        <div className="space-y-4">
                            <div className="bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-(--principal-1)">
                                <h4 className="font-bold text-xl mb-2">Frontend</h4>
                                <p className="text-(--text-2)">
                                    React, Next.js, TypeScript, Tailwind CSS, Redux
                                </p>
                            </div>
                            <div className="bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-(--principal-1)">
                                <h4 className="font-bold text-xl mb-2">Backend</h4>
                                <p className="text-(--text-2)">
                                    Node.js, Express, NestJS, Java Spring Boot, Python
                                </p>
                            </div>
                            <div className="bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-(--principal-1)">
                                <h4 className="font-bold text-xl mb-2">Databases</h4>
                                <p className="text-(--text-2)">
                                    MySQL, PostgreSQL, MongoDB, Redis
                                </p>
                            </div>
                            <div className="bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-(--principal-1)">
                                <h4 className="font-bold text-xl mb-2">Tools & Others</h4>
                                <p className="text-(--text-2)">
                                    Git, Docker, AWS, Figma, Jest, Postman
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strengths */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Lo que me <span className="text-(--principal-1)">diferencia</span>
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {strengths.map((strength, index) => (
                            <Card key={index} variant="dark" className="text-center hover:border-(--principal-1) border-2 border-transparent transition-all">
                                <div className="w-16 h-16 bg-(--principal-1) rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">{index + 1}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{strength.title}</h4>
                                <p className="text-(--text-2) text-sm">{strength.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
