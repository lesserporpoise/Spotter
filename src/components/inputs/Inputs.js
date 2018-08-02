import React, { Component } from 'react'
import Graph from '../graph/Graph'
import Outputs from '../outputs/Outputs'
import {connect} from 'react-redux'

class Inputs extends Component {
  constructor(props){
    super(props)
    this.state={
      rangeIn:0,
      windIn:0,
      windDirIn:0
    }
  }
  changeHandler1(val){
    this.setState({rangeIn:val})
  }
  changeHandler2(val){
    this.setState({windIn:val})
  }
  changeHandler3(val){
    this.setState({windDirIn:val})
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <input placeholder="Range"        onChange={e=>this.changeHandler1(e.target.value)}/>
        <input placeholder="Wind Speed"   onChange={e=>this.changeHandler2(e.target.value)}/>
        <input placeholder="Wind Direction"  onChange={e=>this.changeHandler3(e.target.value)}/>
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