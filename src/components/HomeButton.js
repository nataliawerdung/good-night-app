import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background: blue;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  border: none;
`
const MoonImage = styled('div')`
  background: yellow;
  width: 40px;
  height: 20px;
  border-radius: 50px 50px 0 0;
  transform: rotate(270deg);
  margin-right: 10px;
`

export default class HomeButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button>
          <Link to="/">
            <MoonImage />
          </Link>
        </Button>
      </React.Fragment>
    )
  }
}
