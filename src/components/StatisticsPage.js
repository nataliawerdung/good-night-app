import React, { Component } from 'react'
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

const ChartDiv = styled('div')`
  grid-area: chart;
  background: rgb(133, 172, 249);
  width: 80%;
`

const Empty = styled('div')`
  grid-area: empty;
  background: rgb(133, 172, 249);
`

export default class StatisticsPage extends Component {
  state = {
    lastWeekDays: [],
    lastWeekDates: [],
    lastWeekSleepGoals: [],
    lastWeekSleepLenghts: [],
  }

  render() {
    return (
      <Grid>
        <HomeButton />
        <ChartDiv />
        <Empty />
      </Grid>
    )
  }

  componentDidMount() {
    this.getLastWeekDays()
    this.getLastWeekDates()
    this.getLastWeekSleepLengths()
    this.getLastWeekSleepGoals()
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
  }

  getLastWeekDays() {
    let state = localStorage.getItem(...JSON.parse('state'))
    let lastWeekDays = state.days
    this.setState({ lastWeekDays: lastWeekDays })
    //wie kriege ich die letzten 7 Tage?? benötige ich die id?
  }
  //showChart = () => {
  // const chart = new Chart(ctx, {
  //  type: 'line',
  //  data: data,
  //  options: {
  //   scales: {
  //     xAxes: [
  //       {
  //         time: {
  //           unit: 'day',
  //         },
  //         yAxes: [
  //           {
  //             time: {
  //              unit: 'hour',
  //             },
  //        },
  //      ],
  //    },
  //  },
  // })
  // }
}
