'use client';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { useTranslations } from 'next-intl';
import { testimonials } from '@/constants/testimonials';

export default function Testimonials() {
    const t = useTranslations('testimonial');

    return (
        <section id="testimonials" className="bg-(--base-1) text-(--text-1) py-20 max-md:py-10 max-sm:py-6">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    {t('Client')} <span className="text-(--principal-1)">{t('testimonial')}</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    {t('description')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="hover:border-(--principal-1) bg-(--base-1) border-2 border-transparent transition-all flex flex-col">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-(--principal-1)" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-400 mb-6 grow italic">
                                "{testimonial.text}"
                            </p>

                            {/* Project Tag */}
                            <div className="mb-4">
                                <span className="inline-block bg-(--base-2) px-3 py-1 rounded-full text-xs text-(--principal-1)">
                                    {testimonial.project}
                                </span>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-(--base-2)">
                                <div className="w-12 h-12 bg-linear-to-br from-(--principal-1) to-(--gradient) rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">12+</div>
                        <p className="text-(--text-2)">{t('stats.completed')}</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">8+</div>
                        <p className="text-(--text-2)">{t('stats.clients')}</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-(--principal-1) mb-2">95%</div>
                        <p className="text-(--text-2)">{t('stats.satisfaction')}</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
