import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

const Datefield = styled('datefield')`
  grid-area: date;
  background: grey;
  margin-bottom: 25px;
  padding: 15px;
`

export default class DateField extends Component {
  render() {
    const { max, onClick, onChange, ref } = this.props
    return (
      <Datefield>
        <label> Add night: </label>
        <input
          type="date"
          min="2018-01-01"
          max={this.props.max}
          onClick={onClick}
          onChange={onChange}
          ref={this.props.ref}
          className={css`
            background: #eeee;
          `}
        />
      </Datefield>
    )
  }
}
