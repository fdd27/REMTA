'use client'
import { useEffect, useState } from "react"

const ButtonToTop = () => {
    const [buttonToTop, setButtonToTop] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setButtonToTop(true)
            } else {
                setButtonToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {buttonToTop && (
                <button className="fixed bottom-12 right-12 h-12 w-12 text-5xl" onClick={scrollUp}>^</button>
            )}
        </div>
    )
}

export default ButtonToTop