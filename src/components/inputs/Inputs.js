import React, { Component } from 'react'
import Graph from '../graph/Graph'
import Outputs from '../outputs/Outputs'
import {connect} from 'react-redux'

class Inputs extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <input placeholder="Range"/>
        <input placeholder="Wind Speed"/>
        <input placeholder="toggle" value="Wind L or R"/>
        <Outputs/>
        <Graph/>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    cardData:state.cardData
  }
}

export default connect(mapStateToProps,null)(Inputs)