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
  font-size: 22px;
`

const ChartDiv = styled('canvas')`
  grid-area: chart;
  width: 80%;
`

const Empty = styled('div')`
  grid-area: empty;
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

  getSleptData() {
    const days = this.props.state.days

    return Object.keys(days).map(dateString => {
      const dateEntry = days[dateString]
      return {
        x: moment(dateString),
        y: dateEntry.sleepLength,
      }
    })
  }

  getGoalData() {
    const days = this.props.state.days

    return Object.keys(days).map(dateString => {
      const dateEntry = days[dateString]
      return {
        x: moment(dateString),
        y: dateEntry.sleepGoal,
      }
    })
  }

  getLabels() {
    const dates = Object.keys(this.props.state.days)
      .slice(0, 7)
      .map(day => {
        return moment(day).fromNow()
      })

    dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    return dates
  }

  showChart = ctx => {
    new Chart(ctx, {
      type: 'line',
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 5,
                suggestedMax: 14,
                beginAtZero: true,
              },
            },
          ],
        },
      },
      data: {
        labels: this.getLabels(),
        datasets: [
          {
            label: 'slept hours',
            data: this.getSleptData(),
            backgroundColor: 'rgba(242, 215, 73, 0.7)',
          },
          {
            label: 'sleep goals',
            data: this.getGoalData(),
            backgroundColor: 'rgba(29, 55, 73, 0.7)',
          },
        ],
      },
    })
  }
}
