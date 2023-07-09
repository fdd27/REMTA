import Image from "next/image"
import img from "../assets/desktop/contact-img.svg"
import { Inter } from "next/font/google"
import Footer from './Footer'

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['400'],
})

const Contact = () => {
    return (
        <div id="contact" className="w-full h-screen pt-6 px-6 md:px-16 xl:px-24 2xl:px-44 relative">
            <div className="flex w-full">

                {/* left side image */}
                <div className="hidden lg:flex w-1/2 justify-center items-center">
                    <div className="relative w-[31rem] h-[45rem]">
                        <Image src={img} alt="" fill />
                    </div>
                </div>

                {/* right side form */}
                <form action="" className="flex flex-col w-full lg:w-1/2 items-center justify-start lg:justify-center h-auto">
                    <h1 className="mb-12 text-[#56423E] text-center text-3xl md:text-4xl lg:text-3xl xl:text-[2rem] 2xl:text-[2.1875rem] font-semibold leading-[3rem] tracking-[-0.04375rem]">Изпрати запитване</h1>
                    <div className="flex">
                        <input className="mb-4 lg:mb-[2.25rem] mr-2 lg:mr-[1.19rem] w-36 h-8 xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(0,0,0,0.25)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4" type="text" name="name" id="name" required='required' />
                        {/* <label className="text-[#56423E] text-base tracking-[-0.02rem]" htmlFor="name">Име</label> */}
                        <input className="lg:mb-[2.25rem] w-36 h-8 xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(0,0,0,0.25)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4" type="text" name="surname" id="surname" required='required' />
                        {/* <label className="text-[#56423E] text-base tracking-[-0.02rem]" htmlFor="surname">Фамилия</label> */}
                    </div>
                    <div className="flex">
                        <input className="mb-4 lg:mb-[2.25rem] mr-2 lg:mr-[1.19rem] w-36 h-8 xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(0,0,0,0.25)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4" type="text" name="email" id="email" required='required' />
                        {/* <label className="text-[#56423E] text-base tracking-[-0.02rem]" htmlFor="email">Имейл</label> */}
                        <input className="lg:mb-[2.25rem] w-36 h-8 xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(0,0,0,0.25)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4" type="text" name="tel" id="tel" required='required' />
                        {/* <label className="text-[#56423E] text-base tracking-[-0.02rem]" htmlFor="tel">Телефон</label> */}
                    </div>
                    <input className="mb-4 lg:mb-[2.25rem] w-36 h-8 xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(0,0,0,0.25)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4" type="text" name="about" id="about" required='required' />
                    {/* <label className="text-[#56423E] text-base tracking-[-0.02rem]" htmlFor="about">Относно</label> */}
                    <textarea className="mb-4 lg:mb-[2.44rem] w-72 xl:w-[36.6875rem] shadow-[4px_4px_0_rgba(0,0,0,0.25)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 pr-4 py-2" name="msg" id="msg" cols="30" rows="6"></textarea>

                    <div className="px-6 py-2 lg:px-16 lg:py-6 rounded-2xl lg:rounded-3xl bg-[#FF3131]  flex justify-center items-center shadow-[5px_5px_0_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105">
                        <p className="text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-lg lg:text-xl 2xl:text-2xl font-semibold">Изпрати</p>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact