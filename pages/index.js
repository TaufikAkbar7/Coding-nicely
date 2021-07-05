import { Fragment } from "react"
import { Course, Hero, Footer, Navbar, TopFeatured, About, Testimoni } from "../components"
import Head from "next/head"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Landing Page Coding Nicely</title>
        <meta name="description" content="Company Profile website using Next JS" />
      </Head>
      <Navbar />
      <Hero />
      <TopFeatured />
      <Course />
      <About />
      <Testimoni />
      <Footer />
    </Fragment>
  )
}
