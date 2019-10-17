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
        <a href="https://nodejs.org/en/about/">NodeJS</a>, and more...
      </h4>
      <div>
        <p>
          I'm a young and motivated web devloper who loves to play around with
          the latest and greatest programming languages (Java, javascript, php,
          Ruby and Python) and technologies (SQL, AJAX, RESTful API, React, Git, CLIs) to
          create astounding and performant web experiences. I've knowledge of
          many of the best coding practices and tools for creating web
          applications from both the front end and back.
        </p>
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
      </div>
    </Container>
  </StyledAboutWrapper>
)

export default About
