'use client'

import { motion, useInView } from 'motion/react'
import { useRef, ReactNode } from 'react'

interface RevealProps {
    children: ReactNode
    delay?: number
    className?: string
}

export default function Reveal({
    children,
    delay = 0,
    className = '',
}: RevealProps) {
    const ref = useRef(null)

    // ❌ quitar once: true
    const isInView = useInView(ref, { amount: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0 }          // cuando entra → aparece
                    : { opacity: 0, y: 30 }         // cuando sale → se oculta
            }
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
