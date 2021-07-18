import Image from "next/image"
import { CardData } from "../constants/data"
import Title from "./Title"

const TopFeatured = () => {

    const { title, cards, subTitle } = CardData

    return (
        <div className="min-h-screen py-10 flex flex-col justify-center items-center">
            <Title title={title} subTitle={subTitle} mb="mb-10" />
            <div className="flex flex-wrap justify-center items-center container mx-auto">
                {cards.map((card, i) => (
                    <div className="mt-5 p-5" key={i}>
                        <div className="h-full rounded-lg overflow-hidden bg-white shadow-lg mr-5 cursor-pointer">
                            <div className="bg-gray-400 p-5">
                                <Image src={card.img} alt="pic vue" width={210} height={150} />
                            </div>
                            <div className="p-5 flex flex-col">
                                <span className="font-medium text-lg">{card.name}</span>
                                <span className="text-gray-400">{card.modul} Modul</span>
                                <p className="text-blue-500">{card.harga}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopFeatured
