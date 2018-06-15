import React, { Component } from 'react'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import HomeButton from './HomeButton'

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
      <div>
        <HomeButton />
        <DropDown onChange={this.getSleepGoal} />
        <SaveButton
          onClick={e => this.props.setSleepGoal(this.state.sleepGoal)}
        />
      </div>
    )
  }
}
