import Title from "./Title"
import { CourseData } from "../constants/data"
import { FaLongArrowAltRight } from "react-icons/fa"

const Course = () => {

    const { title, subTitle, course } = CourseData

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Title title={title} subTitle={subTitle} mb="mb-12"/>
            <div className="flex flex-col justify-center items-center container mx-auto">
                <div className="flex flex-wrap justify-center items-center p-5 md:ml-4 md:mr-4 sm:ml-1 sm:mr-3">
                    {course.map((item, i) => (
                        <div key={i} className="w-72 p-5 mt-5 mr-5 overflow-hidden bg-white shadow-lg rounded-md flex flex-row justify-between hover:bg-secondary hover:text-indigo-50 cursor-pointer">
                            <span className="font-semibold">{item}</span>
                            <FaLongArrowAltRight className="text-xl"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course
