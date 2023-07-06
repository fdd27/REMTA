import Navbar from "./Navbar"
import Image from "next/image"
import hero_img from "../assets/desktop/hero-img.svg"
import hero_arrow from '../assets/desktop/hero-arrow.svg'
import { Raleway, Playfair_Display } from "next/font/google"
import Link from "next/link"

const raleway = Raleway({
    subsets: ['latin', 'cyrillic'],
    weight: ['500'],
})

const pf = Playfair_Display({
    subsets: ['latin', 'cyrillic'],
    weight: ['700'],
})

const Hero = () => {
    return (
        <div className="w-full h-screen bg-[url('../assets/desktop/hero-bg.svg')] bg-cover bg-center">
            <Navbar />

            {/* Hero container */}
            <div className="w-full px-6 lg:px-44 pt-24 lg:pt-44 flex">

                {/* Left Half */}
                <div className="w-full lg:w-[51%] lg:py-14 flex flex-col lg:justify-around lg:items-start">

                    <h1 className="text-white text-3xl lg:text-5xl font-bold leading-[3rem] tracking-wider drop-shadow-[4px_4px_0_rgba(0,0,0,0.25)] text-center lg:text-start">
                        Мебели по поръчка<br />изработени специално за теб
                    </h1>

                    <p className={`py-10 lg:py-0 lg:pe-40 text-white text-justify text-lg lg:text-[1.375rem] ${raleway.className} leading-normal lg:leading-[1.875rem] tracking-normal lg:tracking-wide font-medium`}>
                        В <span className={`${pf.className} font-bold`}>REMTA DESIGN</span> вярваме, че всяка мебел трябва да бъде толкова уникална, колкото и човека, за когото е създадена. Благодарение на дългогодишния ни опит в индустрията безпроблемно създаваме мебели, които съчетават необходимите форма и функция с желания комфорт и стил.
                    </p>

                    <div className="flex justify-start">
                        <Link href='#contact' className="w-40 lg:w-[14.375rem] h-16 lg:h-[4.5rem] me-[2.6rem] px-[0.5625rem] py-6 rounded-[24px] bg-[#FF3131] drop-shadow-[5px_5px_0_rgba(0,0,0,0.25)] flex justify-center items-center hover:scale-105 cursor-pointer">
                            <p className="text-white text-center text-base lg:text-[1.5rem] lg:leading-[0.9375rem] font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">Направи заявка</p>
                        </Link>
                        <Link href='#services' className="flex justify-center items-center hover:scale-105 cursor-pointer">
                            <p className="me-2 text-white text-center text-base lg:text-2xl font-semibold lg:leading-[1.875rem] lg:tracking-tight underline">Нашите услуги</p>
                            <Image 
                                src={hero_arrow}
                                alt=""
                                width='1.875rem'
                                height='1.875rem'
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Half */}
                <div className="w-[49%] hidden lg:flex justify-start">
                    <Image
                        src={hero_img}
                        alt=""
                        width='38.3125rem'
                        height='47.9375rem'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero