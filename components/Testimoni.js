import React from "react"
// import Slider from "react-slick"
import { TestimoniData } from "../constants/data"
import Title from "./Title"
import Image from "next/image"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const Testimoni = () => {

    const { title, subTitle, testimonials } = TestimoniData

    // let settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Title title={title} subTitle={subTitle} mb="mb-12" />
            <div className="container mx-auto flex flex-wrap justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    {testimonials.map((item, i) => (
                        <div key={i} className="p-5 h-full rounded-lg overflow-hidden bg-white shadow-lg mr-5 flex flex-col items-center justify-center">
                            <Image className="rounded-full" src={item.img} alt="sample testi" width={80} height={50} />
                            <span className="text-xl font-semibold mt-2">{item.name}</span>
                            <span className="text-gray-400 text-md">{item.job}</span>
                            <span className="p-5">{item.testi}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimoni
