import React from 'react'
import { skill } from './contants'
import CardSkills from '../CardSkills/indext'

const Skills = () => {
    return (
        <div className='w-3/4 bg-white flex flex-col items-center px-16 py-10 gap-2 max-lg:w-full max-sm:px-4 max-sm:py-4'>
            <a id='skills'></a><h1 className='mt-5 max-sm:mx-4 max-sm:my-4 font-bold text-3xl'>My Skills</h1>
            <p className='text-zinc-400 max-sm:text-sm'></p>
            <div className='flex justify-between my-10 max-sm:mx-4 max-sm:my-4 flex-wrap gap-5'>
                {skill.map((option, index)=>(<CardSkills key={index} title={option.title} icon={option.icon} color={option.color} />))}
            </div>
        </div>
    )
}

export default Skills