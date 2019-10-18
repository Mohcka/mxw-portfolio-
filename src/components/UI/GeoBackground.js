import React from "react"
import PropTypes from "prop-types"
import GeoPattern from "geopattern"
import theme from "../../theme"

const GeoBackground = ({ children }) => (
  <div
    style={{
      backgroundImage: GeoPattern.generate("ok", {
        generator: "xes",
        color: theme.primaryDark,
      }).toDataUrl(),
    }}
  >
    {children}
  </div>
)

GeoBackground.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GeoBackground
