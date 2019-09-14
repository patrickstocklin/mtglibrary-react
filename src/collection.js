import React, { Component } from 'react'
import './collection.css'

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //init to null from library
      selectedCollection: this.props.selectedCollection,
      //init to [] from library
      listOfCards: this.props.listOfCards
    }
  }

  render () {
    const listOfCards = this.props.listOfCards.map(
      (card) => 
      <tr key={card.name}>
        <td><img alt="" src={card.image_uris.small}/></td>
        <td>{card.name}</td>
        <td>${card.price.usd}</td>
      </tr>
    );

    //Do sum here
    const sumOfCardPrices = parseFloat(this.props.listOfCards.reduce(
      (cardA, cardB) => (cardA + cardB.price.usd), 0
    )).toFixed(2);

    /*
      Use this.props to automatically rerender component when
      parent's state changes
     */
    return (
        <div className='collection-container'>
          { this.props.selectedCollection ? (
            <table>
            <tr key="Footer">
              <td></td>
              <td>Total</td>
              <td>${sumOfCardPrices}</td>
            </tr>
            <tr key="Header">
              <td>Card Image</td>
              <td>Card</td>
              <td>Price (USD)</td>
            </tr>
            {listOfCards}
            </table>
            ):
            (null)
          }
        </div>
    )
  }
}

export default Collection
