import React,{Component} from 'react'
import {connect} from 'react-redux'

class Outputs extends Component{
  constructor(){
    super()
    this.state={
      pressure : 30,
      elevation : 4500,
      temperature : 80,
      dragCoefficient : 0.295,
      airDensity : 1.2,
      bulletArea : .000048,

      url:'https://sciencing.com/calculate-bullet-trajectory-5185428.html',

      reduxVelocity : "input",
      reduxMass : "input",
      reduxRange:"input",

      perfectTime : " 3* range / velocity",
      velocityMeters : "Velocity / 3.28084",
      massKilograms : "Mass / 15432.4",
      /////     
    }
  }
  render(){
    return (
      <div>
        This is where the outputs will go.
        <h1>Bullet Drop(in):{3*this.state.reduxRange/this.state.velocityMeters} </h1>
        <h1>Wind Shift(in): </h1>
        <h1>Velocity at Impact(fps): </h1>
        <h1>Energy at Impact(in): </h1>
        <h1>Vertical MOA Correction: </h1>
        <h1>Horizontal MOA Correction: </h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    state:state
  }
}

export default connect(mapStateToProps)(Outputs)