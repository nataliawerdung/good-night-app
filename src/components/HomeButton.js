import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background: rgb(28, 53, 72);
  border-radius: 50%;
  height: 75px;
  width: 75px;
  border: none;
  grid-area: home;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`
const MoonImage = styled('div')`
  background: rgb(242, 215, 73);
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
