'use client'

import { Raleway } from "next/font/google"
import left_arrow from "../assets/left-arrow.png"
import right_arrow from "../assets/right-arrow.png"
import Image from "next/image"
import { useState, useEffect } from "react"
import services_img_1 from "../assets/srvimg1.png"
import services_img_2 from "../assets/srvimg2.png"
import services_img_3 from "../assets/srvimg3.png"
import services_img_4 from "../assets/srvimg4.png"
import services_img_5 from "../assets/srvimg5.png"

const raleway = Raleway({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500'],
})

const Services = () => {

    const slides = [
        {
            img: services_img_1,
            title: 'Консултация',
            text: 'Започваме с разбиране на вашата визия и изисквания. Нашият екип ще работи в тясно сътрудничество с вас, за да обсъдим вашите идеи, стилови предпочитания, размери и всякакви други специфични подробности. Тази стъпка е от решаващо значение за реализирането на вашата визия.'
        },
        {
            img: services_img_2,
            title: 'Избор на материали и цветове',
            text: 'По време на този етап ще имате възможност да избирате от широка гама висококачествени материали. Нашият екип ще ви насочи при избора на материали, които най-добре отговарят на вашите изисквания за дизайн и издръжливост.'
        },
        {
            img: services_img_3,
            title: 'Конструкция и производство',
            text: 'След като дизайнът, цветовете и материалите са финализирани започваме производствения процес. Всяка мебел е изработена в нашия цех, който съчетава традиционни техники с модерни технологии.'
        },
        {
            img: services_img_4,
            title: 'Гарантиране на качеството',
            text: 'Преди вашите мебели по поръчка да напуснат нашия цех те преминават през строг процес на контрол на качеството. Нашият екип проверява всеки аспект на детайла, за да гарантира, че отговаря на нашите строги стандарти за майсторство, издръжливост и естетика.'
        },
        {
            img: services_img_5,
            title: 'Доставка и монтаж',
            text: 'След като вашите мебели преминат нашата проверка на качеството, ние организираме удобно време за доставка, което отговаря на вашия график. Нашият професионален екип за доставка гарантира, че вашите мебели пристигат безопасно и са експертно монтирани на желаното от вас място.'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    let firstDotClick = true
    useEffect(() => {
        document.getElementById('dot0').style.backgroundColor = '#FF6E41'
    }, [])

    const prevSlide = () => {

        if (firstDotClick) {
            document.getElementById('dot0').style.backgroundColor = '#B2B4B5'
            firstDotClick = false
        }

        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1

        document.getElementById(`dot${currentIndex}`).style.backgroundColor = '#B2B4B5'
        setCurrentIndex(newIndex)
        document.getElementById(`dot${newIndex}`).style.backgroundColor = '#FF6E41'
    }

    const nextSlide = () => {
        // setTimeout(hideCarousel(), 300)

        if (firstDotClick) {
            document.getElementById('dot0').style.backgroundColor = '#B2B4B5'
            firstDotClick = false
        }

        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        
        document.getElementById(`dot${currentIndex}`).style.backgroundColor = '#B2B4B5'
        setCurrentIndex(newIndex)
        document.getElementById(`dot${newIndex}`).style.backgroundColor = '#FF6E41'

        // setTimeout(showCarousel(), 300)
    }

    const goToSlide = (slideIndex) => {

        if (firstDotClick) {
            if (slideIndex != 0) {
                document.getElementById('dot0').style.backgroundColor = '#B2B4B5'
            }
            firstDotClick = false
        }
        
        document.getElementById(`dot${currentIndex}`).style.backgroundColor = '#B2B4B5'
        setCurrentIndex(slideIndex)
        document.getElementById(`dot${slideIndex}`).style.backgroundColor = '#FF6E41'
    }

    // const hideCarousel = () => {
    //     document.getElementById('carousel').classList.add('opacity-0')
    // }

    // const showCarousel = () => {
    //     document.getElementById('carousel').classList.remove('opacity-0')
    // }

    return (
        <section id="services" className="flex flex-col justify-center w-full h-screen px-6 md:px-16 xl:px-24 2xl:px-44 pb-32 lg:pb-0 snap-start snap-always">
            <h1 className="text-[#56423E] text-center text-2xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider">Как работи всичко</h1>
            <p className={`max-w-[77.875rem] mx-auto md:mt-7 font-medium text-[#56423E] text-justify text-sm md:text-xl 2xl:text-[1.375rem] leading-4 lg:leading-8 tracking-wide ${raleway.className}`}>
                Държим клиентите ни да участват във всяка стъпка от процеса, за да сме сигурни, че тяхната визия е реализирана във всеки аспект на дизайна. От избора на материалите до размерите и характеристиките, ние работим в тясно сътрудничество с нашите клиенти, за да създадем обзавеждане, което идеално пасва на нуждите и предпочитанията им.
            </p>

            {/* Carousel Buttons*/}
            <div className="hidden lg:flex justify-center items-center mt-8 lg:mt-[4.34rem]">

                {/* Left arrow */}
                <div>
                    <Image
                        className="max-w-full h-auto cursor-pointer hover:scale-110"
                        onClick={prevSlide}
                        src={left_arrow}
                        alt="previous"
                        loading="eager"
                        sizes="100vw"
                    />
                </div>

                {/* Dots */}
                <div className="flex justify-center">
                    {slides.map((slide, slideIndex) => (
                        <div id="dots" key={slideIndex} onClick={() => goToSlide(slideIndex)} className="cursor-pointer hover:scale-110">
                            <div id={`dot${slideIndex}`} className="w-3 h-3 m-2 rounded-full bg-[#B2B4B5]" />
                        </div>
                    ))}
                </div>

                {/* Right arrow */}
                <div>
                    <Image
                        className="max-w-full h-auto cursor-pointer hover:scale-110"
                        onClick={nextSlide}
                        src={right_arrow}
                        alt="next"
                        loading="eager"
                        sizes="100vw"
                    />
                </div>
            </div>


            {/* Carousel */}
            <div id="carousel" className="xl:max-w-[69.25rem] xl:max-h-[23.2065rem] mt-5 md:mt-10 mx-auto p-3 md:p-5 lg:p-20 flex flex-col items-center justify-start lg:flex-row lg:justify-center rounded-[1.25rem] bg-[rgba(255,255,255,0.6)] shadow-[7px_7px_0_rgba(255,110,65,0.55)] transition-opacity opacity-0 duration-500">
                <div className="w-full flex flex-initial justify-between items-center md:px-16 lg:px-0">
                    {/* mobile left arrow */}
                    <div className="block lg:hidden">
                        <Image
                            className="max-w-full h-auto cursor-pointer hover:scale-110"
                            onClick={prevSlide}
                            src={left_arrow}
                            alt="previous"
                            loading="eager"
                            sizes="100vw"
                        />
                    </div>

                    {/* border and image inside */}
                    <div className="my-2 md:my-5 lg:my-0 flex flex-shrink-0 justify-center items-center w-[6.5rem] h-[5.5rem] md:w-[11.9rem] md:h-[9.6rem] lg:w-56 lg:h-[12.5rem] xl:w-[16.51963rem] xl:h-[13.30994rem] rounded-[2.2rem_0] md:rounded-[4rem_0] lg:rounded-[5.5rem_0] xl:rounded-[6.25rem_0] border-2 border-solid border-[#FF6E41] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                        <div className="relative w-12 h-12 md:w-[6.28rem] md:h-[6.28rem] xl:w-[7.5rem] xl:h-[7.5rem]">
                            <Image
                                src={slides[currentIndex].img}
                                alt=""
                                fill
                                loading="eager"
                                sizes="20vw"
                                onLoadingComplete={() => document.getElementById('carousel').classList.remove('opacity-0')}
                            />
                        </div>
                    </div>

                    {/* mobile right arrow */}
                    <div className="block lg:hidden">
                        <Image
                            className="max-w-full h-auto cursor-pointer hover:scale-110"
                            onClick={nextSlide}
                            src={right_arrow}
                            alt="next"
                            loading="eager"
                            sizes="100vw"
                        />
                    </div>

                </div>

                {/* carousel title and text */}
                <div className="flex flex-col flex-auto justify-between items-center lg:items-start lg:ml-[4.5rem] lg:h-[12.5rem] xl:h-[13.30994rem]">
                    <h1 className="text-[#FF6E41] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium lg:leading-[3rem] lg:tracking-[0.03125rem] text-center">{slides[currentIndex].title}</h1>
                    <p className={`text-[#56423E] py-2 md:py-5 lg:py-0 md:px-16 lg:px-0 text-justify text-xs md:text-base lg:text-lg xl:text-xl ${raleway.className}`}>{slides[currentIndex].text}</p>
                </div>
            </div>

        </section>
    )
}

export default Services