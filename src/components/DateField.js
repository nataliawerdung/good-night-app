import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

const StyledDateField = styled('div')`
  grid-area: date;
  background: rgb(133, 172, 249);
  margin-bottom: 25px;
  padding: 15px;
`

export default class DateField extends Component {
  render() {
    const { onClick, onChange } = this.props
    return (
      <StyledDateField>
        <label> Add night: </label>
        <input
          type="date"
          min="2018-01-01"
          max={this.props.max}
          onClick={onClick}
          onChange={onChange}
          ref={this.props.ref}
          className={css`
            background: rgb(133, 172, 249);
          `}
        />
      </StyledDateField>
    )
  }
}
