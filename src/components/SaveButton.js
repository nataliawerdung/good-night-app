import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledSaveButton = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background: coral;
  grid-area: save;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`
const Span = styled('div')`
  font-size: 18px;
  color: whitesmoke;
  margin: 5px;
  text-decoration: none;
  font-weight: normal;
`

export default class SaveButton extends Component {
  render() {
    return (
      <StyledSaveButton onClick={this.props.onClick}>
        <Span>save</Span>
      </StyledSaveButton>
    )
  }
}
