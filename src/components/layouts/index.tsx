import React, { FunctionComponent } from "react"

import { Container } from "react-bootstrap"
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components"
import theme from "../../theme"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Signika", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  div {
    color: ${props => props.theme.dark};
  }

  a {
    color: ${props => props.theme.primaryDark} !important;
    text-decoration: none !important;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    html, body {
      // background: red !important;
      // font-size: 0.8em;
    }
  }
`

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme.myTheme}>
      <>
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

export default Layout
