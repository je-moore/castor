import React, { PureComponent } from "react"
import styled from 'styled-components'
import GlasgowComaScaleForm from "../views/GlasgowComaScaleForm"
import GlasgowComaScaleHeader from "../views/GlasgowComaScaleHeader"

class GlasgowComaScaleContainer extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      glasgowComaScore: "",
      eyeResponse: -1,
      verbalResponse: -1,
      motorResponse: -1,
      submitted: false
    }
  }

  calculateGlasgowComaScore = (eyeResponse, verbalResponse, motorResponse) => {
    this.setState({
      glasgowComaScore: eyeResponse + verbalResponse + motorResponse
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: Number(e.target.value) })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.submitted) {
      this.setState({
        glasgowComaScore: "",
        eyeResponse: -1,
        verbalResponse: -1,
        motorResponse: -1,
        submitted: false
      })
    }
    else if (
      this.state.eyeResponse >= 0 &&
      this.state.verbalResponse >= 0 &&
      this.state.motorResponse >= 0
    ) {
      this.setState({ submitted: true })
      this.calculateGlasgowComaScore(
        this.state.eyeResponse,
        this.state.verbalResponse,
        this.state.motorResponse
      )
    }
  }

  render() {
    return (
      <GcsWrapper>

        <GlasgowComaScaleHeader
          glasgowComaScore={this.state.glasgowComaScore} />

        <GlasgowComaScaleForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}          
          calculateGlasgowComaScore={this.calculateGlasgowComaScore}
          glasgowComaScore={this.state.glasgowComaScore}
          eyeResponse={this.state.eyeResponse}
          verbalResponse={this.state.verbalResponse}
          motorResponse={this.state.motorResponse}
          submitted={this.state.submitted} />

      </GcsWrapper>
    )
  }

}

const GcsWrapper = styled.div`
    padding: 0 0 1.5rem;
`

export default GlasgowComaScaleContainer