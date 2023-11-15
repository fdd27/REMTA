import { Raleway } from "next/font/google"
import Image from "next/image"

import services_img_1 from "../assets/srvimg1.png"
import services_img_2 from "../assets/srvimg2.png"
import services_img_3 from "../assets/srvimg3.png"
import services_img_4 from "../assets/srvimg4.png"
import services_img_5 from "../assets/srvimg5.png"

const raleway = Raleway({
    subsets: ['cyrillic'],
    weight: ['400', '500'],
})

const Services = () => {
    const services = [
        {
            img: services_img_1,
            title: 'Консултация',
            text: 'Започваме с разбиране на Вашата визия и изисквания. Нашият екип ще работи в тясно сътрудничество с Вас, за да обсъдим Вашите идеи, стилови предпочитания, размери и всякакви други специфични подробности.'
        },
        {
            img: services_img_2,
            title: 'Избор на материали и цветове',
            text: 'По време на този етап ще имате възможност да избирате от широка гама висококачествени материали. Нашият екип ще Ви насочи при избора на материали, които най-добре отговарят на Вашите изисквания за дизайн и издръжливост.'
        },
        {
            img: services_img_3,
            title: 'Конструкция и производство',
            text: 'След като дизайнът, цветовете и материалите са финализирани започваме производствения процес. Всяка мебел е изработена в нашия цех, който съчетава традиционни техники с модерни технологии. '
        },
        {
            img: services_img_4,
            title: 'Гарантиране на качеството',
            text: 'Преди Вашите мебели да напуснат нашия цех те преминават през строг процес на контрол на качеството, за да гарантираме. че отговарят на нашите стандарти.'
        },
        {
            img: services_img_5,
            title: 'Доставка и монтаж',
            text: 'Организираме удобно време за доставка, което отговаря на Вашия график. Екипът ни за доставка гарантира, че Вашите мебели пристигат безопасно и са експертно монтирани на желаното от Вас място.'
        },
    ]

    return (
        <section id="services" className="flex flex-col w-full px-4 md:px-16 xl:px-24 2xl:px-72 snap-start snap-always">
            <h1 className="text-[#56423E] text-center text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider my-8 lg:my-20">
                Как работи всичко
            </h1>

            {/* removed from p > md:mt-7 max-w-[77.875rem] mx-auto 2xl:text-[1.375rem] */}
            <p className={`${raleway.className} font-normal text-[#56423E] text-center text-base md:text-xl 2xl:text-[1.375rem] leading-4 lg:leading-8 tracking-wide mb-8 lg:mb-20`}>
                Държим клиентите ни да участват във всяка стъпка от процеса, за да сме сигурни, че тяхната визия е реализирана във всеки аспект на дизайна. От избора на материалите до размерите и характеристиките, ние работим в тясно сътрудничество с нашите клиенти, за да създадем обзавеждане, което идеално пасва на нуждите и предпочитанията им.
            </p>

            {/* Container */}
            <div className="flex flex-col xl:flex-row xl:flex-wrap justify-between gap-y-6 xl:gap-y-10">
                {/* Service 1 */}
                <div className="w-full xl:w-[49%] flex flex-row items-center p-6 bg-[rgba(255,255,255,0.6)] rounded-[1.25rem] shadow-[7px_7px_0_rgba(255,49,49,0.55)]">
                    {/* border and image */}
                    <div
                        className="flex flex-shrink-0 justify-center items-center mr-6 w-24 h-24 md:w-48 md:h-48 xl:w-48 xl:h-48 rounded-[2.2rem_0] md:rounded-[4rem_0] lg:rounded-[5.5rem_0] 
                        xl:rounded-[5rem_0] border-2 border-solid border-[#FF3131] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                    >
                        <div
                            className="relative w-12 h-12 md:w-24 md:h-24 xl:w-[7.5rem] xl:h-[7.5rem]"
                        >
                            <Image
                                src={services[0].img}
                                alt="Консултация"
                                fill
                                sizes="20vw"
                            />
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-auto justify-start items-start h-full">
                        <h1
                            className="w-full mb-2 xl:mb-4 text-start text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium leading-5 sm:leading-[3rem] xl:leading-8
                            lg:tracking-[0.03125rem]"
                        >
                            {services[0].title}
                        </h1>
                        <p className={`${raleway.className} text-[#56423E] text-left text-xs md:text-base lg:text-lg xl:text-base font-normal`}>{services[0].text}</p>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="w-full xl:w-[49%] flex flex-row items-center p-6 bg-[rgba(255,255,255,0.6)] rounded-[1.25rem] shadow-[7px_7px_0_rgba(255,49,49,0.55)]">
                    {/* border and image */}
                    <div
                        className="flex flex-shrink-0 justify-center items-center mr-6 w-24 h-24 md:w-48 md:h-48 xl:w-48 xl:h-48 rounded-[2.2rem_0] md:rounded-[4rem_0] lg:rounded-[5.5rem_0] 
                        xl:rounded-[5rem_0] border-2 border-solid border-[#FF3131] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                    >
                        <div className="relative w-12 h-12 md:w-24 md:h-24 xl:w-[7.5rem] xl:h-[7.5rem]">
                            <Image
                                src={services[1].img}
                                alt="Консултация"
                                fill
                                sizes="20vw"
                            />
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-auto justify-start items-start h-full">
                        <h1
                            className="w-full text-start mb-2 xl:mb-4 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium leading-5 sm:leading-[3rem] xl:leading-8 
                            lg:tracking-[0.03125rem]"
                        >
                            {services[1].title}
                        </h1>
                        <p className={`${raleway.className} text-[#56423E] text-left text-xs md:text-base lg:text-lg xl:text-base font-normal`}>{services[1].text}</p>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="w-full xl:w-[49%] flex flex-row items-center p-6 bg-[rgba(255,255,255,0.6)] rounded-[1.25rem] shadow-[7px_7px_0_rgba(255,49,49,0.55)]">
                    {/* border and image */}
                    <div
                        className="flex flex-shrink-0 justify-center items-center mr-6 w-24 h-24 md:w-48 md:h-48 xl:w-48 xl:h-48 rounded-[2.2rem_0] md:rounded-[4rem_0] lg:rounded-[5.5rem_0] 
                        xl:rounded-[5rem_0] border-2 border-solid border-[#FF3131] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                    >
                        <div className="relative w-12 h-12 md:w-24 md:h-24 xl:w-[7.5rem] xl:h-[7.5rem]">
                            <Image
                                src={services[2].img}
                                alt="Консултация"
                                fill
                                sizes="20vw"
                            />
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-auto justify-start items-start h-full">
                        <h1
                            className="w-full text-start mb-2 xl:mb-4 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium leading-5 sm:leading-[3rem] xl:leading-8
                            lg:tracking-[0.03125rem]"
                        >
                            {services[2].title}
                        </h1>
                        <p className={`${raleway.className} text-[#56423E] text-left text-xs md:text-base lg:text-lg xl:text-base font-normal`}>{services[2].text}</p>
                    </div>
                </div>

                {/* Service 4 */}
                <div className="w-full xl:w-[49%] flex flex-row items-center p-6 bg-[rgba(255,255,255,0.6)] rounded-[1.25rem] shadow-[7px_7px_0_rgba(255,49,49,0.55)]">
                    {/* border and image */}
                    <div
                        className="flex flex-shrink-0 justify-center items-center mr-6 w-24 h-24 md:w-48 md:h-48 xl:w-48 xl:h-48 rounded-[2.2rem_0] md:rounded-[4rem_0] lg:rounded-[5.5rem_0] 
                        xl:rounded-[5rem_0] border-2 border-solid border-[#FF3131] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                    >
                        <div className="relative w-12 h-12 md:w-24 md:h-24 xl:w-[7.5rem] xl:h-[7.5rem]">
                            <Image
                                src={services[3].img}
                                alt="Консултация"
                                fill
                                sizes="20vw"
                            />
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-auto justify-start items-start h-full">
                        <h1
                            className="w-full text-start mb-2 xl:mb-4 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium leading-5 sm:leading-[3rem] xl:leading-8
                            lg:tracking-[0.03125rem]"
                        >
                            {services[3].title}
                        </h1>
                        <p className={`${raleway.className} text-[#56423E] text-left text-xs md:text-base lg:text-lg xl:text-base font-normal`}>{services[3].text}</p>
                    </div>
                </div>

                {/* Service 5 */}
                <div className="w-full xl:w-[49%] mx-auto flex flex-row items-center p-6 bg-[rgba(255,255,255,0.6)] rounded-[1.25rem] shadow-[7px_7px_0_rgba(255,49,49,0.55)]">
                    {/* border and image */}
                    <div
                        className="flex flex-shrink-0 justify-center items-center mr-6 w-24 h-24 md:w-48 md:h-48 xl:w-48 xl:h-48 rounded-[2.2rem_0] md:rounded-[4rem_0] lg:rounded-[5.5rem_0] 
                        xl:rounded-[5rem_0] border-2 border-solid border-[#FF3131] bg-white shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                    >
                        <div className="relative w-12 h-12 md:w-24 md:h-24 xl:w-[7.5rem] xl:h-[7.5rem]">
                            <Image
                                src={services[4].img}
                                alt="Консултация"
                                fill
                                sizes="20vw"
                            />
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-auto justify-start items-start h-full">
                        <h1
                            className="w-full text-start mb-2 xl:mb-4 text-[#56423E] text-[1.15rem] md:text-[1.4rem] 2xl:text-[1.5625rem] font-medium leading-5 sm:leading-[3rem] xl:leading-8
                            lg:tracking-[0.03125rem]"
                        >
                            {services[4].title}
                        </h1>
                        <p className={`${raleway.className} text-[#56423E] text-left text-xs md:text-base lg:text-lg xl:text-base font-normal`}>{services[4].text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services