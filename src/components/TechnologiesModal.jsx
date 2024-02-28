import { useEffect, useState } from "react"

import { Modal, Box } from "@mui/material"
import { Raleway } from "next/font/google"
import Image from "next/image"

import technologies from "@/data/technologies"
import CategoryPage from "./CategoryPage"

const raleway = Raleway({
    subsets: ['cyrillic', 'latin'],
    weight: ['400'],
})

const TechnologiesModal = ({ index, open, handleClose, selected, setSelected }) => {
    const [width, setWidth] = useState('')

    const handleBack = () => {
        setSelected(null)
    }

    useEffect(() => {
        switch (index) {
            case 0:
                setWidth('lg:w-1/4')
                break
            case 2:
                setWidth('lg:w-1/5')
                break
            case 4:
                setWidth('lg:w-1/4')
                break
            default:
                break
        }
    }, [index])

    return (
        <Modal open={open} onClose={handleClose} className="flex justify-center items-center w-1/">
            <Box className='w-3/4 h-3/4 bg-[#EEF1F4] flex flex-col gap-y-10 lg:flex-row lg:justify-evenly p-6 2xl:px-20 rounded-xl overflow-y-scroll'>
                {!(selected === null)
                    ? <CategoryPage category={technologies[index].categories[selected]} back={handleBack} />
                    : technologies[index].categories.map(category => (
                        <div key={category.name} className={`w-full ${width}`}>
                            <div
                                className={`relative w-full h-44 md:h-96 lg:h-[25%] xl:h-[35%] 2xl:h-[40%] mb-3 cursor-pointer border border-[#56423E] rounded-xl hover:brightness-75 
                                    transition duration-300`}
                            >
                                <Image src={category.img} alt="" fill onClick={() => setSelected(category.index)} className="rounded-xl" placeholder="blur" />
                            </div>
                            <p className={`${raleway.className} text-[0.6rem] md:text-sm xl:text-base text-center text-[#56423E]`}>{category.description}</p>
                        </div>
                    ))
                }
            </Box>
        </Modal>
    )
}

export default TechnologiesModal