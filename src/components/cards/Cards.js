import React, { Component } from 'react'
import {Link} from 'react-router-dom'


// Working to get the routing set up here so that the paths display on click. 
// Basically when you link to one, it should show one, or the other, never both
// but at least one at all times.

export default class Cards extends Component {
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
