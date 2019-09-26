import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { setValue, submitForm } from "../../actions"
import GlasgowComaScaleForm from "../views/GlasgowComaScaleForm"
import GlasgowComaScaleHeader from "../views/GlasgowComaScaleHeader"

function GlasgowComaScaleContainer(props) {

  const handleChange = e => {
    props.setValue(e.target.name, e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      props.eyeResponse >= 0 &&
      props.verbalResponse >= 0 &&
      props.motorResponse >= 0
    ) {
      props.submitForm(
        props.eyeResponse, 
        props.verbalResponse, 
        props.motorResponse
      )
    }
  }

  return (
    <GcsWrapper>

      <GlasgowComaScaleHeader
        glasgowComaScore={props.glasgowComaScore} />

      <GlasgowComaScaleForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        eyeResponse={props.eyeResponse}
        verbalResponse={props.verbalResponse}
        motorResponse={props.motorResponse}
        submitted={props.submitted} />

    </GcsWrapper>
  )
}

const mapStateToProps = state => ({
  glasgowComaScore: state.glasgowComaScore,
  eyeResponse: state.eyeResponse,
  verbalResponse: state.verbalResponse,
  motorResponse: state.motorResponse,
  submitted: state.submitted
})

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  submitForm: (eyeResponse, verbalResponse, motorResponse) => dispatch(submitForm(eyeResponse, verbalResponse, motorResponse))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlasgowComaScaleContainer)


const GcsWrapper = styled.div`
  padding: 0 0 1.5rem;
  font-family: 'Lato', sans-serif;
  color: #1b2c4b;
`