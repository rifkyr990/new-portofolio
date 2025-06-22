'use client'
import React from 'react';
import { assets } from '@/assets';
import Image from 'next/image';


    const Contact = () => {
        const [result, setResult] = React.useState("");

        const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d1a2950f-1f1b-40e9-b027-ed3e93877b74");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full max-w-screen-xl mx-auto py-0 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi alias sequi. Quas animi quod eveniet assumenda totam cumque, esse laboriosam aspernatur quibusdam praesentium quidem nam dicta vitae magni? Enim.
            </p>

            <form className='max-x-2xl mx-auto' onSubmit={onSubmit}>
                <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' name="name" id="name" className='flex-1 outline-none border border-gray-400 rounded-md bg-white p-3' required/>
                    <input type="email" placeholder='Enter your email' name="email" id="email" className='flex-1 outline-none border-1 border-gray-400 rounded-md bg-white p-3' required/>
                </div>
                <textarea name="message" id="message" rows={6} placeholder='Enter your message' className='w-full p-4 outline-none border border-gray-400 rounded-m bg-white mb-6' required></textarea>
                <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
                    Submit
                    <Image src={assets.right_arrow_white} alt='icon' className='w-4'/>
                </button>
            </form>
            <span>{result}</span>
        </div>
    )
}

export default Contact
