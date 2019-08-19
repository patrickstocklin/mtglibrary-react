import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      textfield: '',
      buttonfield: 'Card Name',
      randomfield : 'Is it Magic Time?',
      cardId: '',
      usd: '',
      usdFoil: '',
      cardimg: ''
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    //this.handleAddCard = this.handleAddCard.bind(this);
  }

  handleSearchClick() {
    axios.get('/card/' + this.state.textfield)
      .then(response => this.setState({
              randomfield: this.state.textfield,
              cardId: 'Card ID: ' + response.data.id,
              usd: 'Price: $' + response.data.price.usd,
              usdFoil: 'Price (foil): $' + response.data.price.usd_foil,
              cardimg: response.data.image_uris.small
            })
      )
  }

  handleSearchChange(event) {
    console.log(event.target.value);
    this.setState({
      buttonfield: event.target.value,
      textfield: event.target.value
    });
  }

  handleAddCard() {
    //axios call to add card to DB
  }

  render () {
    return (
      <div className='app__container'>
        <div className='App-header'>
          Magic: The Gathering
        </div>
        <div className='search__container'>
          <br></br>
          <input className='search__bar' 
            placeholder="Enter Card Name" 
            onChange={this.handleSearchChange}
          />
          <br></br>
          <button className='button' onClick={this.handleSearchClick}>
            Search
          </button>
        </div>
        <div className='cardinfo__container'>
          <div className='cardimage__container'>  
            <img alt="" src={this.state.cardimg}/>
          </div>
          <div className='carddata__container'>
            <p>{this.state.cardId}</p>
            <p>{this.state.usd}</p>
            <p>{this.state.usdFoil}</p>
            <br></br>
            <br></br>
            <br></br>
            {this.state.cardId && <button className='addcardbutton' >
              Add me
            </button>}
          </div>
        </div>
        <div className='App-footer'>
          Trap Lord Season Begins
        </div>
      </div>
    )
  }
}

export default App
