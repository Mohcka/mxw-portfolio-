import Color from "color"
import { DefaultTheme } from "styled-components"

export interface MyTheme {
  /**
   * Theme's primary color
   */
  primary: string
  /**
   * Theme's darkened primary color
   */
  primaryDark: () => string
  /**
   * Theme's secondary color
   */
  secondary: string
  /**
   * Theme's white color
   */
  light: string
  /**
   * Theme's dark color
   */
  dark: string
  /**
   * Theme's light text color
   */
  textLight: string
  /**
   * Theme's predefined set of breakpoints
   */
  breakpoints: {
    /**
     * Small\mobile breakpoint
     */
    sm: number
    /**
     * Medium/tablet breakpoint
     */
    md: number
    /**
     * Large/desktop breakpoint
     */
    lg: number
    /**
     * XLarge/desktop breakpoint
     */
    xl: number
  }
}

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1140,
}

const myTheme: DefaultTheme = {
  primary: "#CAEBF2",
  primaryDark: function() {
    return Color(this.primary)
      .darken(0.5)
      .hex()
  },
  secondary: "#FF3B3F",
  light: "#EFEFEF",
  dark: "#333",
  textLight: "#EEE",
  breakpoints: breakpoints,
}

export { breakpoints }
export default { myTheme }
