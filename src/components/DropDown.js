import React, { Component } from 'react'
import { css } from 'emotion'

export default class DropDown extends Component {
  render() {
    const { onSubmit, value, onChange } = this.props
    return (
      <form onSubmit={onSubmit}>
        <label>
          Add hours:
          <select value={value} onChange={onChange}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">8</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
