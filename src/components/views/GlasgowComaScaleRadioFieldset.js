import React from "react"
import RadioInput from "./GlasgowComaScaleRadioInput"

export default function RadioFieldset(props) {
  return (
    <fieldset>
      <legend>{ props.fieldsetValues.legend }</legend>
      <p className="fieldset-instruction">{ props.fieldsetValues.instruction }</p>
      { props.fieldsetValues.inputs.map( (inputValue, i, inputValues) => (
        <RadioInput
          inputValue={inputValue}
          selectedValue={props.selectedValue}
          fieldsetName={props.fieldsetName}
          inputScore={inputValues.length - (i+1)}
          handleChange={props.handleChange}
          key={inputValues.length - (i+1)} /> )
      )}
    </fieldset>
  )
}