'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import Image from "next/image"

import img1 from "../assets/gallery/img1.jpg"
import img2 from "../assets/gallery/img2.jpg"
import img3 from "../assets/gallery/img3.jpg"
import img4 from "../assets/gallery/img4.jpg"
import img5 from "../assets/gallery/img5.jpg"
import img6 from "../assets/gallery/img6.jpg"
import img7 from "../assets/gallery/img7.jpg"
import img8 from "../assets/gallery/img8.jpg"
import img9 from "../assets/gallery/img9.jpg"
import img10 from "../assets/gallery/img10.jpg"
import img11 from "../assets/gallery/img11.jpg"
import img12 from "../assets/gallery/img12.jpg"
import img13 from "../assets/gallery/img13.jpg"
import img14 from "../assets/gallery/img14.jpg"
import img15 from "../assets/gallery/img15.jpg"
import img16 from "../assets/gallery/img16.jpg"
import img17 from "../assets/gallery/img17.jpg"
import img18 from "../assets/gallery/img18.jpg"
import img19 from "../assets/gallery/img19.jpg"
import img20 from "../assets/gallery/img20.jpg"
import img21 from "../assets/gallery/img21.jpg"
import img22 from "../assets/gallery/img22.jpg"
import img23 from "../assets/gallery/img23.jpg"
import img24 from "../assets/gallery/img24.jpg"
import PopupImage from "./PopupImage"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

const Gallery = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    const imageClick = (e) => {
        document.getElementById('popup').classList.toggle('visible')
        document.getElementById('popupImage').src = e.currentTarget.src
    }

    return (
        <section id="gallery" className="w-full px-4 md:px-16 xl:px-24 2xl:px-72">
            <h1 className="text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider mt-0 mb-8 lg:my-24">
                Галерия
            </h1>

            {/* Slider pics */}
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide img-slide1 cursor-pointer">
                    <Image
                        src={img1}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide2 cursor-pointer">
                    <Image
                        src={img2}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide3 cursor-pointer">
                    <Image
                        src={img3}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide4 cursor-pointer">
                    <Image
                        src={img4}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide5 cursor-pointer">
                    <Image
                        src={img5}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img6}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img7}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img8}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img9}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img10}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img11}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img12}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img13}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img14}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img15}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img16}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img17}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img18}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img19}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img20}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img21}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img22}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img23}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img24}
                        alt=""
                        fill
                        sizes="100vw"
                        className=" object-cover"
                        onClick={e => imageClick(e)}
                    />
                </div>
            </div>

            {/* Thumbnails */}
            <div ref={thumbnailRef} className="keen-slider thumbnail lg:mb-24">
                <div className="keen-slider__slide img-slide1 cursor-pointer">
                    <Image
                        src={img1}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide2 cursor-pointer">
                    <Image
                        src={img2}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide3 cursor-pointer">
                    <Image
                        src={img3}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide4 cursor-pointer">
                    <Image
                        src={img4}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide5 cursor-pointer">
                    <Image
                        src={img5}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img6}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img7}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img8}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img9}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img10}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img11}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img12}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img13}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img14}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img15}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img16}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img17}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img18}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img19}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img20}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img21}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img22}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img23}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
                <div className="keen-slider__slide img-slide6 cursor-pointer">
                    <Image
                        src={img24}
                        alt=""
                        fill
                        sizes="20vw"
                        className=" object-cover"
                    />
                </div>
            </div>

            {/* Pop-up Image component for when an image is clicked */}
            <PopupImage />
        </section>
    )
}

export default Gallery