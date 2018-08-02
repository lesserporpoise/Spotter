import React, { Component } from 'react'
import {Link} from 'react-router-dom'




class Cards extends Component {
  constructor(props){
    super(props)
    this.state={
      input:""
    }
  }

  render() {
    return (
      <div>
        This is the Cards View
        <Link to="/myloads"><button>MyLoads</button></Link>
        <Link to="/library"><button>Library</button></Link>
      </div>
      
    )
  }
}

export default Cards
