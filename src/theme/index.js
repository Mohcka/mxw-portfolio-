import Color from "color"

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1140,
}

const theme = {
  primary: "#CAEBF2",
  secondary: "#FF3B3F",
  light: "#EFEFEF",
  dark: "#333",
  textLight: "#EEE",
  breakpoints: breakpoints
}

export { breakpoints }



theme.primaryDark = Color(theme.primary)
  .darken(0.5)
  .hex()

export default theme
