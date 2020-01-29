import React, { FunctionComponent, Children } from "react"

import styled from "styled-components"

import Layout from "../components/layouts"

import SEO from "../components/seo"

const StyledIndexWrapper = styled.div`
  .section {
    margin: 100px 0;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    .section {
      margin: 50px 0;
    }
  }
`

const IndexPage: FunctionComponent = () => (
  <Layout>
    <StyledIndexWrapper>
      <SEO title="Welcome"/>
    </StyledIndexWrapper>
    
  </Layout>
)

export default IndexPage
