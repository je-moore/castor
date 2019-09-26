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
    const responseValues = Object.values(props.responses)
    if (isFilledOut(responseValues)) {
      props.submitForm(responseValues)
    }
  }

  const isFilledOut = values => values.reduce(
    (isFilled, element) => {
      return isFilled && element >= 0
    }, true)


  return (
    <GcsWrapper>

      <GlasgowComaScaleHeader
        glasgowComaScore={props.glasgowComaScore} />

      <GlasgowComaScaleForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        responses={props.responses}
        submitted={props.submitted} />

    </GcsWrapper>
  )
}

const mapStateToProps = state => ({
  glasgowComaScore: state.glasgowComaScore,
  responses: state.responses
})

const mapDispatchToProps = dispatch => ({
  setValue: (name, value) => dispatch(setValue(name, value)),
  submitForm: (responseValues) => dispatch(submitForm(responseValues))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlasgowComaScaleContainer)


const GcsWrapper = styled.div`
  padding: 0 0 1.5rem;
  font-family: 'Lato', sans-serif;
  color: #1b2c4b;
`