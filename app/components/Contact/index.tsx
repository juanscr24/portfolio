import { IContact } from './type'

const Contact: React.FC<IContact> = ({ icon, title, desc }) => {
    return (
        <div className='flex flex-col items-center gap-2 w-44 cursor-pointer'>
            <span className='text-5xl'>
                {icon}
            </span>
            <h1 className='text-xl'>{title}</h1>
            <div className='text-gray-700'>{desc}</div>
        </div>
    )
}

export default Contact