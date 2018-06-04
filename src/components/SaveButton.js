import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledSaveButton = styled('section')`
  height: 40px;
  width: 60px;
  background: 'skyblue';
  border: 1px solid skyblue;
  border-radius: 4px;
  color: white;
`

export default class SaveButton extends Component {
  render() {
    return <StyledSaveButton key={day.id} onClick={onClick} />
  }
}
