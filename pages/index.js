import { Fragment } from "react"
import { Course, Hero, Footer, Navbar, TopFeatured, About } from "../components"
export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <Course/>
      <TopFeatured/>
      <About/>
      <Footer/>
    </Fragment>    
  )
}
