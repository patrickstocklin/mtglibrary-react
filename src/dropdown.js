import React, { Component } from 'react'
import './dropdown.css'
import axios from 'axios'

class Dropdown extends Component {
  /*
     Props:
       getCollectionCallback(collectionName)
   */
  constructor(props) {
    super(props);

    this.state = {
      buttonText: 'Library',
      displayMenu: false,
      collections: [],
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.getCollections = this.getCollections.bind(this);
    this.setCollection = this.setCollection.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();

    /*
      Make Axios call to get available collections from Spring App
      Set state's Collections that will be fetched by index and passed back
     */
    this.getCollections();
    this.setState({ collections: [{"name":"pat"},{"name":"nate"}]});

    this.setState({ 
      displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(event) {
    this.setState({ 
      displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  getCollections() {
    /*
      Make Spring App return a list of objects that are as { "name" : String }
      and store to state's collections
     */
    axios.get('/collection/all')
      .then(response => this.setState({
              collections: response.data.collections
            })
      );
    console.log(this.state.collections);
  }

  setCollection(value) {
    /*
      Call props.getCollectionsCallback to tell parent component to pass
      selected collection to parent's child component 
     */
    this.props.getCollectionsCallback(this.state.collections[value].name);

    /*
      Set Button Text to selected collection
     */
    this.setState({ 
      buttonText: this.state.collections[value].name }, () => {
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