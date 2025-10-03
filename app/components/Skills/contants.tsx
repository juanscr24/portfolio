import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { FaHtml5 } from "react-icons/fa";
import { SiMui, SiReact } from 'react-icons/si'
import { ColorIcon } from '../CardSkills/type'

export const skill: Array<{id: number, title: string, icon: React.ReactNode, color: ColorIcon}> = [
    {
        id: 0,
        title: 'HTML',
        icon: <FaHtml5 />,
        color: 'html'
    },
    {
        id: 1,
        title: 'Tailwind',
        icon: <BiLogoTailwindCss />,
        color: 'tailwind'
    },
    {
        id: 2,
        title: 'Material UI',
        icon: <SiMui />,
        color: 'antDesgin'
    },
    {
        id: 3,
        title: 'TypeScript',
        icon: <TbBrandTypescript />,
        color: 'javascript'
    },
    {
        id: 4,
        title: 'React.JS',
        icon: <SiReact />,
        color: 'css'
    },
    {
        id: 5,
        title: 'NextJs',
        icon: <TbBrandNextjs />,
        color: 'nextJs'
    },
]