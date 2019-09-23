import React from "react"
import RadioFieldset from "./GlasgowComaScaleRadioFieldset"
import formValues from "../../data/formValues.js"

export default function GlasgowComaScaleForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      { Object.keys(formValues).map( (key) => 
        <RadioFieldset
          fieldsetName={key}
          fieldsetValues={formValues[key]}
          selectedValue={props[key]}
          handleChange={props.handleChange}
          key={key} /> ) }
      <div>
        <button type="submit" className={ props.submitted ? "submitted" : null } >{props.submitted ? "Reset the Calculation" : "Calculate the Score" }</button>
      </div>
    </form>
  )
}