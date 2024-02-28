'use client'

import { useState } from "react"

import Image from "next/image"
import { Inter } from "next/font/google"

import Footer from './Footer'

import { TextField } from "@mui/material"
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar';

import emailjs from "@emailjs/browser"

import img from "../assets/contact-img.png"

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['400'],
})

const Contact = () => {
    const [open, setOpen] = useState(false)

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
            setOpen(true)
        })

        name.value = ''
        surname.value = ''
        email.value = ''
        tel.value = ''
        about.value = ''
        message.value = ''
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return
        setOpen(false)
    }

    return (
        <section id="contact" className="w-full min-h-screen flex flex-col snap-start snap-always">
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>Заявката е изпратена!</Alert>
            </Snackbar>

            <div className="flex w-full flex-auto px-4 md:px-16 xl:px-24 2xl:px-60">
                {/* left side */}
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

                {/* right side */}
                <div className="flex flex-col w-full lg:w-1/2 items-center justify-center">
                    <h1 className="mb-6 md:mb-12 text-[#56423E] text-center text-3xl md:text-4xl lg:text-3xl xl:text-[2rem] 2xl:text-4xl font-semibold leading-[3rem]">
                        Изпрати запитване
                    </h1>

                    <form onSubmit={e => { sendEmail(e) }} autoComplete="off" className="">
                        <div className="flex flex-row justify-center mb-4 md:mb-8 lg:mb-[2.25rem] gap-x-4 lg:gap-x-8">
                            <TextField id="name" label="Име" name="name" variant="outlined" required={true} InputProps={{ className: 'text-[#56423E]' }} InputLabelProps={{ className: 'text-[#56423E]' }}
                                className={`${inter.className} shadow-[4px_4px_0_rgba(255,49,49,0.55)] rounded-[0.3rem] bg-white`}
                            />

                            <TextField id="surname" label="Фамилия" name="surname" variant="outlined" required={true} InputProps={{ className: 'text-[#56423E]' }} InputLabelProps={{ className: 'text-[#56423E]' }}
                                className={`${inter.className} shadow-[4px_4px_0_rgba(255,49,49,0.55)] rounded-[0.3rem] bg-white`}
                            />
                        </div>
                        <div className="flex flex-row justify-center mb-4 md:mb-8 lg:mb-[2.25rem] gap-x-4 lg:gap-x-8">
                            <TextField id="email" label="Имейл" name="email" variant="outlined" required={true} InputProps={{ className: 'text-[#56423E]' }} InputLabelProps={{ className: 'text-[#56423E]' }}
                                className={`${inter.className} shadow-[4px_4px_0_rgba(255,49,49,0.55)] rounded-[0.3rem] bg-white`}
                            />

                            <TextField id="tel" label="Телефон" name="tel" variant="outlined" required={true} InputProps={{ className: 'text-[#56423E]' }} InputLabelProps={{ className: 'text-[#56423E]' }}
                                className={`${inter.className} shadow-[4px_4px_0_rgba(255,49,49,0.55)] rounded-[0.3rem] bg-white`}
                            />
                        </div>
                        <div className="flex justify-center mb-4 md:mb-8 lg:mb-[2.25rem]">
                            <TextField id="about" label="Относно" name="about" variant="outlined" required={true} InputProps={{ className: 'text-[#56423E]' }} InputLabelProps={{ className: 'text-[#56423E]' }}
                                className={`${inter.className} shadow-[4px_4px_0_rgba(255,49,49,0.55)] rounded-[0.3rem] bg-white`}
                            />
                        </div>
                        <div className="mb-4 md:mb-8 lg:mb-[2.25rem]">
                            <TextField id="message" label="Съобщение" name="message" variant="outlined" InputProps={{ className: 'text-[#56423E]' }} InputLabelProps={{ className: 'text-[#56423E]' }}
                                className={`${inter.className} shadow-[4px_4px_0_rgba(255,49,49,0.55)] rounded-[0.3rem] bg-white`} multiline rows={6} fullWidth
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-8 py-2 lg:px-10 md:py-4 rounded-2xl md:rounded-3xl border-[#56423E] border-2 border-solid border-opacity-100 bg-transparent hover:bg-[#F30010] text-[#56423E] 
                            hover:text-white transition duration-200 ease-in-out flex justify-center items-center shadow-[5px_5px_0_rgba(255,49,49,0.55)] cursor-pointer hover:scale-105 mx-auto"
                        >
                            <p className="text-center text-lg md:text-[1.375rem] 2xl:text-2xl font-semibold ">Изпрати</p>
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Contact