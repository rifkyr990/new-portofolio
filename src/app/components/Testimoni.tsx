import { testimoni } from '@/assets'
import React from 'react'

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

            <section className="overflow-hidden">
                <div className="relative">
                    <div className="flex animate-marquee space-x-6 w-max">

                        {looped.map((item, index) => (
                            <div key={index} className="max-w-[400px] bg-white shadow-xl rounded-lg p-6 border border-gray-700">
                                <p className="text-gray-700 italic">"{item.text}"
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <p className="font-semibold text-gray-900">{item.name} -</p>
                                    <p className=" text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimoni
