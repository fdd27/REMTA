import Image from "next/image"
import mail from '../assets/desktop/footer-mail.svg'
import map from '../assets/desktop/footer-map.svg'
import phone from '../assets/desktop/footer-phone.svg'
import { Inter, Raleway } from "next/font/google"
import Link from "next/link"

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
    return (
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 w-full h-[13.25rem] bg-[rgba(255,116,72,0.87)] px-44">
            <div className="flex justify-between items-center pt-[3.89rem]">
                <div className="flex items-center gap-3 cursor-pointer hover:scale-105">
                    <Image src={mail} alt="email:" width='2.125rem' height='2.125rem' />
                    <p className={`${inter.className} text-white text-[1.375rem] font-medium leading-[1.375rem] tracking-tight`}>remta.design@gmail.com</p>
                </div>
                <Link className="flex items-center gap-3 cursor-pointer hover:scale-105" href='https://www.google.com/maps/place/REMTA/@41.5318079,25.4004038,17z/data=!3m1!4b1!4m6!3m5!1s0x14ad765940e77bfd:0x487cb7830dcf2493!8m2!3d41.5318079!4d25.4029841!16s%2Fg%2F11c6y_p0p1?entry=ttu' rel="noopener noreferrer" target="_blank">
                    <Image src={map} alt="location:" width='2.125rem' height='2.125rem' />
                    <p className={`${inter.className} text-white text-[1.375rem] font-medium leading-[1.375rem] tracking-tight`}>ул. Генерал Ганев 1, 6800 Момчилград</p>
                </Link>
                <div className="flex items-center gap-3 cursor-pointer hover:scale-105">
                    <Image src={phone} alt="tel:" width='2.125rem' height='2.125rem' />
                    <p className={`${inter.className} text-white text-[1.375rem] font-medium leading-[1.375rem] tracking-tight`}>+359 879 339 001</p>
                </div>
            </div>
            <p className={`${rw.className} pt-[4.86rem] text-center text-white text-[1.375rem] font-light italic`}>© 2023 ET Ремта Дизайн. Всички права запазени.</p>
        </div>
    )
}

export default Footer