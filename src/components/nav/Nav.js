import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div className="navMaster">
      <Link to="/form"><button className="navButton">Form</button></Link>
      <Link to="/"><button className="navButton">Cards</button></Link>
    </div>
  )
}
