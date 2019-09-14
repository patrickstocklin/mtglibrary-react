import React, { Component } from 'react'
import './library.css'
import Dropdown from './dropdown';
import Collection from './collection';
import axios from 'axios'

class Library extends Component {
  constructor() {
    super();

    this.state = {
      collections: ['collections to be returned'],
      collectionData: 'collectionDataToBeReturned',
      selectedCollection: null,
      listOfCards: []
    }
    
    this.getCollectionsCallback = this.getCollectionsCallback.bind(this);
  }

  getCollectionsCallback(selectedCollection) {
    /* 
      Trailing function forces a mutated State to occur immediately
     */
    axios.get('/collection/' + selectedCollection + '/card/all')
      .then(response => this.setState({ selectedCollection: selectedCollection, listOfCards : response.data.cards}, () => {}));
  }

  render () {
    return (
        <div className='library-container'>
          <h1>Library</h1>
          <Dropdown getCollectionsCallback={this.getCollectionsCallback}></Dropdown>
          <br></br>
          <br></br>
          <br></br>
          <Collection selectedCollection={this.state.selectedCollection} listOfCards={this.state.listOfCards}></Collection>
          
        </div>
    )
  }
}

export default Library
