import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import DateField from './DateField'
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

export default class StartPage extends Component {
  render() {
    return (
      <Grid>
        <Headline>goal: 8 hours</Headline>
        <DateField
          max={this.props.state.today}
          onClick={this.props.setMaxDay}
          onChange={this.props.selectDay}
        />
        <DropDown
          value={this.props.state.newSleepLength}
          onChange={this.props.handleChange}
        />
        <SaveButton onClick={this.props.onSave} />
        <Placeholder>{this.props.state.message}</Placeholder>
      </Grid>
    )
  }
}
