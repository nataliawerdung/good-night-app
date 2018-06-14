import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import DateField from './DateField'
import Animation from './Animation'
import Grid from './Grid'

const Headline = styled('h2')`
  grid-area: goal;
  margin-bottom: 25px;
  padding: 10px;
`
const Placeholder = styled('div')`
  grid-area: placeholder;
  min-height: 100px;
  background: steelblue;
`
const Span = styled('div')`
  font-size: 30px;
  color: whitesmoke;
  margin-left: 10px;
`

export default class StartPage extends Component {
  render() {
    return (
      <Grid>
        <Headline>goal: 8 hours</Headline>
        <DateField
          max={this.props.state.today}
          onClick={() => this.setMaxDay()}
          onChange={e => this.selectDay(e.target.value)}
        />
        <DropDown
          value={this.props.state.newSleepLength}
          onChange={e => this.handleChange(e)}
        />
        <SaveButton onClick={() => this.onSave()} />
        <Placeholder>{this.props.state.message}</Placeholder>
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
          ...this.props.state.days,
          {
            date: this.props.state.selectedDay,
            sleepLength: this.props.state.newSleepLength,
          },
        ],
        selectedDay: this.props.state.today,
        message: this.getMessage(),
      },
      () => {
        this.saveStateToLocalStorage()
      }
    )
  }
  saveStateToLocalStorage() {
    localStorage.setItem('state', JSON.stringify(this.props.state))
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
      return this.props.state
    }
  }

  getMessage() {
    const goal = this.props.state.sleepGoal
    const hours = this.props.state.newSleepLength
    if (hours >= goal) {
      return <Animation message={'Well done!'} />
    }
    return <Span>Try to go to bed early today</Span>
  }

  setMaxDay() {
    this.setState({ today: this.getToday() })
  }

  selectDay(value) {
    this.setState({ selectedDay: value })
  }
}
