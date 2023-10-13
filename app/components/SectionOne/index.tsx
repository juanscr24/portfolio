'use client'
import { useState } from 'react'
import CardWork from '../CardWork'
import Modal from '../Modal'
import { cardImage } from './constants'
import Image from 'next/image'

const SectionOne = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showId, setShowId] = useState<any>(0)

    return (
        <div className='w-3/4 bg-gray-900 flex flex-col items-center px-16 py-10 gap-2 max-lg:w-full'>
            <a id='trabajos'></a><h1 className='text-white text-2xl font-bold'>Some of my works</h1>
            <div className='flex mt-5 flex-wrap justify-between'>
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