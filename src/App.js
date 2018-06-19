import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'react-emotion'

import globalStyles from './styles/global'

import StartPage from './components/StartPage'
import SettingsPage from './components/SettingsPage'
import Animation from './components/Animation'
import StatisticsPage from './components/StatisticsPage'

globalStyles()

const Span = styled('div')`
  font-size: 20px;
  color: rgb(29, 54, 73);
  margin-left: 10px;
`

class App extends Component {
  state = {
    days: [],
    sleepGoal: 8,
    newSleepLength: 8,
    message: '',
    today: this.getToday(),
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

  setMaxDay = () => {
    this.setState({ today: this.getToday() })
  }

  handleChange = event => {
    this.setState({ newSleepLength: event.target.value })
  }

  selectDay = value => {
    this.setState({ selectedDay: value })
  }

  onSave = () => {
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
  getMessage() {
    const goal = this.state.sleepGoal
    const hours = this.state.newSleepLength
    if (hours >= goal) {
      return <Animation message={'Well done!'} />
    }
    return <Span>Try to go to bed early today</Span>
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

  setSleepGoal = newSleepGoal => {
    this.setState({ sleepGoal: newSleepGoal })
  }

  render() {
    return (
      <Router>
        <section>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <StartPage
                  state={this.state}
                  setMaxDay={this.setMaxDay}
                  handleChange={this.handleChange}
                  selectDay={this.selectDay}
                  onSave={this.onSave}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/statistics"
            render={() => <StatisticsPage state={this.state} />}
          />
          <Route
            path="/settings"
            render={() => (
              <SettingsPage
                state={this.state}
                getSleepGoal={this.getSleepGoal}
                setSleepGoal={this.setSleepGoal}
              />
            )}
          />
        </section>
      </Router>
    )
  }
}
export default App
