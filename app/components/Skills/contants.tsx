import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoCss3, BiLogoTailwindCss } from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/Ai'
import { SiMui } from 'react-icons/si'

export const skill = [
    {
        id: 0,
        title: 'HTML',
        icon: <AiFillHtml5 />,
        color: 'html'
    },
    {
        id: 1,
        title: 'CSS',
        icon: <BiLogoCss3 />,
        color: 'css'
    },
    {
        id: 2,
        title: 'Tailwind',
        icon: <BiLogoTailwindCss />,
        color: 'antDesgin'
    },
    {
        id: 3,
        title: 'Material UI',
        icon: <SiMui />,
        color: 'antDesgin'
    },
    {
        id: 4,
        title: 'Javascript',
        icon: <IoLogoJavascript />,
        color: 'javascript'
    },
    {
        id: 5,
        title: 'NextJs',
        icon: <TbBrandNextjs />,
        color: 'nextJs'
    },
]