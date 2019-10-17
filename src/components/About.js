import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const StyledAboutWrapper = styled.div`
  .about {
    h2,
    h4 {
      margin: 20px 0;
    }
  }
`

const About = () => (
  <StyledAboutWrapper>
    <Container className="about">
      <h2>About Me...</h2>
      <h4>
        I'm a jr web developer who has an affinity for javascript,{" "}
        <a href="https://reactjs.org/">React</a>, and{" "}
        <a href="https://nodejs.org/en/about/">nodejs</a>
      </h4>
      <p>
        <p>
          I started off learning Java in my highschool's AP Computer Science
          course. As I got to college I continued taking courses on other
          programming languages, data sciences, and machine coding. During that
          time I started learning javascript and web development on the side.
        </p>
        <p>
          I currently work as a web developer at my company, building engaging
          web experiences with WordPress. I also occasionally write programs 
          that handle the data we use everyday that takes advantage of several
          APIs of the services we use.
        </p>
      </p>
    </Container>
  </StyledAboutWrapper>
)

export default About
