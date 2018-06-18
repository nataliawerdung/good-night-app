import React, { Component } from 'react'
import { css } from 'emotion'

export default class DropDown extends Component {
  get styles() {
    return css`
      background: rgb(133, 172, 249);
      margin-bottom: 25px;
      padding: 15px;
      grid-area: hours;
      }
    `
  }

  render() {
    const { value, onChange, text } = this.props
    return (
      <div className={this.styles}>
        <label>
          {text}
          <select value={value} onChange={onChange}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    )
  }
}
