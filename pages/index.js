import { Fragment } from "react"
import { Course, Hero, Footer, Navbar, TopFeatured, About, Testimoni } from "../components"
export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <Course/>
      <TopFeatured/>
      <About/>
      <Testimoni/>
      <Footer/>
    </Fragment>    
  )
}
