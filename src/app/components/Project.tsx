import React from 'react'
import { assets,workData } from '@/assets'
import Image from 'next/image'

const Project = () => {
    return (
        <div>
            <div id='project' className='w-full max-w-screen-xl mx-auto py-0 scroll-mt-20'>
                <h1 className='text-center mb-2 text-lg font-ovo'>My project</h1>
                <h2 className='text-center text-5xl font-ovo'>My latest work</h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    Highlighted below are my latest professional networks, including projects and key collaborators that contribute to my growth as a web developer.
                </p>

                <div className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-7'>
                    {workData.map((project, index)=>(
                        <div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group shadow-lg w-auto'>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-2xl/30 group-hover:bg-lime-300 transition'>
                                    <a href={project.link} target='_blank'><Image src={assets.send_icon} alt='icon' className='w-5'/></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a href="" className='w-max flex items-center justify-center mx-auto text-gray-700 border-2 border-gray-700 rounded-full text-center gap-2 px-10 py-3 gap-y-3 my-20'>
                Show more<Image src={assets.right_arrow} alt='' className='w-4'/>
            </a>
        </div>
    )
}

export default Project
