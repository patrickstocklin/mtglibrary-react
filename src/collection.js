import React, { Component } from 'react'
import './collection.css'

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCollection: this.props.selectedCollection,
      //Set to empty and figure out how to mutate after selectedCollection is changed
      listOfCards: [{"name":"Arclight Phoenix", "price":"30"},{"name":"Leyline of the Void", "price":"20"}]
    }
  }

  render () {
    
    const listOfCards = this.state.listOfCards.map(
      (card) => 
      <tr key={card.name}>
        <td>{card.name}</td>
        <td>${card.price}</td>
      </tr>
    );

    /*
      Use this.props to automatically rerender component when
      parent's state changes
     */
    return (
        <div className='collection-container'>
          <p>{this.props.selectedCollection}</p>
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
