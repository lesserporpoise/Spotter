import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import AdminCard from '../card/AdminCard'
import axios from 'axios'
import {yesSave,noSave} from '../../ducks/reducer'

class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
            adminData:[]
        }
    }

    componentDidMount(){
        axios.get(`/spotter/api/adminloads`).then(response=>{this.setState({adminData:response.data});console.log(response)})
    }

  render() {
    return (
      <div className='cardUpOne'>
        <div className="cardTainer">{this.props.defaultData?this.props.defaultData.map((val,y)=>
            <div className="cardBox" key={y}>
                  <AdminCard
                  loadid=       {val.loadid} 
                  designation=  {val.designation}
                  mass=         {val.mass} 
                  vm=           {val.vm} 
                  bc=           {val.bc}
                  save=         {this.noSave}
                  byeByeCard=   {this.deleteCard}/>
            </div>):"woopsie..."}
        </div>
        <div className="cardTainer">{this.state.adminData[0]?this.state.adminData.map((val,y)=>
            <div className="cardBox" key={y}>
                  <AdminCard
                  userid=       {val.userid}
                  loadid=       {val.loadid} 
                  designation=  {val.designation}
                  mass=         {val.mass} 
                  vm=           {val.vm} 
                  bc=           {val.bc}
                  save=         {this.yesSave}
                  byeByeCard=   {this.deleteCard}/>
            </div>):"woopsie..."}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
    return{
        defaultData:state.defaultData
    }
}

export default withRouter(connect(mapStateToProps,{yesSave,noSave})(Admin))