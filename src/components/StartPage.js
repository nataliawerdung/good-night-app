import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import DateField from './DateField'
import Grid from './Grid'
import NavButton from './NavButton'

const Headline = styled('h2')`
  grid-area: goal;
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 2px solid rgb(28, 53, 72);
  width: 200px;
  padding: 10px;
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
          text="Add hours:"
        />
        <SaveButton onClick={this.props.onSave} />
        <Placeholder>{this.props.state.message}</Placeholder>
        <NavButton />
      </Grid>
    )
  }
}
