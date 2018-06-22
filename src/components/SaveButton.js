import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledSaveButton = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(29, 54, 73);
  grid-area: save;
  border-radius: 7px;
  width: 90px;
  height: 50px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`
const Span = styled('div')`
  font-size: 22px;
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
