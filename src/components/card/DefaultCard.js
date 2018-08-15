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
    <div className='cardMaster'>
      <div>
        <Link to="/form">
        <div onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.noSave()}}>
          <h1 className='cardItem'>Designation: {designation}</h1>
          <h1 className='cardItem'>Mass: {mass}</h1>
          <h1 className='cardItem'>Muzzle Velocity:{vm}</h1>
          <h1 className='cardItem'>Ballistic Coefficient:{bc}</h1>
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

export default connect(mapStateToProps,{fillForm,noSave})(DefaultCard)