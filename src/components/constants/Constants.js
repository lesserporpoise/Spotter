import React, { Component } from 'react'
import Inputs from '../inputs/Inputs'
import {connect} from 'react-redux'

class Constants extends Component {
  constructor(props){
    super(props)
    this.state={
      massIn:0,
      vMIn:0,
      bCIn:0
    }
  }

  changeHandler1(val){
    this.setState({massIn:val})
  }
  changeHandler2(val){
    this.setState({vMIn:val})
  }
  changeHandler3(val){
    this.setState({bCIn:val})
  }

  // there are some things that need to happen here.  
  //1. there needs to be a clear all fields function. all fields cleared
  //2. there needs to be a edit functionality.        fields shift from locked to can edit
  //3. there needs to be a save function.             (PUT)
  //4. there needs to be a save as new function.      (POST)

  componentDidMount(){
    this.setState({
      massIn:this.props.mass,
      vMIn:this.props.vm,
      bCIn:this.props.bc
    })
  }



  render() {
    let {designation, mass, vm, bc} = this.props.cardData
    return (
      <div>
        <input value={designation?designation:"Designation"}/>
        <br/>
        <input value={mass?mass:"Mass"} onChange={e=>this.changeHandler1(e.target.value)}/>
        <input value={vm?vm:"Muzzle Velocity"} onChange={e=>this.changeHandler2(e.target.value)}/>
        <input value={bc?bc:"Ballistic Coefficient"} onChange={e=>this.changeHandler3(e.target.value)}/>
        <Inputs/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cardData:state.cardData
  }
}

export default connect(mapStateToProps,null)(Constants)
