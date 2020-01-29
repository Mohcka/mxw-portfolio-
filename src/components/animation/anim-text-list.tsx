import React, { Component } from "react"

import styled, { DefaultTheme, ThemedStyledFunction } from "styled-components"
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

export interface AnimTechListState {
  /**
   * The string of text of which web dev technology that's to be displayed
   */
  tech: string
}

export interface AnimTechListProps {
  /**
   * List of technologies used by the developer
   */
  textList: string[]
  /**
   * html class name
   */
  className?: string
}

class AnimTechList extends React.Component<
  AnimTechListProps,
  AnimTechListState
> {
  constructor(props: AnimTechListProps) {
    super(props)

    this.state = {
      tech: "",
    }
  }

  public componentDidMount(): void {
    this.setState({ tech: this.props.textList[0] })
  }

  public componentDidUpdate(
    _prevProps: AnimTechListProps,
    prevState: AnimTechListState
  ) {
    if (prevState.tech != this.state.tech) this.runAnimation()
  }

  private runAnimation(): void {
    const textWrapper: HTMLElement | null = document.querySelector(".letters")
    textWrapper!.innerHTML = textWrapper?.textContent?.replace(
      /\S/g,
      `<span class='letter'>$&</span>`
    )!

    anime
      .timeline()
      .add({
        targets: ".letter",
        translateY: ["1.1em", 0],
        opaicty: 1,
        translateZ: 0,
        duration: 750,
        delay: (_el, i) => 50 * i,
        begin: _anim => {
          anime.set(".letters", { opacity: 1 })
        },
      })
      .add({
        targets: ".text-wrapper",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        complete: _anim => {
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

  redner(): JSX.Element {
    return (
      <StyledTextList className={`text-wrapper ${this.props.className}`}>
        <span className="letters">{this.state.tech}</span>
      </StyledTextList>
    )
  }
}

export default AnimTechList
