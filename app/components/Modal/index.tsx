import {FC} from 'react'
import { IModal } from './type';
import Image from 'next/image';
import { cardImage } from './constants';

const Modal:FC<IModal> = ({ isVisible }) => {
    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-96 flex flex-col'>
                <button className='text-white text-xl place-self-end'>X</button>
                {cardImage.map((option)=>(<Image src={option.img} width={500} height={500} alt='hola'/>))}
            </div>
        </div>
    )
}

export default Modal