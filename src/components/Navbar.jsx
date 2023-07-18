'use client'

import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import logo from "../assets/desktop/logo.svg"
import fbOrange from "../assets/fbicon.png"
import fbBrown from '../assets/fbiconbrown.png'
import fb_m from '../assets/fbiconMobile.png'

const Navbar = ({ color, shadow, mobile_menu_col, fbIcon }) => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="relative w-full left-0 top-0 right-0 z-10 ease-in duration-300 flex-initial">
            <div className="m-auto flex justify-end lg:justify-center items-center p-4 text-white">
                <Link href='/' className="absolute left-6 md:left-16 xl:left-24 2xl:left-44 top-3 lg:top-2 w-[3.75rem] h-[3.75rem] md:w-16 md:h-16 lg:w-[7.5rem] lg:h-[7.5rem]">
                    <Image
                        src={logo}
                        alt='REMTA'
                        fill
                        sizes="(max-width: 768px) 25vw, 15vw"
                        loading="eager"
                        className="max-w-full h-auto"
                    />
                </Link>
                <ul className={`hidden lg:flex text-[${color}] ${shadow}`}>
                    <li className="p-8 text-2xl font-bold cursor-pointer hover:scale-110">
                        <Link href='/'>Начало</Link>
                    </li>
                    <li className="p-8 text-2xl font-bold cursor-pointer hover:scale-110">
                        <Link href='/gallery'>Галерия</Link>
                    </li>
                    <li className="p-8 text-2xl font-bold cursor-pointer hover:scale-110">
                        <Link href='/#contact'>Контакти</Link>
                    </li>
                </ul>
                <Link href='https://www.facebook.com/RemtaDesign' className={`hidden lg:block absolute lg:right-16 xl:right-24 2xl:right-44 top-8 hover:scale-110`} rel="noopener noreferrer" target="_blank">
                    <Image src={fbIcon ? fbOrange : fbBrown} alt='Facebook' width='3rem' height='3rem' className="max-w-full h-auto drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]" loading="eager" />
                </Link>

                {/* Mobile Button */}
                <div onClick={handleNav} className="block lg:hidden z-10 pt-3 md:px-16">
                    {nav ? <AiOutlineClose className="text-[#56423E]" size='1.875rem' /> : <AiOutlineMenu size='1.875rem' className={`text-[${mobile_menu_col}]`} />}
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav
                        ? 'absolute lg:hidden top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-[#EEF1F4] text-[#56423E]'
                        : 'absolute lg:hidden top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'}>
                    <ul>
                        <li className="p-8 text-2xl font-bold">
                            <Link className="active:text-[#FF7448DE]" onClick={handleNav} href='/'>Начало</Link>
                        </li>
                        <li className="p-8 text-2xl font-bold">
                            <Link className="active:text-[#FF7448DE]" onClick={handleNav} href='/gallery'>Галерия</Link>
                        </li>
                        <li className="p-8 text-2xl font-bold">
                            <Link className="active:text-[#FF7448DE]" onClick={handleNav} href='/#contact'>Контакти</Link>
                        </li>
                        <li className="flex justify-center items-center p-8">
                            <Link href='https://www.facebook.com/RemtaDesign' rel="noopener noreferrer" target="_blank">
                                <Image src={fb_m} alt='Facebook' width='3rem' height='3rem' className="max-w-full h-auto" loading="eager" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar