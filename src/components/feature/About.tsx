'use client'
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { useTranslations } from 'next-intl';
import { techStack } from '@/constants/techStack';
import { strengths } from '@/constants/strengths';
import TechIconsMarquee from '../ui/TechIconsMarquee';

export default function About() {
    const t = useTranslations('about');

    return (
        <section id="about" className="bg-(--base-2) text-(--text-1) py-20 max-md:py-10 max-sm:py-6">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    {t('About')} <span className="text-(--principal-1)">{t('me')}.</span>
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Description */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            {t('subtitle')}
                        </h3>
                        <div className="space-y-4 text-(--text-2) text-lg">
                            <p>
                                {t('description-1')}
                            </p>
                            <p>
                                {t('description-2')}
                            </p>
                            <p>
                                {t('description-3')}
                            </p>
                        </div>
                    </div>

                    {/* Stack Principal */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-(--principal-1)">
                            {t('stack')}
                        </h3>

                        <div className="space-y-4">
                            {techStack.map((section) => (
                                <div
                                    key={section.category}
                                    className="bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-(--principal-1)"
                                >
                                    <h4 className="font-bold text-xl mb-2">{section.category}</h4>
                                    <p className="text-(--text-2)">
                                        {section.technologies.join(", ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* Strengths */}
                <TechIconsMarquee />
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        {t('strengths')}
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {strengths.map((strength, index) => (
                            <Card key={index} variant="dark" className="text-center hover:border-(--principal-1) border-2 border-transparent transition-all">
                                <div className="w-16 h-16 bg-(--principal-1) rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">{index + 1}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{t(strength.title)}</h4>
                                <p className="text-(--text-2) text-sm">{t(strength.description)}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
