import Color from "color"

const theme = {
  primary: "#CAEBF2",
  secondary: "#FF3B3F",
  light: "#EFEFEF",
  dark: "#333",
  textLight: "#EEE",
}

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1140,
}

theme.primaryDark = Color(theme.primary)
  .darken(0.5)
  .hex()

export default theme
