import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import { css } from 'emotion'

const StyledDiv = styled('div')`
  grid-area: nav;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
const Button = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  background: whitesmoke;
  border-radius: 7px;
  height: 55px;
  width: 105px;
  border: none;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`
const Span = styled('div')`
  font-size: 22px;
  color: rgb(29, 54, 73);
  margin: 5px;
`

const noUnderline = css`
  text-decoration: none;
`

export default class NavButton extends Component {
  render() {
    return (
      <StyledDiv>
        <Button>
          <Link className={noUnderline} to="/settings">
            <Span>settings</Span>
          </Link>
        </Button>
        <Button>
          <Link className={noUnderline} to="/statistics">
            <Span>statistics</Span>
          </Link>
        </Button>
      </StyledDiv>
    )
  }
}
