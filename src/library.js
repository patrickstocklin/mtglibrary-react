import React, { Component } from 'react'
import './library.css'
import axios from 'axios'

class Library extends Component {
  constructor() {
    super();

    this.state = {
      collections: 'Collections To Be Discovered'
    }
    this.getCollections = this.getCollections.bind(this);
  }

  getCollections() {
    axios.get('/collection/all')
      .then(response => this.setState({
              collections: response.data
            })
      );
    console.log(this.state.collections);
  }


  render () {
    return (
        <div className='library-container' >
          <h1>Library</h1>
          <br></br>
          <button onClick={this.getCollections}>
            Discover Collections
          </button>
          <p>{this.state.collections}</p>
        </div>
    )
  }
}

export default Library
