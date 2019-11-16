import React from 'react';

const a=
{
textColor:'red',
textAlign:'center'
}
class Notfound extends React.Component
{
render()
{
return(
<h1 style={a}>404 Wrong path</h1>
);
}
}

export default Notfound;