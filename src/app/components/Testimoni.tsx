import { testimoni } from '@/assets'
import React from 'react'
import Image from 'next/image';

const Testimoni = () => {
    const looped = [...testimoni, ...testimoni];
    return (
        <div className='my-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Testimonials</h4>
            <h2 className='text-center text-5xl font-ovo'>What They Say</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Below are some of the most recent testimonials and professional collaborations that have played a
                significant role in my journey as a software engineer.
            </p>

            <section className="">
                <div className="relative">
                    <div className="flex animate-marquee space-x-6 w-max">
                        <div className="flex flex-wrap gap-6 justify-center overflow-visible">
                        {looped.map((item, index) => (
                            <div key={index}
                                className="relative max-w-[400px] bg-white shadow-xl rounded-lg pt-16 px-6 pb-6 border border-gray-700 overflow-visible">
                                {/* Gambar avatar posisi tengah atas */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
                                    <Image src={item.photo} alt={item.name} width={80} height={80}
                                        className="rounded-full border-4 border-white shadow-md object-cover z-50" />
                                </div>

                                <p className="text-gray-700 italic text-center mb-4 mt-2">&quot;{item.text}</p>
                                <div className="text-center">
                                    <p className="font-semibold text-gray-900">{item.name}</p>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimoni
