import React from 'react'
import Nav from '../nav/Nav'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div className='headerMaster'>   
      <div className='headerChild'>
        <Link to='/'><h1 className='headerLogo'>
          SPOTTER
        </h1></Link>
      </div>
      <Nav/>
    </div>
  )
}
