import React, { useEffect, useState } from "react"
import Loadable from "react-loadable"
import GeoPattern from "geopattern"

import theme from "../theme"
import anime from "animejs"

import styled from "styled-components"

const AnimTextList = Loadable({
  loader: () => import("./animation/AnimTextList"),
  loading: () => <span>javascript</span>,
})

const GeoBackground = Loadable({
  loader: () => import("./UI/GeoBackground"),
  loading: ({ children }) => (
    <div style={{ background: "red" }}>{children}</div>
  ),
})

const StyledBanner = styled.header`
  height: 400px;
  color: white;
  // background: rgba(255, 0, 0, 0.3);

  .text-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-bottom: -5px;
    font-family: "Monsterrat", arial;
    font-weight: bold;
  }

  .letter {
    display: inline-block;
    line-height: 1em;
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
    "Static Websites",
  ]

  return (
    <GeoBackground>
      <StyledBanner>
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
            <AnimTextList textList={techList} /> things
          </h4>
        </div>
      </StyledBanner>
    </GeoBackground>
  )
}

export default Banner
