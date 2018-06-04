import React, { Component } from 'react'
import { css } from 'emotion'

export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '8' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    const hours = this.state.value
    event.preventDefault()
    return hours
  }

  render() {
    const { onSubmit, children, checked } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add hours:
          <select value={this.state.value} onChange={this.handleChange}>
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
