'use client'
import { useState, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import Reveal from '../ui/Reveal';
import { contactInfo, socialLinks } from '@/constants/contact';

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
        <Reveal delay={0.1}>
            <section id="contact" className="bg-(--base-2) text-(--text-1) py-20 max-md:py-10 max-sm:py-6">
                <div className="container mx-auto px-6">
                    <Reveal delay={0.2}>
                        <SectionTitle>
                            {t('get_in')} <span className="text-(--principal-1)">{t('touch')}.</span>
                        </SectionTitle>

                        <p className="text-(--text-2) text-xl text-center mb-16 max-w-3xl mx-auto">
                            {t('description')}
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <Reveal delay={0.2}>
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
                        </Reveal>
                        {/* Contact Form */}
                        <Reveal delay={0.2}>
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
                        </Reveal>
                    </div>
                </div>
            </section >
        </Reveal>
    );
}
