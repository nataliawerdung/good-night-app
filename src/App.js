import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'react-emotion'

import StartPage from './components/StartPage'
import Settings from './components/Settings'

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

  render() {
    return (
      <Router>
        <section>
          <Route
            exact
            path="/"
            render={() => <StartPage state={this.state} />}
          />
          <Route path="/settings" component={Settings} />
          <div>
            <Link to="/">StartPage</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </section>
      </Router>
    )
  }
}
export default App
