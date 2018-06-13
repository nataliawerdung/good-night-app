import React, { Component } from 'react'
import { css } from '../styles/animation.css'

export default class Animation extends Component {
  render() {
    return (
      <div className="placeholder">
        <span className="text">{this.props.message}</span>
        <div>
          <div className="moon" />
          <div className="star star1" />
          <div className="star star2" />
        </div>
      </div>
    )
  }
}
