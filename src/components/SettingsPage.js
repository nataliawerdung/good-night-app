import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import HomeButton from './HomeButton'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-template-rows: 1fr 1fr 1fr auto;
  grid-template-areas:
    'home . .'
    'hours hours hours'
    '. save .'
    'empty empty empty';
  background: steelblue;
  color: white;
  font-size: 20px;
`

const Empty = styled('div')`
  grid-area: empty;
`

export default class SettingsPage extends Component {
  state = {
    sleepGoal: null,
  }

  getSleepGoal = event => {
    const newSleepGoal = event.target.value
    this.setState({ sleepGoal: newSleepGoal })
  }

  render() {
    return (
      <Grid>
        <HomeButton />
        <DropDown onChange={this.getSleepGoal} />
        <SaveButton
          onClick={e => this.props.setSleepGoal(this.state.sleepGoal)}
        />
        <Empty />
      </Grid>
    )
  }
}
