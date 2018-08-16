import React, {Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import DefaultCard from '../card/DefaultCard'

class Library extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div className='cardUpOne'>
                <div className='linkHolder'>
                    <Link to="/myloads"><button className="linkPair">My Loads</button></Link>
                </div>
                <div className="cardTainer">{this.props.defaultData.map((val,y)=>
                <div className="cardBox" key={y}>
                  <DefaultCard
                  loadid=       {val.loadid} 
                  designation=  {val.designation}
                  mass=         {val.mass} 
                  vm=           {val.vm} 
                  bc=           {val.bc}/>
                </div>)}</div>
            </div>
        )
    }
}

  


function mapStateToProps(state){
  return{
    defaultData:state.defaultData
  }
}

export default withRouter(connect(mapStateToProps,null)(Library))

