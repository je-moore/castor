import React from "react"
import styled from "styled-components"
import RadioInput from "./GlasgowComaScaleRadioInput"

export default function RadioFieldset(props) {
  return (
    <Fieldset>
      <Legend>{ props.fieldsetValues.legend }</Legend>
      <FormInstruction>{ props.fieldsetValues.instruction }</FormInstruction>
      { props.fieldsetValues.inputs.map( (inputValue, i, inputValues) => (
        <RadioInput
          inputValue={inputValue}
          selectedValue={props.selectedValue}
          fieldsetName={props.fieldsetName}
          inputScore={inputValues.length - (i+1)}
          handleChange={props.handleChange}
          key={inputValues.length - (i+1)} /> )
      )}
    </Fieldset>
  )
}

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`

const Legend = styled.legend`
  margin: 0;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 1rem 0 0.1rem;
`

const FormInstruction = styled.p`
  font-size: 0.8rem;
  margin: 0 0 0.4rem;
  max-width: 21rem;
  line-height: 1.3;
`