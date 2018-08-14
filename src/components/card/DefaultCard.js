import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fillForm,noSave} from '../../ducks/reducer'

class DefaultCard extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    const {userid,designation,mass,vm,bc,loadid} = this.props
    return(
    <div>
      <Link to="/form">
      <div onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.noSave()}}>
        <h1>Designation: {designation}</h1>
        <h2>Mass: {mass}</h2>
        <h2>Muzzle Velocity:{vm}</h2>
        <h2>Ballistic Coefficient:{bc}</h2>
      </div>
      </Link>
    </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cardData:state.cardData
  }
}

export default connect(mapStateToProps,{fillForm,noSave})(DefaultCard)