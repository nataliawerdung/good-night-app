import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import DateField from './DateField'
import Grid from './Grid'
import NavButton from './NavButton'
import Animation from './Animation'
import Simplert from 'react-simplert'

const Headline = styled('h2')`
  grid-area: goal;
  margin-bottom: 20px;
  margin-left: 10px;
  padding: 5px;
  width: 200px;
`
const Placeholder = styled('div')`
  grid-area: placeholder;
  background: rgb(133, 172, 249);
`

const Span = styled('div')`
  font-size: 24px;
  color: rgb(29, 54, 73);
  margin-left: 35px;
  margin-top: 15px;
`

export default class StartPage extends Component {
  state = {
    didSave: false,
    showSimplert: false,
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Headline>goal: {this.props.state.sleepGoal} hours</Headline>
          <DateField
            max={this.props.state.today}
            onClick={this.resetDidSave}
            onClick={this.props.setMaxDay}
            onChange={this.onChangeDate}
          />
          <DropDown
            value={this.props.state.newSleepLength}
            onChange={this.props.handleChange}
            onClick={this.resetDidSave}
            text="How long did you sleep?"
          />
          <SaveButton
            ref={ref => {
              this.saveButton = ref
            }}
            onClick={this.onSave}
          />
          <Placeholder>
            {this.state.didSave && this.renderMessage()}
          </Placeholder>
          <NavButton />
        </Grid>
        <Simplert
          showSimplert={this.state.showSimplert}
          message={'please set a date before saving'}
          onClose={this.resetSimplert}
        />
      </React.Fragment>
    )
  }

  resetDidSave = () => {
    this.setState({ didSave: false })
  }

  resetSimplert = () => {
    this.setState({ showSimplert: false })
  }

  onChangeDate = event => {
    this.props.selectDay(event)
  }

  onSave = () => {
    if (this.props.state.selectedDay != null) {
      this.setState({ didSave: true })
      this.props.onSave()
    } else {
      this.setState({ showSimplert: true })
    }
  }

  renderMessage() {
    const goal = this.props.state.sleepGoal
    const hours = this.props.state.newSleepLength
    if (hours >= goal) {
      return <Animation message={'Well done!'} />
    } else if (hours && hours < goal) {
      return <Span>Try to go to bed early today</Span>
    }
  }
}
