import React, { Component } from 'react'

import DropDown from './DropDown'
import SaveButton from './SaveButton'

export default class SettingsPage extends Component {
  render() {
    return (
      <div>
        <DropDown />
        <SaveButton />
      </div>
    )
  }
}
