'use client'
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { useTranslations } from 'next-intl';
import { services } from '@/constants/services';

export default function Services() {
    const t = useTranslations('services');

    return (
        <section id="services" className="bg-(--base-2) text-(--text-1) py-20 max-md:py-10 max-sm:py-6">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    {t('my')} <span className="text-(--principal-1)">{t('services')}.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    {t('description')}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:border-(--principal-1) bg-(--base-2) border-2 border-transparent transition-all group">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{t(service.title)}</h3>
                            <p className="text-(--text-2) mb-4">{t(service.description)}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-4">
                                {(t.raw(service.features) as string[]).map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-(--text-2)">
                                        <span className="text-(--principal-1) mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="pt-4 border-t border-(--base-3)">
                                <div className="flex flex-wrap gap-2">
                                    {(t.raw(service.technologies) as string[]).map((tech, idx) => (
                                        <span key={idx} className="bg-(--principal-1) px-2 py-1 rounded text-xs text-(--text-2)">
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
