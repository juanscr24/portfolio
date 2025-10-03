import React from 'react'
import Image from 'next/image'
import { dateName, socialMedia } from './constants';

const Header = () => {
    return (
        <div className='w-3/4 bg-white rounded-t-2xl max-lg:rounded-none max-lg:w-full'>
            <div className='flex justify-between my-10 mx-16 max-sm:mx-4 max-sm:my-4'>
                <h1 className='text-black font-bold text-2xl max-sm:text-base'>Juan Cardona</h1>
                <div className='flex text-black gap-20 font-bold text-lg max-sm:text-sm max-sm:gap-3 max-xl:gap-6'>
                    {dateName.map((option)=>(<a href="#skills" className='hover:border-b-2 hover:border-b-slate-700'>{option}</a>))}
                </div>
            </div>
            <div className='grid grid-cols-2 ml-16 items-center max-sm:m-4 max-sm:grid-cols-1 max-xl:pb-5'>
                <div className='flex flex-col gap-4 mr-16 max-sm:items-center max-sm:text-center max-sm:mr-2 max-sm:gap-1'>
                    <h1 className='text-3xl font-bold max-sm:text-base'>Hi! <br /> I am Juan Cardona</h1>
                    <h2 className='text-cyan-700 text-xl font-bold'>Frontend Developer</h2>
                    <p className='text-zinc-400 max-sm:text-sm'>I am a passionate individual with a strong interest in technology, particularly in web development, specifically Front-end. I have experience working with React.js and Next.js, as well as proficiency in JavaScript and other related technologies.</p>
                    <div className='flex gap-5 text-3xl max-sm:items-center max-sm:my-3'>
                        {socialMedia.map((option, index)=>(<a key={index} href="">{option}</a>))}
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Image src='/foto.png' alt='' width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Header