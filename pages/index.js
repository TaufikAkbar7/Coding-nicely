import { Fragment } from "react"
import { Course, Hero, Footer, Navbar, TopFeatured, About, Testimoni } from "../components"
export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <TopFeatured/>
      <Course/>
      <About/>
      <Testimoni/>
      <Footer/>
    </Fragment>    
  )
}
