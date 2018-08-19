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
    const {userid,designation,mass,vm,bc,loadid,imgurl} = this.props
    const bgStyle = {
      backgroundImage: `url(${imgurl})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '20px 0',
    };
    return(
    <div className='cardMaster'>
        <Link to="/form">
        <div className='cardChild' onClick={()=>{this.props.fillForm({userid,loadid,designation,mass,vm,bc});this.props.noSave()}}
                                   style={bgStyle}>
          <div className='cardItem marv'>{designation}</div>
          <div className='cardItem marv'>Mass: {mass}</div>
          <div className='cardItem marv'>Muzzle Velocity:{vm}</div>
          <div className='cardItem marv'>Ballistic Coefficient:{bc}</div>
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