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
        <Link to="/form">
        <div className='cardChild' onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.noSave()}}>
          <div className='cardItem'>{designation}</div>
          <div className='cardItem'>Mass: {mass}</div>
          <div className='cardItem'>Muzzle Velocity:{vm}</div>
          <div className='cardItem'>Ballistic Coefficient:{bc}</div>
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