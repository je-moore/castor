import React from "react"
import styled from 'styled-components'

export default function RadioInput(props) {
  return (
    <div>

      <GcsInput 
        type="radio"
        id={props.fieldsetName+props.inputScore}
        name={props.fieldsetName} 
        value={props.inputScore.toString()}
        checked={props.selectedValue === props.inputScore}
        onChange={props.handleChange} />

      <GcsLabel for={props.fieldsetName+props.inputScore}>
        {props.inputValue}
      </GcsLabel>

    </div>
  )
}


const GcsLabel = styled.label`
  line-height: 1.4rem;
  font-size: 0.8rem;
`

const GcsInput = styled.input`
  margin: 0 0.4rem 0 0;
  color: #2d72da;
`