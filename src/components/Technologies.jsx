'use client'

import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Raleway } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Dialog, Tab } from "@headlessui/react"

import tableTops from '../assets/tableTops.png'
import drawers from '../assets/drawers.png'
import handlesAndDoors from '../assets/handlesAndDoors.png'
import electronics from '../assets/electronics.png'
import doors from '../assets/doors.jpg'
import mdf1 from '../assets/tableTops/mdf/1.jpg'
import mdf2 from '../assets/tableTops/mdf/2.jpg'
import mdf3 from '../assets/tableTops/mdf/3.jpg'
import mdf4 from '../assets/tableTops/mdf/4.jpg'
import mdf5 from '../assets/tableTops/mdf/5.jpg'
import mdf6 from '../assets/tableTops/mdf/6.jpg'
import mdf7 from '../assets/tableTops/mdf/7.jpg'
import mdf8 from '../assets/tableTops/mdf/8.jpg'
import mdf9 from '../assets/tableTops/mdf/9.jpg'
import pdch1 from '../assets/tableTops/pdch/1.jpg'
import pdch2 from '../assets/tableTops/pdch/2.jpg'
import pdch3 from '../assets/tableTops/pdch/3.jpg'
import pdch4 from '../assets/tableTops/pdch/4.jpg'
import pdch5 from '../assets/tableTops/pdch/5.jpg'
import pdch6 from '../assets/tableTops/pdch/6.jpg'
import pdch7 from '../assets/tableTops/pdch/7.jpg'
import pdch8 from '../assets/tableTops/pdch/8.jpg'
import pdch9 from '../assets/tableTops/pdch/9.jpg'
import dh_al_ec1 from '../assets/drawerHandles/aluminium_eco/1.jpg'
import dh_al_ec2 from '../assets/drawerHandles/aluminium_eco/2.jpg'
import dh_al_ec3 from '../assets/drawerHandles/aluminium_eco/3.jpg'
import dh_m1 from '../assets/drawerHandles/metal/1.jpg'
import dh_m2 from '../assets/drawerHandles/metal/2.jpg'
import dh_m3 from '../assets/drawerHandles/metal/3.jpg'
import df1 from '../assets/drawerFaces/1.jpg'
import df2 from '../assets/drawerFaces/2.jpg'
import df3 from '../assets/drawerFaces/3.jpg'
import df4 from '../assets/drawerFaces/4.jpg'
import df5 from '../assets/drawerFaces/5.jpg'
import df6 from '../assets/drawerFaces/6.jpg'
import df7 from '../assets/drawerFaces/7.jpg'
import df8 from '../assets/drawerFaces/8.jpg'
import df9 from '../assets/drawerFaces/9.jpg'
import df10 from '../assets/drawerFaces/10.jpg'
import df11 from '../assets/drawerFaces/11.jpg'
import d_pvc1 from '../assets/doors/pvc/1.png'
import d_pvc2 from '../assets/doors/pvc/2.png'
import d_pvc3 from '../assets/doors/pvc/3.png'
import d_mel1 from '../assets/doors/melamine/1.png'
import d_mel2 from '../assets/doors/melamine/2.png'
import d_mel3 from '../assets/doors/melamine/3.png'

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

    let [isOpen, setIsOpen] = useState(false)
    const [techIndex, setTechIndex] = useState(0)

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
    const technologies = [
        {
            "МДФ": [
                { img: mdf1, name: "K531 AD Stone Arvadonna Chestnut" },
                { img: mdf2, name: "K532 AD Flamed Arvadonna Chestnut" },
                { img: mdf3, name: "K533 AD Mink Arvadonna Chestnut" },
                { img: mdf4, name: "K534 AD Charcoal Arvadonna Chestnut" },
                { img: mdf5, name: "K528 HU Cashmere Hudson Oak" },
                { img: mdf6, name: "K527 HU Biscotti Hudson Oak" },
                { img: mdf7, name: "K529 HU Gold Hudson Oak" },
                { img: mdf8, name: "K530 HU Amaretto Hudson Oak" },
                { img: mdf9, name: "K554 HU Chocolate Hudson Oak" }
            ],
            "ПДЧ": [
                { img: pdch1, name: "K534 AD Charcoal Arvadonna Chestnut" },
                { img: pdch2, name: "K532 AD Flamed Arvadonna Chestnut" },
                { img: pdch3, name: "K533 AD Mink Arvadonna Chestnut" },
                { img: pdch4, name: "K528 HU Cashmere Hudson Oak" },
                { img: pdch5, name: "K527 HU Biscotti Hudson Oak" },
                { img: pdch6, name: "K529 HU Gold Hudson Oak" },
                { img: pdch7, name: "K530 HU Amaretto Hudson Oak" },
                { img: pdch8, name: "K554 HU Chocolate Hudson Oak" },
                { img: pdch9, name: "K531 AD Stone Arvadonna Chestnut" }
            ]
        },
        {},
        {
            "Алуминиеви еко дръжки": [
                { img: dh_al_ec1, name: "Алуминиева дръжка 024.05" },
                { img: dh_al_ec2, name: "Алуминиева дръжка 024.08" },
                { img: dh_al_ec3, name: "Алуминиева еко дръжка 1005" },
            ],
            "Метални дръжки": [
                { img: dh_m1, name: "Метална дръжка 022" },
                { img: dh_m2, name: "Метална дръжка 023.096" },
                { img: dh_m3, name: "Метална дръжка 040" }
            ],
            "Вратички с мембраново покритие": [
                { img: df1, name: "Bm 101" },
                { img: df2, name: "Bm 103" },
                { img: df3, name: "Bm 104" },
                { img: df4, name: "Bm 105" },
                { img: df5, name: "Bm 106" },
                { img: df6, name: "Bm 107" },
                { img: df7, name: "Bm 108" },
                { img: df8, name: "Bm 109" },
                { img: df9, name: "Bm 110" },
                { img: df10, name: "Bm 111" },
                { img: df11, name: "Bm 112" }
            ]
        },
        {},
        {
            "PVC": [
                { img: d_pvc1, name: "TP 03" },
                { img: d_pvc2, name: "TP 04" },
                { img: d_pvc3, name: "TP 06" }
            ],
            "Меламин": [
                { img: d_mel1, name: "MELAMIN 01" },
                { img: d_mel2, name: "MELAMIN 02" },
                { img: d_mel3, name: "MELAMIN 03" }
            ]
        },
    ]

    return (
        <section id="technologies" className="h-full lg:h-fit flex flex-col w-full px-4 md:px-16 xl:px-24 2xl:px-60 pb-32 lg:pb-0 snap-start snap-always">

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 w-screen overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="mx-auto max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-5xl rounded bg-white">
                            <span onClick={() => setIsOpen(false)} className="absolute top-0 right-4 lg:right-8 text-5xl lg:text-7xl font-extrabold text-white cursor-pointer z-50 hover:scale-110 transition duration-200 ease-in-out">&times;</span>
                            <Tab.Group>
                                <Tab.List className='flex flex-col lg:flex-row justify-center'>
                                    {Object.keys(technologies[techIndex]).map((k, i) =>
                                        <Tab
                                            key={i}
                                            className='p-2 md:p-4 text-xl font-semibold underline-offset-4 md:underline-offset-8 ui-selected:text-red ui-selected:underline ui-not-selected:text-brown 
                                            ui-not-selected:no-underline hover:scale-105 transition duration-200 ease-in-out'
                                        >{k}</Tab>
                                    )}
                                </Tab.List>
                                <Tab.Panels>
                                    {Object.values(technologies[techIndex]).map((arr, i) => (
                                        <Tab.Panel key={i} className='flex flex-row flex-wrap gap-6 justify-center'>
                                            {arr.map((obj, j) => (
                                                <div key={j} className="max-w-[5rem] md:max-w-[9rem] lg:max-w-[13rem]">
                                                    <div className="relative w-20 h-20 md:w-36 md:h-36 lg:w-52 lg:h-52">
                                                        <Image
                                                            src={obj.img}
                                                            alt={obj.name}
                                                            fill
                                                            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 15vw"
                                                        />
                                                    </div>
                                                    <p className={`${raleway.className} text-[0.6rem] md:text-sm lg:text-base text-center`}>{obj.name}</p>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>

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
                                src={slides[currentSlide].img}
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
                                {slides[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[currentSlide].text}</p>
                            {/* Colors and materials button */}
                            <button
                                className="mx-auto lg:mx-0 mb-2 text-xs md:text-base lg:text-lg xl:text-xl text-brown font-medium underline-offset-4 hover:text-red hover:underline transition duration-200 ease-in-out"
                                onClick={() => {
                                    setTechIndex(currentSlide)
                                    setIsOpen(true)
                                }}
                            >Цветове и Материали</button>
                            {/* Partners */}
                            <div className="w-full flex flex-col lg:flex-row mb-2 text-brown text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='https://kronospan.com/bg_BG/products/view/kronodesign/laminirani-plochi/laminirano-pd-ch/laminirano-pd-ch-1'
                                    className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red hover:underline transition duration-200 ease-in-out`}
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
                                src={slides[currentSlide].img}
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
                                {slides[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[currentSlide].text}</p>
                        </div>
                    </div>

                    {/* Carousel item 3 */}
                    <div className="keen-slider__slide tech-slide3 flex flex-col md:flex-row">
                        <div
                            className="relative flex flex-shrink-0 justify-center items-center my-8 mx-12 lg:ml-16 lg:mr-8 w-32 h-24 md:w-60 md:h-48 xl:w-72 xl:h-60 rounded-[0_2rem] 
                            lg:rounded-[0_5rem] shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                        >
                            <Image
                                src={slides[currentSlide].img}
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
                                {slides[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[currentSlide].text}</p>
                            {/* Colors and materials button */}
                            <button
                                className="mx-auto lg:mx-0 mb-2 text-xs md:text-base lg:text-lg xl:text-xl text-brown font-medium underline-offset-4 hover:text-red hover:underline transition duration-200 ease-in-out"
                                onClick={() => {
                                    setTechIndex(currentSlide)
                                    setIsOpen(true)
                                }}
                            >Цветове и Материали</button>
                            {/* Partners */}
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='https://lotostrading.com/bg/mebelni-drazhki'
                                    className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red lg:hover:underline transition duration-200 ease-in-out`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >Lotos Trading</Link>
                                <Link
                                    href='https://berartkapak.com/urunler/membran-kapak.html'
                                    className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red lg:hover:underline transition duration-200 ease-in-out`}
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
                                src={slides[currentSlide].img}
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
                                {slides[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[currentSlide].text}</p>
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='https://www.teka.com/bg-bg/'
                                    className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red lg:hover:underline transition duration-200 ease-in-out`}
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
                                src={slides[currentSlide].img}
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
                                {slides[currentSlide].title}
                            </h1>
                            <p className={`mb-2 text-[#56423E] text-center lg:text-justify text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl ${raleway.className}`}>{slides[currentSlide].text}</p>
                            {/* Colors and materials button */}
                            <button
                                className="mx-auto lg:mx-0 mb-2 text-xs md:text-base lg:text-lg xl:text-xl text-brown font-medium underline-offset-4 hover:text-red hover:underline transition duration-200 ease-in-out"
                                onClick={() => {
                                    setTechIndex(currentSlide)
                                    setIsOpen(true)
                                }}
                            >Цветове и Материали</button>
                            {/* Partners */}
                            <div className="w-full flex flex-col lg:flex-row  mb-2 text-[#56423E] text-xs md:text-base md:leading-4 lg:text-lg xl:text-xl font-medium lg:gap-x-3 text-center">
                                <p>Партньори:</p>
                                <Link
                                    href='http://www.tunakapi.com/'
                                    className={`${raleway.className} pt-[0.1rem] underline-offset-4 text-red lg:text-brown lg:hover:text-red lg:hover:underline transition duration-200 ease-in-out`}
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