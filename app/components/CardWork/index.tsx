'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { ICardWork } from './type'

const CardWork:FC<ICardWork> = ({title, img, desc, openImage}) => {
    return (
        <div className='max-sm:w-full text-white flex flex-col items-center hover:scale-105 transition-all duration-300 mb-5'>
            <h1 className='font-bold text-lg mb-2'>{title}</h1>
            <Image onClick={openImage} src={img} alt='' width={2000} height={2000} className='rounded w-full cursor-pointer h-48 max-sm:h-50 object-cover' />
            <p className='text-zinc-400 max-sm:text-sm'>{desc}</p>
        </div>
    )
}

export default CardWork