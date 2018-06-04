import React, { Component } from 'react'
import globalStyles from './styles/global'

import DropDown from './components/DropDown'
import SaveButton from './components/SaveButton'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: [
        { date: '2018-06-01', sleeplength: 8, id: 0 },
        { date: '2018-06-01', sleeplength: 9, id: 1 },
        { date: '2018-05-31', sleeplength: 7, id: 2 },
      ],
    }
  }

  render() {
    return (
      <div>
        <h2> goal: 8 hours </h2>
        <label text="add night">
          <input type="calendar" />{' '}
        </label>
        <DropDown />
        <SaveButton onClick={e => this.props.onCompare()} />
        <div></div>
      </div>
    )
  }

  onCompare() {
    if () {}
  }
}

export default App
