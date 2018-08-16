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
      <div className='linkHolder cardSuperBox'>
        <Link to="/myloads"><button className="cardNavButton">MyLoads</button></Link>
        <Link to="/library"><button className="cardNavButton">Library</button></Link>
        <Link to="/admin"><button className="cardNavButton">Admin</button></Link>
      </div>
      
    )
  }
}

export default Cards
