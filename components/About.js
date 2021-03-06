import Title from "./Title"
import { AboutData } from "../constants/data"
import { useState } from "react"

const About = () => {
    const [size, setSize] = useState(640)
    const { title, subTitle, abouts } = AboutData


    if(typeof window !== "undefined"){
        window.addEventListener("resize", function () {
            const resize = window.screen.width;
            setSize(resize)
        })
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center mt-10 sm:mt-10 lg:mt-2">
            <Title title={title} subTitle={subTitle} mb="mb-10" />
            <div className="flex flex-col justify-center items-center container mx-auto">
                <div className="flex flex-wrap justify-center items-center p-5">
                    {abouts.map((item, i) => (
                        <div>
                            {size <= 640 ? (
                                <div key={i} className="container mx-auto mt-5 flex flex-col-reverse sm:flex-col-reverse lg:flex-row sm:even:flex-col-reverse justify-start items-start lg:even:flex-row-reverse last:mt-10">
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-medium mt-6 text-center">{item.title}</span>
                                        <span className="text-gray-400 tracking-wide mt-5 text-lg">{item.desc}</span>
                                    </div>
                                    <div>{item.svg}</div>
                                </div>
                            ) : (
                                <div key={i} className="container mx-auto mt-5 flex flex-row sm:flex-col-reverse lg:flex-row sm:even:flex-col-reverse justify-start items-start lg:even:flex-row-reverse last:mt-10">
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-medium mt-6">{item.title}</span>
                                        <span className="text-gray-400 tracking-wide mt-5 text-lg">{item.desc}</span>
                                    </div>
                                    <div>{item.svg}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
