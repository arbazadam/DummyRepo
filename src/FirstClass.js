import React from 'react'

class FirstClass extends React.Component
{
	
render()
{
return(
<div>
<h1>This is my first component</h1>
<p>Hope everything is fine with you</p>
</div>
);
}
}

class NewComponent extends React.Component
{
	
	render()
	{
		return <h2>This is my react practise</h2>
	}
}

class TestComponent extends React.Component
{
	
	render()
	{
		return <h2>This is a part of TestExport</h2>
	}
}

export default TestComponent;
export {FirstClass,NewComponent};