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
        Range<input placeholder="Range" onChange={(e)=>this.props.ducksRange(e.target.value)}/>
        <span>{this.props.range}</span><br/>

        Wind Speed<input placeholder="Wind Speed" onChange={(e)=>this.props.ducksWind(e.target.value)}/>
        <span>{this.props.windSpeed}</span><br/>

        Wind Direction<input placeholder="Wind Direction" onChange={(e)=>this.props.ducksDir(e.target.value)}/>
        <span>{this.props.windDirection}</span><br/>


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
    windDirection:state.windDirection
  }
}

export default connect(mapStateToProps,{ducksRange,ducksWind,ducksDir})(Inputs)