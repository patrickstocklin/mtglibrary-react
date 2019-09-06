import React, { Component } from 'react'
import './library.css'
import axios from 'axios'

class Library extends Component {
  constructor() {
    super();
  }

  render () {
    return (
        <div className='library-container' >
          <h1>Library</h1>
        </div>
    )
  }
}

export default Library
