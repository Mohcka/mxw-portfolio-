import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Loadable from "react-loadable"
import { breakpoints } from "../theme"
import styled from "styled-components"

const AnimTextList = Loadable({
  loader: () => import("./animation/AnimTextList"),
  loading: () => <span style={{ color: "white", opacity: 0 }}>javascript</span>,
})

const BG = () => <div className="background" />

const GeoBackground = Loadable({
  loader: () => import("./UI/GeoBackground"),
  loading: () => <BG />,
})

const ParticlesBG = Loadable({
  loader: () => import("./UI/PartclesBackground"),
  loading: () => <BG />,
})

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  min-height: 400px;
  color: white;
  position: relative;

  

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 100px;
  }

  .title {
    color: white;
    font-weight: 700;
    font-size: 3em;
  }
  .subtitle {
    font-weight: 600;
    font-size: 1.4em;
    max-width: 600px;

    & > span {
      display: inline-block;
      color: white;
    }
  }

  .background {
    background-color: ${props => props.theme.primaryDark};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
  }

  .tech-list {
    display: inline-block;
    width: 250px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    .intro {
      padding: 20px;
      text-align: center;
    }

    .title {
      font-size: 2.5em;
    }

    .subtitle {
      font-size: 1.3em;
      width: 100%;
    }

    .tech-list {
      display: block !important;
      text-align: center;
      margin: 0 auto;
  }
`

const Banner = () => {
  const techList = [
    "javascript",
    "Responsive Design",
    "React",
    "Webpack",
    "RESTful APIs",
    "SQL",
    "NodeJS",
    "Java",
  ]

  const [headerBG, setHeaderBG] = useState(<BG />)

  useEffect(() => {
    let viewportWidth =
      window.innerWidth || document.documentElement.clientWidth

    if (viewportWidth > breakpoints.md)
      setHeaderBG(<ParticlesBG className="background" />)
    else setHeaderBG(<GeoBackground className="background" />)

    // Create a timeout that will delay the resize event for performance
    let timeout
    window.addEventListener("resize", () => {
      viewportWidth = window.innerWidth || document.documentElement.clientWidth

      if (!timeout) {
        timeout = setTimeout(() => {
          // reset timeout
          timeout = null

          // run resize functions
          if (viewportWidth > breakpoints.md)
            setHeaderBG(<ParticlesBG className="background" />)
          else setHeaderBG(<GeoBackground className="background" />)
        }, 200)
      }
    })
  }, [])

  return (
    <StyledBanner>
      {headerBG}
      <Container className="intro" style={{}}>
        <h2 className="title" style={{}}>
          Hi, I'm Michael
        </h2>
        <h4 className="subtitle" style={{}}>
          <span style={{ marginBottom: 20 }}>
            I create web apps using the best practices and coding standards such
            as <AnimTextList textList={techList} className="tech-list" />
          </span>
          <span>
            I love to code and design next gen web applications for the growing
            industry
          </span>
        </h4>
      </Container>
    </StyledBanner>
  )
}

export default Banner
