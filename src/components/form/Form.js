import React, { Component } from 'react'
import Constants from '../constants/Constants'

export default class Form extends Component {
  render() {
    return (
      <div>
        This is the Form View
        <button>Save Changes</button>
        <button>Save as New Card</button>
        <Constants/>
      </div>
    )
  }
}
