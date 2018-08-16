import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fillForm,yesSave} from '../../ducks/reducer'
import {Link} from 'react-router-dom'


class Card extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  
  render(){
    const {userid,designation,mass,vm,bc,loadid} = this.props;
    return(
    <div className='cardMaster'>
      <div className='cardChild' onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.yesSave()}}>
      <Link to="/form">
        <div className='cardItem'>{designation}</div>
        <div className='cardItem'>Mass: {mass}</div>
        <div className='cardItem'>Muzzle Velocity:{vm}</div>
        <div className='cardItem'>Ballistic Coefficient:{bc}</div>
      </Link>
        <div className='deleteBox'>
          <button className="cardDelete" onClick={()=>this.props.byeByeCard(loadid)}>Delete</button>
        </div>
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
  
export default connect(mapStateToProps,{fillForm,yesSave})(Card)