import React, { Component } from 'react'
import './library.css'
import Dropdown from './dropdown';
import Collection from './collection';
import axios from 'axios'

//TODO also invoke a GET collections here when getCollectionsCallback is invoked and pass to Collections

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
    // this.getListOfCards = this.getListOfCards.bind(this);
  }

  getCollectionsCallback(selectedCollection) {
    /* 
      Trailing function forces a mutated State to occur immediately
     */
    // axios.get('/collection/' + selectedCollection + '/card/all')
    //   .then(function (response) {
    //      console.log("1." + response.data.cards[0].name);
    //      this.setState({ selectedCollection: selectedCollection, listOfCards : response.data.cards}, () => {});
    //   });

    // this.setState({ selectedCollection: selectedCollection, listOfCards: [{"name":"Arclight Phoenix", "price":"30"},{"name":"Leyline of the Void", "price":"20"}] }, () => {});
    this.setState({ selectedCollection: selectedCollection, listOfCards: [{"name":"Arclight Phoenix", "price":"30"},{"name":"Leyline of the Void", "price":"20"}] }, () => {});
    // console.log(this.state.selectedCollection);
    // console.log(this.state.listOfCards);
    //var cardList = 
    // this.getListOfCards(selectedCollection);
    // console.log("3." + this.state.listOfCards);
    // this.getListOfCards(selectedCollection).then((listOfCards) => (this.setState({ listOfCards: listOfCards })));
    // this.setState({ listOfCards: this.getListOfCards(selectedCollection) }, () => {});
    // this.setState({ listOfCards: cardList }, () => {});
  }

  // getListOfCards(index) {
  //   console.log("1." + this.state.listOfCards);
  //   axios.get('/collection/' + index + '/card/all')
  //     .then(function (response) {
  //        console.log("2." + response.data.cards[0].name);
  //        this.setState({ listOfCards : response.data.cards}, () => {});
  //     });
  // }

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
