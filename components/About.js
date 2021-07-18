import Title from "./Title"
import { AboutData } from "../constants/data"

const About = () => {

    const { title, subTitle, abouts } = AboutData

    return (
        <div className="min-h-screen flex flex-col justify-center items-center mt-10 sm:mt-10 lg:mt-2 bg-red-500">
            <Title title={title} subTitle={subTitle} mb="mb-10" />
            <div className="flex flex-col justify-center items-center container mx-auto">
                <div className="flex flex-wrap justify-center items-center p-5 bg-blue-400">
                    {abouts.map((item, i) => (
                        <div key={i} className="bg-yellow-400 container mx-auto mt-5 flex flex-row sm:flex-col-reverse lg:flex-row sm:even:flex-col-reverse justify-start items-start lg:even:flex-row-reverse last:mt-10">
                            <div className="flex flex-col bg-indigo-500">
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
