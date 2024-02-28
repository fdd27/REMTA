import Navbar from "./Navbar"
import Image from "next/image"
import hero_img from "../assets/hero-img.png"
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
        <section id="home" className="w-full min-h-screen bg-[#1E1E1E] bg-fill bg-center flex flex-col snap-start snap-always z-50">
            <Navbar color='#ffffff' shadow='drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]' mobile_menu_col='#ffffff' fbIcon={true} />

            {/* Hero container */}
            <div className="w-full flex px-4 md:px-16 xl:px-24 2xl:px-60 flex-auto">

                {/* Left Half */}
                <div className="w-full lg:w-[51%] flex flex-col gap-y-6 md:gap-y-28 lg:gap-y-0 justify-center items-center lg:items-start lg:pr-3">

                    <h1 className="lg:pe-12 text-white text-3xl md:text-4xl xl:text-[2.65rem] font-bold leading-8 md:leading-[3rem] tracking-wider text-center lg:text-start">
                        Мебели по поръчка,<br />изработени специално за теб
                    </h1>

                    <p
                        className={`py-6 lg:py-20 lg:pe-10 xl:pe-20 2xl:pe-40 text-white text-justify text-base md:text-xl ${raleway.className} leading-6 md:leading-[1.875rem] tracking-[0.012em] 
                        md:tracking-wide font-medium`}
                    >
                        В <span className={`${pf.className} font-bold`}>REMTA DESIGN</span> вярваме, че всяка мебел трябва да бъде толкова уникална, колкото и човека, за когото е създадена. Благодарение на дългогодишния ни опит в индустрията безпроблемно създаваме мебели, които съчетават необходимите форма и функция с желания комфорт и стил.
                    </p>

                    {/* Buttons */}
                    <div className="w-full flex flex-col md:flex-row justify-center lg:justify-start items-center">

                        {/* btn to contact */}
                        <Link
                            href='#contact'
                            id='btn_hero'
                            className="mb-6 md:mb-0 md:me-[2.6rem] px-4 py-2 md:px-6 md:py-4 rounded-2xl md:rounded-3xl border-white border-2 border-solid border-opacity-100 bg-transparent 
                            hover:scale-105 hover:bg-[#F30010] transition duration-200 ease-in-out flex justify-center items-center cursor-pointer"
                        >
                            <p className="text-white text-center text-lg md:text-[1.375rem] 2xl:text-2xl font-semibold tracking-normal lg:tracking-wide">Направи заявка</p>
                        </Link>

                        {/* btn to services */}
                        <Link href='#services' className="flex justify-center items-center hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
                            <p className="me-2 text-white text-center text-lg md:text-[1.375rem] 2xl:text-2xl font-semibold leading-[1.875rem] underline-offset-8 hover:underline">Нашите услуги</p>
                        </Link>

                    </div>
                </div>

                {/* Right Half */}
                <div className="w-[49%] hidden lg:flex justify-end items-center">
                    <Image
                        src={hero_img}
                        alt=""
                        priority
                        loading="eager"
                        className="max-w-full h-auto"
                        placeholder="blur"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero