import Image from "next/image"
import { Raleway } from "next/font/google"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const raleway = Raleway({
    subsets: ['cyrillic', 'latin'],
    weight: ['400'],
})

const CategoryPage = ({ category, back }) => {
    return (
        <div className="w-full">
            <div className="cursor-pointer w-fit bg-[#EEF1F4] text-[#56423E] rounded-full hover:brightness-75" onClick={back}>
                <ArrowBackIcon />
            </div>
            <h3 className="text-center text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#56423E] mb-5 xl:mb-10">{category.name}</h3>
            <div className="flex flex-row flex-wrap gap-6 lg:gap-12 2xl:gap-16 justify-evenly overflow-y-scroll">
                {category.variants.map(v =>
                    <div key={v.name} className="max-w-[5rem] md:max-w-[9rem] lg:max-w-[13rem]">
                        <div className="relative w-20 h-20 md:w-36 md:h-36 lg:w-52 lg:h-52 rounded-lg">
                            <Image src={v.img} alt={v.name} fill sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 15vw" className="rounded-xl" />
                        </div>
                        <p className={`${raleway.className} text-[0.6rem] md:text-sm lg:text-base text-center text-[#56423E]`}>{v.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryPage