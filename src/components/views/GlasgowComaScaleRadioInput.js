import React from "react"

export default function RadioInput(props) {
  return (
    <div>
      <input 
        type="radio"
        id={props.fieldsetName+props.inputScore}
        name={props.fieldsetName} 
        value={props.inputScore.toString()}
        checked={props.selectedValue === props.inputScore}
        onChange={props.handleChange} />
      <label for={props.fieldsetName+props.inputScore}>{props.inputValue}</label>
    </div>
  )
}