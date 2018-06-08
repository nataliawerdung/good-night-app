import React, { Component } from 'react'
import { css } from 'emotion'

import DropDown from './components/DropDown'
import SaveButton from './components/SaveButton'

const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-rows: 75px 85px 85px 50px auto;
  grid-template-areas:
    'goal goal goal'
    'date date date'
    'hours hours hours'
    '. save .'
    'placeholder placeholder placeholder';
  background: lightblue;
  color: white;
  font-size: 18px;
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
    today: '2018-06-05',
  }

  render() {
    return (
      <div className={grid}>
        <h2
          className={css`
            grid-area: goal;
            margin-bottom: 25px;
            padding: 10px;
          `}
        >
          goal: 8 hours
        </h2>
        <form
          className={css`
            grid-area: date;
            background: grey;
            margin-bottom: 25px;
            padding: 15px;
          `}
        >
          <label> Add night: </label>
          <input
            id="datefield"
            type="date"
            min="2018-01-01"
            max={this.state.today}
            onClick={e => this.setToday()}
            onClick={e => this.addNewDate()}
            className={css`
              background: #eeee;
            `}
          />
        </form>
        <DropDown
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
        />
        <SaveButton
          onClick={e => this.onCompare()}
          onClick={e => this.onSave()}
          onClick={e => this.addNewDay()}
        />
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
    const newSleepLength = { value: event.target.value }
    //this.setState({ value: event.target.value })
    return newSleepLength
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  onSave(event) {
    const storedDays = this.getDays()
    let days
    if (storedDays === null) {
      days = []
    } else {
      days = storedDays
    }
    localStorage.setItem({ days: [...days], newDay })
  }

  getDays() {
    return localStorage.getItem('days')
  }

  onCompare() {
    const hours = this.state.value
    if (hours >= 8) {
      this.setState({ message: 'well done' })
    }
    this.setState({ message: 'try to go to bed early today' })
  }

  setToday() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd
    this.setState({ today: today })
  }

  addNewDate(event) {
    const newDate = this.value
    return newDate
  }

  addNewDay(id) {
    const foundQuoteIndex = this.state.days.findIndex(day => day.id === id)
    const foundQuote = this.state.days[foundQuoteIndex]
    const startOfNewArray = this.state.days.slice(0, foundQuoteIndex)
    const endOfNewArray = this.state.days.slice(foundQuoteIndex + 1)
    const newObject = {
      ...foundQuote,
      date: newDate,
      sleepLength: newSleepLength,
      id: x,
    }
    const newDay = newObject
    return newDay

    this.setState({
      habits: [...startOfNewArray, newObject, ...endOfNewArray],
    })
  }
}

export default App
