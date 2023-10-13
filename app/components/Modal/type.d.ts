import { ReactNode } from 'react'

export interface IModal {
    isVisible: boolean
    onClose: () => void
    children: ReactNode
}