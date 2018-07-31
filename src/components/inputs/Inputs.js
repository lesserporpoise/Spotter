import React, { Component } from 'react'
import Graph from '../graph/Graph'
import Outputs from '../outputs/Outputs'

export default class Inputs extends Component {
  render() {
    return (
      <div>
        These are the Inputs
        <Outputs/>
        <Graph/>
      </div>
    )
  }
}
