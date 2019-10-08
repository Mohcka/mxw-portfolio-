import React from "react"
import GeoPattern from "geopattern"

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: GeoPattern.generate("ok", {
          generator: "xes",
          color: `#00d4ff`,
        }).toDataUrl(),
        height: 500,
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
          color: "white",
        }}
      >
        <h2>Hello...</h2>
        <h4>I am a...</h4>
      </div>
    </div>
  )
}

export default Banner
