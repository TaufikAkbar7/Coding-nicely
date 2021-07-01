import vue from "../public/vue.png"

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

const HeroData = {}

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
        "machine learning",
    ]
}

export { NavbarData, CardData, HeroData, CourseData }