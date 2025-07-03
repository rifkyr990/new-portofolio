import React from "react";
import Image from "next/image";
import {assets} from '@/assets'

const Header = () => {
    return (
        <div id="header" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center text-center gap-4">
                <Image src={assets.profile_img} alt="profile" className="rounded-full w-35" />
                <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo">
                    Hi! i&rsquo;m Rifky Ramadhan 
                    <Image src={assets.hand_icon} alt="" className="w-6" />
                </h3>
                <h1 className="text-2xl sm:text-5xl lg:text-[50px] font-ovo">Software Engineer based in Yogyakarta</h1>
                <p className="max-w-2xl mx-auto font-ovo">
                    I am an aspiring software engineer with a strong foundation in programming, problem-solving, and software development principles. I am passionate about building efficient and user-friendly applications, and eager to contribute and grow in a professional tech environment.
                </p>
            </div>

            <div className="flex flex-column sm:flex-row gap-4 mt-4 items-center">
                <a href="#contact" className="px-10 py-3 border rounded-full border-white bg-black flex items-center gap-2 text-white">Connect with me <Image src={assets.right_arrow_white} alt="" className="w-4"/></a>
                <a href="#" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">My resume <Image src={assets.download_icon} alt="" className="w-4"/></a>
            </div>
        </div>
    )
}

export default Header