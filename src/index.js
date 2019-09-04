import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const routing = (  
  <Router>  
    <div className='Header'>  
      <h1>My React Header</h1>
      <ul>
        <li>  
          <Link to="/home">Home</Link>  
        </li>  
        <li>  
          <Link to="/">App</Link>  
        </li>  
      </ul>    
      <Route exact path="/" component={App} />  
      <Route path="/home" component={Home} />  
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
