import React from 'react'
import {Link} from 'react-router-dom'

export default function Library(){
  return (
    <div>
      <Link to="/myloads"><button>My Loads</button></Link>
      Library Component
    </div>
  )
}
