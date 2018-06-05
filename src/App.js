import React, { Component } from 'react'
import globalStyles from './styles/global'

import DropDown from './components/DropDown'
import SaveButton from './components/SaveButton'

class App extends Component {
  state = {
    days: [
      { date: '2018-06-01', sleeplength: 8, id: 0 },
      { date: '2018-06-01', sleeplength: 9, id: 1 },
      { date: '2018-05-31', sleeplength: 7, id: 2 },
    ],
    value: 8,
  }

  render() {
    return (
      <div>
        <h2> goal: 8 hours </h2>
        <label text="add night">
          <input type="calendar" />{' '}
        </label>
        <DropDown
          onChange={e => this.props.handleChange()}
          onSubmit={e => this.props.handleSubmit()}
        />
        <SaveButton onClick={e => this.props.onCompare()} />
        <div />
      </div>
    )
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    const hours = this.state.value
    event.preventDefault()
    return hours
  }

  onCompare() {
    if (hours > 8 || hours === 8) {
      return 'well done'
    } else {
      return 'try to go to bed early today'
    }
  }
}

export default App
