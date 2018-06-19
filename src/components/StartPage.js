import React, { Component } from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import DateField from './DateField'
import Grid from './Grid'
import NavButton from './NavButton'

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

export default class StartPage extends Component {
  render() {
    return (
      <Grid>
        <Headline>goal: {this.props.state.sleepGoal} hours</Headline>
        <DateField
          max={this.props.state.today}
          onClick={this.props.setMaxDay}
          onChange={this.props.selectDay}
        />
        <DropDown
          value={this.props.state.newSleepLength}
          onChange={this.props.handleChange}
          text="How long did you sleep?"
        />
        <SaveButton onClick={this.props.onSave} />
        <Placeholder>{this.props.state.message}</Placeholder>
        <NavButton />
      </Grid>
    )
  }
}
