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
import Helmet from "react-helmet"
import styled, { ThemeProvider } from "styled-components"
import theme from "../theme"


const GlobalStyle = styled.div`
  h1,h2,h3,h4,h5,h6,span,p,div{
    color: ${props => props.theme.dark};
  }

  a {
    color: ${props => props.theme.primaryDark} !important;
    text-decoration: none !important;
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </GlobalStyle>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
