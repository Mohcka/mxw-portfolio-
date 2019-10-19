import React, { useEffect, useState } from "react"
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
  height: 400px;
  color: white;
  position: relative;

  .background {
    background-color: ${props => props.theme.primaryDark};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
  }
`

const Banner = () => {
  const techList = [
    "javascript",
    "React",
    "SQL",
    "AJAX",
    "NodeJS",
    "Java",
    "NoSQL",
    "Static Website",
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
      <div
        className="intro"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "white",
          }}
        >
          Hi, I'm Michael
        </h2>
        <h4
          style={{
            color: "white",
          }}
        >
          I'm an inspired web developer creating{" "}
          <AnimTextList textList={techList} /> applications
        </h4>
      </div>
    </StyledBanner>
  )
}

export default Banner
