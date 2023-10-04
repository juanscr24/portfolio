import { FC } from 'react'
import { ICardWork } from './type'
import Image from 'next/image'

const CardWork:FC<ICardWork> = ({title, img, desc}) => {
    return (
        <div className='w-[32%] max-lg:w-[48%] max-sm:w-full text-white flex flex-col items-center hover:scale-105 transition-all duration-300 mb-5'>
            <h1 className='font-bold text-lg mb-2'>{title}</h1>
            {<Image src={img} alt='' width={2000} height={2000} className='rounded w-full cursor-pointer h-36 max-lg:h-48 max-sm:h-40 object-cover' />}
            <p className='text-zinc-400 max-sm:text-sm'>{desc}</p>
        </div>
    )
}

export default CardWork