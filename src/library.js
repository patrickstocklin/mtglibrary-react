import React, { Component } from 'react'
import './library.css'
import Dropdown from './dropdown';
import axios from 'axios'

class Library extends Component {
  constructor() {
    super();

    this.state = {
      collections: ['collections to be returned'],
      collectionData: 'collectionDataToBeReturned'
    }
    this.getCollections = this.getCollections.bind(this);
    this.getCollectionsCallback = this.getCollectionsCallback.bind(this);
  }

  getCollections() {
    axios.get('/collection/all')
      .then(response => this.setState({
              collections: response.data.collections
            })
      );
    console.log(this.state.collections);
  }

  getCollectionsCallback(dataFromCollection) {
    this.setState({ collectionData: dataFromCollection});
  }


  render () {
    return (
        <div className='library-container' >
          <h1>Library</h1>
          <br></br>
          <button onClick={this.getCollections}>
            Discover Collections
          </button>
          {this.state.collections.map(collection => <div>{collection}</div>)}
          <br></br>
          <Dropdown callbackFromParent={this.getCollectionsCallback}></Dropdown>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {this.state.collectionData}
        </div>
    )
  }
}

export default Library
