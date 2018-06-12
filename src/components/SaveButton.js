import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledSaveButton = styled('section')`
  display: flex;
  align-items: center;
  background: coral;
  border: 1px solid skyblue;
  border-radius: 4px;
  grid-area: save;
`

export default class SaveButton extends Component {
  render() {
    return (
      <StyledSaveButton>
        <button onClick={this.props.onClick}>save</button>
      </StyledSaveButton>
    )
  }
}
