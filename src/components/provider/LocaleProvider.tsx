'use client'

import { ReactNode, useEffect, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { useLocaleStore } from '@/stores/localeStore'

interface LocaleProviderProps {
    children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
    const { locale, messages } = useLocaleStore()
    const [isHydrated, setIsHydrated] = useState(false)

    // Esperar a que zustand hidrate el estado desde localStorage
    useEffect(() => {
        // Verificar si zustand ya hidrato el estado
        const checkHydration = () => {
            const stored = localStorage.getItem('locale-storage')
            if (stored) {
                const { state } = JSON.parse(stored)
                if (state.locale) {
                    useLocaleStore.setState({
                        locale: state.locale,
                        messages: state.locale === 'es' ? require('@/i18n/messages/es').default : require('@/i18n/messages/en').default
                    })
                }
            }
            setIsHydrated(true)
        }

        checkHydration()
    }, [])

    // Mostrar loader mientras hidrata
    if (!isHydrated) {
        return null
    }

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
    )
}
