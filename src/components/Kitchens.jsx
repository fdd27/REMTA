import Image from "next/image"
import { Raleway } from "next/font/google"

import kitchen1 from '../assets/kitchen1.png'
import kitchen2 from '../assets/kitchen2.png'
import kitchen3 from '../assets/kitchen3.png'
import kitchen4 from '../assets/kitchen4.png'

const raleway = Raleway({
    subsets: ['cyrillic'],
    weight: ['400'],
})

const Kitchens = () => {
    return (
        <div className="w-full px-[17.5rem]">
            <h1 className="text-[#56423E] text-center text-2xl md:text-4xl xl:text-[2.5rem] 2xl:text-[2.8125rem] font-semibold leading-[3rem] tracking-wider my-24">
                Кухни по поръчка
            </h1>

            {/* Плотове */}
            <div className="flex flex-wrap justify-between gap-y-20">
                <div className="border-2 border-solid border-[#56423E] rounded-[1.25rem] min-h-[26.9375rem] max-w-[39.3125rem] shadow-[4px_5px_1px_rgba(255,110,65,0.69)]">
                    <h2 className="text-[#56423E] text-center text-[2.1875rem] font-semibold tracking-wider my-9">
                        Плотове
                    </h2>
                    <p className={`${raleway.className} text-[#56423E] text-[1.375rem] font-normal leading-[1.875rem] tracking-[0.0275rem] mx-5`}>
                        Кухненските плотове несъмнено са изправени пред най-взискателните изпитания - високи температури, удари, агресивни почистващи препарати и допир на топли и студени
                        съдове за готвене, тези елементи изискват изключителна устойчивост. Дизайнът на нашите плотове съчетава здравина и издръжливост, което ги прави готови за всяко
                        кулинарно предизвикателство.
                    </p>
                </div>

                {/* Чекмеджета */}
                <div className="border-2 border-solid border-[#56423E] rounded-[1.25rem] min-h-[26.9375rem] max-w-[39.3125rem] shadow-[4px_5px_1px_rgba(255,110,65,0.69)]">
                    <h2 className="text-[#56423E] text-center text-[2.1875rem] font-semibold tracking-wider my-9">
                        Чекмеджета
                    </h2>
                    <p className={`${raleway.className} text-[#56423E] text-[1.375rem] font-normal leading-[1.875rem] tracking-[0.0275rem] mx-5`}>
                        Чекмеджетата се справят с ежедневна употреба, съхраняват тежки предмети и трябва да могат да издържат теста на времето. Дизайнът на нашите чекмеджета приоритизира
                        издръжливостта и дълготрайната функционалност, като гарантира, че нуждите ви за съхранение са задоволени без проблем.
                    </p>
                </div>

                {/* Дръжки и врати */}
                <div className="border-2 border-solid border-[#56423E] rounded-[1.25rem] min-h-[26.9375rem] max-w-[39.3125rem] shadow-[4px_5px_1px_rgba(255,110,65,0.69)]">
                    <h2 className="text-[#56423E] text-center text-[2.1875rem] font-semibold tracking-wider my-9">
                        Дръжки и врати
                    </h2>
                    <p className={`${raleway.className} text-[#56423E] text-[1.375rem] font-normal leading-[1.875rem] tracking-[0.0275rem] mx-5`}>
                        В сферата на кухненския дизайн малките детайли са тези, които наистина карат пространството да блести. От фината елегантност на дръжките до гладката
                        функционалност на вратичките, тези елементи капсулират както форма, така и функция, добавяйки нотка изтънченост към всеки кулинарен кът.
                    </p>
                </div>

                {/* Електроуреди */}
                <div className="border-2 border-solid border-[#56423E] rounded-[1.25rem] min-h-[26.9375rem] max-w-[39.3125rem] shadow-[4px_5px_1px_rgba(255,110,65,0.69)]">
                    <h2 className="text-[#56423E] text-center text-[2.1875rem] font-semibold tracking-wider my-9">
                        Електроуреди
                    </h2>
                    <p className={`${raleway.className} text-[#56423E] text-[1.375rem] font-normal leading-[1.875rem] tracking-[0.0275rem] mx-5`}>
                        Ние проучваме и внимателно избираме модерни електрически уреди за вграждане в нашите кухни, включително фурни, котлони, микровълнови печки, 
                        съдомиялни машини, перални машини, роботизирани устройства и много други.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Kitchens