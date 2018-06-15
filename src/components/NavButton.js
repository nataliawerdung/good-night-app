import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background: grey;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  border: none;
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
          <Link to="/settings">
            <Span>settings</Span>
          </Link>
        </Button>
      </React.Fragment>
    )
  }
}
