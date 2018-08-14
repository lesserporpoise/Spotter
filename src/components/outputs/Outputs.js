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
      let downer = ((.5*this.state.g)*Math.pow(flightTime,2))
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
      <div className='outputBox'>
        <div className='outputMini'>
          <button onClick={()=>{this.makeDaNumbers()}}>Calculate</button>
        </div>
        <div className='outputMini'>
          <h1>Bullet Drop(in):{this.state.drop}</h1>
        </div>
        <div className='outputMini'>
          <h1>Wind Shift(in):{this.state.shift}</h1>
        </div>
        <div className='outputMini'>
          <h1>Velocity at Impact(fps):{this.state.finalVelocity}</h1>
        </div>
        <div className='outputMini'>
          <h1>Energy at Impact(joules):{this.state.finalEnergy}</h1>
        </div>
        <div className='outputMini'>
          <h1>Vertical MOA Correction:{this.state.comeUp}</h1>
        </div>
        <div className='outputMini'>
          <h1>Horizontal MOA Correction:{this.state.windage}</h1>
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
