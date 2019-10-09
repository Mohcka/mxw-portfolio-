import React from "react"
import { Container } from "react-bootstrap"

const About = () => (
  <>
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
          I currently work as a web developer at my company, building websites
          with a CMS to create user friendly websites for our clients. I'm also
          working on creating tools to automate tasks for my coworkers as well
          as developing a static site generator with Gatsby that will utilize a
          CMS to replace the one we're currently using.
        </p>
      </p>
    </Container>
  </>
)

export default About
