'use client'
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import { projects } from '@/constants/projects';
import Image from 'next/image';

export default function Projects() {
    const t = useTranslations('projects');

    return (
        <section id="projects" className="bg-(--base-1) text-white py-20 max-md:py-10 max-sm:py-6">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    {t('featured')} <span className="text-(--principal-1)">{t('projects')}.</span>
                </SectionTitle>

                <p className="text-gray-400 text-xl text-center mb-16 max-w-3xl mx-auto">
                    {t('description')}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group hover:border-(--principal-1) border-2 border-transparent transition-all">
                            {/* Project Image */}
                            <div className="relative h-64 bg-linear-to-br from-gray-800 to-gray-900 mb-6 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                    <Image src={project.image} alt={project.title} width={1000} height={1000} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-(--principal-1) px-3 py-1 rounded-full text-sm font-semibold">
                                        {t(project.role)}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <h3 className="text-2xl font-bold mb-3">{t(project.title)}</h3>
                            <p className="text-gray-400 mb-4">{t(project.description)}</p>

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
                                <h4 className="font-semibold mb-2 text-sm text-(--text-2)">{t('key_features')}</h4>
                                <ul className="space-y-1 text-sm text-(--text-2)">
                                    {(t.raw(project.features) as string[]).map((feature, idx) => (
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
                                    {t('view_code')}
                                </Button>
                                {project.demo && (
                                    <Button variant="outline" size="sm" href={project.demo}>
                                        {t('live_demo')}
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
