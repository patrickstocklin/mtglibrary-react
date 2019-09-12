import React, { Component } from 'react'
import './library.css'
import Dropdown from './dropdown';

class Library extends Component {
  constructor() {
    super();

    this.state = {
      collections: ['collections to be returned'],
      collectionData: 'collectionDataToBeReturned'
    }
    this.getCollectionsCallback = this.getCollectionsCallback.bind(this);
  }

  getCollectionsCallback(dataFromCollection) {
    this.setState({ collectionData: dataFromCollection});
  }

  render () {
    return (
        <div className='library-container'>
          <h1>Library</h1>
          <Dropdown getCollectionsCallback={this.getCollectionsCallback}></Dropdown>
          <br></br>
          <br></br>
          <br></br>
          {this.state.collectionData}
        </div>
    )
  }
}

export default Library
