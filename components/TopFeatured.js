import Image from "next/image"
import { CardData } from "../constants/data"
import Title from "./Title"

const TopFeatured = () => {

    const { title, cards, subTitle } = CardData

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Title title={title} subTitle={subTitle}/>
            <div className="flex flex-wrap justify-center items-center container mx-auto mt-5">
                <div className="flex flex-wrap mt-5 p-5 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3">
                    {cards.map(card => (
                        <div className="h-full rounded-lg overflow-hidden bg-white shadow-lg mr-5">
                            <div className="bg-gray-400 p-5">
                                <Image src={card.img} alt="pic vue" width={210} height={150} />
                            </div>
                            <div className="p-5 flex flex-col">
                                <span className="font-medium text-lg">{card.name}</span>
                                <span>{card.modul} Modul</span>
                                <p className="text-blue-500">{card.harga}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopFeatured
