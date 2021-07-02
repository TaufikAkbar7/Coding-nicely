import Title from "./Title"
import { AboutData } from "../constants/data"

const About = () => {

    const { title, subTitle, abouts } = AboutData

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Title title={title} subTitle={subTitle} mb="mb-10" />
            <div className="flex flex-wrap justify-center items-center container mx-auto">
                <div className="flex flex-wrap justify-center items-center p-5 md:ml-4 md:mr-4 sm:ml-1 sm:mr-3">
                    {abouts.map((item, i) => (
                        <div key={i} className="container mx-auto mt-5 flex flex-row justify-start items-start even:flex-row-reverse last:mt-10">
                            <div className="flex flex-col">
                                <span className="text-4xl font-medium mt-6">{item.title}</span>
                                <span className="text-gray-400 tracking-wide mt-5 text-lg">{item.desc}</span>
                            </div>
                            <div>{item.svg}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
