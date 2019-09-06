import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import Home from './home';
import Search from './search';
import Library from './library';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const routing = (  
  <Router>  
    <div className='app'>
      <div className='header-div'>
      <ul>
        <li>  
          <Link className='header-link' to="/">Home</Link>  
        </li>      
        <li>
          <Link className='header-link' to="/search">Search</Link>  
        </li>
        <li>
          <Link className='header-link' to="/library">Library</Link>  
        </li>  
      </ul>   
      </div> 
      <Route exact path="/" component={Home} />  
      <Route exact path="/search" component={Search} />  
      <Route exact path="/library" component={Library} />
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
