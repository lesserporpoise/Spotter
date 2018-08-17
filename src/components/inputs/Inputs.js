import React, { Component } from 'react'
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
      <div className="inputMaster shifty">
        <div className="inputChild child">
          <div className="inputMini">
            <div className="inputSub sub">
              Target Range
            </div>
            <input placeholder="range in yards..." onChange={(e)=>this.props.ducksRange(e.target.value)}/>
            <div className="inputSub sub">
              {this.props.range}
            </div>
          </div>
          <div className="inputMini">
            <div className="inputSub sub">
              Wind Speed
            </div>
            <input placeholder="wind in mph..." onChange={(e)=>this.props.ducksWind(e.target.value)}/>
            <div className="inputSub sub">
              {this.props.windSpeed}
            </div>
          </div>
        </div>
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