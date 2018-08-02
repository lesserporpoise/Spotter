import React, { Component } from 'react'
import Inputs from '../inputs/Inputs'

export default class Constants extends Component {
  render() {
    return (
      <div>
        <input placeholder="Mass"/>
        <input placeholder="Velocity"/>
        <input placeholder="Ballistic Coefficient"/>
        <Inputs/>
      </div>
    )
  }
}
