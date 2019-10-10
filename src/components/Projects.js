import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Badge } from "react-bootstrap"
import styled from "styled-components"
import theme from "../theme"
import Color from "color"

import projectData from "../data/projects"

const StyledProjectsWrapper = styled.div`
  .project {
    border-radius: 10px;
    margin: 10px 0;
    padding: 20px;
    background-color: ${props => props.theme.light};

    a {
      color: ${props =>
        Color(props.theme.primary)
          .darken(0.4)
          .hex()} !important;
    }
  }
`

const Project = props => (
  <Col sm={6} xs={12}>
    <a href={props.projectInfo.link}>
      <div className="project">
        <div className="project-title">
          <h3>{props.projectInfo.title}</h3>
        </div>
        <div
          className="project-info"
          dangerouslySetInnerHTML={{ __html: props.projectInfo.info }}
        />
        <div className="project-tag">
          {props.projectInfo.tags.map((tag, i) => (
            <React.Fragment key={i}>
              <a href={tag.link} style={{ fontSize: "1.2em" }}>
                <Badge
                  style={{
                    background: tag.color,
                    color: Color(tag.color).isDark() ? theme.light : theme.dark,
                    margin: "0 3px",
                  }}
                >
                  {tag.alt}
                </Badge>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </a>
  </Col>
)

Project.propTypes = {
  projectInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }),
}

const Projects = () => (
  <StyledProjectsWrapper>
    <Container>
      <Row>
        {projectData.projects.map((project, i) => (
          <React.Fragment key={i}>
            <Project projectInfo={project} />
          </React.Fragment>
        ))}
      </Row>
    </Container>
  </StyledProjectsWrapper>
)

export default Projects