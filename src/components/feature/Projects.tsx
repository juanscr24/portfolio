import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Projects() {
    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'Plataforma de comercio electrónico completa con carrito, pagos, gestión de inventario y panel de administración.',
            image: '/projects/ecommerce.jpg',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            features: [
                'Sistema de autenticación JWT',
                'Pasarela de pagos integrada',
                'Panel de administración',
                'Sistema de búsqueda avanzado'
            ],
            github: 'https://github.com/username/ecommerce',
            demo: 'https://ecommerce-demo.com',
            role: 'Full Stack Developer'
        },
        {
            title: 'Task Management App',
            description: 'Aplicación de gestión de tareas con tableros Kanban, asignación de equipos y notificaciones en tiempo real.',
            image: '/projects/taskmanager.jpg',
            tags: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
            features: [
                'Drag & drop de tareas',
                'Notificaciones en tiempo real',
                'Colaboración en equipo',
                'Estadísticas y reportes'
            ],
            github: 'https://github.com/username/taskmanager',
            demo: 'https://taskmanager-demo.com',
            role: 'Frontend Developer'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Dashboard analítico para redes sociales con métricas, gráficos interactivos y programación de publicaciones.',
            image: '/projects/dashboard.jpg',
            tags: ['Next.js', 'TypeScript', 'NestJS', 'MySQL'],
            features: [
                'Integración con APIs sociales',
                'Gráficos interactivos',
                'Programación de posts',
                'Análisis de rendimiento'
            ],
            github: 'https://github.com/username/socialdashboard',
            demo: 'https://social-dashboard-demo.com',
            role: 'Personal Project'
        },
        {
            title: 'API REST - Healthcare',
            description: 'API REST robusta para gestión de pacientes, citas médicas e historiales clínicos con alta seguridad.',
            image: '/projects/healthcare.jpg',
            tags: ['Java Spring', 'PostgreSQL', 'JWT', 'Docker'],
            features: [
                'Seguridad HIPAA compliant',
                'Gestión de citas',
                'Historiales médicos',
                'Roles y permisos'
            ],
            github: 'https://github.com/username/healthcare-api',
            demo: null,
            role: 'Backend Developer'
        }
    ];

    return (
        <section id="projects" className="bg-[#0A0A0A] text-white py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    Featured <span className="text-(--principal-1)">Projects.</span>
                </SectionTitle>

                <p className="text-gray-400 text-xl text-center mb-16 max-w-3xl mx-auto">
                    Aquí están algunos de mis proyectos más destacados que demuestran mis habilidades
                    en desarrollo full stack.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} variant="dark" className="overflow-hidden group hover:border-(--principal-1) border-2 border-transparent transition-all">
                            {/* Project Image */}
                            <div className="relative h-64 bg-linear-to-br from-gray-800 to-gray-900 mb-6 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-(--principal-1) px-3 py-1 rounded-full text-sm font-semibold">
                                        {project.role}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-(--base-2) px-3 py-1 rounded-full text-sm text-(--principal-1)">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                                <h4 className="font-semibold mb-2 text-sm text-(--text-2)">Key Features:</h4>
                                <ul className="space-y-1 text-sm text-(--text-2)">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-(--principal-1) mr-2">▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <Button variant="primary" size="sm" href={project.github}>
                                    View Code
                                </Button>
                                {project.demo && (
                                    <Button variant="outline" size="sm" href={project.demo}>
                                        Live Demo
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
