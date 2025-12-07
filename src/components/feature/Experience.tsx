'use client'
import { useTranslations } from 'next-intl';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '@/constants/experiences';

export default function Experience() {
    const t = useTranslations('experience');
    return (
        <section id="experience" className="bg-(--base-2) text-(--text-1) py-20">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    {t('work')} <span className="text-(--principal-1)">{t('experience')}.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    {t('description')}
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
                                    <div className="bg-(--base-1) p-6 rounded-lg border border-(--base-3) hover:border-(--principal-1) transition-all">
                                        <div className="flex flex-wrap items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1 text-(--text-1)">{t(exp.role)}</h3>
                                                <p className="text-(--principal-1) text-lg font-semibold">{t(exp.company)}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-(--text-2)">{t(exp.period)}</p>
                                                <span className="inline-block bg-(--base-3) px-3 py-1 rounded-full text-sm mt-2">
                                                    {t(exp.type)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold mb-3 text-(--text-2)">{t('achievements')}</h4>
                                            <ul className="space-y-2">
                                                {(t.raw(exp.achievements) as string[]).map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start text-(--text-3)">
                                                        <span className="text-(--principal-1) mr-2 mt-1">▹</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="font-semibold mb-2 text-sm text-(--text-2)">{t('technologies')}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(t.raw(exp.technologies) as string[]).map((tech, idx) => (
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
