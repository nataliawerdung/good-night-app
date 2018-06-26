import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import globalStyles from './styles/global'

import StartPage from './components/StartPage'
import SettingsPage from './components/SettingsPage'
import StatisticsPage from './components/StatisticsPage'

globalStyles()

class App extends Component {
  state = {
    days: {},
    sleepGoal: 8,
    selectedDay: null,
    newSleepLength: 8,
    message: '',
    today: this.getToday(),
  }

  getToday() {
    let today = new Date()
    return this.formatDate(today)
  }

  formatDate(date) {
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
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
    this.setState({ newSleepLength: parseInt(event.target.value, 10) })
  }

  selectDay = event => {
    this.setState({
      selectedDay: this.formatDate(event.target.valueAsDate),
    })
  }

  onSave = () => {
    if (this.state.selectedDay !== null) {
      this.setState(
        {
          days: {
            ...this.state.days,
            [this.state.selectedDay]: {
              sleepLength: this.state.newSleepLength,
              id: this.state.selectedDay,
              sleepGoal: this.state.sleepGoal,
            },
          },
          selectedDay: this.state.today,
        },
        () => {
          this.saveStateToLocalStorage()
        }
      )
    }
  }

  saveStateToLocalStorage() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  componentDidMount() {
    this.setState(this.getData())
    this.setState({ selectedDay: null })
    // window.addEventListener(
    //   'beforeunload',
    //   this.saveStateToLocalStorage.bind(this)
    // )
  }

  componentWillUnmount() {
    // window.removeEventListener(
    //   'beforeunload',
    //   this.saveStateToLocalStorage.bind(this)
    // )
    this.saveStateToLocalStorage()
  }

  getData() {
    let state = localStorage.getItem('state')
    if (state) {
      return JSON.parse(state)
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
                  message={this.message}
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
