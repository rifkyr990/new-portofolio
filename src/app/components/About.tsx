import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets'


const About = () => {
    return (
        <div id='about' className='w-full max-w-screen-xl mx-auto px-6 py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>About Me</h2>

            <div className='flex flex-col lg:flex-row items-center gap-20 my-20'>
                {/* Gambar Profil */}
                <div className='w-full max-w-sm'>
                    <Image
                        src={assets.user_image}
                        alt='me'
                        className='w-full h-auto rounded-3xl object-cover'
                    />
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi porro aut, quasi labore quo, odit corrupti, dolores magni iure consequatur. Quae, facere ipsa perferendis libero exercitationem laudantium ipsam iusto.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li
                                className='border border-gray-400 rounded-xl p-6 cursor-pointer hover:shadow-xl/30 transition hover:-translate-y-1 hover:bg-[#fcf4ff] duration-500'
                                key={index}
                            >
                                <Image src={icon} alt={title} className='w-7 mb-3' />
                                <h3 className='my-2 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-ovo'>Tools</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index)=>(
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default About
