import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

const StyledDateField = styled('div')`
  grid-area: date;
  background: rgb(133, 172, 249);
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 15px;
  border: 1px solid rgb(242, 215, 73);
  border-radius: 7px;
`

export default class DateField extends Component {
  render() {
    const { onClick, onChange } = this.props
    return (
      <StyledDateField>
        <label> Select date: </label>
        <input
          type="date"
          min="2018-01-01"
          max={this.props.max}
          onClick={onClick}
          onChange={onChange}
          ref={this.props.ref}
          className={css`
            background: rgb(133, 172, 249);
            border-width: 0px;
            border: none;
            color: rgb(29, 54, 73);
            font-size: 20px;
          `}
        />
      </StyledDateField>
    )
  }
}
