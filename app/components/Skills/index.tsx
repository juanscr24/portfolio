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
            <div className='flex justify-between my-10 max-sm:mx-4 max-sm:my-4 flex-wrap gap-5'>
                <CardSkills title='HTML' icon={<AiFillHtml5 />} desc='Esto solamente es una prueba para ver como queda' color='html' />
                <CardSkills title='CSS' icon={<BiLogoCss3 />} desc='Esto solamente es una prueba para ver como queda' color='css' />
                <CardSkills title='Tailwind' icon={<BiLogoTailwindCss />} desc='Esto solamente es una prueba para ver como queda' color='tailwind' />
                <CardSkills title='AntDesign' icon={<SiMui />} desc='Esto solamente es una prueba para ver como queda' color='antDesgin'/>
                <CardSkills title='javascript' icon={<IoLogoJavascript />} desc='Esto solamente es una prueba para ver como queda' color='javascript' />
                <CardSkills title='NextJs' icon={<TbBrandNextjs />} desc='Esto solamente es una prueba para ver como queda' color='nextJs' />
            </div>
        </div>
    )
}

export default Skills