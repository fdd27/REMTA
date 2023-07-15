'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import img1 from "../../assets/desktop/gallery/img1.jpg"
import img2 from "../../assets/desktop/gallery/img2.jpg"
import img3 from "../../assets/desktop/gallery/img3.jpg"
import img4 from "../../assets/desktop/gallery/img4.jpg"
import img5 from "../../assets/desktop/gallery/img5.jpg"
import img6 from "../../assets/desktop/gallery/img6.jpg"
import img7 from "../../assets/desktop/gallery/img7.jpg"
import img8 from "../../assets/desktop/gallery/img8.jpg"
import img9 from "../../assets/desktop/gallery/img9.jpg"
import img10 from "../../assets/desktop/gallery/img10.jpg"
import img11 from "../../assets/desktop/gallery/img11.jpg"
import img12 from "../../assets/desktop/gallery/img12.jpg"
import img13 from "../../assets/desktop/gallery/img13.jpg"
import img14 from "../../assets/desktop/gallery/img14.jpg"
import img15 from "../../assets/desktop/gallery/img15.jpg"
import img16 from "../../assets/desktop/gallery/img16.jpg"
import img17 from "../../assets/desktop/gallery/img17.jpg"
import img18 from "../../assets/desktop/gallery/img18.jpg"
import img19 from "../../assets/desktop/gallery/img19.jpg"
import img20 from "../../assets/desktop/gallery/img20.jpg"
import img21 from "../../assets/desktop/gallery/img21.jpg"
import img22 from "../../assets/desktop/gallery/img22.jpg"
import img23 from "../../assets/desktop/gallery/img23.jpg"
import img24 from "../../assets/desktop/gallery/img24.jpg"
import PopupImage from "@/components/PopupImage"


export default function GalleryPage() {
    const imageClick = (e) => {
        document.getElementById('popup').classList.toggle('visible')
        document.getElementById('popupImage').src = e.currentTarget.src
    }

    return (
        <div className="w-full bg-[url('../assets/desktop/bg.svg')] bg-top bg-no-repeat bg-cover">
            <Navbar color='#56423E' shadow='' />
            <div className="w-full px-6 md:px-16 xl:px-24 2xl:px-44">
                <h1 className="lg:pt-20 text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider">Галерия</h1>
                <div className="py-20 flex flex-wrap gap-10 justify-center items-center">
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img1} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img2} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img3} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img4} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img5} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img6} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img7} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img8} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img9} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img10} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img11} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img12} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img13} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img14} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img15} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img16} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img17} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img18} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img19} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img20} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img21} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img22} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img23} alt="" />
                    <Image onClick={e => imageClick(e)} className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={img24} alt="" />
                </div>
            </div>
            <PopupImage />
            <Footer />
        </div>
    )
}