import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlider() {
    
    const images = [
        {image: "https://i.imgur.com/kdBss4k.jpg"},
        {image: "https://i.imgur.com/zco3IfC.jpg"},
        {image: "https://i.imgur.com/fEvChQ6.jpg"},
        {image: "https://i.imgur.com/wydYoLH.jpg"},
        {image: "https://i.imgur.com/zco3IfC.jpg"},
        {image: "https://i.imgur.com/YdaSKlF.jpg"}
    ]

    const [imageIndex, setimageIndex] = useState(0)

    const nextImage = () => {
        setimageIndex(imageIndex == images.length - 1 ? 0 : imageIndex + 1);
    }

    setTimeout(nextImage, 5000)

    return (
        <div className="w-full h-full my-5 grid grid-cols-1 tablet:grid-cols-2">
            <div className="relative flex justify-center items-center">
                <Image src={images[imageIndex].image} alt="Ash Smoked Fishes Hut" title="Ash Smoked Fishes Images" layout='fill' objectFit='cover' />
            </div>
            <div className="flex justify-center items-center">
                <div className="w-4/5 p-2 desktop:p-5 tablet:p-3 flex flex-col justify-center bg-white my-10 rounded-lg border border-gray-200 shadow-md">
                    <h2 className='text-xl tablet:text-4xl font-bold mb-8'>
                        <strong>Ash Smoked Fishes</strong>
                    </h2>
                    <div className='tablet:text-2xl font-bold mb-8'>
                        All our fishes are lightly smoked here on Aldeburgh beach.
                        Traditionally fish is more heavily smoked as a preservative, but our light smoking is sufficient only to enhance the flavour.
                        <Link href="/about" >
                            <p className="text-gray-600 hover:text-red-300 cursor-pointer"> Continue Reading... </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}