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
      <div onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.yesSave()}}>
      <Link to="/form">
        <h1 className='cardItem'>Designation: {designation}</h1>
        <h1 className='cardItem'>Mass: {mass}</h1>
        <h1 className='cardItem'>Muzzle Velocity:{vm}</h1>
        <h1 className='cardItem'>Ballistic Coefficient:{bc}</h1>
      </Link>
        <div className='deleteBox'>
          <button onClick={()=>this.props.byeByeCard(loadid)}>Delete</button>
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