import React from 'react'
import Contact from '../Contact'
import { BsPhoneVibrate } from 'react-icons/bs'
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='w-3/4 bg-white rounded-b-2xl max-lg:w-full max-lg:rounded-none'>
            <a id='contactos'></a><div className='flex flex-col my-10 mx-16 max-sm:mx-4 max-sm:my-4'>
                <h1 className='text-3xl font-bold mb-9 text-center max-md:text-2xl'>Contact Us</h1>
                <p></p>
                <div className='flex gap-36 justify-center max-md:gap-24'>
                    <Contact title='Phone:' desc='3012084032' icon={<BsPhoneVibrate />} />
                    <Contact title='Email:' desc='juanscr24@gmail.com' icon={<CiMail />} />
                </div>
            </div>
        </div>
    )
}

export default Footer