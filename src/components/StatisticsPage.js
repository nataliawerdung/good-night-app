import React, { Component } from 'react'
import styled from 'react-emotion'

import HomeButton from './HomeButton'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
  grid-template-rows: 1fr 1fr 3fr;
  grid-template-areas:
    'home . .'
    'chart chart chart'
    'empty empty empty';
  background: rgb(133, 172, 249);
  color: rgb(29, 54, 73);
  font-size: 20px;
`

const Chart = styled('div')`
  grid-area: chart;
  background: rgb(133, 172, 249);
`

const Empty = styled('div')`
  grid-area: empty;
  background: rgb(133, 172, 249);
`

export default class StatisticsPage extends Component {
  render() {
    return (
      <Grid>
        <HomeButton />

        <Empty />
      </Grid>
    )
  }
}
