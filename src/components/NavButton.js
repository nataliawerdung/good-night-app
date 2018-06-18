import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const StyledDiv = styled('div')`
  grid-area: nav;
`
const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  background: whitesmoke;
  border-radius: 50%;
  height: 65px;
  width: 65px;
  border: none;

  :hover,
  :active {
    transform: scale(1);
  }
`
const Span = styled('div')`
  font-size: 18px;
  color: rgb(29, 54, 73);
  margin: 5px;
  text-decoration: none;
`

export default class NavButton extends Component {
  render() {
    return (
      <StyledDiv>
        <Button>
          <Link to="/settings">
            <Span>settings</Span>
          </Link>
        </Button>
      </StyledDiv>
    )
  }
}
