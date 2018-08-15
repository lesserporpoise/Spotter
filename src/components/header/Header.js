import React from 'react'
import Nav from '../nav/Nav'

export default () => {
  return (
    <div className='headerMaster'>   
      <div className='headerChild'>
        <h1 className='headerLogo'>
          SPOTTER
        </h1>
      </div>
      <Nav/>
    </div>
  )
}
