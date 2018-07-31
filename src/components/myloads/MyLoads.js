import React from 'react'
import {Link} from 'react-router-dom'

export default function MyLoads(){
  return (
    <div>
      <Link to="/library"><button>Library</button></Link>
      MyLoads Component
    </div>
  )
}
