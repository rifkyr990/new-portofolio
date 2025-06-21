"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets'
import { useRef } from 'react'


const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const menuRef = useRef<HTMLUListElement | null>(null);

    const bukaMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const tutupMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    })


    return (
        <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='bg-image' className='w-full'/>
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                Logonya
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 bg-opacity-50 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isScroll ? "" : "bg-white shadow-sm"}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-2'>
                <button>
                    <Image src={assets.moon_icon} alt='dark-icon' className='w-6'/>
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4'>Contact 
                    <Image src={assets.arrow_icon} alt="icon" className='w-3'/>
                </a>
                <button className='block md:hidden ml-3' onClick={bukaMenu}>
                    <Image src={assets.menu_black} alt='dark-icon' className='w-6'/>
                </button>
            </div>

            {/* tampilan mobile */}
            <ul ref={menuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed top-0 bottom-0 -right-60 z-50 w-64 h-screen bg-rose-50 transition duration-500'>

                <div className='absolute top-6 right-6' onClick={tutupMenu}>
                    <Image src={assets.close_black} alt='close-btn' className='w-5 cursor-pointer'/>
                </div>

                <li><a href="#home" onClick={tutupMenu}>Home</a></li>
                <li><a href="#service" onClick={tutupMenu}>Service</a></li>
                <li><a href="#project" onClick={tutupMenu}>Project</a></li>
                <li><a href="#about" onClick={tutupMenu}>About me</a></li>
                <li><a href="#contact" onClick={tutupMenu}>Contact me</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
