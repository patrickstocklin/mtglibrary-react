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
        <td>{card.name}</td>
        <td>${card.price.usd}</td>
      </tr>
    );

    //Do sum here

    /*
      Use this.props to automatically rerender component when
      parent's state changes
     */
    return (
        <div className='collection-container'>
          { this.props.selectedCollection ? (
            <table>
            <tr key="Header">
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
