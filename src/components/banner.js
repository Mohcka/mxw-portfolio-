import React from "react"
import GeoPattern from "geopattern"

import theme from "../theme"

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: GeoPattern.generate("ok", {
          generator: "xes",
          color: theme.primaryDark,
        }).toDataUrl(),
        height: 300,
        width: "100%",
      }}
    >
      <div
        className="intro"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: '20px'
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
          I'm fascinated with the world of web development and creating next
          generation web experiences
        </h4>
      </div>
    </div>
  )
}

export default Banner
