import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const StyledProjectsWrapper = styled.div`
  .project {
    border-radius: 10px;
    background-color: ${props => props.theme.light};
  }
`

const Projects = props => (
  <StyledProjectsWrapper>
    <Container>
      <Row>
        <h2>Projects...</h2>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <div className="project">
            <div className="project-title">
              <h3>Project</h3>
            </div>
            <div className="project-info">Project info</div>
            <div className="project-tag">
              <span>Tag 1</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </StyledProjectsWrapper>
)

export default Projects
