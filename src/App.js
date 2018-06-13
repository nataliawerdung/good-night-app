import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './components/DropDown'
import SaveButton from './components/SaveButton'
import DateField from './components/DateField'
import Animation from './components/Animation'
import Grid from './components/Grid'

const Headline = styled('h2')`
  grid-area: goal;
  margin-bottom: 25px;
  padding: 10px;
`
const Placeholder = styled('div')`
  grid-area: placeholder;
  min-height: 100px;
  background: lightblue;
`
const Span = styled('div')`
  font-size: 30px;
  color: whitesmoke;
`

class App extends Component {
  state = {
    days: [],
    sleepGoal: 8,
    newSleepLength: 8,
    message: '',
    today: this.getToday(),
  }

  render() {
    return (
      <Grid>
        <Headline>goal: 8 hours</Headline>
        <DateField
          max={this.state.today}
          onClick={() => this.setMaxDay()}
          onChange={e => this.selectDay(e.target.value)}
        />
        <DropDown
          value={this.state.newSleepLength}
          onChange={e => this.handleChange(e)}
        />
        <SaveButton onClick={() => this.onSave()} />
        <Placeholder>{this.state.message}</Placeholder>
      </Grid>
    )
  }
  handleChange(event) {
    this.setState({ newSleepLength: event.target.value })
  }

  onSave() {
    this.setState(
      {
        days: [
          ...this.state.days,
          {
            date: this.state.selectedDay,
            sleepLength: this.state.newSleepLength,
          },
        ],
        selectedDay: this.state.today,
        message: this.getMessage(),
      },
      () => {
        this.saveStateToLocalStorage()
      }
    )
  }

  saveStateToLocalStorage() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  componentDidMount() {
    this.getData()
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
    this.saveStateToLocalStorage()
  }

  getData() {
    let state = localStorage.getItem('state')
    if (state) {
      return { ...JSON.parse(state) }
    } else {
      return this.state
    }
  }

  getMessage() {
    const goal = this.state.sleepGoal
    const hours = this.state.newSleepLength
    if (hours >= goal) {
      return <Animation message={'Well done!'} />
    }
    return <Span>Try to go to bed early today</Span>
  }

  setMaxDay() {
    this.setState({ today: this.getToday() })
  }

  getToday() {
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

    return yyyy + '-' + mm + '-' + dd
  }

  selectDay(value) {
    this.setState({ selectedDay: value })
  }
}

export default App
