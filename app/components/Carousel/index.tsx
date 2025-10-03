import React, { useState } from 'react'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { cardImage } from '../SectionOne/constants';

const CarouselComponent = () => {
    return (
        <Carousel>
            {cardImage.map((option, index) => {
                return (
                    <div className='h-[350px] w-[120px]'>
                            <Image key={index} src={option.img} alt='hola' className='object-cover' fill/>
                            <h1 className='font-bold text-white absolute left-2'>{option.title}</h1>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default CarouselComponent