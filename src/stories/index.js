import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs'

import DropDown from '../components/DropDown'
import SaveButton from '../components/SaveButton'

storiesOf('DropDown', module)
  .addDecorator(withKnobs)
  .add('as it is', () => <DropDown />)

storiesOf('SaveButton', module)
  .addDecorator(withKnobs)
  .add('not clicked', () => <SaveButton />)
