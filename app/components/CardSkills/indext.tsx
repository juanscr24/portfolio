import { ICardSkills, EnumColorx } from "./type"

const CardSkills:React.FC<ICardSkills> = ({ icon, title, desc, color='html' }) => {
    return (
        <div className="w-[31%] max-lg:w-[47%]  text-black flex flex-col items-center hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center">
                <h1 className="font-bold">{title}</h1>
                <span className={`text-7xl max-md:text-4xl bg-gray-100 rounded-full my-2 p-5 ${EnumColorx[color]}`}>{icon}</span>
                <p className="text-center w-[80%] max-sm:text-sm text-gray-700 max-sm:hidden">{desc}</p>
            </div>
        </div>
    )
}

export default CardSkills