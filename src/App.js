		import React from 'react';
		import  {FirstClass} from './FirstClass.js'// We can import it individually as well as altogether
		import {NewComponent} from './FirstClass.js'
		import {TestComponent as t}  from './FirstClass.js'// Renaming the default export syntax
		import {Link} from 'react-router-dom'
		import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

const x={
		color:'red',
		fontSize:'20'
	}
const App=() =>
(
    <div>
	<div className='jumbotron'>
	<h1>Hello Arbaz</h1>
	</div>
      <h1 style={x}>Hello React Developer</h1>
	  <FirstClass />
	  <NewComponent />
	  <t />
	  <ul>
	  
	  <li><Link to="/">Home</Link></li>
	  <li><Link to="/user">User</Link></li>
	  <li><Link to="/admin">Admin</Link></li>
	  <li><Link to="/form">Form</Link></li>
	  </ul>
    </div>
	);
  



export default App;
