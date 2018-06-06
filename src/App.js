import React, { Component } from 'react'
import { css } from 'emotion'

import DropDown from './components/DropDown'
import SaveButton from './components/SaveButton'

const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-template-rows: 50px 70px 70px 50px auto;
  grid-template-areas:
    '. goal .'
    'date date date'
    'hours hours hours'
    '. save .'
    'placeholder placeholder placeholder';
`

class App extends Component {
  state = {
    days: [
      { date: '2018-06-01', sleepLength: 8, id: 0 },
      { date: '2018-06-01', sleepLength: 9, id: 1 },
      { date: '2018-05-31', sleepLength: 7, id: 2 },
    ],
    value: 8,
    message: '',
  }

  render() {
    return (
      <div className={grid}>
        <h2
          className={css`
            grid-area: goal;
          `}
        >
          goal: 8 hours
        </h2>
        <form
          className={css`
            grid-area: date;
          `}
        >
          <label> Add night: </label>
          <input type="date" placeholder="chose date" />
        </form>
        <DropDown
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
        />
        <SaveButton onClick={e => this.onCompare()} />
        <div
          className={css`
            grid-area: placeholder;
          `}
        />
        <div />
      </div>
    )
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  onCompare() {
    const hours = this.state.value
    if (hours >= 8) {
      this.setState({ message: 'well done' })
    }
    this.setState({ message: 'try to go to bed early today' })
  }
}

export default App
