import React from "react"
import styled from 'styled-components'
import GlasgowComaScore from "./GlasgowComaScore"
import logo from "../../assets/castor-nest.svg"

export default function GlasgowComaScaleHeader(props) {
  return (
    <GcsHeader>
      <GcsLogo><GcsLogoImg src={logo} alt="logo" /></GcsLogo>
      <GcsLogoHeading>Glasgow Coma Score</GcsLogoHeading>
      <GlasgowComaScore glasgowComaScore={props.glasgowComaScore} />
    </GcsHeader>
  )
}

const GcsHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: #FFF;
`

const GcsLogo = styled.div`
  background-color: #2d72da;
`

const GcsLogoImg = styled.img`
  width: 1rem;
  padding: 0.8rem 1.6rem;
  display: block;
`

const GcsLogoHeading = styled.h1`
  color: #1b2c4b;
  background-color: #FFF;
  border-bottom: 1px solid #CCC;
  padding: 1rem 0;
  margin: 0 1.6rem;
  font-size: 0.8rem;
`