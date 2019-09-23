import * as React from "react"

export default function GlasgowComaScore(props) {
  if (!props.glasgowComaScore) return ""
  return (
    <div className="glasgow-coma-score">
        {props.glasgowComaScore} points
    </div>
  )
}
