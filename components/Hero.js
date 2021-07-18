import { useState } from "react"
import { Background } from "./Svg"

const Hero = () => {

    const [size, setSize] = useState()

    if(typeof window !== "undefined"){
        window.addEventListener("resize", function () {
            const resize = window.screen.width;
            setSize(resize)
        })
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-baseline">
            <div className="container mx-auto p-5 flex flex-col sm:flex-col xl:flex-row justify-center items-stretch">
                <div className="p-12 flex flex-wrap justify-center items-center w-auto">
                    <span className="text-5xl mb-5 font-serif">lorem ipsum modaee aaaaa</span>
                    <p className="text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <div className="mt-12">
                        <button className="bg-secondary border border-secondary text-indigo-50 hover:bg-transparent hover:text-secondary font-bold py-2 px-4 rounded-full">
                            Daftar Kelas
                        </button>
                        <button className="text-secondary font-bold py-2 px-4 border border-secondary bg-transparent hover:bg-secondary hover:text-indigo-50 hover:border-transparent rounded-full ml-14">
                            Katalog Kelas
                        </button>
                    </div>
                </div>
                {size <= 630 ? (
                    null
                ) : (
                    <div className="text-lg mr-5 md:px-24 p-14">
                        <Background width="500" height="400" vHeight="680.00102" vWidth="728.08199" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hero
