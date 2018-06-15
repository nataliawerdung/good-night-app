import React, { Component } from 'react'

import DropDown from './DropDown'
import SaveButton from './SaveButton'
import HomeButton from './HomeButton'

export default class SettingsPage extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <DropDown />
        <SaveButton />
      </div>
    )
  }
}
