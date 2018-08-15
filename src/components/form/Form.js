import React, { Component } from 'react'
import Constants from '../constants/Constants'

// maybe turn this into a grid holder? not sure how that would work exactly,
// but maybe we can play with that.

export default class Form extends Component {
  render() {
    return (
      <div className='formMaster'>
        <Constants/>
      </div>
    )
  }
}

