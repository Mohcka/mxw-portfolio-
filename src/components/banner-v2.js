import React from "react"
import Loadable from "react-loadable"

const AnimTextList = Loadable({
  loader: () => import("./animation/AnimTextList"),
  loading: () => <span>javascript</span>,
})

const GeoBackground = Loadable({
  loader: () => import("./UI/GeoBackground"),
  // eslint-disable-next-line react/prop-types
  loading: ({ children }) => (
    <div style={{ background: "red" }}>{children}</div>
  ),
})

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

  return (
    <GeoBackground>
      <div style={{ height: 400, color: "white" }}>
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
      </div>
    </GeoBackground>
  )
}

export default Banner
