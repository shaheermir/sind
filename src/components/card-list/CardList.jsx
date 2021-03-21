import React from "react"
import styled from "styled-components"

import Card from "../card/card.component"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CardList = ({ monsters }) => (
  <Container>
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </Container>
)

export default CardList
