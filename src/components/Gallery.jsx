'use client'

// import left_arrow from "../assets/left-arrow.png"
// import right_arrow from "../assets/right-arrow.png"
// import up_arrow from "../assets/up-arrow.png"
// import down_arrow from "../assets/down-arrow.png"
import Image from "next/image"
// import { useState } from "react"
// import img1 from "../assets/gallery/img1.jpg"
import img2 from "../assets/gallery/img2.jpg"
// import img3 from "../assets/gallery/img3.jpg"
// import img4 from "../assets/gallery/img4.jpg"
import img5 from "../assets/gallery/img5.jpg"
// import img6 from "../assets/gallery/img6.jpg"
// import img7 from "../assets/gallery/img7.jpg"
// import img8 from "../assets/gallery/img8.jpg"
// import img9 from "../assets/gallery/img9.jpg"
import img10 from "../assets/gallery/img10.jpg"
// import img11 from "../assets/gallery/img11.jpg"
// import img12 from "../assets/gallery/img12.jpg"
import img13 from "../assets/gallery/img13.jpg"
// import img14 from "../assets/gallery/img14.jpg"
// import img15 from "../assets/gallery/img15.jpg"
// import img16 from "../assets/gallery/img16.jpg"
// import img17 from "../assets/gallery/img17.jpg"
// import img18 from "../assets/gallery/img18.jpg"
// import img19 from "../assets/gallery/img19.jpg"
// import img20 from "../assets/gallery/img20.jpg"
// import img21 from "../assets/gallery/img21.jpg"
// import img22 from "../assets/gallery/img22.jpg"
// import img23 from "../assets/gallery/img23.jpg"
// import img24 from "../assets/gallery/img24.jpg"
import PopupImage from "./PopupImage"
import Link from "next/link"

const Gallery = () => {

    // const slides = [
    //     {
    //         img1: img1,
    //         img2: img2,
    //         img3: img3,
    //         img4: img4
    //     },
    //     {
    //         img1: img5,
    //         img2: img6,
    //         img3: img7,
    //         img4: img8
    //     },
    //     {
    //         img1: img9,
    //         img2: img10,
    //         img3: img11,
    //         img4: img12
    //     },
    //     {
    //         img1: img13,
    //         img2: img14,
    //         img3: img15,
    //         img4: img16
    //     },
    //     {
    //         img1: img17,
    //         img2: img18,
    //         img3: img19,
    //         img4: img20
    //     },
    //     {
    //         img1: img21,
    //         img2: img22,
    //         img3: img23,
    //         img4: img24
    //     },
    // ]

    // const [currentIndex, setCurrentIndex] = useState(0)

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }

    const imageClick = (e) => {
        document.getElementById('popup').classList.toggle('visible')
        document.getElementById('popupImage').src = e.currentTarget.src
    }

    return (
        <section id="gallery" className="flex flex-col justify-center w-full h-screen pb-32 lg:pb-0 snap-start snap-always">
            <h1 className="text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider">Галерия</h1>
            <div className="w-full px-6 md:px-0 py-8 md:py-16 lg:py-24 flex flex-col md:flex-row md:flex-wrap md:w-[38rem] gap-4 md:gap-8 items-center justify-center mx-auto">
                <Image onClick={e => imageClick(e)} className="max-w-full cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(255,110,65,0.55)] w-40 h-32 md:w-60 md:h-48 lg:w-60 lg:h-48 xl:w-72 xl:h-60" src={img5} alt="" loading="eager" />
                <Image onClick={e => imageClick(e)} className="max-w-full cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(255,110,65,0.55)] w-40 h-32 md:w-60 md:h-48 lg:w-60 lg:h-48 xl:w-72 xl:h-60" src={img2} alt="" loading="eager" />
                <Image onClick={e => imageClick(e)} className="max-w-full hidden md:block cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(255,110,65,0.55)] md:w-60 md:h-48 lg:w-60 lg:h-48 xl:w-72 xl:h-60" src={img10} alt="" loading="eager" />
                <Image onClick={e => imageClick(e)} className="max-w-full hidden md:block cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(255,110,65,0.55)] md:w-60 md:h-48 lg:w-60 lg:h-48 xl:w-72 xl:h-60" src={img13} alt="" loading="eager" />
            </div>
            <Link href='/gallery' className="mx-auto px-6 py-2 lg:px-9 md:py-4 rounded-2xl md:rounded-3xl border-[#56423E] border-2 border-solid border-opacity-100 bg-transparent hover:bg-[#FF3131] text-[#56423E] hover:text-white transition-colors ease-out flex justify-center items-center hover:scale-105 cursor-pointer shadow-[5px_5px_0_rgba(255,110,65,0.55)]">
                <p className="text-center text-lg lg:text-xl 2xl:text-2xl font-semibold">Виж всички</p>
            </Link>

            <PopupImage />
        </section>
    )
}

export default Gallery