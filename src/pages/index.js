import React from "react"
import Loadable from "react-loadable"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../components/Projects"

const Banner = Loadable({
  loader: () => import("../components/banner"),
  loading: () => <div className="">Loading...</div>,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
