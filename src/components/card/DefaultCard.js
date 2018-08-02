import React from 'react'

export default (props) => {
  return (
    <div>
        <p>------------------Hello, This is Dog!------------------</p>
        <h1>Designation: {props.designation}</h1>
        <h2>Mass: {props.mass}</h2>
        <h2>Muzzle Velocity:{props.vm}</h2>
        <h2>Ballistic Coefficient:{props.bc}</h2>
        <button>Edit</button>
        <p>-------------------------------------------------------</p>

    </div>
  )
}
  