import React, {Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {pullTableU} from '../../ducks/reducer'
import axios from 'axios'
import Card from '../card/Card'

class MyLoads extends Component{
    constructor(props){
        super(props)
        this.state={}
        this.deleteCard = this.deleteCard.bind(this)
    }

    deleteCard(id){
      axios.delete(`/spotter/api/delete/${id}`).then(response=>this.props.pullTableU(response.data)).catch((err)=>console.log(err))}

    

    render(){
      console.log(this.props)
        return(
            <div className='cardUpOne'>
                <div className='linkHolder'>
                  <Link to="/library"><button className="linkPair">Library</button></Link>
                </div>
                <div className="cardTainer">{this.props.userData.map((val,y)=>
                <div className="cardBox" key={y}>
                  <Card
                  loadid=       {val.loadid} 
                  designation=  {val.designation}
                  mass=         {val.mass} 
                  vm=           {val.vm} 
                  bc=           {val.bc}
                  byeByeCard=   {this.deleteCard}/>
                </div>)}</div>
            </div>
        )
    }
}

  


function mapStateToProps(state){
  return{
    userData:state.userData
  }
}

export default withRouter(connect(mapStateToProps,{pullTableU})(MyLoads))

