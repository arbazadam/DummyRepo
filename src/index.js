	import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';	
import './index.css';
import App from './App';
import Admin from './Admin';
import User from './User';
import Notfound from './Notfound';
import MyComponent from './MyComponent';
import functionalComponent from './functionalComponent';
import King from './King'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
     
       <Route exact path="/" component={App} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/cs" component={MyComponent} />
        <Route path="/cb" component={functionalComponent} />
        <Route path="/king" component={King} />
     
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
