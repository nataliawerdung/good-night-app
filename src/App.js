import React, { Component } from 'react'
import { css } from 'emotion'

import DropDown from './components/DropDown'
import SaveButton from './components/SaveButton'

const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-template-rows: 50px 70px 70px 50px auto;
  grid-template-areas:
    '. goal .'
    'date date date'
    'hours hours hours'
    '. save .'
    'placeholder placeholder placeholder';
  width: 240px;
`

class App extends Component {
  state = {
    days: [
      { date: '2018-06-01', sleeplength: 8, id: 0 },
      { date: '2018-06-01', sleeplength: 9, id: 1 },
      { date: '2018-05-31', sleeplength: 7, id: 2 },
    ],
    value: 8,
  }

  render() {
    return (
      <div className={grid}>
        <h2
          className={css`
            grid-area: goal;
          `}
        >
          {' '}
          goal: 8 hours{' '}
        </h2>
        <form
          className={css`
            grid-area: date;
          `}
        >
          <label> Add night: </label>
          <input type="date" placeholder="chose date" />
        </form>
        <DropDown
          onChange={e =>
            this.setState({
              value: event.target.value,
            })
          }
          className={css`
            grid-area: hours;
          `}
        />
        <SaveButton
          onClick={e => this.props.onCompare()}
          className={css`
            grid-area: save;
          `}
        />
        <div
          className={css`
            grid-area: placeholder;
          `}
        />
        <div />
      </div>
    )
  }

  onCompare() {
    const hours = this.state.value
    if (hours >= 8) {
      return 'well done'
    }
    return 'try to go to bed early today'
  }
}

export default App
