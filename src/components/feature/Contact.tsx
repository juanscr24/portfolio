'use client'
import { useState, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'devpoint.hub@gmail.com',
            link: 'mailto:devpoint.hub@gmail.com'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
            ),
            title: 'WhatsApp',
            value: '+57 315 058 1737',
            link: 'https://wa.me/573150581737'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Location',
            value: 'Barranquilla, Colombia',
            link: null
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
            url: 'https://github.com/juanscr24'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            url: 'https://linkedin.com/in/juanscr24'
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Obtener token de reCAPTCHA
        const recaptchaToken = recaptchaRef.current?.getValue();

        if (!recaptchaToken) {
            setSubmitStatus({
                type: 'error',
                message: 'Por favor, completa la verificación reCAPTCHA'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {

            // Enviar formulario
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar el mensaje');
            }

            // Éxito
            setSubmitStatus({
                type: 'success',
                message: t('form_success') || 'Mensaje enviado exitosamente'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            recaptchaRef.current?.reset();

        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Error al enviar el mensaje'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-(--base-2) text-white py-20 max-md:py-10 max-sm:py-6">
            <div className="container mx-auto px-6">
                <SectionTitle>
                    {t('get_in')} <span className="text-(--principal-1)">{t('touch')}.</span>
                </SectionTitle>

                <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                    {t('description')}
                </p>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">{t('contact_info_title')}</h3>
                        <p className="text-(--text-2) mb-8">
                            {t('contact_info_desc')}
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-(--principal-1) rounded-lg flex items-center justify-center text-(--text-1) shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t(info.title.toLowerCase())}</h4>
                                        {info.link ? (
                                            <Link target="_blank" href={info.link} className="text-(--text-2) hover:text-(--principal-1) transition-colors cursor-pointer">
                                                {info.value}
                                            </Link>
                                        ) : (
                                            <p className="text-(--text-2)">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold mb-4">{t('find_me')}</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-(--base-2) hover:bg-(--principal-1) rounded-lg flex items-center justify-center transition-all"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="mt-8 p-6 bg-(--base-2) rounded-lg border border-(--base-2)">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-semibold text-green-500">{t('availability_title')}</span>
                            </div>
                            <p className="text-sm text-(--text-2)">
                                {t('availability_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card variant="dark" className="border border-(--base-2)">
                        <h3 className="text-2xl font-bold mb-6">{t('form_title')}</h3>

                        {submitStatus.type && (
                            <div className={`mb-4 p-4 rounded-lg ${submitStatus.type === 'success'
                                ? 'bg-green-500/20 text-green-500 border border-green-500'
                                : 'bg-red-500/20 text-red-500 border border-red-500'
                                }`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-(--text-2)">
                                    {t('form_name')}
                                </label>
                                <Input
                                    type="text"
                                    placeholder={t('form_name_placeholder')}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-(--text-2)">
                                    {t('form_email')}
                                </label>
                                <Input
                                    type="email"
                                    placeholder={t('form_email_placeholder')}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-(--text-2)">
                                    {t('form_subject')}
                                </label>
                                <Input
                                    type="text"
                                    placeholder={t('form_subject_placeholder')}
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-(--text-2)">
                                    {t('form_message')}
                                </label>
                                <Input
                                    type="textarea"
                                    placeholder={t('form_message_placeholder')}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    required
                                />
                            </div>

                            {/* reCAPTCHA Checkbox */}
                            <div className="flex justify-center">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                    theme="dark"
                                />
                            </div>

                            <Button
                                type='submit'
                                variant="primary"
                                className="w-full"
                                size="lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t('form_sending') || 'Enviando...' : t('form_submit')}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
