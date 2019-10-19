/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"
import { Container } from "react-bootstrap"
import styled, { ThemeProvider,  createGlobalStyle} from "styled-components"
import theme from "../theme"

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

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          <main>{children}</main>
          <Container>
            <footer>© {new Date().getFullYear()}</footer>
          </Container>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
