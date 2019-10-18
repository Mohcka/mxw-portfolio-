import React from "react"
import Loadable from "react-loadable"
// import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Banner2 from "../components/banner-v2"

const Banner = Loadable({
  loader: () => import("../components/banner"),
  loading: () => <div className="">Loading...</div>,
})

// const Banner2 = Loadable({
//   loader: () => import("../components/banner-v2"),
//   loading: () => <div className="">Loading...</div>,
// })

const StyledIndexWrapper = styled.div`
  .section {
    margin: 100px 0;
  }
`

const IndexPage = () => (
  <Layout>
    <StyledIndexWrapper>
      <SEO title="Welcome" />
      <Banner2 />
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Contact />
      </div>
    </StyledIndexWrapper>
  </Layout>
)

export default IndexPage
