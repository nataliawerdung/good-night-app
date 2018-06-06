import React, { Component } from 'react'
import styled, { css } from 'react-emotion'

const StyledSaveButton = styled('section')`
  display: flex;
  align-items: center;
  background: skyblue;
  border: 1px solid skyblue;
  border-radius: 4px;
  color: white;
  grid-area: save;
`

export default class SaveButton extends Component {
  render() {
    return (
      <StyledSaveButton>
        <button onClick={this.props.onClick} /> <span>save</span>
      </StyledSaveButton>
    )
  }
}
