import Image from "next/image"
import mail from '../assets/footermail.png'
import map from '../assets/footermap.png'
import phone from '../assets/footerphone.png'
import { Inter, Raleway } from "next/font/google"
import Link from "next/link"
import { PiCopyFill } from "react-icons/pi";

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['500']
})

const rw = Raleway({
    subsets: ['cyrillic'],
    weight: ['300'],
    style: ['italic']
})

const Footer = () => {

    const showCopyTooltip = (id, text) => {
        copy(text)
        const tooltip = document.getElementById(`copytooltip_${id}`)
        tooltip.style.display = 'flex'
        tooltip.style.opacity = '1'
        setTimeout(closeCopyTooltip, 1000, tooltip)
    }

    const closeCopyTooltip = (tooltip) => {
        if (tooltip.style.display == 'flex') {
            tooltip.style.display = 'none'
            tooltip.style.opacity = '0'
        }
    }

    const copy = (text) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="flex-initial bottom-0 left-0 right-0 w-full bg-[rgba(255,116,72,0.87)] px-6 md:px-16 xl:px-24 2xl:px-44">
            <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center pt-1 lg:pt-8">
                <div id="footerEmail" onClick={() => showCopyTooltip('email', document.getElementById('footerEmailText').innerHTML)} className="relative w-full lg:w-auto flex items-center gap-3 cursor-pointer lg:hover:scale-105">
                    {/* email tooltip */}
                    <div id="copytooltip_email" className={`hidden max-w-fit bg-[#555] text-white justify-center items-center px-4 py-1 rounded-xl absolute left-0 right-0 mx-auto bottom-44 lg:bottom-7 opacity-0 transition-opacity ${inter.className} font-medium`}>
                        <PiCopyFill className="mr-2" />
                        <p>Копирано</p>
                    </div>
                    {/* email icon */}
                    <Image
                        className="max-w-full h-auto"
                        src={mail}
                        alt="email:"
                        sizes="100vw"
                    />
                    {/* email text */}
                    <p id="footerEmailText" className={`${inter.className} w-full text-center text-white text-base lg:text-lg xl:text-xl 2xl:text-[1.375rem] font-medium xl:leading-[1.375rem] tracking-tight`}>remta.design@gmail.com</p>
                </div>
                <Link className="w-full lg:w-auto flex items-center gap-3 cursor-pointer lg:hover:scale-105" href='https://www.google.com/maps/place/REMTA/@41.5318079,25.4004038,17z/data=!3m1!4b1!4m6!3m5!1s0x14ad765940e77bfd:0x487cb7830dcf2493!8m2!3d41.5318079!4d25.4029841!16s%2Fg%2F11c6y_p0p1?entry=ttu' rel="noopener noreferrer" target="_blank">
                    {/* location icon */}
                    <Image
                        className="max-w-full h-auto"
                        src={map}
                        alt="location:"
                        sizes="100vw"
                    />
                    {/* location text */}
                    <p className={`${inter.className} w-full text-center text-white text-base lg:text-lg xl:text-xl 2xl:text-[1.375rem] font-medium leading-[1.375rem] tracking-tight`}>ул. Генерал Ганев 1, 6800 Момчилград</p>
                </Link>
                <div id="footerTel" onClick={() => showCopyTooltip('tel', document.getElementById('footerTelText').innerHTML)} className="w-full lg:w-auto flex items-center gap-3 cursor-pointer lg:hover:scale-105 relative">
                    {/* tel tooltip */}
                    <div id="copytooltip_tel" className={`hidden max-w-fit bg-[#555] text-white justify-center items-center px-4 py-1 rounded-xl absolute left-0 right-0 mx-auto bottom-44 lg:bottom-7 opacity-0 transition-opacity ${inter.className} font-medium`}>
                        <PiCopyFill className="mr-2" />
                        <p>Копирано</p>
                    </div>
                    {/* tel icon */}
                    <Image
                        className="max-w-full h-auto"
                        src={phone}
                        alt="tel:"
                        sizes="100vw"
                    />
                    {/* tel text */}
                    <p id="footerTelText" className={`${inter.className} w-full text-center text-white text-base lg:text-lg xl:text-xl 2xl:text-[1.375rem] font-medium leading-[1.375rem] tracking-tight`}>+359 879 339 001</p>
                </div>
            </div>
            <p className={`${rw.className} pb-2 pt-4 lg:pb-3 lg:pt-5 text-center text-white text-base lg:text-lg xl:text-xl 2xl:text-[1.375rem] font-light italic`}>© 2023 ET Ремта Дизайн. Всички права запазени.</p>
        </div>
    )
}

export default Footer