import { FC } from 'react'
import { IModal } from './type';
import Image from 'next/image';
import { cardImage } from './constants';

const Modal: FC<IModal> = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-96 flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={onClose}>X</button>
                <div className='flex items-center justify-center'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal




