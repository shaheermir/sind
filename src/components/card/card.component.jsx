import React from "react"
import styled, { css } from "styled-components"

const CardContainer = styled.div`
  display: flex;
  background-color: papayawhip;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: 1px solid black;
  margin: 8px 8px;
`

const commonStyles = css`
  color: palevioletred;
`
const Name = styled.h4`
  ${commonStyles}
`
const Email = styled.h4`
  ${commonStyles}
`

function Card({ monster }) {
  return (
    <CardContainer>
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
      <Name>{monster.name}</Name>
      <Email>{monster.email}</Email>
    </CardContainer>
  )
}

export default Card
