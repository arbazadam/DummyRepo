import React,{Component} from 'react'
class MyComponent extends React.Component
{
    
    abc=(x)=>
    {
        const a=x;
        return a;
    }
    render()
    {
        return(
        <h2>{this.abc('hey')}</h2>
        );
    }
}

export default MyComponent;