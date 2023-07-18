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

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24]

    return (
        <div className="w-full bg-[url('../assets/desktop/bg.svg')] bg-top bg-no-repeat bg-cover">
            <Navbar color='#56423E' shadow='' mobile_menu_col='#56423E' fbIcon={false} />
            <div className="w-full px-6 md:px-16 xl:px-24 2xl:px-44">
                <h1 className="lg:pt-20 text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider">Галерия</h1>
                
                {/* map out images in the container */}
                <div className="py-7 md:py-20 flex flex-wrap gap-6 md:gap-10 justify-center items-center">
                    {images.map((img, imgIndex) => (
                        <div id="images" key={imgIndex}>
                            <Image
                                src={img}
                                alt=""
                                onClick={e => imageClick(e)}
                                className="cursor-pointer hover:scale-105 rounded-[1.25rem] shadow-[5px_6px_0_rgba(0,0,0,0.25)] w-36 h-28 md:w-72 md:h-52 lg:w-60 lg:h-48 xl:w-72 xl:h-60 2xl:w-72 2xl:h-60"
                                loading="eager"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <PopupImage />
            <Footer />
        </div>
    )
}