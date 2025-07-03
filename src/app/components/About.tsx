import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets'


const About = () => {
    return (
        <div id='about' className='w-full max-w-screen-xl mx-auto px-6 py-10 scroll-mt-20'>
            <h1 className='text-center mb-2 text-lg font-ovo'>Introduction</h1>
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
                        I’m an aspiring software engineer with a passion for web development. I have hands-on experience building personal projects using PHP with the Laravel framework and JavaScript for interactive front-end features. <br />
                        I enjoy learning new technologies, writing clean and maintainable code, and turning ideas into functional applications. I’m currently focused on deepening my skills in full-stack development and excited to contribute to real-world projects while growing as a developer.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {infoList.map(({ icon, title, description }, index) => (
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

                    <h2 className='my-6 text-gray-700 font-ovo'>Tools</h2>
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
