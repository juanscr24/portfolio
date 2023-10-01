import { FC } from 'react'
import { ICardWork } from './type'
import Image from 'next/image'

const CardWork:FC<ICardWork> = ({title, img, desc}) => {
    return (
        <div className='w-[32%] max-lg:w-[48%] max-sm:w-[97%] text-white flex flex-col items-center hover:scale-105 transition-all duration-300'>
            <h1 className='font-bold text-lg'>{title}</h1>
            <Image src={img} alt='' width={2000} height={2000} className='w-full cursor-pointer h-60 max-lg:h-30 max-sm:h-52 object-cover' />
            <p>{desc}</p>
        </div>
    )
}

export default CardWork