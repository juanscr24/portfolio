import React from 'react'
import Image from 'next/image'
import { SiGmail } from 'react-icons/si';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='w-3/4 bg-white rounded-t-2xl max-lg:rounded-none max-lg:w-full'>
            <div className='flex justify-between my-10 mx-16 max-sm:mx-4 max-sm:my-4'>
                <h1 className='text-black font-bold text-2xl max-sm:text-base'>Juan Cardona</h1>
                <div className='flex text-black gap-20 font-bold text-lg max-sm:text-sm max-sm:gap-3 max-xl:gap-6'>
                    <a href="#skills" className='hover:border-b-2 hover:border-b-slate-700'>Skills</a>
                    <a href="#trabajos" className='hover:border-b-2 hover:border-b-slate-700'>Works</a>
                    <a href="#contactos" className='hover:border-b-2 hover:border-b-slate-700'>Contact Us</a>
                </div>
            </div>
            <div className='grid grid-cols-2 ml-16 items-center max-sm:m-4 max-sm:grid-cols-1 max-xl:pb-5'>
                <div className='flex flex-col gap-4 mr-16 max-sm:items-center max-sm:text-center max-sm:mr-2 max-sm:gap-1'>
                    <h1 className='text-3xl font-bold max-sm:text-base'>Hola! <br /> Soy Juan Cardona</h1>
                    <h2 className='text-cyan-700 text-xl font-bold'>Frontend Developer</h2>
                    <p className='text-zinc-400 max-sm:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab corrupti distinctio consequuntur tempora doloremque inventore culpa consequatur a beatae.</p>
                    <div className='flex gap-5 text-3xl max-sm:items-center max-sm:my-3'>
                        <a href=""><BsFacebook className='text-[#1877f2]' /></a>
                        <a href=""><BsLinkedin className='text-[#0a66c2]' /></a>
                        <a href=""><SiGmail className='text-[#ea4335]' /></a>
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