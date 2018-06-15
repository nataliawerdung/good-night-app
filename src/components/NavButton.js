import React, { Component } from 'react'
import styled from 'react-emotion'

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background: teal;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`
const Span = styled('div')`
  font-size: 18px;
  color: whitesmoke;
  margin: 5px;
  text-decoration: none;
`

export default class NavButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button>
          <a href="/settings">
            <Span>settings</Span>
          </a>
        </Button>
      </React.Fragment>
    )
  }
}
