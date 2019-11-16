import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component
{
    constructor(props)
    {
    super(props);
    this.state={username:''};
}
handle()
{
    this.setState({username:'prakash'});
}
render()
{
    return(
        <div className='container'>
<input type="text" id="name" className='form-control' style={a}></input>
<input type="password" id="password" className='form-control' ></input>
<input type="text" value={this.state.username}className='form-control'></input>
<div><p id='check'></p></div>
</div>
    );
}
}
const a=
{
margin:20,
}



export default Form;