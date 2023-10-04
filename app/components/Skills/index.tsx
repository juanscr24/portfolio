import React from 'react'
import CardSkills from '../CardSkills/indext'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { BiLogoCss3, BiLogoTailwindCss  } from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/Ai'
import { SiMui } from 'react-icons/si'

const Skills = () => {
    return (
        <div className='w-3/4 bg-white flex flex-col items-center px-16 py-10 gap-2 max-lg:w-full max-sm:px-4 max-sm:py-4'>
            <a id='skills'></a><h1 className='mt-5 max-sm:mx-4 max-sm:my-4 font-bold text-3xl'>My Skills</h1>
            <p className='text-zinc-400 max-sm:text-sm'></p>
            <div className='flex justify-between my-10 max-sm:mx-4 max-sm:my-4 flex-wrap gap-5'>
                <CardSkills title='HTML' icon={<AiFillHtml5 />} color='html' />
                <CardSkills title='CSS' icon={<BiLogoCss3 />} color='css' />
                <CardSkills title='Tailwind' icon={<BiLogoTailwindCss />} color='tailwind' />
                <CardSkills title='AntDesign' icon={<SiMui />} color='antDesgin'/>
                <CardSkills title='javascript' icon={<IoLogoJavascript />} color='javascript' />
                <CardSkills title='NextJs' icon={<TbBrandNextjs />} color='nextJs' />
            </div>
        </div>
    )
}

export default Skills