import React, { Component } from 'react'
import styled from 'react-emotion'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import HomeButton from './HomeButton'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
  grid-template-rows: 1fr 1fr 1fr 3fr;
  grid-template-areas:
    'home . .'
    'hours hours hours'
    '. save .'
    'empty empty empty';
  background: rgb(133, 172, 249);
  color: rgb(29, 54, 73);
  font-size: 22px;
`

const Empty = styled('div')`
  grid-area: empty;
  background: rgb(133, 172, 249);
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
        <DropDown onChange={this.getSleepGoal} text="Set sleep goal:" />
        <SaveButton
          onClick={e => this.props.setSleepGoal(this.state.sleepGoal)}
        />
        <Empty />
      </Grid>
    )
  }
}
