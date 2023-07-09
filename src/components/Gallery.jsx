'use client'

import left_arrow from "../assets/desktop/left-arrow.svg"
import right_arrow from "../assets/desktop/right-arrow.svg"
import up_arrow from "../assets/mobile/up-arrow.svg"
import down_arrow from "../assets/mobile/down-arrow.svg"
import Image from "next/image"
import { useState } from "react"
import img1 from "../assets/desktop/gallery/img1.jpg"
import img2 from "../assets/desktop/gallery/img2.jpg"
import img3 from "../assets/desktop/gallery/img3.jpg"
import img4 from "../assets/desktop/gallery/img4.jpg"
import img5 from "../assets/desktop/gallery/img5.jpg"
import img6 from "../assets/desktop/gallery/img6.jpg"
import img7 from "../assets/desktop/gallery/img7.jpg"
import img8 from "../assets/desktop/gallery/img8.jpg"
import img9 from "../assets/desktop/gallery/img9.jpg"
import img10 from "../assets/desktop/gallery/img10.jpg"
import img11 from "../assets/desktop/gallery/img11.jpg"
import img12 from "../assets/desktop/gallery/img12.jpg"
import img13 from "../assets/desktop/gallery/img13.jpg"
import img14 from "../assets/desktop/gallery/img14.jpg"
import img15 from "../assets/desktop/gallery/img15.jpg"
import img16 from "../assets/desktop/gallery/img16.jpg"
import img17 from "../assets/desktop/gallery/img17.jpg"
import img18 from "../assets/desktop/gallery/img18.jpg"
import img19 from "../assets/desktop/gallery/img19.jpg"
import img20 from "../assets/desktop/gallery/img20.jpg"
import img21 from "../assets/desktop/gallery/img21.jpg"
import img22 from "../assets/desktop/gallery/img22.jpg"
import img23 from "../assets/desktop/gallery/img23.jpg"
import img24 from "../assets/desktop/gallery/img24.jpg"


const Gallery = () => {

    const slides = [
        {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4
        },
        {
            img1: img5,
            img2: img6,
            img3: img7,
            img4: img8
        },
        {
            img1: img9,
            img2: img10,
            img3: img11,
            img4: img12
        },
        {
            img1: img13,
            img2: img14,
            img3: img15,
            img4: img16
        },
        {
            img1: img17,
            img2: img18,
            img3: img19,
            img4: img20
        },
        {
            img1: img21,
            img2: img22,
            img3: img23,
            img4: img24
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return ( 
        <div id="gallery" className="flex flex-col justify-center lg:justify-start w-full h-screen">
            <h1 className="lg:pt-40 text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider">Галерия</h1>
            <div className="w-full px-6 md:px-16 xl:px-24 pt-8 lg:pt-[8.32rem] flex flex-col lg:flex-row items-center justify-center mx-auto">
                {/* Left arrow */}
                <Image className="hidden lg:block cursor-pointer hover:scale-105" onClick={prevSlide} src={left_arrow} alt="previous" width='3.125rem' height='2.8125rem' />
                {/* mobile up arrow */}
                <Image className="block lg:hidden" onClick={prevSlide} src={up_arrow} alt="previous" width='3.125rem' height='2.8125rem' />

                {/* Images */}
                <Image className="my-2 mx-4 cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={slides[currentIndex].img1} alt="" width='20.8125rem' height='16.4375rem' />
                <Image className="my-2 mx-4 cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={slides[currentIndex].img2} alt="" width='20.8125rem' height='16.4375rem' />
                <Image className="my-2 mx-4 cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-52 h-40 md:w-80 md:h-60 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60" src={slides[currentIndex].img3} alt="" width='20.8125rem' height='16.4375rem' />
                <Image className="hidden 2xl:block my-2 mx-4 cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] 2xl:w-72 2xl:h-60" src={slides[currentIndex].img4} alt="" width='20.8125rem' height='16.4375rem' />

                {/* Right arrow */}
                <Image className="hidden lg:block cursor-pointer hover:scale-105" onClick={nextSlide} src={right_arrow} alt="next" width='3.125rem' height='2.8125rem' />
                {/* mobile down arrow */}
                <Image className="block lg:hidden" onClick={nextSlide} src={down_arrow} alt="next" width='3.125rem' height='2.8125rem' />
            </div>
        </div>
    )
}

export default Gallery