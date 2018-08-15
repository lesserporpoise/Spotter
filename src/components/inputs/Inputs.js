import React, { Component } from 'react'
import Graph from '../graph/Graph'
import Outputs from '../outputs/Outputs'
import {connect} from 'react-redux'
import {ducksRange,ducksWind,ducksDir} from '../../ducks/reducer'

class Inputs extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }



  render() {
    return (
      <div>
        <div>
          <div>
            Range
          </div>
          <input placeholder="Range" onChange={(e)=>this.props.ducksRange(e.target.value)}/>
          <div>
            {this.props.range}
          </div>
        </div>
        <div>
          <div>
            Wind Speed
          </div>
          <input placeholder="Wind Speed" onChange={(e)=>this.props.ducksWind(e.target.value)}/>
          <div>
            {this.props.windSpeed}
          </div>
        </div>
        <Outputs/>
        <Graph/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    cardData:state.cardData,
    range:state.range,
    windSpeed:state.windSpeed,
  }
}

export default connect(mapStateToProps,{ducksRange,ducksWind,ducksDir})(Inputs)