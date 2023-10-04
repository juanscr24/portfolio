import CardWork from '../CardWork'
import { cardImage } from './constants'

const SectionOne = () => {
    return (
        <div className='w-3/4 bg-gray-900 flex flex-col items-center px-16 py-10 gap-2 max-lg:w-full'>
            <a id='trabajos'></a><h1 className='text-white text-2xl font-bold'>Some of my works</h1>
            <div className='flex mt-5 flex-wrap justify-between'>
                {cardImage.map((option, index) => (<CardWork key={index} title={option.title} desc={option.desc} img={option.img} />))}
            </div>
        </div>
    )
}

export default SectionOne