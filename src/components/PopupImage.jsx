import Image from "next/image"

const PopupImage = () => {
    let spanClick = () => {
        document.getElementById('popup').classList.toggle('visible')
    }

    return (
        <div id="popup" className="hidden w-full h-screen fixed top-0 left-0 z-50 justify-center items-center">
            <span onClick={spanClick} className="absolute top-0 right-8 text-7xl font-extrabold text-white cursor-pointer z-50">&times;</span>
            <Image className="rounded-md w-fit h-fit object-contain md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl max-h-max" id="popupImage" src='' alt="" />
        </div>
    )
}

export default PopupImage