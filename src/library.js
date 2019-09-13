import React, { Component } from 'react'
import './library.css'
import Dropdown from './dropdown';
import Collection from './collection';

//TODO also invoke a GET collections here when getCollectionsCallback is invoked and pass to Collections

class Library extends Component {
  constructor() {
    super();

    this.state = {
      collections: ['collections to be returned'],
      collectionData: 'collectionDataToBeReturned',
      selectedCollection: null
    }
    this.getCollectionsCallback = this.getCollectionsCallback.bind(this);
  }

  getCollectionsCallback(selectedCollection) {
    /* 
      Trailing function forces a mutated State to occur immediately
     */
    this.setState({ selectedCollection: selectedCollection}, () => {});
  }

  render () {
    return (
        <div className='library-container'>
          <h1>Library</h1>
          <Dropdown getCollectionsCallback={this.getCollectionsCallback}></Dropdown>
          <br></br>
          <br></br>
          <br></br>
          <Collection selectedCollection={this.state.selectedCollection}></Collection>
          
        </div>
    )
  }
}

export default Library
