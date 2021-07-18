import React from "react"
import { Course, Hero, Footer, Navbar, TopFeatured, About, Testimoni } from "../components"
import Head from "next/head"

const Home = () => {
  return (
    <div className="w-min min-h-screen sm:min-w-full">
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
    </div>
  )
}

export default Home
