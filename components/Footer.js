import { FooterData } from "../constants/data"

const Footer = () => {

    const { data, data2 } = FooterData

    return (
        <div className="bg-secondary h-56 flex flex-col justify-center items-center sm:h-80 mt-10">
            <div className="container mx-auto flex flex-wrap justify-center items-center">
                {data.map((item, i) => (
                    <div key={i} className="flex flex-col justify-center items-start ml-5 first:mt-5">
                        <span className="uppercase font-semibold tracking-wide text-white">{item.name}</span>
                        {item.value.map((loop, i) => (
                            <span key={i} className="text-gray-400">{loop}</span>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-between px-14 items-center w-3/4 sm:mt-14">
                <span className="text-sm text-gray-400">&copy; 2021 Coding Nicely. All right reserved</span>
                <div className="flex flex-row items-center justify-center">
                    {data2.socials.map(item => (
                        <div key={item.name} className="text-xl mr-3 md:text-3xl text-white">
                            <a href={item.link} target="_blank" rel="noreferrer">{item.icons}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
