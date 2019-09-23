import React from "react"
import GlasgowComaScore from "./GlasgowComaScore"
import logo from "../../assets/castor-nest.svg"

export default function GlasgowComaScaleHeader(props) {
  return (
    <header>
      <div className="header-logo"><img src={logo} alt="logo" /></div>
      <h1>Glasgow Coma Score</h1>
      <GlasgowComaScore glasgowComaScore={props.glasgowComaScore} />
    </header>
  )
}