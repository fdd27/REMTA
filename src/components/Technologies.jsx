'use client'

import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { Raleway } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import technologies from "@/data/technologies"

import TechnologiesModal from "./TechnologiesModal"

const raleway = Raleway({
    subsets: ['cyrillic'],
    weight: ['400'],
})

const Technologies = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    const [isOpen, setIsOpen] = useState(false)
    const [techIndex, setTechIndex] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleClose = () => {
        setIsOpen(false)
        setSelectedCategory(null)
    }

    return (
        <section id="technologies" className="h-full lg:h-fit flex flex-col w-full px-4 md:px-16 xl:px-24 2xl:px-60 pb-32 lg:pb-0 snap-start snap-always">
            <h1 className="text-[#56423E] text-center text-3xl md:text-4xl lg:text-3xl xl:text-[2rem] 2xl:text-4xl font-semibold leading-[3rem] tracking-wider mt-14 mb-8 lg:my-24">
                Технологии
            </h1>

            <TechnologiesModal index={techIndex} open={isOpen} handleClose={handleClose} selected={selectedCategory} setSelected={setSelectedCategory} />

            {/* Carousel */}
            <div className="navigation-wrapper rounded-[1.25rem] shadow-[7px_7px_0_rgba(255,49,49,0.55)]">
                <div ref={sliderRef} className="keen-slider rounded-[1.25rem]">

                    {/* Carousel item 1 */}
                    <div className="keen-slider__slide tech-slide1 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={technologies[currentSlide].img}
                                alt="Плотове"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>

                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {technologies[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>
                                {technologies[currentSlide].text}
                            </p>

                            <button
                                className="mx-auto lg:mx-0 mb-2 text-xs md:text-base lg:text-lg xl:text-xl text-brown font-medium underline-offset-4 hover:text-red hover:underline transition duration-200 ease-in-out"
                                onClick={() => {
                                    setTechIndex(currentSlide)
                                    setIsOpen(true)
                                }}
                            >
                                Цветове и Материали
                            </button>

                            <div className="w-full flex flex-col lg:flex-row mb-2 text-brown text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-2 text-center">
                                <p>Партньори:</p>
                                {technologies[currentSlide].partners.map(partner =>
                                    <Link
                                        key={partner.name} href={partner.link} rel="noopener noreferrer" target="_blank"
                                        className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red hover:underline transition duration-200 ease-in-out`}
                                    >{partner.name}</Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Carousel item 2 */}
                    <div className="keen-slider__slide tech-slide2 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={technologies[currentSlide].img}
                                alt="Чекмеджета"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {technologies[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{technologies[currentSlide].text}</p>
                            <div className="w-full flex flex-col lg:flex-row mb-2 text-brown text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-2 text-center">
                                <p>Партньори:</p>
                                {technologies[currentSlide].partners.map(partner =>
                                    <Link
                                        key={partner.name} href={partner.link} rel="noopener noreferrer" target="_blank"
                                        className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red hover:underline transition duration-200 ease-in-out`}
                                    >{partner.name}</Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Carousel item 3 */}
                    <div className="keen-slider__slide tech-slide3 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={technologies[currentSlide].img}
                                alt="Дръжки и врати"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>

                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {technologies[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{technologies[currentSlide].text}</p>
                            
                            <button
                                className="mx-auto lg:mx-0 mb-2 text-xs md:text-base lg:text-lg xl:text-xl text-brown font-medium underline-offset-4 hover:text-red hover:underline transition duration-200 ease-in-out"
                                onClick={() => {
                                    setTechIndex(currentSlide)
                                    setIsOpen(true)
                                }}
                            >Цветове и Материали</button>

                            <div className="w-full flex flex-col lg:flex-row mb-2 text-brown text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-2 text-center">
                                <p>Партньори:</p>
                                {technologies[currentSlide].partners.map(partner =>
                                    <Link
                                        key={partner.name} href={partner.link} rel="noopener noreferrer" target="_blank"
                                        className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red hover:underline transition duration-200 ease-in-out`}
                                    >{partner.name}</Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Carousel item 4 */}
                    <div className="keen-slider__slide tech-slide4 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={technologies[currentSlide].img}
                                alt="Плотове"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>

                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {technologies[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{technologies[currentSlide].text}</p>
                            
                            <div className="w-full flex flex-col lg:flex-row mb-2 text-brown text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-2 text-center">
                                <p>Партньори:</p>
                                {technologies[currentSlide].partners.map(partner =>
                                    <Link
                                        key={partner.name} href={partner.link} rel="noopener noreferrer" target="_blank"
                                        className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red hover:underline transition duration-200 ease-in-out`}
                                    >{partner.name}</Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Carousel item 5 */}
                    <div className="keen-slider__slide tech-slide4 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={technologies[currentSlide].img}
                                alt="Плотове"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {technologies[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{technologies[currentSlide].text}</p>
                            
                            <button
                                className="mx-auto lg:mx-0 mb-2 text-xs md:text-base lg:text-lg xl:text-xl text-brown font-medium underline-offset-4 hover:text-red hover:underline transition duration-200 ease-in-out"
                                onClick={() => {
                                    setTechIndex(currentSlide)
                                    setIsOpen(true)
                                }}
                            >Цветове и Материали</button>
                            
                            <div className="w-full flex flex-col lg:flex-row mb-2 text-brown text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-2 text-center">
                                <p>Партньори:</p>
                                {technologies[currentSlide].partners.map(partner =>
                                    <Link
                                        key={partner.name} href={partner.link} rel="noopener noreferrer" target="_blank"
                                        className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red hover:underline transition duration-200 ease-in-out`}
                                    >{partner.name}</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active " : "")}
                            ></button>
                        )
                    })}
                </div>
            )}

            <Link
                href='https://cloudflare-ipfs.com/ipfs/bafykbzacecc26topdwmzak6tb55hc2lyp5rqly6nuj2chlvjou6ydxcifccds?filename=Ragnar%20Benson%20-%20Breath%20of%20the%20Dragon_%20Homebuilt%20Flamethrowers-Paladin%20Press%20%281990%29.pdf'
                className="mx-auto mt-10 px-8 py-2 lg:px-10 md:py-4 rounded-2xl md:rounded-3xl border-[#56423E] border-2 border-solid border-opacity-100 bg-transparent
                        hover:bg-[#F30010] text-[#56423E] hover:text-white transition duration-200 ease-in-out flex justify-center items-center shadow-[5px_5px_0_rgba(255,49,49,0.55)] 
                        cursor-pointer hover:scale-105"
            >
                <p className="text-center text-lg md:text-[1.375rem] 2xl:text-2xl font-semibold ">Електронен каталог</p>
            </Link>
        </section>
    )
}

const Arrow = (props) => {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld} hover:translate-y-[-1.2rem] transition duration-200 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default Technologies