import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div className="navBox">
      <button>this will be the nav pop out button</button>
      <Link to="/form"><button>Form</button></Link>
      <Link to="/"><button>Cards</button></Link>
    </div>
  )
}
