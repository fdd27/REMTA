'use client'

import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Raleway } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import tableTops from '../assets/tableTops.png'
import drawers from '../assets/drawers.png'
import handlesAndDoors from '../assets/handlesAndDoors.png'
import electronics from '../assets/electronics.png'
import doors from '../assets/doors.jpg'

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

    const slides = [
        {
            img: tableTops,
            title: 'Плотове',
            text: 'Кухненските плотове несъмнено са изправени пред най-взискателните изпитания - високи температури, удари, агресивни почистващи препарати и допир на топли и студени съдове за готвене, тези елементи изискват изключителна устойчивост. Дизайнът на нашите плотове съчетава здравина и издръжливост, което ги прави готови за всяко кулинарно предизвикателство.'
        },
        {
            img: drawers,
            title: 'Чекмеджета',
            text: 'Чекмеджетата се справят с ежедневна употреба, съхраняват тежки предмети и трябва да могат да издържат теста на времето. Дизайнът на нашите чекмеджета приоритизира издръжливостта и дълготрайната функционалност, като гарантира, че нуждите ви за съхранение са задоволени без проблем.'
        },
        {
            img: handlesAndDoors,
            title: 'Дръжки и вратички',
            text: 'В сферата на кухненския дизайн малките детайли са тези, които наистина карат пространството да блести. От фината елегантност на дръжките до гладката функционалност на вратичките, тези елементи капсулират както форма, така и функция, добавяйки нотка изтънченост към всеки кулинарен кът.'
        },
        {
            img: electronics,
            title: 'Електроуреди',
            text: 'Ние проучваме и внимателно избираме модерни електрически уреди за вграждане в нашите кухни, включително фурни, котлони, микровълнови печки, съдомиялни машини, перални машини, роботизирани устройства и много други.'
        },
        {
            img: doors,
            title: 'Врати',
            text: "В свят, в който технологията безпроблемно се интегрира във всеки аспект от живота ни, нашите врати не са изключение. Независимо дали става въпрос за отваряне и затваряне без усилие, или за усъвършенствани функции за сигурност, нашите врати са проектирани да се адаптират към Вашите нужди."
        }
    ]

    return (
        <section id="technologies" className="h-full lg:h-fit flex flex-col w-full px-4 md:px-16 xl:px-24 2xl:px-72 pb-32 lg:pb-0 snap-start snap-always">

            <h1 className="text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider mt-14 mb-8 lg:my-24">
                Технологии
            </h1>

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
                                src={slides[0].img}
                                alt="Плотове"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        {/* text */}
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {slides[0].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[0].text}</p>
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-normal lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='https://kronospan.com/bg_BG/products/view/kronodesign/laminirani-plochi/laminirano-pd-ch/laminirano-pd-ch-1'
                                    className={`${raleway.className} underline text-[#FF3131] lg:text-[#56423E] lg:hover:text-[#FF3131]`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Kronospan</Link>
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
                                src={slides[1].img}
                                alt="Чекмеджета"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        {/* text */}
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {slides[1].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[1].text}</p>
                        </div>
                    </div>

                    {/* Carousel item 3 */}
                    <div className="keen-slider__slide tech-slide3 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={slides[2].img}
                                alt="Дръжки и врати"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        {/* text */}
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {slides[2].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[2].text}</p>
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-normal lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='https://lotostrading.com/bg/mebelni-drazhki'
                                    className={`${raleway.className} underline text-[#FF3131] lg:text-[#56423E] lg:hover:text-[#FF3131]`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Lotos Trading</Link>
                                <Link
                                    href='https://berartkapak.com/urunler/membran-kapak.html'
                                    className={`${raleway.className} underline text-[#FF3131] lg:text-[#56423E] lg:hover:text-[#FF3131]`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Berart</Link>
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
                                src={slides[3].img}
                                alt="Плотове"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        {/* text */}
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {slides[3].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[3].text}</p>
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-normal lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='https://www.teka.com/bg-bg/'
                                    className={`${raleway.className} underline text-[#FF3131] lg:text-[#56423E] lg:hover:text-[#FF3131]`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Teka</Link>
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
                                src={slides[4].img}
                                alt="Плотове"
                                fill
                                sizes="(max-width: 1024px) 40vw, 20vw"
                                className="object-fill rounded-[0_2rem] lg:rounded-[0_5rem]"
                            />
                        </div>
                        {/* text */}
                        <div className="flex flex-col flex-auto justify-start items-start mx-12 lg:mr-16 lg:ml-8">
                            <h1
                                className="w-full lg:w-fit mb-2 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] 
                                text-center"
                            >
                                {slides[4].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[4].text}</p>
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-normal lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='http://www.tunakapi.com/'
                                    className={`${raleway.className} underline text-[#FF3131] lg:text-[#56423E] lg:hover:text-[#FF3131]`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Tunakapı</Link>
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