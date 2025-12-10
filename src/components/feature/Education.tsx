'use client'
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { useTranslations } from 'next-intl';
import { education, continuousLearning } from '@/constants/education';
import Reveal from '../ui/Reveal';

export default function Education() {
    const t = useTranslations('education');


    return (
        <section id="education" className="bg-(--base-1) text-(--text-1) py-20 max-md:py-10 max-sm:py-6">
            <div className="container mx-auto px-6">
                <Reveal delay={0.1}>
                        <SectionTitle>
                            {t('education')} & <span className="text-(--principal-1)">{t('certifications')}.</span>
                        </SectionTitle>

                        <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                            {t('description')}
                        </p>
                    </Reveal>

                    {/* Main Education Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {education.map((item, index) => (
                            <Reveal key={index} delay={0.2 + (index * 0.1)}>
                                <Card className="hover:border-(--principal-1) border-2 border-transparent transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="text-5xl">{item.icon}</div>
                                            <div className="flex-1">
                                                <span className="inline-block bg-(--principal-1) px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                                    {t(item.type)}
                                                </span>
                                                <h3 className="text-xl font-bold mb-2">{t(item.title)}</h3>
                                                <p className="text-(--principal-1) font-semibold mb-2">{t(item.institution)}</p>
                                                <p className="text-(--text-2) text-sm mb-3">{t(item.period)}</p>
                                                <p className="text-(--text-3) text-sm">{t(item.description)}</p>
                                        </div>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.3}>
                        {/* Continuous Learning Section */}
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-center mb-8">
                                {t('continuous_learning')} <span className="text-(--principal-1)">{t('continuous_learning_span')}</span>
                            </h3>
                            <Card variant="dark" className="border border-(--base-3)">
                                <p className="text-(--text-2) mb-6 text-center">
                                    {t('continuous_learning_desc')}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {continuousLearning.map((course, index) => (
                                        <div key={index} className="bg-(--base-2) p-4 rounded-lg border border-(--base-3)">
                                            <h4 className="font-semibold mb-2">{t(course.title)}</h4>
                                            <p className="text-sm text-(--text-2) mb-2">{t(course.platform)}</p>
                                            <span className="inline-block bg-(--principal-1) bg-opacity-20 text-(--text-1) px-2 py-1 rounded text-xs">
                                                {t(course.status)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        {/* Stats */}
                        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-(--principal-1) mb-2">10+</div>
                                <p className="text-(--text-2)">{t('stat_courses')}</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-(--principal-1) mb-2">6</div>
                                <p className="text-(--text-2)">{t('stat_certifications')}</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-(--principal-1) mb-2">3</div>
                                <p className="text-(--text-2)">{t('stat_years')}</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-(--principal-1) mb-2">3000+</div>
                                <p className="text-(--text-2)">{t('stat_hours')}</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section >
    );
}
