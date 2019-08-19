import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      textfield: '',
      randomfield : 'Is it Magic Time?',
      cardName: '',
      usd: 0.00,
      usdFoil: 0.00,
      cardimg: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    console.log('it is a handled click');
    console.log(this.state.textfield);
    axios.get('/card/' + this.state.textfield)
      .then(response => this.setState({
              randomfield: this.state.textfield,
              cardName: response.data.id,
              usd: response.data.price.usd,
              usdFoil: response.data.price.usd_foil,
              cardimg: response.data.image_uris.small
            })
      )
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({textfield: event.target.value});
  }

  handleSubmit() {
    this.setState({randomfield: 'You Clicked Me, now Call a Function'});
  }

  render () {
    return (
      <div className='app__container'>
        <div className='app__container'>
          <input placeholder="Search..." onChange={this.handleChange}/>
        </div>
        <div className='button__container' onTouchStart={this.handleClick}>
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
        </div>
        <div className='card_container'>
          <p>{this.state.textfield}</p>
          <p>Card Id: {this.state.cardName}</p>
          <p>Price:  ${this.state.usd}</p>
          <p>Price (foil): ${this.state.usdFoil}</p>
        </div>
        <img alt="" src={this.state.cardimg}/>
      </div>
    )
  }
}

export default App
