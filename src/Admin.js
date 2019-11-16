/*React Router Admin */

import React from 'react';

class Admin extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			username:'asian'
		};
	}
	mno=()=>{
		this.setState(
		{username:'arbaz'});
		document.getElementById('xyz').innerHTML=this.state.username
	}
render()
{
return(
<div>
<h1>Admin Class Component</h1>
<div id='xyz'>Asian</div>
<button onClick={this.mno}>Click</button>
</div>
);
}
}

export default Admin;

