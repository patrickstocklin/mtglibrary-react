import React, { Component } from 'react'
import './dropdown.css'

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: 'Library',
      displayMenu: false,
      collections: [],
      collectionContent: ''
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.setCollection = this.setCollection.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    //Set available collections here
    this.setState({ collections: [{"name":"pat"},{"name":"nate"}]});

    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(event) {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  setCollection(value) {
    this.setState({ 
      buttonText: this.state.collections[value].name,
      //Set collection content here w/ axios call, learn to pass back to parent component
      collectionContent: this.state.collections[value].name }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }


  render() {
    const listCollection = this.state.collections.map(
      (d, idx) => <li onClick={() => this.setCollection(idx)} key={d.name}>{d.name}</li>
    );

    return (
      <div className = 'dropdown'>
        <div className= 'dropdown-button' onClick={this.showDropdownMenu}>{this.state.buttonText}</div>
        
        { this.state.displayMenu ? (
        <ul>
          {listCollection}
        </ul>

        ):
        (null)
        }

        { this.state.collectionContent }
      </div>
      );
  }

}

export default Dropdown