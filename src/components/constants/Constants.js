import React, { Component } from 'react'
import Inputs from '../inputs/Inputs'
import {connect} from 'react-redux'
import {revert,newCard} from '../../ducks/reducer'
import axios from 'axios'

class Constants extends Component {
  constructor(props){
    super(props)
    this.state={
      userid:1,
      desIn:'',
      massIn:0,
      vMIn:0,
      bCIn:0,
    }
  }

  clearFields(){
    this.props.revert();
  }

  save(){
    let {userid,desIn,massIn,vMIn,bCIn} = this.state
    this.props.newCard({
      userid:userid,
      loadid:this.props.cardData.loadid,
      designation:desIn,
      mass:massIn,
      vm:vMIn,
      bc:bCIn});
      
    this.props.canSave?
      axios.put(`/spotter/api/update/${this.props.cardData.loadid}`,{
        desIn:desIn?desIn:this.props.cardData.designation,
        massIn:massIn?massIn:this.props.cardData.mass,
        vMIn:vMIn?vMIn:this.props.cardData.vm,
        bCIn:bCIn?bCIn:this.props.cardData.bc,
        userid})
      :
      axios.post(`/spotter/api/newload`,{
        userid:userid,
        desIn:desIn?desIn:this.props.cardData.designation,
        massIn:massIn?massIn:this.props.cardData.mass,
        vMIn:vMIn?vMIn:this.props.cardData.vm,
        bCIn:bCIn?bCIn:this.props.cardData.bc})
  }

  saveNew(){
    let {userid,desIn,massIn,vMIn,bCIn} = this.state
    axios.post(`/spotter/api/newload`,{
      userid:userid,
      desIn:desIn?desIn:this.props.cardData.designation,
      massIn:massIn?massIn:this.props.cardData.mass,
      vMIn:vMIn?vMIn:this.props.cardData.vm,
      bCIn:bCIn?bCIn:this.props.cardData.bc})
  }
  
  changeHandler1(val){
    this.setState({desIn:val})
  }
  changeHandler2(val){
    this.setState({massIn:val})
  }
  changeHandler3(val){
    this.setState({vMIn:val})
  }
  changeHandler4(val){
    this.setState({bCIn:val})
  }

  render() {
    let {designation, mass, vm, bc} = this.props.cardData
    return (
      <div className="constantBox">
        <div className="constantButtons">
          <button onClick={()=>this.clearFields()}>Reset Constants</button>
          <button onClick={()=>this.save()}>Save Constants</button>
          <button onClick={()=>this.saveNew()}>Save as New</button>
        </div>
        <div className="constantMini">
          <div>
            Designation:
          </div>
            <input placeholder="Designation" onChange={e=>this.changeHandler1(e.target.value)}/>
          <div>
            {this.state.desIn !== ''? this.state.desIn:designation}
          </div>
        </div>
        <div className="constantMini">
          <div>
            Mass:
          </div>
            <input placeholder="Mass" onChange={e=>this.changeHandler2(e.target.value)}/>
          <div> 
            {this.state.massIn !== 0? this.state.massIn:mass}
          </div>
        </div>
        <div className="constantMini">
          <div>
            Muzzle Velocity:
          </div>
          <div>
            <input placeholder="Muzzle Velocity" onChange={e=>this.changeHandler3(e.target.value)}/>
          </div>
          <div>
            {this.state.vMIn !== 0? this.state.vMIn:vm}
          </div>
        </div>
        <div className="constantMini">
        <div>
          Ballistic Coefficient:
          </div>
          <input placeholder="Ballistic Coefficient" onChange={e=>this.changeHandler4(e.target.value)}/>
          <div>
          {this.state.bCIn !== 0? this.state.bCIn:bc}
          </div>
        </div>
        <Inputs/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cardData:state.cardData,
    canSave:state.canSave
  }
}

export default connect(mapStateToProps,{revert,newCard})(Constants)
