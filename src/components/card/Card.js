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
    <div>
      <Link to="/form">
      <div onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.yesSave()}}>
        <p>-------------------------------------------------------</p>
        <br/>
        <h1>Designation: {designation}</h1>
        <h2>Mass: {mass}</h2>
        <h2>Muzzle Velocity:{vm}</h2>
        <h2>Ballistic Coefficient:{bc}</h2>
        <button onClick={()=>this.props.byeByeCard(loadid)}>Delete</button>
        <br/>
        <p>-------------------------------------------------------</p>
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
  
export default connect(mapStateToProps,{fillForm,yesSave})(Card)