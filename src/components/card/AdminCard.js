import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {fillForm,} from '../../ducks/reducer'

 class AdminCard extends Component {
   constructor(props){
   super(props)
   this.state={}
   }
   
  render() {
    const {userid,designation,mass,vm,bc,loadid} = this.props;
    return (
      <div>
        <div>
            <Link to="/form">
                <div onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc})}}>
                    <h1>UserId: {userid}</h1>
                    <h1>LoadId: {loadid}</h1>
                    <h1>Designation: {designation}</h1>
                    <h2>Mass: {mass}</h2>
                    <h2>Muzzle Velocity:{vm}</h2>
                    <h2>Ballistic Coefficient:{bc}</h2>
                    </div>
            </Link>
        </div>
      
      
      </div> 
    )
  }
}

function mapStateToProps(state){
    return{
      cardData:state.cardData
    }
  }

export default connect(mapStateToProps,{fillForm})(AdminCard)