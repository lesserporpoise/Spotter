import React,{Component} from 'react'
import {connect} from 'react-redux'

class Outputs extends Component{
  constructor(props){
    super(props)
    this.state={
      g:32.1740,
      drop:0,
      shift:0,
      finalVelocity:0,
      finalEnergy:0,
      comeUp:0,
      windage:0,
    }
  }

  makeDaNumbers(){
      let bcx = (1-this.props.bc)/50;
      let gtokg = 0.00006479891;
      let fpstomps = 0.3048;
      let flightTime = ((this.props.range*3)/this.props.velocity);
      let downer = (((.5*this.state.g)*Math.pow(flightTime,2))*12)
      this.setState({drop:downer});
      let vertMoa = downer/((this.props.range*1.047)/100)
      this.setState({comeUp:vertMoa})
      let windDrift = ((this.props.range*(this.props.wSpeed*.15))/100)
      this.setState({shift:windDrift})
      let horizMoa = windDrift/((this.props.range*1.047)/100)
      this.setState({windage:horizMoa})
      let bulletTime = this.props.range*3/this.props.velocity;
      let bulletDecay = (100-(bulletTime*(bcx*this.props.range)))/100;
      let finalVelocity = bulletDecay*this.props.velocity
      this.setState({finalVelocity})
      let newMass = this.props.mass*gtokg
      let finalEnergy = newMass * Math.pow(this.props.velocity * fpstomps,2)
      this.setState({finalEnergy})

  }

  render(){
    return (
      <div className='outputMaster'>
        <div className='outputButtonHolder'>
          <button className="spreadButton" onClick={()=>{this.makeDaNumbers()}}>Calculate</button>
        </div>
        <div className='outputChild child'>
          <div className='outputMini'>
            <div className='outputSub sub'>Bullet Drop(in):</div>
            <div className='outputSub sub'>{this.state.drop.toFixed(2)}</div>
          </div>
          <div className='outputMini'>
            <div className='outputSub sub'>Wind Shift(in):</div>
            <div className='outputSub sub'>{this.state.shift.toFixed(2)}</div>
          </div>
          <div className='outputMini'>
            <div className='outputSub sub'>Impact Velocity(fps):</div>
            <div className='outputSub sub'>{this.state.finalVelocity.toFixed(2)}</div>
          </div>
          <div className='outputMini'>
            <div className='outputSub sub'>Impact energy(J):</div>
            <div className='outputSub sub'>{this.state.finalEnergy.toFixed(2)}</div>
          </div>
          <div className='outputMini'>
            <div className='outputSub sub'>Vertical MOA:</div>
            <div className='outputSub sub'>{this.state.comeUp.toFixed(2)}</div>
          </div>
          <div className='outputMini'>
            <div className='outputSub sub'>Horizontal MOA:</div>
            <div className='outputSub sub'>{this.state.windage.toFixed(2)}</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    velocity:state.cardData.vm,
    range:state.range,
    bc:state.cardData.bc,
    mass:state.cardData.mass,
    wSpeed:state.windSpeed,
    wDirection:state.windDirection
  }
}

export default connect(mapStateToProps)(Outputs)
