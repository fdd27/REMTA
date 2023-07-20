'use client'

import Image from "next/image"
import img from "../assets/contactimg.png"
import { Inter } from "next/font/google"
import Footer from './Footer'
import emailjs from "@emailjs/browser"
import { useRouter } from "next/navigation"

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['400'],
})

const Contact = () => {
    const router = useRouter()

    const sendEmail = (e) => {
        e.preventDefault()
        let name = document.getElementById("name")
        let surname = document.getElementById('surname')
        let email = document.getElementById('email')
        let tel = document.getElementById('tel')
        let about = document.getElementById('about')
        let message = document.getElementById('message')

        let params = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            tel: tel.value,
            about: about.value,
            message: message.value
        }

        emailjs.send('service_d13x09j', 'template_0bmzw3b', params, 'jez6L6mf60f2W1hOW').then(() => {
            alert("Заявката е изпратена!")
            router.push('/#hero')
        })

        name.value = ''
        surname.value = ''
        email.value = ''
        tel.value = ''
        about.value = ''
        message.value = ''

        name.classList.add('unfilled')
        surname.classList.add('unfilled')
        email.classList.add('firstFill')
        tel.classList.add('unfilled')
        about.classList.add('unfilled')
    }

    const inputKeyUp = (e) => {
        if (e.currentTarget.id == 'email') {
            if (e.currentTarget.value != '') {
                e.currentTarget.classList.add('filled')
                if (e.currentTarget.classList.contains('firstFill')) {
                    e.currentTarget.classList.remove('firstFill')
                }
            }
            else if (e.currentTarget.value == '') {
                e.currentTarget.classList.remove('filled')
            }
        }
        else if (e.currentTarget.value != '') {
            e.currentTarget.classList.remove('unfilled')
        }
    }

    return (
        <section id="contact" className="w-full h-screen flex flex-col snap-start snap-always">
            <div className="flex w-full flex-auto px-6 md:px-16 xl:px-24 2xl:px-44">

                {/* left side image */}
                <div className="hidden lg:flex w-1/2 justify-center items-center">
                    <div className="relative w-[31rem] h-[45rem]">
                        <Image 
                            src={img} 
                            alt="" 
                            fill 
                            loading="eager" 
                            sizes="(max-width: 1024px) 0vw, 50vw"
                        />
                    </div>
                </div>

                {/* right side form */}
                <form onSubmit={e => { sendEmail(e) }} className="flex flex-col w-full lg:w-1/2 items-center justify-center">
                    <h1 className="mb-6 md:mb-12 text-[#56423E] text-center text-3xl md:text-4xl lg:text-3xl xl:text-[2rem] 2xl:text-[2.1875rem] font-semibold leading-[3rem] tracking-[-0.04375rem]">Изпрати запитване</h1>
                    <div className="flex">
                        <div className="input-container">
                            <input id="name" type='text' name='name' placeholder="Име" onInvalid={e => e.target.setCustomValidity('')} onInput={e => e.target.setCustomValidity('')} onKeyUp={e => { inputKeyUp(e) }} className={`input unfilled mb-4 md:mb-8 lg:mb-[2.25rem] mr-2 md:mr-8 lg:mr-[1.19rem] w-36 h-8 md:w-64 md:h-10 lg:w-52 xl:w-64 2xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(255,110,65,0.55)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 placeholder:text-[#56423ea8] placeholder:${inter.className}`} required='required' />
                        </div>
                        <div className="input-container">
                            <input id="surname" type='text' name='surname' placeholder="Фамилия" onInvalid={e => e.target.setCustomValidity('')} onInput={e => e.target.setCustomValidity('')} onKeyUp={e => { inputKeyUp(e) }} className={`input unfilled lg:mb-[2.25rem] w-36 h-8 md:w-64 md:h-10 lg:w-52 xl:w-64 2xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(255,110,65,0.55)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 placeholder:text-[#56423ea8] placeholder:${inter.className}`} required='required' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="input-container">
                            <input id="email" type='email' name='email' placeholder="Имейл" onInvalid={e => e.target.setCustomValidity('')} onInput={e => e.target.setCustomValidity('')} onKeyUp={e => { inputKeyUp(e) }} className={`firstFill filled mb-4 md:mb-8 lg:mb-[2.25rem] mr-2 md:mr-8 lg:mr-[1.19rem] w-36 h-8 md:w-64 md:h-10 lg:w-52 xl:w-64 2xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(255,110,65,0.55)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 placeholder:text-[#56423ea8] placeholder:${inter.className}`} required='required' />
                        </div>
                        <div className="input-container">
                            <input id="tel" type='tel' name='tel' placeholder="Телефон" onInvalid={e => e.target.setCustomValidity('')} onInput={e => e.target.setCustomValidity('')} onKeyUp={e => { inputKeyUp(e) }} className={`input unfilled lg:mb-[2.25rem] w-36 h-8 md:w-64 md:h-10 lg:w-52 xl:w-64 2xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(255,110,65,0.55)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 placeholder:text-[#56423ea8] placeholder:${inter.className}`} required='required' />
                        </div>
                    </div>
                    <div className="input-container">
                        <input id="about" type='text' name='about' placeholder="Относно" onInvalid={e => e.target.setCustomValidity('')} onInput={e => e.target.setCustomValidity('')} onKeyUp={e => { inputKeyUp(e) }} className={`input unfilled mb-4 md:mb-8 lg:mb-[2.25rem] w-36 h-8 md:w-64 md:h-10 lg:w-52 xl:w-64 2xl:w-[17.75rem] xl:h-[2.9375rem] shadow-[4px_4px_0_rgba(255,110,65,0.55)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 placeholder:text-[#56423ea8] placeholder:${inter.className}`} required='required' />
                    </div>
                    <textarea id="message" name='message' placeholder="Съобщение" className={`resize-none mb-4 md:mb-8 lg:mb-[2.44rem] w-72 md:w-[34rem] lg:w-[27rem] xl:w-[33rem] 2xl:w-[36.6875rem] shadow-[4px_4px_0_rgba(255,110,65,0.55)] border border-solid border-[#56423E] rounded-[0.375rem] outline-none text-[#56423E] pl-4 pr-4 py-2 placeholder:text-[#56423ea8] placeholder:${inter.className}`} cols="30" rows="6"></textarea>

                    <button type="submit" className="px-8 py-2 lg:px-10 md:py-4 rounded-2xl md:rounded-3xl bg-[#FF3131] flex justify-center items-center shadow-[5px_5px_0_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105">
                        <p className="text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-lg lg:text-xl 2xl:text-2xl font-semibold ">Изпрати</p>
                    </button>
                </form>
            </div>

            <Footer />
        </section>
    )
}

export default Contact