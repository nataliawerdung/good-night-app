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
  font-size: 20px;
  color: rgb(29, 54, 73);
  margin-left: 10px;
`

export default class StartPage extends Component {
  state = {
    didSave: false,
  }

  render() {
    return (
      <Grid onClick={this.onClickAnywhere}>
        <Headline>goal: {this.props.state.sleepGoal} hours</Headline>
        <DateField
          max={this.props.state.today}
          onClick={e => (this.resetDidSave(), this.props.setMaxDay)}
          onChange={this.props.selectDay}
        />
        <DropDown
          value={this.props.state.newSleepLength}
          onChange={this.props.handleChange}
          onClick={e => this.resetDidSave()}
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
          <Simplert
            showSimplert={this.props.showAlert}
            message={'please set a date before saving'}
          />
        </Placeholder>
        <NavButton />
      </Grid>
    )
  }
  resetDidSave = () => {
    this.setState({ didSave: false })
  }

  onSave = () => {
    this.setState({ didSave: true })
    this.props.onSave()
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
  showAlert() {
    return <Simplert />
  }
}
