import React, { Component, createRef } from 'react'
import moment from 'moment'
import styled from 'react-emotion'

import HomeButton from './HomeButton'
import Chart from 'chart.js'

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

const ChartDiv = styled('canvas')`
  grid-area: chart;
  background: rgb(133, 172, 249);
  width: 80%;
`

const Empty = styled('div')`
  grid-area: empty;
  background: rgb(133, 172, 249);
`

export default class StatisticsPage extends Component {
  canvas = createRef()

  render() {
    return (
      <Grid>
        <HomeButton />
        <ChartDiv innerRef={this.canvas} />
        <Empty />
      </Grid>
    )
  }

  componentDidMount() {
    if (this.canvas.current) {
      const ctx = this.canvas.current.getContext('2d')
      this.showChart(ctx)
    }
  }

  getData() {
    const days = this.props.state.days

    return Object.keys(days).map(dateString => {
      const dateEntry = days[dateString]
      return {
        x: moment(dateString),
        // x: new Date(dateString),
        y: dateEntry.sleepLength,
      }
    })
  }

  showChart = ctx => {
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'days',
            data: this.getData(),
            borderWidth: 1,
            time: {
              unit: 'day',
            },
          },
          {
            label: 'hours slept',
            data: this.getData(),
            borderWidth: 1,
            time: {
              unit: 'number',
            },
          },
        ],
      },
    })
  }
}
