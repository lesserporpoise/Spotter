import React, { Component } from 'react'
import {connect} from 'react-redux'
import {revert,newCard} from '../../ducks/reducer'
import axios from 'axios'

class Constants extends Component {
  constructor(props){
    super(props)
    this.state={
      userid:1,
      desIn:'?',
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

  autoDux(){
    console.log('wussup')
    let {userid,desIn,massIn,vMIn,bCIn} = this.state
    this.props.newCard({
      userid:userid,
      loadid:this.props.cardData.loadid,
      designation:desIn,
      mass:massIn,
      vm:vMIn,
      bc:bCIn});
  }
  
  changeHandler1(val){
    this.setState({desIn:val});
  }
  changeHandler2(val){
    this.setState({massIn:val});
  }
  changeHandler3(val){
    this.setState({vMIn:val});
  }
  changeHandler4(val){
    this.setState({bCIn:val});
  }

  render() {
    let {designation, mass, vm, bc} = this.props.cardData
    return (
      <div className="constantMaster shifty">
        <div className="constantButtons">
            <button className="constantButton" onClick={()=>this.clearFields()}>Reset</button>
            <button className="constantButton" onClick={()=>this.save()}>Save</button>
            <button className="constantButton" onClick={()=>this.saveNew()}>Save New</button>
        </div>
        <div className="constantChild child">
          <div className="constantMini">
            <div className="constantSub sub">
              Name:
            </div>
              <input className="constantInput" placeholder="enter a name..." onBlur={()=>this.autoDux()} onChange={(e)=>this.changeHandler1(e.target.value)}/>
            <div className="constantSub sub">
              {this.state.desIn !== '?'? this.state.desIn:designation}
            </div>
          </div>
          <div className="constantMini">
            <div className="constantSub sub">
              Mass:
            </div>
              <input className="constantInput" placeholder="mass in grains..." onBlur={()=>this.autoDux()} onChange={e=>this.changeHandler2(e.target.value)}/>
            <div className="constantSub sub"> 
              {this.state.massIn !== 0? this.state.massIn:mass}
            </div>
          </div>
          <div className="constantMini">
            <div className="constantSub sub">
              Velocity:
            </div>
              <input className="constantInput" placeholder="velocity in fps..." onBlur={()=>this.autoDux()} onChange={e=>this.changeHandler3(e.target.value)}/>
            <div className="constantSub sub">
              {this.state.vMIn !== 0? this.state.vMIn:vm}
            </div>
          </div>
          <div className="constantMini">
            <div className="constantSub sub">
              Ballistic Co:
            </div>
              <input className="constantInput" placeholder="0.0 - 1.0..." onBlur={()=>this.autoDux()} onChange={e=>this.changeHandler4(e.target.value)}/>
            <div className="constantSub sub">
              {this.state.bCIn !== 0? this.state.bCIn:bc}
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
    canSave:state.canSave
  }
}

export default connect(mapStateToProps,{revert,newCard})(Constants)
