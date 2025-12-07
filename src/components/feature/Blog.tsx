import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Blog() {
    const articles = [
        {
            title: '10 Tips para optimizar el rendimiento de React',
            excerpt: 'Aprende las mejores técnicas para hacer que tus aplicaciones React sean más rápidas y eficientes.',
            category: 'Frontend',
            date: '5 Dic, 2024',
            readTime: '8 min',
            image: '/blog/react-performance.jpg',
            tags: ['React', 'Performance', 'Optimization']
        },
        {
            title: 'Arquitectura de Microservicios con Node.js',
            excerpt: 'Una guía completa sobre cómo implementar microservicios escalables utilizando Node.js y Docker.',
            category: 'Backend',
            date: '28 Nov, 2024',
            readTime: '12 min',
            image: '/blog/microservices.jpg',
            tags: ['Node.js', 'Microservices', 'Docker']
        },
        {
            title: 'Clean Code: Principios esenciales para desarrolladores',
            excerpt: 'Descubre los principios fundamentales para escribir código limpio, mantenible y profesional.',
            category: 'Best Practices',
            date: '20 Nov, 2024',
            readTime: '10 min',
            image: '/blog/clean-code.jpg',
            tags: ['Clean Code', 'Best Practices', 'Development']
        },
        {
            title: 'Introducción a TypeScript para JavaScript developers',
            excerpt: 'Todo lo que necesitas saber para empezar a usar TypeScript en tus proyectos JavaScript.',
            category: 'Tutorial',
            date: '15 Nov, 2024',
            readTime: '15 min',
            image: '/blog/typescript.jpg',
            tags: ['TypeScript', 'JavaScript', 'Tutorial']
        },
        {
            title: 'Deploy automático con GitHub Actions',
            excerpt: 'Configura pipelines CI/CD para automatizar el deploy de tus aplicaciones con GitHub Actions.',
            category: 'DevOps',
            date: '10 Nov, 2024',
            readTime: '7 min',
            image: '/blog/github-actions.jpg',
            tags: ['CI/CD', 'GitHub Actions', 'DevOps']
        },
        {
            title: 'Mi experiencia en Riwi: De bootcamp a developer',
            excerpt: 'Reflexión sobre mi trayectoria desde el bootcamp hasta convertirme en desarrollador profesional.',
            category: 'Personal',
            date: '1 Nov, 2024',
            readTime: '5 min',
            image: '/blog/riwi-experience.jpg',
            tags: ['Career', 'Riwi', 'Learning']
        }
    ];

    const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tutorial', 'Best Practices', 'Personal'];

    return (
        <section id="blog" className="bg-(--base-1) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    Latest <span className="text-(--text-2)">Articles.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-12 max-w-3xl mx-auto">
                    Comparto conocimientos, tutoriales y reflexiones sobre desarrollo web y tecnología.
                </p>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-full transition-all ${index === 0
                                ? 'bg-(--principal-1) text-(--text-1)'
                                : 'bg-(--base-2) text-(--text-1) hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {articles.map((article, index) => (
                        <Card key={index} variant="dark" className="hover:border-(--principal-1) border-2 border-transparent transition-all overflow-hidden group">
                            {/* Article Image */}
                            <div className="relative h-48 bg-linear-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden -m-6 mb-4">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-(--principal-1) px-3 py-1 rounded-full text-xs font-semibold">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-2">
                                {/* Meta */}
                                <div className="flex items-center gap-4 text-sm text-(--base-2) mb-3">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.readTime} read</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-(--principal-1) transition-colors">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-400 text-sm mb-4">
                                    {article.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-400">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More */}
                                <Button variant="outline" size="sm" className="w-full">
                                    Read More →
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <Card variant="dark" className="max-w-3xl mx-auto text-center border-(--principal-1)">
                    <h3 className="text-2xl font-bold mb-4">
                        Suscríbete a mi <span className="text-(--principal-1)">Newsletter</span>
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Recibe artículos, tutoriales y tips sobre desarrollo web directamente en tu email
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="flex-1 px-4 py-3 bg-black border border-(--base-2) rounded focus:outline-none focus:border-(--principal-1)"
                        />
                        <Button variant="primary">Suscribir</Button>
                    </div>
                </Card>
            </div>
        </section>
    );
}
