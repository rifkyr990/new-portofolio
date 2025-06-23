import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets';

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt='logo' className='w-21 mx-auto mb-2'/>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='icon email' className='w-6'/>
                    rifkyrmdhn640@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>©️ 2025 Rifky Ramadhan. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/rifkyr990">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/rifky-rmdhn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.instagram.com/rifkyyrmdhn/">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
