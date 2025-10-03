'use client'
import { useState } from 'react'
import CardWork from '../CardWork'
import Modal from '../Modal'
import { cardImage } from './constants'

const SectionOne = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showId, setShowId] = useState<any>(0)

    return (
        <div className='w-3/4 bg-gray-900 flex flex-col items-center px-16 py-10 gap-2 max-lg:w-full max-sm:px-8'>
            <a id='trabajos'></a><h1 className='text-white text-2xl font-bold'>Some of my works</h1>
            <div className='mt-5 flex-wrap justify-between grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10'>
                {cardImage.map((option, index) => {
                    return (
                        <CardWork openImage={() => setShowModal(true)} key={option.id} title={option.title} desc={option.desc} img={option.img} />
                    )
                })}
            </div>
            <div className='flex justify-center items-center'>
                <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
            </div>
        </div>
    )
}

export default SectionOne