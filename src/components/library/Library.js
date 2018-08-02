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
            <div>
                <Link to="/myloads"><button>My Loads</button></Link>
                Library Component
                <h1>{this.props.defaultData.map((val,y)=>
                <div key={y}>
                  <DefaultCard
                  loadid=       {val.loadid} 
                  designation=  {val.designation}
                  mass=         {val.mass} 
                  vm=           {val.vm} 
                  bc=           {val.bc}/>
                </div>)}</h1>
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

