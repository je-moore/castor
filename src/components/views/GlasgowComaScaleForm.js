import React from "react"
import styled from 'styled-components'
import RadioFieldset from "./GlasgowComaScaleRadioFieldset"
import formValues from "../../data/formValues.js"

export default function GlasgowComaScaleForm(props) {
  return (
    <GcsForm onSubmit={props.handleSubmit}>
      { Object.keys(formValues).map( (key) => 
        <RadioFieldset
          fieldsetName={key}
          fieldsetValues={formValues[key]}
          selectedValue={props[key]}
          handleChange={props.handleChange}
          key={key} /> ) }
      <div>
        <GcsButton type="submit" submitted={props.submitted}>
          {props.submitted ? "Reset the Calculation" : "Calculate the Score" }
        </GcsButton>
      </div>
    </GcsForm>
  )
}

const GcsForm = styled.form`
  padding: 6.0rem 1.6rem 0;
`

const GcsButton = styled.button`
  background-color: ${props => props.submitted ? "#ffffff" : "#2d72da"};
  color: ${props => props.submitted ? "#2d72da" : "#ffffff"};
  margin: 1.4rem 0 0;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.4rem 0;
  border: 1px solid #2d72da;
  border-radius: 0.25rem;
  width: 84vw;
  max-width: 20.25rem;
  cursor: pointer;
`