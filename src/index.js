import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Search from './Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const routing = (  
  <Router>  
    <div className='Header'>
      <div className='HeaderDiv'>
      <ul>
        <li>  
          <Link to="/">Home </Link>  
        </li>      
        <li>
          <Link to="/search">Search </Link>  
        </li>  
      </ul>   
      </div> 
      <Route exact path="/search" component={Search} />  
      <Route exact path="/" component={Home} />  
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
