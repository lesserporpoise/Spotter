import React, { Component } from 'react'
import Constants from '../constants/Constants'
import Inputs from '../inputs/Inputs'
import Outputs from '../outputs/Outputs'
import Graph from '../graph/Graph'



export default class Form extends Component {
  render() {
    return (
      <div className='formWrapper'>
        <div className='formMaster'>
          <div className='constInputsWrapper'>
            <Constants/>
            <Inputs/>
          </div>
          <div className='outputsWrapper'>
            <Outputs/>
          </div>
        </div>
        <div className="graphSeperator">
          <Graph/>
        </div>
      </div>
    )
  }
}

