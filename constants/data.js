import vue from "../public/vue.png"
import { Certification, CaseStudy, Mentorring, Study } from "../components/Svg"
import sampleImg from "../public/sampleImgTesti.jpg"
import { FiInstagram, FiYoutube, FiTwitter, FiFacebook } from "react-icons/fi"

const NavbarData = {
    title: "Coding Nicely",
    data: [
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Course",
            link: "#course"
        },
        {
            name: "Top Featured",
            link: "#topFeatured"
        },
        {
            name: "Testimoni",
            link: "#testimoni"
        },
        {
            name: "Footer",
            link: "#footer"
        },
    ]
}

const HeroData = {
    title: "lorem ipsum modaee aaaaa",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"
}

const CardData = {
    title: "Top Featured",
    subTitle: "Kelas Online Populer",
    cards: [
        {
            name: "Belajar Vue Untuk Pemula",
            modul: 38,
            harga: "Rp. 30.000",
            img: vue
        },
        {
            name: "Belajar Vue Untuk Pemula",
            modul: 38,
            harga: "Rp. 30.000",
            img: vue
        },
        {
            name: "Belajar Vue Untuk Pemula",
            modul: 38,
            harga: "Rp. 30.000",
            img: vue
        },
        {
            name: "Belajar Vue Untuk Pemula",
            modul: 38,
            harga: "Rp. 30.000",
            img: vue
        }
    ]
}

const CourseData = {
    title: "Our Course",
    subTitle: "Temui Kelas Berdasarkan Kategori Yang Kami Sediakan",
    course: [
        "Game Design",
        "Website Development",
        "Soft Skills",
        "UI/UX & Graphic Design",
        "Game Development",
        "Mobile Development",
        "Network Development",
        "Data Science",
        "Machine learning",
    ]
}

const AboutData = {
    title: "lorem ipsum modaee aaaaa",
    subTitle: "lorem ipsum modaee aaaaa",
    abouts: [
        {
            title: "lorem ipsum modaee aaaaa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            svg: <Study width="700" height="400" vHeight="680.00102" vWidth="728.08199"/>
        },
        {
            title: "lorem ipsum modaee aaaaa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            svg: <CaseStudy width="700" height="400" vHeight="680.00102" vWidth="1100.08199"/>
        },
        {
            title: "lorem ipsum modaee aaaaa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            svg: <Mentorring width="700" height="400" vHeight="680.00102" vWidth="728.08199"/>
        },
        {
            title: "lorem ipsum modaee aaaaa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            svg: <Certification width="700" height="400" vHeight="700.00102" vWidth="1050.08199"/>
        },
    ]
}

const TestimoniData = {
    title: "Success Stories",
    subTitle: "Membangun Hasil Karya Yang Bermanfaat Untuk Masyarakat",
    testimonials: [
        {
            name: "Lorem Ipsum",
            img: sampleImg,
            job: "Web Developer",
            testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name: "Lorem Ipsum",
            img: sampleImg,
            job: "Web Developer",
            testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name: "Lorem Ipsum",
            img: sampleImg,
            job: "Web Developer",
            testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name: "Lorem Ipsum",
            img: sampleImg,
            job: "Web Developer",
            testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },

    ]
}

const FooterData = {
    data: [
        {
            name: "join us!",
            value: ["Cara Belajar", "Terms & Conditions", "Frequently Asked Questions", "Privacy Policy"]
        },
        {
            name: "program",
            value: ["Developer School", "Kampus Coding", "Online Mentoring"]
        },
        {
            name: "developers",
            value: ["Forum Discussions", "Hall of Fame", "Leaderboard"]
        },
        {
            name: "company",
            value: ["About Code Nicely", "Blog", "Course"]
        },
    ],

    data2: {
        socials: [
            {
                name: "Facebook",
                icons: <FiFacebook/>,
                link: "https://www.facebook.com",
            },
            {
                name: "Youtube",
                icons: <FiYoutube/>,
                link: "https://www.youtube.com",
            },
            {
                name: "Twitter",
                icons: <FiTwitter/>,
                link: "https://www.twitter.com",
            },
            {
                name: "Instagram",
                icons: <FiInstagram/>,
                link: "https://www.instagram.com",
            },
        ]
    }
    
}

export { NavbarData, CardData, HeroData, CourseData, AboutData, TestimoniData, FooterData }