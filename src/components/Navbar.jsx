'use client'

import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import logo from "../assets/desktop/logo.svg"
import fb from "../assets/desktop/icon-facebook.svg"
import fb_m from '../assets/mobile/icon-facebook.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="absolute w-full left-0 top-0 right-0 z-10 ease-in duration-300">
            <div className="m-auto flex justify-end lg:justify-center items-center p-4 text-white">
                <Link href='/' className="absolute left-6 lg:left-24 xl:left-44 top-1 lg:top-4">
                    <Image
                        src={logo}
                        alt='REMTA'
                        width={120}
                        height={120}
                        // placeholder="blur"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 55vw, 100vw" 
                    />
                </Link>
                <ul className="hidden lg:flex">
                    <li className="p-8 text-2xl font-bold drop-shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:scale-110">
                        <Link href='/'>Начало</Link>
                    </li>
                    <li className="p-8 text-2xl font-bold drop-shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:scale-110">
                        <Link href='/#gallery'>Галерия</Link>
                    </li>
                    <li className="p-8 text-2xl font-bold drop-shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:scale-110">
                        <Link href='/#contact'>Контакти</Link>
                    </li>
                </ul>
                <Link href='https://www.facebook.com/RemtaDesign' className="hidden lg:block absolute right-24 xl:right-44 top-8" rel="noopener noreferrer" target="_blank">
                    <Image src={fb} alt='Facebook' width='3rem' height='3rem' className=" drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]" />
                </Link>

                {/* Mobile Button */}
                <div onClick={handleNav} className="block lg:hidden z-10 pt-3">
                    {nav ? <AiOutlineClose className="text-[#56423E]" size='1.875rem' /> : <AiOutlineMenu size='1.875rem' />}
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
                            <Link className="active:text-[#FF7448DE]" onClick={handleNav} href='/#gallery'>Галерия</Link>
                        </li>
                        <li className="p-8 text-2xl font-bold">
                            <Link className="active:text-[#FF7448DE]" onClick={handleNav} href='/#contact'>Контакти</Link>
                        </li>
                        <li className="flex justify-center items-center p-8">
                            <Link href='https://www.facebook.com/RemtaDesign' rel="noopener noreferrer" target="_blank">
                                <Image src={fb_m} alt='Facebook' width='3rem' height='3rem' className="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar