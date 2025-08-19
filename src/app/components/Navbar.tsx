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
            <div className='fixed top-0 right-0 w-full -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='bg-image' className='w-full' />
            </div>

            {/* Navbar */}
            <nav className={`w-full fixed px-4 md:px-6 lg:px-12 py-4 flex items-center justify-between z-50 ${isScroll
                ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : "" }`}>

                {/* Logo */}
                <a href="#top" className="text-xl font-bold">
                    <Image src={assets.logo} alt='logo' className='w-22'/>
                </a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-10 px-8 py-2 rounded-full ${isScroll
                    ? "" : "bg-white/60 backdrop-blur-md shadow" } transition-all`}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-2'>
                    <a href="#contact"
                        className='hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full hover:bg-gray-100 transition'>
                        Contact
                        <Image src={assets.arrow_icon} alt="icon" className='w-3' />
                    </a>

                    <button className='block md:hidden ml-2' onClick={bukaMenu}>
                        <Image src={assets.menu_black} alt='menu' className='w-6' />
                    </button>
                </div>
            </nav>

            <ul ref={menuRef}
                className='flex md:hidden flex-col gap-5 px-8 py-20 fixed top-0 right-0 z-50 w-64 h-screen bg-white shadow-lg transition-transform duration-300 transform translate-x-full'>
                <div className='absolute top-6 right-6' onClick={tutupMenu}>
                    <Image src={assets.close_black} alt='close-btn' className='w-5 cursor-pointer' />
                </div>
                <li><a href="#home" onClick={tutupMenu}>Home</a></li>
                <li><a href="#service" onClick={tutupMenu}>Service</a></li>
                <li><a href="#project" onClick={tutupMenu}>Project</a></li>
                <li><a href="#about" onClick={tutupMenu}>About me</a></li>
                <li><a href="#contact" onClick={tutupMenu}>Contact me</a></li>
            </ul>
        </>
    )}

export default Navbar
