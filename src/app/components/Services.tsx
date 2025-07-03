import { assets,serviceData } from '@/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
    <div id='service' className='w-full max-w-screen-xl mx-auto py-10 scroll-mt-20'>
        <h1 className='text-center mb-2 text-lg font-ovo'>What i offers</h1>
        <h2 className='text-center text-5xl font-ovo'>My services</h2>
        <p className='text-center font-ovo max-w-2xl mx-auto mb-10 mt-5'>
            Building innovative web solutions with PHP and JavaScript — welcome to my portfolio.
        </p>

        <div className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 '>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-11 hover:shadow-xl/30 duration-500 cursor-pointer hover:-translate-y-1 mx-5 lg:mx-0'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg text-gray-700 my-4 font-bold'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} alt='icon' className='w-4'/>
                    </a>
                </div>
            ))}
        </div>
    </div>
)
}

export default Services
