import React from 'react'
import CardWork from '../CardWork'

const SectionOne = () => {
    return (
        <div className='w-3/4 bg-gray-900 flex flex-col items-center px-16 py-10 gap-2 max-lg:w-full'>
            <a id='trabajos'></a><h1 className='text-white text-2xl font-bold'>Algunos de mis trabajos</h1>
            <p className='text-white'>Mis mejores trabajos</p>
            <div className='flex mt-5 flex-wrap justify-between'>
                <CardWork title='Title' desc='Description' img='/foto1.jpg' />
                <CardWork title='Title' desc='Description' img='/work.jpg' />
                <CardWork title='Title' desc='Description' img='/work.jpg' />
                <CardWork title='Title' desc='Description' img='/work.jpg' />
                <CardWork title='Title' desc='Description' img='/work.jpg' />
                <CardWork title='Title' desc='Description' img='/work.jpg' />
            </div>
        </div>
    )
}

export default SectionOne