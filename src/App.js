import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import globalStyles from './styles/global'

import StartPage from './components/StartPage'
import SettingsPage from './components/SettingsPage'
import StatisticsPage from './components/StatisticsPage'

globalStyles()

class App extends Component {
  state = {
    days: {
      '2018-06-05': {
        sleepLength: 11,
        id: '2018-06-05',
        sleepGoal: 5,
      },
      '2018-03-06': {
        sleepLength: 8,
        id: '2018-06-07',
        sleepGoal: 12,
      },
      '2018-02-05': {
        sleepLength: 5,
        id: '2018-06-07',
        sleepGoal: 12,
      },
      '2018-01-07': {
        sleepLength: 8,
        id: '2018-06-07',
        sleepGoal: 4,
      },
      '2018-03-07': {
        sleepLength: 8,
        id: '2018-06-07',
        sleepGoal: 12,
      },
      '2018-06-07': {
        sleepLength: 8,
        id: '2018-06-07',
        sleepGoal: 12,
      },
      '2018-06-21': {
        sleepLength: 4,
        id: '2018-06-21',
        sleepGoal: 8,
      },
    },
    sleepGoal: 8,
    newSleepLength: 8,
    message: '',
    today: this.getToday(),
    showSimplert: false,
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
    if (this.state.selectedDay != null) {
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
          showSimplert: false,
        },
        () => {
          this.saveStateToLocalStorage()
        }
      )
    } else
      this.setState({
        showSimplert: true,
      })
  }

  saveStateToLocalStorage() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  componentDidMount() {
    this.setState(this.getData())
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
                  showSimplert={this.showSimplert}
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
