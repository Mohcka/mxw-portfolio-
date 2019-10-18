import React, { Component } from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import anime from "animejs"

const StyledTextList = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-bottom: -5px;
  font-family: "Monsterrat", arial;
  font-weight: bold;

  .letter {
    display: inline-block;
    line-height: 1em;
    color: ${props => props.theme.textLight};
  }
`

class AnimTechList extends Component {
  constructor(props) {
    super(props)
    this.state = { tech: "" }
  }

  static propTypes = {
    textList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  componentDidMount() {
    this.setState({ tech: this.props.textList[0] })

    // this.runAnimation()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tech !== this.state.tech) this.runAnimation()
  }

  runAnimation = () => {
    const textWrapper = document.querySelector(".letters")
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      `<span class='letter'>$&</span>`
    )

    anime
      .timeline()
      .add({
        targets: ".letter",
        translateY: ["1.1em", 0],
        opaicty: 1,
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
        begin: anim => {
          anime.set(".letters", { opacity: 1 })
        },
      })
      .add({
        targets: ".text-wrapper",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        complete: anim => {
          anime.set(".letters", {
            opacity: 0,
          })
          anime.set(".text-wrapper", {
            opacity: 1,
          })
          this.setState({
            tech: this.props.textList[
              (this.props.textList.indexOf(this.state.tech) + 1) %
                this.props.textList.length
            ],
          })
        },
      })
  }

  render() {
    return (
      <StyledTextList className="text-wrapper">
        <span className="letters">{this.state.tech}</span>
      </StyledTextList>
    )
  }
}

export default AnimTechList
